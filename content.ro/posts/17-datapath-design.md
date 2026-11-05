---
title: "Proiectarea căii de date"
weight: 17
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 16
aliases:
  - /posts/12-datapath-design/
tags: []
summary: "O cale de date cu un singur ciclu face piesele vizibile și arată de ce ceasul ei e dimensionat după cazul cel mai lent"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

Capitolul 11 a definit contractul, adică ce instrucțiuni promite mașina. Calea de date (*datapath*) e hardware-ul care respectă promisiunea; piesele ei au fost numite încă din 1945.

## Piesele, numite încă din 1945

Împărțirea în piese e mai veche decât orice cip. În *First Draft of a Report on the EDVAC*, von Neumann separă trei „specific parts”. Prima e o parte aritmetică centrală, CA, pentru că mașina va face cel mai des operațiile elementare (von Neumann, J., *First Draft of a Report on the EDVAC*, 30 iunie 1945, §2.2, ediția Godfrey, [PDF](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), accesat 2026-11-05). A doua e un organ de control central, CC, care asigură „the proper sequencing of its operations”. Von Neumann distinge explicit instrucțiunile unei probleme anume, care trebuie stocate, de organele de control care le execută, „no matter what they are” (ibid., §2.3). A treia e memoria, M (ibid., §2.4–2.5).

Lectura noastră: distincția din §2.3 corespunde graniței dintre ISA și calea de date: instrucțiunile se schimbă de la program la program, iar organele care le execută rămân aceleași.

## Cum circulă o instrucțiune: varianta IAS, 1946

Raportul IAS din 1946 descrie pas cu pas ce face controlul. Un cuvânt de memorie conține o pereche de ordine. Controlul trebuie să comande memoriei Selectron să transmită perechea în registrul Selectron și de acolo în control, apoi să comande execuția operației din primul ordin. Apoi procesul se repetă cu al doilea ordin, „until the end of the problem” (Burks, Goldstine, von Neumann, *Preliminary Discussion…*, IAS, 1946, §6.1; transcriere HTML [cs.unc.edu](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html), accesat 2026-11-05).

Același pasaj distinge două tipuri principale de ordine. Unul aduce un număr dintr-o locație de memorie în registrul Selectron, cere unității aritmetice o operație cu el, de obicei împreună cu un număr aflat deja acolo, și păstrează rezultatul în unitatea aritmetică. Celălalt mută numărul din unitatea aritmetică, prin registrul Selectron, într-o locație de memorie (ibid.). În termeni de azi (echivalarea e a noastră), primul e o instrucțiune de tip încărcare-și-operație (*load-and-operate*), iar al doilea o scriere în memorie (*store*).

Unitatea aritmetică are la rândul ei piese numite. Prima e un acumulator, „a parallel storage organ which can receive a number and add it to the one already in it, which is also able to clear its contents and which can transmit what it contains” (ibid., §5.5). Autorii notează că acest organ e „quite conventional”, prezent în mașini de birou, contoare IBM, mașini cu relee și ENIAC (ibid.). Pentru înmulțire, raportul folosește un al doilea registru, AR, care se deplasează spre dreapta odată cu acumulatorul, și un contor binar cu șase etaje care numără cei 39 de pași (ibid., §5.8).

## O cale de date cu un singur ciclu, pe o mașină de tip RISC

Manualele moderne explică aceleași piese pe un ISA simplu, cu o cale de date în care fiecare instrucțiune se termină într-un singur ciclu de ceas. Pașii sunt: citești instrucțiunea de la adresa din `pc`, citești registrele sursă, calculezi în ALU (rezultatul sau adresa), accesezi memoria de date dacă e un load sau un store, scrii rezultatul în registrul destinație și actualizezi `pc`. Multiplexoarele aleg, după tipul instrucțiunii, ce intră în ALU și ce se scrie înapoi. <!-- NEVERIFICAT: Patterson & Hennessy, *Computer Organization and Design* (sursa didactică standard pentru calea de date cu un singur ciclu) e o carte fără copie deschisă în această sesiune; descrierea de mai sus nu preia figuri sau cifre din ea. -->

ISA-ul poate face calea de date mai ușoară. Manualul RISC-V spune că registrele `rs1`, `rs2` și `rd` stau în aceleași poziții în toate formatele de bază „to simplify decoding” (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411 (RV32I 2.1 „Ratified”), §2.2, p. 23; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05). Pe calea de date, asta înseamnă că fișierul de registre poate primi adresele de citire direct din biți fixați ai instrucțiunii, înainte ca decodorul să termine de stabilit ce operație e. Inferența aceasta, despre ce câștigă hardware-ul, e a noastră; manualul dă doar motivul, „simplify decoding”.

## Constrângerea care forțează pipelining-ul

Într-o cale de date cu un singur ciclu, fiecare instrucțiune trebuie să încapă într-o perioadă de ceas. Ceasul e unul singur, așa că perioada lui e dată de instrucțiunea cu drumul cel mai lung, de obicei un load: memorie de instrucțiuni, registre, ALU pentru adresă, memorie de date, scriere înapoi. E același buget de timp ca între două bistabile din capitolul 09. <!-- NEVERIFICAT: afirmația că perioada e dată de drumul cel mai lung, de obicei un load, e vocabular didactic standard, necitat dintr-o sursă deschisă. -->

Exemplu ilustrativ (cifre inventate pentru aritmetică, nu măsurători): dacă un load ar avea nevoie de 200 + 100 + 150 + 200 + 100 = 750 de unități de timp, iar o adunare între registre de doar 200 + 100 + 150 + 100 = 550, ceasul trebuie totuși să meargă la 750 pentru toate instrucțiunile. Adunarea irosește 200 de unități în fiecare ciclu. Proporția e a exemplului nostru, nu a vreunui procesor real.

Sunt două ieșiri din impas. Prima: tai instrucțiunea în mai mulți pași scurți, pe ceas mai rapid, și lași instrucțiunile simple să folosească mai puțini pași. A doua: tai calea de date în etaje și pui mai multe instrucțiuni în lucru în același timp. Capitolul 13 urmărește a doua variantă. <!-- NEVERIFICAT: cele două „ieșiri” (multi-ciclu și pipeline) sunt prezentarea didactică standard, necitată aici; pentru a doua, Bloch 1959 dă exemplul istoric din capitolul 13. -->
