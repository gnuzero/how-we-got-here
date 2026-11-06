---
title: "Matrice sistolice"
weight: 65
date: 2026-01-01
draft: false
phase: "10 — Hardware AI modern"
series_index: 64
aliases:
  - /posts/58-systolic-arrays/
  - /posts/64-systolic-arrays/
tags: []
summary: "Datele pulsează printr-o grilă de MAC-uri — specializezi tot cipul pentru matmul (TPU)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram + hand-worked 2x2 cycle table"
---

Capitolul 57 a arătat de ce înmulțirea de matrice merită siliciu dedicat. Acest capitol arată *cum* arată o arhitectură organizată în jurul acelei observații: o **matrice sistolică** (*systolic array*) — o grilă de elemente de procesare (PE) simple, de tip multiply-accumulate, prin care datele curg ritmic. Exemplul industrial cel mai citat este unitatea de înmulțire a matricelor din TPU-ul Google (Jouppi et al., ISCA 2017). Ideea însă e mai veche cu aproape patru decenii.

## 1. De unde vine cuvântul „sistolic”

În raportul CMU-CS-79-103, H. T. Kung și Charles E. Leiserson definesc un sistem sistolic ca pe o rețea de procesoare care calculează și transmit date ritmic prin sistem (Kung & Leiserson, „Systolic Arrays for (VLSI)”, aprilie 1978, ultima revizie decembrie 1978, Abstract, [PDF](https://eecs.harvard.edu/htk/static/files/1978-cmu-cs-report-kung-leiserson.pdf)). Ei preiau termenul medical *systole* — contracția ritmică a inimii și arterelor care pulsează sângele — și scriu, în abstract: în sistemul sistolic de calcul, „the function of a processor is analogous to that of the heart. Every processor regularly pumps data in and out, each time performing some short computation” (Kung & Leiserson, 1978, Abstract). Raportul anunță că procesorii conectați hexagonal pot face înmulțire de matrice și, surprinzător, aproape aceeași structură poate face descompunere LU (aceleași Abstract și §1). Versiunea publicată în volume apare ca „Systolic Arrays (for VLSI)” în *Sparse Matrix Proceedings 1978*, SIAM, 1979, pp. 256–282 (citată astfel de Kung, 1982, ref. 5, și de Jouppi et al., 2017, ca [Kun80] sub forma capitolului din Mead & Conway).

Patru ani mai târziu, Kung publică în *IEEE Computer* articolul de sinteză „Why Systolic Architectures?” (ianuarie 1982). Motto-ul din antet: arhitecturile sistolice „permit multiple computations for each memory access” și pot accelera probleme compute-bound fără a crește cerințele de I/O (Kung, 1982, p. 37). Metafora cardiacă e reformulată atent. Kung spune că datele curg din memoria calculatorului „in a rhythmic fashion, passing through many processing elements before [they return] to memory, much as blood circulates to and from the heart” (Kung, 1982, p. 37). Lângă Figura 1, subiectul analogiei se mută pe **memorie**: „The function of the memory in the diagram is analogous to that of the heart; it ‘pulses’ data (instead of blood) through the array of cells” (Kung, 1982, p. 39). Cele două formulări nu se contrazic: raportul din 1978 vorbește despre fiecare procesor ca pompă locală; articolul din 1982 pune inima pe memoria care alimentează tabloul. Ambele merită citate corect; parafraza populară care atribuie lui Kung 1982 propoziția „every processor regularly pumps…” e, de fapt, din abstractul Kung–Leiserson 1978.

Principiul din Figura 1 a lui Kung (1982): înlocuiești un singur PE cu un tablou de celule și obții un *throughput* mai mare **fără** a crește bandwidth-ul memoriei, cu condiția ca fiecare element de date scos din memorie să fie folosit la fiecare celulă pe care o traversează (Kung, 1982, p. 39). Asta e exact legătura cu capitolul 57 și cu zidul memoriei din capitolul 35.

## 2. Weight-stationary și output-stationary

Înainte de TPU, merită vocabularul modern de *dataflow*, ca să nu amestecăm ce stă pe loc cu ce curge.

Chen, Emer și Sze (Eyeriss, ISCA 2016) definesc:

- **Weight-stationary (WS):** fiecare pondere rămâne în fișierul de registre al PE-ului; odată adusă din DRAM, PE-ul trece prin toate operațiile care o folosesc (Chen et al., 2016, §IV.A, [PDF](https://eems.mit.edu/wp-content/uploads/2016/04/eyeriss_isca_2016.pdf)).
- **Output-stationary (OS):** acumularea fiecărui pixel / element de ieșire rămâne în PE, ca să minimizeze costul mișcării sumelor parțiale (Chen et al., 2016, §IV.B).

TPU v1, în descrierea lui Jouppi et al., încarcă ponderile de sus, le preîncarcă în unitatea de matrice, iar datele (activările) curg din stânga; un MAC pe 256 de elemente se deplasează ca un front diagonal prin matrice (Jouppi et al., 2017, text lângă Fig. 4). Software-ul are iluzia că cele 256 de intrări sunt citite deodată și actualizează instant un loc din fiecare din cele 256 de acumulatori; din perspectiva corectitudinii, software-ul nu „știe” că unitatea e sistolică, dar pentru performanță îi pasă de latența ei (Jouppi et al., 2017, același pasaj). Clasificat în taxonomia Eyeriss, acesta e un dataflow **weight-stationary** pe MXU.

## 3. Exemplu lucrat pe mână: 2×2

Exemplul de mai jos este **ilustrativ** (nu o măsurătoare pe TPU). Verificați aritmetica. Calculăm Y = X · W cu

```
X = | 1  2 |      W = | 5  6 |
    | 3  4 |          | 7  8 |
```

```
Y11 = 1·5 + 2·7 =  5 + 14 = 19
Y12 = 1·6 + 2·8 =  6 + 16 = 22
Y21 = 3·5 + 4·7 = 15 + 28 = 43
Y22 = 3·6 + 4·8 = 18 + 32 = 50
```

Deci Y = `| 19 22 | ; | 43 50 |` (confirmat independent cu NumPy pe mașina desk-ului).

### 3.1 Varianta output-stationary (un PE = un Y_ij)

Fiecare PE ține acumularea unei ieșiri. Pe k = 0,1, PE-ul pentru Y₁₁ primește pe rând perechile (x₁ₖ, Wₖ₁) — indexare 1-based pe hârtie, 0-based în tablouri:

| k | x (din linia 1 a lui X) | w (din coloana 1 a lui W) | produs | acumulat în PE_Y11 |
|--:|------------------------:|--------------------------:|-------:|-------------------:|
| 0 | 1 | 5 | 5 | 5 |
| 1 | 2 | 7 | 14 | **19** |

La fel: Y₁₂ acumulează 1·6 + 2·8 = **22**; Y₂₁ acumulează 3·5 + 4·7 = **43**; Y₂₂ acumulează 3·6 + 4·8 = **50**. Sumele parțiale nu părăsesc PE-ul — exact definiția OS din Chen et al. (2016, §IV.B).

### 3.2 Varianta weight-stationary (aceeași Y, alt trafic)

În WS, ponderile `W[k,j]` stau în `PE(k,j)`:

```
          j=0           j=1
k=0     PE00: 5       PE01: 6
k=1     PE10: 7       PE11: 8
```

Pentru linia `i=0` a lui X, unda sistolică face ca, pe coloana `j=0`, suma parțială să vadă pe rând `1·5` (în PE00) apoi `2·7` (în PE10, psum coborât), rezultând **19**. Pe coloana `j=1`: `1·6` apoi `2·8` → **22**. Pentru linia `i=1` (`[3,4]`): coloana 0 dă `3·5+4·7=43`, coloana 1 dă `3·6+4·8=50`.

Diferența față de OS nu e în Y, ci în ce rămâne pe loc: la OS stă acumularea ieșirii; la WS stă ponderea (Chen et al., 2016, §IV). Pe TPU, alegerea e WS pe o grilă mare: ponderile unei dale 256×256 sunt preîncărcate, activările curg din stânga, un front diagonal de MAC-uri traversează grila, iar acumulatorii de sub MXU țin sumele pe 32 de biți (Jouppi et al., 2017, Fig. 4 și §2). Software-ul „vede” un matmul `B×256 · 256×256`; hardware-ul e sistolic.

## 4. TPU v1: cifre din lucrarea ISCA 2017

Tot ce urmează e din Jouppi et al., „In-Datacenter Performance Analysis of a Tensor Processing Unit”, ISCA 2017 (arXiv:1704.04760), pe PDF-ul deschis integral pentru acest draft.

**Ce este.** Un ASIC custom, numit Tensor Processing Unit (TPU), desfășurat în centrele de date Google din 2015, care accelerează *inferența* (nu antrenarea) rețelelor neuronale (Jouppi et al., 2017, Abstract).

**Inima.** O unitate de înmulțire de matrice cu **65 536** MAC-uri pe 8 biți, pe o grilă **256×256**, cu un *throughput* de vârf de **92 TeraOps/s (TOPS)** și o memorie on-chip gestionată de software de **28 MiB** (Jouppi et al., 2017, Abstract). Verificare aritmetică pe cifrele din Tabelul 2: 256 × 256 MAC/ciclu × 2 operații (înmulțire + adunare) × 700 MHz ≈ 91,75 × 10¹² ops/s ≈ **92 TOPS** (Tabelul 2: 700 MHz, 92 TOPS pe 8 biți).

**Descompunerea celor 28 MiB.** Buffer-ul unificat (*Unified Buffer*) are **24 MiB**; acumulatorii sub unitatea de matrice au **4 MiB** de acumulatori pe 32 de biți (4096 vectori de 256 elemente) — 24 + 4 = 28 MiB (Jouppi et al., 2017, §2, text lângă Fig. 1–2). Produsele pe 16 biți din MAC-urile pe 8 biți se adună în acești acumulatori pe 32 de biți (aceeași secțiune).

**Proces și putere (Tabelul 2).** TPU: nod **28 nm**, **700 MHz**, TDP **75 W**, putere măsurată idle **28 W** / busy **40 W**, bandwidth către *Weight Memory* **34 GB/s**, **28 MiB** on-chip; pe serverul măsurat, 4 die-uri TPU, fiecare cu **8 GiB** DRAM de ponderi (Jouppi et al., 2017, Tabelul 2). Die-ul TPU e „≤ half the Haswell die size” (nota Tabelului 2). Haswell contemporan: 22 nm, ~662 mm²; K80: 28 nm (Tabelul 2).

**Dataflow sistolic.** Citirea unui SRAM mare consumă mult mai multă putere decât aritmetica; de aceea unitatea de matrice folosește execuție sistolică pentru a reduce citirile/scrierile în Unified Buffer, citând Kung & Leiserson / Mead–Conway și lucrări ulterioare (Jouppi et al., 2017, §2, refs. [Kun80][Ram91][Ovt15b]). Ponderile se încarcă de sus; datele vin din stânga; un front diagonal de MAC-uri traversează grila (Fig. 4).

**Instrucțiuni.** TPU e mai aproape, ca spirit, de un coprocesor FPU decât de un GPU (Jouppi et al., 2017, §2). Instrucțiunile vin de pe host pe PCIe Gen3 x16. Cinci instrucțiuni-cheie: `Read_Host_Memory`, `Read_Weights`, `MatrixMultiply/Convolve`, `Activate`, `Write_Host_Memory` (Jouppi et al., 2017, §2). `MatrixMultiply` ia o intrare B×256, o înmulțește cu o pondere constantă 256×256 și produce B×256, în B cicluri pipeline (aceeași listă).

**Ceilalți operanzi.** Când ponderile sunt pe 8 biți și activările pe 16 (sau invers), unitatea rulează la jumătate de viteză; când ambele sunt pe 16 biți, la un sfert (Jouppi et al., 2017, §2). Unitatea e proiectată pentru matrici **dense**; suportul arhitectural pentru *sparsity* a fost omis din motive de timp până la desfășurare, cu prioritate „high” pentru design-uri viitoare (Jouppi et al., 2017, §2).

**Roofline pe TPU.** Punctul de cotitură (*ridge point*) al unui die TPU e la **~1350** operații pe octet de weight memory — foarte în dreapta față de Haswell (~13) și K80 (~9) din aceleași figuri (Jouppi et al., 2017, Fig. 5–7). CNN0 atinge 86 TOPS; CNN1, deși cu intensitate mare, rulează la doar 14,1 TOPS, iar pe ciclurile active doar ~jumătate din cele 65 536 MAC-uri țin ponderi utile din cauza straturilor „shallow” (Jouppi et al., 2017, §4). Patru din șase aplicații sunt limitate de bandwidth pe TPU; crescând memoria de 4×, performanța medie crește de ~3× (Jouppi et al., 2017, highlights și Fig. 11).

**Față de contemporani.** Pe workload-ul de inferență măsurat, TPU e în medie circa **15×–30×** mai rapid decât GPU-ul K80 sau CPU-ul Haswell din aceleași centre de date, cu TOPS/Watt circa **30×–80×** mai mare; cu memoria GDDR5 a K80 pe TPU, TOPS atins s-ar triple și TOPS/Watt ar urca spre ~70× față de GPU și ~200× față de CPU (Jouppi et al., 2017, Abstract). Acestea sunt cifrele din abstractul ISCA; Tabelul 6 și Fig. 8 detaliază mediile pe die.

**De ce nu „doar un GPU cu mai multe MAC-uri”.** K80, contemporanul din 2015, e subutilizat la inferență din cauza limitelor de latență și e doar puțin mai rapid decât Haswell pe acel regim (Jouppi et al., 2017, highlights). TPU mizează pe determinism și pe o grilă sistolică mare, nu pe cache-uri și multithreading care ajută throughput-ul mediu mai mult decât latența garantată la percentila 99 (Abstract).


## 4b. De ce „inimă” pe memorie, nu pe ALU

Kung (1982, Fig. 1) opune explicit un singur PE legat de memorie — plafonat de I/O — unui tablou de PE-uri prin care același flux de date e „pompat” și refolosit. Dacă memoria livrează 10 milioane de octeți/s și fiecare operație cere cel puțin doi octeți, un singur PE nu poate depăși ~5 milioane de operații/s, „no matter how fast the special-purpose system can operate” (Kung, 1982, p. 38). Cu un tablou sistolic, același bandwidth alimentează multe MAC-uri pentru că fiecare octet e folosit de mai multe ori pe drum. TPU v1 e instanțierea din 2015 a aceleiași diagrame: 34 GB/s spre weight memory, dar 92 TOPS pe die — adică, la vârf, de ordinul a mii de operații pe octet de ponderi, consistent cu ridge-ul de ~1350 (Jouppi et al., 2017, Tabelul 2 și Fig. 5).

Familia de design-uri pentru convoluție din Kung (1982, §„A family of systolic designs…”) — B1/B2 (broadcast), F (fan-in), R1/R2, W1/W2 — arată că „sistolic” nu e o singură schemă de cablare, ci o familie: ce stă, ce se mișcă, în ce direcție și cu ce viteză. Taxonomia modernă WS/OS (Chen et al., 2016) e nepoata aceleiași întrebări.

## 5. Limitele matricelor sistolice (din aceleași surse)

1. **Utilizare.** Chiar pe un MXU 256×256, straturile a căror dimensiune nu se potrivește cu 256 lasă MAC-uri goale; CNN1 e exemplul din hârtie (Jouppi et al., 2017, §4). Creșterea grilei la 512×512 *înrăutățește* media pe workload-ul lor — fragmentare internă bidimensională; exemplul LSTM1 cu 600×600: pe 256×256 trebuie 9 pași de tiling (18 µs), pe 512×512 doar 4 pași dar fiecare de 4× mai lung (32 µs) (Jouppi et al., 2017, §7).
2. **Sparsity.** TPU v1 nu are suport arhitectural pentru sparsitate; e omis intenționat (Jouppi et al., 2017, §2). Pe un tablou sistolic dens, zerourile tot ocupă „bătăi” de ceas dacă nu ai hardware care să le sară.
3. **Bandwidth.** Roofline-ul TPU are panta lungă: fără destulă intensitate pe octeții de ponderi, cele 92 TOPS rămân pe hârtie (Fig. 5; Fig. 11: memoria e butonul cu cel mai mare impact mediu).
4. **Flexibilitate.** Kung (1982) avertiza deja: sistemele specializate merită când forma e regulată și compute-bound; sarcinile I/O-bound cer mai mult bandwidth, nu mai multe celule (Kung, 1982, p. 39). Un cip sistolic „pariază” pe matmul. Un GPU cu tensor cores (capitolul 55) păstrează un schelet SIMT general și pune matmul-ul ca unitate specializată *înăuntru* — alt punct pe axa eficiență ↔ flexibilitate. Nu citez aici TOPS de Tensor Core: cifrele acelea țin de capitolul 55 și de whitepaper-urile NVIDIA (Volta/Hopper), nu de Jouppi et al. Comparația cantitativă din *acest* capitol rămâne TPU v1 vs Haswell vs K80 din Jouppi et al. (2017).

## 6. Generații TPU ulterioare

Nu apar în acest capitol. Nu am folosit aici documentații primare (paper / datasheet) pentru TPU v2/v3/v4 etc.; orice cifră din rezumate secundare ar fi fost neverificabilă pe desk. Generațiile ulterioare rămân în afara scopului acestui text — comparația cantitativă din capitol rămâne TPU v1 vs Haswell vs K80 din Jouppi et al. (2017).

## 7. Ce să rețineți

1. „Sistolic” vine din *systole*: Kung & Leiserson (1978) pun inima pe procesor; Kung (1982) pune inima pe memoria care pulsează datele prin tablou — citați sursa exactă.
2. Scopul clasic: mai multe calcule pe fiecare acces la memorie, pe probleme compute-bound (Kung, 1982).
3. WS vs OS decid ce economisești la energie (Chen et al., 2016); TPU v1 e WS pe MXU (Jouppi et al., 2017).
4. Cifrele TPU v1 de reținut din abstract + Tabelul 2: 256×256 MAC pe 8 biți, 65 536 MAC, 92 TOPS @ 700 MHz, 28 MiB on-chip (24+4), 28 nm, ~40 W busy, 34 GB/s spre weight memory, desfășurat din 2015.
5. Limitele apar în aceeași lucrare: utilizare, sparsitate absentă, bandwidth, potrivirea dimensiunilor la 256.

**Ușa de ieșire:** Kung & Leiserson, CMU-CS-79-103 (1978/79) și Kung, „Why Systolic Architectures?” (1982), apoi Jouppi et al., ISCA 2017 — citiți §2 (microarhitectura) și Fig. 4–5 (dataflow + roofline) înainte să credeți orice slide de marketing despre „TPU”.

