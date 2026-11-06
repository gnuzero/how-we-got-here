---
title: "ट्रांज़िस्टर को क्यों होना ही था"
weight: 11
date: 2026-11-06
draft: false
phase: "1 — नींव: यांत्रिक से निर्वात-नली कम्प्यूटिंग तक"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "आकार, शक्ति, विश्वसनीयता — तीन नली-छतें जिन्होंने ठोस-अवस्था स्विचिंग अपरिहार्य बनाई"
---

1950 के दशक की शुरुआत तक निर्वात नली अवधारणा सिद्ध कर चुकी थी: इलेक्ट्रॉनिक स्विचिंग, बिना चलते भागों के। जो वह हल नहीं कर सकी वह *पैमाना* था। हर अतिरिक्त नली ऊष्मा, अधिक शक्ति-खपत, और विफलता का एक और मौका जोड़ती थी। ट्रांज़िस्टर ने नली इसलिए नहीं बदली कि वह सुन्दर गैजेट था — उसने बदली क्योंकि नली की अपनी भौतिकी की कठोर छत थी, और गणना को उससे पार जाना था।

## तीन बाधाएँ, एक अड़चन

**आकार।** निर्वात नली को इतना बड़ा निर्वातित काँच-आवरण चाहिए कि कैथोड, ग्रिड और ऐनोड अलग रह सकें, और निर्वात टिके। उसे कितना छोटा किया जा सकता है, इसकी एक फर्श है। ट्रांज़िस्टर ठोस-अवस्था है — न निर्वात, न काँच-आवरण — और उसका आकार निर्माण-परिशुद्धता से तय होता है, निर्वातित कक्ष की भौतिकी से नहीं। ([Computer History Museum, Silicon Engine — point-contact transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/))

***इस पुस्तक का तर्क (व्याख्या):*** वह एक अलग स्केलिंग वक्र है — वही जो आगे एकल डाइ पर विशाल संख्या में स्विच बैठाने की अनुमति देता है (Phase 8)। इस व्याख्या में कोई संख्या नहीं।

**शक्ति।** नली के कैथोड को थर्मिऑनिक उत्सर्जन के लिए गर्म रखना पड़ता है — वह हीटर तब भी धारा लेता है जब नली स्विच नहीं कर रही। हज़ारों नलियों पर गुणा करो तो ENIAC जैसा औद्योगिक खिंचाव मिलता है — Smithsonian लगभग **140 किलोवाट** दर्ज करता है, लगभग **18,000** नलियों के साथ। ([Smithsonian / NMAH](https://www.si.edu/object/nmah_334742)) ट्रांज़िस्टर में हीटर-फिलामेंट नहीं; वह depletion क्षेत्र या चैनल को मॉड्यूलेट करके स्विच करता है। ([CHM, Inventing the Transistor](https://www.computerhistory.org/revolution/story/273))

***इस पुस्तक का तर्क (व्याख्या):*** हीटर-रहित स्विचिंग ही वह सबसे बड़ा कारण है कि ट्रांज़िस्टरीकृत यन्त्र पिघले बिना कहीं सघन हो सके।

**विश्वसनीयता।** नलियाँ फिलामेंट-ज्वलन और सील-क्षय से विफल होती हैं — सामान्य ऊष्मीय चक्र में पका हुआ घिसाव। ठोस-अवस्था ट्रांज़िस्टर में वह फिलामेंट और निर्वात-सील नहीं। ([CHM Silicon Engine](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/))

***इस पुस्तक का तर्क (व्याख्या):*** आरम्भिक ट्रांज़िस्टरों की अपनी समस्याएँ थीं (पैकेजिंग, संदूषण), पर विफलता की *विधि* रोजमर्रा के संचालन में वैसे नहीं पकी जैसी फिलामेंट-ज्वलन नलियों के लिए थी। दस नलियाँ सँभालना सम्भव; लगभग अठारह हज़ार (ENIAC, स्रोत ऊपर) रखरखाव का दुःस्वप्न। ठोस-अवस्था में वही तार्किक स्विच अलग भौतिक छत पर बैठता है।

## आगे क्या आता है

Computer History Museum लिखता है कि **दिसम्बर 1947** में John Bardeen और Walter Brattain ने Bell Labs में जर्मेनियम point-contact युक्ति पर ट्रांज़िस्टर-क्रिया प्राप्त की; **16 दिसम्बर** को सफल सेमीकंडक्टर प्रवर्धक, **23 दिसम्बर** को प्रयोगशाला अधिकारियों के सामने प्रदर्शन; William Shockley ने शीघ्र junction रूप पर काम किया; सार्वजनिक घोषणा **30 जून 1948**। ([CHM Silicon Engine](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/); [CHM TDIH, 23 December](https://www.computerhistory.org/tdih/december/23/))

***इस पुस्तक का तर्क (व्याख्या):*** युक्ति का आना समाप्त होना नहीं है। *कैसे* वह स्विच करता है — सेमीकंडक्टर, डोपिंग, बैंड गैप — समझना और अभियन्त्रित करना अभी बाकी था। वह «क्यों होना ही था» से अलग विषय है। Phase 2 वहीं से शुरू होता है।

**बाहर का द्वार:** Bardeen, Brattain, और Shockley के Bell Labs ट्रांज़िस्टर पेपर (देर 1940 / आरम्भ 1950) — ठोस-अवस्था स्विच का प्राथमिक भौतिकी।

**अगला:** [सेमीकंडक्टर: प्रथम सिद्धान्तों से]({{< relref "12-semiconductors-from-first-principles.md" >}})

## स्रोत

- Computer History Museum, "1947: Invention of the Point-Contact Transistor": <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
- Computer History Museum, This Day in History — 23 December: <https://www.computerhistory.org/tdih/december/23/>
- Computer History Museum, Inventing the Transistor: <https://www.computerhistory.org/revolution/story/273>
- Smithsonian / NMAH ENIAC (power / tube count cross-ref): <https://www.si.edu/object/nmah_334742>
