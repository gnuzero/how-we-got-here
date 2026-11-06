---
title: "अनुक्रमिक लॉजिक"
weight: 16
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "फीडबैक द्विस्थिर स्मृति बनाता है; एज-ट्रिगर्ड फ्लिप-फ्लॉप सिंक्रोनस डिज़ाइन सुलभ बनाते हैं — जब तक setup/hold घड़ी की छत न बाँध दे"
labs: ["breadboard"]
---

संयोजनात्मक लॉजिक (पूर्व अध्याय) वर्तमान इनपुट का शुद्ध फलन है — अतीत की स्मृति नहीं। कम्प्यूटर को *अवस्था* चाहिए: रजिस्टर, प्रोग्राम काउन्टर, चक्रों के पार बनी रहने वाली स्मृति। उसके लिए फीडबैक चाहिए।

## फीडबैक से स्मृति

***इस पुस्तक का तर्क (व्याख्या):*** दो NOR (या NAND) गेटों को क्रॉस-कपल करो — प्रत्येक आउटपुट दूसरे के इनपुट को खिलाए — और दो स्थिर अवस्थाएँ मिलती हैं। परिपथ वहीं बैठता है जहाँ तुमने आखिरी बार धकेला, जब तक बिजली चालू। वही भौतिक अर्थ में स्मृति: द्विस्थिरता, अमूर्त «store» नहीं।

MIT 6.004 D latch बताता है: गेट HIGH होने पर latch खुला — D से Q सूचना बहती है; गेट LOW पर बन्द — «memory mode», गेट के HIGH→LOW संक्रमण पर D जो था वही याद। ([MIT OCW 6.004, C5 annotated slides](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/))

बिना गेट वाला SR latch इनपुट पर हमेशा जीवित रहता है और एक निषिद्ध संयोजन रखता है। सिंक्रोनस डिज़ाइन gated (level-sensitive) latch चाहता है: enable उच्च होने पर *transparent* (आउटपुट डेटा ट्रैक करता है); enable गिरने पर धारण। Transparency तब असुविधाजनक है जब कई तत्व साथ अपडेट हों।

**अभी आज़माओ।** नीचे का लैब अभी भी जीवित गेट है — इनपुट टॉगल करो, आउटपुट *तुरन्त* बदले। वही तत्काल प्रतिक्रिया संयोजनात्मक है। यह अध्याय तब है जब गेटों को अपने में वापस जोड़ो ताकि इनपुट जाने के बाद आउटपुट *धारण* कर सके।

{{< lab type="breadboard" height="700" >}}

## D फ्लिप-फ्लॉप: एज, स्तर नहीं

MIT 6.004: रजिस्टर/फ्लिप-फ्लॉप master–slave latch जोड़ी है; क्लॉक इनवर्ट होकर master के गेट पर जाती है — जब master खुला, slave बन्द, और उल्टा — ताकि D से Q तक सक्रिय पथ एक साथ न हो। ([MIT OCW 6.004 C5](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/))

***इस पुस्तक का तर्क (व्याख्या):*** आउटपुट केवल क्लॉक *एज* पर बदलता है, पूरे high/low फेज पर नहीं। एजों के बीच flop D को नज़रअंदाज़ कर धारण करता है। एज-ट्रिगरिंग सिंक्रोनस डिज़ाइन सुलभ बनाती है: हर flop एक ही एज पर अपडेट — असतत कदम, निरन्तर सिग्नलों की दौड़ नहीं।

## Setup, hold, और घड़ी की छत

MIT 6.004 **dynamic discipline**: D setup समय (G के HIGH→LOW से *पहले* कितनी देर स्थिर) और hold समय (*बाद* कितनी देर) — दोनों पूरे होने पर latch सही काम करता है। ([MIT OCW 6.004 C5](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/)) रजिस्टर-से-रजिस्टर पथ पर घड़ी अवधि इतनी हो कि हर पथ का propagation + अगले रजिस्टर का setup पूरा हो; hold के लिए contamination विलम्ब पर्याप्त रहे। ([MIT OCW 6.004 timing notes](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/79b6a9016bb4e06e46a07b4b00510689_3LQUrpSADx8.pdf))

***इस पुस्तक का तर्क (व्याख्या):*** setup/hold तोड़ो तो flop metastable हो सकता है — अपरिभाषित अवस्था जो देर से या असंगत रूप से नीचे सुलझे। यही कारण कि अधिकतम क्लॉक आवृत्ति की कठोर छत होती है। अवधि में संयोजनात्मक propagation *plus* अगले flop का setup, मार्जिन सहित। [अध्याय 43, The Clock Speed Wall]({{< relref path="43-the-clock-speed-wall.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अभी अंग्रेज़ी में)</span> उसी बाधा पर लौटता है।

**उदाहरण (शिक्षण — ऐतिहासिक दावा नहीं):** एक क्लॉक अवधि में «logic delay + setup» फिट होना चाहिए; hold विफलता तब जब अगला flop का इनपुट एज के तुरन्त बाद बदल जाए इससे पहले कि hold पूरा हो।

## यह क्या खोलता है

***इस पुस्तक का तर्क (व्याख्या):*** एज-ट्रिगर्ड flop रजिस्टर, काउन्टर, स्टेट मशीन बनते हैं — और Phase 3 में प्रोग्राम काउन्टर व पाइपलाइन रजिस्टर जो CPU को *अनुक्रमिक* यन्त्र बनाते हैं। अगला: घनता के लिए द्विस्थिर भंडारण का विशेषज्ञीकरण — जहाँ SRAM और DRAM अलग होते हैं।

**अगला:** [स्मृति पदानुक्रम शुरू होता है]({{< relref "17-the-memory-hierarchy-begins.md" >}})

## स्रोत

- MIT OpenCourseWare, 6.004 Computation Structures (2017), C5 annotated slides (latch, master–slave, setup/hold): <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/>
- MIT OCW 6.004 timing transcript/PDF: <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/79b6a9016bb4e06e46a07b4b00510689_3LQUrpSADx8.pdf>
