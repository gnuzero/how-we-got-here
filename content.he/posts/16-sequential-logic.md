---
title: "לוגיקה סדרתית"
weight: 16
date: 2026-11-06
draft: false
phase: "2 — פיזיקה והתקנים"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "משוב עושה זיכרון דו־יציב; פליפ־פלופים מופעלי־קצה עושים עיצוב סינכרוני ניתן לניהול — עד שחלון setup/hold תוחם את השעון"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

> **פרשנות (טענת הספר):** לוגיקה קומבינטורית היא פונקציה טהורה של הקלטים הנוכחיים — בלי זיכרון של העבר. מחשב זקוק ל*מצב*: אוגרים, מונה־תוכנית, תכני זיכרון שנשארים בין מחזורים. זה דורש משוב.

## זיכרון ממשוב

לפי הערות MIT OpenCourseWare (6.071J), מעגל של שני מהפכים במשוב הוא מעגל דו־יציב (bistable) עם שני מצבים יציבים; פליפ־פלופ Set-Reset (SR) נבנה משערי NOR (או NAND) עם משוב, וצירוף S=R=1 הוא מצב לא־מותר / לא־מוגדר בטבלת הפעולה. ([MIT OCW 6.071J, Sequential Logic](https://ocw.mit.edu/courses/6-071j-introduction-to-electronics-signals-and-measurement-spring-2006/d0a578bc6340f91188b1e3ac487b62ab_sequential_logic.pdf))

> **פרשנות (טענת הספר):** משרשרים שני שערי NOR (או NAND) — כל פלט מזין את קלט השני — ומקבלים שני מצבים יציבים. המעגל נשאר איפה שדחפתם אותו לאחרונה, כל עוד יש חשמל. זה זיכרון במובן הפיזיקלי: דו־יציבות, לא ״אחסון״ מופשט.

בהערות *Computation Structures* (MIT), תפס D (D latch) מתנהג כהתקן אחסון כש־G=0 וכמעגל קומבינטורי ״שקוף״ (transparent) כש־G=1: כש־G גבוה הפלט עוקב אחרי D, ומעבר ל־G=0 לוכד את הערך. ([MIT Computation Structures, Sequential Logic §8.2.1.1](https://computationstructures.org/notes/sequential_logic/notes.html)) בהערות הקורס של David Harris (Harvey Mudd, *CMOS VLSI Design* 4e, Lecture 11) תפס הוא רגיש־רמה (level-sensitive) — נקרא גם transparent latch / D latch — בעוד פליפ־פלופ מופעל־קצה. ([Harris (Harvey Mudd), CMOS VLSI Design 4e, Lecture 11](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf))

> **פרשנות (טענת הספר):** תפס SR לא־משוערי חי תמיד על הקלטים ויש לו צירוף אסור. עיצוב סינכרוני רוצה תפס משוערי (רגיש־רמה): כל עוד enable גבוה הוא שקוף; כש־enable יורד הוא מחזיק. שקיפות מפריעה כשרבים צריכים להתעדכן יחד.

**נסו עכשיו.** המעבדה למטה עדיין שער חי — החליפו קלטים ועקבו אחרי פלט שמשתנה *מיד*. זו תגובה קומבינטורית. הפוסט הזה הוא מה שקורה כשמחברים שערים בחזרה אל עצמם כדי שהפלט יוכל *להחזיק* אחרי שהקלט עוזב.

{{< lab type="breadboard" height="700" >}}

## פליפ־פלופ D: קצוות, לא רמות

לפי *Computation Structures*, פליפ־פלופ מופעל־קצה (edge-triggered) או master–slave נבנה משני תפסים בשרשרת כך שבכל ערך של השעון בדיוק אחד מהם שקוף והשני מחזיק; הטעינה מה־D אל הפלט מתרחשת על מעבר חיובי של ה־CLK. ([MIT Computation Structures, Sequential Logic](https://computationstructures.org/notes/sequential_logic/notes.html)) Harris מתאר את אותו מבנה: פליפ־פלופ נבנה כזוג תפסים גב־אל־גב (master–slave) ומופעל־קצה. ([Harris (Harvey Mudd), CMOS VLSI Design 4e, Lecture 11](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf))

> **פרשנות (טענת הספר):** הפלט משתנה רק בקצה שעון, לא בכל משך הפאזה הגבוהה (או הנמוכה). בין קצוות הפליפ־פלופ מתעלם מ־D ומחזיק. הפעלת־קצה היא מה שהופך עיצוב סינכרוני לניתן לניהול: כל פליפ־פלופ מתעדכן באותו קצה, אז חושבים צעד בדיד אחד בכל פעם במקום לרוץ אחרי אותות רציפים.

## Setup, Hold, ותקרת השעון

בהערות Harris ל־E85 / Digital Design (Lecture 5), זמן setup הוא הזמן לפני קצה השעון שבו הנתון חייב להיות יציב, וזמן hold הוא הזמן אחרי הקצה שבו הנתון חייב להישאר יציב; אם לא — עלולה להופיע מטאסטביליות (metastability). התקן דו־יציב כולל שני מצבים יציבים ומצב מטאסטבילי ביניהם; אם פליפ־פלופ נוחת במצב המטאסטבילי הוא עלול להישאר שם זמן לא־ידוע. ([Harris (Harvey Mudd), Digital Design / E85 Lecture 5](https://pages.hmc.edu/harris/class/e85/old/fall19/lect5.pdf)) *Computation Structures* דורש ש־D יהיה יציב ותקף למשך setup לפני מעבר G ו־hold אחריו. ([MIT Computation Structures, Sequential Logic §8.2.1.2](https://computationstructures.org/notes/sequential_logic/notes.html)) Harris ב־Lecture 11 נותן את אילוץ המקסימום לפליפ־פלופים: t_pd ≤ T_c − (t_setup + t_pcq) — תקופת השעון חייבת לכסות את התפשטות הלוגיקה הקומבינטורית ועוד השהיית setup של הפליפ־פלופ הבא. ([Harris (Harvey Mudd), CMOS VLSI Design 4e, Lecture 11](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf))

> **פרשנות (טענת הספר):** הפרת setup או hold אינה פדנטיות מספרית — היא הסיבה שיש לתדר שעון מרבי תקרה קשה. התקופה חייבת לכסות התפשטות קומבינטורית ועוד setup של הפליפ־פלופ הבא, עם מרווח. פרק מאוחר יותר על קיר מהירות השעון חוזר בדיוק לאילוץ הזה, כשהעלאת תדר פשוט הפסיקה לעבוד.

## מה זה פותח

> **פרשנות (טענת הספר):** פליפ־פלופים מופעלי־קצה הופכים לאוגרים, מונים, מכונות־מצבים — ובשלב הבא של הספר למונה־תוכנית ולאוגרי צינור שהופכים מעבד למכונה *סדרתית*. הבא: להתמחות באחסון דו־יציב לצפיפות — איפה ש־SRAM ו־DRAM נפרדים.

**הבא:** [היררכיית הזיכרון מתחילה]({{< relref path="17-the-memory-hierarchy-begins.md" lang="en" >}}) (באנגלית בינתיים)

## מקורות

1. MIT OpenCourseWare, 6.071J Introduction to Electronics, Signals, and Measurement — Sequential Logic (PDF): <https://ocw.mit.edu/courses/6-071j-introduction-to-electronics-signals-and-measurement-spring-2006/d0a578bc6340f91188b1e3ac487b62ab_sequential_logic.pdf>
2. MIT Computation Structures, Sequential Logic notes: <https://computationstructures.org/notes/sequential_logic/notes.html>
3. David Harris, Harvey Mudd College, *CMOS VLSI Design* 4e, Lecture 11 "Sequential Circuit Design" (PDF): <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf>
4. David Harris, Harvey Mudd College, Digital Design / E85 Lecture 5 (setup, hold, metastability) (PDF): <https://pages.hmc.edu/harris/class/e85/old/fall19/lect5.pdf>
