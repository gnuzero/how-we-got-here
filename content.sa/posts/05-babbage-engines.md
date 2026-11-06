---
title: "Babbage-स्य यन्त्राणि"
weight: 5
date: 2026-11-06
draft: false
phase: "1 — आधाराः: यान्त्रिकात् निर्वातनलिका-गणनम् यावत्"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Difference Engine च Analytical Engine च — store, mill, पत्रेषु कार्यक्रमः"
---

गणनं विद्युता न आरब्धम्। दन्तचक्रैः आरब्धम्।

> **गभीरायाः सीमा:** यावत् स्रोताः सन्ति तावदेव। व्याख्या पृथक्।

## पारिभाषिकाः (gloss)

| संस्कृतम् | अर्थः |
|---|---|
| **Difference Engine** | परिमित-अन्तरविधिना बहुपदगणनार्थं यान्त्रिकं यन्त्रम् |
| **Analytical Engine** | सामान्योद्देश्यं प्रोग्राम्-योग्यं गणनायन्त्रम् |
| **store / निधिः** | स्मृतिः — अङ्कानां धारणस्थानम् |
| **mill / पेषणी** | अंकगणित-एककम् |
| **finite differences / परिमितान्तरम्** | केवलं योगेन बहुपदगणनस्य विधिः |
| **manufacturing tolerances** | निर्माणस्य सहनसीमाः |

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="London Science Museum मध्ये Babbage Difference Engine No. 2" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London)। छायाचित्रम्: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>।</figcaption>
</figure>

Science Museum अनुसारं Charles Babbage (1791–1871) Difference Engine-स्य घोषणां **14 June 1822** दिने Royal Astronomical Society मध्ये पठिते पत्रे *A note respecting the application of machinery to the calculation of astronomical tables* अकरोत्। ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Computer History Museum लिखति यत् Difference Engine बहुपदफलानां गणनाय तालिका-निर्माणाय च आसन्, **finite differences** विधिना — केवलं योगः; यान्त्रिकतया कठिनं गुणनं भागं च न। ([CHM, "The Engines"](https://www.computerhistory.org/babbage/engines/)) सम्पूर्णं कार्यं दन्तचक्रैः स्तम्भचक्रैश्च; विद्युत् नास्ति। प्रत्येकं स्तम्भम् एकः अङ्कः; «1»-स्य carry भौतिकघटना — दन्तः पार्श्वचक्रं गृह्णाति घूर्णयति च।

{{< lab type="difference-engine" height="720" >}}

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** पूर्णमात्रायां Difference Engine सः कदापि न समापयत्। वित्तं विरुद्धम्; तस्य युगस्य manufacturing tolerances अपि। प्रत्येकः अतिरिक्तः परिशुद्ध्यङ्कः घर्षणाय, backlash-ाय, त्रुटिसञ्चयाय च परिणामं दूषयितुं नूतनं अवसरं ददाति स्म।

अग्रिमः पदः Analytical Engine — आधुनिकगणकस्य वास्तविकपूर्वजः। CHM वदति यत् **1834** तमे सः सामान्योद्देश्यं प्रोग्राम्-योग्यं गणनायन्त्रम् अकल्पयत्; तस्मिन् **store** (स्मृतिः) पृथक् च **mill** (अंकगणित-एककम्); punched cards-तः कार्यक्रमः — Jacquard-करघात् उधारः। ([CHM, "The Engines"](https://www.computerhistory.org/babbage/engines/); [Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

अधः Fourmilab / John Walker Analytical Engine emulator। पत्राणि अग्रे नय; mill-store स्तम्भान् पश्य। सार्वजनिकडोमेन्; वयं प्रतिं होस्ट् कुर्मः मूलशृङ्खलां च रक्षामः।

{{< lab type="analytical-engine" height="780" >}}

मूलम्: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip) (public domain)।

सः उधारः अग्रिमस्थानम्: Jacquard loom, कार्यक्रमस्य यन्त्रात् पृथक्करणम् च।

**अग्रे:** [Jacquard-करघः]({{< relref "06-jacquard-loom.md" >}})

## स्रोताः

- Science Museum: <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Computer History Museum, "The Engines": <https://www.computerhistory.org/babbage/engines/>
- Fourmilab / John Walker (public domain): <https://www.fourmilab.ch/babbage/>
