---
title: "Zidul memoriei"
weight: 42
date: 2026-01-01
draft: false
phase: "5 — Magistrala și arhitectura sistemului"
series_index: 41
aliases:
  - /posts/35-the-memory-wall/
  - /posts/40-the-memory-wall/
  - /posts/41-the-memory-wall/
tags: []
summary: "Viteza procesoarelor și latența DRAM s-au despărțit timp de decenii: cache-ul ascunde prăpastia, nu o închide, iar în epoca LLM zidul se măsoară în bandwidth"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown + roofline plot with H100 ridge point"
---

Capitolul 34 s-a încheiat cu o ruptură: generațiile DDR au crescut în *bandwidth* (lățime de bandă, adică câți octeți pe secundă poate livra memoria), dar *latența* DRAM (cât aștepți până sosește primul octet cerut) aproape că nu s-a mișcat. În acest capitol ne îndepărtăm de detaliile unui modul de memorie și privim întregul sistem. Ruptura aceea, văzută de sus, are un nume: **zidul memoriei** (în engleză, *memory wall*). Nu e o curiozitate istorică. Este, foarte probabil, principalul motiv pentru care un model de limbaj mare (LLM) generează text cu viteza pe care o vedeți și nu de zeci de ori mai repede.

Vom merge în patru pași: (1) ce au observat Wulf și McKee în 1995 și de ce argumentul lor e aproape aritmetic; (2) diferența dintre latență și bandwidth și de ce o problemă nu se rezolvă cu leacul celeilalte; (3) modelul *roofline*, care împarte orice program în „limitat de memorie” sau „limitat de calcul”; (4) ce înseamnă toate acestea pentru GPU-uri, HBM și inferența LLM, cu un exemplu numeric construit doar din cifre de catalog și din presupuneri marcate explicit.

---

## 1. O notă scurtă despre ceva „evident”

În decembrie 1994, Wm. A. Wulf și Sally A. McKee, de la University of Virginia, au scris o notă de cinci pagini publicată în martie 1995 în *ACM SIGARCH Computer Architecture News*, vol. 23, nr. 1, pp. 20–24, sub titlul „Hitting the Memory Wall: Implications of the Obvious” (Wulf & McKee, 1995, [doi:10.1145/216585.216588](https://doi.org/10.1145/216585.216588)). Chiar autorii o prezintă, în primul paragraf, ca pe o observație despre ceva ce „știau” fără să înțeleagă cu adevărat (Wulf & McKee, 1995, [PDF](https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf)).

Ideea lor centrală: atât viteza microprocesoarelor, cât și viteza DRAM cresc exponențial, dar exponentul procesoarelor e mult mai mare, iar diferența dintre două exponențiale divergente crește și ea exponențial (Wulf & McKee, 1995). Altfel spus, nu e vorba de o prăpastie care se lărgește liniar, pe care o poți astupa cu ceva mai mult efort ingineresc în fiecare an. E o prăpastie care se dublează mereu.

### Ecuația timpului mediu de acces

Pentru a cuantifica, autorii pornesc de la o formulă clasică din arhitectura calculatoarelor, timpul mediu de acces la memorie (Wulf & McKee, 1995):

```
t_avg = p × t_c + (1 − p) × t_m
```

unde `t_c` este timpul de acces la cache, `t_m` timpul de acces la DRAM, iar `p` probabilitatea ca datele să fie găsite în cache (rata de *hit*) (Wulf & McKee, 1995). Formula pare banală. Capcana stă în termenul `(1 − p) × t_m`: oricât de mic ar fi `(1 − p)`, el nu este zero, așa că, pe măsură ce `t_c` și `t_m` se depărtează, `t_avg` crește și performanța sistemului se degradează (Wulf & McKee, 1995).

### Unde se lovește zidul

Wulf și McKee fixează și pragul. Ei preiau din manualul lui Hennessy și Patterson estimarea că 20–40% dintre instrucțiuni accesează memoria și aleg, conservator, 20%, adică o instrucțiune din cinci (Wulf & McKee, 1995, citând [Hen90]). Prin urmare, zidul este atins când `t_avg` depășește timpul a cinci instrucțiuni: din acel moment performanța e determinată în întregime de viteza memoriei, iar un procesor mai rapid nu mai scurtează timpul real de execuție (Wulf & McKee, 1995).

Apoi fac o proiecție. Presupun o rată de *miss* obligatorie (*compulsory miss*) de cel mult 1%, un nivel următor de memorie de patru ori mai lent decât cache-ul, o creștere a vitezei DRAM de 7% pe an și estimarea lui Baskett de 80% pe an pentru performanța microprocesoarelor (Wulf & McKee, 1995). Cu aceste ipoteze, numărul mediu de cicluri per acces la memorie ar fi 1,52 în 2000, 8,25 în 2005 și 98,8 în 2010, deci zidul ar fi la „mai puțin de un deceniu” distanță (Wulf & McKee, 1995).

Merită subliniat ce *nu* spun aceste cifre. Sunt proiecții construite pe ipoteze declarate, nu măsurători, iar autorii insistă că valorile exacte nu schimbă concluzia de bază (Wulf & McKee, 1995). Rata de 80% pe an pentru procesoare nu s-a menținut după mijlocul anilor 2000, odată cu sfârșitul creșterii frecvenței pe un singur nucleu (capitolul 36 al cărții tratează acest „zid al frecvenței de ceas”). Valoarea notei nu stă în predicția anului 2010, ci în forma argumentului.

### De ce nu există o ieșire ușoară

Partea cea mai incomodă a notei este lista de remedii pe care autorii le resping. Ei calculaseră deja cu un cache perfect, deci un cache mai mare sau mai inteligent nu ajută. Presupuseseră deja că bandwidth-ul memoriei e folosit complet, deci nici prefetching-ul nu ajută (Wulf & McKee, 1995). Concluzia lor: vom lovi un zid în îmbunătățirea performanței „dacă nu se schimbă ceva fundamental” (Wulf & McKee, 1995).

---

## 2. Latență versus bandwidth: două probleme diferite

În limbajul de zi cu zi, „memorie rapidă” amestecă două mărimi distincte, iar zidul memoriei nu poate fi înțeles fără să le separăm.

- **Latența** este timpul dintre momentul în care procesorul cere o adresă și momentul în care primul octet ajunge înapoi. Se măsoară în nanosecunde sau în cicluri de ceas.
- **Bandwidth-ul** este debitul susținut: câți octeți pe secundă pot curge între memorie și procesor odată ce transferurile sunt în curs. Se măsoară în GB/s sau TB/s.

O analogie utilă, pur didactică: latența este timpul în care un camion parcurge drumul de la depozit la fabrică, iar bandwidth-ul este numărul de camioane care sosesc pe oră. Poți lărgi autostrada la zece benzi (mai mult bandwidth) fără ca vreun camion să ajungă mai repede (aceeași latență).

### De ce s-a mișcat bandwidth-ul și latența nu

Capitolul 10 al cărții a descris celula DRAM 1T1C: un tranzistor și un condensator care păstrează o sarcină electrică foarte mică. Citirea cere un amplificator de sens (*sense amplifier*) care detectează diferența minusculă de tensiune pe *bitline* și o amplifică până la un nivel logic. Lee et al. (HPCA 2013) arată de ce latența DRAM a rămas aproape constantă în timp ce capacitatea a crescut: pentru a ține jos costul pe bit, multe celule împart același amplificator de sens printr-un bitline lung, iar capacitatea parazită a bitline-ului este „sursa dominantă” a latenței de acces ([Lee et al., „Tiered-Latency DRAM…”, HPCA 2013](https://users.ece.cmu.edu/~omutlu/pub/tldram_hpca13.pdf)). Patterson (CACM 2004) rezumă tiparul pe patru tehnologii — inclusiv DRAM — prin regula empirică: în timpul în care bandwidth-ul se dublează, latența se îmbunătățește cel mult de 1,2–1,4 ori ([Patterson, „Latency lags bandwidth”, CACM 47(10), 2004](https://doi.org/10.1145/1022594.1022596)).

Bandwidth-ul, în schimb, se poate crește *fără* să învingi această limită: mai multe bănci care lucrează în paralel, mai multe canale, prefetch mai lat, transfer pe ambele fronturi ale ceasului (*double data rate*). Standardele JEDEC arată această strategie la vedere. Pentru DDR5 (JESD79-5), comunicatul JEDEC din 14 iulie 2020 anunța lansarea la **4,8 Gb/s** pe pin — cu 50% peste viteza de sfârșit de viață a DDR4, de 3,2 Gb/s — și spunea că DDR5 „suportă dublul bandwidth-ului” față de DDR4 ([JEDEC, 2020](https://www.jedec.org/news/pressreleases/jedec-publishes-new-ddr5-standard-advancing-next-generation-high-performance)). (Cifra de 6,4 Gb/s pe pin apare la HBM3 în același an calendaristic, nu ca viteză de lansare a DDR5; amendamentele ulterioare ale JESD79-5 au definit viteze mai mari, inclusiv 6,4 Gb/s.) Pentru HBM3 (JESD238), comunicatul JEDEC din 27 ianuarie 2022 descrie dublarea ratei pe pin față de HBM2, până la 6,4 Gb/s, „echivalentul a 819 GB/s per dispozitiv”, și dublarea numărului de canale independente de la 8 la 16 ([JEDEC, 2022](https://www.jedec.org/news/pressreleases/jedec-publishes-hbm3-update-high-bandwidth-memory-hbm-standard)).

Observați ce lipsește din ambele comunicate: o promisiune de latență mai mică pentru primul acces. Industria a vândut bandwidth, pentru că pe acela îl putea livra.

### Calculul din spatele cifrei HBM3

Cifra de 819 GB/s nu e magie. Interfața HBM3 păstrează lățimea de 1024 de biți a generațiilor anterioare, iar 6,4 Gb/s × 1024 biți / 8 biți pe octet ≈ 819 GB/s (Semiconductor Engineering, [„It's Official: HBM3 Dons The Crown Of Bandwidth King”](https://semiengineering.com/its-official-hbm3-dons-the-crown-of-bandwidth-king/), care detaliază aceeași aritmetică). E exemplul perfect pentru „lățește autostrada”: HBM nu face un singur acces mai rapid, ci pune 1024 de fire de date în paralel, foarte aproape de procesor, pe un *interposer* de siliciu (Semiconductor Engineering, op. cit.).

### Legea lui Little: legătura dintre cele două

Între latență și bandwidth există o relație simplă din teoria cozilor. Legea lui Little spune că numărul mediu de clienți într-un sistem stabil este egal cu rata de sosire înmulțită cu timpul mediu de așteptare, L = λW (Little, *Operations Research* 9(3):383–387, 1961, [doi:10.1287/opre.9.3.383](https://doi.org/10.1287/opre.9.3.383)). Aplicată la magistrala de memorie, ea dă produsul bandwidth–latență: ca să menții un anumit bandwidth în ciuda unei latențe date, trebuie să ai în zbor, simultan, un număr de octeți egal cu bandwidth × latență. (Williams, Waterman și Patterson, 2009, o folosesc în același sens când discută concurența necesară pentru a satura memoria.)

```
octeți în zbor = bandwidth × latență
```

Un exemplu *ilustrativ* (ipoteze, nu date de catalog): dacă latența ar fi 100 ns și ținta ar fi 1 TB/s, ar trebui să ai în permanență 10¹² B/s × 10⁻⁷ s = 100 000 de octeți cereri în curs. Un singur fir de execuție care așteaptă cuminte fiecare rezultat nu va ajunge niciodată acolo. De aici vin execuția *out-of-order* (capitolul 16), prefetching-ul hardware și, la extrem, modelul GPU cu zeci de mii de fire care se ascund reciproc latența (capitolele 53–55).

---

## 3. Ce face cache-ul și unde se oprește

Ierarhia de cache (capitolul 15) este răspunsul principal al industriei la zidul memoriei: păstrezi *working set*-ul (datele folosite des) în SRAM mic și rapid, lângă nucleu, ca procesorul să plătească rar latența completă a DRAM. Funcționează pentru că majoritatea programelor au *localitate*: localitate temporală (folosești din nou ce ai folosit recent) și localitate spațială (folosești ce e lângă ce ai folosit).

Formula lui Wulf și McKee arată însă și limita: cache-ul crește `p`, nu micșorează `t_m` (Wulf & McKee, 1995). Dacă `t_m`, măsurat în cicluri de procesor, crește mai repede decât poate crește `p`, termenul `(1 − p) × t_m` câștigă până la urmă (Wulf & McKee, 1995).

Cache-ul încetează să ajute în trei situații tipice:

1. **Working set mai mare decât cache-ul.** Datele nu încap, deci sunt evacuate înainte de reutilizare.
2. **Acces fără localitate.** Grafuri mari, tabele de dispersie (*hash tables*), căutări aleatoare în baze de date: fiecare acces poate fi un *miss*.
3. **Date folosite o singură dată.** Dacă fiecare octet adus din DRAM e folosit într-o singură operație, nu există nimic de „reutilizat”, iar cache-ul devine doar o stație de tranzit. Acesta este, după cum vom vedea, exact cazul generării de text de către un LLM.

Execuția out-of-order ascunde o parte din rest, suprapunând lucru independent peste un *miss*. Nici ea nu închide prăpastia. Ambele tehnici o *ascund* pentru programele prietenoase cu cache-ul sau care au destul lucru independent.

---

## 4. Modelul roofline: limitat de memorie sau limitat de calcul?

În 2009, Samuel Williams, Andrew Waterman și David Patterson au publicat în *Communications of the ACM*, vol. 52, nr. 4, „Roofline: An Insightful Visual Performance Model for Multicore Architectures” (Williams, Waterman & Patterson, 2009, [doi:10.1145/1498765.1498785](https://doi.org/10.1145/1498765.1498785)). Premisa lor reia direct zidul memoriei: în viitorul previzibil, bandwidth-ul memoriei din afara cipului va fi adesea resursa care limitează performanța sistemului ([CACM, 2009](https://cacm.acm.org/research/roofline-an-insightful-visual-performance-model-for-multicore-architectures/)).

### Intensitatea operațională

Mărimea cheie e **intensitatea operațională**, definită de autori ca numărul de operații per octet de trafic DRAM, unde octeții numărați sunt cei care ajung la memoria principală *după* filtrarea prin ierarhia de cache (Williams et al., 2009). Autorii preferă intenționat acest termen în locul lui „arithmetic intensity”, pentru că acela măsura de obicei traficul dintre procesor și cache, nu dintre cache și DRAM (Williams et al., 2009). În practică, multe texte despre GPU-uri folosesc „arithmetic intensity” cu sensul lui Williams. Mai jos folosim *intensitate* în sensul roofline.

```
intensitate (FLOP/octet) = operații efectuate / octeți transferați din DRAM
```

### Acoperișul

Modelul leagă într-un grafic bidimensional performanța în virgulă mobilă, intensitatea operațională și performanța memoriei (Williams et al., 2009). Performanța atinsă e mărginită de minimul dintre două limite:

```
performanța_max = min( vârful_de_calcul ,  bandwidth_DRAM × intensitate )
```

Pe un grafic log–log, a doua limită e o linie înclinată, iar prima una orizontală. Împreună formează „acoperișul” care dă numele modelului (Williams et al., 2009):

```
 FLOP/s (log)
   ^
   |                 ______________________  ← vârful de calcul (plafonul plat)
   |                /
   |               /   zona compute-bound
   |              /
   |             /  ← panta = bandwidth DRAM
   |            /
   |  zona     /
   |  memory- /
   |  bound  /
   |        /
   +-------+----------------------------------> intensitate (FLOP/octet, log)
           ^
     punctul de cotitură (ridge point)
```

*(Schemă calitativă, fără valori; forma urmează descrierea din Williams et al., 2009.)*

Un *kernel* (o rutină de calcul) cu intensitatea la stânga punctului de cotitură „lovește” partea înclinată a acoperișului și este **memory-bound**. La dreapta, lovește plafonul plat și este **compute-bound** (Williams et al., 2009). **Punctul de cotitură** (*ridge point*) este intensitatea minimă necesară pentru a atinge performanța maximă a mașinii (Williams et al., 2009, [CACM aprilie 2009, p. 78](https://mags.acm.org/communications/200904?pg=78)).

### Ce au găsit autorii

Rezultatul cel mai grăitor e aproape o confirmare empirică a lui Wulf și McKee. Pentru cele două sisteme x86 studiate, punctele de cotitură erau 4,4 și 6,7 FLOP/octet, însă intensitățile operaționale ale celor 16 combinații kernel–calculator variau între 0,25 și 1,64, cu mediana 0,60 FLOP/octet (Williams et al., 2009, [CACM, p. 78](https://mags.acm.org/communications/200904?pg=78)). Cu alte cuvinte, toate programele reale analizate stăteau sub panta memoriei, nu sub plafonul de calcul. Autorii mai notează că punctul de cotitură a prezis performanța mai bine decât frecvența de ceas sau performanța de vârf (Williams et al., 2009, op. cit.).

Lecția practică: înainte să întrebi „câte TFLOPS are cipul?”, întreabă „câte FLOP face programul meu pentru fiecare octet adus din memorie?”.

---

## 5. Zidul memoriei în epoca AI

### Treizeci de ani mai târziu, aceeași poveste, alte exponente

În 2024, Amir Gholami și coautorii (printre ei Michael W. Mahoney și Kurt Keutzer) au publicat în *IEEE Micro* „AI and Memory Wall”, o reluare explicită a argumentului din 1995 pentru hardware-ul de AI (Gholami et al., 2024, [doi:10.1109/MM.2024.3373763](https://doi.org/10.1109/mm.2024.3373763); versiune extinsă [arXiv:2403.14123](https://arxiv.org/abs/2403.14123)). Ei raportează că, în ultimii 20 de ani, performanța de vârf (FLOPS) a hardware-ului de server a crescut cu 3,0× la fiecare doi ani, în timp ce bandwidth-ul DRAM a crescut doar cu 1,6× și cel al interconexiunilor cu 1,4× la fiecare doi ani (Gholami et al., 2024). Cumulat, asta înseamnă aproximativ 60 000× pentru FLOPS față de 100× pentru bandwidth-ul DRAM și 30× pentru interconexiuni în aceeași perioadă (Gholami et al., 2024, arXiv).

Același articol arată că numărul de parametri ai modelelor Transformer de top a crescut cu aproximativ 410× la doi ani, iar memoria unui singur accelerator doar cu aproximativ 2× la doi ani (Gholami et al., 2024, arXiv, Fig. 2a). Concluzia autorilor: lățimea de bandă a memoriei, nu calculul, a devenit principalul blocaj în aplicațiile de AI, mai ales la *serving* (rularea modelului pentru utilizatori), și poate deveni blocajul dominant pentru modelele de tip *decoder* (Gholami et al., 2024).

### HBM: răspunsul hardware

High Bandwidth Memory este răspunsul industriei pe latura de bandwidth: stive de cipuri DRAM legate vertical prin TSV (*through-silicon vias*), puse lângă procesor pe un interposer, cu o interfață foarte lată. Standardul HBM3 prevede stive de 4, 8 și 12 straturi, cu o extensie viitoare la 16 ([JEDEC, 2022](https://www.jedec.org/news/pressreleases/jedec-publishes-hbm3-update-high-bandwidth-memory-hbm-standard)). Concret, pagina de produs NVIDIA declară pentru H100 SXM 80 GB de memorie GPU cu un bandwidth de **3,35 TB/s** ([NVIDIA, pagina produsului H100](https://www.nvidia.com/en-us/data-center/h100/)). Whitepaper-ul arhitecturii Hopper descrie H100 SXM5 drept primul GPU cu memorie HBM3, menționează un cache L2 de 50 MB și dă bandwidth-ul ca „peste 3 TB/s” / „3 TB/s” de clasă, nu 3,35 ([NVIDIA, *H100 Tensor Core GPU Architecture*](https://resources.nvidia.com/en-us-hopper-architecture)). În exemplul de mai jos folosim cifra de pe pagina de produs (3,35 TB/s) împreună cu vârful dens din Tabelul 1 al whitepaper-ului; diferența față de ~3 TB/s schimbă punctul de cotitură, nu concluzia.

Aici apare zidul în forma lui modernă. Tabelul 1 din whitepaper dă pentru H100 SXM5 un vârf de **989,4 TFLOPS dens** în FP16 pe Tensor Cores și **1978,9 TFLOPS** cu funcția de *sparsity* (nota 1 a tabelului: „Effective TFLOPS / TOPS using the Sparsity feature”). Pagina de produs listează 1 979 TFLOPS pentru FP16 Tensor Core cu asterisc — este cifra *cu* sparsity, nu cea densă. Raportul dintre calculul dens și bandwidth este enorm, iar exemplul de mai jos îl transformă într-un număr.

---

## 6. Exemplu numeric: de ce generarea de text este memory-bound

**Date de catalog (verificate):**

- Vârf FP16 Tensor Core, dens, H100 SXM5: **989,4 TFLOPS** (NVIDIA, *H100 Tensor Core GPU Architecture*, Tabelul 1; coloana fără sparsity). Cu sparsity: 1978,9 TFLOPS.
- Bandwidth memorie GPU, H100 SXM: **3,35 TB/s** ([NVIDIA, pagina H100](https://www.nvidia.com/en-us/data-center/h100/)); whitepaper-ul Hopper rotunjește la „~3 TB/s”.

**Presupuneri ilustrative (NU sunt fapte despre vreun model anume):**

- (P1) Un model ipotetic cu **7 miliarde** de parametri, stocați în FP16, deci 2 octeți per parametru: 14 GB de ponderi. Cifra 7 miliarde e aleasă doar pentru aritmetică ușoară.
- (P2) Regula aproximativă larg folosită: un *forward pass* costă cam **2 FLOP per parametru per token** (o înmulțire și o adunare). Kaplan et al. (2020) estimează costul unui forward pass ca `C_forward ≈ 2N + 2·n_layer·n_ctx·d_model`; pentru modele mari termenul `2N` domină, deci ~2 FLOP per parametru per token ([Kaplan et al., „Scaling Laws for Neural Language Models”, arXiv:2001.08361](https://arxiv.org/abs/2001.08361), ec. 2.2 și Tabelul 1).
- (P3) La generare (*decode*), cu un singur utilizator (*batch* = 1), fiecare token nou cere citirea tuturor ponderilor din HBM o dată. Ignorăm KV-cache-ul, activările, overhead-ul și faptul că bandwidth-ul real atins e sub cel de catalog.

### Pasul 1: punctul de cotitură al H100

```
ridge = 989,4 × 10¹² FLOP/s  ÷  3,35 × 10¹² B/s  ≈  295 FLOP/octet
```

Ca un kernel să atingă plafonul de calcul pe H100, trebuie să facă aproximativ 295 de operații în virgulă mobilă pentru fiecare octet adus din HBM. (Dacă am folosi ~3 TB/s din whitepaper în loc de 3,35, punctul de cotitură ar fi ≈ 330 FLOP/octet — tot cu două ordine de mărime peste intensitatea de la Pasul 2.) Pentru comparație, punctele de cotitură ale sistemelor x86 din 2009 erau 4,4 și 6,7 FLOP/octet (Williams et al., 2009). Nu putem trage din aceste două puncte o lege de creștere, dar direcția e aceeași pe care o descriu Gholami et al. (2024).

### Pasul 2: intensitatea generării cu batch = 1

```
FLOP per token  = 2 × 7×10⁹       = 14 × 10⁹ FLOP     (P1, P2)
octeți per token = 14 × 10⁹ B (toate ponderile)        (P1, P3)
intensitate     = 14×10⁹ / 14×10⁹ = 1 FLOP/octet
```

Un FLOP per octet, față de un prag de aproximativ 295. Suntem adânc în zona înclinată a acoperișului.

### Pasul 3: timpul per token, după fiecare limită

```
limita de memorie: 14×10⁹ B ÷ 3,35×10¹² B/s   ≈ 4,18 ms / token  → ≈ 239 tokeni/s
limita de calcul : 14×10⁹ FLOP ÷ 989,4×10¹² FLOP/s ≈ 0,014 ms / token
```

În acest scenariu idealizat, Tensor Core-urile ar termina aritmetica unui token de aproximativ 295 de ori mai repede decât poate memoria să le livreze ponderile. Ele stau, în cea mai mare parte a timpului, și așteaptă. Plafonul teoretic de aproximativ 239 de tokeni pe secundă vine din bandwidth, nu din TFLOPS. Cifra reală ar fi mai mică, din cauza simplificărilor din (P3).

### Pasul 4: de ce ajută batching-ul și de ce nu la nesfârșit

Dacă servim `B` utilizatori simultan, ponderile sunt citite o singură dată, dar folosite pentru `B` tokeni, deci intensitatea crește aproximativ proporțional cu `B` (în modelul simplificat de mai sus):

```
intensitate ≈ B FLOP/octet   →   compute-bound abia pe la B ≈ 295
```

Asta explică de ce furnizorii de inferență grupează cererile. Totuși, fiecare cerere are propriul KV-cache (stările de atenție memorate pentru tokenii anteriori), care trebuie și el citit din HBM la fiecare pas și crește cu lungimea contextului. Batch-urile mari sunt limitate astfel atât de capacitatea memoriei, cât și de traficul suplimentar. <!-- Afirmație calitativă; sprijin general în Gholami et al., 2024 (analiza modelelor decoder). Cifre despre KV-cache: omise intenționat, neverificate. -->

### Pasul 5: contrastul cu antrenarea și cu *prefill*

Când modelul procesează un prompt lung dintr-odată (*prefill*) sau în antrenare, ponderile sunt reutilizate pe multe poziții în aceeași înmulțire de matrice, iar intensitatea poate fi mult mai mare. De aceea Gholami et al. (2024) disting între modelele *encoder* și *decoder* și arată că blocajul de bandwidth devine dominant tocmai la *decoder*-e (Gholami et al., 2024). Același cip, același model, două regimuri: unul aproape de plafonul de calcul, celălalt lipit de panta memoriei.

---

## 7. Cum se luptă industria cu zidul (fără să-l dărâme)

Toate tehnicile de mai jos atacă una dintre cele două variabile ale roofline: fie mută programul spre dreapta (mai multe FLOP per octet), fie ridică panta (mai mult bandwidth). Niciuna nu scurtează latența primului acces.

- **Mai mult bandwidth:** HBM, ilustrat aici prin dublarea ratei pe pin la HBM3 față de HBM2 ([JEDEC, 2022](https://www.jedec.org/news/pressreleases/jedec-publishes-hbm3-update-high-bandwidth-memory-hbm-standard)).
- **Mai puțini octeți per parametru:** cuantizarea (capitolul 59 al cărții). Dacă ponderile trec de la 2 octeți la 1 octet, în exemplul de mai sus traficul se înjumătățește și plafonul teoretic de tokeni pe secundă se dublează, cu aceleași presupuneri (P1–P3). Aceasta este aritmetica exemplului, nu o măsurătoare.
- **Mai puțini octeți în total:** *sparsity* structurată (capitolul 60).
- **Reutilizare mai bună on-chip:** cache L2 mare, ca cei 50 MB de pe H100 (NVIDIA, whitepaper Hopper), și kernel-uri care țin datele în memoria partajată (*shared memory*) cât mai mult.
- **Batching:** crește intensitatea, ca în Pasul 4.

Gholami et al. (2024) cer explicit o regândire a arhitecturii modelelor, a antrenării și a modului de implementare pentru a ocoli această limită (Gholami et al., 2024, rezumat).

---

## 8. Ce să rețineți

1. Zidul memoriei nu înseamnă că memoria e lentă. Înseamnă că memoria se îmbunătățește *mai încet* decât calculul, iar diferența dintre două exponențiale crește exponențial (Wulf & McKee, 1995).
2. Latența și bandwidth-ul sunt probleme diferite. Industria a crescut masiv bandwidth-ul (DDR5, HBM3; JEDEC 2020, 2022), dar latența primului acces nu a ținut pasul.
3. Cache-ul crește rata de hit, nu scurtează drumul până la DRAM (Wulf & McKee, 1995). Când datele sunt folosite o singură dată, cache-ul nu are ce salva.
4. Modelul roofline transformă discuția în aritmetică: comparați intensitatea programului cu punctul de cotitură al mașinii (Williams et al., 2009).
5. Pe un H100, punctul de cotitură calculat din cifrele de catalog este de aproximativ 295 FLOP/octet, în timp ce generarea de text cu batch = 1 are, în exemplul nostru simplificat, o intensitate de aproximativ 1 FLOP/octet. De aceea inferența LLM este memory-bound (exemplul de mai sus; context în Gholami et al., 2024).

**Ușa de ieșire:** citiți nota originală de cinci pagini a lui Wulf și McKee ([doi:10.1145/216585.216588](https://doi.org/10.1145/216585.216588)), apoi articolul roofline ([CACM, 2009](https://cacm.acm.org/research/roofline-an-insightful-visual-performance-model-for-multicore-architectures/)) și, pentru epoca LLM, „AI and Memory Wall” ([arXiv:2403.14123](https://arxiv.org/abs/2403.14123)). Următorul capitol: un zid înrudit, pe latura calculului, apărut aproape în același moment istoric.

