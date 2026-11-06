---
title: "Kutoka milango hadi mantiki ya mchanganyiko"
weight: 15
date: 2026-11-06
draft: false
phase: "2 — Fizikia na vifaa"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "Kijumlishi nusu, kijumlishi kamili, kubeba kunakosambaa, na ALU ndogo: mahali milango inapogeuka kuwa hesabu"
---

**Kwa maoni yetu:** mlango mmoja peke yake karibu hauna faida. Tabia yenye manufaa inaanza unapoiunganisha milango, na muundo wa kwanza wa kawaida ni **kijumlishi** (adder): mahali milango inapogeuka kuwa "kitu kinachofanya hesabu ndani ya CPU".

## Kutoka kijumlishi nusu hadi kijumlishi kamili

Maelezo ya kozi ya David Harris (Harvey Mudd College) yanaeleza kwamba kwa **kijumlishi nusu** (half adder) cha biti mbili A na B, jumla ni S = A ⊕ B (XOR) na kubeba ni Cout = A · B (AND); kwa **kijumlishi kamili** (full adder) chenye pembejeo ya tatu ya kubeba C, jumla ni S = A ⊕ B ⊕ C na kubeba ni Cout = MAJ(A, B, C), yaani wingi (majority) wa pembejeo tatu (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 17 "Adders", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), ilitazamwa 2026-11-06). HyperPhysics inaeleza kwamba kijumlishi kamili kinashughulikia "kubeba" kutoka tarakimu moja hadi nyingine katika kujumlisha namba za jozi, kinapaswa kutii jedwali lake la ukweli, na kinaweza kutekelezwa kwa milango sita (HyperPhysics, Georgia State University, "The Full Adder", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fulladd.html), ilitazamwa 2026-11-06).

**Kwa maoni yetu:** kijumlishi nusu hakiwezi kupokea kubeba *kunakoingia* kutoka biti ya chini. Unganisha Cout ya hatua moja na pembejeo ya kubeba ya inayofuata na unaweza kujumlisha upana wowote, biti moja baada ya nyingine.

**Jaribu sasa.** Maabara iliyo hapa chini bado inafunguka kwenye mlango wa AND, ambao ndio kubeba kwa kijumlishi nusu. Weka pembejeo zote mbili juu na utazame tokeo likienda juu; mlango huo mmoja ndio kizuizi kitakachosambaa unapounganisha vijumlishi katika sehemu inayofuata.

{{< lab type="breadboard" height="700" >}}

## Kubeba kunakosambaa (ripple-carry): sahili, na polepole kwa sababu

Kwa mujibu wa Harris, muundo sahili kabisa wa **kijumlishi cha kubeba kunakosambaa** (carry-ripple adder) ni kupanga vijumlishi kamili kwa mfululizo; njia muhimu (critical path) inatoka Cin hadi Cout, kwa hiyo kijumlishi kamili kinapaswa kubuniwa kiwe na ucheleweshaji mdogo wa kubeba (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 17 "Adders", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), ilitazamwa 2026-11-06). Harris anaeleza kwamba kubeba kunakosambaa ni polepole kupitia hatua zote N, na kwamba **kijumlishi cha kubeba-tazamia** (carry-lookahead adder) kinakokotoa ishara za kuzalisha kubeba kwa biti nyingi sambamba; kutazamia kwa kujirudia kunatoa ucheleweshaji wa O(log N) (chanzo hichohicho).

**Kwa maoni yetu:** kubeba kwa biti ya 3 hakuwezi kuwa sahihi mpaka kubeba kwa biti ya 2 kutulie, ambako kunasubiri biti ya 1, ambako kunasubiri biti ya 0. Ni mtindo uleule wa kitabu hiki: kizibo cha kimwili kinalazimisha usanifu unaofuata, hapa milango mingi zaidi kwa njia fupi zaidi ya hali mbaya kabisa.

*Mfano wa kufafanua (si dai lenye chanzo):* kwa biti 4, mnyororo huo ni mfupi na ni sawa; kwa biti 64, mnyororo huo ndio unaoweka kikomo cha kasi ya saa ya ALU nzima.

## Kutoka vijumlishi hadi ALU sahili

Harris anaeleza pia kwamba **kichaguzi** (multiplexer, mux) cha 2:1 kinachagua kati ya pembejeo mbili, na mux ya 4:1 kinachagua moja kati ya nne kwa kutumia ishara mbili za uchaguzi (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 1 "Circuits & Layout", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), ilitazamwa 2026-11-06).

Allan Gottlieb (New York University), katika maelezo ya kozi yake ya *Computer Systems Design* ya 2001, anaeleza kanuni ya kujenga ALU: ukitaka kitalu cha mantiki kinachokokotoa wakati mwingine X na wakati mwingine Y, kokotoa X daima, kokotoa Y daima, weka zote mbili kwenye mux, na tumia sharti la "wakati mwingine" kama ishara ya uchaguzi ya mux; kwa kijumlishi kamili, ALU ya biti moja inachagua operesheni sahihi (ADD, AND, OR), na ALU ya biti 32 ni safu ya ALU hizo za biti moja, msimbo wa operesheni (opcode) ukitangazwa kwa zote (Allan Gottlieb, NYU, maelezo ya kozi *Computer Systems Design*, Fall 2001, "Chapter 4", [cs.nyu.edu](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/chapters/chapter-4.html), ilitazamwa 2026-11-06). Kwa kutoa, Gottlieb anaeleza kwamba katika mfumo wa two's complement, A − B = A + (B' + 1): B' (B iliyogeuzwa) inapatikana kutoka kwa kigeuzi, na +1 kutoka kwa pembejeo ya kubeba (Carry-In) (Allan Gottlieb, New York University, maelezo ya kozi *Computer Systems Design* (Computer Architecture), Fall 2001, Lecture 9, [cs.nyu.edu](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html), ilitazamwa 2026-11-06). Kujumlisha na kutoa vinatumia opcode ileile (10); kwa kujumlisha, b-invert na Cin hazitumiki, na kwa kutoa zote mbili zinawashwa (chanzo hichohicho). Kwa maneno yake, "(more or less) all ALUs do AND, OR, ADD, SUB", na mistari ya udhibiti ya ALU yake ni Bnegate (biti 1) na OP (biti 2): and = 0 00, or = 0 01, add = 0 10, sub = 1 10, na slt = 1 11 (chanzo hichohicho).

**Kwa maoni yetu:** kitalu kimoja, njia kadhaa za mchanganyiko. Kidogo kwa dhana, lakini kwa vitendo ni mara ya kwanza ambapo "milango" inakuwa hesabu ya CPU.

Maelezo ya kozi ya Harris yanafafanua tofauti hii: katika **mantiki ya mchanganyiko** (combinational logic), tokeo linategemea pembejeo za sasa; katika **mantiki ya mfuatano** (sequential logic), tokeo linategemea pembejeo za sasa na za awali (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 11 "Sequential Circuits", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf), ilitazamwa 2026-11-06). Mfuatano wa operesheni unahitaji hali inayodumu kwa muda. Hiyo ndiyo sura inayofuata.

**Iliyotangulia:** [Sura ya 14: Milango ya mantiki kutoka kwa transista]({{< relref "14-logic-gates-from-transistors" >}})
**Inayofuata:** [Sura ya 16: Sequential Logic (kwa Kiingereza kwa sasa)]({{< relref path="16-sequential-logic.md" lang="en" >}})

## Vyanzo

- David Harris, Harvey Mudd College, *CMOS VLSI Design* (4th ed.) course notes, Lecture 17 "Adders": <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf>
- David Harris, Harvey Mudd College, *CMOS VLSI Design* (4th ed.) course notes, Lecture 1 "Circuits & Layout": <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf>
- David Harris, Harvey Mudd College, *CMOS VLSI Design* (4th ed.) course notes, Lecture 11 "Sequential Circuits": <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf>
- Allan Gottlieb, NYU, *Computer Systems Design* course notes (Fall 2001), Lecture 9: <https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html>
- Allan Gottlieb, NYU, *Computer Systems Design* course notes (Fall 2001), Chapter 4: <https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/chapters/chapter-4.html>
- HyperPhysics (Georgia State University), "The Full Adder": <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fulladd.html>
