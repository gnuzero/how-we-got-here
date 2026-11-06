---
title: "שערי לוגיקה מטרנזיסטורים"
weight: 14
date: 2026-11-06
draft: false
phase: "2 — פיזיקה והתקנים"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS מצמד NMOS ו־PMOS כך ששער במנוחה אינו פותח נתיב סטטי — הטופולוגיה שהתרחבה"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS — Complementary Metal-Oxide-Semiconductor — היא טופולוגיית המעגל שמאחורי כמעט כל שבב דיגיטלי מודרני. לפי מוזיאון תולדות המחשב, במאמר כנס מ־1963 הראו C. T. Sah ו־Frank Wanlass ממעבדת המחקר של Fairchild שמעגלי לוגיקה המשלבים טרנזיסטורי MOS בערוץ p ובערוץ n בתצורת סימטריה משלימה צרכו קרוב לאפס הספק במצב המתנה; Wanlass רשם פטנט על הרעיון הידוע היום כ־CMOS, והעמוד מתאר את CMOS כטכנולוגיית הייצור הדומיננטית של היום. ([Computer History Museum, Silicon Engine — Complementary MOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) בריטניקה מתארת CMOS כטכנולוגיה למעגלים משולבים המשתמשת בזוגות של MOSFET מסוג n ומסוג p הפועלים באופן משלים, כך שרק אחד בזוג דולק בכל רגע — ומכאן צריכת הספק נמוכה מאוד, במיוחד במצב המתנה; היא מציינת ש־CMOS הפכה לטכנולוגיה המועדפת ליישומים דיגיטליים. ([Britannica, "complementary metal-oxide semiconductor"](https://www.britannica.com/technology/complementary-metal-oxide-semiconductor))

> **פרשנות (טענת הספר):** מצמדים NMOS עם PMOS כך שבמצב יציב בדיוק אחד מוליך. זרם סטטי קרוב־לאפס ברמת ההתקן הופך למשפחת לוגיקה שניתן להרכיב ממנה.

## השער ההופך: יחידת CMOS הקטנה ביותר

בריטניקה מתארת זוג משלים: כשאחד הטרנזיסטורים נדלק, השני נכבה — ולהפך. ([Britannica, "complementary metal-oxide semiconductor"](https://www.britannica.com/technology/complementary-metal-oxide-semiconductor)) מוזיאון תולדות המחשב מדגיש שתצורת הסימטריה המשלימה צרכה קרוב לאפס הספק במצב המתנה. ([Computer History Museum, Silicon Engine — Complementary MOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/))

> **פרשנות (טענת הספר):** PMOS למעלה (אל מסילת האספקה), NMOS למטה (אל האדמה); השערים מחוברים כקלט, הניקוזים כפלט. PMOS מוליך כששערו *נמוך*; NMOS כששערו *גבוה*. קלט גבוה → NMOS דולק, PMOS כבוי → הפלט מוארק. קלט נמוך → PMOS דולק, NMOS כבוי → הפלט אל המסילה. בכל מצב יציב אחד דולק והשני כבוי — לעולם אין נתיב סטטי ממסילה לאדמה חוץ מרגע המיתוג הקצר.

## למה זה פותר את בעיית ההספק

לפי מוזיאון תולדות המחשב, כשמעצבים ניצלו סקיילינג כדי לארוז מאות אלפי טרנזיסטורים על שבב, CMOS סיפקה את הפתרון הטוב ביותר לניהול צפיפות ההספק. ([Computer History Museum, Silicon Engine — Complementary MOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) דוח יישומים של Texas Instruments על צריכת הספק ב־CMOS כותב שלהתקני CMOS יש צריכת הספק סטטית נמוכה מאוד כתוצאה מזרם דליפה, ושבמעבר בתדר גבוה צריכה דינמית — טעינה ופריקה של קיבול עומס — יכולה לתרום משמעותית לצריכה הכוללת. ([Texas Instruments, "CMOS Power Consumption and Cpd Calculation"](https://www.ti.com/lit/an/scaa035b/scaa035b.pdf))

> **פרשנות (טענת הספר):** לוגיקת NMOS ישנה (משיכה־למטה ועם עומס) שואבת זרם כל עוד הפלט יושב נמוך. CMOS לא. ההספק מושקע כמעט כולו במעברים — טעינה ופריקה של קיבול כניסת השער הבא — ולכן הוא גדל עם *פעילות* המיתוג ועם *התדר*, לא עם כמה שערי־מנוחה יש על הגביש. ה־MOSFET אפשר זרם סטטי קרוב־לאפס ברמת ההתקן; CMOS הוא התרגיל המעגלי שהופך זאת לכל שער שיבוא.

## NAND, NOR והשלמות הפונקציונלית

קורס מבני חישוב של MIT (computationstructures.org) מציין שמבין שש־עשרה הפונקציות הדו־קלטיות, רק שש ניתנות ליישום ישיר כשערי CMOS בודדים — ובכללן NOR ו־NAND — ושפעולות NAND ו־NOR הדו־קלטיות, כל אחת בנפרד, הן אוניברסליות: אפשר לממש וגם (AND), או (OR) ולא (NOT) באמצעות שערי NAND בלבד או NOR בלבד, ולכן מערכות קומבינטוריות שרירותיות ניתנות לבנייה ממלאי של שערי NAND או NOR דו־קלטיים בלבד. ([MIT Computation Structures, Combinational Logic](https://computationstructures.org/notes/combinational_logic/notes.html)) IEEE Technology Navigator כותב ש־NAND ו־NOR שלמים פונקציונלית, ושב־CMOS שער NAND בעל n קלטים ממומש כרשת משיכה־למטה של n טרנזיסטורי MOSFET בערוץ n בטור, עם סט מקביל של MOSFET בערוץ p כרשת משיכה־למעלה; הסימטריה המשלימה מבטיחה שבמצב יציב בדיוק אחת מהרשתות מוליכה ומגבילה זרם סטטי. ([IEEE Technology Navigator, "Logic gates"](https://technav.ieee.org/topic/logic-gates/))

> **פרשנות (טענת הספר):** שער NAND דו־קלטי ב־CMOS שם NMOS בטור (שניהם גבוהים כדי למשוך נמוך) ו־PMOS במקביל (כל נמוך מושך גבוה). NOR הוא המראה של זה. כל אחד מהם לבדו שלם פונקציונלית — ולכן ספריות תאים סטנדרטיות נשענות חזק על תאי NAND מאופיינים היטב: מרכיבים אותם ומקבלים מחברים, קבצי רגיסטרים, מעבדים שלמים.

**נסו עכשיו.** המעבדה למטה נפתחת על שער וגם (AND) — החליפו את שני הקלטים וצפו בפלט. NAND ו־NOR הם היסודיים של CMOS שלמעלה; וגם (AND) הוא מה שמקבלים כשמרכיבים אותם. געו בשער לפני שהפוסט הבא בונה מהם מחברים.

{{< lab type="breadboard" height="700" >}}

## לאן זה הולך

> **פרשנות (טענת הספר):** כל מבנה מעבד בשלב הבא של השדרה — מחבר־מלא, ALU, קובץ רגיסטרים — הוא הרכבה של השערים האלה. הבא: המבנה האמיתי הראשון, לוגיקה קומבינטורית, החל במחבר.

**הבא:** [ממערכות שערים ללוגיקה קומבינטורית]({{< relref "15-from-gates-to-combinational-logic.md" >}})

## מקורות

1. Computer History Museum, Silicon Engine, "1963: Complementary MOS Circuit Configuration is Invented": <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
2. *Encyclopaedia Britannica*, "complementary metal-oxide semiconductor": <https://www.britannica.com/technology/complementary-metal-oxide-semiconductor>
3. Texas Instruments, "CMOS Power Consumption and Cpd Calculation" (application report SCAA035B): <https://www.ti.com/lit/an/scaa035b/scaa035b.pdf>
4. MIT Computation Structures (Steve Ward), Combinational Logic notes: <https://computationstructures.org/notes/combinational_logic/notes.html>
5. IEEE Technology Navigator, "Logic gates": <https://technav.ieee.org/topic/logic-gates/>
