---
title: "Milango ya mantiki kutoka kwa transista"
weight: 14
date: 2026-11-06
draft: false
phase: "2 — Fizikia na vifaa"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS: jozi ya NMOS na PMOS inayogeuza mkondo wa geti ulio karibu sifuri kuwa familia nzima ya milango ya mantiki"
---

CMOS (Complementary Metal-Oxide-Semiconductor) ni mpangilio wa saketi unaochanganya transista za MOS za p-channel na n-channel. Computer History Museum inaeleza kwamba katika karatasi ya mkutano ya 1963, C. T. Sah na Frank Wanlass wa Fairchild walionyesha kwamba saketi za mantiki za mpangilio huo zilitumia nguvu karibu sifuri katika hali ya kusubiri, na Wanlass akaipatia hataza wazo hilo (Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented", [computerhistory.org](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), ilitazamwa 2026-11-06). Kwa mujibu wa CHM, kadiri saketi jumuishi zilivyobeba transista nyingi zaidi, CMOS yenye matumizi ya chini ya nguvu ikawa teknolojia kuu, ikisaidia kuzuia joto kupita kiasi (Computer History Museum, *Revolution*, "Tortoise of Transistors Wins the Race", [computerhistory.org](https://www.computerhistory.org/revolution/digital-logic/12/279), ilitazamwa 2026-11-06).

Tangu miaka ya 1980, CMOS imekuwa chaguo kuu; maelezo ya kozi ya Harris yanaandika "1980s-present: CMOS processes for low idle power" (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 1 "Circuits & Layout", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), ilitazamwa 2026-11-06). Richard Langlois (Chuo Kikuu cha Connecticut) na Edward Steinmueller (Chuo Kikuu cha Sussex) wanaeleza kwamba kufikia 1983–84 gharama ya CMOS ilikuwa imeshuka chini ya ile ya NMOS, na CMOS ikawa haraka chaguo la wazi la kiteknolojia kwa karibu matumizi yote; mwaka 1988 CMOS ilichangia takriban asilimia 40 ya thamani ya uzalishaji wa saketi jumuishi, na kufikia 1994 asilimia 80 (Richard N. Langlois na W. Edward Steinmueller, "Strategy and Circumstance: the Response of American Firms to Japanese Competition in Semiconductors, 1980-1995", Economics Working Paper 1999-06, University of Connecticut, 1999, uk. 13–14, [opencommons.uconn.edu](https://opencommons.uconn.edu/econ_wpapers/199906), ilitazamwa 2026-11-06).

Katika CMOS, NMOS na PMOS zinaunganishwa kwa namna ambayo, katika hali tulivu, ni moja tu inayopitisha umeme (MIT OpenCourseWare, 6.012 Microelectronic Devices and Circuits, Spring 2009, Lecture 12 "Digital Circuits (II): MOS Inverter Circuits", [ocw.mit.edu](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf), ilitazamwa 2026-11-06). **Kwa maoni yetu:** mkondo wa geti ulio karibu sifuri wa kifaa kimoja ([sura ya 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})) unageuka kuwa familia ya mantiki inayoweza kuunganishwa.

## Kigeuzi (inverter): kitengo kidogo kabisa cha CMOS

Kigeuzi cha CMOS kina PMOS juu (kuelekea reli ya umeme, VDD) na NMOS chini (kuelekea ardhi). Maelezo ya kozi ya MIT 6.012 yanaonyesha jinsi kinavyofanya kazi: pembejeo ikiwa 0, NMOS imezimwa na PMOS imewashwa, kwa hiyo tokeo ni VDD; pembejeo ikiwa VDD, NMOS imewashwa na PMOS imezimwa, kwa hiyo tokeo ni 0 (MIT OpenCourseWare, 6.012 Microelectronic Devices and Circuits, Spring 2009, Lecture 12 "Digital Circuits (II): MOS Inverter Circuits", [ocw.mit.edu](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf), ilitazamwa 2026-11-06). NMOS na PMOS huwashwa kwa kupokezana, kwa hiyo hakuna njia ya mkondo kati ya reli ya umeme na ardhi, na hakuna matumizi ya nguvu wakati kigeuzi kimetulia katika hali yoyote ya mantiki (chanzo hichohicho).

## Kwa nini hili linatatua tatizo la nguvu

Maelezo hayohayo ya MIT yanalinganisha na kigeuzi cha NMOS chenye kifaa cha kuvuta juu (pull-up) cha chanzo cha mkondo: pembejeo ikiwa VDD, kuna njia ya moja kwa moja ya mkondo kati ya reli na ardhi, kwa hiyo nguvu inatumika hata kigeuzi kikiwa kimetulia (MIT OpenCourseWare, 6.012 Microelectronic Devices and Circuits, Spring 2009, Lecture 12 "Digital Circuits (II): MOS Inverter Circuits", [ocw.mit.edu](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf), ilitazamwa 2026-11-06). CMOS haina tatizo hilo (chanzo hichohicho).

**Kwa maoni yetu:** kwa hiyo nguvu ya CMOS inatumika karibu yote wakati wa mabadiliko, yaani kuchaji na kutoa chaji ya uwezo (capacitance) wa pembejeo za milango inayofuata, na inaongezeka na *shughuli* za kubadilisha hali na *masafa*, si na idadi ya milango iliyotulia kwenye chipu.

"Karibu sifuri" si sifuri. CHM inaeleza kwamba RCA ilitumia mchakato maalum wa CMOS wa silicon-gate, closed-geometry "ili kupunguza uvujaji" (leakage) katika kichakataji kidogo cha COSMAC 1802 cha 1975 (Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented", [computerhistory.org](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), ilitazamwa 2026-11-06). **Kwa maoni yetu:** hata katika hali ya kusubiri, transista "iliyozimwa" bado huvujisha mkondo mdogo; nguvu ya kusubiri ya CMOS ni ndogo sana, lakini si sifuri, na jinsi transista zinavyokuwa ndogo zaidi, uvujaji huo unakuwa jambo la kuhesabiwa.

## NAND, NOR na ukamilifu wa kiutendaji

Maelezo ya kozi ya David Harris (Harvey Mudd College) yanaeleza kwamba milango ya CMOS ya kukamilishana ina mtandao wa NMOS wa kuvuta chini (pull-down) na mtandao wa PMOS wa kuvuta juu (pull-up); transista zilizo kwa mfululizo (series) lazima zote ziwashwe, na zilizo sambamba (parallel) yoyote inatosha (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 1 "Circuits & Layout", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), ilitazamwa 2026-11-06). Katika NAND, NMOS zilizo kwa mfululizo zinatoa tokeo 0 pale pembejeo zote mbili ni 1, na hilo linahitaji PMOS sambamba; mtandao wa kuvuta juu ni kikamilisho cha mtandao wa kuvuta chini, mfululizo ukigeuka sambamba na sambamba ukigeuka mfululizo (chanzo hichohicho). NOR ni kioo chake: NMOS sambamba, PMOS kwa mfululizo (chanzo hichohicho).

HyperPhysics inaeleza kwamba milango ya NAND na NOR inaweza kuitwa milango ya ulimwengu wote (universal gates), kwa sababu michanganyiko yake inaweza kutekeleza operesheni zote za msingi, na hivyo kutoa kigeuzi, mlango wa OR au mlango wa AND; milango isiyogeuza haina uwezo huo kwa sababu haiwezi kutoa kugeuza (HyperPhysics, Georgia State University, "NAND Gate", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html), ilitazamwa 2026-11-06). Kwa mfano:

- **NOT** ni NAND ambayo pembejeo zake mbili zimeunganishwa pamoja (au kigeuzi chenyewe).
- **AND** ni NAND ikifuatiwa na kigeuzi (NOT): NAND inatoa kinyume cha AND, na kigeuzi kinakigeuza tena.
- **OR** ni NOR ikifuatiwa na kigeuzi (NOT), kwa njia ileile.

Maelezo ya Harris yanaongeza kwamba kwa sababu kuchora mpangilio (layout) kunachukua muda mwingi, wabunifu hujenga maktaba ya seli za kawaida (standard cells) zilizoundwa kutoshea pamoja (David Harris, Harvey Mudd College, maelezo ya kozi *CMOS VLSI Design*, toleo la 4, Lecture 1 "Circuits & Layout", [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), ilitazamwa 2026-11-06). **Kwa maoni yetu:** ziunganishe seli hizo na unapata vijumlishi, faili za rejista, hadi vichakataji vizima.

**Jaribu sasa.** Maabara iliyo hapa chini inafunguka kwenye mlango wa AND: badilisha pembejeo mbili na utazame tokeo. NAND na NOR ndio misingi ya CMOS iliyoelezwa hapo juu; AND ndiyo unayopata unapoiunganisha (NAND kisha NOT). Gusa mlango huo kabla ya sura inayofuata kujenga vijumlishi kutokana nayo.

{{< lab type="breadboard" height="700" >}}

## Hii inaelekea wapi

**Kwa maoni yetu:** kila muundo wa CPU wa Awamu ya 3, kuanzia kijumlishi kamili (full-adder), ALU hadi faili ya rejista, ni mchanganyiko wa milango hii. Kinachofuata ni muundo halisi wa kwanza, mantiki ya mchanganyiko (combinational logic), kuanzia na kijumlishi.

**Iliyotangulia:** [Sura ya 13: Transista: kutoka BJT hadi MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}})
**Inayofuata:** [Sura ya 15: Kutoka milango hadi mantiki ya mchanganyiko]({{< relref "15-from-gates-to-combinational-logic" >}})

## Vyanzo

- Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented": <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
- Computer History Museum, *Revolution*, "Tortoise of Transistors Wins the Race": <https://www.computerhistory.org/revolution/digital-logic/12/279>
- MIT OpenCourseWare, 6.012 (Spring 2009), Lecture 12: <https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf>
- David Harris, Harvey Mudd College, *CMOS VLSI Design* (4th ed.) course notes, Lecture 1: <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf>
- HyperPhysics (Georgia State University), "NAND Gate": <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html>
- Richard N. Langlois na W. Edward Steinmueller, "Strategy and Circumstance…", University of Connecticut Economics Working Paper 1999-06: <https://opencommons.uconn.edu/econ_wpapers/199906>
