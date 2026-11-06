---
title: "Mashine za Babbage"
weight: 5
date: 2026-11-06
draft: false
phase: "1 — Misingi: kutoka kompyuta za kimakanika hadi vali za utupu"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Difference Engine na Analytical Engine: ghala, kinu, na programu juu ya kadi"
---

Ukokotoaji haukuanza na umeme. Ulianza na gia.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 ya Charles Babbage katika Science Museum, London" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London). Picha: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

## Tatizo: majedwali yenye makosa

Kwa mujibu wa Science Museum, Babbage alichoshwa na makosa mengi katika majedwali ya hisabati yaliyochapishwa; makosa yalitokea katika kukokotoa, kunakili, kupanga chapa na kuchapisha, na Babbage mwenyewe alidai kwamba makosa hayo yaliigharimu serikali pauni milioni 2–3 na kusababisha meli kukwama (Science Museum, "Charles Babbage's Difference Engines and the Science Museum", [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), ilitazamwa 2026-11-06).

## Difference Engine

Babbage alitangaza uvumbuzi wa Difference Engine, mashine yake ya kwanza ya kukokotoa, katika makala iliyosomwa kwenye Royal Astronomical Society tarehe 14 Juni 1822 (chanzo hichohicho). Makumbusho ya Historia ya Kompyuta (Computer History Museum) yanaeleza kwamba mashine hizi zinaitwa hivyo kwa sababu ya kanuni ya hisabati zinayoitegemea, yaani mbinu ya tofauti zenye kikomo (finite differences); uzuri wa mbinu hiyo ni kwamba inatumia kujumlisha tu, bila haja ya kuzidisha na kugawanya, ambavyo ni vigumu zaidi kutekeleza kwa mashine (Computer History Museum, "The Engines", [computerhistory.org](https://www.computerhistory.org/babbage/engines/), ilitazamwa 2026-11-06). Difference Engine ni kikokotoo tu: inakokotoa kwa kujumlisha mara kwa mara, na haiwezi kutumika kwa hesabu za jumla (chanzo hichohicho). Science Museum inaongeza kwamba mashine hiyo iliundwa kwa sehemu za kimakanika peke yake, kama magurudumu ya gia ya shaba na fimbo, na kwamba haikukusudiwa kufanya hesabu za kila siku bali kukokotoa mfululizo wa thamani na kuchapisha matokeo yenyewe (Science Museum, "Charles Babbage's Difference Engines and the Science Museum", [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), ilitazamwa 2026-11-06).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Mikono ya kubeba tarakimu kati ya safu za Difference Engine No. 2" loading="lazy" width="1280">
<figcaption>Mikono ya kubeba (carry) kati ya safu za tarakimu kwenye Difference Engine No. 2, nakala ya pili (Computer History Museum). Picha: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Kwa maoni yetu:** kila safu ya magurudumu ni tarakimu moja, na "kubeba moja" ni tukio la kimwili: jino la gia linanasa na kuzungusha gurudumu jirani.

**Jaribu sasa.** Anza maabara kwa Y=9, Δ₁=7. Gurudumu la mamoja linapita 9; jino linanasa la makumi. 9+7 inakuwa 16. Hivyo ndivyo tofauti zenye kikomo zinavyokokotoa x², mbinu ambayo mashine ilijengwa kwa ajili yake.

{{< lab type="difference-engine" height="720" >}}

Maabara hii imeandaliwa kwa ajili ya kitabu hiki, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Ni mfano wa kufundishia wa safu, si nakala kamili ya No. 2.

Kwa mujibu wa CHM, muundo wa 1830 ulionyesha mashine inayokokotoa kwa tarakimu kumi na sita na daraja sita za tofauti, ikihitaji sehemu zipatazo 25,000; kama ingejengwa, ingekuwa na uzito wa takriban tani nne na urefu wa futi nane hivi (Computer History Museum, "The Engines", [computerhistory.org](https://www.computerhistory.org/babbage/engines/), ilitazamwa 2026-11-06). Sehemu ya mashine yenye vipande takriban 2,000, sawa na moja ya saba ya muundo kamili, ilijengwa na mhandisi wake na fundi stadi wa zana Joseph Clement na kukamilika mwaka 1832 (Science Museum, "Charles Babbage's Difference Engines and the Science Museum", [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), ilitazamwa 2026-11-06). Ujenzi ulisimamishwa mwaka 1833 baada ya mzozo kati ya Babbage na Clement, na mashine hiyo haikujengwa kamwe (Computer History Museum, "A Brief History", [computerhistory.org](https://www.computerhistory.org/babbage/history/), ilitazamwa 2026-11-06; Science Museum, chanzo kilichotajwa). Kufikia wakati bili za mwisho zinalipwa, Hazina ya Uingereza ilikuwa imetumia pauni 17,500 (Science Museum, "Charles Babbage's Difference Engines and the Science Museum", [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), ilitazamwa 2026-11-06), na ufadhili wa serikali ulikatwa kabisa mwaka 1842 (Computer History Museum, "The Engines", [computerhistory.org](https://www.computerhistory.org/babbage/engines/), ilitazamwa 2026-11-06).

**Hoja ya kitabu hiki ni kwamba** Babbage hakuwahi kukamilisha Difference Engine kamili kwa sababu mbili: ufadhili ulimpinga, na vivyo hivyo viwango vya usahihi wa utengenezaji (tolerances) vya zama zile. Kila tarakimu ya ziada ya usahihi ilimaanisha nafasi nyingine kwa msuguano, ulegevu wa gia (backlash) na makosa madogo yanayojilimbikiza kuharibu matokeo.

## Analytical Engine

CHM inaeleza kwamba ujenzi ulipokwama, Babbage alibuni mwaka 1834 mashine yenye malengo makubwa zaidi, iliyokuja kuitwa Analytical Engine: mashine ya kukokotoa ya matumizi ya jumla inayoweza kupangiwa programu (Computer History Museum, "The Engines", [computerhistory.org](https://www.computerhistory.org/babbage/engines/), ilitazamwa 2026-11-06). Ilipangiwa programu kwa kadi zilizotobolewa, wazo lililochukuliwa kutoka kwenye kitanzi cha Jacquard kilichotumika kufuma mapambo tata kwenye nguo; ilikuwa na "Ghala" (Store) la kuhifadhi namba na matokeo ya kati, na "Kinu" (Mill) tofauti ambamo hesabu zilifanyika (chanzo hichohicho). Science Museum inaongeza kwamba kutenganishwa kwa ghala na kinu ni sifa ya msingi ya mpangilio wa ndani wa kompyuta za kisasa, kwamba ni sehemu tu ya mashine iliyokamilika kama kipande cha majaribio kabla ya kifo cha Babbage mwaka 1871, na kwamba ingawa alibuni matoleo kadhaa, ufadhili haukupatikana kamwe (Science Museum, "Charles Babbage's Difference Engines and the Science Museum", [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), ilitazamwa 2026-11-06).

**Kwa maoni yetu:** ghala ni kumbukumbu (memory), kinu ni kitengo cha hesabu; kwa hiyo Analytical Engine ndiye babu halisi wa kompyuta ya leo.

Kiigaji kilicho hapa chini ni Analytical Engine ya Fourmilab, iliyotengenezwa na John Walker. Endesha kadi hatua kwa hatua na utazame safu za kinu na ghala zikibadilika. Ni mali ya umma (public domain); tunahifadhi nakala na kutunza kiungo cha asili.

{{< lab type="analytical-engine" height="780" >}}

Asili: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [zipu ya msimbo](https://www.fourmilab.ch/babbage/release/aemsource.zip) (public domain).

Wazo hilo lililoazimwa ndilo kituo chetu kinachofuata: kitanzi cha Jacquard, na kutenganishwa kwa programu na mashine.

**Iliyotangulia:** [Sura ya 4: Hiki ni kitu gani?]({{< relref "04-what-is-this-thing" >}})
**Inayofuata:** [Sura ya 6: Kitanzi cha Jacquard]({{< relref "06-jacquard-loom" >}})

## Vyanzo

- Science Museum, "Charles Babbage's Difference Engines and the Science Museum": <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Computer History Museum, "A Brief History": <https://www.computerhistory.org/babbage/history/>
- Computer History Museum, "The Engines": <https://www.computerhistory.org/babbage/engines/>
- Picha: Wikimedia Commons (Marcin Wichary; Jitze Couperus), CC BY 2.0, kama ilivyoandikwa chini ya kila picha.
- Kiigaji: Fourmilab / John Walker (public domain).
