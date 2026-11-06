---
title: "सेमीकंडक्टर: प्रथम सिद्धान्तों से"
weight: 12
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "एक बैंड गैप जिसे दोनों ओर धकेला जा सके — डोपिंग सिलिकॉन को नियंत्रण-योग्य स्विच बनाती है"
---

सिलिकॉन जादुई इसलिए नहीं है — इसलिए विशेष है कि उसकी बैंड संरचना वहाँ बैठती है जहाँ चालन को *नियन्त्रित* किया जा सके, हमेशा चालू या हमेशा बन्द के साथ जीने के बजाय।

## जो गैप पार किया जा सके, वह क्यों मायने रखता है

Britannica लिखती है कि ठोस पदार्थों को प्रायः इन्सुलेटर, सेमीकंडक्टर और कण्डक्टर में बाँटा जाता है; सेमीकंडक्टर की चालकता इनके बीच है और तापमान, प्रकाश, चुम्बकीय क्षेत्र तथा अल्प अशुद्धि-परमाणुओं के प्रति संवेदनशील है। क्रिस्टल में ऊर्जा बैंड बनते हैं: उच्चतम भरा बैंड **valence band**, अगला **conduction band**, और उनके बीच **bandgap** — ऊर्जाएँ जो इलेक्ट्रॉन धारण नहीं कर सकते। धातु/कण्डक्टर में गैप नहीं (इलेक्ट्रॉन स्वतंत्र); इन्सुलेटर में चौड़ा गैप; महत्वपूर्ण सेमीकंडक्टर प्रायः लगभग 0.25–2.5 eV। ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor)) **बैंडगैप संख्याएँ (300 K):** HyperPhysics (Georgia State; Kittel 6th ed. से तालिका) **Si 1.11 eV**, **Ge 0.66 eV** देती है — दोनों एक ही स्रोत से; Britannica का Si **1.12 eV** यहाँ नहीं मिलाया। ([HyperPhysics, Semiconductor Band Gaps](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html))

***इस पुस्तक का तर्क (व्याख्या):*** सेमीकंडक्टर गैप इतना छोटा है कि साधारण क्षेत्र (या ऊष्मा/प्रकाश) वाहकों को चालन में ला सके, और इतना बड़ा कि कमरे के तापमान पर पदार्थ पहले से वाहकों से नहीं भरा हो। वही «दोनों ओर धकेलने योग्य» गुण ट्रांज़िस्टर को चाहिए। नली की छत आकार/शक्ति/विश्वसनीयता थी; हल यहाँ ठोस में डोप और क्षेत्र-नियन्त्रण से शुरू होता है। (इस व्याख्या में कोई संख्या नहीं।)

## जर्मेनियम पर सिलिकॉन क्यों जीता

जर्मेनियम प्रथम व्यावहारिक ट्रांज़िस्टर-पदार्थ था — Bell Labs, **1947**, Bardeen और Brattain का point-contact युक्ति। ([Computer History Museum, Silicon Engine](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)) HyperPhysics की 300 K तालिका में Ge का गैप (**0.66 eV**) Si (**1.11 eV**) से छोटा है — छोटा गैप ऊष्मीय वाहकों को आसान बनाता है। ([HyperPhysics Semgap](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html)) Britannica लिखती है कि **1950 के दशक की शुरुआत** में जर्मेनियम प्रमुख सेमीकंडक्टर था, पर ऊँचे तापमान पर उच्च leakage के कारण कई अनुप्रयोगों के लिए अनुपयुक्त सिद्ध हुआ; **1960 के दशक की शुरुआत** से सिलिकॉन लगभग सर्वत्र हो गया — मुख्यतः क्योंकि (1) सिलिकॉन युक्तियों में leakage बहुत कम होती है, और (2) **सिलिकॉन डाइऑक्साइड (SiO₂)** उच्च-गुणवत्ता इन्सुलेटर है जिसे सिलिकॉन-आधारित युक्ति का भाग बनाना आसान है। ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor))

***इस पुस्तक का तर्क (व्याख्या):*** तापमान-हेडरूम, ऑक्साइड-गुणवत्ता, और प्रचुर आपूर्ति — ये तीन बाधाएँ उद्योग को Si पर मानकीकृत करने का कारण हैं, Ge पर नहीं। MOSFET का गेट डाइइलेक्ट्रिक उसी शान्त Si/SiO₂ इंटरफ़ेस पर टिकता है (आगे के अध्याय)।

## डोपिंग: क्रिस्टल से स्विच तक

Intrinsic सिलिकॉन कमरे के तापमान पर कमज़ोर और एकसमान चालन देता है। अशुद्धियाँ (प्रायः लगभग प्रति दस लाख होस्ट परमाणुओं में एक भाग — Britannica) जानबूझकर जोड़कर **extrinsic** सेमीकंडक्टर बनाया जाता है — **डोपिंग**। यदि सिलिकॉन परमाणु के स्थान पर पाँच बाह्य इलेक्ट्रॉनों वाला परमाणु आए — Britannica उदाहरण: **आर्सेनिक** — चार सहसंयोजक बन्ध बनते हैं; पाँचवाँ चालन-इलेक्ट्रॉन conduction band को दान होता है → **n-type**; आर्सेनिक **donor**। यदि तीन बाह्य इलेक्ट्रॉनों वाला परमाणु आए — Britannica उदाहरण: **बोरॉन** — एक अतिरिक्त इलेक्ट्रॉन बन्ध पूरा करने के लिए स्वीकार होता है और valence band में धनात्मक **hole** बनता है → **p-type**; बोरॉन **acceptor**। ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor))

***नोट (EN से भेद):*** अंग्रेज़ी अध्याय n-type उदाहरण में **फॉस्फोरस** लिखता है; Britannica का उदाहरण **आर्सेनिक** है। दोनों पञ्चसंयोजी (group V) donor हैं; हम यहाँ Britannica का उदाहरण रखते हैं, फॉस्फोरस का दावा बिना स्रोत के नहीं जोड़ते।

अकेला n या p स्विच नहीं। दोनों को मिलाकर — **P-N junction** — आगे की हर डायोड और ट्रांज़िस्टर की ईंट है। अगला अध्याय वहीं से उठता है: जंक्शन (या गेट-नियन्त्रित चैनल) डोप किए सिलिकॉन को बाहरी संकेत से चालू/बन्द कैसे बनाता है।

**अगला:** [ट्रांज़िस्टर: BJT से MOSFET तक]({{< relref "13-the-transistor-bjt-to-mosfet.md" >}})

## स्रोत

- Encyclopaedia Britannica, "semiconductor": <https://www.britannica.com/science/semiconductor>
- HyperPhysics (Georgia State), Semiconductor Band Gaps (Si/Ge at 300 K): <http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html>
- Computer History Museum, "1947: Invention of the Point-Contact Transistor": <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
