---
title: "निर्देश समुच्चय"
weight: 18
date: 2026-11-06
draft: false
phase: "3 — CPU और उसकी वास्तुकलाएँ बनाना"
series_index: 17
aliases:
  - /posts/11-instruction-sets/
  - /posts/16-instruction-sets/
  - /posts/17-instruction-sets/
tags: []
summary: "ISA सॉफ़्टवेयर–हार्डवेयर अनुबन्ध है; CISC और RISC इस अनुबन्ध के दो उत्तर हैं"
labs: ["mini-cpu"]
---

Instruction Set Architecture (ISA) सॉफ़्टवेयर और हार्डवेयर के बीच अनुबन्ध है: कौन-से संचालन हैं, बिटों में कैसे कूटित हैं, और उन बिटों का अर्थ क्या। यह *विनिर्देश* है, चिप नहीं। x86, ARM और RISC-V ISA हैं — अनेक अलग चिप एक ही ISA लागू कर वही बाइनरी चला सकते हैं।

वह विभाजन — वास्तुकला (सॉफ़्टवेयर क्या देखता है) बनाम माइक्रोआर्किटेक्चर (सिलिकॉन कैसे बना) — इस चरण की रीढ़ है। पाइपलाइन, cache, out-of-order कोर सब ISA के *नीचे* रहते हैं। सॉफ़्टवेयर को जानने की ज़रूरत नहीं।

## दो दर्शन: CISC और RISC

Patterson और Ditzel (1980) Reduced Instruction Set Computer (RISC) की दलील देते हैं कि बढ़ती जटिलता हमेशा लागत-प्रभावी नहीं — VLSI पीढ़ी CISC से अधिक प्रभावी रूप से RISC में लागू हो सकती है। ([ACM SIGARCH CAN 8(6), DOI 10.1145/641914.641917](https://doi.org/10.1145/641914.641917))

CISC (Complex Instruction Set Computing) — x86 की वंशावली — हर निर्देश में बहुत पैक करता है: परिवर्ती लंबाई, समृद्ध addressing modes, अंकगणित जो स्मृति को सीधे छू सके। प्रोग्राम में कम निर्देश; कठिन decoder।

RISC दूसरी ओर जाता है: स्थिर-लंबाई निर्देश, कठोर load/store मॉडल (ALU केवल रजिस्टर पर), एकसमान फ़ील्ड। प्रोग्राम में अधिक निर्देश; प्रत्येक इतना सरल कि fetch/decode अनुमाननीय चरण-दर-चरण हो। वही एकरूपता इसलिए [अध्याय 20, Pipelining]({{< relref path="20-pipelining.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अभी अंग्रेज़ी में)</span> पहले RISC पर सुलभ बनी — स्थिर-चौड़ाई निर्देश को चरणबद्ध करना उस CISC निर्देश से आसान है जिसकी लंबाई decode शुरू होने तक अज्ञात।

RISC-V Unprivileged ISA: आधार निर्देश समुच्चय स्थिर **32-bit** निर्देश रखता है, मुख्यतः चार प्रारूप (R/I/S/U), और स्रोत/गंतव्य रजिस्टर फ़ील्ड को प्रारूपों में समान स्थान पर रखता है ताकि decode सरल रहे। ([RISC-V ISA Manual, Vol. I, 20240411](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf)) Intel SDM Volume 2: IA-32/Intel 64 निर्देश एन्कोडिंग अधिकतम **15 बाइट** लंबी हो सकती है (prefixes आदि सहित)। ([Intel SDM Vol. 2, §2.3.11 / Order 325383](https://cdrdv2.intel.com/v1/dl/getContent/671110))

***इस पुस्तक का तर्क (व्याख्या):*** ठोस रूप: विशिष्ट RISC निर्देश स्थिर फ़ील्ड वाला 32-bit; x86 1 से 15 बाइट, वैकल्पिक prefix — घना और शक्तिशाली, उच्च throughput पर decode महँगा।

**अभी आज़माओ।** नीचे का mini-CPU एक छोटी ISA है।

**उदाहरण (शिक्षण — लैब का आकार, ऐतिहासिक दावा नहीं):** **4-bit** opcode, **4-bit** operand, सोलह शब्द स्मृति। निर्देशित 8-निर्देश कार्यक्रम चलाओ और fetch / decode / execute में A तथा स्मृति की गति देखो — वही अनुबन्ध जो इस अध्याय ने नाम दिया, एक स्क्रीन में समाने लायक छोटा।

{{< lab type="mini-cpu" >}}

## x86 फिर भी क्यों टिका

यदि RISC पाइपलाइन करना सरल है, तो x86 डेस्कटॉप और सर्वर पर क्यों हावी? संगतता और दशकों का अभियांत्रिकी निवेश — कच्ची सुंदरता नहीं।

Intel Optimization Reference Manual: front end ICache से कोड बाइट्स लाता है, निर्देशों में parse करता है, और उन्हें **micro-ops** में decode करता है जिन्हें बाकी मशीन निष्पादित करती है; decoder आम x86 निर्देशों को उन्हीं micro-ops में *अनुवाद* करते हैं। जटिल निर्देश (जैसे enter, leave, loop) चार से अधिक µops रख सकते हैं और decode में कई चक्र ले सकते हैं — सरल निर्देश-श्रृंखलाएँ प्राथमिक। ([Intel ORM Vol. 1, Order 248966-049, §3.5.1 Instruction Selection / Coding Rule 28; Appendix B.1.2 Frontend Bound](https://cdrdv2-public.intel.com/814198/248966-Optimization-Reference-Manual-V1-049.pdf)) आगे का वाद-विवाद: [अध्याय 26, The x86 vs RISC Split]({{< relref path="26-the-x86-vs-risc-split.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अभी अंग्रेज़ी में)</span>। बहस लेबल जितनी साफ़ द्विआधारी नहीं।

अगला: वास्तविक datapath बनाओ — वह भौतिक संरचना जिस पर ISA चलती है।

**बाहर का द्वार:** David A. Patterson और David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — क्लासिक दलील जिसने इस विभाजन का RISC पक्ष खोला। ([DOI 10.1145/641914.641917](https://doi.org/10.1145/641914.641917))

**अगला:** [Datapath Design]({{< relref path="19-datapath-design.md" lang="en" >}}) <span style="opacity:.7;font-size:.85em;">(अभी अंग्रेज़ी में)</span>

## स्रोत

- David A. Patterson, David R. Ditzel, "The Case for the Reduced Instruction Set Computer", *ACM SIGARCH Computer Architecture News* 8(6), 1980: <https://doi.org/10.1145/641914.641917>
- RISC-V International, *The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA* (20240411): <https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf>
- Intel, *Intel 64 and IA-32 Architectures Software Developer’s Manual, Volume 2* (Order 325383) — instruction length ≤ 15 bytes: <https://cdrdv2.intel.com/v1/dl/getContent/671110>
