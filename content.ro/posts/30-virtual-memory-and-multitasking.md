---
title: "Memoria virtuală și multitaskingul"
weight: 30
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 29
aliases:
  - /posts/24-virtual-memory-and-multitasking/
  - /posts/29-virtual-memory-and-multitasking/
tags: []
summary: "Adresa folosită de program nu mai este locul din memorie: pagini, defecte de pagină, working set și thrashing"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Time-sharing-ul din capitolul 22 ține mai multe programe în aceeași memorie. Articolul CTSS din 1962 cerea deja de la hardware protecția memoriei și relocarea dinamică a fiecărei accesări (Corbató, F. J., Merwin-Daggett, M., Daley, R. C., „An Experimental Time-Sharing System”, *Proc. AFIPS 1962 SJCC*, vol. 21, pp. 335–344, aici p. 336; [cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf](https://cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf), accesat 2026-11-05). Memoria virtuală generalizează aceste două cerințe într-o singură idee: adresa pe care o folosește programul nu mai este adresa fizică din memorie.

## Ideea de bază: adresa nu e locul

Peter Denning rezumă în 1970 ideea astfel: într-o memorie virtuală, adresele pe care le folosește un program se deosebesc de adresele cu care sistemul de memorie identifică locațiile fizice, iar traducerea dintre ele se face automat (Denning, P. J., „Virtual Memory”, *Computing Surveys* 2(3), septembrie 1970, pp. 153–189, abstract; [denninginstitute.com/pjd/PUBS/VirtMem_1970.pdf](https://denninginstitute.com/pjd/PUBS/VirtMem_1970.pdf), accesat 2026-11-05). Denning numește motivele: modularitatea programelor, independența față de mașină și partajarea resurselor (ibid., abstract). Tot el scrie că, astfel, problema alocării memoriei „vanishes completely from the programmer's purview” și trece în sarcina sistemului (ibid., p. 156).

Denning plasează originea în 1961, când grupul de la Manchester a publicat propunerea unei memorii pe un singur nivel (*one-level store*) pentru calculatorul Atlas, „a proposal that has had profound influence on computer system architecture” (ibid., p. 156). El adaugă că, până la mijlocul anilor 1960, ideea fusese aplicată în proiectarea multor procesoare mari, între care IBM 360/85 și 195, CDC 7600, Burroughs B6500 și GE 645 (ibid., p. 156).

## Atlas: miez de ferite plus tambur, văzute ca o singură memorie

Articolul lui Kilburn, Edwards, Lanigan și Sumner explică de ce: pe Atlas se puteau adresa 10⁶ cuvinte, iar prima instalație de la Universitatea Manchester avea în total 10⁵, dar era mult mai economic să le dai ca o combinație de memorie cu ferite (16.000 de cuvinte) și tambur magnetic (96.000 de cuvinte) decât ca un singur nivel rapid (Kilburn, T., Edwards, D. B. G., Lanigan, M. J., Sumner, F. H., „One-Level Storage System”, §1 „Introduction”; copie: [dcs.gla.ac.uk/~wpc/grcs/kilburn.pdf](https://www.dcs.gla.ac.uk/~wpc/grcs/kilburn.pdf), accesat 2026-11-05). Timpul de acces la tambur era de 6 ms (ibid., §1).

Datele de publicare lipsesc din copia de la Glasgow. Metadatele DOI (Crossref) dau *IRE Transactions on Electronic Computers*, vol. EC-11, nr. 2, aprilie 1962, pp. 223–235, DOI [10.1109/TEC.1962.5219356](https://doi.org/10.1109/TEC.1962.5219356) (Crossref, interogare api.crossref.org, accesat 2026-11-05). Numerele de secțiune de mai jos sunt cele din copia de la Glasgow; originalul IRE nu a fost deschis (paywall). <!-- NEVERIFICAT: paginile individuale din originalul IRE pentru afirmațiile din §1–§6 | surse încercate: copia dcs.gla.ac.uk (fără paginație), Crossref (doar metadate) -->

Autorii spun de ce nu se putea lăsa programatorul să organizeze singur transferurile: Atlas rula echipamentele periferice prin întreruperi și putea ține mai multe programe în memorie în același timp, așa că nu era „really feasible” să „optimizezi” transferurile dintre ferite și tambur din program (ibid., §1). Soluția a fost un sistem care face ca ferita și tamburul să apară programatorului ca un singur nivel de memorie, cu transferuri automate (ibid., §1). Ca beneficii suplimentare, ei numesc adresarea relativă, care permite rutinelor să ruleze oriunde în memorie, și un mecanism de blocare (*lock out*) care împiedică interferența dintre programele aflate simultan în memorie (ibid., §1).

### Pagini, registre de adresă de pagină și „nonechivalență”

Memoria centrală era împărțită în blocuri de 512 cuvinte, iar memoria cu ferite era împărțită în poziții de aceeași mărime, numite **pagini** (ibid., §3 „One-Level Store Concept”). Fiecărei pagini din ferită îi corespundea un registru de adresă de pagină (*page address register*, PAR), care conținea numărul blocului aflat acolo în acel moment (ibid., §3). La fiecare acces, adresa de bloc cerută era comparată cu toate registrele PAR; dacă apărea o „echivalență”, accesul era permis la acea pagină (ibid., §3). Un bloc putea ocupa oricare dintre cele 32 de poziții de pagină din ferită (ibid., §3).

Dacă nu exista echivalență, adresa cerută era salvată într-un registru și apărea o întrerupere, care pornea o rutină din memoria fixă ce organiza transferul dintre tambur și ferită (ibid., §3). Este ceea ce azi numim *page fault* (defect de pagină), deși termenul nu apare în articol.

**Exemplu ilustrativ (calculul nostru, nu din articol):** cu blocuri de 512 cuvinte, cuvântul cu adresa 1.000 din memoria centrală se află în blocul 1, la linia 488, pentru că 1.000 = 1 × 512 + 488. Mașina caută „blocul 1” printre cele 32 de registre PAR; dacă îl găsește, de exemplu în poziția de pagină 7, accesul merge la linia 488 din pagina fizică 7. Dacă nu îl găsește, apare întreruperea.

Am găsit o neconcordanță între surse: articolul lui Kilburn et al. vorbește de 32 de poziții de pagină în ferită (§3), iar pagina de istorie Multics spune că paginarea fusese demonstrată pe Atlas „with 16 pages” (Multicians, „Multics History”, §2.0.1 „Predecessors”, [multicians.org/history.html](https://multicians.org/history.html), accesat 2026-11-05). Cifra 32 se potrivește cu descrierea hardware din articol: patru stive de câte 4.096 de cuvinte (Kilburn et al., §2), adică 16.384 de cuvinte împărțite la 512 dau 32 (calculul nostru). Și programul de „învățare” ține „32 values of t and T, one of each for each page of the core store” (Kilburn et al., §5). Pe pagină folosim 32, cifra din sursa primară.

### Tamburul și primul algoritm de înlocuire

Timpul unui transfer de citire de pe tambur varia între 2 și 14 ms, pentru că o rotație dura 12 ms și transferul propriu-zis 2 ms (ibid., §3A „Drum Transfers”). Scrierea pe tambur era accelerată prin scrierea blocului în prima poziție liberă de pe oricare tambur, cu un director actualizat la fiecare transfer (ibid., §3A).

Când ferita era plină, sistemul trebuia să aleagă ce pagină trimite înapoi pe tambur. Autorii observă că alegerea ideală ar putea-o face doar programatorul, care însă ar trebui să știe exact cum funcționează programul său, „which is not always the case”, și câtă memorie îi este disponibilă în fiecare moment, informație care în general nu există, pentru că memoria e împărțită cu alte programe (ibid., §5 „The Drum Transfer Learning Program”). Soluția lor, programul de „învățare” (*learning program*), urmărea comportamentul programului: fiecare pagină avea un bit de utilizare (*use digit*), pus pe 1 la orice acces, iar biții erau copiați într-o listă la fiecare 1.024 de instrucțiuni executate (ibid., §5). Folosirea unui contor de instrucțiuni în locul unui ceas real era deliberată: programul principal putea fi întrerupt aleator de periferice, iar contorul păstra același tipar temporal la rulări succesive (ibid., §5).

Din aceste date, programul ținea pentru fiecare pagină două valori: *t*, timpul de când pagina nu a mai fost folosită, și *T*, durata ultimei perioade de inactivitate (ibid., §5). Prima regulă alegea orice pagină nefolosită de mai mult timp decât ultima ei perioadă de inactivitate, adică o pagină pe care programul probabil nu o mai folosește (ibid., §5). Autorii raportează că metoda ocupa mai puțin de 1% din timpul de funcționare, iar reducerea numărului de transferuri acoperea cu prisosință acest cost (ibid., §5).

## Working set: câtă memorie îi trebuie de fapt unui proces

Denning pornește în 1968 de la observația că, într-un sistem cu resurse multiplexate, fiecare utilizator primește iluzia că are la dispoziție un sistem de calcul complet, un „calculator virtual”, cu procesor virtual și memorie virtuală „infinită”, pe un singur nivel (Denning, P. J., „The Working Set Model for Program Behavior”, *Communications of the ACM* 11(5), mai 1968, pp. 323–333, aici p. 323; [denninginstitute.com/pjd/PUBS/WSModel_1968.pdf](https://denninginstitute.com/pjd/PUBS/WSModel_1968.pdf), accesat 2026-11-05). El susține că sistemul de operare trebuie să afle singur comportamentul programelor, pentru că nici utilizatorul, nici compilatorul nu pot da informații de alocare adecvate (ibid., p. 323).

Definiția lui: *working set*-ul W(t, τ) al unui proces la momentul *t* este mulțimea informației la care procesul a făcut referire în intervalul de timp de proces (t − τ, t); τ se numește parametrul working set-ului (ibid., p. 325). Din punctul de vedere al sistemului, aceasta înseamnă mulțimea paginilor folosite cel mai recent (ibid., p. 325). Una dintre proprietățile enunțate: mărimea working set-ului crește monoton cu τ, pentru că într-un interval mai lung pot fi referite mai multe pagini (ibid., p. 325, proprietatea P1).

### Thrashing

Denning descrie și fenomenul care face memoria virtuală periculoasă în multiprogramare: când prea multe working set-uri ocupă memoria principală, fiecare îi dislocă paginile celuilalt ca să și le aducă pe ale sale, iar acest fenomen, „known as thrashing”, poate lăsa multe programe blocate în așteptarea paginilor și poate degrada serios serviciul (ibid., p. 332). Concluzia lui practică: memoria trebuie echilibrată prima, iar procesorul abia după aceea (ibid., p. 332). Tot acolo, el compară patru politici de înlocuire a paginilor, aleatoare, FIFO, LRU și working set, și scrie că politica aleatoare produce cel mai mare trafic de pagini, iar working set-ul cel mai mic (ibid., p. 332).

În sinteza din 1970, Denning enumeră problemele întâlnite de implementările de atunci: fragmentarea, pentru că cererile de memorie sunt rotunjite la un număr întreg de pagini; costul mare al paginării „pure” la cerere (*pure demand paging*), când paginile de lucru ale unui program sunt aduse una câte una la începutul fiecărui quantum; și sensibilitatea extremă la thrashing (Denning, 1970, p. 156).

## Segmente și pagini: Multics

Denning compară în 1970 cele două metode principale: segmentarea, care organizează spațiul de adrese în blocuri de mărime variabilă, și paginarea, care îl organizează în pagini de mărime fixă (Denning, 1970, p. 156). Multics le combina: memoria era împărțită în segmente adresate direct de programe, segmentele puteau fi partajate între spațiile de adrese ale mai multor procese, iar fiecare segment avea adrese de la 0 la 256K cuvinte (1 MB) (Multicians, „Multics History”, §1.2.1 „Segmented memory”). Aceeași pagină îl creditează pe profesorul Jack Dennis de la MIT cu ideea de a combina paginarea și segmentarea (ibid., §2.0.1).

## Multitasking: de ce protecția vine din traducere

Legătura cu multitaskingul apare deja în textele primare. Kilburn et al. enumeră ca avantaje ale sistemului automat alocarea eficientă a memoriei între programe diferite și mecanismele de blocare, și observă că niciun programator, oricât de inteligent, nu poate ști câte programe sau periferice funcționează în timp ce rulează programul său (Kilburn et al., §6 „Conclusions”). Articolul despre Unix din 1974 notează că a doua versiune a sistemului rula pe un PDP-11/20 „unprotected” (Ritchie, D. M., Thompson, K., „The UNIX Time-Sharing System”, *CACM* 17(7), 1974, §1; [people.eecs.berkeley.edu/~brewer/cs262/unix.pdf](https://people.eecs.berkeley.edu/~brewer/cs262/unix.pdf), accesat 2026-11-05), iar Ritchie descrie munca pe acea mașină fără protecție a memoriei ca una în care fiecare program nou testat putea prăbuși ușor sistemul (Ritchie, D. M., „The Evolution of the Unix Time-sharing System”, 1984, „The first PDP-11 system”; [nokia.com/bell-labs/about/dennis-m-ritchie/hist.html](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html), accesat 2026-11-05).

<!-- NEVERIFICAT / omis: detaliile tabelelor de pagini multinivel, TLB și bitul NX la x86-64 cer Intel SDM (403 la fetch automat). Nu le includ până nu sunt verificate dintr-o sursă deschisă. -->

## Ce urmează

Memoria virtuală izolează *memoria* proceselor. Capitolul 25 arată cum nucleul Linux izolează și restul: arborele de procese, rețeaua, sistemul de fișiere și consumul de resurse.

**Încearcă acum.** Pornește mașina virtuală de mai jos și rulează câteva comenzi: fiecare rulează ca proces separat al nucleului Linux din mașină.

<!-- NEVERIFICAT: un exercițiu cu /proc/self/maps ar cere proc(5) deschis și ieșirea verificată în VM; omis. -->

{{< lab type="vm-terminal" >}}
