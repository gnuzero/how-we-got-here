---
title: "Tensor Cores"
weight: 62
date: 2026-01-01
draft: false
phase: "9 — GPU-uri și calcul paralel"
series_index: 61
aliases:
  - /posts/55-tensor-cores/
  - /posts/61-tensor-cores/
tags: []
summary: "Multiply-accumulate pe matrice a devenit operația dominantă în AI — așa că hardware-ul a făcut din ea o primitivă de prim rang"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

În capitolul 53 am văzut nucleele CUDA ca benzi SIMT de uz general, comandate de planificatorul de warp-uri. **Tensor Core** e opusul filozofic: o unitate care face *o singură* operație — înmulțire de matrice cu acumulare — dar o face pe un bloc întreg de numere deodată. Am păstrat termenul englezesc în titlu: inginerii români spun „Tensor Cores”, nu „nuclee tensoriale”, iar NVIDIA îl folosește ca nume propriu de produs.

Toate cifrele de mai jos provin din documente deschise integral: whitepaper-ul Volta (NVIDIA, *NVIDIA Tesla V100 GPU Architecture*, WP-08608-001_v1.1, august 2017, [PDF](https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf)), whitepaper-ul Ampere (NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture*, V1.0, 2020, [PDF](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)), ghidul de programare (NVIDIA, *CUDA Programming Guide*, Release 13.5, 31 octombrie 2026, [PDF](https://docs.nvidia.com/cuda/cuda-programming-guide/pdf/cuda-programming-guide.pdf), descărcat și accesat la 2026-11-05) și specificația PTX (NVIDIA, *PTX ISA 9.5*, [HTML](https://docs.nvidia.com/cuda/parallel-thread-execution/index.html)). Paginile sunt cele tipărite în subsol. **Nu am reușit să descarc whitepaper-ul Hopper (H100)**, așa că acest capitol nu dă nicio cifră pentru Hopper sau generații ulterioare.

**Ce nu acoperă această pagină:** arhitectura Hopper (H100) nu este tratată aici. Pagina se oprește la Volta (V100) și Ampere (A100) și nu conține nicio cifră Hopper, pentru că nu am deschis whitepaper-ul Hopper.

## 1. De ce o unitate dedicată

Whitepaper-ul Volta pune problema direct: operațiile GEMM (înmulțiri matrice–matrice) sunt nucleul antrenării și inferenței rețelelor neuronale, fiind folosite pentru a înmulți matrice mari de date de intrare și ponderi în straturile conectate (NVIDIA, V100 whitepaper, 2017, secțiunea „Tensor Cores”, p. 14). Capitolul 57 al cărții a arătat de ce: convoluțiile se pot rescrie ca produs de matrice (Chellapilla, Puri & Simard, IWFHR 2006, §2), iar atenția este, la bază, tot înmulțire de matrice (Vaswani et al., NeurIPS 2017, Ec. 1).

Într-un nucleu CUDA obișnuit, fiecare operație *fused multiply-add* (FMA) cere propria instrucțiune: aducere, decodare, citire de operanzi din registre, scriere înapoi. O unitate care primește blocuri întregi de matrice plătește acest cost de control o dată pentru zeci de FMA-uri. Raționamentul acesta e al meu, nu un citat; cifra verificabilă vine imediat mai jos, din comparația de debit.

## 2. Volta (2017): primul Tensor Core

### Operația

Whitepaper-ul V100 definește operația: fiecare Tensor Core lucrează pe matrice 4×4 și calculează

```
D = A × B + C
```

unde A, B, C, D sunt matrice 4×4; intrările A și B sunt FP16, iar matricele de acumulare C și D pot fi FP16 sau FP32 (V100 whitepaper, Figura 8, p. 15). Mai precis, Tensor Cores primesc date FP16 și acumulează în FP32: înmulțirea FP16 dă un produs la precizie completă, care este apoi acumulat prin adunare FP32 cu celelalte produse intermediare, pentru o înmulțire de matrice 4×4×4 (același whitepaper, Figura 9, p. 15–16). Figura 10 arată că o astfel de înmulțire 4×4 cere 64 de operații — câte una pentru fiecare cub elementar al produsului 4×4×4 (p. 16).

Aici e un punct fin care contează: „mixed precision” în sensul Volta nu înseamnă că rezultatul e de calitate FP16. Produsele sunt exacte, iar suma se acumulează în FP32 — de aici stabilitatea numerică suficientă pentru antrenare (interpretarea mea; whitepaper-ul spune doar „full precision product” și „FP32 addition”, p. 15).

### Debitul și cum se obține cifra de 125 TFLOPS

Whitepaper-ul dă lanțul complet:

- Tesla V100 are **640 de Tensor Cores**: 8 pe SM, 2 pe fiecare partiție a SM-ului (V100 whitepaper, p. 14).
- Fiecare Tensor Core execută **64 de FMA în virgulă mobilă pe ciclu**; cele 8 dintr-un SM fac 512 FMA, adică 1024 de operații individuale în virgulă mobilă pe ciclu (p. 14).
- Frecvența *GPU Boost* a Tesla V100 este **1530 MHz** (Tabelul 1, p. 10).
- Vârful: **125 Tensor TFLOPS**, cu nota că ratele de vârf sunt calculate la frecvența GPU Boost (Tabelul 1 și nota 1, p. 10; lista de la p. 5).

Verificare aritmetică proprie: 640 × 64 FMA × 2 operații/FMA × 1,53·10⁹ Hz ≈ 125,3·10¹² operații/s, ceea ce coincide cu cifra rotunjită de 125 TFLOPS din whitepaper. Pentru comparație, același tabel dă **15,7 TFLOPS** FP32 pe nucleele CUDA obișnuite ale V100 (Tabelul 1, p. 10) — Tensor Cores aduc deci cam de 8 ori mai mult debit de vârf decât FP32 pe același cip (raport calculat de mine: 125 / 15,7 ≈ 8). Whitepaper-ul formulează altfel comparația, față de generația anterioară: până la 12× mai multe TFLOPS de vârf pentru antrenare față de operațiile FP32 standard pe P100 și până la 6× pentru inferență față de FP16 standard pe P100 (p. 14).

**Atenție la ce fel de cifră e:** 125 TFLOPS este o cifră de **vârf teoretic**, în whitepaper, la frecvența boost, pentru operații *dense* (Volta nu avea suport de *sparsity*; acesta apare abia la A100, vezi mai jos). Nu este o măsurătoare pe o aplicație. Whitepaper-ul pe care l-am deschis e pentru Tesla V100 din era SXM2 (boost 1530 MHz, Tabelul 1, p. 10); **nu** am deschis pagina de produs și **nu** dau aici cifre pentru variantele PCIe / V100S, care pot diferi.

### Cum vede programatorul Tensor Core-ul: warp-ul întreg

Detaliul arhitectural cel mai important pentru legătura cu capitolul 53: un Tensor Core nu e programat de un thread. Whitepaper-ul Volta spune că Tensor Cores sunt expuse în CUDA ca **Warp-Level Matrix Operations**, iar la nivel CUDA interfața presupune matrice de 16×16 care se întind pe **toate cele 32 de thread-uri ale warp-ului** (V100 whitepaper, p. 16).

Ghidul CUDA actual păstrează modelul: operațiile C++ *warp matrix* folosesc Tensor Cores pentru probleme de forma D = A·B + C, sunt suportate pe dispozitive cu *compute capability* 7.0 sau mai mare, cer cooperarea tuturor thread-urilor dintr-un warp și sunt permise în cod condițional doar dacă condiția are aceeași valoare pe tot warp-ul — altfel execuția riscă să se blocheze (*CUDA PG*, Release 13.5, §5.4.11 „Warp Matrix Functions”, p. 663, accesat 2026-11-05). Iată de ce divergența din capitolul 53 nu e doar o problemă de performanță: aici devine o problemă de corectitudine.

Exemplul canonic din ghid face un produs 16×16×16 într-un singur warp (*CUDA PG*, Release 13.5, §5.4.11.7, p. 669, accesat 2026-11-05):

```cpp
#include <mma.h>
using namespace nvcuda;

__global__ void wmma_ker(half *a, half *b, float *c) {
   wmma::fragment<wmma::matrix_a, 16, 16, 16, half, wmma::col_major> a_frag;
   wmma::fragment<wmma::matrix_b, 16, 16, 16, half, wmma::row_major> b_frag;
   wmma::fragment<wmma::accumulator, 16, 16, 16, float> c_frag;
   wmma::fill_fragment(c_frag, 0.0f);
   wmma::load_matrix_sync(a_frag, a, 16);
   wmma::load_matrix_sync(b_frag, b, 16);
   wmma::mma_sync(c_frag, a_frag, b_frag, c_frag);
   // urmează wmma::store_matrix_sync(...) în exemplul din ghid
}
```

Un **fragment** (*fragment*) este bucata dintr-o matrice pe care o ține fiecare thread al warp-ului în registrele sale; ghidul spune explicit că maparea elementelor matricei în stocarea internă a fragmentului „is unspecified and subject to change” în arhitecturi viitoare, de aceea încărcarea și stocarea se fac prin funcțiile `load_matrix_sync` și `store_matrix_sync` (*CUDA PG*, Release 13.5, §5.4.11.1, p. 664, accesat 2026-11-05). Observați legătura cu ocuparea: fragmentele stau în registre, deci un kernel cu Tensor Cores consumă registre multe pe thread (raționament propriu, pe baza capitolului 53).

Diferența de formă merită subliniată: hardware-ul Volta lucrează pe 4×4×4 pe ciclu și pe Tensor Core (whitepaper, p. 15–16), iar interfața CUDA expune 16×16×16 pe warp (whitepaper, p. 16; *CUDA PG*, Release 13.5, §5.4.11, p. 668, accesat 2026-11-05). Cum se descompune operația de warp în operații hardware nu e descris în documentele deschise, iar ghidul descurajează explicit dependența de maparea hardware (*CUDA PG*, Release 13.5, §1.2.2.2, p. 9, accesat 2026-11-05).

## 3. Formatele: ce acceptă WMMA, conform ghidului 13.5

Tabelul de combinații din ghid (*CUDA PG*, Release 13.5, §5.4.11, p. 668–669, accesat 2026-11-05) listează, printre altele:

| Matrice A / B | Acumulator | Forme (m-n-k) | Notă |
|---|---|---|---|
| `__half` (FP16) | `float` sau `__half` | 16×16×16, 32×8×16, 8×32×16 | de la cc 7.0 |
| `unsigned char` / `signed char` (INT8) | `int` | 16×16×16, 32×8×16, 8×32×16 | |
| `__nv_bfloat16` (BF16) | `float` | 16×16×16, 32×8×16, 8×32×16 | cc 8.0+ |
| `precision::tf32` | `float` | 16×16×8 | cc 8.0+ |
| `double` (FP64) | `double` | 8×8×4 | cc 8.0+ |
| `u4` / `s4` / `b1` | `int` | 8×8×32 / 8×8×128 | experimental |

Despre BF16, ghidul spune că are același domeniu ca FP32, dar precizie redusă (7 biți), și că fragmentele BF16 trebuie combinate cu acumulatori `float` (*CUDA PG*, Release 13.5, §5.4.11.2, p. 665–666, accesat 2026-11-05). Despre TF32: format special suportat de Tensor Cores, cu același domeniu ca FP32 și precizie redusă (≥10 biți), cu dispunere internă definită de implementare; matricele de intrare trebuie convertite manual, prin intrinsecul `__float_to_tf32`, iar singura dimensiune suportată în WMMA este 16×16×8 (*CUDA PG*, Release 13.5, §5.4.11.2, p. 666, accesat 2026-11-05). Operațiile *sub-byte* sunt marcate drept *preview*, cu API-uri care se pot schimba (*CUDA PG*, Release 13.5, §5.4.11.1 și §5.4.11.4, p. 664–666, accesat 2026-11-05). Tensor Cores suportă FP64 de la cc 8.0, cu rotunjire la cel mai apropiat par (`.rn`) (*CUDA PG*, Release 13.5, §5.4.11.3, p. 666, accesat 2026-11-05).

**FP8.** În afara WMMA, nivelul PTX expune instrucțiunea `mma` cu tipurile FP8 `.e4m3` și `.e5m2` (de exemplu forma `mma.sync.aligned.m16n8k32.row.col.f32.e4m3.e5m2.f32`), cu cerința „`.e4m3` and `.e5m2` alternate floating point type `mma` operation requires `sm_89` or higher” (NVIDIA, *PTX ISA 9.5*, §9.7.16.5 „Matrix multiply-accumulate operation using `mma` instruction”, [HTML](https://docs.nvidia.com/cuda/parallel-thread-execution/index.html)). Nu dau nicio cifră de debit FP8: whitepaper-ul Hopper, care ar documenta-o pe H100, nu a putut fi descărcat ca PDF (vezi §5).

## 4. Ampere A100 (2020): Tensor Cores de generația a treia

### Un Tensor Core mai mare, mai puține pe SM

Whitepaper-ul A100 descrie schimbarea: la Volta și Turing, un SM are 8 Tensor Cores, fiecare cu 64 FMA FP16/FP32 pe ciclu; SM-ul A100 are **4 Tensor Cores de generația a treia**, fiecare cu **256 FMA FP16/FP32 pe ciclu**, deci 1024 de FMA dense pe ciclu și pe SM — dublu față de Volta și Turing (A100 whitepaper, p. 20). La nivel de formă, whitepaper-ul spune că un Tensor Core Volta calculează o înmulțire mixtă 4×4×4 pe ciclu, iar unul A100 una de **8×4×8** pe ciclu (p. 24). Verificare proprie: 4·4·4 = 64 și 8·4·8 = 256, exact numerele de FMA pe ciclu de mai sus.

A100 are 108 SM-uri și deci 432 de Tensor Cores, care dau până la **312 TFLOPS** de performanță *densă* mixtă FP16/FP32 — de 2,5 ori Tensor Core-ul V100 și de 20 de ori FP32-ul standard al V100, spune whitepaper-ul (p. 24). Frecvența boost folosită în whitepaper este 1410 MHz (Tabelul 8 îl numește „GPU boost clock (1410 MHz)”, p. 56). Verificare proprie: 432 × 256 × 2 × 1,41·10⁹ ≈ 311,9·10¹², adică 312 TFLOPS rotunjit.

### Tabelul de vârfuri: dens vs. sparse

Tabelul 1 al whitepaper-ului A100 (p. 15 tipărită; TOC: „Table 1 … 15”) dă ratele de vârf la GPU Boost Clock; a doua valoare din fiecare pereche este „Effective TFLOPS / TOPS using the new Sparsity feature” (nota 2):

| Format | Dens | Cu sparsity (efectiv) |
|---|---|---|
| FP64 Tensor Core | 19,5 TFLOPS | — |
| TF32 Tensor Core | 156 TFLOPS | 312 TFLOPS |
| FP16 Tensor Core | 312 TFLOPS | 624 TFLOPS |
| BF16 Tensor Core | 312 TFLOPS | 624 TFLOPS |
| INT8 Tensor Core | 624 TOPS | 1 248 TOPS |
| INT4 Tensor Core | 1 248 TOPS | 2 496 TOPS |

Pentru context, același tabel dă FP32 standard 19,5 TFLOPS, FP64 standard 9,7 TFLOPS, FP16 (fără Tensor Cores) 78 TFLOPS și BF16 (fără Tensor Cores) 39 TFLOPS (A100 whitepaper, Tabelul 1, p. 15).

**Regula de citire:** când cineva spune „A100 face 624 TFLOPS FP16”, folosește cifra cu sparsity. Cifra densă din whitepaper este 312. Cifrele cu sparsity sunt *efective*: presupun că una dintre matrice respectă tiparul 2:4 de mai jos. Toate cifrele din tabelul de mai sus sunt din Tabelul 1 al whitepaper-ului A100 (V1.0, p. 15 tipărită); **nu** am deschis pagina de produs și **nu** includ aici valori pentru varianta de 80 GB sau diferențe SXM vs. PCIe.

### TF32 și BF16

Whitepaper-ul A100 spune că arhitectura Ampere adaugă Tensor Cores-urilor trei formate noi — BF16, TF32 și FP64 (p. 26). BF16 are 8 biți de exponent, 7 biți de mantisă și 1 bit de semn (p. 26). TF32 are 8 biți de exponent (ca FP32), 10 biți de mantisă (aceeași precizie ca FP16) și 1 bit de semn; Tensor Cores TF32 citesc date FP32, folosesc același domeniu ca FP32 cu precizie internă redusă și produc o ieșire FP32 IEEE standard (p. 26). Ideea de produs: antrenarea poate folosi implicit Tensor Cores, fără modificări din partea utilizatorului (p. 26), iar operațiile BF16/FP32 rulează la aceeași rată ca FP16/FP32 (p. 21).

Observați simetria: TF32 = domeniul lui FP32 + precizia lui FP16; BF16 = domeniul lui FP32 + o precizie și mai mică. Domeniul larg contează pentru antrenare (gradienții mici nu se pierd în zero), precizia mică contează pentru siliciu — capitolul 59 al cărții revine la această legătură între format și eficiența MAC-ului.

### Sparsity structurată 2:4

Whitepaper-ul A100 introduce *Fine-Grained Structured Sparsity*: structura e impusă printr-o definiție de matrice rară 2:4, care permite două valori nenule în fiecare vector de patru elemente; A100 suportă sparsity 2:4 pe rânduri, iar matricea poate fi comprimată eficient, reducând memoria și lățimea de bandă necesare cu aproape 2× (A100 whitepaper, p. 31). Tot acolo: constrângerea de structură, în general, nu afectează acuratețea rețelei antrenate pentru inferență, pe când pentru accelerarea antrenării metodele fără pierdere de acuratețe sunt încă un domeniu activ de cercetare (p. 31). Capitolul 60 al cărții tratează subiectul pe larg.

## 5. Ce nu am inclus: Hopper și mai departe

Spus direct: **această pagină nu acoperă Hopper (H100).** Am încercat din nou să descarc whitepaper-ul Hopper / datasheet-ul H100 (resources.nvidia.com, images.nvidia.com, developer.download.nvidia.com, nvdam.widen.net): răspunsurile au fost HTML de vizualizator, redirect de locație sau 404, **nu** un PDF verificabil. Așa că aici nu apare nicio cifră Hopper și nu adaug o secțiune Hopper. Cititorul care vrea cifrele H100 le găsește în capitolul 35, unde au fost verificate de editor, cu sursa lor. Singurul fapt despre FP8 din *acest* capitol rămâne cel din PTX ISA 9.5 (§9.7.16.5, sm_89 sau mai nou).

## 6. De la Tensor Core la atenție

Atenția din capitolul 63 se scrie Attention(Q, K, V) = softmax(QKᵀ/√d_k)V (Vaswani et al., „Attention Is All You Need”, NeurIPS 2017, Ec. 1, §3.2.1, [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)). Ambele produse — QKᵀ și înmulțirea cu V — sunt exact forma D = A·B + C pe care o accelerează Tensor Cores, după ce sunt tăiate în plăci (*tiles*) de forma acceptată de hardware (raționament propriu; formele vin din tabelul din secțiunea 3).

Dar Tensor Core-ul rezolvă doar jumătate din problemă. Vârful dens de 312 TFLOPS al A100 trebuie hrănit cu date; whitepaper-ul dă pentru A100 o lățime de bandă HBM2 de 1555 GB/s (A100 whitepaper, p. 16). Raportul — calculat de mine — este de circa 200 de operații FP16 pe fiecare octet adus din HBM (312·10¹² / 1,555·10¹² ≈ 200,6) pentru ca Tensor Cores să nu aștepte memoria. Softmax-ul dintre cele două produse nu e o înmulțire de matrice și nu rulează pe Tensor Cores. FlashAttention pornește exact de aici: argumentează că algoritmii de atenție trebuie să fie *IO-aware*, adică să țină cont de citirile și scrierile între HBM și SRAM-ul de pe cip, și folosește *tiling* pentru a nu scrie în HBM matricea de atenție N×N (Dao et al., „FlashAttention”, NeurIPS 2022, Abstract și §1, [arXiv:2205.14135](https://arxiv.org/abs/2205.14135)). Asta e subiectul capitolului 54: ierarhia de memorie a GPU-ului.

## 7. Nu singurul răspuns

Tensor Cores sunt răspunsul NVIDIA *în interiorul* unui GPU general. Capitolul 58 a arătat matricea sistolică a TPU-ului Google: 65 536 de MAC-uri pe 8 biți, organizate weight-stationary (Jouppi et al., ISCA 2017, Abstract și §2). Aceeași constrângere — înmulțirea de matrice domină — și două organizări diferite ale siliciului.

## Rezumat

- Volta: Tensor Core 4×4×4, FP16 cu acumulare FP16/FP32, 64 FMA/ciclu; V100: 640 de unități, 125 Tensor TFLOPS vârf, dens, la boost 1530 MHz (V100 whitepaper, p. 10, 14–16).
- Programare: la nivel de warp (WMMA, 16×16×16 FP16), toate cele 32 de thread-uri cooperează, condițiile trebuie uniforme pe warp (*CUDA PG*, Release 13.5, §5.4.11, p. 663–669, accesat 2026-11-05).
- A100: 256 FMA/ciclu pe Tensor Core (8×4×8), 432 de unități, FP16/BF16 312 TFLOPS dens / 624 cu sparsity, TF32 156/312 (A100 whitepaper, Tabelul 1, p. 15, 20–26).
- TF32: 1+8+10 biți; BF16: 1+8+7 biți (A100 whitepaper, p. 26).
- Hopper: fără cifre în acest capitol (whitepaper nedeschis).

