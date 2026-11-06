---
title: "गेटों से संयोजनात्मक लॉजिक तक"
weight: 15
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "गेटों को योजक और ALU में जोड़ो — फिर carry-ripple विलम्ब जो बेहतर संरचनाएँ मजबूर करता है"
labs: ["breadboard"]
---

एक अकेला गेट लगभग बेकार है। उपयोगी व्यवहार तब शुरू होता है जब उन्हें जोड़ा जाए — और पहली क्लासिक संरचना योजक (adder) है: जहाँ गेट «CPU के अन्दर अंकगणित करने वाली चीज़» बनते हैं।

## हाफ एडर से फुल एडर

MIT 6.004 / Computation Structures सामग्री में फुल एडर के तीन इनपुट (A, B, Ci) और दो आउटपुट (S, Co) हैं; समीकरण: **S = A ⊕ B ⊕ Cin**, **Co = A·B + A·Cin + B·Cin**; S प्रायः दो XOR से; ripple-carry adder पूर्ण-एडर मॉड्यूलों की श्रृंखला। ([MIT OCW 6.004 Lab 2 PDF](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf)) University of Glasgow CS शिक्षण पृष्ठ: दो बिट x, y जोड़ने पर **c = xy**, **s = x ⊕ y** — यही half adder (एक AND + एक XOR)। ([Glasgow DCS, Addition and Subtraction](https://www.dcs.gla.ac.uk/~simon/teaching/CS1Q-students/systems/online/sec8.html))

दो बिट A और B: योग XOR, carry AND — half adder carry-*in* नहीं ले सकता। Full adder A, B, Cin लेता है → Sum और Cout। एक चरण का Cout अगले के Cin में डालो तो चौड़ाई बिट-दर-बिट बढ़ती है।

**अभी आज़माओ।** नीचे का लैब अभी भी AND गेट पर खुलता है — वही half-adder का carry। दोनों इनपुट उच्च करो, आउटपुट उच्च देखो; वही एकल गेट वह बाधा है जो एडर श्रृंखला में ripple करेगी।

{{< lab type="breadboard" height="700" >}}

## Ripple-carry: सरल, इसलिए धीमा

MIT 6.004 लैब ripple-carry को फुल-एडर श्रृंखला पर आधारित बताती है और बाद में उच्च-प्रदर्शन एडर आर्किटेक्चर की ओर इशारा करती है। ([MIT OCW 6.004 Lab 2](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf)) MIT 6.111 व्याख्यान नोट्स फुल एडर के लिए **S = A ⊕ B ⊕ C** और majority-शैली Cout देते हैं। ([MIT 6.111 L08](https://web.mit.edu/6.111/www/f2016/handouts/L08.pdf))

***इस पुस्तक का तर्क (व्याख्या):*** कई फुल एडर पंक्ति में = ripple-carry। अधिक महत्त्वपूर्ण बिट का carry तब तक सही नहीं जब तक कम महत्त्वपूर्ण बिट का settle न हो — carry *ripple* करता है। वही विलम्ब-बाधा carry-lookahead (और सगे) को मजबूर करती है: अधिक गेट, छोटा worst-case पथ। पुस्तक का पैटर्न — भौतिक अड़चन अगली वास्तुकला।

**उदाहरण (ऐतिहासिक दावा नहीं — EN के समान शिक्षण चौड़ाई):** चार फुल एडर पंक्ति में = **4-bit** ripple-carry adder। बिट 3 का carry तब तक सही नहीं जब तक बिट 2 settle न हो, जो बिट 1 पर, जो बिट 0 पर प्रतीक्षा करता है। **4 बिट** पर ठीक; **64 बिट** पर वही श्रृंखला पूरे ALU की घड़ी बाँध सकती है।

## योजकों से सरल ALU

***इस पुस्तक का तर्क (व्याख्या):*** उसी एडर हार्डवेयर के सामने mux: नियंत्रण बिट add, subtract (उल्टा operand + Cin — एडर का पुनः उपयोग), AND, OR चुनें। एक ब्लॉक, कई संयोजनात्मक पथ। वैचारिक रूप से छोटा; व्यावहारिक रूप से पहला क्षण जब «गेट» CPU अंकगणित बनते हैं।

अब तक सब संयोजनात्मक है — आउटपुट केवल वर्तमान इनपुट पर निर्भर। क्रियाओं का क्रम समय के पार बनी रहने वाली अवस्था चाहता है। वह अगला अध्याय है।

**अगला:** [अनुक्रमिक लॉजिक]({{< relref "16-sequential-logic.md" >}})

## स्रोत

- MIT OpenCourseWare, 6.004 Computation Structures, Lab 2 (full adder / ripple-carry): <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf>
- MIT 6.111, Lecture 8 handout (full-adder equations): <https://web.mit.edu/6.111/www/f2016/handouts/L08.pdf>
- University of Glasgow, DCS teaching pages — Addition and Subtraction (half adder): <https://www.dcs.gla.ac.uk/~simon/teaching/CS1Q-students/systems/online/sec8.html>
