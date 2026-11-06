---
title: "यांत्रिक गणना क्यों मायने रखती है"
weight: 7
date: 2026-11-06
draft: false
phase: "1 — नींव: यांत्रिक से निर्वात-नली कम्प्यूटिंग तक"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "तार्किक आकार पीतल में आ गया; घर्षण ने बिजली की ओर धकेला"
---

निर्देश-समुच्चय (instruction sets), संचित प्रोग्राम (stored programs), datapath से अलग नियंत्रण — इन सबकी जड़ें Babbage के इंजनों और Jacquard के कार्डों में हैं। माध्यम पूरी तरह बदलेगा (रिले, ट्यूब, ट्रांज़िस्टर)। तार्किक आकार नहीं बदलेगा: निर्देशों का एक क्रम, उन्हें चलाने वाली निष्पादन-इकाई, और कदमों के बीच अवस्था रखने वाली store।

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Computer History Museum में Difference Engine No. 2, Serial #2" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2, Serial #2 (Computer History Museum) — 19वीं सदी की सहनशीलताओं पर 2008 में पूरा। फोटो: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>।</figcaption>
</figure>

Computer History Museum लिखता है कि उन्होंने Difference Engine No. 2 का निर्माण Babbage के मूल चित्रों से किया — लगभग 8,000 भाग, पाँच टन, और गणना के परिणाम स्वतः मुद्रित; Serial #2 CHM में प्रदर्शित है, और निर्माण Babbage की मृत्यु के **153 वर्ष बाद** पूरा हुआ। ([Computer History Museum, "The Engine"](https://www.computerhistory.org/babbage/engine/); [CHM, "Overview"](https://www.computerhistory.org/babbage/overview/)) Science Museum London ने Difference Engine No. 2, Serial #1 **1985–2002** में बनाया और 2008 में मुद्रण-उपकरण जोड़ा; Serial #2 उसी चित्रों से CHM के लिए 2008 में पूरा हुआ। ([Science Museum, Babbage Difference Engines](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

***इस पुस्तक का तर्क (व्याख्या):*** Babbage के जीवनकाल में यांत्रिक गणना जो *नहीं* कर सकी, वह पैमाना था। गियर-ट्रेनों में घर्षण, backlash और विनिर्माण-सहनशीलता का जमाव होता है। सटीकता का हर अतिरिक्त अंक मशीन को विश्वसनीय रूप से बनाना कठिन बनाता था। वह छत — विचारों की कमी नहीं — गणना को विद्युत स्विचिंग की ओर धकेलती है। ऊपर का पुनर्निर्माण वही अपवाद है जो नियम सिद्ध करता है: जब वर्कशॉप वे सहनशीलताएँ पकड़ सकीं, पीतल का डिज़ाइन चला। तार्किक आकार पहले से था। माध्यम को पहले बदलना पड़ा।

**अगला:** [प्रकाश को पकड़ना]({{< relref "08-capturing-light.md" >}})

## स्रोत

- Computer History Museum, "The Babbage Engine: The Engine": <https://www.computerhistory.org/babbage/engine/>
- Computer History Museum, "Overview": <https://www.computerhistory.org/babbage/overview/>
- Science Museum, "Charles Babbage's Difference Engines and the Science Museum": <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
