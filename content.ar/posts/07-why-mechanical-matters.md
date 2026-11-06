---
title: "لماذا تهمّ الحوسبة الميكانيكية"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — الأسس: من الحوسبة الميكانيكية إلى الصمامات المفرغة"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "الشكل المنطقي وصل في النحاس، والاحتكاك دفع نحو الكهرباء"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

## الشكل المنطقي

كان في المحرك التحليلي «مخزن» تُحفظ فيه الأعداد والنتائج الوسيطة، و«طاحونة» منفصلة تجري فيها العمليات الحسابية، وكان يُبرمج ببطاقات مثقبة مستعارة من نول جاكار [1]. ويقول متحف تاريخ الحاسوب إن بنيته المنطقية هي في جوهرها البنية التي سيطرت على تصميم الحواسيب في العصر الإلكتروني: فصل الذاكرة عن المعالج المركزي، والتشغيل المتسلسل بدورة «الجلب والتنفيذ»، ووسائل لإدخال البيانات والتعليمات وإخراجها [1].

*تفسيرنا (حجّة هذا الكتاب):* مجموعات التعليمات، والبرامج المخزّنة، وفصل التحكم عن مسار البيانات، كلها لها جذور في محركات بابيج وبطاقات جاكار. الوسيط سيتغيّر تمامًا: مُرحِّلات، ثم صمامات، ثم ترانزستورات. أما الشكل المنطقي فلن يتغيّر: تتابع من التعليمات، ووحدة تنفيذ تؤديها، ومخزن يحفظ الحالة بين خطوة وأخرى.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="النسخة الثانية من محرك الفروق رقم 2 في متحف تاريخ الحاسوب" loading="lazy" width="1280">
<figcaption>محرك الفروق رقم 2، النسخة الثانية، مصوّرًا في متحف تاريخ الحاسوب. الصورة: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons، بترخيص <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

اكتملت هذه النسخة الثانية من محرك الفروق رقم 2 سنة 2008، وبناها متحف العلوم في لندن لمجموعة ناثان ميرفولد (Nathan Myhrvold) الخاصة، وعُرضت في متحف تاريخ الحاسوب في ماونتن فيو بكاليفورنيا من مايو 2008 حتى يناير 2016 [2]. والنسختان صُنعتا لتكونا متطابقتين [2].

## السقف

*تفسيرنا (حجّة هذا الكتاب):* ما لم تستطعه الحوسبة الميكانيكية في حياة بابيج هو التوسّع. في سلاسل التروس احتكاك، وارتداد بين الأسنان، وتراكم في تفاوتات التصنيع. كل خانة إضافية من الدقة جعلت بناء الآلة بموثوقية أصعب. وهذا السقف، لا نقص الأفكار، هو ما دفع الحوسبة نحو التبديل الكهربائي.

*تفسيرنا (حجّة هذا الكتاب):* وإعادة البناء في الصورة أعلاه، التي أُنجزت وفق تفاوتات القرن التاسع عشر، هي الاستثناء الذي يؤكد القاعدة: حين صارت الورش قادرة على الالتزام بتلك التفاوتات، اشتغل التصميم النحاسي. الشكل المنطقي كان موجودًا بالفعل. لكن الوسيط كان لا بد أن يتغيّر أولًا.

التالي: [اصطياد الضوء]({{< relref "08-capturing-light.md" >}})، ثم المُرحِّلات والمنطق الكهروميكانيكي الذي حمل هذه البنية حتى الحرب العالمية الثانية.

## المصادر

1. Computer History Museum, "The Babbage Engine: The Engines": <https://www.computerhistory.org/babbage/engines/>
2. Doron Swade, *Charles Babbage's Difference Engine No. 2: Technical Description*, Science Museum (PDF, 2023 edition), §1 Introduction: <https://www.sciencemuseum.org.uk/sites/default/files/2023-09/DE2_Technical_Description.pdf>
