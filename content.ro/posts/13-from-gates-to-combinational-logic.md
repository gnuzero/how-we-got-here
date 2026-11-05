---
title: "De la porți la logică combinațională"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 12
aliases:
  - /posts/08-from-gates-to-combinational-logic/
tags: []
summary: "Din porți facem sumatoare și un ALU; transportul care se propagă bit cu bit (ripple carry) cere structuri mai bune"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

O poartă singură nu face aritmetică. Capitolul acesta compune porțile din capitolul 12 („Porți logice din tranzistori”) în circuite combinaționale, adică circuite fără memorie, în care ieșirea depinde doar de intrările prezente. Ajungem la sumator, apoi la ideea de ALU, și dăm de prima limită structurală: transportul.

## Un sumator binar, încă din 1938, cu relee

Ideea că un circuit de comutație poate aduna e mai veche decât tranzistorul. În teza de master de la MIT, Claude Shannon proiectează un sumator „using only relays and switches” și notează că, deși orice bază ar fi posibilă, circuitul e „greatly simplified by using the scale of two” (Shannon, C. E., *A Symbolic Analysis of Relay and Switching Circuits*, teză MIT, 1937/1940, secțiunea „An Electric Adder to the Base Two”, pp. 59–61 în paginarea tipărită (titlul secțiunii e pe p. 59, în acord cu cuprinsul); copie [fab.cba.mit.edu](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf), accesat 2026-11-05). Shannon reprezintă fiecare cifră a celor două numere printr-un comutator, cifrele sumei prin relee, iar transportul (*carry*) din coloana j−1 în coloana j printr-un releu separat, c_j (ibid.). Lectura noastră: aceeași structură, cu porți în loc de relee, seamănă cu ce numim azi sumator *ripple-carry* (cu transport în lanț).

## De la semi-sumator la sumator complet

Pentru un bit, un semi-sumator (*half adder*) primește A și B și produce suma S = A XOR B și transportul C = A AND B. Un sumator complet (*full adder*) primește în plus transportul de intrare Cin:

- S = A XOR B XOR Cin
- Cout = (A AND B) OR (Cin AND (A XOR B))

Am verificat noi aceste două ecuații pe toate cele opt combinații de intrare. Rezultatul e întotdeauna A + B + Cin = 2·Cout + S. Ecuațiile sunt algebră booleană, nu un fapt istoric, așa că nu au nevoie de o sursă externă.

**Încearcă acum.** Laboratorul de mai jos se deschide tot pe o poartă AND, adică exact transportul semi-sumatorului de mai sus (C = A AND B). Pune ambele intrări pe 1 și urmărește ieșirea trecând pe 1: poarta aceasta e legătura pe care, în secțiunea următoare, o înlănțuim de la un etaj la altul.

{{< lab type="breadboard" height="700" >}}

## Transportul în lanț (ripple-carry): simplu și lent dintr-un motiv precis

Lipești n sumatoare complete în lanț, iar Cout-ul fiecăruia devine Cin-ul următorului. Rezultatul e corect, dar bitul cel mai semnificativ nu își știe suma până când transportul nu a trecut, în cazul cel mai rău, prin toate etajele de dedesubt (vezi formularea din 1946 de mai jos).

Problema a fost numită explicit încă din 1946. În *Preliminary Discussion* de la IAS, Burks, Goldstine și von Neumann descriu adunarea paralelă în doi pași: întâi se adună cifrele corespunzătoare, apoi se efectuează transporturile, „and this must be done in sequence since a carry may produce a carry” (Burks, A. W., Goldstine, H. H., von Neumann, J., *Preliminary Discussion of the Logical Design of an Electronic Computing Instrument*, IAS, 1946, §5.5; scanare IAS [ias.edu](https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf), citită prin OCR, și transcriere HTML [cs.unc.edu](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html), accesate 2026-11-05). Pentru cuvintele lor de 40 de cifre binare, „in the worst case, 39 carries will occur”, iar autorii consideră ineficient să aloci pasului de transport de 39 de ori timpul pasului de adunare: „either the carries must be accelerated, or use must be made of the average number of carries or both” (ibid., §5.5). În §5.6 arată că, pentru două cuvinte de lungime n, cea mai lungă secvență de transport are în medie o lungime „not in excess of 2 log n” (ibid., §5.6; verificat în transcrierea UNC).

Ca ilustrare (calculul nostru, nu o cifră din vreo sursă): dacă fiecare etaj de sumator adaugă două niveluri de poartă pe drumul transportului, un sumator ripple pe 32 de biți are în cazul cel mai rău un drum de ordinul a 64 de niveluri de poartă. Dacă am lua întârzierea maximă de 15 ns a unei porți NAND 74LS00 din capitolul 12 (TI, SN74LS00 datasheet, SDLS025D, §6.9, [PDF](https://www.ti.com/lit/ds/symlink/sn74ls00.pdf), accesat 2026-11-05), ar ieși aproape o microsecundă. Cifra e un exemplu de ordin de mărime, nu o proiectare reală.

## Ce face industria: transport anticipat (look-ahead) în aceeași capsulă

Soluția „accelerează transporturile” a devenit componentă de catalog. Fișa tehnică TI a sumatorului pe 4 biți SN74LS283 se intitulează „4-bit binary full adders with fast carry” și promite „full-carry look-ahead across the four bits” (TI, *SN54283, SN54LS283, SN74283, SN74LS283 4-Bit Binary Full Adders with Fast Carry*, SDLS095A, oct. 1976, rev. mart. 1988, p. 1, [PDF](https://www.ti.com/lit/ds/symlink/sn74ls283.pdf), accesat 2026-11-05; PDF scanat, citit de noi de pe imaginea paginii). Aceeași pagină spune că look-ahead-ul intern pe toți cei patru biți generează termenul de transport „in ten nanoseconds, typically” pentru '283 și 'LS283 (ibid., p. 1, „description”). Tabelul „typical add times” dă pentru 'LS283 25 ns la adunarea a două cuvinte de 8 biți și 45 ns la două cuvinte de 16 biți, cu o putere tipică de 95 mW per sumator (ibid., p. 1).

Sunt valori *tipice* din fișa producătorului, nu maxime garantate și nici măsurători independente. Mai precis, fișa vorbește de look-ahead *parțial* pentru sisteme construite din mai multe capsule („partial look-ahead performance with the economy of ripple carry”, ibid.): în interiorul capsulei, transportul e calculat anticipat, iar între capsule se propagă tot în lanț.

## De la sumator la ALU

O unitate aritmetică și logică (ALU) e, în esență, un sumator plus câteva funcții logice bit cu bit (AND, OR, XOR), urmate de un multiplexor care alege ce rezultat iese, comandat de câțiva biți de operație. <!-- NEVERIFICAT: n-am deschis o fișă tehnică de ALU (ex. 74181) în această sesiune; descrierea de mai sus e generică și nu conține cifre. --> Ideea unei unități aritmetice centrale e și ea din anii '40: von Neumann o numește în 1945 „central arithmetical part”, CA (von Neumann, *First Draft of a Report on the EDVAC*, 30 iunie 1945, §2.2, ediția Godfrey, [PDF](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), accesat 2026-11-05).

Circuitele din capitolul acesta nu păstrează nimic după ce intrările se schimbă; elementele care țin minte sunt subiectul capitolului 14 („Logică secvențială”).
