---
title: "De ce înmulțirea de matrice a remodelat proiectarea cipurilor"
weight: 65
date: 2026-01-01
draft: false
phase: "10 — Hardware AI modern"
series_index: 64
aliases:
  - /posts/57-why-matrix-multiply-reshaped-chip-design/
  - /posts/63-why-matrix-multiply-reshaped-chip-design/
  - /posts/64-why-matrix-multiply-reshaped-chip-design/
tags: []
summary: "La scară, calculul AI se reduce la înmulțiri de matrice — merită să specializezi siliciul pentru această formă"
image_prompt: "Infographic showing a neural network layer's forward pass as a matrix multiply mapped onto specialized hardware, clean AI hardware explainer style"
video_prompt: "20-second animation: a neural network layer computation as a matrix multiply through specialized MAC units, clean technical animation"
schematics: "Diagram: neural network layer as matrix multiply + general ALU vs specialized MAC array comparison"
---

Această fază a cărții este despre hardware construit pentru sarcinile AI moderne. Motivul pentru care proiectarea cipurilor s-a îndoit atât de tare în această direcție e mai clar odată ce spui ce înseamnă, la nivel aritmetic, un „workload AI”: mai îngust și mai mecanic decât sugerează fraza. În cea mai mare parte a ciclurilor brute, antrenare sau inferență, nu rulezi „inteligență” ca pe un program oarecare. Rulezi **înmulțiri de matrice** (*matrix multiply*, *matmul*) și acumulări (*multiply-accumulate*, MAC), la scară masivă, repetate fără încetare.

Capitolul următor (58) duce aceeași observație până la arhitectură: matricea sistolică. Aici rămânem la *de ce* a meritat să schimbi siliciul.

## 1. Ce calculează un strat

Un neuron artificial clasic e o funcție neliniară aplicată unei sume ponderate a intrărilor (Jouppi et al., „In-Datacenter Performance Analysis of a Tensor Processing Unit”, ISCA 2017, [arXiv:1704.04760](https://arxiv.org/abs/1704.04760), §1). Când aduni mulți astfel de neuroni într-un strat *fully connected* (complet conectat), fiecare ieșire e produsul scalar dintre un vector de activări și un vector de ponderi. Scrisă pe întregul strat, operația este o **înmulțire de matrice**: activările ori ponderile, urmate de o neliniaritate ieftină pe fiecare element (aceeași sursă, §1, tipul MLP).

Rețelele convoluționale (CNN) nu scapă de matmul. Ele aplică nuclee mici pe vecinătăți spațiale, dar implementările rapide „desfășoară” (*unroll*) convoluția într-un produs matrice–matrice, apoi apelează biblioteci BLAS (Chellapilla, Puri & Simard, „High Performance Convolutional Neural Networks for Document Processing”, IWFHR 2006, [HAL inria-00112631](https://inria.hal.science/inria-00112631), Abstract și §2). Tehnica e cunoscută în practică sub numele *im2col* (tokenul „im2col” nu apare în Chellapilla et al.; ei spun *unrolled convolution*): plătești memorie și copieri ca să câștigi un kernel dens de tip GEMM. Eyeriss notează, pe baza literaturii, că convoluțiile reprezintă peste 90% din operațiile unei CNN și domină timpul de rulare (Chen, Emer & Sze, „Eyeriss…”, ISCA 2016, [PDF MIT](https://eems.mit.edu/wp-content/uploads/2016/04/eyeriss_isca_2016.pdf), Abstract / Introducere).

Atenția (*attention*), nucleul Transformerelor din spatele modelelor de limbaj mari, e tot matmul la inimă. Vaswani et al. definesc atenția scalată ca

```
Attention(Q, K, V) = softmax(Q Kᵀ / √d_k) V
```

(Vaswani et al., „Attention Is All You Need”, NeurIPS 2017 / arXiv:1706.03762, ec. 1). `Q Kᵀ` este o înmulțire de matrice; produsul cu `V` este o a doua. Proiecțiile liniare care produc `Q`, `K`, `V` și cele din *multi-head attention* sunt, din nou, matmul-uri (aceeași lucrare, §3.2.2). Tabelul 1 din Vaswani et al. dă complexitatea pe strat a self-attention: O(n² · d) (Vaswani et al., 2017, Tabelul 1). Nu e o simplificare didactică: forma aritmetică a atenției *este* produsul de matrice plus un softmax.

Jouppi et al. (2017) clasifică workload-ul de inferență din centrele de date Google în trei familii — MLP, CNN, LSTM — și spun că cele șase aplicații măsurate reprezintă 95% din cererea de inferență NN din acele centre (Jouppi et al., 2017, Abstract și Tabelul 1). În toate cele trei familii, nucleul aritmetic rămâne suma ponderată: adică MAC-uri pe matrici dense.

## 2. Intensitate aritmetică: de ce matmul „țipa” după hardware special

Nu orice operație merită un cip dedicat. Kung (1982) împarte calculele în *compute-bound* și *I/O-bound*: dacă numărul total de operații e mai mare decât numărul total de elemente de intrare și ieșire, calculul e compute-bound; altfel e I/O-bound (Kung, „Why Systolic Architectures?”, *Computer* 15(1):37–46, ianuarie 1982, p. 39, [PDF Harvard](https://eecs.harvard.edu/~htk/publication/1982-kung-why-systolic-architecture.pdf)). Înmulțirea clasică matrice–matrice e exemplul lui de sarcină compute-bound: fiecare element din A e înmulțit cu o întreagă linie sau coloană din cealaltă matrice (Kung, 1982, p. 39). Adunarea a două matrici e I/O-bound: nu faci mai multe adunări decât ai elemente (aceeași pagină).

Aceeași idee, reformulată pentru epoca multicore, apare în modelul *roofline*. Williams, Waterman și Patterson definesc **intensitatea operațională** (*operational intensity*) ca număr de operații pe octet de trafic DRAM, măsurat *după* filtrarea de către ierarhia de cache (Williams, Waterman & Patterson, „Roofline…”, raport tehnic EECS-2008-134 / CACM 52(4), 2009, §3, [PDF Berkeley](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/Archive/EECS-2008-134.pdf)). Plafonul atins e minimul dintre plafonul de calcul și bandwidth × intensitate. Autorii notează explicit că, pentru unele kernel-uri — inclusiv *Dense Matrix* — intensitatea crește odată cu dimensiunea problemei (Williams et al., 2009, §5).

### Un exemplu ilustrativ (nu o măsurătoare de cip)

Fie C = A × B, cu A de dimensiune m×k și B de dimensiune k×n, în FP32 (4 octeți pe element). Numărul de operații în virgulă mobilă, numărând înmulțirea și adunarea din fiecare MAC, este 2 · m · k · n. Dacă ai citi A și B o singură dată din DRAM și ai scrie C o singură dată, traficul ar fi 4 · (m·k + k·n + m·n) octeți. Intensitatea „ideală” ar fi atunci

```
I = 2 m k n  /  [4 (m k + k n + m n)]   FLOP/octet
```

Pentru un pătrat n×n×n, I = n / (6) FLOP/octet — deci **crește liniar cu n**. (Aritmetică ilustrativă; cache-ul real și tiling-ul schimbă traficul măsurat în sensul Roofline, Williams et al., 2009, §3.) De aceea matmul-ul dens „mare” e candidat natural la specializare: cu cât matricele sunt mai mari, cu atât poți face mai multe operații pe fiecare octet adus din memorie — exact proprietatea pe care Kung o cerea sistemelor sistolice: „multiple computations for each memory access” (Kung, 1982, motto / p. 37).

Contrastul cu generarea unui token într-un LLM cu *batch* = 1, discutat în capitolul 35, e instructiv: acolo intensitatea poate cădea spre ~1 FLOP/octet când ponderile sunt citite o dată și folosite o dată. Matmul-ul dens pe matrici mari stă pe partea cealaltă a acoperișului. Același operator, două regimuri de intensitate.


O altă cale spre aceeași concluzie: energia. Chen et al. (2016) amintesc că aducerea unui datum din DRAM costă ordine de mărime mai mult decât o operație aritmetică locală (Chen et al., ISCA 2016, Introducere). Dacă un kernel face un singur FLOP pe octet, plătești energia DRAM la fiecare operație. Dacă face o mie de FLOP pe octet, energia aritmetică începe să conteze din nou — și merită să o optimizezi cu MAC-uri specializate, nu cu ALU-uri generale.

## 3. De ce un nucleu CPU „general” e scump aici

Un nucleu de CPU din fazele anterioare ale cărții e construit pentru cod secvențial arbitrar: ramificații, acces neregulat la memorie, flux de control greu de prezis. Acea generalitate costă arie și putere — predicție de ramificații, execuție *out-of-order*, cache-uri sofisticate — pe mecanisme pe care un workload dominat de o singură operație regulată nu le folosește la capacitate. Jouppi et al. (2017) rezumă contrastul pe dos: TPU-ul omitte intenționat cache-uri, *out-of-order*, multithreading, prefetch speculative etc., tocmai pentru că modelul de execuție determinist se potrivește mai bine cerințelor de latență la percentila 99 ale aplicațiilor NN de producție (Jouppi et al., 2017, Abstract). Minimalismul e „o virtute a procesoarelor domain-specific” (Jouppi et al., 2017, §5, formulare apropiată).

Odată ce matmul-ul a fost recunoscut ca ponderea dominantă a calculului AI, specializarea a devenit rentabilă: siliciu care sare peste mașinăria general-purpose și își cheltuie bugetul pe *throughput* de MAC. Nucleele tensor (*tensor cores*) din GPU (capitolul 55) încorporează ideea *în interiorul* unui GPU încă general. Capitolul următor (58) merge mai departe: specializează *întreaga* arhitectură în jurul aceleiași observații.

## 4. Reutilizarea datelor: cele trei axe

În limbajul acceleratoarelor CNN, Chen, Emer și Sze taxonomizează *dataflow*-urile după ce rămâne „staționar” lângă elementul de procesare (PE):

- **Weight-stationary (WS):** fiecare pondere de filtru rămâne în registrul local al PE-ului; se maximizează reutilizarea ponderilor (Chen et al., ISCA 2016, §IV.A).
- **Output-stationary (OS):** acumularea fiecărui pixel de ieșire rămâne în PE; se minimizează mișcarea sumelor parțiale (Chen et al., ISCA 2016, §IV.B).
- (Ei propun și *row-stationary*, specific Eyeriss; nu e necesar aici.)

De ce contează taxonomia pentru proiectarea cipului: energia de a aduce un octet din DRAM e cu ordine de mărime mai mare decât energia de a-l citi dintr-un registru on-chip (Chen et al., 2016, Introducere, citând [11–13] din lucrarea lor). Matmul-ul are trei operanzi reutilizabili — A, B și C parțial — iar alegerea care stă pe loc decide ce trafic oferi memoriei. TPU v1 alege un dataflow în care ponderile sunt încărcate dinainte și ținute, iar activările curg (Jouppi et al., 2017, Fig. 4 și textul aferent) — adică un WS pe unitatea de matrice. Detaliile sistolice apar în capitolul 58.


### Cât de „dens” e dens: un al doilea exemplu numeric

Luați un strat fully-connected care mapează 1024 de activări în 1024 de ieșiri. Matricea de ponderi e 1024×1024. Un *forward* face 2 · 1024³ ≈ 2,15 × 10⁹ FLOP (înmulțire + adunare pe fiecare MAC). În FP16, ponderile ocupă 1024² · 2 ≈ 2,1 MB; activările de intrare și ieșire, câte ~2 KB fiecare — neglijabile față de ponderi. Dacă *batch*-ul e 1 și citiți ponderile o dată din memorie, intensitatea e

```
I ≈ 2,15e9 FLOP / 2,1e6 B  ≈ 1000 FLOP/octet
```

(Exemplu ilustrativ; ignoră overhead-ul de framing, KV etc.) Pe TPU v1, punctul de cotitură al roofline-ului pe *weight memory* e ~1350 operații/octet (Jouppi et al., 2017, Fig. 5): un astfel de strat e aproape de platoul de calcul. Dacă același strat e servit cu batch B, ponderile se citesc o dată și se aplică pe B exemple, deci intensitatea crește proporțional cu B — exact mecanismul pe care Jouppi et al. îl invocă când spun că reutilizarea ponderilor pe un batch amortizează costul accesului (Jouppi et al., 2017, §1).

Schimbați problema în înmulțire matrice–vector (efectiv k mare, n = 1): intensitatea se prăbușește, pentru că nu mai reutilizați liniile din B. Kung (1982) deja separa matrice–matrice (compute-bound) de operații pe vectori care pot degenera spre I/O. De aceea acceleratoarele moderne țin pe chip dale (*tiles*) cât mai mari de ponderi și activează matmul-uri pe dale, nu pe vectori izolați (Jouppi et al., 2017, §2: tile de 64 KiB de ponderi plus unul pentru double-buffering).

### Cuantizare: de ce 8 biți pe TPU v1

Jouppi et al. (2017, §1) notează că antrenarea e aproape întotdeauna în virgulă mobilă, dar inferența acceptă adesea întregi înguști — „often just 8 bits” — după un pas de *quantization*. Ei citează estimările lui Dally ([Dal16]): înmulțirile pe întregi pe 8 biți pot costa de ~6× mai puțină energie și de ~6× mai puțină arie decât înmulțirile IEEE 754 pe 16 biți în virgulă mobilă, iar pentru adunare avantajul e ~13× la energie și ~38× la arie — **cifre raportate aici ca citate de Jouppi et al. (2017, §1), nu din PDF-ul primar [Dal16]**, care nu a fost redeschis pe desk-ul acesta.

Alegerea MAC pe 8 biți pe grila 256×256 nu e decorativă: e cum încap 65 536 de multiplicatoare pe un die ≤ jumătate din Haswell, la ~40 W busy (Jouppi et al., 2017, Abstract + Tabelul 2). Capitolul 59 al cărții tratează cuantizarea pe larg.

## 5. De la observație la siliciu: un tipar care se repetă

Povestea e de același *fel* cu pivotul superscalar → multicore (capitolul 17) și cu evoluția planar → FinFET → GAA (capitolele 47–49), dar acum la nivel de arhitectură a întregului cip: odată ce forma unui workload e bine înțeleasă și suficient de dominantă, hardware-ul specializat pentru acea formă bate hardware-ul general care o tratează ca pe un caz printre altele.

Kung (1982) formulase deja criteriul economic: un sistem specializat trebuie să aibă cost de proiectare suficient de mic încât utilitatea lui îngustă să merite; de aceea cere design „simplu și regulat”, din câteva tipuri de celule repetate (Kung, 1982, pp. 37–38). VLSI-ul anilor 1978–1982 făcea fezabile astfel de dispozitive periferice (Kung & Leiserson, „Systolic Arrays for (VLSI)”, CMU-CS-79-103, aprilie 1978 / rev. decembrie 1978, Abstract, [PDF Harvard](https://eecs.harvard.edu/htk/static/files/1978-cmu-cs-report-kung-leiserson.pdf)). Deep learning-ul anilor 2010 a livrat, în sfârșit, workload-ul suficient de regulat și suficient de valoros economic încât același tipar — MAC regulat, comunicare locală, puțin control global — să merite un ASIC de producție în centrul de date (Jouppi et al., 2017: TPU desfășurat din 2015).


## 5b. Unde se leagă de restul cărții

- Capitolul 35 (zidul memoriei) și modelul roofline explică *de ce* intensitatea contează: fără destule FLOP pe octet, nici un plafon de MAC nu se atinge (Williams et al., 2009; Jouppi et al., 2017, Fig. 5).
- Capitolele 53–55 (warps, occupancy, Tensor Cores) arată specializarea *în interiorul* unui GPU încă general — același diagnostic, alt punct pe axa flexibilitate.
- Capitolul 58 duce specializarea la capăt: o grilă sistolică pe tot die-ul de calcul.
- Capitolul 63 închide arcul algoritmic: atenția lui Vaswani et al. (2017) e forma care „trage” de hardware-ul din aceste capitole.

## 6. Ce nu spune acest capitol

- Nu spune că *orice* AI se reduce la un singur matmul. Softmax, normalizări, activări, *pooling*, scrie/citește pe host rămân; pe TPU v1 ele stau în unitatea de activare și în buffer-ul unificat, lângă MXU (Jouppi et al., 2017, Fig. 1 și lista de instrucțiuni).
- Nu spune că matmul-ul e mereu compute-bound pe mașina ta. Roofline-ul TPU are punctul de cotitură la ~1350 operații pe octet de *weight memory* — foarte în dreapta — iar patru din cele șase aplicații măsurate erau totuși limitate de bandwidth-ul memoriei pe TPU (Jouppi et al., 2017, Fig. 5 și highlights). Forma operatorului e una; regimul pe o mașină anume e altceva (vezi capitolul 35).
- Nu inventează cifre despre generații TPU ulterioare sau despre Tensor Core-uri NVIDIA: acelea apar, cu surse proprii, în alte capitole.

## 7. Ce să rețineți

1. Stratul fully-connected, convoluția desfășurată și atenția Transformer sunt, la nucleu, înmulțiri de matrice (Jouppi et al., 2017; Chellapilla et al., 2006; Vaswani et al., 2017).
2. Matmul-ul dens e compute-bound în sensul lui Kung (1982) și are intensitate care crește cu dimensiunea (Williams et al., 2009) — deci plătește specializarea.
3. Costul generalității unui CPU (sau al unui GPU foarte flexibil) e arie și energie pe mecanisme pe care acest workload nu le cere; TPU-ul arată varianta minimală (Jouppi et al., 2017).
4. Alegerea *ce rămâne staționar* (ponderi, ieșiri, …) decide traficul de memorie (Chen et al., 2016).
5. Tiparul se repetă în istoria calculatoarelor: când forma e clară, specializarea bate generalitatea pe acel colț de spațiu.

**Ușa de ieșire:** citiți Kung (1982) pentru criteriul compute-bound / I/O și pentru motto-ul „multiple computations for each memory access”; apoi Vaswani et al. (2017), ec. 1, ca să vedeți atenția ca matmul; apoi treceți la capitolul 58, unde aceeași observație devine o grilă de MAC-uri care pulsează.

