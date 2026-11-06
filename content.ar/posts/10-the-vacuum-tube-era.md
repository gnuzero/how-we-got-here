---
title: "عصر الصمامات المفرغة"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — الأسس: من الحوسبة الميكانيكية إلى الصمامات المفرغة"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "أزالت الصمامات الأجزاء المتحركة، ودفعت ثمن تلك السرعة حرارةً وطاقةً وأعطالًا"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

*تفسيرنا (حجّة هذا الكتاب):* حيلة الصمام المفرغ الأساسية بسيطة: تحكّم في تيار كبير بتيار صغير، دون أي جزء متحرك. وهذا ما جعل الحواسيب أسرع بكثير من أي شيء قائم على المُرحِّلات، وهو أيضًا سبب أن هذا العصر كان معركة دائمة مع الحرارة والطاقة ومعدّل الأعطال.

## كيف يبدّل الصمام الثلاثي

الصمام الثلاثي (triode) صمام إلكتروني فيه ثلاثة أقطاب، هي فتيل المهبط (cathode) ولوح المصعد (anode) وشبكة التحكم (grid)، مثبّتة داخل وعاء مفرّغ من الهواء من الزجاج أو المعدن [1]. وهو الشكل الأساسي للصمام المفرغ [1]. والشبكة هي في العادة أهم أقطابه، لأن جهدًا صغيرًا متغيرًا يُطبَّق عليها يستطيع أن يغيّر كثيرًا تدفق الإلكترونات الواصلة إلى المصعد [1].

*تفسيرنا (حجّة هذا الكتاب):* تغيير صغير في الشبكة يعني تغييرًا كبيرًا في تيار المصعد. هذا هو التضخيم؛ وبالتوصيل المناسب يصبح الصمام مفتاحًا أيضًا: تيار يمر أو لا يمر، أي 1 أو 0. ولا يتحرك فيه شيء إلا الإلكترونات، ولهذا كانت الصمامات تبدّل أسرع بكثير من المُرحِّلات: لقد أُزيلت الحركة الميكانيكية.

ويعطي جون بريسبر إيكرت (J. Presper Eckert)، أحد مخترعي ENIAC، مثالًا على الفرق بكلماته هو في مقابلة سُجّلت معه سنة 1989: كان حاسوب «هارفارد مارك 1» الكهروميكانيكي يجمع عددين من عشر خانات في 0.3 ثانية، أما ENIAC فكان يجمعهما في 0.0002 ثانية [2].

## ENIAC: لوحة توصيل بوزن ثلاثين طنًا

أُعلن عن ENIAC في 14 فبراير 1946 في كلية مور للهندسة الكهربائية بجامعة بنسلفانيا، حيث بُني وشُغِّل [3]. وتقول جامعة بنسلفانيا إنه حين اكتمل شغل غرفة مساحتها 30 × 50 قدمًا، ووزن 30 طنًا، واحتاج إلى نحو 18 ألف صمام مفرغ، واستهلك 150 كيلوواط من الكهرباء عبر خطوط طاقة خاصة به [3]. ويعطي المتحف الوطني للجيش الأمريكي أرقامًا أدق: 17,468 صمامًا مفرغًا، ووزن يزيد على 27 طنًا، ومساحة 1,800 قدم مربعة [4]. ويذكر تقرير لمختبر أبحاث الجيش الأمريكي أن استهلاك الحاسوب بلغ 174 كيلوواط [5].

أما قصة أن أضواء فيلادلفيا كانت تخفت حين يعمل ENIAC، فقد وصفها إيكرت نفسه في تلك المقابلة بأنها «خيال محض» اخترعه أحد الصحفيين [2].

وكانت «برمجة» ENIAC، كما يصفها إيكرت بكلماته، توصيلًا لأسلاك من موضع إلى آخر، مع مفاتيح لضبط الوظائف: «ليست برمجيات، وليست ذاكرة؛ إنها برمجة بالتوصيل» [2]. ثم في ربيع 1948 حُوِّل ENIAC فصار أول حاسوب يشغّل برنامجًا مكتوبًا بما يسمّيه المؤرخون «نموذج الشيفرة الحديث». ويضع كتاب *ENIAC in Action* تنفيذ التحويل في مارس 1948 [6]، بينما يقول بحث هيغ (Haigh) وزميليه في مجلة IEEE إن نيك متروبوليس (Nick Metropolis) أكمله في أبريل 1948 [8].

*تفسيرنا (حجّة هذا الكتاب):* لم يكن هناك برنامج مخزَّن بالمعنى الحديث؛ كان *تتابع العمليات* يعيش في مسارات الأسلاك. وهذا العناء هو السلف المباشر لقصة معمارية المعالج في المرحلة الثالثة: البرنامج *المخزَّن*، أي التعليمات في الذاكرة نفسها مع البيانات، هو الحل الذي كان ينقص ENIAC في الأصل، وهو ما حدّد الآلات العامة التي تلته.

يبقى كتاب هيرمان غولدستاين (Herman H. Goldstine) عن الحواسيب الإلكترونية المبكرة رواية كلاسيكية قريبة من مصدرها لهذا العصر [7]. وقد وصف إيكرت نفسه، في المقابلة ذاتها، قصة أن رجلًا كان يركض بصندوق صمامات ليبدّل واحدًا كل بضع دقائق بأنها «خرافة أخرى» [2].

**باب إلى الخارج:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* [7]: تاريخ لـENIAC من الطراز الأول، مفيد في مواجهة الحكايات الشعبية.

## لماذا كانت آلاف الصمامات كابوسًا

كان التحدي الأكبر في ENIAC موثوقية الصمامات، وقد حصل إيكرت على موثوقية جيدة بتشغيلها عند ربع قدرتها، بحسب جامعة بنسلفانيا [3]. ويقول إيكرت في المقابلة نفسها إنهم أبقوا جهد الفتائل أدنى من قيمته الاسمية لتعيش أطول، وإن صمامًا كان يتعطل نحو مرة كل يومين، وإنهم كانوا يحددون موضع العطل في نحو 15 دقيقة، ويستبدلون الوحدة القابلة للفصل في ثوانٍ [2]. ويذكر تقرير مختبر أبحاث الجيش أن متوسط فترة التشغيل الخالي من الأخطاء كان 5.6 ساعات، وأن نسبة التشغيل الفعلي بلغت 0.69 في أرقام 1955 [5].

*تفسيرنا (حجّة هذا الكتاب):* الصمامات تتعطل: الفتائل تحترق، والأختام تتسرب، والانبعاث يضعف. ومع هذا العدد الهائل من الصمامات كان شيء ما يتعطل بانتظام، والأعطال كانت حقيقية ومكلفة. وكل صمام يبدّد حرارة حقيقية، فالغرف المليئة بها احتاجت إلى تبريد جدّي؛ فكانت الآلة قوية بمقاييس عصرها، وباهظة الكلفة في تشغيلها.

*تفسيرنا (حجّة هذا الكتاب):* وهذا يمهّد [للفصل التالي]({{< relref "11-why-the-transistor-had-to-happen.md" >}}). لم ينتصر الترانزستور لأن المهندسين أذكياء حبًّا في الذكاء. انتصر لأن فيزياء الصمام نفسه، أي الحرارة والحجم والغلاف المفرّغ الهش، وضعت سقفًا صلبًا لمدى توسّع هذا النهج.

## المصادر

1. *Encyclopaedia Britannica*, "triode": <https://www.britannica.com/technology/triode>
2. J. Presper Eckert, in his own words, interviewed by Alexander Randall 5th: "Q&A: A lost interview with ENIAC co-inventor J. Presper Eckert" (interview recorded 1989), *Computerworld*, 14 February 2006: <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>
3. Penn Engineering, University of Pennsylvania, "Celebrating Penn Engineering History: ENIAC": <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
4. National Museum of the United States Army, "ENIAC Computer" (Army Innovations): <https://www.thenmusa.org/armyinnovations/innovationeniaccomputer/>
5. U.S. Army Research Laboratory, "Electronic Computers Within The Ordnance Corps, Appendix I: ENIAC": <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
6. Thomas Haigh, Mark Priestley and Crispin Rope, *ENIAC in Action: Making and Remaking the Modern Computer* (MIT Press, 2016), chapter "Converting ENIAC" (abstract, MIT Press Scholarship Online): doi:10.7551/mitpress/9780262033985.003.0008: <https://doi.org/10.7551/mitpress/9780262033985.003.0008>
7. Herman H. Goldstine, *The Computer from Pascal to von Neumann* (Princeton: Princeton University Press, 1972).
8. Thomas Haigh, Mark Priestley and Crispin Rope, "Engineering 'The Miracle of the ENIAC': Implementing the Modern Code Paradigm", *IEEE Annals of the History of Computing* 36, no. 2 (2014): 41–59, doi:10.1109/MAHC.2014.15: <https://doi.org/10.1109/MAHC.2014.15>
