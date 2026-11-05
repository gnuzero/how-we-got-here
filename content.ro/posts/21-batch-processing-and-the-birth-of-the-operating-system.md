---
title: "Prelucrarea pe loturi și nașterea sistemului de operare"
weight: 24
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 23
tags: []
summary: "CPU-uri scumpe care stăteau degeaba între joburile pe cartele au forțat primul monitor rezident — software de sistem, nu programul utilizatorului"
image_prompt: "Historical illustration of an operator loading punch cards into a batch-processing mainframe, clean vintage computing illustration style"
video_prompt: "20-second animation: punch cards feeding sequentially into a card reader, clean vintage-style motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: batch job queue flow + early OS resident monitor block diagram"
---

Mainframe-urile din capitolul 18 nu rulau un sistem de operare în sensul de azi. Cineva încărca un program, îl rula, aștepta, apoi încărca următorul. Merge pentru un utilizator cu acces exclusiv. Se rupe în clipa în care mai multe joburi trebuie să împartă o mașină scumpă — și, la prețul unui mainframe, clipa aceea a venit imediat.

## Timpul mort era constrângerea

Robert L. Patrick descrie modul de operare din 1954: programatorul prezent la consolă, sesiuni programate ca blocuri de timp, rareori folosite eficient, timp mort între sesiuni; backlog de programare și de rulare de producție, pe fondul unei penurii de timp de calculator — „only about two-dozen commercial mainframes in the entire country” (Patrick, R. L., „Operating Systems at Conception”, Computer History Museum Software Preservation, decembrie 2008; [softwarepreservation.computerhistory.org/os/gm.html](https://softwarepreservation.computerhistory.org/os/gm.html), accesat 2026-11-05).

Patrick a produs proiectul conceptual al unui sistem de operare multi-utilizator non-stop ca parte a planului General Motors Research pentru un IBM 704, cu periferice card-to-tape și tape-to-print separate (ibid., Background). Proiectul, prezentat la SHARE, a devenit o dezvoltare comună GMR–North American Aviation (ibid.).

## GM-NAA I/O: primul monitor de lot pe 704

Patrick numește rezultatul primul astfel de sistem: proiectat la General Motors Research Labs, implementat de echipe GMR și NAA pentru IBM 704, „first ran production in 1956” și a crescut puternic numărul de joburi pe zi pe un 704 (Patrick, 2008, Abstract). Sistemul era pe bandă magnetică și avea trei faze: *Input Translation*, *Compute*, *Output Translation* (ibid., Background). La GM, efortul a fost condus de George Ryckman; programarea: Jim Fishman, Don Harroff, Floyd Livermore; la NAA, Owen Mock (ibid.).

Pachetele de cartele de la cititorul periferic conțineau ID de job, informații contabile, cartele de control („nee JCL”), programe și date; sistemul inițial prelucra o secvență de pachete de la programatori diferiți ca un singur lot non-stop (ibid., Features). Translatorul de input convertea tot lotul în binar, apoi apela monitorul din faza Compute; pe măsură ce fiecare job rula, se generau numere contabile și tot output-ul era înregistrat binar; faza Output convertea în zecimal, iar banda era dusă manual la perifericele din camera alăturată (ibid.).

Când programatorii operau ei înșiși, se programau blocuri de câte șase minute pentru checkout; cu sistemul GM I/O în funcțiune, „60 test jobs an hour were possible (depending on the length of the tests)” (ibid., Features). Douăzeci de copii au fost distribuite altor instalații 704 (ibid.). Printre beneficiile listate de Patrick: programatorii rămân la birou; numărul de joburi pe oră a crescut de zece ori; „There was no idle machine time if there was work to run”; fără hardware special (în afară de ceasul de timp) și fără chirii hardware suplimentare (ibid., Benefits).

<!-- NEVERIFICAT: lucrarea RAND P-7316 (Patrick, 1987) citată pe aceeași pagină CHM ca referință aprofundată; PDF pe rand.org a întors 403 la fetch automat. Afirmațiile de pe această pagină se bazează pe nota CHM din 2008, nu pe P-7316. -->

## Monitorul rezident ca strămoș al SO-ului

Ce face diferența față de „programul utilizatorului” e rezidența și continuitatea: după un dump de memorie la eșec, „the OS proceeded to the next job in the queue without stopping” (Patrick, 2008, Concept). E o piesă de software de **sistem**, distinctă de jobul care rulează, care încarcă, pornește, detectează sfârșitul și trece mai departe. Patrick notează și că sistemele timpurii până la SHARE Operating System (SOS) au fost proiectate de comunitatea de utilizatori; începând cu IBSYS, producătorul a preluat proiectarea ca să facă mașinile mai atractive pe piață (ibid., Notes).

## Planificarea devine politică

Odată ce un monitor alege *care* job urmează, apar întrebări care nu mai sunt de hardware: priorități, contabilizare, ce se întâmplă la eșec, cine vede dump-ul. Patrick descrie ceasul de timp real construit de Ryckman pentru date contabile și facturarea după timp folosit și linii tipărite (ibid., Features). De aici până la time-sharing (capitolul 22) e un pas de politică — mai mulți utilizatori interactiv, nu doar un lot pe bandă — pe aceeași idee: CPU-ul scump nu trebuie să aștepte omul.

În România, Iancu notează că FELIX C-256 a rulat SIRIS-3 ca sistem de alocare secvențială off-line (*batch-processing*), cu pregătirea lucrării în altă parte și rularea pe calculator (Iancu, 2013, §2; PDF [aos.ro](https://aos.ro/wp-content/anale/IFVol6Nr2Art.4.pdf), accesat 2026-11-05). E același tip de organizare, pe alt ISA și altă licență — semnalat aici ca paralelă secundară, nu ca descendență din GM-NAA.
