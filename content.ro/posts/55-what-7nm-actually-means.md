---
title: "Ce înseamnă de fapt „7nm”"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — Noduri de proces și fabricație"
series_index: 54
aliases:
  - /posts/47-what-7nm-actually-means/
  - /posts/53-what-7nm-actually-means/
  - /posts/54-what-7nm-actually-means/
tags: []
summary: "Numele de nod nu mai măsoară nicio lungime de pe tranzistor: fizica stă în pitch-uri și densitate, iar eticheta numește doar o generație"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

Când un comunicat de presă anunță un cip „pe 7 nanometri” sau „pe 3 nanometri”, cititorul presupune, firesc, că undeva pe tranzistor există ceva lung de 7 sau de 3 nanometri. Capitolul acesta arată, cu documente pe care le puteți deschide singuri, că presupunerea nu mai e adevărată de mult. Inginerii români spun și ei **nod** (din englezescul *node* sau *technology node*), adică o generație de proces de fabricație, și **pitch**, adică pasul de repetiție al unui motiv geometric: lățimea unei linii plus spațiul până la următoarea. Le păstrez pe amândouă, pentru că așa apar în fișele tehnice.

Sursele deschise integral pentru acest capitol sunt: capitolul *More Moore* al foii de parcurs IRDS 2022 (IEEE, *International Roadmap for Devices and Systems 2022 Update: More Moore*, [PDF](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_MM.pdf), accesat 2026-11-05); capitolul *Lithography* al aceleiași ediții (IEEE, *IRDS 2022: Lithography*, [PDF](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_Litho.pdf), accesat 2026-11-05); capitolul *Lithography* IRDS 2021 (IEEE, [PDF](https://irds.ieee.org/images/files/pdf/2021/2021IRDS_Litho.pdf), accesat 2026-11-05) pentru etichetele „1.0 eq” / „0.7 eq” din Tabelul LITH-1; legenda Badaroglu, IRDS More Moore update, ICOS workshop 2023 (`eq` = *equivalent*); editorialul lui Mark Bohr de la Intel, „Let’s Clear Up the Node Naming Mess” (28 martie 2017, [copie arhivată](https://web.archive.org/web/2017/https://newsroom.intel.com/editorials/lets-clear-up-node-naming-mess/), accesat 2026-11-05); prezentarea Intel „Advancing Moore’s Law in 2014!” (Bohr, 11 august 2014, [PDF arhivat](https://web.archive.org/web/2018/https://www.intel.com/content/dam/www/public/us/en/documents/presentation/advancing-moores-law-in-2014-presentation.pdf), accesat 2026-11-05); fișa Intel „Intel’s 10 nm Technology” (septembrie 2017, [PDF arhivat](https://web.archive.org/web/2017/https://newsroom.intel.com/wp-content/uploads/sites/11/2017/09/10-nm-icf-fact-sheet.pdf), accesat 2026-11-05); manualul lui Chenming Hu, *Modern Semiconductor Devices for Integrated Circuits* (Pearson, 2010), capitolul 7 ([PDF de pe site-ul autorului](https://www.chu.berkeley.edu/wp-content/uploads/2020/01/Chenming-Hu_ch7.pdf), accesat 2026-11-05); și comunicatele Samsung (30 iunie 2022) și IBM (6 mai 2021), citate mai jos cu linkuri.

O precizare de metodă. Cifrele de densitate și de performanță publicate de un producător sunt **afirmații ale producătorului** (*vendor claims*), nu măsurători independente; le marchez de fiecare dată ca atare. Nu am deschis nicio analiză de inginerie inversă (TechInsights, WikiChip), așa că pagina nu conține cifre măsurate independent pe cipuri comerciale.

## 1. Când numele era chiar o lungime

Manualul lui Hu dă un tabel cu nodurile de la 90 nm la 22 nm, cu anul livrării și lungimea de poartă corespunzătoare (Hu, 2010, cap. 7, Tabelul 7–1, p. 262). Pentru nodul de 90 nm, livrat în 2003, tabelul dă o lungime de poartă *Lg* de 37 nm pentru varianta de înaltă performanță (HP) și 65 nm pentru varianta de consum redus (LSTP) (Hu, 2010, Tabelul 7–1). Pentru nodul de 22 nm, cu livrare în 2013, același tabel dă 13 nm (HP) și 20 nm (LSTP) (Hu, 2010, Tabelul 7–1). Deci deja în anii 2000 lungimea de poartă a variantei rapide era mai mică decât numele nodului, iar a celei economice era apropiată de el; tabelul nu spune că numele ar fi egal cu vreo cotă anume. Ce rămâne valabil e că, în epoca aceea, numele și dimensiunile reale se micșorau împreună, cu un raport aproximativ constant.

Mark Bohr descrie regula de numire istorică: industria a numit fiecare nod nou cu aproximativ 0,7 din valoarea precedentului, o scalare liniară care implică dublarea densității (Bohr, 2017, „Let’s Clear Up the Node Naming Mess”). Exemplele lui sunt seria 90 nm, 65 nm, 45 nm, 32 nm, fiecare permițând de două ori mai mulți tranzistori pe aceeași arie decât precedentul (Bohr, 2017). Aritmetica e simplă și o fac eu: dacă ambele dimensiuni ale unei celule scad cu factorul 0,7, aria scade cu 0,7 × 0,7 = 0,49, deci cam la jumătate, iar densitatea se dublează (calculul meu).

## 2. Ruptura

Același editorial spune ce s-a stricat: unele companii au abandonat regula, dar au continuat să avanseze numele de nod chiar și acolo unde creșterea de densitate a fost minimă sau inexistentă (Bohr, 2017). Concluzia lui Bohr este că numele de nod au devenit un indicator slab al locului în care se află un proces pe curba legii lui Moore (Bohr, 2017). Trebuie spus cine vorbește: Bohr era Senior Fellow la Intel, iar editorialul a apărut pe site-ul de presă Intel, într-un moment în care Intel își compara procesul de 10 nm cu procesele „de 10 nm” ale concurenței (Bohr, 2017, nota de autor; Intel, fișa 10 nm, 2017). Argumentul de fond rămâne verificabil în cifrele de mai jos, dar tonul nu e neutru.

Foaia de parcurs IRDS, redactată de un comitet IEEE și nu de un singur producător, spune același lucru mai sec: nu există încă un consens privind numirea nodurilor între diferitele turnătorii (*foundries*) și producătorii integrați (IDM) (IRDS 2022 More Moore, §4.1 „Ground Rules Scaling”, p. 6). Tot acolo, IRDS spune ce consideră a fi parametrii-cheie: pitch-ul porții, pitch-ul metalului, pitch-ul fin-ului, lungimea porții și capacitatea de a stivui niveluri 3D (IRDS 2022 More Moore, §4.1, p. 6).

## 3. Ce măsori de fapt pe un tranzistor modern

Ca să citiți tabelele, aveți nevoie de patru cote. Le definesc aici, cu sursa fiecărei definiții.

**Gate pitch** (pitch-ul porții, numit și *contacted poly pitch*, CPP) este lățimea porții plus spațiul dintre porți vecine (Bohr, 2017). IRDS folosește termenul „contacted gate pitch” și îl notează *Gxx* (IRDS 2022 More Moore, Tabelul MM-7, nota, p. 7). Intel îl numește „Transistor Gate Pitch” (Bohr, 2014, slide 16).

**Metal pitch** (pitch-ul metalului) este lățimea unei linii de interconectare plus spațiul până la linia următoare (Bohr, 2017). IRDS notează cu *Mxx* cel mai strâns pitch de metal, în nanometri (IRDS 2022 More Moore, Tabelul MM-7, nota, p. 7).

**Fin pitch** este distanța de repetiție dintre aripioarele de siliciu ale unui FinFET (Bohr, 2014, slide 16, „Transistor Fin Pitch”). Arhitectura FinFET în sine e subiectul capitolului 49.

**Gate length** (lungimea porții, *Lg*) este dimensiunea porții de-a lungul canalului, adică distanța pe care purtătorii o traversează sub poartă (Hu, 2010, cap. 7, §7.1–7.3, unde *Lg* e mărimea care se scalează).

Observați că niciuna dintre aceste patru cote nu se numește „7 nm” sau „3 nm”. Eticheta de nod nu figurează în nicio listă de parametri fizici din IRDS; ea apare separat, ca rând de etichetare (IRDS 2022 More Moore, Tabelul MM-7, p. 7).

## 4. Dovada din tabelul IRDS

Tabelul MM-7 din IRDS 2022 are un rând numit, cu ghilimele cu tot, *Logic industry "Node Range" Labeling* (IRDS 2022 More Moore, Tabelul MM-7, p. 7). Ghilimelele sunt ale IRDS, nu ale mele; le-am citit pe imaginea tabelului din PDF. Pentru anul de producție 2022, eticheta este „3nm”, iar notația de pitch este **G48M24** (IRDS 2022 More Moore, Tabelul MM-7, p. 7). Același tabel dă, pentru 2022, următoarele „ground rules” (reguli de bază ale geometriei):

| Mărime (IRDS 2022, anul 2022) | Valoare |
|---|---|
| Eticheta de nod | „3nm” |
| Gate pitch | 48 nm |
| Mx pitch (metal de rutare strâns) | 32 nm |
| M1 pitch | 32 nm |
| M0 pitch | 24 nm |
| Lg, variantă HP | 16 nm |
| Lg, variantă HD (densitate mare) | 18 nm |
| Lățimea fin-ului (FinFET) | 5,0 nm |
| Pitch lateral al dispozitivului | 24 nm |
| Înălțimea dispozitivului | 48 nm |

Toate valorile din tabel sunt din IRDS 2022 More Moore, Tabelul MM-7, p. 7, citite de mine pe imaginea tabelului din PDF (tabelul nu există ca text, ci doar ca imagine).

Comparați acum. Eticheta e „3nm”, dar cel mai mic pitch de metal din tabel este 24 nm, adică de opt ori mai mare, iar pitch-ul porții de 48 nm este de 16 ori mai mare (calculul meu, din valorile IRDS de mai sus). Chiar și lungimea fizică a porții, 16–18 nm, este de peste cinci ori mai mare decât eticheta (calculul meu). Singura cotă din tabel apropiată ca mărime de etichetă este lățimea fin-ului, 5 nm, iar nici ea nu coincide cu „3” (IRDS 2022 More Moore, Tabelul MM-7). Concluzia mea, din tabelul IRDS: în 2022, eticheta „3nm” nu corespundea niciunei cote listate de foaia de parcurs.

Pentru anul 2025, același tabel dă eticheta „2nm” și notația G45M20 (IRDS 2022 More Moore, Tabelul MM-7, p. 7). Pentru 2028, eticheta este „1.5nm” cu G42M16, iar pentru 2031 apare „1.0nm eq” cu G40M16/T2, unde *T2* înseamnă două niveluri stivuite (IRDS 2022 More Moore, Tabelul MM-7 și nota lui, p. 7). Sufixul „eq” din etichetele de după 2031 marchează o **echivalență** de nod, nu o lungime fizică: Tabelul LITH-1 din IRDS 2021 Lithography listează etichetele industriei inclusiv „1.0 eq” și „0.7 eq” (IRDS 2021 Lithography, Tabelul LITH-1), iar legenda unei prezentări IRDS More Moore din 2023 glosează `eq` ca *equivalent* (Badaroglu, IRDS More Moore update, ICOS workshop 2023, legendă). În Tabelul MM-7 din 2022, „1.0nm eq” e împerecheat cu G40M16/**T2** — două niveluri stivuite — deci densitatea pe mm² vine și din stivuire, nu doar din pitch-uri (IRDS 2022 More Moore, Tabelul MM-7 și nota GxxMxx/Tx, p. 7).

Un detaliu care arată cât de convențională e eticheta: capitolul *Lithography* al aceleiași ediții IRDS 2022 numește nodul din 2025 „2.1 nm”, cu aceeași notație G45M20 (IRDS 2022 Lithography, Tabelul LITH-2, p. 3). Același an, aceeași geometrie, două etichete diferite în două capitole ale aceluiași document; geometria (G45M20) e cea care coincide (comparația mea între Tabelul MM-7 și Tabelul LITH-2).

IRDS mai proiectează că lungimea fizică a canalului se va satura în jurul a 12 nm din cauza electrostaticii care se înrăutățește, în timp ce reducerea pitch-ului porții trebuie să păstreze o lățime de circa 14 nm pentru contactul dispozitivului (IRDS 2022 More Moore, §4.1, p. 8). Altfel spus, foaia de parcurs nu se așteaptă ca lungimea porții să coboare sub ~12 nm, în timp ce etichetele coboară la „1.0nm eq” și „0.5nm eq” (IRDS 2022 More Moore, §4.1 și Tabelul MM-7). Dacă eticheta ar fi o lungime de poartă, cele două afirmații ar fi contradictorii; nu sunt, pentru că eticheta nu e o lungime de poartă (deducția mea).

## 5. Dovada din documentele Intel

Documentele Intel sunt utile pentru că dau pitch-uri pentru trei generații succesive, cu numele lor de nod. Prezentarea lui Bohr din 2014 dă tabelul următor (Bohr, 2014, slide 16, „Minimum Feature Size”):

| | Nodul Intel 22 nm | Nodul Intel 14 nm | Factor (Intel) |
|---|---|---|---|
| Fin pitch | 60 nm | 42 nm | 0,70× |
| Gate pitch | 90 nm | 70 nm | 0,78× |
| Interconnect pitch | 80 nm | 52 nm | 0,65× |

Fișa Intel din 2017 continuă seria: la nodul de 10 nm, pitch-ul minim al porții scade de la 70 nm la 54 nm, iar pitch-ul minim al metalului de la 52 nm la 36 nm (Intel, fișa „Intel’s 10 nm Technology”, 2017). Acum câteva rapoarte, toate calculate de mine din cifrele Intel: la „22 nm”, pitch-ul porții (90 nm) este de circa 4,1 ori numele; la „14 nm”, 70 nm este exact de 5 ori numele; la „10 nm”, 54 nm este de 5,4 ori numele. Raportul dintre pitch și nume crește de la o generație la alta, adică numele scade mai repede decât geometria pe care ar trebui s-o descrie (deducția mea din cele trei rapoarte).

Mai e un detaliu util. În 2014, Intel a ales să numească tabelul „Intel Has Developed a True 14 nm Technology with Good Dimensional Scaling” (Bohr, 2014, slide 16). Cuvântul „true” (adevărat) arată că deja atunci producătorii simțeau nevoia să-și apere numele de nod cu cifre de pitch; altfel n-ar fi fost nevoie de adjectiv (interpretarea mea).

O avertizare importantă: aceste pitch-uri sunt publicate de Intel despre propriul proces, nu măsurate de o terță parte în documentele pe care le-am deschis. **Nu** am pus aici pitch-uri pentru TSMC N7 sau Samsung 7LPP: lucrările IEDM/VLSI corespunzătoare (de ex. Wu et al., IEDM 2016) și o pagină TSMC cu cifre nu au putut fi deschise integral la verificarea din 2026-11-05; pagina rămâne pe Intel (afirmații de producător) și pe pitch-urile IRDS.

## 6. Densitatea ca alternativă: formula lui Bohr

Dacă numele nu mai spune nimic, ce să folosești? Bohr trece în revistă trei variante și le respinge pe primele două ca incomplete (Bohr, 2017). Produsul *gate pitch × metal pitch* e simplu, dar nu ține cont de proiectarea celulei logice, care influențează densitatea reală (Bohr, 2017). Produsul *gate pitch × înălțimea celulei logice* e un pas înainte, dar nici el nu ține cont de unele reguli de proiectare de ordinul doi și nu reflectă amestecul de celule dintr-o bibliotecă reală (Bohr, 2017). Numărul total de tranzistori al unui cip împărțit la aria lui nu e nici el semnificativ, pentru că depinde de decizii de proiectare precum dimensiunea cache-ului (Bohr, 2017).

Propunerea lui Bohr este o metrică ponderată pe două celule standard: o poartă NAND cu două intrări (4 tranzistori) și un *scan flip-flop* (SFF) (Bohr, 2017). Formula, exact cum o dă editorialul, este (Bohr, 2017):

```
densitate (tranzistori/mm²) = 0,6 × (nr. tranzistori NAND2 / aria celulei NAND2)
                            + 0,4 × (nr. tranzistori SFF  / aria celulei SFF)
```

Ponderile 0,6 și 0,4 reflectă, după Bohr, raportul dintre celulele foarte mici și cele foarte mari din proiectele tipice (Bohr, 2017). Bohr cere ca fiecare producător să publice densitatea logică în MTr/mm² (milioane de tranzistori pe milimetru pătrat) după această formulă și să raporteze separat dimensiunea celulei SRAM, pentru că raportul SRAM/logică variază mult de la cip la cip (Bohr, 2017). El mai afirmă că firmele de inginerie inversă pot verifica ușor cifrele (Bohr, 2017).

Intel a aplicat apoi propria metrică propriului proces: fișa din 2017 dă pentru nodul Intel de 10 nm o densitate logică de **100,8 milioane de tranzistori pe mm²**, „2.7x higher than Intel’s previous 14 nm technology and … approximately 2x higher than other industry 10 nm technologies” (Intel, *10 nm Technology Fact Sheet*, 2017). Ambele cifre — 2,7× față de propriul 14 nm și „aproximativ 2×” față de alți 10 nm — sunt **afirmații ale producătorului**, calculate cu formula propusă chiar de Intel; nu am deschis nicio măsurătoare independentă a densității concurrente care să confirme comparația „~2×”.

Ce câștigi cu metrica lui Bohr față de nume: o cifră cu unitate fizică (tranzistori pe arie) și o rețetă reproductibilă (Bohr, 2017). Ce nu câștigi: performanța, consumul și costul, care nu apar deloc în formulă (observația mea, din formula de mai sus). IRDS adaugă ideea că, pe lângă pitch-uri, aria țintă depinde de înălțimea celulei, de numărul de dispozitive stivuite, de construcțiile DTCO și de integrarea 3D (IRDS 2022 More Moore, Tabelul MM-7, nota, p. 7). **DTCO** (*design-technology co-optimization*) înseamnă că regulile de proiectare și procesul se optimizează împreună, nu separat (IRDS 2022 More Moore, §4.1, p. 6, unde DTCO apare ca mijloc de reducere a ariei).

## 7. De ce densitatea nu mai urmează pitch-urile

IRDS explică faptul că micșorarea pitch-urilor singură nu mai e suficientă pentru a micșora înălțimea celulei standard și că e nevoie de un „factor de scalare din proiectare” (IRDS 2022 More Moore, §4.1, p. 8). Concret, IRDS dă două pârghii: reducerea numărului și a lățimii dispozitivelor active din celulă și strângerea regulilor secundare, precum distanța vârf-la-vârf, extensiile, separarea P-N și aria minimă (IRDS 2022 More Moore, §4.1, p. 8). Prima pârghie se numește **fin depopulation**: crești înălțimea fin-ului și reduci numărul de fin-uri pe aceeași arie (IRDS 2022 More Moore, §4.2, p. 9).

Iată de ce asta contează pentru nume. Două procese cu același pitch de poartă și același pitch de metal pot avea densități diferite dacă unul folosește celule cu mai puține fin-uri (deducția mea, din IRDS §4.1 și §4.2). Iar două procese cu același nume pot avea pitch-uri diferite, așa cum arată comparația IRDS dintre etichetă și geometrie (Secțiunea 4 de mai sus). Numele de nod a devenit, deci, o etichetă de generație: îți spune că procesul este „următorul” în linia unui producător, nu cât de mic este ceva (concluzia mea, susținută de Bohr, 2017, și de IRDS 2022 More Moore, §4.1).

## 8. Un exemplu de citire critică: comunicatul Samsung „3nm”

La 30 iunie 2022, Samsung a anunțat începerea producției inițiale pe procesul său de 3 nm, primul care folosește tranzistori *gate-all-around* (GAA), în varianta numită de Samsung **MBCFET** (*Multi-Bridge-Channel FET*) (Samsung Newsroom, „Samsung Begins Chip Production Using 3nm Process Technology With GAA Architecture”, 30 iunie 2022, [link](https://news.samsung.com/global/samsung-begins-chip-production-using-3nm-process-technology-with-gaa-architecture), accesat 2026-11-05). Comunicatul spune că, față de procesul de 5 nm, prima generație de 3 nm poate reduce consumul cu până la 45%, crește performanța cu 23% și reduce aria cu 16% (Samsung, 2022). Pentru a doua generație de 3 nm, comunicatul anunță până la 50% consum mai mic, 30% performanță mai mare și 35% arie mai mică (Samsung, 2022).

Citiți aceste cifre cu ochiul capitolului de față. Dacă numele ar urma regula istorică a lui Bohr, trecerea de la „5” la „3” ar promite o reducere de arie de (3/5)² = 0,36, adică cu 64% (calculul meu, pur ilustrativ, pe ipoteza falsă că numele e o lungime). Samsung promite pentru prima generație 16% (Samsung, 2022). Diferența nu înseamnă că Samsung a „mințit”: înseamnă exact ce spune IRDS, că numele de nod nu e o cotă și nu se poate folosi ca să calculezi arii (deducția mea). Toate cifrele Samsung de mai sus sunt afirmații ale producătorului, nu măsurători independente, iar comunicatul nu spune pe ce circuit și în ce condiții au fost obținute.

IBM a făcut în mai 2021 un anunț similar, de cercetare și nu de producție: un cip demonstrativ „de 2 nm” cu tehnologie *nanosheet*, despre care IBM afirmă că poate încăpea până la 50 de miliarde de tranzistori pe un cip de mărimea unei unghii (IBM Newsroom, „IBM Unveils World’s First 2 Nanometer Chip Technology”, 6 mai 2021, [link](https://newsroom.ibm.com/2021-05-06-IBM-Unveils-Worlds-First-2-Nanometer-Chip-Technology,-Opening-a-New-Frontier-for-Semiconductors), accesat 2026-11-05). Același comunicat proiectează o performanță cu 45% mai mare sau un consum cu 75% mai mic decât „cele mai avansate cipuri de 7 nm de astăzi” (IBM, 2021). Sunt proiecții ale IBM, nu măsurători, iar comunicatul nu dă pitch-urile; de aceea nu le pot pune în tabelele de mai sus. „Unghia” nu e o unitate de arie, iar comunicatul nu o convertește în mm², așa că nu calculez o densitate din ea.

## 9. Cum să citiți de acum înainte un anunț „de N nanometri”

Rezum cu o listă practică, construită pe sursele de mai sus.

1. Căutați **pitch-urile**: gate pitch (CPP), metal pitch minim, fin pitch sau, la GAA, pitch-ul lateral al dispozitivului. IRDS le consideră parametrii-cheie (IRDS 2022 More Moore, §4.1, p. 6).
2. Căutați **densitatea logică** în MTr/mm² și verificați dacă e calculată după o formulă declarată, de exemplu cea NAND2/SFF a lui Bohr (Bohr, 2017). Dacă e o cifră a producătorului, tratați-o ca atare.
3. Căutați **celula SRAM** raportată separat, așa cum cere Bohr (Bohr, 2017).
4. Comparați numai „la fel cu la fel”: aceeași variantă (HP sau HD), deoarece IRDS dă lungimi de poartă diferite pentru cele două (16 nm vs 18 nm în 2022) (IRDS 2022 More Moore, Tabelul MM-7, p. 7).
5. Nu calculați niciodată arii din raportul numelor; exemplul Samsung din Secțiunea 8 arată de ce (calculul meu ilustrativ, Secțiunea 8).

## 10. Legătura cu capitolele următoare

Două lucruri au ținut densitatea în creștere după ce numele s-a desprins de geometrie: litografia, care decide cât de strâns poți tipări pitch-urile, și arhitectura tranzistorului, care decide cât de scurtă poate fi poarta fără ca tranzistorul să curgă când ar trebui să fie oprit. Capitolul 48 tratează litografia, inclusiv motivul pentru care IRDS prevede *multiple patterning* și EUV cu apertură numerică mare (IRDS 2022 Lithography, §2–3, p. 2–3). Capitolul 49 tratează trecerea de la tranzistorul plan la FinFET și apoi la GAA, despre care IRDS scrie că FinFET ar putea susține scalarea până în 2025, iar tranziția la dispozitive GAA laterale era așteptată să înceapă după 2022 (IRDS 2022 More Moore, §4.2 și §4.2.1, p. 9).

Lecția capitolului, într-o propoziție: „7nm” este numele unei generații, iar fizica ei se citește în pitch-uri și în densitate, nu în etichetă (concluzia mea, bazată pe IRDS 2022 și pe Bohr, 2017).

<!--
Surse și note: vezi SOURCES-47-49.md și NOTES-47-49.md în /workspace/freebook/ro-desk/.
-->
