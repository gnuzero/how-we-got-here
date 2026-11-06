---
title: "ट्रांज़िस्टर: BJT से MOSFET तक"
weight: 13
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "धारा-नियन्त्रित BJT ने निष्क्रिय शक्ति जलाई; वोल्टेज-नियन्त्रित MOSFET ने घनता सम्भव बनाई"
---

दो युक्ति-परिवारों को «ट्रांज़िस्टर» कहा जाता है। वे अलग भौतिकी पर स्विच करते हैं — और उनमें से केवल एक आधुनिक डाइ पर विशाल संख्या तक स्केल होता है।

## BJT: धारा धारा को नियन्त्रित करती है

Britannica लिखती है कि द्विध्रुवी (bipolar) ट्रांज़िस्टर चालन के लिए **holes और electrons दोनों** का उपयोग करते हैं; क्षेत्रों के नाम emitter, base, collector हैं; वे FET से तेज़ हो सकते हैं पर **अधिक धारा** खाते हैं — उच्च-गति अनुप्रयोगों (जैसे RF IC) के लिए उपयुक्त। ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) संकेत base पर लगता है और emitter–collector के बीच धारा को प्रभावित करता है।

***इस पुस्तक का तर्क (व्याख्या):*** चालू रखने के लिए base धारा लगातार आपूर्ति करनी पड़ती है। चिप-पैमाने पर वह निष्क्रिय लागत जुड़ती है — द्विध्रुवी लॉजिक परिवार स्थैतिक ऊष्मीय दीवार से टकरा सकते हैं, भले गेट स्विच न कर रहे हों। (कोई दशक यहाँ नहीं — CHM/IEEE स्रोत नहीं मिला; व्याख्या गुणात्मक। संख्या नहीं।)

## MOSFET: वोल्टेज एक चैनल को नियन्त्रित करता है

Computer History Museum लिखता है कि **1959** में Bell Labs के M. M. (John) Atalla और Dawon Kahng ने पहला सफल insulated-gate field-effect transistor प्राप्त किया — ऊष्मीय रूप से उगाई सिलिकॉन-डाइऑक्साइड परतों से «surface states» घटाकर; संरचना metal (M — गेट) / oxide (O — इन्सुलेशन) / silicon (S) → **MOSFET**। **1960** Solid-State Device Research Conference में व्यावहारिक MOS FET प्रकट हुई; CHM नोट करता है कि छोटे आकार और द्विध्रुवी युक्तियों से कम शक्ति-खपत के कारण आज **99 प्रतिशत से अधिक** माइक्रोचिप MOS ट्रांज़िस्टर उपयोग करते हैं। ([CHM Silicon Engine — MOS transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

Britannica: आधुनिक स्विचिंग में leads को अक्सर source, drain, gate कहा जाता है; गेट पर वोल्टेज तय करता है कि source से drain धारा बहे या नहीं — चालू/बन्द, डिजिटल 1/0। ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

***इस पुस्तक का तर्क (व्याख्या):*** गेट ऑक्साइड DC धारा को रोकता है; क्षेत्र source–drain के बीच चालक चैनल बनाता या हटाता है। NMOS में धनात्मक गेट-वोल्टेज P-प्रकार बॉडी में इलेक्ट्रॉनों को inversion परत में खींचता है। गेट धारिता चार्ज होने के बाद युक्ति को चालू रखने की स्थैतिक लागत लगभग शून्य — BJT की निरन्तर base धारा का उल्टा। (संख्या नहीं।)

## डिजिटल लॉजिक के लिए MOSFET क्यों जीता

CHM का «छोटा आकार, कम शक्ति» और Britannica का «गेट-वोल्टेज से स्विच» एक ही कहानी की ओर इशारा करते हैं।

***इस पुस्तक का तर्क (व्याख्या):*** लगभग-शून्य स्थैतिक गेट-धारा पूरी कथा है। CMOS (आगे) उसी पर टिकता है ताकि अर्थपूर्ण धारा मुख्यतः *स्विचिंग के दौरान* बहे, अवस्था धारण करते समय नहीं — वही भौतिकी जिसने गम्भीर पैमाने पर डिजिटल लॉजिक को सम्भव बनाया। BJT गायब नहीं हुए: जहाँ धारा-ड्राइव या एनालॉग रैखिकता घनता से भारी पड़े। गम्भीर-पैमाने डिजिटल लॉजिक के लिए MOSFET की निष्क्रिय-शक्ति भौतिकी ही व्यवहार्य मार्ग रही — और अगले अध्याय का हर गेट उसी से बना है।

**बाहर का द्वार:** D. Kahng और M. M. Atalla का 1960 सिलिकॉन MOSFET कार्य (Bell Labs; Solid-State Device Research Conference) — व्यावहारिक field-effect युक्ति जिसने ऑक्साइड-गेटेड वोल्टेज नियन्त्रण को डिजिटल मानक बनाया। ([CHM](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

**अगला:** [ट्रांज़िस्टरों से लॉजिक गेट]({{< relref "14-logic-gates-from-transistors.md" >}})

## स्रोत

- Encyclopaedia Britannica, "transistor": <https://www.britannica.com/technology/transistor>
- Computer History Museum, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated": <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
