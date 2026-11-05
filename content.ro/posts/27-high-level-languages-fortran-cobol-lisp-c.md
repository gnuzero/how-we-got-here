---
title: "Limbaje de nivel înalt: FORTRAN, COBOL, Lisp, C"
weight: 32
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 31
tags: []
summary: "Patru domenii, patru abstracții: formule, proză de afaceri, liste simbolice și programare de sistem aproape de hardware"
image_prompt: "Timeline infographic of FORTRAN, COBOL, Lisp, C with characteristic code snippets, clean historical technical infographic"
video_prompt: "20-second animation: a short algorithm expressed in FORTRAN, COBOL, Lisp, and C syntax successively, clean motion graphics"
schematics: "Diagram: language paradigm comparison + language family tree"
---

Capitolul 26 s-a oprit la asamblare: un simbol scurt pentru fiecare instrucțiune. Între 1954 și 1973, patru limbaje au urcat mai sus de acest nivel, fiecare pentru alt tip de problemă: FORTRAN pentru calcul științific, COBOL pentru prelucrarea datelor comerciale, Lisp pentru calcul simbolic și C pentru programarea de sistem.

## FORTRAN: formule în loc de instrucțiuni

Raportul echipei FORTRAN, prezentat în 1957, pornește de la o socoteală economică: aproximativ două treimi din costul rezolvării celor mai multe probleme științifice și inginerești pe calculatoare mari era pregătirea problemei, iar peste 90% din timpul total se ducea pe planificarea, scrierea și depanarea programului (Backus, J. W. et al., „The FORTRAN Automatic Coding System”, *Proc. Western Joint Computer Conference*, 1957, pp. 188–198, aici p. 188; copie: [softwarepreservation.org](https://www.softwarepreservation.org/projects/FORTRAN/paper/BackusEtAl-FortranAutomaticCodingSystem-1957.pdf), accesat 2026-11-05). Scopul proiectului era ca programatorul să descrie o procedură numerică într-un limbaj concis, asemănător matematicii, și să obțină automat un program eficient pentru IBM 704; echipa se aștepta să reducă munca de programare și depanare la mai puțin de o cincime (ibid., p. 188).

Autorii notează că trecuseră doi ani și jumătate și 18 ani-om de la începutul proiectului (ibid., p. 188). Ca exemplu, ei relatează un program de 47 de instrucțiuni FORTRAN compilat de 704 în șase minute, cu un rezultat de aproximativ 1.000 de instrucțiuni mașină, pe care programatorul estimase că l-ar fi scris de mână în trei zile (ibid., p. 188). Este un singur caz, raportat chiar de autorii sistemului, nu o măsurătoare sistematică.

## COBOL: un limbaj comun pentru afaceri

Raportul COBOL din aprilie 1960, publicat de Departamentul Apărării al SUA, își descrie istoria: la 28–29 mai 1959, o întâlnire convocată la Pentagon a discutat dacă e de dorit și posibil un limbaj comun pentru programarea calculatoarelor în prelucrarea datelor comerciale, iar participanții au fost aproape unanim de acord că da (U.S. Department of Defense, *COBOL: Initial Specifications for a Common Business Oriented Language*, aprilie 1960, Partea I, §2 „History”, pp. I-1–I-2; text OCR: [archive.org/download/bitsavers_codasylCOB_6843924/COBOL_Report_Apr60_djvu.txt](https://archive.org/download/bitsavers_codasylCOB_6843924/COBOL_Report_Apr60_djvu.txt), accesat 2026-11-05). Comitetul „Short Range”, format din șase producători și trei reprezentanți ai guvernului, s-a întâlnit prima oară la 23 iunie 1959, iar raportul lui către comitetul executiv a fost finalizat la 17 decembrie 1959; comitetul executiv l-a acceptat la 7–8 ianuarie 1960 (ibid., Partea I, §2, și nota introductivă). Ținta declarată era un limbaj comun, „basically in English”, orientat spre prelucrarea datelor comerciale (ibid., Partea I).

<!-- NEVERIFICAT: copia PDF de pe bitsavers a întors 403/500; am lucrat pe textul OCR de la archive.org. Numele Gracei Hopper nu apare nicăieri în textul OCR al raportului (căutare completă); rolul ei nu este afirmat aici. -->

Raportul împarte un program sursă în trei părți, câte o „divizie” pentru fiecare: procedurile care spun cum se prelucrează datele, descrierea datelor și descrierea echipamentului; numele lor sunt PROCEDURE, DATA și ENVIRONMENT (ibid., Partea II, §1–2, pp. II-1–II-2). Ordinea lor reflectă cât de bine se pot transfera de la un calculator la altul: procedurile cel mai bine, descrierea mediului deloc (ibid., Partea II, §1). Tot acolo e definit vocabularul pe care îl folosim și azi: programul sursă scris în COBOL și compilatorul care îl traduce într-un program obiect (ibid., Partea II, §2).

## Lisp: liste, recursivitate și memorie recuperată automat

John McCarthy descrie Lisp ca pe un sistem de programare dezvoltat pentru IBM 704 de grupul de inteligență artificială al MIT, pornit din nevoile proiectului Advice Taker, propus în noiembrie 1958 (McCarthy, J., „Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I”, *CACM*, aprilie 1960; retipărire LaTeX: [www-formal.stanford.edu/jmc/recursive.pdf](https://www-formal.stanford.edu/jmc/recursive.pdf), accesat 2026-11-05, §1). Datele lui Lisp sunt expresiile simbolice (S-expresii), iar operațiile de bază pe ele includ `car` și `cdr` (ibid., §3c).

Cea mai importantă idee de implementare se află în §4c. Memoria liberă era organizată într-o listă, inițial de aproximativ 15.000 de registre, iar utilizatorul nu trebuia să programeze returnarea registrelor în listă: returnarea se făcea automat (ibid., §4c, pp. 25–26 în retipărire). Când lista se golea, pornea un ciclu de „reclamation”: programul marca toate registrele accesibile din registrele de bază prin lanțuri de `car` și `cdr`, iar restul, abandonate de program, erau readuse în lista liberă (ibid., §4c, p. 26). Mecanismul descris este ceea ce numim astăzi *garbage collection* (colectarea automată a memoriei nefolosite); În corpul articolului McCarthy nu folosește termenul; nota de subsol 7 din retipărire spune: „We already called this process “garbage collection”, but I guess I chickened out of using it in the paper” (ibid., nota 7).

## C: un limbaj pentru a rescrie un sistem de operare

Ritchie scrie că C a apărut între 1969 și 1973, în paralel cu primele versiuni Unix, cu perioada cea mai creativă în 1972 (Ritchie, D. M., „The Development of the C Language”, *HOPL-II*, aprilie 1993, publicat ACM 1996, „Introduction”; [nokia.com/bell-labs/about/dennis-m-ritchie/chist.html](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html), accesat 2026-11-05).

Motivul a fost hardware-ul. Mașinile pe care rulaseră BCPL și B adresau cuvinte, iar singurul tip de date al acestor limbaje, celula (*cell*), corespundea cuvântului mașinii; PDP-11 adresa octeți, iar modelul lui B a devenit stângaci pentru caractere, nepotrivit pentru virgula mobilă pe 16 biți și costisitor pentru pointeri (ibid., „The Problems of B”). În plus, compilatorul B producea *threaded code*, o schemă interpretativă, iar programele rezultate erau atât de lente față de cele scrise în asamblare încât rescrierea sistemului în B nu intra în discuție (ibid.). În 1971, Ritchie a adăugat un tip caracter și a rescris compilatorul să genereze instrucțiuni PDP-11; limbajul intermediar s-a numit NB, „new B” (ibid.).

În 1978, Kernighan și Ritchie au publicat *The C Programming Language* (ibid., „Introduction” și „Portability”). Standardizarea a urmat: comitetul ANSI X3J11 a început lucrul în vara lui 1983, și-a prezentat raportul la sfârșitul lui 1989, iar standardul a fost acceptat de ISO ca ISO/IEC 9899-1990 (ibid., „Standardization”).

## Ce au în comun

Fiecare dintre aceste limbaje mută o decizie de la programator la un program: FORTRAN, traducerea formulelor (Backus et al., 1957, p. 188); COBOL, adaptarea la echipament, izolată într-o singură divizie (DoD, 1960, Partea II, §1); Lisp, eliberarea memoriei (McCarthy, 1960, §4c); C, adresarea octeților și a tipurilor, cu un compilator destul de bun ca să înlocuiască asamblarea (Ritchie, 1993, „The Problems of B”). Capitolul 28 se ocupă de programul care face această traducere: compilatorul.
