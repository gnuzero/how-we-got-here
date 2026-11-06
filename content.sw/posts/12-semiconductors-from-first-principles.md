---
title: "Semikondakta kuanzia misingi"
weight: 12
date: 2026-11-06
draft: false
phase: "2 — Fizikia na vifaa"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "Silikoni si ya kichawi: muundo wa bendi zake unakaa mahali ambapo upitishaji wa umeme unaweza kudhibitiwa"
---

**Kwa maoni yetu:** silikoni si ya pekee kwa sababu ya uchawi; ni ya pekee kwa sababu muundo wa bendi zake za nishati unakaa mahali ambapo unaweza *kudhibiti* upitishaji wa umeme, badala ya kuishi nao ukiwa umewashwa daima au umezimwa daima.

**Kuhusu maneno:** katika kitabu hiki tunatumia **semikondakta** (kutoka Kiingereza *semiconductor*) kwa kitu ambacho uwezo wake wa kupitisha umeme uko kati ya ule wa kipitishi (kama metali) na kihami (kama kioo). Tunatumia pia: **bendi ya valensi** (valence band), **bendi ya upitishaji** (conduction band), **pengo la bendi** (band gap), **kuongeza uchafu** au **doping**, **shimo** (hole), na **kiunganishi cha p-n** (p-n junction), kama katika [sura ya 11]({{< relref "11-why-the-transistor-had-to-happen" >}}).

## Kwa nini pengo linalovukika ni muhimu

HyperPhysics ya Chuo Kikuu cha Georgia State inaeleza kwamba katika vitu vigumu, nishati zinazopatikana kwa elektroni hazipo kama viwango vilivyotengana kama katika atomu huru, bali zinaunda bendi; jambo la msingi kwa upitishaji ni kama kuna elektroni kwenye bendi ya upitishaji (HyperPhysics, Georgia State University, "Band Theory of Solids", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/band.html), ilitazamwa 2026-11-06). Katika vihami, elektroni za bendi ya valensi zimetenganishwa na bendi ya upitishaji kwa pengo kubwa; katika vipitishi kama metali, bendi ya valensi inaingiliana na bendi ya upitishaji; na katika semikondakta pengo kati ya bendi hizo mbili ni dogo kiasi kwamba msisimko wa joto au wa aina nyingine unaweza kulivuka (chanzo hichohicho). Kwa pengo dogo hivyo, kiasi kidogo cha kitu cha doping kinaweza kuongeza upitishaji kwa kiasi kikubwa (chanzo hichohicho). Kwa semikondakta safi kama silikoni na germanium, hakuna upitishaji kwenye 0 K, lakini kwa joto la juu zaidi idadi fulani ya elektroni inaweza kufika bendi ya upitishaji na kutoa mkondo kidogo (chanzo hichohicho).

Jedwali la HyperPhysics la mapengo ya bendi linatoa kwa joto la 300 K pengo la **1.11 eV** kwa silikoni na **0.66 eV** kwa germanium (na 1.17 eV na 0.74 eV kwenye 0 K), kwa data kutoka Kittel, *Introduction to Solid State Physics* (HyperPhysics, Georgia State University, "Semiconductor Band Gaps", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html), ilitazamwa 2026-11-06).

**Kwa maoni yetu:** hiyo ndiyo sifa ambayo transista inahitaji: pengo dogo kiasi kwamba uga wa umeme wa wastani, au joto kidogo au mwanga, unaweza kuweka vibebaji mahali vinapopitisha umeme, lakini kubwa kiasi kwamba kwenye joto la kawaida kitu hakijajaa vibebaji tayari. Kizuizi cha vali katika sura ya 11, yaani ukubwa, nguvu na kutegemewa, kinaanza kutatuliwa hapa, katika kitu kigumu unachoweza kukiongezea uchafu na kukidhibiti kwa uga.

## Kwa nini silikoni ilishinda germanium

Computer History Museum inaeleza kwamba katika miaka sita ya kwanza ya uhai wake, transista zote zilitengenezwa kwa germanium; ingawa germanium ni rahisi zaidi kufanyia kazi na inaruhusu masafa ya juu zaidi, vifaa vyake vina uvujaji mbaya zaidi wa mkondo katika hali ya "kuzimwa", jambo baya kwa mantiki ya kompyuta, na vilifanya kazi kati ya 0 na 70°C tu (Computer History Museum, *The Silicon Engine*, "1954: Silicon Transistors Offer Superior Operating Characteristics", [computerhistory.org](https://www.computerhistory.org/siliconengine/silicon-transistors-offer-superior-operating-characteristics/), ilitazamwa 2026-11-06). Vifaa vya silikoni vinavyofanya kazi kati ya −55 na 125°C viliwezekana baada ya Dupont kuanza kusambaza silikoni safi sana ya "kiwango cha semikondakta" (chanzo hichohicho). Januari 1954 mkemia wa Bell Labs Morris Tanenbaum alitengeneza transista ya kwanza ya silikoni, na timu ya Texas Instruments iliyoongozwa na Willis Adcock ilitengeneza yao ya kwanza iliyofanikiwa tarehe 14 Aprili 1954; Gordon Teal aliitangaza tarehe 10 Mei 1954, na kufikia mwisho wa miaka ya 1950 silikoni ilikuwa nyenzo iliyopendelewa na sekta (chanzo hichohicho).

Sababu ya pili ni oksidi. CHM inaeleza kwamba mwaka 1955 Carl Frosch wa Bell Labs, kwa ajali ya bahati, alifunika uso wa silikoni kwa tabaka la kioo la dioksidi ya silikoni (SiO₂); yeye na fundi wake Lincoln Derick walionyesha jinsi tabaka hilo linavyolinda vipande vya silikoni wakati wa diffusion na jinsi ya kutoboa matundu madogo ndani yake ili kuweka maeneo ya aina ya n na p kwa usahihi (Computer History Museum, *The Silicon Engine*, "1955: Development of Oxide Masking", [computerhistory.org](https://www.computerhistory.org/siliconengine/development-of-oxide-masking/), ilitazamwa 2026-11-06). Tabaka hilo pia ni kihami bora ambacho juu yake viunganishi vya metali huwekwa, na kwa mujibu wa CHM, zaidi ya kigezo kingine chochote, tabaka hili la oksidi limeifanya silikoni kuwa nyenzo kuu kabisa katika utengenezaji wa chipu (chanzo hichohicho).

**Kwa maoni yetu:** pengo pana zaidi la silikoni (1.11 eV dhidi ya 0.66 eV kwenye 300 K, kwa mujibu wa HyperPhysics) linaendana na uwezo wake wa kufanya kazi kwenye joto la juu zaidi, na oksidi yake ndiyo itakayohitajika kwa MOSFET katika sura ya 13.

## Doping: kutoka fuwele hadi swichi

HyperPhysics inaeleza kwamba kuongeza asilimia ndogo ya atomu za kigeni kwenye kimiani cha kawaida cha fuwele ya silikoni au germanium kunaleta mabadiliko makubwa ya sifa zake za umeme, na kuzalisha semikondakta za aina ya n na aina ya p (HyperPhysics, Georgia State University, "The Doping of Semiconductors", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html), ilitazamwa 2026-11-06). Uchafu wenye elektroni 5 za valensi, kama antimoni, arseniki au fosforasi, unachangia elektroni huru na kuzalisha aina ya n; uchafu wenye elektroni 3 za valensi, kama boroni, alumini au galiamu, unaunda upungufu wa elektroni za valensi unaoitwa "mashimo" na kuzalisha aina ya p (chanzo hichohicho). Katika aina ya n kuna viwango vya nishati vya elektroni karibu na juu ya pengo la bendi vinavyoweza kusisimuliwa kwa urahisi hadi bendi ya upitishaji; katika aina ya p, mashimo ya ziada katika pengo yanaruhusu elektroni za bendi ya valensi kusisimuliwa, na kuacha mashimo yanayosogea katika bendi ya valensi (chanzo hichohicho).

Historia inalingana na fizikia hii. CHM inaeleza kwamba tarehe 23 Februari 1940 Russell Ohl wa Bell Labs alijaribu kipande cha silikoni kilichotoa matokeo ya kushangaza; yeye na mwenzake Jack Scaff waligundua kwamba mshono katika kipande hicho ulitenganisha maeneo yenye aina tofauti za uchafu: fosforasi ilitoa ziada kidogo ya elektroni, na boroni upungufu kidogo (baadaye ukaitwa "mashimo") (Computer History Museum, *The Silicon Engine*, "1940: Discovery of the p-n Junction", [computerhistory.org](https://www.computerhistory.org/siliconengine/discovery-of-the-p-n-junction/), ilitazamwa 2026-11-06). Waliyaita maeneo hayo aina ya n (hasi) na aina ya p (chanya), na mpaka kati yao ukajulikana kama "kiunganishi cha p-n"; dhana ya Shockley ya transista ya kiunganishi mwaka 1948 ilitokana na ugunduzi huo wa 1940 (chanzo hichohicho).

## Kiunganishi cha p-n

HyperPhysics inaeleza kwamba vitu vya aina ya p na aina ya n vinapowekwa pamoja, kiunganishi kinatenda tofauti kabisa na kila kimoja peke yake: mkondo unapita kwa urahisi upande mmoja (forward bias) lakini si upande mwingine (reverse bias), na hivyo kuunda diodi ya msingi (HyperPhysics, Georgia State University, "P-N Junction", [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/pnjun.html), ilitazamwa 2026-11-06). Karibu na kiunganishi, elektroni zinasambaa kuvuka na kuungana na mashimo, na kuunda "eneo la upungufu" (depletion region); chaji ya nafasi inayojengeka hapo inazuia uhamisho zaidi wa elektroni isipokuwa ukisaidiwa na volteji ya forward bias, ilhali volteji ya reverse inasukuma elektroni mbali na kiunganishi na kuzuia upitishaji (chanzo hichohicho).

**Kwa maoni yetu:** hakuna kati ya aina hizo mbili peke yake iliyo swichi. Kuziweka pamoja, kiunganishi cha p-n, ndilo tofali la ujenzi wa kila diodi na transista zinazofuata. Sura ya 13 inaendelea hapo: jinsi kiunganishi (au chaneli inayodhibitiwa na geti) inavyogeuza silikoni iliyoongezewa uchafu kuwa kitu ambacho ishara ya nje inaweza kuwasha na kuzima.

**Iliyotangulia:** [Sura ya 11: Kwa nini transista ililazimika kuja]({{< relref "11-why-the-transistor-had-to-happen" >}})
**Inayofuata:** [Sura ya 13: Transista: kutoka BJT hadi MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}})

## Vyanzo

- HyperPhysics (Georgia State University), "Band Theory of Solids": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/band.html>
- HyperPhysics (Georgia State University), "Semiconductor Band Gaps": <http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html>
- HyperPhysics (Georgia State University), "The Doping of Semiconductors": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html>
- HyperPhysics (Georgia State University), "P-N Junction": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/pnjun.html>
- Computer History Museum, *The Silicon Engine*, "1940: Discovery of the p-n Junction": <https://www.computerhistory.org/siliconengine/discovery-of-the-p-n-junction/>
- Computer History Museum, *The Silicon Engine*, "1954: Silicon Transistors Offer Superior Operating Characteristics": <https://www.computerhistory.org/siliconengine/silicon-transistors-offer-superior-operating-characteristics/>
- Computer History Museum, *The Silicon Engine*, "1955: Development of Oxide Masking": <https://www.computerhistory.org/siliconengine/development-of-oxide-masking/>
