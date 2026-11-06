---
title: "Relei na mantiki ya kielektromakanika"
weight: 9
date: 2026-11-06
draft: false
phase: "1 — Misingi: kutoka kompyuta za kimakanika hadi vali za utupu"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "Relei zilithibitisha kwamba mantiki ya jozi inafanya kazi, na kwamba chuma kinachosogea hakiwezi kwenda kasi"
---

**Kwa maoni yetu:** relei ni kifaa sahili kiasi cha kushangaza: sumakuumeme, kipande cha chuma kinachovutwa (armature) chenye springi, na seti ya ncha za mguso. Ukipitisha umeme kwenye koili, kipande kile kinavutwa, na ncha zinafungua au kufunga mzunguko.

## Kazi mbili za kifaa kimoja

Katika sura hii **relei** ni swichi: koili dhaifu inayofunga au kufungua mzunguko wenye nguvu zaidi, na baadaye inakuwa tofali la ujenzi wa AND, OR na NOT. Kwa kazi yake kwenye laini ya telegrafu, angalia [Jinsi ujumbe ulivyosafiri]({{< relref "03-how-the-message-travelled" >}}).

Sasa tuiunganishe swichi hiyo kwa ajili ya mantiki.

## Relei kama mantiki

**Kwa maoni yetu:** unganisha ncha mbili za mguso kwa mfululizo (series) na unapata AND: umeme unapita tu kama *zote mbili* zimefungwa. Ziunganishe sambamba (parallel) na unapata OR. Ongeza ncha iliyo kawaida imefungwa (normally closed) na unapata NOT. Changanya hizo na unaweza kujenga kazi yoyote ya Boole: vijumlishi, vilinganishi, visimbuzi; familia zilezile za mantiki ambazo Awamu ya 2 inazijenga kwa silikoni, hapa kwa vifaa vya kielektromakanika.

Hili halikubaki nadharia. Computer History Museum inaeleza kwamba George Stibitz, mwanasayansi wa Bell Laboratories, alitumia relei kujenga kijumlishi cha maonyesho, kilichoitwa "Model K" kwa sababu alikijenga juu ya meza yake ya jikoni (kitchen); saketi hiyo sahili ilithibitisha wazo la kutumia mantiki ya Boole katika usanifu wa kompyuta, na ikaongoza kwenye ujenzi wa Model I Complex Calculator, iliyotumia relei, mwaka 1939 (Computer History Museum, Timeline of Computer History, 1937: "Model K" Adder, [computerhistory.org](https://www.computerhistory.org/timeline/1937/), ilitazamwa 2026-11-06). Mwaka huohuo huko Ujerumani, mhandisi Konrad Zuse alijenga kompyuta yake ya Z2, nayo ikitumia relei za kampuni za simu (chanzo hichohicho).

**Kwa maoni yetu:** sekta ya simu ilikuwa tayari imezalisha relei kwa wingi; hiyo ni sababu moja kubwa iliyofanya kompyuta za relei ziwezekane kujengwa kabisa.

## Z3 ya Zuse

Kwa mujibu wa Computer History Museum, Z3, kompyuta iliyojengwa na Zuse akifanya kazi peke yake bila kujua maendeleo mengine duniani, ilikamilika mwaka 1941; ilitumia relei 2,300, ilifanya hesabu za jozi za *floating point*, na ilikuwa na urefu wa neno wa biti 22 (Computer History Museum, Timeline of Computer History, "1941: Konrad Zuse finishes the Z3 Computer", [computerhistory.org](https://www.computerhistory.org/timeline/1941/), ilitazamwa 2026-11-06). Ilitumika kwa hesabu za aerodinamiki lakini iliharibiwa katika shambulio la mabomu Berlin mwishoni mwa 1943; Zuse baadaye alisimamia ujenzi wake upya katika miaka ya 1960, nakala inayoonyeshwa sasa katika Deutsches Museum, Munich (chanzo hichohicho).

Raúl Rojas (Freie Universität Berlin) anaeleza kwamba Z3, iliyojengwa na Zuse kati ya 1938 na 1941, iliweza tu kutekeleza mifuatano isiyobadilika ya hesabu za *floating point* (kujumlisha, kutoa, kuzidisha, kugawanya na kipeuo cha pili) zilizoandikwa kwenye utepe uliotobolewa, bila matawi ya masharti (conditional branching) (Raúl Rojas, "How to make Zuse's Z3 a universal computer", *IEEE Annals of the History of Computing* 20(3), 1998, uk. 51–54, [doi.org/10.1109/85.707574](https://doi.org/10.1109/85.707574); nakala ya mwandishi, Freie Universität Berlin, [inf.fu-berlin.de](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf), ilitazamwa 2026-11-06). Hata hivyo, anaonyesha kwamba kitanzi kimoja cha programu chenye maagizo hayo ya hesabu kinaweza kuiga mashine yoyote ya Turing yenye utepe wa ukubwa fulani wenye kikomo, kwa kuiga matawi ya masharti na anwani zisizo za moja kwa moja kwa njia za hesabu tupu; kwa hiyo Z3, angalau kinadharia, ni ya ulimwengu wote (universal) kama kompyuta za leo zenye nafasi ya anwani yenye kikomo, ingawa kwa gharama ya programu ndefu mno kwenye utepe (chanzo hichohicho).

**Mlango wa kutokea:** makala ya Raúl Rojas ya 1998, "How to make Zuse's Z3 a universal computer", ndiyo hoja ya makini kuhusu ukamilifu wa Turing wa Z3 na mipaka yake.

## Kwa nini relei zilikuwa za polepole

**Kwa maoni yetu:** muda ambao relei inachukua kubadilisha hali unatawaliwa na mwendo wa *kimakanika*: kipande cha chuma lazima kisogee kimwili. Elektroni hazihitaji kusubiri chuma. Tatizo la pili ni kwamba ncha za mguso huchakaa: kila mfungo ni chuma kugusa chuma, na cheche, mashimo madogo, na hatimaye kuharibika. Maelfu ya relei yanamaanisha maelfu ya sehemu za kuchakaa. Kutegemewa na kasi vilipambana na kizuizi kilekile: sehemu zinazosogea.

## Daraja kuelekea elektroniki

**Kwa maoni yetu:** relei zilithibitisha usanifu: uwakilishi wa jozi, milango ya Boole kutoka kwa swichi sahili, na programu kama data. Kile ambacho hazikuweza kuthibitisha ni kwamba usanifu huo unaweza kwenda *kasi*. Kutatua hilo kulimaanisha kubadilisha swichi ya kimakanika na kitu kinachobadilisha hali kwa kusogeza elektroni badala ya chuma: vali ya utupu, kwa gharama ya nguvu kubwa ya umeme na joto. Hiyo ndiyo biashara-badilishano inayofuata.

**Iliyotangulia:** [Sura ya 8: Kunasa mwanga]({{< relref "08-capturing-light" >}})
**Inayofuata:** [Sura ya 10: Enzi ya vali za utupu]({{< relref "10-the-vacuum-tube-era" >}})

## Vyanzo

- Computer History Museum, Timeline of Computer History, 1937 ("Model K" Adder): <https://www.computerhistory.org/timeline/1937/>
- Computer History Museum, Timeline of Computer History, 1941 (Zuse Z3): <https://www.computerhistory.org/timeline/1941/>
- Raúl Rojas, "How to make Zuse's Z3 a universal computer", *IEEE Annals of the History of Computing* 20(3) (1998): <https://doi.org/10.1109/85.707574>
