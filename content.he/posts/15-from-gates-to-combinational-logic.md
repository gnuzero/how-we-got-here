---
title: "ממערכות שערים ללוגיקה קומבינטורית"
weight: 15
date: 2026-11-06
draft: false
phase: "2 — פיזיקה והתקנים"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "מרכיבים שערים למחברים ול־ALU — ואז פוגשים את עיכוב נחשול־הנשא שמאלץ מבנים טובים יותר"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

> **פרשנות (טענת הספר):** שער בודד כמעט חסר־תועלת לבדו. התנהגות שימושית מתחילה כשמרכיבים אותם — והמבנה הקנוני הראשון הוא המחבר: המקום שבו שערים הופכים ל״הדבר שעושה חשבון בתוך מעבד.״

## מחצית־מחבר למחבר מלא

לפי IEEE Technology Navigator, מחצית־מחבר (half adder) מקבלת שני קלטי סיבית A ו־B ומייצרת סיבית סכום באמצעות שער XOR וסיבית נשא באמצעות שער AND; אין לה קלט לנשא משלב קודם, ולכן השימוש בה מוגבל בעיקר לסיבית הפחות־משמעותית. המחבר המלא (full adder) מרחיב לשלושה קלטים — A, B ונשא־נכנס (C-in) — ומייצר סכום ונשא־יוצא; אפשר לבנות אותו משתי מחציות־מחבר ושער OR, או ישירות כמעגל רוב־קול של שלושה קלטים. ([IEEE Technology Navigator, "Adders"](https://technav.ieee.org/topic/adders/)) בהערות הקורס של David Harris (Harvey Mudd College, *CMOS VLSI Design* 4e, Lecture 17 "Adders") מופיעים אותם יחסים: במחצית־מחבר S = A⊕B ו־Cout = AB; במחבר מלא S = A⊕B⊕C ו־Cout = MAJ(A,B,C); ו־carry-ripple הוא שרשור מחברים מלאים. ([Harris (Harvey Mudd), CMOS VLSI Design 4e, Lecture 17](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf)) מסמך אדריכלות Aries ב־ETH Zurich מתאר את מחצית־המחבר כשני קלטי סיבית שסכומם מחושב ב־XOR ואת הנשא־יוצא כהצפה כששניהם 1, ואת המחבר המלא כמחצית־מחבר משופרת עם נשא־נכנס שמאפשרת שרשור. ([ETH Zurich IIS, Aries §6.1.1](https://iis-people.ee.ethz.ch/~kgf/aries/6.html))

> **פרשנות (טענת הספר):** משרשרים Cout של שלב אחד אל Cin של הבא ואפשר להוסיף רוחב שרירותי, עמדה־סיבית אחת בכל פעם.

**נסו עכשיו.** המעבדה למטה עדיין נפתחת על שער AND — זה הנשא של מחצית־המחבר. החליפו את שני הקלטים לגבוה ועקבו אחרי הפלט הגבוה; השער הבודד הזה הוא האילוץ שינחשול כשתשרשרו מחברים בסעיף הבא.

{{< lab type="breadboard" height="700" >}}

## נחשול־נשא: פשוט, איטי מסיבה

לפי IEEE Technology Navigator, גישת ה־ripple-carry משרשרת n מחברים מלאים כך שכל שלב חייב לחכות לנשא של הקודם לפני החישוב; עיכוב ההתפשטות גדל ליניארית עם מספר הסיביות והופך לצוואר־בקבוק בנתיבי נתונים רחבים; מחברי carry-lookahead מחשבים את אותות הנשא לכל העמדות במקביל באמצעות מונחי generate ו־propagate ומקטינים את עיכוב המקרה הגרוע מ־O(n) ל־O(log n). ([IEEE Technology Navigator, "Adders"](https://technav.ieee.org/topic/adders/)) ETH Zurich מתאר את אותו סידור כ־Ripple Carry Adder: אף שהנתונים מתקבלים במקביל, הפעולה סדרתית כי הוספת הסיבית ה־i זקוקה ל־Carry-out של ה־(i−1); העיכוב במקרה הגרוע משוער כ־n השהיות של מחבר מלא; וחיסרון רציני הוא שהעיכוב גדל ליניארית עם אורך הסיביות. ([ETH Zurich IIS, Aries §6.1.2–6.1.3](https://iis-people.ee.ethz.ch/~kgf/aries/6.html))

> **פרשנות (טענת הספר):** שרשרת מחברים מלאים עושה מחבר־נחשול. ברוחב צר זה סביר; ברוחב מעבד מודרני השרשרת קובעת כמה מהר כל ה־ALU יכול להסתובב. אילוץ העיכוב הזה הוא בדיוק למה שמעבדים אמיתיים מוסיפים carry-lookahead (ובני־מינו): יותר שערים, נתיב מקרה־גרוע קצר יותר. אותה תבנית כמו בשאר הספר — צוואר־בקבוק פיזיקלי מאלץ את הארכיטקטורה הבאה.

## ממחברים ל־ALU פשוט

בריטניקה מגדירה את יחידת החשבון והלוגיקה (ALU) כרכיב מפתח במעבד המבצע פעולות חשבון ולוגיקה על מספרים בינאריים; בחלק מהמעבדים היא מחולקת ליחידת חשבון (חיבור, חיסור והשוואות בוליאניות) וליחידת לוגיקה (OR, AND, NOT); ה־ALU הוא מעגל קומבינטורי — הפלט תלוי רק בנתוני הקלט — והקלט מהיחידה השולטת כולל קוד פעולה (opcode) המציין איזו פעולה לבצע. ([Britannica, "arithmetic logic unit"](https://www.britannica.com/technology/arithmetic-logic-unit)) בהערות הקורס של Allan Gottlieb (NYU, Computer Architecture / Computer Systems Design, פרק 4 / הרצאה 9) בונים ALU של סיבית אחת שמחשב תמיד AND, OR וחיבור (דרך מחבר מלא), ואז בוחרים את הפעולה באמצעות מרבב (mux): מחשבים תמיד את X ואת Y, מכניסים את שניהם למרבב, ומשתמשים בתנאי הבחירה כקו־הבחירה; אחר כך מוסיפים חיסור כחיבור עם B הפוך ועם נשא־נכנס 1. ([Gottlieb (NYU), Computer Architecture notes, §4.5 / Lecture #9](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/chapters/chapter-4.html))

> **פרשנות (טענת הספר):** שמים מרבב לפני אותה חומרת מחבר: סיביות בקרה בוחרות חיבור, חיסור (חיבור עם אופרנד הפוך ועם Cin — שימוש חוזר במחבר), וגם (AND), או (OR). בלוק אחד, כמה נתיבים קומבינטוריים. מושגית קטן; מעשית הרגע הראשון שבו ״שערים״ הופכים לחשבון של מעבד.

> **פרשנות (טענת הספר):** הכול עד כאן קומבינטורי — פלטים תלויים רק בקלטים הנוכחיים. רצף פעולות זקוק למצב שנשמר לאורך זמן. זה הפוסט הבא.

**הבא:** [לוגיקה סדרתית]({{< relref "16-sequential-logic.md" >}})

## מקורות

1. IEEE Technology Navigator, "Adders": <https://technav.ieee.org/topic/adders/>
2. David Harris, Harvey Mudd College, *CMOS VLSI Design* 4e, Lecture 17 "Adders" (PDF): <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf>
3. ETH Zurich, Integrated Systems Laboratory, Aries documentation §6 (Adder Blocks): <https://iis-people.ee.ethz.ch/~kgf/aries/6.html>
4. *Encyclopaedia Britannica*, "arithmetic logic unit": <https://www.britannica.com/technology/arithmetic-logic-unit>
5. Allan Gottlieb, NYU, Computer Architecture course notes, Chapter 4 / Lecture #9 (Constructing an ALU): <https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/chapters/chapter-4.html>
