---
title: "अनुक्रमिक-लॉजिकम्"
weight: 16
date: 2026-11-06
draft: false
phase: "2 — भौतिकी युक्तयश्च"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "फीडबैक् द्विस्थिर-स्मृतिं करोति; एज-ट्रिगर्ड् फ्लिप्-फ्लॉप् सिंक्रोनस्-रूपं सुलभं — यावत् setup/hold घड़ीं बध्नाति"
labs: ["breadboard"]
---

संयोजनात्मकं लॉजिकम् वर्तमान-इनपुट्-फलनम् एव — अतीतस्य स्मृतिः नास्ति। कम्प्यूटर् *अवस्थाम्* इच्छति: रजिस्टर्, प्रोग्राम्-काउन्टर्, चक्रपारं स्मृतिः। तदर्थं फीडबैक्।

> **गभीरायाः सीमा:** यावत् स्रोताः। व्याख्यायां संख्या न।

## पारिभाषिकाः (gloss)

| संस्कृतम् | अर्थः |
|---|---|
| **latch / धारकः** | स्तर-संवेदी; enable उच्चे transparent |
| **flip-flop / फ्लिप्-फ्लॉप्** | एज-ट्रिगर्ड्; master–slave |
| **setup / hold** | एज-पूर्वं / एज-पश्चात् स्थैर्य-कालः |
| **metastability** | अपरिभाषितावस्था; देर/असंगतं समाधानम् |

## फीडबैकात् स्मृतिः

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** द्वे NOR (वा NAND) द्वारे क्रॉस-कपल् — प्रत्येकम् आउटपुट् अन्यस्य इनपुट् — द्वे स्थिर-अवस्थे। यत्र अन्तिमं धक्काः, तत्र तिष्ठति यावत् शक्तिः। भौतिकं स्मृतिः: द्विस्थिरता, न अमूर्तं «store»।

MIT 6.004 D latch: गेट् HIGH → खुला (D→Q); LOW → बन्द («memory mode»); HIGH→LOW संक्रमणे यत् D आसीत् तदेव स्मर्यते। ([MIT OCW 6.004 C5](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/))

अनगेटेड् SR latch सदा जीवितम्; निषिद्धसंयोजनं च। सिंक्रोनस्-रूपं gated latch इच्छति: enable उच्चे *transparent*; पतने धारणम्।

**इदानीं प्रयतस्व।** अधः लैब् जीवितं द्वारम् — इनपुट् टॉगल् कुरु; आउटपुट् *सद्यः* परिवर्तते। तत् संयोजनात्मकम्। अत्र द्वाराणि स्वयमेव युक्तानि यथा इनपुट् गतेऽपि आउटपुट् *धारयेत्*।

{{< lab type="breadboard" height="700" >}}

## D फ्लिप्-फ्लॉप्: एजः, न स्तरः

MIT 6.004: रजिस्टर्/फ्लिप्-फ्लॉप् = master–slave latch-युगलम्; क्लॉक् इनवर्ट् master-गेट् उपरि — यदा master खुला, slave बन्दः, विपर्ययश्च — यथा D→Q सक्रियपथः युगपत् न स्यात्। ([MIT OCW 6.004 C5](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/))

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** आउटपुट् केवलं क्लॉक्-*एजे* परिवर्तते, न सम्पूर्णे high/low फेज्। एजयोर्मध्ये flop D उपेक्ष्य धारयति। एज-ट्रिगर् यस्मात् सिंक्रोनस्-रूपं सुलभम्: सर्वे flop एकस्मिन् एजे — असततं पदम्, न निरन्तर-सिग्नल-स्पर्धा।

## Setup, hold, घड़ी-छदः

MIT 6.004 **dynamic discipline**: D setup (G HIGH→LOW *पूर्वम्* स्थैर्यम्) च hold (*पश्चात्*) — उभे पूर्णे चेत् latch सम्यक्। ([MIT OCW 6.004 C5](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/)) रजिस्टर्-रजिस्टर् पथे घड़ी-अवधिः propagation + अग्रिम-रजिस्टर् setup यावत्; hold कृते contamination-विलम्बः पर्याप्तः। ([MIT OCW 6.004 timing PDF](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/79b6a9016bb4e06e46a07b4b00510689_3LQUrpSADx8.pdf))

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** setup/hold भग्ने flop metastable भवितुम् अर्हति। अतः अधिकतम-क्लॉक्-आवृत्तेः कठोरः छदः। [अध्यायः 43, The Clock Speed Wall]({{< relref path="43-the-clock-speed-wall.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अधुना आङ्ग्लभाषायाम्)</span> तमेव बन्धं पुनरागच्छति।

**उदाहरणम् (शिक्षणम् — ऐतिहासिकं न दावा):** एकस्यां क्लॉक्-अवधौ «logic delay + setup» योजनीयम्; hold-विफलता यदा अग्रिम-flop इनपुट् एजानन्तरं परिवर्तते प्राक् hold-पूर्तेः।

## किम् उद्घाटयति

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** एज-ट्रिगर्ड् flop → रजिस्टर्, काउन्टर्, स्टेट्-मशीन् — Phase 3 मध्ये प्रोग्राम्-काउन्टर् च पाइपलाइन्-रजिस्टर् येन CPU *अनुक्रमिकं* यन्त्रम्। अग्रे: घनतायै द्विस्थिर-भण्डारणस्य विशेषज्ञता — यत्र SRAM च DRAM भिद्येते।

**अग्रे:** [स्मृति-पदानुक्रमः आरभते]({{< relref "17-the-memory-hierarchy-begins.md" >}})

## स्रोताः

- MIT OCW 6.004 C5 annotated slides: <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/pages/c5/c5s1/>
- MIT OCW 6.004 timing PDF: <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/79b6a9016bb4e06e46a07b4b00510689_3LQUrpSADx8.pdf>
