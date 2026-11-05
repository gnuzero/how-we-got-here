---
title: "De la mainframe-uri la minicalculatoare și microprocesoare"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 22
tags: []
summary: "Trei epoci ale întrebării cine primește un calculator — instituția, departamentul, apoi un cip pentru oricine"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC măsura circa 30 pe 50 de picioare și cântărea 30 de tone (Penn Engineering, „Celebrating Penn Engineering History: ENIAC”, [engineering.upenn.edu](https://www.engineering.upenn.edu/about/history-heritage/eniac/), accesat 2026-11-05). Drumul de acolo la un procesor pe un singur cip nu e un salt: sunt trei epoci, fiecare cu alt răspuns la *cine are un calculator și câte există*.

## Mainframe: o mașină, împărțită

Mainframe-ul era o mașină scumpă, împărțită între mulți utilizatori prin prelucrare pe loturi (capitolul 21). IBM System/360 (descris de arhitecții săi în aprilie 1964) contează dincolo de scară: o **familie** de mașini compatibile pe un interval de performanță, același software. Gene Amdahl, Gerrit Blaauw și Fred Brooks definesc *architecture* ca „the attributes of a system as seen by the programmer, i.e., the conceptual structure and functional behavior, as distinct from the organization of the data flow and controls, the logical design, and the physical implementation” (Amdahl, G. M., Blaauw, G. A., Brooks, F. P., Jr., „Architecture of the IBM System/360”, *IBM Journal of Research and Development*, aprilie 1964, nota de subsol la „architecture”; copie [ece.ucdavis.edu](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf), accesat 2026-11-05).

Printre cele patru inovații din rezumat: „strict upward and downward machine-language compatibility over a line of six models having a performance range factor of 50” (ibid., Abstract, pct. 4). Familia trebuia să fie „strictly program compatible in all models” (ibid., introducere). Separarea ISA (capitolul 11) de cutia de sub ea e aici politică de produs: codul clientului supraviețuiește unui upgrade de hardware.

## Minicalculator: un departament își permite unul

Computer History Museum rezumă răspunsul DEC: familia PDP-11 de 16 biți, începând cu PDP-11/20, introdus în **1970** la **10 800 $**, ca răspuns la mașinile de 16 biți ale concurenței (Honeywell, Data General, HP) care depășeau linia PDP-8 de 12 biți (Computer History Museum, „DEC’s Minis Get Bigger”, [computerhistory.org/revolution/minicomputers/11/366](https://www.computerhistory.org/revolution/minicomputers/11/366), accesat 2026-11-05). CHM notează că toate modelele din familie puteau rula același software și că arhitectura internă, cu mai multe registre generale, semăna mai mult cu un mainframe decât cu minicalculatoarele anterioare (ibid., caseta PDP-11/20). Până în 1977, broșura de produs arăta șase modele de calculator și cinci sisteme de operare (ibid., caseta brochure).

Pe PDP-11 a migrat și Unix, după experimentele pe PDP-7; echipa Bell Labs l-a rescris apoi în C (ibid., secțiunea „A Universal Operating System”) — fir pe care îl reluăm în capitolul 22.

## Microprocesor: un cip, pe piață

Computer History Museum descrie Intel 4004 ca răspunsul lui Ted Hoff la cererea Busicom de circuite personalizate pentru un calculator de birou: un calculator general pe patru cipuri; Federico Faggin a adaptat tehnologia MOS a Intel ca să înghesuie **2 300** de tranzistoare ale 4004 pe un singur cip (Computer History Museum, „Intel's Microprocessor”, [computerhistory.org/revolution/digital-logic/12/285](https://www.computerhistory.org/revolution/digital-logic/12/285), accesat 2026-11-05). Intel a obținut drepturi de marketing și a introdus familia MCS-4 în **1971** (ibid.). Cipul 4004 a fost fabricat pe wafer-e MOS cu poartă de siliciu, canal p, diametru 2 țoli, die de 12 mm² și lățime minimă de linie de 10 microni (ibid.).

Un articol CHM de aprofundare notează nuanța: 4004 a fost descris întâi ca CPU microprogramabil pe 4 biți într-un set de calculator; o fișă ulterioară îl redenumește „single chip 4-bit microprocessor”; Intel e „happy to accept” narativa primului microprocesor, iar literatura recentă a firmei evită controversa spunând „Intel’s first microprocessor” (Computer History Museum, „Who Invented the Microprocessor?”, [computerhistory.org/blog/who-invented-the-microprocessor/](https://computerhistory.org/blog/who-invented-the-microprocessor/), accesat 2026-11-05). Pe pagină reținem ce e solid: MCS-4 / 4004, 1971, 2 300 de tranzistoare, echipa Hoff–Faggin–Mazor–Shima, clientul Busicom (CHM Revolution, ibid.; CHM blog, ibid.).

## Sidebar: DACICC-1 la Cluj (și ce spunem — și ce nu — despre Felix)

În România, Institutul de Calcul al Academiei (filiala Cluj) construiește **DACICC-1** (*Dispozitiv Automat de Calcul al Institutului de Calcul Cluj*). Pagina institutului (ICTP) spune că a fost conceput și realizat între **1959–1963**, la inițiativa lui Tiberiu Popoviciu; echipa a fost condusă întâi de Manfred Rosmann, apoi de Gheorghe Farkas, cu Bruno Azzola, Mircea Bocu și Iolanda Juhasz; programarea se făcea în cod mașină (Institutul de Analiză Numerică „Tiberiu Popoviciu”, „DACICC-1 (1963)…”, [ictp.acad.ro/ro/dacicc-1/](https://ictp.acad.ro/ro/dacicc-1/), accesat 2026-11-05; pagina citează ca notă [1] volumul Rus, V., *Fondarea Informaticii Clujene*, Editura Albastră, 1997 — cifrele de pe pagină le luăm din HTML-ul ICTP; PDF-ul scanat de pe site-ul ICTP pe care l-am trecut prin OCR e un material de programare DACICC-1 din 1966, nu volumul Rus, deci paginile din Rus 1997 rămân neconfirmate) <!-- NEVERIFICAT: paginile din Rus 1997 pentru 1959–1963, 100 kHz și 2 000 adunări/s | surse încercate: ictp.acad.ro/ro/dacicc-1/, dacicc-pdf.pdf (OCR) -->.

ICTP caracterizează DACICC-1 ca produs original, succedând calculatorul experimental MARICA, construit în 1959; calculator de generația 1 (tuburi), dar cu trăsături de generația a 2-a: tranzistoare în partea logică (prima oară pe un calculator românesc, spune ICTP) și inele de ferită la memoria internă și la părți din logică; frecvență de tact **100 kHz**, circa **2 000** de adunări/secundă; „primul calculator românesc” cu tranzistoare (fără a fi complet tranzistorizat) și cu memorie internă RAM din ferite (ibid., notele [1] pe pagină). Tot ICTP spune că a fost folosit circa zece ani la Institutul de Calcul, cu semnul întrebării la interval („1963-1972?”) (ibid., nota [2]).

**Conflict de surse (nu alegem în tăcere).** Iancu (2013), citând Marius Guran 2004, scrie că în 1958–1959 la Cluj s-a construit „Numerical Computer DACICC 1 … with tubes, transistors and memory ferrites (transistorized reproduction-in part-of the MECIPT-1) and in 1968 the computer DACICC 200 fully transistorized” (Iancu, Șt., „Beginning of Development of the Science and Technology of Information in Romania”, *Annals of the Academy of Romanian Scientists, Series on Science and Technology of Information*, vol. 6, nr. 2/2013, §2; PDF [aos.ro](https://aos.ro/wp-content/anale/IFVol6Nr2Art.4.pdf), accesat 2026-11-05). ICTP datează construcția 1959–1963 și pune DACICC-200 la 1968 în meniul institutului (ICTP, ibid.; meniu „DACICC-200 (1968)”). Anii de construcție și accentul „reproduction of MECIPT-1” apar doar la Iancu; pe pagină ținem cronologia ICTP — sursa instituției care a construit mașina, citând un volum scris de unul dintre programatorii ei, Teodor Rus — și semnalăm dezacordul.

**Felix C-256.** Iancu scrie că IRIS 50 a fost adaptat în România sub numele Felix C256, în urma cooperării cu CII din Franța, și că sistemul FELIX C-256 a avut sistemul de operare SIRIS-3, descris ca alocare secvențială off-line de timp diferiților utilizatori (*batch-processing*) (Iancu, 2013, §2, pasajele despre IRIS/Felix). Nu am deschis un primar de fabrică sau un manual SIRIS; afirmațiile despre Felix de pe această pagină se opresc la ce spune Iancu și rămân marcate ca sursă secundară. <!-- Nicio cifră de performanță Felix inventată. -->
