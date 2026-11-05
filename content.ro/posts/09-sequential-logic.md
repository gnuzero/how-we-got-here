---
title: "Logică secvențială"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 13
tags: []
summary: "Reacția face memorie bistabilă, bistabilul D pe front face proiectarea sincronă posibilă, iar setup/hold pun plafon ceasului"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

Circuitele din capitolul 08 nu țin minte nimic. Logica secvențială adaugă elemente care păstrează o valoare după ce intrarea a dispărut, deci ieșirea depinde și de starea anterioară.

## Memorie din reacție

Mecanismul e reacția inversă. Leagă două porți NAND în cruce, cu ieșirea fiecăreia la o intrare a celeilalte, și obții un circuit basculant SR (*latch*) cu intrări active pe zero (S̄, R̄). Tabelul de mai jos l-am derivat noi din tabelul NAND din capitolul 07:

| S̄ | R̄ | Q | Q̄ | Comportament |
|---|---|---|---|---|
| 0 | 1 | 1 | 0 | set |
| 1 | 0 | 0 | 1 | reset |
| 1 | 1 | Q anterior | Q̄ anterior | ține starea |
| 0 | 0 | 1 | 1 | interzis: ieșirile nu mai sunt complementare |

Rândul „ține starea” e memoria: cu ambele intrări inactive, circuitul rămâne în oricare dintre cele două stări stabile în care a fost lăsat. Rândul interzis apare și într-o fișă tehnică reală. Pentru bistabilul 74LS74A, TI notează că, atunci când PRE și CLR sunt amândouă jos, ambele ieșiri sunt sus, o configurație care „is nonstable; that is, it will not persist when either preset or clear returns to its inactive (high) level” (TI, *SN5474, SN54LS74A, SN54S74, SN7474, SN74LS74A, SN74S74 Dual D-Type positive-edge-triggered flip-flops with preset and clear*, SDLS119, dec. 1983, rev. mart. 1988, p. 1, nota la „function table”, [PDF](https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf), accesat 2026-11-05; PDF scanat, citit de noi de pe imaginea paginii).

Elementul acesta bistabil e și cel la care se gândeau proiectanții din anii '40. Burks, Goldstine și von Neumann enumeră „the flip-flop or trigger circuit” printre cele mai comune forme de stocare din circuitele electrice (Burks, Goldstine, von Neumann, *Preliminary Discussion…*, IAS, 1946, §4.1; transcriere HTML [cs.unc.edu](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html), accesat 2026-11-05). Capitolul 10 arată de ce l-au respins totuși ca memorie principală.

## Bistabilul D: fronturi, nu niveluri

Un circuit basculant „transparent” urmărește intrarea cât timp e activat, ceea ce face greu de controlat momentul exact în care se schimbă starea. Fișa SN74LS75 descrie exact acest comportament: informația de la intrarea D „is transferred to the Q output when the enable (C) is high and the Q output will follow the data input as long as the enable remains high”; când activarea trece în 0, informația e reținută (TI, SN74LS75, SDLS120, p. 1, „description”; [PDF ti.com](https://www.ti.com/lit/ds/symlink/sn74ls75.pdf), accesat 2026-11-05). Bistabilul D comandat pe front (*edge-triggered*) rezolvă problema: eșantionează intrarea D într-un singur moment, la frontul ceasului. Fișa 74LS74A descrie exact acest comportament: datele de la intrarea D care respectă cerințele de setup „are transferred to the outputs on the positive-going edge of the clock pulse” (TI, SDLS119, p. 1, „description”). Aceeași pagină precizează că declanșarea are loc la un anumit nivel de tensiune și „is not directly related to the rise time of the clock pulse” (ibid.).

Consecința de proiectare e designul sincron. Toate bistabilele se actualizează la același front, iar între două fronturi logica combinațională are o perioadă de ceas întreagă ca să se liniștească. <!-- NEVERIFICAT: afirmația generală despre metodologia sincronă e o sinteză a noastră; nu am deschis un manual care s-o formuleze. -->

## Setup, hold și plafonul ceasului

Fișa 74LS74A dă două ferestre de timp în jurul frontului. Datele trebuie să fie stabile cu un timp de setup *înainte* de front și să rămână stabile un timp de hold *după*. După intervalul de hold, „data at the D input may be changed without affecting the levels at the outputs” (TI, SDLS119, p. 1, „description”). Pentru SN74LS74A, tabelul *recommended operating conditions* cere un setup de minimum 20 ns (atât pentru date „high”, cât și „low”) și un hold de minimum 5 ns, cu o frecvență de ceas recomandată între 0 și 25 MHz (ibid., p. 5). Tabelul *switching characteristics* (VCC = 5 V, TA = 25 °C, RL = 2 kΩ, CL = 15 pF) dă f_max minimum 25 MHz și tipic 33 MHz, iar întârzierea de la CLR, PRE sau CLK la Q are tPLH tipic 13 ns și maximum 25 ns, respectiv tPHL tipic 25 ns și maximum 40 ns (ibid., p. 5).

De aici vine plafonul. Între două bistabile, perioada ceasului trebuie să acopere întârzierea ceas→Q a primului, întârzierea logicii dintre ele și setup-ul celui de-al doilea. <!-- NEVERIFICAT: regula bugetului de timp e standard în proiectare, dar nu e citată dintr-o sursă deschisă; fișa dă doar parametrii. --> Ca exemplu de calcul (al nostru, pe valorile maxime din fișă, fără logică între bistabile și fără decalaj de ceas): 40 ns (tPHL max) + 20 ns (setup) = 60 ns, adică circa 16,7 MHz. Rezultatul e sub f_max-ul de 25 MHz din fișă, pentru că f_max e un parametru de test separat al producătorului, nu suma celor mai rele întârzieri. Cele două cifre nu trebuie confundate: una e garanția de catalog, cealaltă e un buget de timp pe care proiectantul îl face pe drumul real.

Hold-ul pune o limită de altă natură. Dacă drumul cel mai *scurt* dintre două bistabile e mai rapid decât timpul de hold, noua valoare poate ajunge prea devreme și poate strica eșantionul abia prins. Aici nu ajută un ceas mai lent. <!-- NEVERIFICAT: explicația violării de hold e standard, dar nu e citată dintr-o sursă deschisă aici. -->

## Ce deblochează asta

Cu registre făcute din bistabile D poți ține un rezultat de la un ciclu la altul, adică poți construi registre de lucru; acumulatorul din raportul IAS, de exemplu, e un organ de stocare paralel (Burks et al., 1946, §5.5, citat în capitolul 12). Același buget de timp, „întârzierea cea mai lungă dintre două registre fixează ceasul”, revine în capitolul 12 la calea de date cu un singur ciclu, iar în capitolul 13 e motivul pentru care tăiem drumul în etaje de pipeline.
