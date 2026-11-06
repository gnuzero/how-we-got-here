---
title: "Babbage के इंजन"
weight: 5
date: 2026-11-06
draft: false
phase: "1 — नींव: यांत्रिक से निर्वात-नली कम्प्यूटिंग तक"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Difference Engine और Analytical Engine — store, mill, और कार्डों पर प्रोग्राम"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

कम्प्यूटिंग बिजली से नहीं शुरू हुई। यह गियर से शुरू हुई।

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="लंदन Science Museum में Charles Babbage का Difference Engine No. 2" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London)। फोटो: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>।</figcaption>
</figure>

Science Museum के अनुसार Charles Babbage (1791–1871) ने Difference Engine का आविष्कार **14 जून 1822** को Royal Astronomical Society में पढ़े गए पत्र *A note respecting the application of machinery to the calculation of astronomical tables* में घोषित किया। ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Computer History Museum लिखता है कि Difference Engine बहुपद (polynomial) फलनों की गणना और तालिका-निर्माण के लिए थे, और वे **finite differences** (परिमित अंतर) की विधि पर टिके थे — केवल जोड़; यांत्रिक रूप से कठिन गुणन और भाग की ज़रूरत नहीं। ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/)) पूरा काम गियर और स्तंभ-पहियों से होता; बिजली नहीं। हर स्तंभ एक अंक; «1» ले जाना (carry) एक भौतिक घटना थी — दाँत पड़ोसी पहिए को पकड़कर घुमाता।

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Difference Engine No. 2 पर अंक-स्तंभों के बीच carry बाँहें" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2, Serial #2 पर अंक-स्तंभों के बीच carry बाँहें (Computer History Museum)। फोटो: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>।</figcaption>
</figure>

**अभी आज़माओ।** प्रयोगशाला Y=9, Δ₁=7 से चलाओ। इकाई का पहिया 9 पार करता है; एक दाँत दहाई को पकड़ता है। 9+7 = 16। यही finite differences है — x² जैसा काम; वही विधि जिसके लिए इंजन बना।

{{< lab type="difference-engine" height="720" >}}

इस पुस्तक के लिए मूल, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)। शैक्षिक स्तंभ-मॉडल — पूरा No. 2 पुनर्निर्माण नहीं।

Computer History Museum के अनुसार Difference Engine No. 1 का निर्माण **1832** में विवाद के बाद रुक गया, और सरकारी वित्त **1842** में बंद हो गया; Babbage ने जो बड़ा टुकड़ा पूरा किया वह No. 1 का लगभग सातवाँ भाग है — लगभग 2,000 भागों का प्रदर्शन-टुकड़ा, **1832** में जोड़ा। ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/))

***इस पुस्तक का तर्क (व्याख्या):*** उन्होंने पूर्ण-आकार Difference Engine कभी पूरा नहीं किया। वित्त उनके खिलाफ खड़ा रहा; उसी युग की विनिर्माण-सहनशीलता (manufacturing tolerances) भी। सटीकता का हर अतिरिक्त अंक घर्षण, backlash और त्रुटि-जमाव को परिणाम बिगाड़ने का एक और मौका देता था।

उनका अगला कदम, Analytical Engine, आधुनिक कम्प्यूटर का असली पूर्वज है। Computer History Museum कहता है कि **1834** में उन्होंने सामान्य-उद्देश्य प्रोग्राम करने योग्य गणना-इंजन की कल्पना की; उसमें **store** (स्मृति) और अलग **mill** (अंकगणित इकाई) थी, और वह punched cards से प्रोग्राम होता था — Jacquard करघे से उधार ली गई कल्पना। ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/); [Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

नीचे का होस्टेड emulator John Walker का Fourmilab Analytical Engine है। कार्ड आगे बढ़ाओ और mill व store के स्तंभ बदलते देखो। सार्वजनिक डोमेन; हम एक प्रति होस्ट करते हैं और मूल लिंक रखते हैं।

{{< lab type="analytical-engine" height="780" >}}

मूल: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip) (public domain)।

वह उधार अगला पड़ाव है: Jacquard loom, और प्रोग्राम का मशीन से अलग होना।

**अगला:** [Jacquard loom]({{< relref "06-jacquard-loom.md" >}})

## स्रोत

- Computer History Museum, "The Babbage Engine: The Engines": <https://www.computerhistory.org/babbage/engines/>
- Science Museum, "Charles Babbage's Difference Engines and the Science Museum": <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Fourmilab / John Walker, Analytical Engine emulator (public domain): <https://www.fourmilab.ch/babbage/>
