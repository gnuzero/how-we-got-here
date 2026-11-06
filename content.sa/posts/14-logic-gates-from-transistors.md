---
title: "ट्रान्ज़िस्टरेभ्यः लॉजिक्-द्वाराणि"
weight: 14
date: 2026-11-06
draft: false
phase: "2 — भौतिकी युक्तयश्च"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS NMOS–PMOS योजयति यथा निष्क्रियद्वारं स्थैतिकपथं न कर्षति"
labs: ["breadboard"]
---

CMOS — Complementary Metal-Oxide-Semiconductor — डिजिटल्-चिपानां परिपथटोपोलॉजी।

> **गभीरायाः सीमा:** यावत् स्रोताः। व्याख्यायां संख्या न।

## पारिभाषिकाः (gloss)

| संस्कृतम् | अर्थः |
|---|---|
| **CMOS** | पूरक NMOS+PMOS |
| **inverter / विपर्ययद्वारम्** | लघुतमं CMOS एककम् |
| **NAND / NOR** | कार्यात्मकपूर्णद्वारे |
| **static path** | रेल–ग्राउण्ड् निरन्तरधारा |

## CMOS

IEEE ISSCC **1985**: अग्रिमदशकस्य प्रमुखं VLSI CMOS भविष्यति। ([DOI 10.1109/ISSCC.1985.1156842](https://doi.org/10.1109/isscc.1985.1156842)) CHM: अधिकट्रान्ज़िस्टरेषु कमशक्ति-CMOS प्रमुखम्; MOS द्विध्रुवीतः लघु, सस्ता, कमशक्ति। ([CHM 12/279](https://www.computerhistory.org/revolution/digital-logic/12/279)) IEEE Proc. **1986**: पूरक n/p → लगभग शून्यस्थायीधारा, अल्पशक्तिक्षयः। ([DOI 10.1109/PROC.1986.13683](https://doi.org/10.1109/proc.1986.13683)) Britannica: गेट्-वोल्टेज् source–drain धारां निर्धारित। ([Britannica](https://www.britannica.com/technology/transistor))

## विपर्ययद्वारम्

ऊपरि PMOS, अधः NMOS; गेटौ इनपुट्, ड्रेन् आउटपुट्। इनपुट् उच्चम् → NMOS चालू / PMOS बन्द → ग्राउण्ड्। इनपुट् निम्नम् → विपरीतम्। स्थाय्यवस्थायां एकः चालू एकः बन्दः — स्थैतिकरेलपथः न (स्विचक्षणं विना)।

***अस्य पुस्तकस्य तर्कः (व्याख्या):*** शक्तिः मुख्यतः संक्रमणेषु — क्रिया+आवृत्ति।

## NAND, NOR

द्वि-इनपुट् NAND: NMOS श्रेण्या, PMOS समान्तरे। NOR दर्पणम्। एकम् अपि कार्यात्मकपूर्णम्।

**इदानीं प्रयतस्व।** अधः लैब् AND द्वारे उद्घाट्यते।

{{< lab type="breadboard" height="700" >}}

**अग्रे:** [द्वारेभ्यः संयोजनात्मक-लॉजिकम्]({{< relref "15-from-gates-to-combinational-logic.md" >}})

## स्रोताः

- IEEE ISSCC 1985: <https://doi.org/10.1109/isscc.1985.1156842>
- IEEE Proc. 1986: <https://doi.org/10.1109/proc.1986.13683>
- CHM Revolution 12/279: <https://www.computerhistory.org/revolution/digital-logic/12/279>
- Britannica transistor: <https://www.britannica.com/technology/transistor>
