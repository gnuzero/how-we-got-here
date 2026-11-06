---
title: "द्वारेभ्यः संयोजनात्मक-लॉजिकम्"
weight: 15
date: 2026-11-06
draft: false
phase: "2 — भौतिकी युक्तयश्च"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "द्वाराणि योजके ALU च संयुज्य — ततः carry-ripple विलम्बः श्रेयसीः संरचनाः बाधते"
labs: ["breadboard"]
---

एकं द्वारं केवलम् अल्पोपयोगि। उपयोगः संयोगे — प्रथमं क्लासिकं रूपं योजकः (adder): यत्र द्वाराणि CPU-अन्तर्गत-अङ्कगणितं भवन्ति।

> **गभीरायाः सीमा:** यावत् स्रोताः। व्याख्यायां संख्या न। शिक्षणाय उदाहरणम् पृथक्।

## पारिभाषिकाः (gloss)

| संस्कृतम् | अर्थः |
|---|---|
| **half adder / अर्धयोजकः** | A,B → sum⊕, carry AND; Cin नास्ति |
| **full adder / पूर्णयोजकः** | A,B,Cin → Sum, Cout |
| **ripple-carry** | Cout→Cin श्रेणी; carry तरङ्गः |
| **ALU** | mux+adder; add/sub/AND/OR चयनम् |

## अर्धयोजकात् पूर्णयोजकम्

Glasgow DCS: द्वयोः बिटयोः x,y योगे **c = xy**, **s = x ⊕ y** — अर्धयोजकः (AND + XOR)। ([Glasgow DCS](https://www.dcs.gla.ac.uk/~simon/teaching/CS1Q-students/systems/online/sec8.html)) MIT 6.004: पूर्णयोजकस्य **S = A ⊕ B ⊕ Cin**, **Co = A·B + A·Cin + B·Cin**; ripple-carry = पूर्णयोजक-श्रेणी। ([MIT OCW 6.004 Lab 2](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf)) MIT 6.111: **S = A ⊕ B ⊕ C**; Cout majority-रूपम्। ([MIT 6.111 L08](https://web.mit.edu/6.111/www/f2016/handouts/L08.pdf))

एकस्य Cout अग्रे Cin। चौड़ाई बिटशः वर्धते।

**इदानीं प्रयतस्व।** अधः लैब् AND द्वारे उद्घाट्यते — अर्धयोजकस्य carry। उभौ इनपुट् उच्चौ कुरु; स एव द्वारः श्रेण्यां ripple करिष्यति।

{{< lab type="breadboard" height="700" >}}

## Ripple-carry: सरलम्, मन्दम्

MIT 6.004 Lab 2 ripple-carry पूर्णयोजक-श्रेणीतः; पश्चात् उच्च-प्रदर्शन-योजकाः। ([MIT OCW 6.004 Lab 2](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf))

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** अधिकमहत्त्वबिटस्य carry यावत् लघुबिटं न settle, न सम्यक् — carry *ripple* करोति। स एव विलम्बः carry-lookahead बाधते: अधिकद्वाराणि, लघुः worst-case पथः।

**उदाहरणम् (शिक्षणम् — ऐतिहासिकं न दावा):** चत्वारः पूर्णयोजकाः = **4-bit** ripple-carry। बिट् 3 यावत् बिट् 2, ततः 1, ततः 0। **4 बिट्** समीचीनम्; **64 बिट्** तेषां श्रेणी सम्पूर्ण-ALU घड़ीं बध्नाति।

## योजकेभ्यः ALU

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** एडर्-पुरतः mux: add, subtract (विलोम-operand + Cin), AND, OR। एकं खण्डम्, बहवः संयोजनात्मकपथाः — «द्वार» यदा CPU-अङ्कगणितं।

इतः सर्वं संयोजनात्मकम् — आउटपुट् वर्तमान-इनपुट् एव। क्रमः कालपारं अवस्थां इच्छति — तदग्रे।

**अग्रे:** [अनुक्रमिक-लॉजिकम्]({{< relref "16-sequential-logic.md" >}})

## स्रोताः

- MIT OCW 6.004 Lab 2: <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2009/1dcbb09e592e1dabbacea66b18ebb842_MIT6_004s09_lab02.pdf>
- MIT 6.111 L08: <https://web.mit.edu/6.111/www/f2016/handouts/L08.pdf>
- Glasgow DCS — Addition and Subtraction: <https://www.dcs.gla.ac.uk/~simon/teaching/CS1Q-students/systems/online/sec8.html>
