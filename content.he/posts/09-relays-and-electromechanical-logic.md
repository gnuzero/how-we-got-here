---
title: "ממסרים ולוגיקה אלקטרו־מכנית"
weight: 9
date: 2026-11-06
draft: false
phase: "1 — יסודות: ממכניקה למחשוב בשפופרות ריק"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "הממסר הוכיח שלוגיקה בינארית עובדת — ושתנועת מתכת לא מדביקה את הקצב"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

ממסר (relay) הוא כמעט מביך בפשטותו: אלקטרומגנט, עוגן (armature) עם קפיץ, וסט מגעים. מזינים את הסליל — העוגן נמשך — המגעים נפתחים או נסגרים. לפי בריטניקה, ממסר הוא התקן אלקטרומגנטי לשליטה מרחוק או אוטומטית בזרם במעגל אחד באמצעות שינוי זרם במעגל אחר (המעורר); דוגמה מוקדמת היא ממסר הטלגרף, שבו הזרם המעורר הזיז עוגן עם נקודת מגע לסגירת מעגל; ממסרי טלפון עדיין בשימוש נרחב; וממסרים היו חשובים בתכנוני מחשב מוקדמים לפני שהוחלפו בשפופרות ריק המהירות יותר ואחר כך בטרנזיסטורים. ([Britannica, "relay"](https://www.britannica.com/technology/relay-electronics))

## שני תפקידים לאותו חלק

בפרק הזה **ממסר** הוא מתג: סליל חלש פותח או סוגר מעגל חזק יותר, ואחר כך הוא הופך לבניין־יסוד של AND, OR ו־NOT. לתפקידו על קו טלגרף ראו [איך המסר נדד]({{< relref "03-how-the-message-travelled" >}}).

עכשיו מחברים את המתג ללוגיקה.

## ממסרים כלוגיקה

> **פרשנות (טענת הספר):** מחברים שני מגעים בטור — יש AND: זרם רק אם *שניהם* סגורים. מחברים במקביל — יש OR. מוסיפים מגע סגור־במנוחה — מקבלים NOT. משלבים אותם ואפשר לבנות כל פונקציה בוליאנית — מחברים, משווים, מפענחים — אותן משפחות לוגיקה ששלב 2 בונה בסיליקון, כאן בחומרה אלקטרו־מכנית.

מרכזיות טלפון כבר היו מלאות במיתוג אלקטרו־מכני בראשית המאה ה־20. לפי ETHW (IEEE), מתג Strowger האוטומטי נכנס לשימוש מסחרי סביב 1900, ובהמשך פאנל, רוטרי וקרוסבר אוטומטו את מערכת הטלפון; מיתוג טלפון אוטומטי היה דוגמה מוקדמת ונרחבת לאוטומציה של שירות אלקטרו־מכני. ([ETHW, "Electromechanical Telephone-Switching"](https://ethw.org/Electromechanical_Telephone-Switching)) מוזיאון המדע מתאר את פתיחת המרכזייה האוטומטית הראשונה ברשת הציבורית בבריטניה באפסום במאי 1912, וכותב שמערכות Strowger והבאות אחריהן היו התקנים אלקטרו־מכניים עם חלקים נעים. ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/goodbye-hello-girls-automating-telephone-exchange)) מוזיאון תולדות המחשב מציין שב־1939 בנה Konrad Zuse בגרמניה את מחשב ה־Z2 גם הוא מממסרי חברת טלפון, ושג׳ורג׳ סטיביץ (George Stibitz) בבֶּל השתמש בממסרים להדגמת מחבר (adder) ולמחשבון ממסרים. ([Computer History Museum, Computers timeline](https://www.computerhistory.org/timeline/computers/))

> **פרשנות (טענת הספר):** הבסיס התעשייתי הזה — ייצור המוני, מוכר, אמין־דיו — הוא סיבה גדולה לכך שמחשבי ממסרים בכלל היו ניתנים לבנייה.

ה־Z3 של Konrad Zuse (1941) הוא הדוגמה הבולטת: לפי מוזיאון תולדות המחשב הוא משתמש בכ־2,300 ממסרים, מבצע חשבון נקודה־צפה בינארי, ואורך מילה 22 סיביות; שימש לחישובים אווירודינמיים ונהרס בהפצצה על ברלין בסוף 1943; שחזור שזירה פיקח עליו בשנות ה־1960 מוצג ב־Deutsches Museum במינכן. ([Computer History Museum, Computers timeline](https://www.computerhistory.org/timeline/computers/)) Deutsches Museum מתאר את 1941 כשנה שבה יצר Zuse את המחשב הבינארי התכנותי הראשון בעולם, ה־Z3, ופותח את עידן המחשב האוניברסלי במכונה התכנותית הפונקציונלית הראשונה שלו. ([Deutsches Museum, Computers](https://www.deutsches-museum.de/en/museumsinsel/ausstellung/computers))

לעיתים קרובות מכנים את ה־Z3 המחשב הדיגיטלי התכנותי, האוטומטי לחלוטין, הראשון שעבד — עם סייג שכדאי לנקוב בשמו: ל־Z3 לא היה סעיף־תנאי (conditional branching) אמיתי. במאמר ב־*IEEE Annals of the History of Computing* (1998) הראה Raúl Rojas שבאופן עקרוני אפשר לדמות מכונת טיורינג בעלת סרט סופי בגודלו באמצעות לולאת תוכנית אחת של פעולות החשבון של ה־Z3 — בלי פקודת ענף מותנה בזמן ריצה — ולכן ה־Z3 אוניברסלי לפחות בעיקרון; מחיר הגישה הוא הגדלה עצומה של תוכנית הסרט המנוקב. ([Rojas, "How to make Zuse's Z3 a universal computer," IEEE](https://ieeexplore.ieee.org/document/707574))

**דלת החוצה:** Raúl Rojas, "How to Make Zuse's Z3 a Universal Computer" (1998) — הטיעון הזהיר לאוניברסליות של ה־Z3 ולמגבלותיו.

## למה ממסרים היו איטיים מדי

> **פרשנות (טענת הספר):** זמן המיתוג של ממסר נשלט על ידי תנועה *מכנית*: העוגן צריך לזוז. מול מיתוג אלקטרוני מודרני הפער אינו הדרגתי; הוא קיומי. אי אפשר לבנות מחשב מודרני שימושי ממתגים מכניים, גם אם הם מתוכננים היטב.

> **פרשנות (טענת הספר):** בעיה שנייה: מגעים נשחקים. כל סגירה היא מתכת על מתכת — קשתות, שקעים, ובסוף כשל. ככל שגדל מספר הממסרים, גדל גם מספר נקודות השחיקה. אמינות ומהירות נלחמו באותו אילוץ: חלקים נעים.

בריטניקה מסכמת את כיוון ההחלפה ההיסטורי בלי המספרים האלה: ממסרים היו חשובים בתכנונים מוקדמים לפני שהוחלפו בשפופרות ריק מהירות יותר ואחר כך בטרנזיסטורים. ([Britannica, "relay"](https://www.britannica.com/technology/relay-electronics))

## הגשר לאלקטרוניקה

> **פרשנות (טענת הספר):** ממסרים הוכיחו את הארכיטקטורה: ייצוג בינארי, שערי בוליאניים ממתגים פשוטים, תוכניות כנתונים. מה שלא יכלו להוכיח הוא שהארכיטקטורה יכולה לרוץ *מהר*. הפתרון היה להחליף את המתג המכני במשהו שמשנה מצב בתנועת אלקטרונים במקום מתכת — שפופרת הריק, במחיר של הספק וחום אדירים. זהו הוויתור הבא.

**הבא:** [עידן שפופרת הריק]({{< relref path="10-the-vacuum-tube-era.md" lang="en" >}}) (באנגלית בינתיים)

## מקורות

1. *Encyclopaedia Britannica*, "relay": <https://www.britannica.com/technology/relay-electronics>
2. Engineering and Technology History Wiki (IEEE), "Electromechanical Telephone-Switching": <https://ethw.org/Electromechanical_Telephone-Switching>
3. Science Museum, "Goodbye to the hello girls: automating the telephone exchange": <https://www.sciencemuseum.org.uk/objects-and-stories/goodbye-hello-girls-automating-telephone-exchange>
4. Computer History Museum, "Computers" timeline (entries on Stibitz Model K / Zuse Z2–Z3): <https://www.computerhistory.org/timeline/computers/>
5. Deutsches Museum, "Computers": <https://www.deutsches-museum.de/en/museumsinsel/ausstellung/computers>
6. Raúl Rojas, "How to make Zuse's Z3 a universal computer," *IEEE Annals of the History of Computing* 20, no. 3 (1998): <https://ieeexplore.ieee.org/document/707574>
