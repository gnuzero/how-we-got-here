---
title: "Compilatoare, JIT și medii de rulare moderne"
weight: 35
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 34
aliases:
  - /posts/28-compilers-jit-and-modern-language-runtimes/
  - /posts/33-compilers-jit-and-modern-language-runtimes/
  - /posts/34-compilers-jit-and-modern-language-runtimes/
tags: []
summary: "Traducerea înainte de rulare, traducerea în timpul rulării și serviciile pe care mediul de rulare le oferă programului"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

Capitolul 27 a arătat de ce au apărut limbajele de nivel înalt. Acest capitol se uită la programul care le face utilizabile, compilatorul, și la cele două momente în care poate lucra: înainte ca programul să ruleze sau în timp ce rulează.

## Traducerea clasică: sursă, compilator, program obiect

Raportul COBOL din 1960 descrie deja schema pe care o folosim și azi: sistemul are două elemente, programul sursă scris în COBOL și compilatorul care îl traduce într-un program obiect capabil să ruleze pe un calculator (U.S. Department of Defense, *COBOL: Initial Specifications for a Common Business Oriented Language*, aprilie 1960, Partea II, §2, p. II-2; text OCR: [archive.org/download/bitsavers_codasylCOB_6843924/COBOL_Report_Apr60_djvu.txt](https://archive.org/download/bitsavers_codasylCOB_6843924/COBOL_Report_Apr60_djvu.txt), accesat 2026-11-05). Raportul precizează că descrie numai limbajul, nu compilatorul, deși specificația limbajului fixează în mare măsură limitele compilatorului (ibid.).

Promisiunea compilatorului FORTRAN era mai ambițioasă: echipa voia ca, dintr-o descriere apropiată de matematică, să rezulte automat un program „eficient” pentru IBM 704 (Backus, J. W. et al., „The FORTRAN Automatic Coding System”, *Proc. Western Joint Computer Conference*, 1957, p. 188; [softwarepreservation.org](https://www.softwarepreservation.org/projects/FORTRAN/paper/BackusEtAl-FortranAutomaticCodingSystem-1957.pdf), accesat 2026-11-05). Pentru Ritchie, aceeași cerință a decis soarta lui C: trecerea de la B la C a coincis cu un compilator capabil să producă programe destul de rapide și de mici ca să concureze cu asamblarea (Ritchie, D. M., „The Development of the C Language”, 1993, „The Problems of B”; [nokia.com/bell-labs/about/dennis-m-ritchie/chist.html](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html), accesat 2026-11-05).

<!-- NEVERIFICAT: descrierea etapelor interne ale unui compilator modern (analiză lexicală, sintactică, reprezentare intermediară, optimizare, generare de cod) din EN nu are încă o sursă primară deschisă în acest lot; o las ca descriere generală, fără cifre. -->

## Interpretare, compilare înainte de rulare, compilare la rulare

Alternativa la compilare este interpretarea. Compilatorul B producea *threaded code*, o schemă interpretativă, iar Ritchie scrie că programele astfel obținute erau mult mai lente decât echivalentele lor în asamblare (Ritchie, 1993, „The Problems of B”).

Între cele două se află compilarea „just-in-time” (JIT). John Aycock o definește larg, ca orice traducere făcută dinamic, după ce programul a început să ruleze, și notează că tehnica este folosită din anii 1960 (Aycock, J., „A Brief History of Just-In-Time”, *ACM Computing Surveys* 35(2), iunie 2003, pp. 97–113, aici p. 97; copie: [cs.tufts.edu/comp/150IPL/papers/aycock03jit.pdf](https://www.cs.tufts.edu/comp/150IPL/papers/aycock03jit.pdf), accesat 2026-11-05). El enumeră avantajele interpretării: programele interpretate sunt de obicei mai mici, mai portabile și au acces la informații cunoscute doar la rulare (ibid., p. 98).

Istoria pe care o reconstituie Aycock:

- **McCarthy, 1960.** Aycock bănuiește că prima lucrare publicată despre compilarea JIT este articolul despre LISP, care menționa compilarea funcțiilor în limbaj mașină, suficient de rapidă încât rezultatul să nu trebuiască salvat (ibid., §2.1, p. 98).
- **Michigan, 1966.** Sistemul executiv al Universității Michigan pentru IBM 7090 nota explicit că asamblorul și încărcătorul pot traduce și încărca în timpul execuției (ibid., §2.1, p. 98).
- **Thompson, 1968.** Ken Thompson a compilat expresii regulate în cod IBM 7094, executat apoi pentru căutare (ibid., §2.1, p. 98). Articolul original al lui Thompson nu a fost deschis; îl cităm doar prin Aycock.
- **Smalltalk, 1984.** În sistemul Smalltalk al lui Deutsch și Schiffman, compilatorul era invocat dinamic, la apelul unei metode (ibid., §2.6–2.7, pp. 101–102).
- **Self.** Pentru că limbajul Self e dinamic până la nivelul accesului la variabile locale, grupul Self a construit, după Aycock, cea mai agresivă compilare JIT de până atunci, în trei generații de compilator (ibid., §2.7, p. 102). A doua generație producea cod mai rapid, dar compila de 15 până la 35 de ori mai încet, încât mulți utilizatori au refuzat-o (ibid., §2.7.2). A treia a folosit optimizarea adaptivă: metodele erau compilate întâi de un compilator rapid, fără optimizări, iar contoare ale numărului de apeluri decideau când merită recompilarea (ibid., §2.7.3, pp. 102–103).

## Java și popularizarea termenului

Aycock scrie că Java a adus termenul *just-in-time* în uzul curent al literaturii de specialitate și că presiunea pentru implementări Java rapide a declanșat o renaștere a cercetării JIT (ibid., §2.14, p. 107). El citează observația inginerilor Sun (Cramer et al., 1997) că există o limită superioară a accelerării obținute prin JIT, pentru că interpretarea propriu-zisă reprezenta doar 68% din timpul de execuție într-un profil pe care l-au rulat (ibid., p. 107). Într-o notă, Aycock adaugă că James Gosling i-a spus că termenul a fost împrumutat din terminologia producției industriale („manufacturing terminology”) și că propria lui folosire a termenului datează din jurul anului 1993 (ibid., p. 107, nota 13; sursa lui Aycock este o comunicare privată din 2001).

<!-- NEVERIFICAT: JVM HotSpot, V8, .NET CLR și alte mașini virtuale moderne nu au surse primare deschise în acest lot; nu dau nume de produse, date sau cifre pentru ele. -->

## Mediul de rulare

Un limbaj nu se oprește la compilator. Lisp avea nevoie de un mecanism care să recupereze automat memoria abandonată de program: când lista de registre libere se golea, un ciclu de „reclamation” marca registrele accesibile și le readucea pe celelalte în listă (McCarthy, J., „Recursive Functions of Symbolic Expressions…”, *CACM*, 1960, §4c; [www-formal.stanford.edu/jmc/recursive.pdf](https://www-formal.stanford.edu/jmc/recursive.pdf), accesat 2026-11-05). Acest cod face parte din *mediul de rulare* (*runtime*), adică partea sistemului care rulează alături de program și îi oferă servicii pe care programul nu le scrie singur. Colectarea memoriei, compilatorul JIT din Self și interpretorul de bytecode Java sunt, fiecare, astfel de componente (Aycock, 2003, §2.7 și §2.14).

## Încearcă acum

Mașina virtuală de mai jos este un sistem Linux minimal, fără compilator C, dar poate arăta ambele fețe ale capitolului. Comanda `hexdump -C /bin/busybox | head -2` afișează începutul unui fișier executabil; pe mașina noastră de lucru, primii patru octeți ai unui executabil Linux (`/bin/ls`) sunt `7f 45 4c 46`, adică `0x7f` urmat de literele „ELF”, formatul produs de compilator și editorul de legături (verificare proprie, 2026-11-05; nu am rulat comanda în mașina virtuală a laboratorului). Apoi dă aceeași muncă unui interpretor: `echo 'BEGIN{s=0; for(i=1;i<=1000000;i++) s+=i; print s}' > /tmp/sum.awk`, urmat de `time awk -f /tmp/sum.awk`. Rezultatul trebuie să fie `500000500000`, adică 1.000.000 × 1.000.001 / 2 (calculul nostru, verificat și cu awk pe mașina noastră de lucru, 2026-11-05). Interpretorul execută fiecare iterație la rulare; timpul depinde de browser și nu îl dau aici.

{{< lab type="vm-terminal" >}}
