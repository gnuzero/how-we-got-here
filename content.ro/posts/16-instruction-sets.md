---
title: "Seturi de instrucțiuni"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 15
aliases:
  - /posts/11-instruction-sets/
tags: []
summary: "ISA e contractul dintre software și hardware; CISC și RISC sunt două răspunsuri la ce ar trebui să conțină"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

Hardware-ul din capitolele 06–10 execută orice i se cere, dacă știi să-i ceri. Setul de instrucțiuni (ISA, *instruction set architecture*) e limba în care i se cere: lista operațiilor, a registrelor și a formatelor binare pe care un program are voie să se bazeze. Definiția din 1964 de mai jos o separă explicit de implementare.

## Contractul: arhitectură versus implementare

Distincția are o definiție clasică, din 1964. Prezentând IBM System/360, Gene Amdahl, Gerrit Blaauw și Fred Brooks scriu că termenul *architecture* descrie „the attributes of a system as seen by the programmer, i.e., the conceptual structure and functional behavior, as distinct from the organization of the data flow and controls, the logical design, and the physical implementation” (Amdahl, G. M., Blaauw, G. A., Brooks, F. P., Jr., „Architecture of the IBM System/360”, *IBM Journal of Research and Development*, vol. 8, nr. 2, aprilie 1964, pp. 87–97 în copia deschisă, p. 87, nota de subsol la „architecture”; copie [ece.ucdavis.edu](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf), accesat 2026-11-05).

Câștigul practic al separării e compatibilitatea. Rezumatul aceluiași articol listează printre cele patru inovații ale System/360 „strict upward and downward machine-language compatibility over a line of six models having a performance range factor of 50” (ibid., p. 87, Abstract, pct. 4). Autorii scriu că familia trebuia să fie „strictly program compatible in all models”, la nivel de bit al programului, pentru modele mari și mici (ibid., p. 87, introducere). Același program binar rulează pe o mașină mică și pe una de până la 50 de ori mai performantă. Diferă implementarea, nu contractul.

Articolul dă și un exemplu de ce înseamnă „văzut de programator”. Proiectul logic are șaisprezece registre generale de 32 de biți și patru registre de virgulă mobilă de 64 de biți, iar autorii notează că acestea sunt realizate fizic în memorie cu miez, în memorie locală rapidă sau în tranzistori, „according to the model” (ibid., p. 96). Programul vede 16 registre. Unde stau ele fizic, decide fiecare model.

## Ce conține un format de instrucțiune

Un ISA decide câți biți primește fiecare câmp al unei instrucțiuni. Exemplul timpuriu e tot din 1946. În propunerea IAS, un cuvânt de 40 de cifre binare conține două ordine (instrucțiuni) de câte 20 de biți: 12 cifre specifică o locație de memorie, iar 8 specifică natura operației (Burks, Goldstine, von Neumann, *Preliminary Discussion…*, IAS, 1946, §6.3; transcriere HTML [cs.unc.edu](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html), accesat 2026-11-05). Cei 12 biți de adresă corespund celor 2¹² cuvinte de memorie din capitolul 10 (ibid., §4.2). Autorii grupează biții câte patru („tetrads”) și propun ca, în afara mașinii, fiecare grup să fie scris ca o cifră în baza 16, cu cifrele 0–9 și literele a–f (ibid.). E un format cu o singură adresă: o operație lucrează între memorie și acumulator.

## O definiție modernă și deschisă: RISC-V

Ca exemplu actual luăm un ISA a cărui specificație e publică și poate fi deschisă integral: RISC-V. Pentru baza RV32I, manualul definește 32 de registre `x` de câte 32 de biți (XLEN = 32). Registrul `x0` e „hardwired with all bits equal to 0”, iar `x1`–`x31` sunt registre generale (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411 (RV32I 2.1 „Ratified”), §2.1, p. 21; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05). Pe lângă ele există doar contorul de program `pc` (ibid.).

Manualul își explică și alegerile, și asta e partea instructivă. Despre numărul de registre, spune că 16 ar fi „arguably” suficiente pentru cod compilat, dar că un ISA complet cu 16 registre nu se poate codifica în instrucțiuni de 16 biți cu format de trei adrese. Odată adoptată o lungime de instrucțiune de 32 de biți, era simplu să suporte 32 de registre (ibid., §2.1, comentariu, p. 22). Pentru sistemele embedded cu resurse mici există subsetul RV32E, cu 16 registre (ibid.).

Despre formate: RV32I are patru formate de bază (R/I/S/U), „all are a fixed 32 bits in length”, aliniate la 4 octeți (ibid., §2.2, p. 23). Registrele sursă (`rs1`, `rs2`) și destinația (`rd`) stau în aceleași poziții în toate formatele „to simplify decoding”, iar bitul de semn al oricărei valori imediate e întotdeauna bitul 31, „to speed sign-extension circuitry” (ibid., §2.2, p. 23). Sunt decizii de ISA motivate explicit prin hardware (ibid.).

## Două filozofii: CISC și RISC

În linii mari, CISC (*complex instruction set computer*) pune multe instrucțiuni puternice, de lungimi variabile, cu moduri de adresare bogate, iar RISC (*reduced instruction set computer*) pune instrucțiuni simple, de lungime fixă, cu acces la memorie doar prin load/store, și lasă compilatorului restul. RISC-V se declară în tradiția a doua. Manualul spune că numele a fost ales pentru a reprezenta „the fifth major RISC ISA design from UC Berkeley” (manualul RISC-V, ibid., cap. 1 „Introduction”, p. 10) și că RV32I e „a load-store architecture, where only load and store instructions access memory” (ibid., §2.6, p. 31). Formatele de lungime fixă și registrele în poziții fixe de mai sus sunt exact acest stil (ibid., §2.2, p. 23).

Termenul vine din articolul-manifest al lui David A. Patterson și David R. Ditzel, care propun să examineze „the case for a Reduced Instruction Set Computer (RISC) being as cost-effective as a Complex Instruction Set Computer (CISC)” și pornesc de la creșterea complexității: memoria de control a crescut de la 256 x 56 la PDP-11/40 la 5120 x 96 la VAX-11/780 (Patterson, D. A., Ditzel, D. R., „The Case for the Reduced Instruction Set Computer”, *ACM SIGARCH Computer Architecture News* 8(6), 1980, pp. 25–33, p. 25; [PDF cs.utexas.edu](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/risc.pdf), accesat 2026-11-05). Argumentul lor despre compilatoare e cel din definiția de mai sus: „the compiler writer is replacing the assembly-language programmer in deciding which instructions the machine will execute” (ibid., p. 27), iar „the burden on compiler writers is eased when the instruction set is simple and uniform” (ibid., p. 30). Concluzia: ar trebui să fie posibil „to have a very simple instruction set that can be very fast” (ibid., p. 31). <!-- NEVERIFICAT: detaliile tehnice ale caracterizării generale (lungime fixă, acces la memorie doar prin load/store, moduri de adresare) nu sunt formulate astfel în Patterson & Ditzel 1980; pentru RISC-V le acoperă manualul citat mai sus. -->

De ce x86, o arhitectură CISC, a rezistat totuși, e tema capitolului 19. Argumentul din System/360 îl anticipează: un ISA care adună destul software binar devine greu de abandonat, pentru că acel software depinde de contract, nu de implementare (Amdahl et al., 1964, Abstract, pct. 4, despre compatibilitate ca obiectiv de proiect). <!-- NEVERIFICAT: aplicarea argumentului la x86 e interpretarea noastră; sursele pentru x86 sunt amânate pentru cap. 19 (Intel SDM: 403 la fetch automat). -->

Capitolul 12 coboară sub contract: ce hardware execută efectiv o instrucțiune.
