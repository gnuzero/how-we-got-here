---
title: "لماذا كان لا بد من الترانزستور"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — الأسس: من الحوسبة الميكانيكية إلى الصمامات المفرغة"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "الحجم والطاقة والموثوقية: ثلاثة سقوف للصمام جعلت التبديل في الحالة الصلبة أمرًا محتومًا"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

*تفسيرنا (حجّة هذا الكتاب):* كان الصمام المفرغ قد أثبت الفكرة: تبديل إلكتروني، بلا أجزاء متحركة، وبسرعة لم تبلغها المُرحِّلات. لكن ما لم يحلّه هو *التوسّع*. كل صمام إضافي يعني حرارة أكثر، وطاقة أكثر، وفرصة أخرى للعطل. لم يحلّ الترانزستور محل الصمام لأنه أداة أنيقة، بل لأن فيزياء الصمام نفسه كان لها سقف صلب، وكان على الحوسبة أن تتجاوزه.

## ثلاثة قيود، وعنق زجاجة واحد

تقول موسوعة بريتانيكا إن الصمامات الإلكترونية ضخمة وهشة، وتستهلك طاقة كبيرة لتسخين فتائل المهابط وتوليد تيارات الإلكترونات، وكثيرًا ما تحترق بعد بضعة آلاف من ساعات التشغيل [1]. وتضيف أن التطبيقات التي تحتاج آلاف الصمامات أو المفاتيح، مثل شبكات الهاتف الوطنية في الأربعينيات وأوائل الحواسيب الإلكترونية الرقمية، كانت تتطلب يقظة دائمة لتقليل الأعطال التي لا مفرّ منها [1].

**الحجم.** *تفسيرنا (حجّة هذا الكتاب):* يحتاج الصمام إلى غلاف زجاجي مفرّغ يتسع للمهبط والشبكة والمصعد متباعدة، ويكون متينًا بما يكفي ليحفظ الفراغ؛ ولهذا حدّ أدنى لا يصغر بعده. أما الترانزستور فجهاز من الحالة الصلبة، بلا فراغ ولا غلاف زجاجي، وحجمه تحدده دقة التصنيع لا فيزياء حجرة مفرغة. وهذا منحنى توسّع مختلف تمامًا، وهو الذي يضع في النهاية أعدادًا هائلة من الترانزستورات على رقاقة واحدة (المرحلة الثامنة). وتذكر بريتانيكا أن الدارات المتكاملة اليوم كثيرًا ما تحمل مليارات الترانزستورات [1].

**الطاقة.** يجب تسخين مهبط الصمام ليبعث الإلكترونات، وهذا يستهلك طاقة كبيرة [1]. وقد استهلك ENIAC، بنحو 18 ألف صمام، 150 كيلوواط بحسب جامعة بنسلفانيا [2]، و174 كيلوواط بحسب تقرير لمختبر أبحاث الجيش الأمريكي [3]. *تفسيرنا (حجّة هذا الكتاب):* الترانزستور لا فتيل تسخين فيه، فهو يبدّل بتعديل منطقة أو قناة داخل شبه الموصل، وطاقته في حالة السكون ضئيلة. وهذا أكبر سبب منفرد في أن الآلات المبنية بالترانزستور استطاعت أن تكون أكثف بكثير دون أن تذوب.

**الموثوقية.** *تفسيرنا (حجّة هذا الكتاب):* تتعطل الصمامات باحتراق الفتائل وتلف الأختام، وهذا بلى مدمج في دورات التسخين والتبريد العادية. أما الترانزستورات الصلبة فلا فتيل فيها ولا ختم فراغ تحافظ عليه، فلا تشترك في نمط العطل هذا بالطريقة نفسها. كانت للترانزستورات الأولى مشكلاتها الخاصة (التغليف والتلوث)، لكن *آلية* العطل لم تكن مدمجة في التشغيل اليومي كما كان احتراق الفتيل في الصمامات.

## الاثنان جنبًا إلى جنب

تقول بريتانيكا إن صغر حجم الترانزستور، وقلة الحرارة التي يولدها، وموثوقيته العالية، وانخفاض استهلاكه للطاقة، هي ما جعله يزيح الصمام الإلكتروني في كثير من التطبيقات بحلول أواخر الخمسينيات، وفتح الباب لتصغير الدارات المعقدة [1].

*تفسيرنا (حجّة هذا الكتاب):* حجم الترانزستور وطاقته *ينخفضان* مع تحسّن التصنيع، أما الصمام فلا. وهذا اللاتماثل يتراكم: بضعة صمامات أمر يمكن تدبيره؛ وآلاف الصمامات هي كابوس صيانة ENIAC؛ والعدد نفسه من الترانزستورات لا يكاد يُذكر على رقاقة حديثة.

## ما الذي يأتي بعد ذلك

في 16 ديسمبر 1947 حقق جون باردين (John Bardeen) ووالتر براتين (Walter Brattain) في مختبرات بِل أول مضخِّم ناجح من شبه موصل: ترانزستور نقطة التماس، وهو تماسّان من الذهب متقاربان مثبتان على شريحة من الجرمانيوم عالي النقاوة [4]. وعرضاه على مسؤولي المختبر في 23 ديسمبر [4]. وبحلول أوائل 1948 كان ويليام شوكلي (William Shockley) قد ابتكر ترانزستور الوصلة (junction transistor) [5]، الذي بُني سنة 1951 [6]. ونال الثلاثة جائزة نوبل في الفيزياء سنة 1956 «لأبحاثهم في أشباه الموصلات واكتشافهم أثر الترانزستور» [7].

*تفسيرنا (حجّة هذا الكتاب):* لا يعني شيء من ذلك أن الجهاز وصل مكتملًا. فيزياء *كيفية* تبديله، أي أشباه الموصلات والتطعيم وفجوات النطاق، كان لا بد أن تُفهم وتُهندس. وهذا موضوع غير موضوع لماذا كان لا بد منه. ومن هناك تبدأ [المرحلة الثانية]({{< relref "12-semiconductors-from-first-principles.md" >}}): ما شبه الموصل، ولماذا صار السيليكون المادة المفضلة، وكيف يصنع التطعيم المفتاح القابل للتحكم الذي لم يستطعه الصمام قط.

**باب إلى الخارج:** أوراق باردين وبراتين وشوكلي في مختبرات بِل، ومنها مثلًا ورقة باردين وبراتين «The Transistor, A Semi-Conductor Triode» [8]: الفيزياء الأولية للمفتاح الصلب الذي كسر سقف الصمام.

## المصادر

1. Michael Riordan, "transistor", *Encyclopaedia Britannica* (sections "Development of transistors" and "Motivation and early radar research"): <https://www.britannica.com/technology/transistor>
2. Penn Engineering, University of Pennsylvania, "Celebrating Penn Engineering History: ENIAC": <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
3. U.S. Army Research Laboratory, "Electronic Computers Within The Ordnance Corps, Appendix I: ENIAC": <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
4. Computer History Museum, *The Silicon Engine*, "1947: Invention of the Point-Contact Transistor": <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
5. Computer History Museum, "This Day in History: December 23": <https://www.computerhistory.org/tdih/december/23/>
6. Computer History Museum, *Revolution*, "Inventing the Transistor": <https://www.computerhistory.org/revolution/story/273>
7. NobelPrize.org, "The Nobel Prize in Physics 1956": <https://www.nobelprize.org/prizes/physics/1956/summary/>
8. J. Bardeen and W. H. Brattain, "The Transistor, A Semi-Conductor Triode", *Physical Review* 74, no. 2 (1948): 230–231, doi:10.1103/PhysRev.74.230: <https://doi.org/10.1103/PhysRev.74.230>
