---
title: "الترانزستور: من BJT إلى MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — الفيزياء والأجهزة"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "ترانزستورات BJT التي يتحكم فيها التيار أحرقت طاقة وهي خاملة؛ وترانزستورات MOSFET التي يتحكم فيها الجهد جعلت الكثافة ممكنة"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

ترانزستور MOSFET، الذي يقوم عليه هذا الفصل، أحد مخترعَيه مهندس وُلد في بورسعيد بمصر: مارتن (جون) م. عطا الله، الذي التقيناه في [الفصل السابق]({{< relref "12-semiconductors-from-first-principles.md" >}}) [1]. فقد اقترح عطا الله أن يُبنى ترانزستور تأثير المجال، الذي تُصوِّر في العشرينيات ولم يتحقق بعد، من المعدن والأكسيد والسيليكون، وأسند المهمة إلى داوون كانغ (Dawon Kahng) من فريقه، وأعلن الاثنان نجاح ترانزستور MOSFET في مؤتمر سنة 1960 [1].

*تفسيرنا (حجّة هذا الكتاب):* عائلتان من الأجهزة تُسمّى كلتاهما «ترانزستور». لكنهما تبدّلان بفيزياء مختلفة، وواحدة منهما فقط تتوسع إلى الأعداد الهائلة من الأجهزة على رقاقة حديثة.

## ترانزستور BJT: التيار يتحكم في التيار

يتكون ترانزستور الوصلة ثنائي القطبية (BJT) من ثلاث مناطق مطعَّمة من شبه الموصل؛ وتيار صغير في المنطقة الوسطى، أي القاعدة (base)، يتحكم في تيار أكبر يسري بين الطرفين، أي الباعث (emitter) والجامع (collector) [2]. ولهذا يوصف بأنه مضخّم تيار، وله تطبيقات كثيرة في التضخيم والتبديل [2].

*تفسيرنا (حجّة هذا الكتاب):* لكي تبقيه في حالة التشغيل لا بد أن تواصل تزويده بتيار القاعدة. وعلى مستوى الرقاقة تتراكم هذه الكلفة الخاملة: اصطدمت عائلات المنطق ثنائي القطبية بجدار حراري حقيقي من التبديد الساكن وحده، حتى حين لا تبدّل البوابات.

## ترانزستور MOSFET: الجهد يتحكم في قناة

يبني ترانزستور تأثير المجال ذو المعدن والأكسيد وشبه الموصل (MOSFET) على ترانزستور تأثير المجال الأساسي بإضافة طبقة من ثاني أكسيد السيليكون، فيحقق ممانعة دخل عالية جدًا، بين 10⁹ و10¹⁴ أوم [3]. ويذكر متحف تاريخ الحاسوب أن عطا الله وكانغ وجدا أن طبقات ثاني أكسيد السيليكون المنماة حراريًا تقلّل كثيرًا «الحالات السطحية» عند الحدّ بين السيليكون وأكسيده، وأن منطقة التوصيل في ترانزستور MOS إما من النوع p (جهاز «قناة p») وإما من النوع n (جهاز «قناة n») [4].

*تفسيرنا (حجّة هذا الكتاب):* جهد البوابة لا يدفع تيارًا *عبر* البوابة، لأن الأكسيد يحجب التيار المستمر. بل يصنع مجالًا يُنشئ قناة موصلة بين المصدر (source) والمصرف (drain) أو يزيلها. في NMOS يجذب جهد البوابة الموجب الإلكترونات إلى طبقة انقلاب في جسم من النوع p، فيسري التيار؛ أنزل جهد البوابة تختفِ القناة ويتوقف التيار.

**البوابة لا تسحب تقريبًا أي تيار مستقر.** *تفسيرنا (حجّة هذا الكتاب):* ما إن تُشحن سعة البوابة حتى يصبح إبقاء الجهاز في حالة التشغيل شبه مجاني. وهذا عكس تيار القاعدة المستمر في BJT.

## لماذا انتصر MOSFET في المنطق الرقمي

يقول متحف تاريخ الحاسوب إن C. T. Sah وفرانك وانلاس (Frank Wanlass) من مختبرات فيرتشايلد أظهرا في ورقة مؤتمر سنة 1963 أن دارات المنطق التي تجمع ترانزستورات MOS من قناة p وقناة n في ترتيب متناظر متتامّ تسحب طاقة قريبة من الصفر في وضع الاستعداد، وأن وانلاس سجّل براءة الفكرة التي تُسمّى اليوم CMOS [5]. ويذكر المتحف أيضًا أن أجهزة MOS، لصغر حجمها وانخفاض استهلاكها للطاقة مقارنةً بالأجهزة ثنائية القطبية، صارت تُستعمل في أكثر من 99 في المئة من الرقاقات المنتجة اليوم [4].

*تفسيرنا (حجّة هذا الكتاب):* التيار الساكن شبه المعدوم في البوابة هو القصة كلها. وتبني CMOS ([الفصل التالي]({{< relref "14-logic-gates-from-transistors.md" >}})) عليه بحيث يسري التيار المعتبر أساسًا *أثناء التبديل*، لا أثناء الاحتفاظ بالحالة. وهذا ما سمح لأعداد الترانزستورات بأن تصعد صعودًا هائلًا دون أن تذوب الرقاقة، وهو قوس التوسّع الذي تعود إليه المرحلة الثامنة بدقة عُقَد التصنيع.

*تفسيرنا (حجّة هذا الكتاب):* لم تختفِ ترانزستورات BJT؛ فهي ما تزال مهمة حيث تتفوق قوة دفع التيار أو الخطية التناظرية على الكثافة. لكن في المنطق الرقمي على نطاق جاد، جعلت فيزياء الطاقة الخاملة في MOSFET منه الطريق الوحيد القابل للحياة، وكل بوابة في الفصل التالي مبنية منه.

**باب إلى الخارج:** أعمال داوون كانغ وم. م. عطا الله سنة 1960 على MOSFET من السيليكون في مختبرات بِل، ومنها المذكرة التقنية التي يسردها متحف تاريخ الحاسوب ضمن وثائقه المعاصرة: Dawon Kahng, "Silicon-silicon dioxide field induced surface devices" [4]، وبراءة كانغ الأمريكية رقم 3,102,230 [4]: الجهاز العملي الذي جعل التحكم بالجهد عبر بوابة من الأكسيد معيار العالم الرقمي.

## المصادر

1. National Inventors Hall of Fame, "Martin (John) M. Atalla" (inducted 2009): <https://www.invent.org/inductees/martin-john-m-atalla>
2. HyperPhysics (R. Nave, Department of Physics and Astronomy, Georgia State University), "The Junction Transistor": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/trans.html>
3. HyperPhysics (R. Nave, Georgia State University), "MOSFET" (after Diefenderfer & Holton): <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/mosfet.html>
4. Computer History Museum, *The Silicon Engine*, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated" (including its "Contemporary Documents"): <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
5. Computer History Museum, *The Silicon Engine*, "1963: Complementary MOS Circuit Configuration is Invented": <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
