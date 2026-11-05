---
title: "Nuclee CUDA, warp-uri și ocupare"
weight: 59
date: 2026-01-01
draft: false
phase: "9 — GPU-uri și calcul paralel"
series_index: 58
tags: []
summary: "SIMT pe SM-uri și warp-uri de 32: pasul comun câștigă până la divergență, iar ocuparea ascunde așteptarea după memorie"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

Capitolul 52 a explicat *de ce* GPU-ul a pariat pe paralelism masiv. Aici coborâm la nivelul la care lucrează efectiv un inginer care scrie kernel-uri: **Streaming Multiprocessor** (SM), **warp**, **planificatorul de warp-uri** și **ocuparea** (*occupancy*). Le vom lua pe rând, cu cifre din documentația NVIDIA pe care am deschis-o integral: whitepaper-ul Tesla V100 (NVIDIA, *NVIDIA Tesla V100 GPU Architecture*, WP-08608-001_v1.1, august 2017, [PDF](https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf)), whitepaper-ul A100 (NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture*, V1.0, 2020, [PDF](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)) și ghidul de programare CUDA (NVIDIA, *CUDA Programming Guide*, Release 13.5, 31 octombrie 2026, [PDF](https://docs.nvidia.com/cuda/cuda-programming-guide/pdf/cuda-programming-guide.pdf), descărcat și accesat la 2026-11-05). Numerele de pagină de mai jos sunt cele tipărite în subsolul fiecărui document.

O precizare de vocabular: în română spunem de obicei „fir de execuție” pentru *thread*, dar în comunitatea CUDA se păstrează aproape mereu termenii englezești — *thread*, *thread block*, *warp*, *lane*, *kernel*. Îi vom păstra și noi, explicându-i.

## 1. Ierarhia: grid, bloc, warp, thread

Când lansezi un kernel CUDA, thread-urile sunt grupate în **blocuri de thread-uri** (*thread blocks*), iar blocurile formează un **grid**, conform configurației de lansare (*CUDA PG*, Release 13.5, §2.3.7, p. 74, accesat 2026-11-05). Planificatorul hardware distribuie apoi blocurile pe SM-uri; aplicația nu poate controla și nici interoga ce bloc ajunge pe ce SM, iar ordinea nu e garantată, deci corectitudinea programului nu are voie să depindă de ea (*CUDA PG*, Release 13.5, §2.3.7, p. 74, accesat 2026-11-05). Cât timp un SM are resurse libere, primește blocuri noi; când niciun SM nu mai are loc, planificatorul așteaptă să se termine blocuri deja atribuite (același loc).

În interiorul unui bloc, thread-urile sunt organizate în grupuri de **32**, numite **warp-uri** (*CUDA PG*, Release 13.5, §1.2.2.2 „Warps and SIMT”, p. 7, accesat 2026-11-05). Împărțirea e deterministă: fiecare warp conține thread-uri cu ID-uri consecutive, crescătoare, iar primul warp îl conține pe thread-ul 0; numărul de warp-uri al unui bloc este numărul de thread-uri rotunjit în sus la un multiplu de 32, împărțit la 32 (*CUDA PG*, Release 13.5, §3.2.2.2 „Hardware Multithreading”, p. 152, accesat 2026-11-05). Fiecare thread dintr-un warp primește o **bandă** (*warp lane*), numerotată de la 0 la 31 (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05).

Consecința practică, spusă explicit de NVIDIA: e bine ca numărul de thread-uri dintr-un bloc să fie multiplu de 32; orice alt număr e legal, dar ultimul warp va avea benzi nefolosite pe toată durata execuției, cu utilizare mai slabă a unităților funcționale și a accesului la memorie (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05). Un bloc de 100 de thread-uri ocupă deci 4 warp-uri, iar al patrulea are doar 4 benzi active din 32 (aritmetică proprie, pe regula de rotunjire de mai sus).

## 2. SIMT: o instrucțiune, multe thread-uri

NVIDIA numește modelul **SIMT** — *Single-Instruction Multiple-Threads*: toate thread-urile unui warp execută același cod de kernel, dar fiecare poate urma alte ramuri prin cod (*CUDA PG*, Release 13.5, §1.2.2.2, p. 7, accesat 2026-11-05). Ghidul îl compară direct cu SIMD-ul clasic: în SIMD execuția urmează un singur flux de control, pe când în SIMT fiecare thread are voie să-și urmeze propriul flux, motiv pentru care SIMT nu are o lățime fixă a datelor cum are SIMD (același §, p. 9).

Diferența e mai mult decât semantică. Într-un set de instrucțiuni SIMD de tip AVX, programatorul (sau compilatorul) împachetează explicit datele în registre vectoriale; în CUDA scrii cod pentru *un singur* thread, iar hardware-ul grupează 32 de astfel de thread-uri și le execută împreună. Ghidul insistă că nu e *necesar* să te gândești la warp-uri ca să scrii cod CUDA corect, dar că modelul de execuție pe warp e esențial pentru a înțelege coalescerea accesului la memoria globală și conflictele de bancă din memoria partajată (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05) — subiectele capitolului 54.

### Cum arată un SM concret: Volta GV100

Ca să nu vorbim abstract, să deschidem SM-ul Volta. Whitepaper-ul spune că SM-ul GV100 are 64 de nuclee FP32 și 32 de nuclee FP64 și este împărțit în **patru blocuri de procesare** (*processing blocks*, numite și partiții); fiecare partiție are 16 nuclee FP32, 8 nuclee FP64, 16 nuclee INT32, două Tensor Cores, un cache de instrucțiuni L0, **un planificator de warp-uri**, o unitate de dispatch și un fișier de registre de 64 KB (NVIDIA, Tesla V100 whitepaper, 2017, secțiunea „Volta SM (Streaming Multiprocessor)”, p. 12). Patru partiții × 64 KB dau 256 KB de registre pe SM, cifră confirmată de Tabelul 1 al aceluiași whitepaper („Register File Size / SM: 256KB”, p. 10).

GPU-ul GV100 complet are 84 de SM-uri, iar placa Tesla V100 folosește 80 (Tesla V100 whitepaper, p. 8, și Tabelul 1, p. 10). „Nucleul CUDA” din marketing este, în acest vocabular, o bandă de execuție FP32 — o unitate aritmetică, nu un procesor cu propriul flux de instrucțiuni: cel care decide *ce* instrucțiune se execută este planificatorul de warp-uri al partiției (interpretarea mea, pe baza descrierii partiției de la p. 12; whitepaper-ul nu folosește formula „bandă”).

> **Notă de terminologie.** Un nucleu de CPU din faza 3 a cărții are predicție de salturi, execuție *out-of-order* și propriul contor de program. O bandă CUDA nu are nimic din toate acestea; costul de control este amortizat pe 32 de thread-uri care execută aceeași instrucțiune. Acesta e tot pariul SIMT.

## 3. Divergența: când thread-urile nu mai sunt de acord

Ce se întâmplă când un `if` e adevărat pentru unele thread-uri dintr-un warp și fals pentru altele? Ghidul CUDA răspunde direct: toate thread-urile warp-ului execută aceeași instrucțiune simultan; thread-urile care nu urmează ramura sunt **mascate** (*masked off*) cât timp le execută cele care o urmează; dacă o condiție e adevărată pentru jumătate din warp, cealaltă jumătate stă mascată pe durata acelor instrucțiuni (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05). Fenomenul se numește **divergență de warp** (*warp divergence*), iar utilizarea GPU-ului e maximă când thread-urile unui warp urmează același drum de control (același loc).

Un exemplu **ilustrativ** (nu o măsurătoare): fie un warp în care benzile pare execută ramura `A` de 10 instrucțiuni, iar cele impare ramura `B` de 10 instrucțiuni. Fără divergență, warp-ul ar emite 10 instrucțiuni; cu divergență, emite ramura A cu 16 benzi active, apoi ramura B cu celelalte 16 — aproximativ 20 de emisiuni pentru aceeași muncă utilă, adică eficiență SIMT de circa 50% în regiunea divergentă. Cifrele sunt alese de mine pentru claritate; costul real depinde de compilator și de arhitectură.

### Pre-Volta: un singur contor de program pe warp

Whitepaper-ul V100 descrie istoric mecanismul: GPU-urile Pascal și cele anterioare execută warp-urile de 32 de thread-uri în mod SIMT cu **un singur contor de program partajat** de toate cele 32 de thread-uri, combinat cu o **mască activă** care spune ce thread-uri sunt active; ramurile divergente sunt serializate, masca originală e păstrată până la reconvergență, de obicei la finalul secțiunii divergente (Tesla V100 whitepaper, secțiunea „Independent Thread Scheduling”, Figura 20, p. 26). Whitepaper-ul notează și prețul: thread-urile aceluiași warp aflate în regiuni divergente nu pot comunica sau aștepta unele după altele, iar algoritmi cu blocări fine (*locks*, *mutex*) pot ajunge la *deadlock* în funcție de warp-ul din care provin thread-urile concurente (același loc, p. 26).

### Volta: planificare independentă a thread-urilor

Volta schimbă tabloul păstrând starea de execuție **per thread**, inclusiv contor de program și stivă de apel (Tesla V100 whitepaper, Figura 21, p. 27). Un „schedule optimizer” grupează thread-urile active ale aceluiași warp în unități SIMT, iar thread-urile pot diverge și reconverge la granularitate sub-warp (același loc, p. 27). Important pentru intuiție: execuția *rămâne* SIMT — la orice ciclu de ceas, nucleele CUDA execută aceeași instrucțiune pentru toate thread-urile active ale warp-ului, ca înainte; ce se schimbă este că instrucțiunile din ramurile `if` și `else` pot fi intercalate în timp (același whitepaper, Figura 22, p. 27). Tabelul 2 al whitepaper-ului adaugă o notă de subsol tehnică: contorul de program per thread ocupă de regulă două sloturi de registru pe thread (p. 18).

Ghidul CUDA actual formulează consecința pentru programator: modelul de programare spune că thread-urile unui warp progresează împreună, dar execuția hardware poate diferi; exploatarea cunoștințelor despre maparea reală pe hardware e descurajată, iar un program care încalcă modelul poate avea comportament nedefinit diferit de la un GPU la altul (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05).

## 4. Planificarea warp-urilor și ascunderea latenței

Aici e miezul economic al GPU-ului. Ghidul spune: contextul de execuție al fiecărui warp — contoare de program, registre etc. — este păstrat **pe cip** pe toată durata vieții warp-ului, așa că **comutarea între warp-uri nu costă nimic**; la fiecare ciclu de emisie, planificatorul alege un warp ale cărui thread-uri sunt gata să execute următoarea instrucțiune și o emite pentru ele (*CUDA PG*, Release 13.5, §3.2.2.2, p. 152, accesat 2026-11-05).

Comparați cu capitolul 35 (zidul memoriei): un CPU combate latența DRAM cu cache-uri mari și execuție speculativă. Un GPU o combate altfel: când un warp așteaptă un operand din memoria globală, planificatorul emite din alt warp. Cu cât sunt mai multe warp-uri rezidente gata de lucru, cu atât e mai mare șansa ca, la fiecare ciclu, să existe *ceva* de emis. De aici vine noțiunea de ocupare.

Un model **ilustrativ**, deliberat simplificat: dacă un warp execută în medie 4 instrucțiuni aritmetice între două accese la memorie și fiecare acces durează, să zicem, ~375 de cicluri, un planificator care emite o instrucțiune pe ciclu ar avea nevoie de ordinul a ~100 de warp-uri pregătite ca să nu stea niciodată degeaba (concurență ≈ debit × latență — legea lui Little din capitolul 35). Cifra de ~375 de cicluri nu e din documentația NVIDIA: Jia et al. au măsurat pe V100, cu metoda *pointer-chase*, o latență de **375 de cicluri** pentru un miss în L2 cu hit în TLB (1029 de cicluri când miss-ul de L2 e însoțit și de un miss în TLB; hit-ul în L1 e ~28 de cicluri) (Jia, Maggioni, Staiger, Scarpazza, „Dissecting the NVIDIA Volta GPU Architecture via Microbenchmarking”, arXiv:1804.06826, 2018, Figura 3.2 și textul aferent, [PDF](https://arxiv.org/pdf/1804.06826)). Exemplul rămâne ilustrativ: am ales 4 instrucțiuni între accese ca să arăt *forma* raționamentului, nu ca măsurătoare pe un kernel real.

## 5. Ocuparea: definiția oficială

Ghidul CUDA definește **ocuparea** ca raportul dintre numărul de warp-uri active și numărul maxim de warp-uri active suportat de SM; în general e o practică bună ca ocuparea să fie cât mai mare, pentru că ascunde latența și crește performanța (*CUDA PG*, Release 13.5, §2.3.7, p. 74, accesat 2026-11-05). Ca s-o calculezi, trebuie să știi limitele de resurse ale SM-ului și ce resurse cere kernel-ul; opțiunea `--resource-usage` a lui `nvcc` raportează numărul de registre și memoria partajată cerute de kernel (același §, p. 74).

Patru resurse limitează câte blocuri încap simultan pe un SM (*CUDA PG*, Release 13.5, §2.3.7, p. 74, și §3.2.2.2, p. 152, accesat 2026-11-05):

1. **numărul maxim de thread-uri (warp-uri) rezidente** pe SM;
2. **numărul maxim de blocuri rezidente** pe SM;
3. **registrele de 32 de biți** ale SM-ului, partiționate între warp-uri;
4. **memoria partajată** a SM-ului, partiționată între blocuri.

Ghidul precizează că alocarea de registre se face per thread, iar memoria partajată per bloc (*CUDA PG*, Release 13.5, §1.2.3.3, p. 14, accesat 2026-11-05), și că un bloc poate fi plasat pe un SM doar dacă numărul de registre pe thread înmulțit cu numărul de thread-uri din bloc nu depășește registrele disponibile (același loc). Dacă nu există resurse nici pentru un singur bloc, kernel-ul nu se lansează (*CUDA PG*, Release 13.5, §3.2.2.2, p. 153, accesat 2026-11-05).

Ghidul dă el însuși două exemple pentru un dispozitiv de *compute capability* 10.0, cu 2048 de thread-uri rezidente și 32 de blocuri pe SM: un kernel cu blocuri de 768 de thread-uri încape în doar 2 blocuri pe SM, deci ocupare (768·2)/2048 = 75%; unul cu blocuri de 32 de thread-uri se lovește de limita de 32 de blocuri, deci 1024/2048 = 50% (*CUDA PG*, Release 13.5, §2.3.7, Tabelul 2, p. 75, accesat 2026-11-05). Al doilea exemplu e instructiv: blocurile prea mici irosesc SM-ul chiar dacă nu atingi nicio limită de registre sau memorie.

## 6. Calcul lucrat de ocupare pe NVIDIA A100 (compute capability 8.0)

Aleg A100 pentru că limitele lui sunt documentate în două surse primare deschise, care concordă.

**Limitele SM-ului (date documentate):**

| Resursă | Valoare | Sursă |
|---|---|---|
| Thread-uri / warp | 32 | A100 whitepaper, Tabelul 5, p. 43 |
| Max. warp-uri / SM | 64 | A100 whitepaper, Tabelul 5, p. 43; *CUDA PG*, Release 13.5, §5.1, Tabelul 33, p. 521, accesat 2026-11-05 |
| Max. thread-uri / SM | 2048 | aceleași |
| Max. blocuri / SM | 32 | aceleași |
| Registre de 32 biți / SM | 65 536 | A100 whitepaper, Tabelul 5; *CUDA PG*, Release 13.5, §5.1, Tabelul 34, p. 522, accesat 2026-11-05 |
| Max. registre / thread | 255 | aceleași |
| Memorie partajată / SM | configurabilă până la 164 KB | A100 whitepaper, Tabelul 5, p. 43; *CUDA PG*, Release 13.5, §5.1, Tabelul 34, p. 522, accesat 2026-11-05 |
| Memorie partajată / bloc | max. 163 KB **la cc 8.0 (A100)**; alte cipuri au alte limite (peste 48 KB doar cu *opt-in* dinamic) | *CUDA PG*, Release 13.5, §5.1, Tabelul 34 și nota 4, p. 522, accesat 2026-11-05 |

Atenție la ultimul rând: plafonul de **163 KB** de memorie partajată pe bloc este valoarea pentru *compute capability* **8.0** (A100) — și pentru 8.7 —, nu o constantă CUDA. Sursa este „Table 34: Memory Information per Compute Capability”, rândul „Maximum amount of shared memory per thread block” *with* `max_shared_memory_per_block_optin`, cu nota 4: peste 48 KB pe bloc, kernel-ul trebuie să folosească memorie partajată dinamică și un *opt-in* explicit (*CUDA PG*, Release 13.5, §5.1, Tabelul 34 și nota 4, p. 522 tipărită = pagina PDF 540, accesat 2026-11-05). Coloanele tabelului, citite din layout-ul PDF (nu doar din extragerea de text), sunt: **7.5 → 64 KB**, **8.0 → 163 KB**, **8.6 → 99 KB**, **8.7 → 163 KB**, **8.9 → 99 KB**. Pentru orice alt GPU decât A100, citiți limita din coloana propriei capabilități.

**Kernel-ul (valori ilustrative, alese de mine):** blocuri de 256 de thread-uri, 64 de registre pe thread, 48 KB de memorie partajată statică pe bloc.

**Pasul 1 — limita de thread-uri:** 2048 / 256 = **8 blocuri**.

**Pasul 2 — limita de blocuri:** 32 de blocuri; nu e restrictivă aici.

**Pasul 3 — limita de registre:** un bloc cere 64 × 256 = 16 384 de registre; 65 536 / 16 384 = **4 blocuri**.

**Pasul 4 — limita de memorie partajată:** 3 × 48 KB = 144 KB ≤ 164 KB, dar 4 × 48 KB = 192 KB > 164 KB, deci **3 blocuri**.

**Rezultat:** minimul este 3 blocuri × 8 warp-uri = 24 de warp-uri active din 64 posibile, adică **ocupare teoretică 37,5%**. Limita restrictivă e memoria partajată.

**Ce putem schimba (tot ilustrativ):**

- Reducem memoria partajată la 32 KB pe bloc: memoria permite 5 blocuri (160 KB ≤ 164 KB), dar acum registrele limitează la 4 → 32 de warp-uri → **50%**.
- Dacă, în plus, compilatorul reușește cu 32 de registre pe thread: registrele permit 8 blocuri, memoria 5 → 40 de warp-uri → **62,5%**.

Ghidul descrie exact acest compromis: programatorul controlează direct dimensiunea blocului și memoria partajată, dar mai puțin registrele; cu `--maxrregcount` poate impune un plafon, iar dacă kernel-ul are nevoie de mai multe registre decât plafonul, va face *spill* în memoria locală — totuși, uneori mai multe blocuri rezidente compensează și performanța netă crește (*CUDA PG*, Release 13.5, §2.3.7, p. 75, accesat 2026-11-05).

**Două avertismente oneste.** Primul: calculul de mai sus e **teoretic**. Ignoră granularitatea de alocare a registrelor (alocarea se face pe multipii de registre pe warp, nu pe unu-câte-unu) și eventuala memorie partajată rezervată de sistem pe bloc — detalii pe care ghidul 13.5 nu le dă în secțiunile citate. Pentru cifra reală a unui kernel compilat, ghidul arată cum se cere direct numărul de blocuri active pe SM prin API-ul `cudaOccupancyMaxActiveBlocksPerMultiprocessor` (*CUDA PG*, Release 13.5, §5.7.3.6.2.1, p. 732, accesat 2026-11-05). Al doilea: ocupare mare nu înseamnă automat performanță mare. Ghidul spune doar că, „în general”, e bine să fie mare (*CUDA PG*, Release 13.5, §2.3.7, p. 74, accesat 2026-11-05). V. Volkov a arătat încă din 2010, pe arhitecturi anterioare, că un kernel poate atinge o fracțiune mare din vârful de calcul sau de lățime de bandă la ocupare deliberat mică, dacă fiecare thread ține mai multe date în registre și exploatează paralelismul la nivel de instrucțiune (Volkov, „Better Performance at Lower Occupancy”, GTC 2010, slides, [PDF](https://www.nvidia.com/content/GTC-2010/pdfs/2238_GTC2010.pdf)). Kernel-urile de matmul cu Tensor Cores (capitolul 55) urmează aceeași logică: fragmentele WMMA stau în registre, deci o ocupare mai mică poate lăsa loc pentru mai multe registre pe thread (raționament pe baza §5.4.11 din ghid și a capitolului 55; nu o măsurătoare pe un kernel GEMM anume).

## 7. Volta vs. Ampere: ce s-a schimbat la limite

Comparând Tabelul 2 din whitepaper-ul V100 cu Tabelul 5 din whitepaper-ul A100: thread-uri pe warp (32), warp-uri maxime pe SM (64), thread-uri pe SM (2048), blocuri pe SM (32) și registre pe SM (65 536) sunt identice între Volta (cc 7.0) și Ampere A100 (cc 8.0); ce crește este memoria partajată configurabilă pe SM, de la maximum 96 KB la maximum 164 KB (V100 whitepaper, Tabelul 2, p. 18; A100 whitepaper, Tabelul 5, p. 43). Whitepaper-ul A100 adaugă că unitatea combinată L1/memorie partajată are 192 KB pe SM la A100 față de 128 KB la V100 (p. 15).

Asta înseamnă că, pentru același kernel, raționamentul de ocupare pe registre e același pe cele două generații, iar diferențele apar la memoria partajată. Pentru generațiile ulterioare, ghidul 13.5 listează alte valori — de exemplu, pentru unele capabilități doar 48 de warp-uri sau 1536 de thread-uri pe SM (*CUDA PG*, Release 13.5, §5.1, Tabelul 33, p. 521, accesat 2026-11-05) — așa că nu copiați niciodată limitele unei generații pe alta; citiți-le din `cudaGetDeviceProperties` sau din `cuda::arch_traits`, cum recomandă ghidul (*CUDA PG*, Release 13.5, §2.3.7, p. 74–75, accesat 2026-11-05).

## 8. Drumul spre atenție

Capitolul 63 va arăta că atenția din transformere înseamnă, în mare, două înmulțiri de matrice separate de un softmax: Attention(Q, K, V) = softmax(QKᵀ/√d_k)V (Vaswani et al., „Attention Is All You Need”, NeurIPS 2017, Ec. 1, §3.2.1, [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)). Pe GPU, fiecare dintre aceste etape devine un kernel care trebuie să-și împartă munca în blocuri și warp-uri și să încapă cu registrele și memoria partajată pe SM.

FlashAttention (Dao et al., 2022) e un exemplu bun de gândire în exact termenii acestui capitol: autorii descriu modelul de execuție al GPU-ului ca un număr masiv de thread-uri care încarcă intrări din HBM în registre și SRAM, calculează și scriu rezultatele înapoi în HBM, și construiesc un algoritm de atenție care folosește *tiling* pentru a reduce citirile și scrierile între HBM și SRAM-ul de pe cip (Dao, Fu, Ermon, Rudra, Ré, „FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness”, NeurIPS 2022, Abstract și §2.1, [arXiv:2205.14135](https://arxiv.org/abs/2205.14135)). Dimensiunea blocului de *tiling* este, practic, o decizie de ocupare: blocuri mai mari reutilizează mai mult datele, dar consumă mai multă memorie partajată și registre și lasă mai puține warp-uri rezidente (raționamentul meu, pe baza calculului din secțiunea 6).

Capitolul 54 deschide ierarhia de memorie în care trăiesc aceste warp-uri; capitolul 55 arată unitatea care face înmulțirea propriu-zisă — Tensor Core — și cum o comandă un warp întreg, cooperativ.

## Rezumat

- Un warp are 32 de thread-uri; blocurile se împart în warp-uri cu ID-uri consecutive (*CUDA PG*, Release 13.5, §1.2.2.2, p. 7–9, și §3.2.2.2, p. 152, accesat 2026-11-05).
- SIMT: aceeași instrucțiune pentru toate thread-urile active ale warp-ului; ramurile divergente se maschează și se serializează (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05; V100 whitepaper, p. 26–27).
- Comutarea între warp-uri e gratuită pentru că tot contextul stă pe cip; latența se ascunde prin multe warp-uri gata de lucru (*CUDA PG*, Release 13.5, §3.2.2.2, p. 152, accesat 2026-11-05).
- Ocupare = warp-uri active / warp-uri maxime; limitele sunt thread-uri, blocuri, registre, memorie partajată (*CUDA PG*, Release 13.5, §2.3.7, p. 74–75, accesat 2026-11-05).
- Exemplu A100 (ilustrativ): 256 thread-uri, 64 registre, 48 KB → 3 blocuri → 37,5%.

