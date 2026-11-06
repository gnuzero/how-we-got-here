---
title: "स्मृति-पदानुक्रमः आरभते"
weight: 17
date: 2026-11-06
draft: false
phase: "2 — भौतिकी युक्तयश्च"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "फ्लिप्-फ्लॉप् प्रतिबिटं महार्घम् — SRAM गतिं क्रीणाति, DRAM घनताम्; पदानुक्रमः स एव व्यापारः पुनः"
labs: ["breadboard"]
---

D फ्लिप्-फ्लॉप् (पूर्वाध्यायः) उत्तमं स्मृति-तत्त्वम् — प्रतिबिटं च महार्घम्। कतिचन रजिस्टराः सम्यक्; गीगाबाइट् मुख्यस्मृतिः तथा न। द्वे सेल्-रूपे व्यापारं विभजतः: CPU-समीपे वेगाय SRAM, बहिः घनतायै DRAM।

> **गभीरायाः सीमा:** यावत् स्रोताः। व्याख्यायां संख्या न।

## पारिभाषिकाः (gloss)

| संस्कृतम् | अर्थः |
|---|---|
| **SRAM** | स्थैतिकं RAM; फ्लिप्-फ्लॉप् सेल्; refresh नास्ति |
| **DRAM** | गतिकं RAM; संधारित्र-आवेशः; refresh आवश्यकम् |
| **6T / 1T1C** | षट्-ट्रान्ज़िस्टर् सेल् / एक-ट्रान्ज़िस्टर्+संधारित्रम् |
| **refresh** | लीक् आवेशस्य पुनर्लेखनम् |

## SRAM: वेगः, स्थैर्यम्, क्षेत्र-गुरु

CHM: SRAM बिट् ट्रान्ज़िस्टर्-फ्लिप्-फ्लॉप् मध्ये धृत्वा कस्यापि बिट् पर्यन्तं साक्षात् पहुँचं ददाति; प्रतिबिटं अधिकट्रान्ज़िस्टराः — वेगवत्तरम् अपि महार्घम्। DRAM संधारित्रे आवेशं धरति; प्रतिबिटं एकं ट्रान्ज़िस्टर् यावत्; घनतरम्, मन्दतरम्, कालानुगुणं refresh आवश्यकम्। ([CHM Revolution — Semiconductor Memory](https://www.computerhistory.org/revolution/memory-storage/8/311))

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** Static RAM latchवत् द्विस्थिर-फीडबैक् 6T सेले — द्वे क्रॉस-कपल्ड् इन्वर्टरे बिट् धारयतः; द्वौ access-ट्रान्ज़िस्टरौ पठतः लिखतः च। शक्तिः चालिता चेत् अनिश्चितकालं धारणम् — refresh नास्ति। षट् प्रतिबिटं क्षेत्रं दहन्ति; अतः SRAM *cache* (Phase 3)।

## DRAM: घनम्, सस्तम्, उच्च-रक्षणम्

CHM Silicon Engine: IBM शोधकस्य Robert Dennard एक-ट्रान्ज़िस्टर् DRAM सेल् (U.S. Patent 3,387,286, filed 1967, issued 1968); Mostek 16K स्तरे तदेव रूपम् आदत्तवान्। ([CHM Silicon Engine — MOS Dynamic RAM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/)) पेटण्ट् field-effect ट्रान्ज़िस्टर्-स्मृतिं वर्णयति। ([U.S. Patent 3,387,286](https://patents.google.com/patent/US3387286))

DRAM बिट् संधारित्र-आवेशरूपेण, एकेन ट्रान्ज़िस्टरेण (1T1C) gated। षट्स्थाने एकम् — घनतायाः जयः। नाम्नि मूल्यम्: संधारित्राः लीक् कुर्वन्ति। JEDEC DDR SDRAM: सर्वासां पङ्क्तीनां refresh कस्यामपि rolling **64 ms** अन्तराले आवश्यकम्। ([JEDEC JESD79F](https://www.jedec.org/sites/default/files/docs/JESD79F.pdf)) पठनम् अपि destructive — सूक्ष्मावेश-sensing विक्षोभयति — अतः प्रत्येकं पठनं rewrite अनुसृत्य। SRAM इदं न।

**बहिर्द्वारम्:** Robert H. Dennard एक-ट्रान्ज़िस्टर् DRAM सेल् (U.S. Patent 3,387,286, 1968)। ([CHM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/); [पेटण्ट्](https://patents.google.com/patent/US3387286))

## पदानुक्रमः कथं सेट् भवति

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** उपरि रजिस्टराः (flops): वेगवतमाः, लघुतमाः, प्रतिबिटं महार्घतमाः। ततः SRAM cache। अधः DRAM मुख्यस्मृतिः। तदधः डिस्क/SSD। पिरामिड् अलङ्कारः न — प्रत्येकस्मिन् स्तरे ट्रान्ज़िस्टर्-गणना विरुद्धं वेगः।

{{< lab type="breadboard" >}}

**अग्रे:** [Instruction Sets]({{< relref path="18-instruction-sets.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अधुना आङ्ग्लभाषायाम्)</span>

## स्रोताः

- CHM, Semiconductor Memory: <https://www.computerhistory.org/revolution/memory-storage/8/311>
- CHM Silicon Engine, MOS Dynamic RAM: <https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/>
- U.S. Patent 3,387,286 (Dennard, 1968): <https://patents.google.com/patent/US3387286>
- JEDEC JESD79F (64 ms refresh): <https://www.jedec.org/sites/default/files/docs/JESD79F.pdf>
