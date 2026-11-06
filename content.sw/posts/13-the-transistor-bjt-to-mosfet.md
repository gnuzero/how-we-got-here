---
title: "Transista: kutoka BJT hadi MOSFET"
weight: 13
date: 2026-11-06
draft: false
phase: "2 — Fizikia na vifaa"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "Familia mbili za transista, fizikia mbili tofauti, na moja tu inayoweza kukua hadi chipu za leo"
---

**Kwa maoni yetu:** familia mbili za vifaa zote huitwa "transista". Zinabadilisha hali kwa fizikia tofauti, na ni moja tu kati yake inayoweza kukua hadi idadi kubwa mno ya vifaa kwenye chipu moja ya kisasa.

## BJT: mkondo unadhibiti mkondo

HyperPhysics ya Chuo Kikuu cha Georgia State inaeleza kwamba transista ya kiunganishi cha bipolar (bipolar junction transistor, BJT) ina maeneo matatu ya semikondakta zilizoongezewa uchafu; mkondo mdogo katika eneo la katikati, **besi** (base), unaweza kudhibiti mkondo mkubwa zaidi unaopita kati ya maeneo ya mwisho, **emita** (emitter) na **kolekta** (collector) (HyperPhysics, Georgia State University, "The Junction Transistor", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/trans.html), ilitazamwa 2026-11-06). Kifaa hicho kinaweza kuelezwa kama kikuzaji cha mkondo, chenye matumizi mengi ya ukuzaji na ya kubadilisha hali (switching); mkondo wa kolekta ni sawia na mkondo wa besi (I_C = βI_B), au kwa usahihi zaidi na volteji kati ya besi na emita (chanzo hichohicho). HyperPhysics inatumia hata mfano wa "vali": mkondo mdogo wa besi ni kama vali inayodhibiti mkondo mkubwa kutoka kolekta hadi emita (chanzo hichohicho).

**Kwa maoni yetu:** ili BJT ibaki imewashwa, lazima uendelee kuipa mkondo wa besi. Kwa kipimo cha chipu nzima, gharama hiyo ya kusubiri inajilimbikiza: mantiki ya bipolar iligonga "ukuta wa joto", yaani mipaka ya nguvu na joto inayotokana na matumizi ya umeme hata pale milango haibadilishi hali.

## MOSFET: volteji inadhibiti chaneli

HyperPhysics inaeleza kwamba MOSFET (Metal Oxide Semiconductor Field Effect Transistor) inajengwa juu ya FET ya msingi kwa kuongeza tabaka la dioksidi ya silikoni, na hivyo kufikia upinzani wa kuingiza (input impedance) wa juu sana, kati ya ohm 10⁹ na 10¹⁴ (HyperPhysics, Georgia State University, "MOSFET", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/mosfet.html), ilitazamwa 2026-11-06).

**Kwa maoni yetu:** MOSFET inaweka **geti** (gate) ya metali (au polisilikoni) juu ya silikoni, ikitenganishwa nayo na oksidi nyembamba, ileile SiO₂ ya [sura ya 12]({{< relref "12-semiconductors-from-first-principles" >}}). Volteji ya geti haisukumi mkondo *kupitia* geti; oksidi inazuia mkondo mnyoofu. Badala yake inaunda uga unaounda au kuondoa **chaneli** inayopitisha umeme kati ya **sosi** (source) na **dreni** (drain). Kwa NMOS, volteji chanya ya geti inavuta elektroni hadi tabaka la ugeuzi (inversion layer) katika mwili wa aina ya p, na mkondo unapita; punguza volteji ya geti, chaneli inatoweka, mkondo unakoma. Geti ikishachajiwa, kuiweka imewashwa kunagharimu karibu chochote. Huo ni kinyume cha mkondo wa besi usiokoma wa BJT.

## Historia: Bell Labs, Fairchild, RCA

Computer History Museum inaeleza kwamba mwaka 1959 M. M. (John) Atalla na Dawon Kahng wa Bell Labs walifanikiwa kutengeneza transista ya kwanza ya athari ya uga yenye geti iliyohamishwa (insulated-gate FET), kwa kushinda "hali za uso" (surface states) zilizozuia uga wa umeme kupenya ndani ya semikondakta (Computer History Museum, *The Silicon Engine*, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated", [computerhistory.org](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), ilitazamwa 2026-11-06). Wakichunguza matabaka ya dioksidi ya silikoni yaliyokuzwa kwa joto, waligundua kwamba hali hizo zingeweza kupunguzwa sana kwenye mpaka kati ya silikoni na oksidi yake, katika sandwichi ya metali (M, geti), oksidi (O, kihami) na silikoni (S, semikondakta), na hiyo ndiyo asili ya jina MOSFET (chanzo hichohicho). Hataza ya Kahng, "Electric Field Controlled Semiconductor Device", iliwasilishwa tarehe 31 Mei 1960 (chanzo hichohicho).

Kwa mujibu wa CHM, kwa kuwa kifaa chao kilikuwa cha polepole na hakikujibu mahitaji ya haraka ya mfumo wa simu, Bell Labs haikukiendeleza zaidi; hata hivyo, katika memo ya 1961 Kahng alidokeza uwezekano wa "urahisi wa kutengeneza na uwezekano wa kutumika katika saketi jumuishi" (chanzo hichohicho). Watafiti wa Fairchild na RCA waliona faida hizo: mwaka 1960 Karl Zaininger na Charles Meuller walitengeneza transista ya MOS katika RCA, na C. T. Sah wa Fairchild alijenga tetrodi inayodhibitiwa na MOS (chanzo hichohicho). Vifaa vya MOS viliingia sokoni mwaka 1964: General Microelectronics (GME 1004) na Fairchild (FI 100) zilitoa vifaa vya p-channel kwa mantiki na switching, na RCA ilianzisha transista ya n-channel (3N98) kwa ukuzaji wa ishara (chanzo hichohicho).

## CMOS na kwa nini MOSFET ilishinda

CHM inaeleza kwamba katika karatasi ya mkutano ya 1963, C. T. Sah na Frank Wanlass wa maabara ya utafiti ya Fairchild walionyesha kwamba saketi za mantiki zinazochanganya transista za MOS za p-channel na n-channel katika mpangilio wa ulinganifu wa kukamilishana zilitumia nguvu karibu sifuri katika hali ya kusubiri (standby); Wanlass aliipatia hataza wazo ambalo leo linaitwa CMOS (Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented", [computerhistory.org](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), ilitazamwa 2026-11-06). Kwa mujibu wa CHM, wabunifu walipotumia upunguzaji wa ukubwa kuweka mamia ya maelfu ya transista kwenye chipu, CMOS ilitoa suluhisho bora zaidi la kudhibiti msongamano wa nguvu uliotokana (chanzo hichohicho).

CHM pia inaandika kwamba, kwa sababu ya ukubwa wake mdogo na matumizi yake ya chini ya nguvu ikilinganishwa na vifaa vya bipolar, "zaidi ya asilimia 99 ya chipu ndogo (microchips) zinazozalishwa leo zinatumia transista za MOS" (Computer History Museum, *The Silicon Engine*, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated", [computerhistory.org](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), ilitazamwa 2026-11-06).

**Kwa maoni yetu:** mkondo wa geti ulio karibu sifuri katika hali tulivu ndio hadithi nzima. CMOS ([sura ya 14]({{< relref "14-logic-gates-from-transistors" >}})) inajengwa juu yake ili mkondo wa maana upite hasa *wakati wa kubadilisha hali*, si wakati wa kushikilia hali. BJT hazikutoweka: bado zina maana pale ambapo uwezo wa kusukuma mkondo au ulinganifu wa kianalogi unashinda msongamano. Lakini kwa mantiki ya kidijitali kwa kipimo kikubwa, fizikia ya nguvu ya kusubiri ya MOSFET iliifanya kuwa njia pekee inayowezekana.

**Mlango wa kutokea:** kazi ya D. Kahng na M. M. Atalla ya 1960 kuhusu MOSFET ya silikoni (Bell Labs), pamoja na hataza ya Kahng, U.S. Patent No. 3,102,230, kama inavyoorodheshwa na CHM (Computer History Museum, *The Silicon Engine*, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated", [computerhistory.org](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), ilitazamwa 2026-11-06).

**Iliyotangulia:** [Sura ya 12: Semikondakta kuanzia misingi]({{< relref "12-semiconductors-from-first-principles" >}})
**Inayofuata:** [Sura ya 14: Milango ya mantiki kutoka kwa transista]({{< relref "14-logic-gates-from-transistors" >}})

## Vyanzo

- HyperPhysics (Georgia State University), "The Junction Transistor": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/trans.html>
- HyperPhysics (Georgia State University), "MOSFET": <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/mosfet.html>
- Computer History Museum, *The Silicon Engine*, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated": <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
- Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented": <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
