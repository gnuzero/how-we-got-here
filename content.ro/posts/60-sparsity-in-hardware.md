---
title: "Sparsity în hardware"
weight: 63
date: 2026-01-01
draft: false
phase: "10 — Hardware AI modern"
series_index: 62
tags: []
summary: "Sari peste MAC-urile cu zero știut dinainte — dar numai tiparele structurate sunt ieftin de exploatat pentru hardware-ul MAC dens"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

Capitolul 59 a făcut fiecare operație mai ieftină, cu mai puțini biți pe număr. Capitolul acesta trage de cealaltă pârghie: să nu mai faci deloc operațiile care nu contribuie la rezultat. O înmulțire în care unul dintre operanzi e zero dă zero, iar adunarea ei la acumulator nu schimbă nimic. Întrebarea de inginerie nu e *dacă* zerourile sunt inutile. Întrebarea e cât costă să le găsești și să le sari pe un cip construit pentru matrice dense. Inginerii români folosesc termenul englezesc **sparsity** (rar „raritate” sau „sparsitate”) și **pruning** („tăiere”, „rărire”). Le păstrez pe amândouă.

Sursele primare deschise integral pentru acest capitol sunt: lucrarea NVIDIA care descrie Sparse Tensor Cores (Mishra et al., „Accelerating Sparse Deep Neural Networks”, arXiv:2104.08378v1, 16 aprilie 2021, [arXiv](https://arxiv.org/abs/2104.08378)); whitepaper-ul Ampere (NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture*, V1.0, 2020, [PDF](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)); specificația PTX (NVIDIA, *PTX ISA 9.5*, §9.7.16.6, [HTML](https://docs.nvidia.com/cuda/parallel-thread-execution/index.html), accesat 2026-11-05); documentația cuSPARSELt (NVIDIA, [cuSPARSELt](https://docs.nvidia.com/cuda/cusparselt/index.html), accesat 2026-11-05); și trei lucrări ale grupului lui Song Han și William Dally (detaliate mai jos). Paginile citate pentru whitepaper sunt cele tipărite în subsol.

## 1. De unde vin zerourile

Whitepaper-ul A100 dă explicația NVIDIA: importanța ponderilor individuale evoluează în timpul antrenării, iar la final doar un subset al lor a căpătat un rol semnificativ în rezultat; restul nu mai sunt necesare (A100 whitepaper, „A100 Introduces Fine-Grained Structured Sparsity”, p. 31). Tehnica prin care scapi de ele se numește **pruning**: anexa aceluiași whitepaper o definește ca eliminarea sau aducerea la zero a nodurilor și conexiunilor care contribuie puțin sau deloc la acuratețea finală (A100 whitepaper, Anexa B, „Pruning and Sparsity”, p. 77).

Lucrarea fondatoare a pruning-ului modern pe rețele mari este Han, Pool, Tran și Dally, „Learning both Weights and Connections for Efficient Neural Networks” (arXiv:1506.02626v3, 2015, [arXiv](https://arxiv.org/abs/1506.02626)). Metoda lor are trei pași: antrenezi rețeaua ca să afli ce conexiuni contează, tai conexiunile neimportante, apoi reantrenezi ce a rămas (Han et al., 2015, Abstract). Pe ImageNet, numărul de parametri ai AlexNet a scăzut de 9 ori, de la 61 de milioane la 6,7 milioane, iar la VGG-16 de 13 ori, de la 138 de milioane la 10,3 milioane, în ambele cazuri fără pierdere de acuratețe (Han et al., 2015, Abstract și Tabelul 1). Observați însă un detaliu din aceeași lucrare: la AlexNet, reducerea de 9× a ponderilor a redus calculul doar de 3× (Han et al., 2015, Tabelul 4). Ponderile tăiate nu sunt distribuite uniform între straturi, iar câștigul la calcul nu urmează automat câștigul la memorie.

## 2. Ce câștigi, în principiu

Anexa B a whitepaper-ului A100 enumeră trei beneficii posibile: crește debitul de calcul dacă sari peste elementele zero; scade consumul de lățime de bandă dacă aduci din memorie doar elementele nenule; iar la inferența sensibilă la latență poți ține mai multe valori nenule pe cip (A100 whitepaper, Anexa B, p. 77).

Al doilea beneficiu e adesea mai important decât primul. Han, Mao și Dally argumentează în „Deep Compression” (ICLR 2016, arXiv:1510.00149v5, [arXiv](https://arxiv.org/abs/1510.00149)) că energia e dominată de accesul la memorie: în CMOS de 45 nm, o adunare în virgulă mobilă pe 32 de biți consumă 0,9 pJ, un acces de 32 de biți în SRAM 5 pJ, iar un acces de 32 de biți în DRAM 640 pJ (Han, Mao & Dally, 2016, §1). Aceeași secțiune dă un calcul ilustrativ: o rețea cu un miliard de conexiuni rulată la 20 de cadre pe secundă ar cere 12,8 W doar pentru accesul la DRAM (Han, Mao & Dally, 2016, §1). Este exact zidul memoriei din capitolul 35, văzut din unghiul energiei.

## 3. Nestructurat vs. structurat

Literatura împarte sparsity-ul în două familii. Anexa B a whitepaper-ului A100 numește **fine-grained sparsity** tăierea unor ponderi individuale, oriunde s-ar afla în rețea, și **coarse-grained sparsity** tăierea unor sub-rețele întregi (A100 whitepaper, Anexa B, „Fine-Grained and Coarse-Grained Sparsity”, p. 77). Mishra et al. folosesc perechea echivalentă „nestructurat” și „structurat”: pruning-ul nestructurat elimină parametri individuali fără să țină cont de tiparul rezultat, iar cel structurat elimină grupuri întregi, de exemplu filtre sau canale, ca să poată folosi hardware și software optimizate pentru calcul dens (Mishra et al., 2021, §2).

Fiecare familie are un defect. Rețelele tăiate nestructurat păstrează mai bine acuratețea, dar folosesc rar hardware-ul la capacitate maximă (Mishra et al., 2021, §2). Cele tăiate structurat merg bine pe hardware, dar pierd acuratețe la grade mari de sparsity; exemplul dat de autori este ResNet-50, care poate obține o accelerare de 2× prin *channel pruning*, cu o pierdere de aproape 1,5% acuratețe (Mishra et al., 2021, §2).

### De ce nestructuratul nu se potrivește cu hardware-ul SIMD și tensorial

Mishra et al. dau trei motive concrete. Primul ține de memorie: tiparele nestructurate folosesc prost liniile de cache și deci lățimea de bandă (Mishra et al., 2021, §3.1). Al doilea ține de format: matricele nestructurate se stochează de obicei în formate ca CSR, CSC sau COO, care produc accese dependente de date și cresc latența citirilor (§3.1). Al treilea ține de costul indicilor: cu CSR, metadatele pot adăuga până la 200% overhead de stocare; la ponderi cuantizate pe 8 biți, indicele de coloană al fiecărei valori poate cere 16 biți sau mai mult chiar pentru matrice de dimensiune modestă (§3.1).

Concluzia lor este dură: beneficiul de performanță al pruning-ului nestructurat este neglijabil și uneori negativ, chiar la rate mari de tăiere, de exemplu 95% (Mishra et al., 2021, §2). Dificultatea e și mai mare pe procesoarele cu „pipeline-uri matriceale”, adică pe GPU-uri cu Tensor Cores și pe TPU-uri cu matrice sistolice (§2). În concluzii, autorii repetă că sparsity-ul nestructurat cere grade foarte mari de raritate ca să bată calculul dens pe procesoarele moderne, iar la grade foarte mari acuratețea se menține greu (§6).

Intuiția hardware se leagă direct de capitolele 53 și 55 (aceasta e explicația mea, nu un citat). Un warp execută aceeași instrucțiune pe 32 de benzi, iar un Tensor Core consumă un bloc întreg de operanzi deodată. Dacă zerourile sunt împrăștiate aleator, fiecare bandă sau fiecare rând are alt număr de valori utile. Unitatea fie așteaptă rândul cel mai lung, fie are nevoie de logică de adunare a operanzilor (*gather*) care costă mai mult decât MAC-urile economisite.

Același lucru se vede la matricele sistolice din capitolul 58. Unitatea de înmulțire a TPU v1 a fost proiectată pentru matrice dense, iar suportul arhitectural pentru sparsity a fost omis din motive de termen de lansare (Jouppi et al., „In-Datacenter Performance Analysis of a Tensor Processing Unit”, ISCA 2017, §2, [arXiv](https://arxiv.org/abs/1704.04760)). Aceeași frază adaugă că sparsity-ul va avea „prioritate mare” în design-urile viitoare (Jouppi et al., 2017, §2).

## 4. Calea acceleratorului dedicat: EIE

Înainte de Ampere, grupul de la Stanford a construit hardware anume pentru sparsity-ul nestructurat. EIE („EIE: Efficient Inference Engine on Compressed Deep Neural Network”, Han et al., arXiv:1602.01528v2, 2016, [arXiv](https://arxiv.org/abs/1602.01528)) lucrează direct pe modelul comprimat cu Deep Compression și accelerează înmulțirea matrice-vector rară (Han et al., 2016, Abstract). În benchmark-urile lor, pruning-ul face matricea W rară, cu o densitate între 4% și 25% (Han et al., 2016, §III-A). EIE sare atât peste ponderile zero (sparsity statică a lui W), cât și peste activările zero produse de ReLU (sparsity dinamică, care se schimbă de la o intrare la alta) (Han et al., 2016, §III-A).

Matricea e stocată coloană cu coloană într-un format **CSC întrețesut** (*interleaved CSC*), introdus la §III-B (*Representation*), și împărțită pe elemente de procesare (PE) la §III-C (*Parallelizing Compressed DNN*); autorii notează că schema poate suferi de **dezechilibru de încărcare** (*load imbalance*), pentru că fiecare PE poate avea alt număr de nenule într-o coloană (Han et al., 2016, §III-B–§III-C). E aceeași problemă pe care o evită GPU-ul, cu alte unelte: EIE plătește cu logică specializată și cozi, nu cu tipare impuse.

Cifrele raportate în abstract sunt pentru straturile complet conectate (FC) ale AlexNet: 102 GOPS lucrând direct pe rețeaua comprimată, echivalentul a 3 TOPS pe rețeaua necomprimată, 1,88×10⁴ cadre pe secundă la o putere de 600 mW (Han et al., 2016, Abstract). Față de implementări CPU și GPU ale aceleiași rețele fără compresie, EIE e de 189× și 13× mai rapid (Han et al., 2016, Abstract). Atenție la comparație: e un accelerator dedicat pe 45 nm comparat cu procesoare generale pe un model *necomprimat*, iar o parte din câștig vine din compresie, nu din hardware.

## 5. Compromisul NVIDIA: sparsity 2:4

Ampere alege un punct de mijloc. Whitepaper-ul îl numește **Fine-Grained Structured Sparsity** și spune că structura e impusă printr-o definiție nouă de matrice rară, **2:4**, care permite două valori nenule în fiecare vector de patru elemente (A100 whitepaper, „Sparse Matrix Definition”, p. 31). A100 suportă sparsity 2:4 pe rânduri (p. 31). Mishra et al. formulează regula invers: în fiecare grup de patru valori consecutive, cel puțin două trebuie să fie zero, ceea ce dă 50% sparsity (Mishra et al., 2021, §1 și §3).

De ce exact 50%? Autorii argumentează că la 50% acuratețea se păstrează mult mai ușor, fără explorarea hiper-parametrilor, decât, de exemplu, la 80% (Mishra et al., 2021, §3). Tiparul e „fin” pentru că decizia se ia pe fiecare grup de patru, nu pe canale întregi. E „structurat” pentru că fiecare grup are exact aceeași cotă de zerouri.

### Formatul comprimat: valori + indici pe 2 biți

O matrice R×C care respectă 2:4 se stochează ca R×C/2 valori nenule plus R×C/2 indici de metadate pe 2 biți (Mishra et al., 2021, Fig. 1). Fiecare indice de 2 biți codează poziția unei valori nenule în grupul ei de patru (§3.1). Dacă un grup are mai mult de două zerouri, formatul tot stochează două valori, ca să rămână uniform (§3.1).

Specificația PTX descrie același lucru la nivel de instrucțiune. Pentru operația `mma.sp` de forma M×N×K, matricea A de M×K este împachetată în M×K/2 elemente, iar maparea lor în rândul complet e dată explicit ca metadate (NVIDIA, *PTX ISA 9.5*, §9.7.16.6, accesat 2026-11-05). Pentru tipurile half-precision și `.bf16`, cu formele `.m16n8k16` și `.m16n8k32`, A e rară la granularitate 2:4, iar pozițiile celor două valori nenule în grupul de patru sunt date de doi indici de 2 biți în operandul de metadate (PTX ISA 9.5, §9.7.16.6.1 „Sparse matrix storage”). Pentru `.tf32`, granularitatea devine 1:2: o valoare nenulă din fiecare pereche (§9.7.16.6.1). Mishra et al. confirmă: Sparse Tensor Cores suportă FP16, BF16 și întregi pe 8 biți, iar TF32 e suportat cu tiparul 1:2 (Mishra et al., 2021, §3.2).

Cât economisești? Whitepaper-ul spune în două locuri apropiate două lucruri ușor diferite: că matricea poate fi comprimată eficient și reduce stocarea și lățimea de bandă „cu aproape 2×” (A100 whitepaper, p. 31), respectiv că ponderile sunt comprimate pentru o reducere „de 2×” a amprentei de date și a lățimii de bandă (p. 32). Lucrarea tehnică face socoteala cu metadate cu tot. Pentru operanzi pe 16 biți, 4 elemente dense cer 4×16 = 64 de biți, iar formatul 2:4 cere 2×16 + 2×2 = 36 de biți, deci o economie de circa 44%; pe 8 biți, economia e de circa 38% (Mishra et al., 2021, §3.1). Overhead-ul metadatelor e limitat la 12,5% pentru valori pe 16 biți și 25% pentru valori pe 8 biți (§3.1). Prefer cifra din lucrare: „2×” din whitepaper ignoră metadatele.

### Un exemplu calculat de mână

Numerele de mai jos sunt **ilustrative**, alese de mine; regula aplicată (păstrezi cele mai mari două magnitudini din fiecare grup) este cea din Mishra et al. (2021, §4.1, „Step 2: Weight pruning”).

Un rând de 8 ponderi FP16, în două grupuri de câte patru:

```
dens:        [ 0.3   1.7  -0.1  -0.4 |  2.2   0.05  -0.2   0.9 ]
|valoare|:   [ 0.3   1.7   0.1   0.4 |  2.2   0.05   0.2   0.9 ]
după 2:4:    [ 0     1.7   0    -0.4 |  2.2   0      0     0.9 ]
```

În primul grup cele mai mari magnitudini sunt 1,7 și 0,4 (pozițiile 1 și 3); în al doilea, 2,2 și 0,9 (pozițiile 0 și 3). Forma comprimată:

```
valori:      [ 1.7  -0.4 |  2.2   0.9 ]           4 × 16 biți = 64 biți
metadate:    [ 01   11   |  00    11  ]           4 ×  2 biți =  8 biți
                                                  total       = 72 biți
dens:        8 × 16 biți                                      = 128 biți
```

72/128 = 56,25%, deci economia e de 43,75%, adică exact „circa 44%” din Mishra et al. (2021, §3.1); aritmetica e a mea.

Acum produsul scalar cu un vector dens, tot ilustrativ, x = [1, 2, 3, 4, 5, 6, 7, 8]. Varianta densă face 8 MAC-uri, dintre care 4 cu zero: 0·1 + 1,7·2 + 0·3 + (−0,4)·4 + 2,2·5 + 0·6 + 0·7 + 0,9·8 = 3,4 − 1,6 + 11,0 + 7,2 = **20,0**. Varianta rară citește metadatele (1, 3, 0+4, 3+4), adună doar x₁ = 2, x₃ = 4, x₄ = 5, x₇ = 8 și face 4 MAC-uri: 1,7·2 + (−0,4)·4 + 2,2·5 + 0,9·8 = **20,0**. Rezultatul e identic, cu jumătate din înmulțiri. Asta face, în esență, hardware-ul descris mai jos.

### Ce face Sparse Tensor Core-ul

Whitepaper-ul descrie noile instrucțiuni Sparse MMA ca sărind peste calculul pe intrările cu valoare zero, ceea ce dublează debitul Tensor Core-ului (A100 whitepaper, „Sparse Matrix Multiply-Accumulate (MMA) Operations”, p. 32). Exemplul lor: matricea A, rară 2:4, înmulțită cu o matrice densă B; o operație MMA standard calculează tot produsul 16×8×16 în N cicluri, pe când instrucțiunea rară potrivește doar elementele nenule din fiecare rând al lui A cu elementele corespunzătoare din B și termină în N/2 cicluri (p. 32, Fig. 13).

Mishra et al. precizează forma: Sparse Tensor Cores fac **matrice rară × matrice densă = matrice densă**; al doilea operand și ieșirea rămân dense (Mishra et al., 2021, §3.2). Hardware-ul folosește metadatele ca să selecteze din B doar elementele care corespund valorilor nenule din A (§3.2, Fig. 2). Matricea A trece de la M×K la M×K/2 (Fig. 2). Este aplicației sarcina să livreze primul operand în formatul comprimat 2:4; cuSPARSELt și alte biblioteci oferă API-uri pentru compresie, iar TensorRT, începând cu versiunea 8.0, face asta automat pentru ponderi 2:4 (§3.2). Documentația cuSPARSELt descrie biblioteca drept dedicată operațiilor matrice-matrice în care cel puțin un operand e o matrice rară structurată cu raport de sparsity de 50% și listează funcții de pruning și compresie (NVIDIA, cuSPARSELt, pagina principală, accesat 2026-11-05). Bibliotecile NVIDIA cer ca dimensiunile intrării să fie multipli de 16 pentru FP16/BF16 și de 32 pentru INT8 (Mishra et al., 2021, §3.2).

## 6. Dens vs. sparse: cifrele de vârf A100

Cifrele de vârf ale A100 vin din Tabelul 1 al whitepaper-ului, cu nota că valorile de vârf sunt la frecvența GPU Boost și că valorile „sparse” sunt **TFLOPS/TOPS efective** obținute cu noua funcție de sparsity (A100 whitepaper, Tabelul 1, p. 15):

| Format pe Tensor Core | Dens | Cu sparsity 2:4 (efectiv) |
|---|---|---|
| TF32 | 156 TFLOPS | 312 TFLOPS |
| FP16 | 312 TFLOPS | 624 TFLOPS |
| BF16 | 312 TFLOPS | 624 TFLOPS |
| INT8 | 624 TOPS | 1248 TOPS |
| INT4 | 1248 TOPS | 2496 TOPS |
| FP64 | 19,5 TFLOPS | — |

Sursa: A100 whitepaper, Tabelul 1, p. 15; aceleași valori pentru TF32, FP16, BF16 și INT8 apar în Tabelul 1 din Mishra et al. (2021, §3.2), cu mențiunea acumulatorului (FP32 pentru TF32 și BF16; FP32 sau FP16 pentru FP16; INT32 pentru INT8). Pentru FP64 pe Tensor Core nu există variantă sparse în tabel. Tabelul 2 din whitepaper adaugă comparația cu V100: FP16 pe Tensor Core trece de la 125 TFLOPS (V100) la 312 TFLOPS dens și 624 TFLOPS cu sparsity, adică 2,5× și 5× (A100 whitepaper, Tabelul 2, p. 23). Factorul „5×” din materialele NVIDIA include deci dublarea dată de sparsity și nu se compară cu un câștig dens.

Notă despre surse: nu am deschis pagina de produs A100, așa că aici toate cifrele sunt din whitepaper.

## 7. Workflow-ul de recuperare a acurateței

Whitepaper-ul rezumă rețeta NVIDIA pentru inferență: rețeaua e antrenată mai întâi cu ponderi dense, apoi se aplică pruning structurat fin, iar la final ponderile nenule rămase sunt reglate fin (*fine-tuned*) cu pași suplimentari de antrenare (A100 whitepaper, p. 32). Mishra et al. detaliază cei trei pași (Mishra et al., 2021, §4.1):

1. Antrenezi modelul fără sparsity.
2. Tai modelul după tiparul 2:4.
3. Reantrenezi modelul tăiat, pornind de la ponderile din pasul 2, cu același optimizator și același program (rată de învățare, număr de epoci etc.) ca la pasul 1, păstrând tiparul de sparsity din pasul 2.

Workflow-ul e implementat în biblioteca **ASP** (*Automatic SParsity*) pentru PyTorch (Mishra et al., 2021, §4.1). La pasul 3 e important să resetezi toți hiper-parametrii și starea optimizatorului, de exemplu momentele, iar orice pondere tăiată la pasul 2 rămâne zero (§4.1). Prețul e explicit: workflow-ul dublează timpul de antrenare, iar autorii îl acceptă pentru că acest cost se amortizează pe durata de desfășurare a modelului (§4.1 și §6).

Două rafinări merită știute. Pentru rețelele mici și eficiente din start, precum MobileNet v2, pruning-ul simplu pierde acuratețe; permutarea coloanelor înainte de pruning o recuperează: MobileNet v2 are 71,55% dens, 69,56% cu 2:4 simplu și 71,56% cu permutare (Mishra et al., 2021, §4.1 și Tabelul 3). Pentru modelele antrenate în mai multe faze, ca BERT, setul de date al sarcinii finale e prea mic pentru recuperare, așa că se repetă și pre-antrenarea cu sparsity (§4.3, Fig. 7).

Rezultatele raportate sunt practic la egalitate cu varianta densă. Câteva exemple: ResNet-50 are 76,1% top-1 dens FP16 și 76,2% sparse FP16 (Mishra et al., 2021, Tabelul 2). BERT-Large pe SQuAD v1.1 are F1 91,9 atât dens, cât și sparse în FP16 (Tabelul 7). FairSeq Transformer pe WMT'14 En-De are BLEU 28,2 dens și 28,5 sparse (Tabelul 6). Autorii spun că diferențele mici sunt în limitele variației de la o rulare la alta (§5.1). Nu toate rezultatele sunt egale: la GAN-uri, SRGAN are FID 14,65 dens și 16,60 cu 2:4, unde mai mic e mai bine (Tabelul 5). Whitepaper-ul are propriul tabel, cu ResNet-50 76,6 dens și 76,8 sparse (A100 whitepaper, Anexa B, Tabelul 11, p. 81). Cele două documente dau baze dense diferite pentru ResNet-50; nu le amestecați.

## 8. Accelerarea reală, nu cea de pe hârtie

„2×” este un plafon. Mishra et al. scriu că 50% sparsity pe unul dintre operanzi înjumătățește operațiile multiply-add și duce la o creștere de performanță de „(până la) 2×” față de GEMM-urile dense echivalente (Mishra et al., 2021, §3.2). Accelerarea efectivă depinde de intensitatea aritmetică și de dimensiunile GEMM (§3.2).

Singura măsurătoare de accelerare din sursele deschise este Fig. 3 din Mishra et al.: GEMM-uri INT8 pe Tensor Cores A100, cu M = N = 10240 și K variabil, cuSPARSELt pentru varianta rară și cuBLAS pentru cea densă (Mishra et al., 2021, §3.2, Fig. 3). Concluzia autorilor e că GEMM-urile mai mari ating „aproape 2×”, pentru că au intensitate aritmetică mai mare (Fig. 3 și textul aferent). Nu citez valori punct cu punct din grafic: lucrarea nu le dă ca tabel. Autorii adaugă un exemplu de mărime: la modelele de limbaj N este adesea lungimea secvenței înmulțită cu dimensiunea batch-ului, iar pentru o secvență de 256 ar fi nevoie de un batch de 40 ca N să fie de ordinul 10K (§3.2).

### Regimul memory-bound

Aici intervine capitolul 54. Raportul calculat acolo pentru A100 este de circa 200 de operații FP16 pe octet adus din HBM (312 TFLOPS dens / 1555 GB/s; A100 whitepaper, Tabelul 1, p. 15, și p. 16; aritmetica mea). Cu sparsity, vârful efectiv se dublează la 624 TFLOPS, deci punctul de cotitură din modelul roofline urcă la circa 401 operații efective pe octet (624 / 1,555 ≈ 401,3; calcul propriu, aplicând modelul lui Williams, Waterman & Patterson, EECS-2008-134, 2008, §3). Consecința, tot raționament propriu: sparsity-ul ajută calculul doar dacă kernel-ul era deja compute-bound; un kernel memory-bound nu câștigă nimic din dublarea MAC-urilor.

Într-un kernel limitat de citirea ponderilor, câștigul vine din octeți, nu din MAC-uri. Plafonul teoretic pentru ponderi FP16 este 64/36 ≈ 1,78×, raportul de stocare din Mishra et al. (2021, §3.1: 4×16 = 64 biți dens vs. 2×16 + 2×2 = 36 biți comprimat); calculul plafonului e al meu și **nu** e o măsurătoare. Presupunerile: doar traficul de ponderi contează, activările și ieșirile rămân dense (Mishra et al., 2021, §3.2), iar metadatele de 2 biți sunt incluse în cei 36 de biți. Câștigul total pe un kernel real e deci ≤ 1,78× și de obicei mai mic. **Nu** dau aici o accelerare end-to-end (rețea întreagă, latență de inferență) pe A100 cu 2:4: nicio măsurătoare primară de acest tip nu a fost deschisă pentru capitol; singura măsurătoare citată rămâne Fig. 3 din Mishra et al. (GEMM-level, „nearly a 2×” pe GEMM-uri mari).

### Antrenarea

Sparsity-ul 2:4 e în primul rând o unealtă de inferență. Whitepaper-ul spune că, pentru accelerarea antrenării, sparsity-ul trebuie introdus devreme în proces ca să aducă beneficii, iar metodele de accelerare a antrenării fără pierdere de acuratețe sunt încă un domeniu activ de cercetare (A100 whitepaper, p. 31). Mishra et al. explică de ce: pentru a accelera și pasul înapoi, constrângerea 2:4 trebuie respectată și de matricea de ponderi transpusă, adică pe rânduri și pe coloane deodată (Mishra et al., 2021, §6).

## 9. Legătura cu atenția

Capitolul 63 ajunge la atenție, Attention(Q, K, V) = softmax(QKᵀ/√d_k)V (Vaswani et al., „Attention Is All You Need”, NeurIPS 2017, Ec. 1, [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)). Mishra et al. au aplicat 2:4 pe Transformer-XL și BERT, tăind toate straturile GEMM cu ponderi dintr-un bloc transformer; straturile de atenție propriu-zise nu au fost tăiate, pentru că nu implică ponderi (Mishra et al., 2021, §5.4). Proiecțiile care produc Q, K și V și straturile feed-forward sunt, deci, candidatele naturale pentru 2:4 (deducție proprie din §5.4). Produsele QKᵀ și softmax·V înmulțesc două activări calculate la rulare. Pruning-ul static descris aici nu le acoperă, pentru că tiparul 2:4 se calculează o dată, pe ponderi (raționament propriu, pe baza Mishra et al., 2021, §4.1 și §6, unde măștile dinamice sunt lăsate ca lucru viitor).

Legătura cu capitolul 59 e directă: Mishra et al. recomandă să aplici calibrarea pentru cuantizare (și eventual fine-tuning) după ce rețeaua a fost tăiată și reantrenată pentru sparsity (Mishra et al., 2021, §4.4). Tabelele lor raportează și variante „Sparse INT8”, de exemplu ResNet-50 la 76,2% top-1 (Tabelul 2). Cele două pârghii, mai puțini biți și mai puține operații, se combină.

## Rezumat

- Zerourile din ponderi irosesc MAC-uri și lățime de bandă; pruning-ul le produce deliberat (Han et al., 2015: 9× mai puțini parametri la AlexNet, 13× la VGG-16, fără pierdere de acuratețe).
- Sparsity-ul nestructurat păstrează acuratețea, dar se mapează prost pe SIMD și Tensor Cores: cache folosit prost, indici scumpi, accese dependente de date (Mishra et al., 2021, §2–3.1).
- Ampere impune 2:4: cel mult două nenule din patru, stocate ca valori + indici pe 2 biți; economia reală la FP16 e de circa 44%, nu 2× (Mishra et al., 2021, §3.1).
- A100: FP16/BF16 312 TFLOPS dens vs. 624 TFLOPS efectiv cu sparsity; TF32 156/312; INT8 624/1248 TOPS (A100 whitepaper, Tabelul 1, p. 15).
- Rețeta: antrenare densă, pruning 2:4, reantrenare cu același program; acuratețea rămâne practic neschimbată în majoritatea testelor (Mishra et al., 2021, §4–5).
- Accelerarea măsurată ajunge „aproape de 2×” doar pe GEMM-uri mari (Mishra et al., 2021, Fig. 3). Regimurile memory-bound câștigă mai puțin, iar antrenarea rămâne un domeniu de cercetare (A100 whitepaper, p. 31).

