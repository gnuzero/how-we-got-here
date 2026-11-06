---
title: "ट्रांज़िस्टरों से लॉजिक गेट"
weight: 14
date: 2026-11-06
draft: false
phase: "2 — भौतिकी और युक्तियाँ"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS NMOS और PMOS जोड़ता है ताकि निष्क्रिय गेट स्थैतिक पथ न खींचे — वही टोपोलॉजी जो स्केल हुई"
labs: ["breadboard"]
---

CMOS — Complementary Metal-Oxide-Semiconductor — वह परिपथ-टोपोलॉजी है जो लगभग हर डिजिटल चिप के पीछे है एक बार जब वह प्रमुख VLSI प्रक्रिया बनी। IEEE ISSCC **1985** पैनल सारांश कहता है कि अगले दशक की प्रमुख VLSI तकनीक CMOS होगी। ([IEEE ISSCC 1985 abstract / DOI 10.1109/ISSCC.1985.1156842](https://doi.org/10.1109/isscc.1985.1156842)) Computer History Museum लिखता है कि जैसे-जैसे IC में अधिक ट्रांज़िस्टर आए, कम-शक्ति CMOS प्रमुख तकनीक बनी और अतितापन रोकने में मदद की; MOS युक्तियाँ द्विध्रुवी से छोटी, सस्ती और कम शक्ति-भुखी हैं। ([CHM Revolution — Tortoise of Transistors](https://www.computerhistory.org/revolution/digital-logic/12/279)) NMOS को PMOS के साथ जोड़ो ताकि स्थायी अवस्था में ठीक एक चले। युक्ति-स्तर की लगभग-शून्य स्थैतिक धारा (पूर्व अध्याय) संयोज्य लॉजिक परिवार बन जाती है।

## इन्वर्टर: सबसे छोटी CMOS इकाई

ऊपर PMOS (सप्लाई रेल की ओर), नीचे NMOS (ग्राउंड की ओर); गेट इनपुट से जुड़े, ड्रेन आउटपुट। PMOS तब चलता है जब गेट *निम्न*; NMOS जब गेट *उच्च*। इनपुट उच्च → NMOS चालू, PMOS बन्द → आउटपुट ग्राउंड। इनपुट निम्न → PMOS चालू, NMOS बन्द → आउटपुट रेल। दोनों स्थायी अवस्थाओं में एक चालू और दूसरा बन्द — स्विच के क्षण को छोड़कर रेल-से-ग्राउंड स्थैतिक पथ नहीं।

Britannica: आधुनिक स्विचिंग में गेट-वोल्टेज तय करता है कि source से drain धारा बहे — चालू/बन्द = डिजिटल 1/0। ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

## यह शक्ति समस्या क्यों सुलझाता है

***इस पुस्तक का तर्क (व्याख्या):*** पुरानी NMOS-शैली लॉजिक (pull-down + लोड) तब धारा खींचती है जब आउटपुट निम्न बैठा हो। CMOS नहीं। शक्ति लगभग पूरी तरह संक्रमणों पर खर्च होती है — अगले गेट की इनपुट धारिता चार्ज/डिस्चार्ज — इसलिए वह स्विचिंग *क्रिया* और *आवृत्ति* के साथ स्केल होती है, डाइ पर कितने निष्क्रिय गेट हैं उससे नहीं। MOSFET ने युक्ति पर लगभग-शून्य स्थैतिक धारा सम्भव की; CMOS वह परिपथ-चाल है जो उसे आगे के हर गेट में बदलती है। (संख्या नहीं।)

IEEE Proceedings **1986**: CMOS की मुख्य विशेषता पूरक n- और p-चैनल ट्रांज़िस्टर हैं, जिनसे लगभग शून्य स्थायी-अवस्था धारा वाले परिपथ बनते हैं और अतः कम शक्ति-क्षय। ([IEEE Proc. 1986, DOI 10.1109/PROC.1986.13683](https://doi.org/10.1109/proc.1986.13683))

## NAND, NOR, और कार्यात्मक पूर्णता

2-इनपुट CMOS NAND में NMOS श्रेणीक्रम में (दोनों उच्च → निम्न खींचो) और PMOS समान्तर में (कोई भी निम्न → उच्च)। NOR उसका दर्पण। अकेला कोई भी गेट कार्यात्मक रूप से पूर्ण है — AND, OR, NOT, अतः कोई भी बूलियन फलन।

***इस पुस्तक का तर्क (व्याख्या):*** इसीलिए मानक-सेल लाइब्रेरियाँ भली-भाँति चरित NAND सेलों पर इतना जोर देती हैं: उन्हें जोड़ो तो योजक, रजिस्टर फ़ाइल, पूरे प्रोसेसर। (संख्या नहीं।)

**अभी आज़माओ।** नीचे का लैब AND गेट पर खुलता है — दोनों इनपुट टॉगल करो, आउटपुट देखो। NAND और NOR ऊपर की CMOS आदिम हैं; AND तब मिलता है जब उन्हें जोड़ा जाए। अगले अध्याय से पहले गेट छू लो।

{{< lab type="breadboard" height="700" >}}

## आगे कहाँ

हर Phase 3 CPU संरचना — फुल-एडर, ALU, रजिस्टर फ़ाइल — इन गेटों का संयोजन है। अगला: पहली वास्तविक संरचना, संयोजनात्मक लॉजिक, योजक से शुरू।

**अगला:** [गेटों से संयोजनात्मक लॉजिक तक]({{< relref "15-from-gates-to-combinational-logic.md" >}})

## स्रोत

- IEEE ISSCC 1985, "High speed LSI technologies challenging the CMOS VLSI era": <https://doi.org/10.1109/isscc.1985.1156842>
- IEEE Proceedings 1986, "A perspective on CMOS technology trends": <https://doi.org/10.1109/proc.1986.13683>
- Computer History Museum, "Tortoise of Transistors Wins the Race": <https://www.computerhistory.org/revolution/digital-logic/12/279>
- Encyclopaedia Britannica, "transistor": <https://www.britannica.com/technology/transistor>
