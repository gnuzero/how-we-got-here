---
title: "محركات بابيج"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — الأسس: من الحوسبة الميكانيكية إلى الصمامات المفرغة"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "من عازف الناي الآلي عند بني موسى في بغداد إلى محرك الفروق والمحرك التحليلي: المخزن والطاحونة وبرنامج على بطاقات"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

الحوسبة لم تبدأ بالكهرباء، بل بالتروس. وقبل التروس النحاسية في لندن بأكثر من ألف عام، كانت في بغداد آلة تعزف ما يُملى عليها.

## بغداد، القرن التاسع: آلة تعزف ما يُملى عليها

يعرّف المؤرخ تون كوتسير (Teun Koetsier) «الآلة القابلة للبرمجة» بأنها آلة ذاتية الحركة تستطيع أن تؤدي وظائف مختلفة اختلافًا كبيرًا بحسب المعلومات المخزّنة على حامل مادي واحد أو أكثر يكون جزءًا منها [1]. وبهذا التعريف يقول إن أقدم تصميم معروف لآلة قابلة للبرمجة هو عازف الناي الآلي الذي وصفه الإخوة بنو موسى في بغداد في القرن التاسع الميلادي [1]. والفكرة الأساسية في وصفهم، كما يلخّصها كوتسير، أن أوتادًا على أسطوانة دوّارة تفتح، عبر روافع صغيرة، ثقبًا أو أكثر من ثقوب ناي ذي تسعة ثقوب موضوع موازيًا للأسطوانة؛ والهواء يولّده ماء يملأ خزانًا فيدفع الهواء إلى الخروج؛ والأسطوانة يديرها دولاب مائي [1]. ويقول كوتسير إن عمل بني موسى تأثّر بأسلافهم الهلنستيين لكنه تضمّن تقدّمًا واضحًا عليهم، منه استعمال صمامات مخروطية منظِّمات آلية [1].

وبعد ثلاثة قرون تقريبًا، ألّف بديع الزمان ابن الرزاز الجزري (1136–1206) «كتاب في معرفة الحيل الهندسية» [2]. ويحتفظ متحف المتروبوليتان بأوراق من نسخة مؤرخة بسنة 715 هـ / 1315 م، منها ساعة الفيل: كل نصف ساعة يصفر الطائر فوق القبة، ويُسقط الرجل في الأسفل كرة في فم التنين، ويضرب السائق الفيل بمهمازه [2]. ومنها كأس «تحكم» في مجالس الشراب: يصفر الطائر فوق غطائها حتى تمتلئ، ثم يظل يصفر حتى يفرغها الضيف المختار [3].

*تفسيرنا:* آلات الجزري تؤدي عملًا ثابتًا بدقة، مثل الناعورة في [الباب الثالث]({{< relref path="04-take-water-wheel.md" lang="en" >}}) (بالإنجليزية حاليًا). أما ناي بني موسى، بتعريف كوتسير، فشيء مختلف: غيّر الأوتاد على الأسطوانة يتغيّر اللحن، والآلة كما هي. هذا الفصل بين الآلة وما يُملى عليها هو الخيط الذي يقود إلى بابيج.

## محرك الفروق: الحساب بالجمع وحده

صمّم تشارلز بابيج (Charles Babbage، 1791–1871) نوعين من المحركات: محركات الفروق والمحركات التحليلية [4]. وسُمّيت محركات الفروق باسم المبدأ الرياضي الذي تقوم عليه، أي طريقة الفروق المحدودة، التي تعتمد على الجمع وحده وتستغني عن الضرب والقسمة الأصعب تنفيذًا بالآلة [4]. وكان محرك الفروق رقم 1 مصممًا لحساب الدوال كثيرة الحدود وجدولتها وطباعة النتائج آليًا في جدول [4].

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="محرك الفروق رقم 2 لتشارلز بابيج في متحف العلوم بلندن" loading="lazy" width="1280">
<figcaption>محرك الفروق رقم 2 (متحف العلوم، لندن). الصورة: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons، بترخيص <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

محركات بابيج عشرية رقمية: كل خانة من العدد لها عجلة مسننة خاصة بها، وإذا توقفت عجلة بين قيمتين صحيحتين اعتُبرت القيمة غير محددة، والمحرك مصمم لأن «يعلق» عندها، وهذا شكل من أشكال كشف الأخطاء [4]. ودرس بابيج أنظمة عدّ أخرى منها الثنائي، لكنه استقر على العشري لتقليل عدد القطع المتحركة ولأنه مألوف [4].

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="أذرع الحمل بين أعمدة الخانات في محرك الفروق رقم 2" loading="lazy" width="1280">
<figcaption>أذرع الحمل بين أعمدة الخانات في محرك الفروق رقم 2، النسخة الثانية (متحف تاريخ الحاسوب). الصورة: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons، بترخيص <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**جرّب الآن.** ابدأ المختبر من Y=9 وΔ₁=7. تتجاوز عجلة الآحاد الرقم 9، فيعلق سنٌّ بعجلة العشرات: 9+7 تصبح 16. هذه طريقة الفروق المحدودة وهي تحسب x²، أي الطريقة التي بُني المحرك من أجلها.

{{< lab type="difference-engine" height="720" >}}

المختبر من إعداد هذا الكتاب، بترخيص [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). وهو نموذج تعليمي لعمود واحد، لا إعادة بناء كاملة للمحرك رقم 2.

## لماذا لم يكتمل

*تفسيرنا (حجّة هذا الكتاب):* لم يُكمل بابيج قط محرك فروق بالحجم الكامل. كان التمويل يقف في وجهه، وكذلك حدود دقة التصنيع (التفاوتات المسموح بها) في عصره. فكل خانة إضافية من الدقة كانت فرصة أخرى لأن يفسد الاحتكاكُ والارتدادُ بين التروس وتراكمُ الأخطاء الصغيرة النتيجةَ.

بدأ بابيج العمل على محرك الفروق رقم 1 سنة 1821 (بحسب متحف تاريخ الحاسوب) [4]. وكان تصميم 1830 يحسب بست عشرة خانة وست مراتب من الفروق، ويحتاج نحو 25 ألف قطعة؛ ولو بُني لوزن نحو أربعة أطنان [4]. وتوقف العمل في بنائه سنة 1832، وانتهى التمويل الحكومي سنة 1842 [4]. والجزء الأكبر الذي أكمله بابيج هو سُبع المحرك رقم 1، قطعة عرض من نحو ألفي قطعة جُمعت سنة 1832 [4].

## محرك الفروق رقم 2

صمّم بابيج بين 1847 و1849 محرك الفروق رقم 2، بنحو ثلث عدد قطع المحرك الأول، ولم يُبنَ في حياته [5]. وبناه متحف العلوم في لندن وفق رسومه الأصلية: اكتمل قسم الحساب في يونيو 1991 في الذكرى المئوية الثانية لميلاد بابيج، وأضيفت آلية الطباعة سنة 2002، بإشراف القيّم دورون سويد (Doron Swade) [5][6]. وهو اليوم معروض في متحف العلوم بلندن [7].

## المحرك التحليلي: مخزن وطاحونة وبرنامج على بطاقات

في سنة 1834، والبناء متعثر، تصوّر بابيج آلة أطمح سُمّيت لاحقًا المحرك التحليلي: محرك حساب عام قابل للبرمجة [4]. كان يُبرمج ببطاقات مثقبة، وهي فكرة مستعارة من نول جاكار المستعمل في نسج النقوش المعقدة [4]. وكان فيه «مخزن» (Store) تُحفظ فيه الأعداد والنتائج الوسيطة، و«طاحونة» (Mill) منفصلة تجري فيها العمليات الحسابية [4]. ويقول متحف تاريخ الحاسوب إن بنيته المنطقية هي في جوهرها البنية التي سيطرت على تصميم الحواسيب في العصر الإلكتروني: فصل الذاكرة عن المعالج المركزي، والتشغيل المتسلسل بدورة «الجلب والتنفيذ»، ووسائل لإدخال البيانات والتعليمات وإخراجها [4]. وكانت قطعة تجريبية صغيرة منه قيد البناء عند وفاة بابيج سنة 1871 [4].

المحاكي أدناه هو محاكي المحرك التحليلي الذي كتبه جون ووكر (John Walker) في موقع Fourmilab، وهو في الملك العام؛ نستضيف نسخة منه ونحتفظ برابط المصدر الأصلي. حرّك البطاقات وراقب أعمدة الطاحونة والمخزن وهي تتغير.

{{< lab type="analytical-engine" height="780" >}}

المصدر: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/)، [ملف الشيفرة المصدرية](https://www.fourmilab.ch/babbage/release/aemsource.zip) (ملك عام).

*تفسيرنا:* أوتاد على أسطوانة في بغداد، وبطاقات مثقبة على نول في ليون، وبطاقات مثقبة في محرك بابيج: في الحالات الثلاث صار «ما يجب فعله» شيئًا ماديًا يمكن تبديله دون تغيير الآلة. والمحطة التالية هي النول نفسه.

**التالي:** [نول جاكار]({{< relref "06-jacquard-loom.md" >}})

## المصادر

1. Teun Koetsier, "On the prehistory of programmable machines: musical automata, looms, calculators", *Mechanism and Machine Theory* 36, no. 5 (2001): 589–603, §1 and §3 (pp. 589–591), doi:10.1016/S0094-114X(01)00005-2: <https://doi.org/10.1016/S0094-114X(01)00005-2>
2. The Metropolitan Museum of Art, "The Elephant Clock", folio from a *Book of the Knowledge of Ingenious Mechanical Devices* by al-Jazari, dated 715 AH/1315 CE, 57.51.23: <https://www.metmuseum.org/art/collection/search/451402>
3. The Metropolitan Museum of Art, "Design for a Cup to Serve Wine at Drinking Parties", folio from the same manuscript, 55.121.14: <https://www.metmuseum.org/art/collection/search/451301>
4. Computer History Museum, "The Babbage Engine: The Engines": <https://www.computerhistory.org/babbage/engines/>
5. Science Museum, "Charles Babbage's Difference Engines and the Science Museum": <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
6. Science Museum Group Collection, "Babbage's Difference Engine No 2, 2002" (co62748): <https://collection.sciencemuseumgroup.org.uk/objects/co62748/babbages-difference-engine-no-2-2002>
7. Computer History Museum, "The Babbage Engine: A Modern Sequel": <https://www.computerhistory.org/babbage/modernsequel/>
