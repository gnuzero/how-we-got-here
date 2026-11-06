---
title: "निर्वात-नली युग"
weight: 10
date: 2026-11-06
draft: false
phase: "1 — नींव: यांत्रिक से निर्वात-नली कम्प्यूटिंग तक"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "नलियों ने चलते भाग हटाए — और वह गति ऊष्मा, शक्ति और विफलता से खरीदी"
---

निर्वात नली की मूल चाल सरल है: छोटी धारा से बड़ी धारा नियंत्रित करो, बिना चलते भागों के। इसी से कम्प्यूटर रिले-आधारित किसी भी चीज़ से कई गुना तेज़ बने — और इसीलिए यह युग ऊष्मा, शक्ति और विफलता-दर से लगातार जूझता रहा।

## ट्रायोड कैसे स्विच करता है

ट्रायोड (triode) में निर्वात में तीन तत्व बन्द होते हैं: गर्म कैथोड जो इलेक्ट्रॉन छोड़ता है (thermionic emission), नियंत्रण ग्रिड, और धनात्मक ऐनोड (plate) जो उन इलेक्ट्रॉनों को खींचता है। ग्रिड बीच में बैठता है। उस पर थोड़ा ऋणात्मक वोल्टेज ऐनोड की धारा को घोटाता — या काटता — है। छोटी ग्रिड-बदलाव, बड़ी ऐनोड-धारा-बदलाव। यही प्रवर्धन (amplification) है; सही टोपोलॉजी में यही स्विच भी है: धारा चालू या बन्द — 1 या 0। ([Britannica, "Electron tube"](https://www.britannica.com/technology/electron-tube))

***इस पुस्तक का तर्क (व्याख्या):*** यहाँ कुछ नहीं हिलता सिवाय इलेक्ट्रॉनों के। इसीलिए नलियाँ रिले से कहीं तेज़ स्विच कर सकीं — यांत्रिक गति हटा दी गई। (कोई संख्या इस व्याख्या में नहीं।)

## ENIAC: तीस टन का स्विचबोर्ड

ENIAC इस युग का मीलका पत्थर है, और भौतिक पैमाना मायने रखता है। Smithsonian National Museum of American History लिखता है कि ENIAC ने **30 × 50** फुट का कमरा भरा, **30 टन** तौला, लगभग **18,000** निर्वात नलियाँ (16 प्रकार), **1,500** रिले, **70,000** प्रतिरोधक और **10,000** संधारित्र इस्तेमाल किए, और लगभग **140 किलोवाट** शक्ति खाई; निर्माण University of Pennsylvania के Moore School में **मई 1943** से **फ़रवरी 1946** तक US Army Ordnance / Ballistics Research Laboratory अनुबन्ध के अधीन हुआ; प्रमुख अभियन्ता J. Presper Eckert और John W. Mauchly। ([Smithsonian / NMAH object record](https://www.si.edu/object/nmah_334742)) Computer History Museum की टाइमलाइन भी लगभग **18,000** निर्वात नलियाँ और **30 टन** दर्ज करती है। ([CHM Timeline, Computers — ENIAC](https://www.computerhistory.org/timeline/computers/))

«पश्चिमी फ़िलाडेल्फ़िया काउँ का मंद पड़ना» लोककथा है; शक्ति-खपत औद्योगिक स्तर की थी — स्रोत ऊपर।

ENIAC को «प्रोग्राम» करना भौतिक पुनर्वायरिंग था: पैच केबल, स्विच फ़ंक्शन-दर-फ़ंक्शन — विशाल स्विचबोर्ड। आधुनिक अर्थ में संचित प्रोग्राम नहीं था; *क्रियाओं का क्रम* केबल-मार्ग में रहता था। नए गणना के लिए पुनर्विन्यास दिनों ले सकता था।

***इस पुस्तक का तर्क (व्याख्या):*** वही दर्द Phase 3 की CPU-वास्तुकला कथा का सीधा पूर्वज है — *संचित* प्रोग्राम, डेटा वाली ही स्मृति में निर्देश, वह हल था जो आरम्भिक ENIAC के पास नहीं था, और जिसने आगे के सामान्य-उद्देश्य यन्त्रों को परिभाषित किया।

**बाहर का द्वार:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine-स्तर का ENIAC इतिहास, लोककथाओं के विरुद्ध उपयोगी।

**और पढ़ें (साक्षात्कार, कोई तथ्य केवल इसी पर नहीं):** Computerworld में J. Presper Eckert का 1989 साक्षात्कार — <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>

## 18,000 नलियाँ क्यों दुःस्वप्न थीं

निर्वात नलियाँ विफल होती हैं: फिलामेंट जलते हैं, सील लीक करते हैं, उत्सर्जन गिरता है। लगभग 18,000 नलियों के साथ (Smithsonian / CHM ऊपर) नियमित रखरखाव अपरिहार्य था। विफलताएँ वास्तविक और महँगी थीं। हर नली वास्तविक ऊष्मा भी छोड़ती है — नलियों से भरे कमरों को गम्भीर शीतलन चाहिए — इसलिए मशीन अपने युग के लिए शक्तिशाली और चलाने में कठोर रूप से महँगी थी।

***इस पुस्तक का तर्क (व्याख्या):*** अगला पद यहीं से जुड़ता है। ट्रांज़िस्टर इसलिए नहीं जीता कि अभियन्ता चतुराई के लिए चतुर थे। वह जीता क्योंकि नली का अपना भौतिकी — ऊष्मा, आकार, और नाज़ुक निर्वात-आवरण — इस मार्ग को कितना आगे बढ़ाया जा सकता है, उसकी कठोर छत बनाता था।

**अगला:** [ट्रांज़िस्टर को क्यों होना ही था]({{< relref "11-why-the-transistor-had-to-happen.md" >}})

## स्रोत

- Britannica, "Electron tube": <https://www.britannica.com/technology/electron-tube>
- Smithsonian / NMAH, ENIAC object record: <https://www.si.edu/object/nmah_334742>
- Computer History Museum, Timeline of Computer History — Computers: <https://www.computerhistory.org/timeline/computers/>
- Computerworld Eckert interview (further reading only): <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>
