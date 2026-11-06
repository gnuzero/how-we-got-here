---
title: "من البوابات إلى المنطق التوافقي"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — الفيزياء والأجهزة"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "ركّب البوابات في جوامع ووحدة حساب ومنطق، ثم اصطدم بتأخير تموّج الحمل الذي يفرض بنى أفضل"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

*تفسيرنا (حجّة هذا الكتاب):* البوابة الواحدة تكاد لا تنفع وحدها. السلوك المفيد يبدأ حين تركّبها، وأول بنية نموذجية هي الجامع (adder): الموضع الذي تصبح فيه البوابات «الشيء الذي يجري الحساب داخل المعالج».

## من نصف الجامع إلى الجامع الكامل

دارة «نصف الجامع» (half adder) ليس لها إلا الدخلان A وB [1]. أما الجامع الكامل (full adder) فيأخذ إلى جانبهما حملًا داخلًا CI، ويُخرج المجموع S والحمل الخارج CO [1][2]. ويكتب مقرر جامعة كاليفورنيا في بيركلي علاقتيه هكذا: المجموع Si = Ai xor Bi xor Ci، والحمل الخارج Ci+1 = Ai Bi + Ai Ci + Bi Ci [2]، أي أن الحمل الخارج يكون 1 إذا كان اثنان على الأقل من المداخل الثلاثة 1. وإذا بنيت دارة تنفّذ عمودًا واحدًا من الجمع أمكنك بسرعة أن تبني دارة تجمع عددين من أربع بتات، بوصل الحمل الخارج من كل مرحلة بالحمل الداخل في التي تليها: هذا هو «جامع تموّج الحمل» (ripple-carry adder) [1].

وفي نصف الجامع يكون بت المجموع دالة «أو الحصرية» (XOR) للدخلين، ويكون الحمل 1 فقط حين يكون الدخلان كلاهما 1، أي AND لهما، وتنفّذه بوابة AND واحدة [4]. *تفسيرنا (حجّة هذا الكتاب):* لكن نصف الجامع لا يستطيع أن يستقبل حملًا *داخلًا* من بت أدنى. ولهذا نحتاج الجامع الكامل لنجمع بأي عرض نريد، موضعَ بتٍّ بعد موضع.

**جرّب الآن.** ما يزال المختبر أدناه يفتح على بوابة AND، وهي حمل نصف الجامع. اجعل الدخلين كليهما مرتفعين وراقب الخرج يرتفع؛ تلك البوابة الواحدة هي القيد الذي سيتموّج حين تصل الجوامع في القسم التالي.

{{< lab type="breadboard" height="700" >}}

## تموّج الحمل: بسيط، وبطيء لسبب

يقول مقرر MIT إن أسوأ مسار في جامع تموّج الحمل هو انتشار الحمل من البت الأدنى إلى البت الأعلى، كما حين تجمع 11…111 إلى 00…001، وإن زمن التأخير فيه يتناسب في أسوأ الحالات مع عدد البتات، أي Θ(N) [1]. ويعرض المقرر نفسه جامع «النظر المسبق للحمل» (carry-lookahead) الذي يحسب بتات الحمل كلها مسبقًا من إشارتي «التوليد» G = A&B و«التمرير» P = A^B [1]. ويشرح مقرر MIT 6.004 أن تنظيم هذا الحساب في شجرة يجعل التأخير من رتبة log(N)، وهو تحسّن كبير على رتبة N في جامع تموّج الحمل [3].

*تفسيرنا (حجّة هذا الكتاب):* حمل البت الأعلى لا يصح قبل أن يستقر حمل البت الذي تحته، وهذا ينتظر الذي تحته، وهكذا: الحمل *يتموّج*. في العرض الصغير لا بأس، أما في العرض الكبير فتلك السلسلة تحدد سرعة ساعة وحدة الحساب كلها. وهذا القيد هو بالضبط سبب أن المعالجات الحقيقية تضيف النظر المسبق للحمل وأقرباءه: بوابات أكثر، ومسار أقصر في أسوأ الحالات. وهو النمط نفسه في بقية هذا الكتاب: عنق زجاجة مادي يفرض البنية التالية.

## من الجوامع إلى وحدة حساب ومنطق بسيطة

يبيّن مقرر MIT أن الطرح يمكن أن يُنفَّذ بالجمع: A − B = A + (−B)، وفي تمثيل المتمم الثنائي ‎−B = ~B + 1‎، حيث ~ هو المتمم بتًّا بتًّا؛ ومن ذلك تُبنى وحدة حسابية تجمع وتطرح ويُختار فيها العمل بدخل تحكم [1].

*تفسيرنا (حجّة هذا الكتاب):* ضع مُجمِّعًا انتقائيًا (mux) أمام عتاد الجامع نفسه، فتختار بتات التحكم بين الجمع والطرح (جمع مع معامل معكوس وحمل داخل، أي إعادة استعمال الجامع) وAND وOR. كتلة واحدة، ومسارات توافقية عدة. الفكرة صغيرة، لكنها عمليًا أول لحظة تصبح فيها «البوابات» حسابَ المعالج.

*تفسيرنا (حجّة هذا الكتاب):* كل ما رأيناه حتى الآن توافقي: الخرج يعتمد على المداخل الحالية وحدها. أما تتابع العمليات فيحتاج إلى حالة تبقى عبر الزمن. وهذا هو موضوع الفصل التالي.

## المصادر

1. MIT, course 6.111 *Introductory Digital Systems Laboratory*, Fall 2008, Lecture 8, "Arithmetic Circuits" (half adder and full adder; ripple-carry adder and its worst-case delay; subtraction with two's complement; carry lookahead): <https://courses.csail.mit.edu/6.111/f2008/handouts/L08.pdf>
2. Randy H. Katz, University of California, Berkeley, CS 150, Spring 2001, "Chapter #5: Arithmetic Circuits" (lecture slides; full adder sum and carry equations): <https://people.eecs.berkeley.edu/~randy/Courses/CS150.S01/Lectures/09-Arith.pdf>
3. MIT OpenCourseWare, 6.004 *Computation Structures*, Spring 2017, lecture transcript on carry-lookahead adders: <https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/5ce748b04db04e59c66ac2c32c7b95f9_i1tUBZLWD3o.pdf>
4. Dana Angluin, Yale University, Computer Science 201a course notes, "A circuit for binary addition" (half adder: sum is exclusive-or, carry is AND): <https://zoo.cs.yale.edu/classes/cs201/topics/topic-addition-circuit.pdf>
