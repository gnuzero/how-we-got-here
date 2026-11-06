---
title: "Sisteme în timp real în practică"
weight: 37
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 36
aliases:
  - /posts/30-real-time-systems-in-practice/
  - /posts/35-real-time-systems-in-practice/
  - /posts/36-real-time-systems-in-practice/
tags: []
summary: "Simte–calculează–acționează pe un buget fix: Pathfinder și bucla de control unde trucurile de viteză din faza 3 devin inamici ai timpului"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

Capitolul 29 a acoperit teoria: termene dure față de blânde, planificarea rate-monotonic, de ce „rapid” și „în timp real” diferă. Acest capitol arată unde garanțiile se sparg în practică — și cum s-au reparat pe Marte.

## Mars Pathfinder: ce s-a întâmplat

Mars Pathfinder a aterizat pe Marte pe 4 iulie 1997. În primele zile misiunea a fost descrisă ca fără cusur; după câteva zile, odată ce a început să culeagă date meteorologice, nava a început să treacă prin *reset*-uri totale ale sistemului, fiecare cu pierderi de date (Jones, M. B., „What really happened on Mars?”, rezumat al discursului lui David Wilner (Wind River) la IEEE Real-Time Systems Symposium, 1997; copie Wayback: [web.archive.org/.../Mars_Pathfinder.html](https://web.archive.org/web/20170613013928/http://research.microsoft.com/en-us/um/people/mbj/Mars_Pathfinder/Mars_Pathfinder.html), accesat 2026-11-05). Presa a vorbit despre „software glitches” și despre faptul că „computerul încerca să facă prea multe lucruri deodată” (ibid.).

Glenn E. Reeves, *Flight Software Cognizant Engineer* la JPL pentru Pathfinder, a scris contul de primă mână după ce a citit rezumatul lui Jones. El confirmă că eșecul a fost un caz de **inversiune de prioritate** (*priority inversion*): sarcina de prioritate înaltă `bc_dist` a fost blocată de sarcina de prioritate mult mai joasă ASI/MET, care ținea o resursă partajată și fusese preemptată de mai multe sarcini de prioritate medie (Reeves, G. E., „What really happened on Mars?”, 15 decembrie 1997; copie: [cs.unc.edu/~anderson/teach/comp790/papers/mars_pathfinder_long_version.html](https://www.cs.unc.edu/~anderson/teach/comp790/papers/mars_pathfinder_long_version.html), accesat 2026-11-05).

### Actorii pe magistrala 1553

Hardware-ul magistralei 1553 venea de la nava Cassini, împreună cu o regulă de folosire: „the software will schedule activity at an 8 Hz rate”, adică un ciclu la fiecare 0,125 s (Reeves, 1997, ibid.; 1/8 s este calculul nostru). Reeves descrie programul pe un ciclu al magistralei 1553: sarcina `bc_sched` e cea mai prioritară din sistem (în afară de `tExec` din VxWorks); `bc_dist` e a treia; ASI/MET e și mai jos (ibid.). `bc_dist` distribuie datele; ASI/MET (instrumentul meteorologic) își primește informațiile prin mecanismul IPC bazat pe *pipe*-uri VxWorks, iar sarcinile așteaptă pe cozi cu `select()` (ibid.).

Resursa care a produs problema era un semafor de excludere mutuală (*mutex*) creat în interiorul mecanismului `select()`, care protejează lista de descriptori de fișiere pe care `select()` îi așteaptă (ibid.). ASI/MET apelase `select` și era în curs să elibereze mutex-ul (`semGive`) când a fost preemptată; au rulat sarcini de prioritate medie; apoi `bc_dist` a încercat să trimită date ASI/MET și s-a blocat pe același mutex; `bc_sched` a detectat că `bc_dist` nu terminase ciclul și a declanșat reset-ul (ibid.).

### Contul lui Jones (prin Wilner) și corectările lui Reeves

Jones, pe baza discursului lui Wilner, descrie aceeași schemă clasică: un fir meteorologic de prioritate joasă ține un mutex pe „information bus”; firul de gestiune a magistralei, de prioritate înaltă, se blochează pe mutex; un fir de comunicații de prioritate medie rulează între timp și împiedică firul joasă să elibereze mutex-ul; un *watchdog* conclude că ceva e grav greșit și resetează sistemul (Jones, 1997, ibid.). Jones notează că VxWorks permite, la crearea mutex-ului, un parametru boolean pentru *priority inheritance*; mutex-ul în cauză fusese inițializat cu parametrul oprit (ibid.).

Reeves corectează câteva detalii din discursul lui Wilner (pe care Wilner le luase, după Reeves, dintr-o conversație în care Reeves „winged it”): repararea nu s-a făcut prin interpretorul C *shell* al VxWorks pe navă, ci printr-un proces specializat de *patch* care trimite diferențele față de copia de pe Pământ; iar prioritatea moștenită nu fusese omisă conștient — „We just missed it” (Reeves, 1997, ibid.). Reeves scrie că au văzut problema înainte de aterizare, dar nu au putut-o reproduce când au încercat să o urmărească, și că existau deja mecanisme de recuperare după reset (ibid.). După incidentele de pe Marte, echipa a reprodus defectul în laborator „In less that [sic] 18 hours”, iar odată reprodus, inversiunea de prioritate „was obvious” (ibid.).

### Remediul: moștenirea priorității

Odată înțeleasă cauza, repararea a fost: schimbarea flag-urilor de creare ale semaforului astfel încât moștenirea priorității să fie activă (Reeves, 1997, ibid.). Wind River analizase impactul; Reeves concluzionează, „both by analysis and test, that there was no adverse behavior”, iar sistemul a fost testat extensiv înainte de schimbarea software-ului de pe navă (ibid.). Jones rezumă același remediu: un program C scurt a fost încărcat pe navă și a schimbat variabilele globale de la FALSE la TRUE; „No more system resets occurred” (Jones, 1997, ibid.).

**Conflict între surse, pe pagină:** Jones (via Wilner) spune că repararea a folosit interpretorul C din VxWorks; Reeves spune explicit că *nu* au folosit shell-ul VxWorks pentru patch, ci procesul specializat de pe navă. Ambii sunt de acord asupra cauzei (inversiune de prioritate pe mutex-ul din `select`/`pipe`) și asupra remediului (activarea *priority inheritance*).

<!-- AMÂNAT (decizia lui Lucas, lotul 5): DO-178C / RTCA și IEEE Annals of the History of Computing 1991 nu au fost deschise; nicio afirmație de pe pagină nu se sprijină pe ele, iar orice detaliu care ar depinde de ele (niveluri DAL, obiective, cronologie din Annals) a fost tăiat. -->

## Bucla închisă: simte, calculează, acționează

Atât avionica, cât și automatizarea industrială urmează același tipar: **simte** (starea din senzori), **calculează** (răspunsul — adesea un regulator de tip PID sau similar), **acționează** (semnal către motor sau suprafață), pe o perioadă fixă. Garanția în timp real acoperă *întreaga* buclă: latența senzorului, calculul și acționarea intră în același buget. <!-- NEVERIFICAT: exemplele concrete de cicluri „milisecunde” din EN și standardul DO-178C nu au sursă primară deschisă aici; le las fără cifre. -->

## De ce hardware-ul de uz general nu e adesea suficient

Sistemele în timp real rulează frecvent pe microcontrolere dedicate, nu pe CPU-uri de uz general sub un SO de uz general. Arhitectura mai simplă — adesea fără cache-uri agresive, fără execuție out-of-order, fără predicție speculativă a salturilor — renunță intenționat la tehnicile din faza 3 care fac timpul *mai puțin* predictibil. <!-- NEVERIFICAT: afirmația generală despre microcontrolere „fără cache / fără OoO” e pedagogică; nu am o sursă primară care să o afirme ca regulă. -->

## Două laboratoare, un contrast

Aceasta e singura pagină etichetată cu ambele laboratoare interactive, intenționat: mini-CPU arată timing-ul numărabil pe hardware simplu; terminalul VM rulează o stivă completă de SO de uz general — util ca să vezi variația pe care un sistem în timp real dur e construit să o elimine.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}
