---
title: "स्मृति पदानुक्रम शुरू होता है"
weight: 17
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "फ्लिप-फ्लॉप प्रति बिट महँगे — SRAM गति खरीदता है, DRAM घनता; पदानुक्रम वही व्यापार बार-बार"
labs: ["breadboard"]
---

D फ्लिप-फ्लॉप (पूर्व अध्याय) अच्छा स्मृति-तत्व है — और प्रति बिट महँगा: क्लॉकिंग, रीसेट, स्कैन जुड़ने पर कई ट्रांज़िस्टर। कुछ रजिस्टर ठीक; गीगाबाइट मुख्य स्मृति वैसी नहीं। दो सेल डिज़ाइन व्यापार बाँटते हैं: CPU के पास गति के लिए SRAM, बाहर घनता के लिए DRAM।

## SRAM: तेज़, स्थिर, क्षेत्र-भारी

Computer History Museum: SRAM बिट को ट्रांज़िस्टर फ्लिप-फ्लॉप में रखती है और किसी भी बिट तक सीधा पहुँच देती है; प्रति बिट अधिक ट्रांज़िस्टर — शिफ्ट रजिस्टर से तेज़ पर महँगी। DRAM संधारित्र पर आवेश रखती है; प्रति बिट एक ट्रांज़िस्टर तक; घनता अधिक, गति कम, और समय-समय पर refresh आवश्यक। ([CHM Revolution — Semiconductor Memory](https://www.computerhistory.org/revolution/memory-storage/8/311))

***इस पुस्तक का तर्क (व्याख्या):*** Static RAM latch जैसी द्विस्थिर फीडबैक को 6-ट्रांज़िस्टर (6T) सेल में बाँधती है: दो क्रॉस-कपल्ड इन्वर्टर बिट धारण करते हैं; दो access ट्रांज़िस्टर पढ़ते-लिखते हैं। बिजली चालू रहने पर अनिश्चित काल धारण — refresh नहीं। छः ट्रांज़िस्टर प्रति बिट क्षेत्र जलाते हैं, इसलिए SRAM *cache* (Phase 3) बनती है: इतनी छोटी कि लागत स्वीकार्य, इतनी तेज़ कि बिना refresh और non-destructive पढ़ना मायने रखे।

## DRAM: घन, सस्ती, उच्च-रखरखाव

CHM Silicon Engine: IBM शोधकर्ता Robert Dennard का एक-ट्रांज़िस्टर DRAM सेल (U.S. Patent 3,387,286, filed 1967, issued 1968); Mostek ने 16K स्तर पर उसी एक-ट्रांज़िस्टर सेल को अपनाया। ([CHM Silicon Engine — MOS Dynamic RAM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/)) पेटेंट स्वयं field-effect ट्रांज़िस्टर स्मृति का वर्णन करता है। ([U.S. Patent 3,387,286](https://patents.google.com/patent/US3387286))

Dynamic RAM बिट को संधारित्र पर आवेश के रूप में रखती है, एक ट्रांज़िस्टर (1T1C) से gated। छः के बदले एक — घनता की जीत; मुख्य स्मृति इसलिए DRAM। नाम में कीमत: संधारित्र लीक करते हैं। JEDEC DDR SDRAM विनिर्देश: सभी पंक्तियों का refresh किसी भी rolling **64 ms** अन्तराल में आवश्यक। ([JEDEC JESD79F](https://www.jedec.org/sites/default/files/docs/JESD79F.pdf)) Refresh बैंडविड्थ खाता है और memory controller जटिल बनाता है — घनता की कीमत। पढ़ना भी destructive — सूक्ष्म आवेश को sense करना उसे बिगाड़ता है — इसलिए हर पढ़ने के बाद rewrite। SRAM में इनमें से कोई समस्या नहीं।

**बाहर का द्वार:** Robert H. Dennard का एक-ट्रांज़िस्टर DRAM सेल (U.S. Patent 3,387,286, 1968) — वही 1T1C विचार जिसने घनी मुख्य स्मृति व्यावहारिक बनाई। ([CHM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/); [पेटेंट](https://patents.google.com/patent/US3387286))

## यह पदानुक्रम क्या सेट करता है

***इस पुस्तक का तर्क (व्याख्या):*** ऊपर रजिस्टर (flops): सबसे तेज़, सबसे छोटे, प्रति बिट सबसे महँगे। फिर SRAM cache। नीचे DRAM मुख्य स्मृति। उसके नीचे डिस्क/SSD। पिरामिड सजावट नहीं — हर स्तर पर ट्रांज़िस्टर-गिनती बनाम गति। Phase 3 की caches इसी पर बनती हैं; Phase 5 की Memory Wall तब जब CPU–DRAM अन्तर, ठीक इसी व्यापार से सेट, caching की छिपाने की क्षमता से तेज़ चौड़ा होता है।

{{< lab type="breadboard" >}}

**अगला:** [निर्देश समुच्चय]({{< relref "18-instruction-sets.md" >}})

## स्रोत

- Computer History Museum, "Semiconductor Memory: Fast, Cheap, or Dense?": <https://www.computerhistory.org/revolution/memory-storage/8/311>
- Computer History Museum Silicon Engine, "1970: MOS Dynamic RAM Competes with Magnetic Core Memory on Price": <https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/>
- U.S. Patent 3,387,286 (Dennard, Field-effect transistor memory; issued 1968): <https://patents.google.com/patent/US3387286>
- JEDEC, JESD79F — DDR SDRAM Specification (refresh of all rows in any rolling 64 ms interval): <https://www.jedec.org/sites/default/files/docs/JESD79F.pdf>
