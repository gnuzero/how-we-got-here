---
title: "Ierarhia de memorie a GPU-ului"
weight: 62
date: 2026-01-01
draft: false
phase: "9 — GPU-uri și calcul paralel"
series_index: 61
aliases:
  - /posts/54-gpu-memory-hierarchy/
  - /posts/60-gpu-memory-hierarchy/
  - /posts/61-gpu-memory-hierarchy/
tags: []
summary: "Mii de thread-uri cer lățime de bandă, nu doar capacitate — de la registre și memorie partajată până la HBM lipit lângă cip"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Capitolul 35 a numit **zidul memoriei**: calculul a crescut mai repede decât capacitatea memoriei de a-l hrăni. Capitolul 53 a arătat cum un GPU ține zeci de warp-uri rezidente ca să ascundă așteptarea după date, iar capitolul 55 arată Tensor Cores capabile de sute de TFLOPS. Acest capitol leagă cele două: **de unde vin datele** pentru toate aceste thread-uri și de ce ierarhia de memorie a unui GPU arată altfel decât a unui CPU.

Surse deschise integral, cu paginile tipărite în subsol: whitepaper-ul Volta (NVIDIA, *NVIDIA Tesla V100 GPU Architecture*, WP-08608-001_v1.1, august 2017, [PDF](https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf)), whitepaper-ul Ampere (NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture*, V1.0, 2020, [PDF](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)), ghidul (NVIDIA, *CUDA Programming Guide*, Release 13.5, 31 octombrie 2026, [PDF](https://docs.nvidia.com/cuda/cuda-programming-guide/pdf/cuda-programming-guide.pdf)) și FlashAttention (Dao et al., NeurIPS 2022, [arXiv:2205.14135](https://arxiv.org/abs/2205.14135)).

## 1. Etajele, de sus în jos

Ghidul CUDA descrie memoria de pe cip a GPU-ului: fiecare SM are un **fișier de registre** și o **memorie partajată** (*shared memory*), accesibile extrem de rapid thread-urilor care rulează pe SM; registrele țin variabilele locale ale thread-urilor, de obicei alocate de compilator, iar memoria partajată e accesibilă tuturor thread-urilor dintr-un bloc (sau *cluster*) și servește la schimbul de date între ele (*CUDA Programming Guide* 13.5, §1.2.3.3, p. 14). Pe lângă memoriile programabile, există cache-uri: fiecare SM are un **L1**, parte a unui *unified data cache*, iar un **L2** mai mare e partajat de toate SM-urile GPU-ului; fiecare SM are și un cache separat pentru memoria constantă (același §1.2.3.3.1, p. 14). Sub toate stă **memoria globală**, DRAM-ul plăcii — pe V100 și A100, **HBM2**.

Să le punem cifre, pe A100 (cc 8.0), din surse primare:

| Etaj | Capacitate (A100) | Sursă |
|---|---|---|
| Registre | 65 536 × 32 biți / SM (= 256 KB / SM) | A100 whitepaper, Tabelul 5, p. 43; *CUDA PG* 13.5, Tabelul 34, p. 522 |
| L1 + memorie partajată | 192 KB / SM combinat; partajată configurabilă până la 164 KB | A100 whitepaper, p. 15 și Tabelul 5, p. 43 |
| L2 | 40 MB pe GPU | A100 whitepaper, p. 16 și 35 |
| HBM2 | 40 GB, 1555 GB/s | A100 whitepaper, p. 16 |

(Conversia 65 536 × 4 octeți = 256 KB e aritmetică proprie; whitepaper-ul V100 dă explicit „Register File Size / SM: 256KB” pentru V100, Tabelul 1, p. 10.)

Un lucru surprinzător pentru cine vine din lumea CPU: **registrele sunt cel mai mare etaj de pe SM**. Pe V100, aceleași 256 KB de registre pe SM, înmulțite cu 80 de SM-uri, dau 20 480 KB de registre pe GPU (V100 whitepaper, Tabelul 1, p. 10) — mai mult decât L2-ul V100, de 6144 KB (același tabel, rândul „L2 Cache Size”). Motivul ține de capitolul 53: contextul fiecărui warp stă permanent pe cip, pentru ca comutarea să fie gratuită.

## 2. De ce GPU-ul nu se poate baza pe cache-uri ca un CPU

Un CPU rulează puține fluxuri de instrucțiuni și speră că setul de lucru încape în cache. Un GPU are zeci de mii de thread-uri rezidente: pe A100, 108 SM-uri × 2048 de thread-uri = 221 184 de thread-uri simultan (aritmetică proprie pe 108 SM-uri din A100 whitepaper, p. 24, și 2048 thread-uri/SM din Tabelul 5, p. 43). Chiar dacă fiecare cere doar câțiva octeți la un moment dat, cererea agregată e uriașă.

Al doilea motiv e raportul calcul/bandă. A100 are 312 TFLOPS FP16 dens pe Tensor Cores (A100 whitepaper, Tabelul 1, p. 15) și 1555 GB/s de HBM2 (p. 16). Ca să nu aștepte memoria, un kernel trebuie să facă în medie circa 200 de operații pe fiecare octet citit din HBM (312 / 1,555 ≈ 200,6, calcul propriu). Acesta e „punctul de cotitură” (*ridge point*) din modelul roofline (Williams, Waterman & Patterson, „Roofline”, EECS-2008-134, 2008, §3, [PDF](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/Archive/EECS-2008-134.pdf)), aplicat de mine pe cifrele A100. Puțini algoritmi ating această intensitate direct din DRAM; restul trebuie să **reutilizeze** datele în etajele de sus.

Așa că ierarhia GPU-ului nu e doar o cascadă de cache-uri transparente: o parte importantă — registrele și memoria partajată — e **controlată explicit de programator**.

## 3. HBM: memoria lipită lângă cip

Whitepaper-ul V100 descrie HBM2 ca fiind compusă din stive de memorie aflate pe același pachet fizic cu GPU-ul, cu economii substanțiale de putere și arie față de designurile GDDR5 tradiționale (V100 whitepaper, secțiunea „HBM2 Memory Architecture”, p. 21). Pe Tesla V100: patru cipuri de memorie pe stivă, patru stive, maximum 16 GB, 900 GB/s lățime de bandă de vârf pe cele patru stive, față de maximum 732 GB/s la Tesla P100 (p. 21). Interfața de memorie este de 4096 de biți HBM2, față de 384 de biți GDDR5 la generațiile Kepler și Maxwell din același tabel (Tabelul 1, p. 10).

Aici e ideea fizică: în loc de o magistrală îngustă și rapidă spre cipuri aflate departe pe placă, HBM folosește o magistrală **extrem de lată** spre memorie aflată foarte aproape. Capitolul 35 a explicat de ce lățimea de bandă a fost „scăparea” industriei atunci când latența DRAM a rămas încăpățânată.

Whitepaper-ul V100 adaugă și o cifră de eficiență: combinația dintre noua generație HBM2 de la Samsung și noul controler de memorie din Volta dă de 1,5 ori mai multă lățime de bandă livrată decât Pascal GP100 și peste 95% eficiență a lățimii de bandă pe multe sarcini (p. 21, Figura 15). Notați distincția: 900 GB/s e **vârful teoretic**, iar „livrat” e ce obține o aplicație.

Pentru A100, whitepaper-ul dă **40 GB** HBM2 la **1555 GB/s**, o creștere de 73% față de Tesla V100 (A100 whitepaper, p. 16). Whitepaper-ul acesta **nu** documentează varianta de 80 GB; nu dau aici cifre de pe pagina de produs. Dao et al. scriu, ca descriere a ierarhiei, „40–80 GB” de HBM cu lățime de bandă „1.5–2.0 TB/s” (FlashAttention, §2.1, p. 3) — e afirmația *lor*, nu o cifră NVIDIA din whitepaper-ul deschis aici; o redau doar ca citată de ei.

**Ce nu am pus.** Promptul de imagine al capitolului vorbește despre TSV-uri (*through-silicon vias*) și *interposer*. Niciunul dintre documentele deschise pentru acest capitol (cele două whitepaper-e NVIDIA) nu descrie TSV-urile sau interposer-ul, așa că nu dau detalii fizice sau cifre despre ele. Standardul JEDEC pentru HBM (JESD235) ar fi sursa primară potrivită; nu l-am deschis aici.

## 4. L2: ultimul etaj comun

L2 este partajat de toate SM-urile (*CUDA PG* 13.5, §1.2.3.3.1, p. 14). La A100, whitepaper-ul spune că L2 are 40 MB, de 6,7 ori mai mare decât al Tesla V100, și că sarcinile limitate de lățimea de bandă DRAM beneficiază de el — de exemplu rețelele neuronale cu *batch* mic — pentru că porțiuni mai mari din date și modele pot fi ținute în cache și reaccesate mult mai repede decât din HBM2 (A100 whitepaper, secțiunea „A100 L2 Cache”, p. 35). Ampere introduce și controale de rezidență în L2, care permit aplicațiilor să marcheze date pentru păstrare persistentă în cache și să reducă traficul DRAM (A100 whitepaper, Figura 16, p. 41); ghidul 13.5 descrie API-ul corespunzător în §4.15 „L2 Cache Control” (p. 413).

## 5. L1 și memoria partajată: același siliciu

Volta a unificat cele două: whitepaper-ul spune că subsistemul combinat L1 / memorie partajată are 128 KB pe SM, că programele care nu folosesc memoria partajată pot folosi totul drept cache și că, de exemplu, dacă memoria partajată e configurată la 64 KB, operațiile de load/store pot folosi restul de 64 KB ca L1 (V100 whitepaper, „Enhanced L1 Data Cache and Shared Memory”, p. 17). Tot acolo, NVIDIA spune că integrarea face ca L1-ul GV100 să aibă latență mult mai mică și lățime de bandă mai mare decât L1-urile generațiilor anterioare (p. 17). Pe A100, capacitatea combinată crește la 192 KB pe SM (A100 whitepaper, p. 15).

Ce câștigi cu memoria partajată față de un cache? **Control.** Tu decizi ce stă acolo și cât timp. Asta permite tiparul fundamental al GEMM-ului și al atenției: un bloc încarcă o placă (*tile*) din matrice în memoria partajată o singură dată, apoi toate thread-urile blocului o reutilizează de multe ori.

### Bănci și conflicte

Ghidul precizează: memoria partajată are **32 de bănci**, organizate astfel încât cuvinte succesive de 32 de biți corespund unor bănci succesive, iar fiecare bancă are o lățime de bandă de 32 de biți pe ciclu (*CUDA PG* 13.5, §2.3.4.2, p. 63). Când mai multe thread-uri din același warp accesează elemente *diferite* din aceeași bancă, apare un **conflict de bancă**, iar accesele la acea bancă se serializează (același loc). Excepția: dacă mai multe thread-uri citesc *aceeași* locație, cuvântul e difuzat (*broadcast*) (același loc). Ghidul dă exemplele clasice: adresare liniară cu pas de un cuvânt — fără conflict; pas de două cuvinte — conflict în două căi; pas de trei cuvinte — fără conflict (p. 63–64).

Exemplu **ilustrativ**, calculat pe regula din §2.3.4.2: o matrice `float tile[32][32]` în memoria partajată, citită pe coloană de un warp (thread-ul *i* citește `tile[i][0]`). Adresele sunt la distanță de 32 de cuvinte de 32 de biți, deci toate cad în banca 0: conflict în 32 de căi, 32 de accese serializate. O coloană de umplutură — `float tile[32][33]` — face pasul 33 de cuvinte; 33 mod 32 = 1, deci thread-ul *i* lovește banca *i* mod 32, fără conflict. Aritmetica e proprie; regula băncilor e din ghid (*CUDA PG* 13.5, §2.3.4.2, p. 63).

## 6. Memoria globală: coalescerea

Aici warp-ul din capitolul 53 revine în centru. Ghidul spune că memoria globală e accesată prin tranzacții de 32 de octeți; când un thread cere un cuvânt, warp-ul **coalescează** cererile tuturor celor 32 de thread-uri în numărul de tranzacții necesar, în funcție de mărimea cuvântului și de distribuția adreselor (*CUDA PG* 13.5, §2.3.4.1, p. 60). Exemplul ghidului: dacă thread-uri consecutive cer cuvinte consecutive de 4 octeți, warp-ul cere în total 128 de octeți, aduși în patru tranzacții de 32 de octeți — utilizare 100% a tranzacțiilor (același loc). Cel mai simplu mod de a obține coalescere este ca thread-uri consecutive să acceseze adrese consecutive (același §, p. 60–61).

Exemplu **ilustrativ** pe aceeași regulă: dacă fiecare thread citește un `float` aflat la 128 de octeți de cel al vecinului, fiecare cerere cade în altă tranzacție de 32 de octeți — 32 de tranzacții, adică 1024 de octeți transferați pentru 128 de octeți utili, eficiență 12,5% (calcul propriu: 128/1024). Pe o memorie de 1555 GB/s, asta înseamnă că kernel-ul „vede” efectiv o optime din ea.

## 7. Registrele: cel mai rapid etaj, și cel mai disputat

Registrele sunt per thread; un bloc încape pe un SM doar dacă registrele pe thread × thread-urile din bloc nu depășesc registrele SM-ului (*CUDA PG* 13.5, §1.2.3.3, p. 14). Maximul este 255 de registre pe thread pe cc 8.0 (A100 whitepaper, Tabelul 5, p. 43). Ce nu încape în registre ajunge în **memoria locală**: ghidul enumeră printre candidați tablourile indexate neconstant, structurile prea mari și orice variabilă când kernel-ul cere mai multe registre decât există (*register spilling*), și precizează că memoria locală rezidă în memoria dispozitivului, deci are aceeași latență și lățime de bandă ca memoria globală; e totuși organizată astfel încât accesele sunt complet coalescate dacă toate thread-urile warp-ului accesează aceeași adresă relativă (*CUDA PG* 13.5, §2.3, p. 53–54). De aceea `--maxrregcount` din capitolul 53 e o sabie cu două tăișuri: mai puține registre înseamnă ocupare mai mare, dar și *spill* spre DRAM.

Ampere adaugă o scurtătură: o instrucțiune de **copiere asincronă** care încarcă date direct din memoria globală în memoria partajată a SM-ului, fără să mai treacă prin fișierul de registre; NVIDIA spune că reduce lățimea de bandă a registrelor, folosește mai eficient memoria și reduce consumul, și că poate rula în fundal cât timp SM-ul calculează altceva (A100 whitepaper, „Asynchronous Copy”, p. 17).

## 8. Atenția ca problemă de memorie

Acum avem vocabularul pentru capitolul 63. Atenția standard calculează S = QKᵀ, aplică softmax pe rânduri și înmulțește cu V (Vaswani et al., NeurIPS 2017, Ec. 1). Pentru o secvență de lungime N, matricea S are N×N elemente — Tabelul 1 al lui Vaswani et al. dă complexitatea pe strat O(n²·d) pentru *self-attention* (§4, Tabelul 1).

FlashAttention reformulează problema exact în termenii acestui capitol. Autorii descriu ierarhia de memorie a A100: 40–80 GB de HBM cu lățime de bandă 1,5–2,0 TB/s și 192 KB de SRAM pe cip pentru fiecare din cele 108 SM-uri, cu o lățime de bandă *estimată* la circa 19 TB/s; SRAM-ul de pe cip e cu un ordin de mărime mai rapid decât HBM, dar cu multe ordine de mărime mai mic (Dao et al., 2022, §2.1, p. 3). Atenție: cifra de 19 TB/s este o **estimare** a autorilor, nu o cifră NVIDIA din whitepaper-ul deschis aici; o redau ca citată de Dao et al. Algoritmul folosește *tiling* ca să reducă citirile/scrierile dintre HBM și SRAM și nu scrie niciodată în HBM matricea de atenție N×N; autorii raportează până la 7,6× accelerare pe GPT-2 față de implementarea PyTorch (Dao et al., 2022, Abstract, Figura 1 și §1).

Nimic din FlashAttention nu face mai puține operații aritmetice decât atenția standard în sensul asimptotic; câștigul vine din **mai puțin trafic spre HBM** (Dao et al., 2022, §1 și §3.2, unde se analizează complexitatea IO). Este zidul memoriei din capitolul 35, ocolit cu memoria partajată din acest capitol, pe warp-urile din capitolul 53, pentru Tensor Cores din capitolul 55.

## Rezumat

- Etajele: registre → L1/memorie partajată (pe SM) → L2 (comun) → HBM (*CUDA PG* 13.5, §1.2.3.3).
- A100: 256 KB registre/SM, 192 KB L1+partajată/SM, 40 MB L2, 40 GB HBM2 la 1555 GB/s (A100 whitepaper, p. 15–16, 43).
- V100: HBM2 4 stive × 4 cipuri, 16 GB, 900 GB/s vârf, interfață 4096 biți (V100 whitepaper, p. 10, 21).
- Memoria partajată: 32 de bănci de 32 biți; conflictele serializează (*CUDA PG* 13.5, §2.3.4.2).
- Memoria globală: tranzacții de 32 B; acces consecutiv = coalescere completă (*CUDA PG* 13.5, §2.3.4.1).
- FlashAttention: atenție exactă, IO-aware, cu tiling în SRAM (Dao et al., 2022).

