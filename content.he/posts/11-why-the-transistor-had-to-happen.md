---
title: "למה הטרנזיסטור היה חייב לקרות"
weight: 11
date: 2026-11-06
draft: false
phase: "1 — יסודות: ממכניקה למחשוב בשפופרות ריק"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "גודל, הספק, אמינות — שלוש תקרות של שפופרת הריק שהפכו מיתוג מוצק־מצב לבלתי־נמנע"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

> **פרשנות (טענת הספר):** אחרי ששפופרת הריק כבר הוכיחה את הרעיון — מיתוג אלקטרוני, בלי חלקים נעים, במהירות אלקטרונית — מה שלא פתרה הוא *היקף*. כל שפופרת נוספת הוסיפה חום, הספק נוסף, ועוד הזדמנות לכשל. הטרנזיסטור לא החליף את השפופרת כי היה גאדג׳ט נאה — הוא החליף אותה כי לפיזיקה של השפופרת עצמה היתה תקרה קשה, והמחשוב היה חייב לעבור אותה.

בריטניקה כותבת ששפופרות אלקטרונים מגושמות ושבירות, צורכות כמויות גדולות של הספק לחימום פילמנטי הקתודה ליצירת זרמי אלקטרונים, ולעיתים קרובות נשרפות אחרי כמה אלפי שעות פעולה; ממסרים אלקטרו־מכניים איטיים ויכולים להיתקע במצב פתוח או סגור; וליישומים שדרשו אלפי שפופרות או מתגים — כמו מערכות טלפון ארציות ומחשבים דיגיטליים אלקטרוניים ראשונים — נדרשה ערנות מתמדת מול התקלות. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) ETHW מוסיף שעד המצאת הטרנזיסטור ב־1947 היתה שפופרת האלקטרונים הבסיס לכמעט כל התקן אלקטרוני, ושרוב התפקידים האלה נעשים היום במוליכים־למחצה קומפקטיים ועמידים יותר. ([ETHW, "Electron (or Vacuum) Tubes"](https://ethw.org/Electron_(or_Vacuum)_Tubes))

## שלושה אילוצים, צוואר־בקבוק אחד

**גודל.** שפופרת ריק זקוקה למעטפת זכוכית מרוקנת גדולה מספיק להפריד קתודה, רשת ואנודה, וחזקה מספיק להחזיק ריק. יש רצפה לכמה אפשר להקטין אותה. לפי בריטניקה, הטרנזיסטור קטן בגודלו, מייצר פחות חום, אמין יותר וצורך פחות הספק — וזה מה שאפשר פריצת־דרך במזעור מעגלים מורכבים; עד סוף שנות ה־1950 הוא דחק את שפופרת האלקטרונים ביישומים רבים. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

> **פרשנות (טענת הספר):** טרנזיסטור הוא מוצק־מצב — בלי ריק, בלי מעטפת זכוכית — וגודלו נקבע בדיוק הייצור, לא בפיזיקה של תא מרוקן. זו עקומת התרחבות אחרת, והיא זו שבסופו של דבר שמה מספר עצום של טרנזיסטורים על גביש בודד בהמשך השדרה.

**הספק.** קתודה של שפופרת חייבת להיות מחוממת לפליטה תרמיונית — המחמם שואב זרם בין אם השפופרת ממתגת ובין אם לא. בריטניקה מדגישה את צריכת ההספק הגדולה לחימום הפילמנטים. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) בקנה־מידה של מכונה כמו ה־ENIAC, Penn Engineering נותנת כ־18,000 שפופרות ריק ו־150 קילו־ואט, ואילו נספח ה־Ordnance Corps באתר ARL נותן 17,468 שפופרות ו־174 קילו־ואט. ([Penn Engineering, "ENIAC"](https://www.engineering.upenn.edu/about/history-heritage/eniac/); [ARL / Ordnance Corps Appendix I — ENIAC](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html))

> **פרשנות (טענת הספר):** לטרנזיסטור אין פילמנט מחמם; הוא ממתג בוויסות אזור דילול או ערוץ, עם הספק המתנה זניח. זו הסיבה הגדולה ביותר שמכונות מטרנזיסטורים יכלו להיות צפופות בהרבה בלי להימס.

**אמינות.** בריטניקה קושרת את כשל השפופרות לשריפת פילמנטים ולשבירות המעטפת אחרי אלפי שעות; הטרנזיסטור, לעומת זאת, אמין יותר וצורך פחות הספק. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

> **פרשנות (טענת הספר):** לטרנזיסטורים מוצק־מצב אין פילמנט ואין אטימת־ריק לתחזק, ולכן הם לא חולקים את אותו מנגנון כשל יומיומי. לטרנזיסטורים מוקדמים היו בעיות משלהם (אריזה, זיהום), אבל *מנגנון* הכשל לא היה אפוי בפעולה השוטפת כמו שריפת פילמנט בשפופרת.

## המספרים זה לצד זה

בריטניקה כותבת ששפופרות אלקטרונים לעיתים קרובות נשרפות אחרי כמה אלפי שעות פעולה, ושמעגלים משולבים מודרניים מכילים לעיתים קרובות מיליארדי טרנזיסטורים זעירים על פני השטח שלהם. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) מוזיאון תולדות המחשב מתאר את ה־ENIAC עם כ־18,000 שפופרות ריק. ([Computer History Museum, Computers timeline](https://www.computerhistory.org/timeline/computers/))

> **פרשנות (טענת הספר):** שפופרת מפזרת חום ברציפות (בעיקר מהמחמם); טרנזיסטור מוקדם מפזר חלק קטן מזה, בלי אובדן מחמם — וקריטי: גודלו והספקו *יורדים* כשהייצור משתפר, בעוד שאלה של שפופרת לא. האסימטריה הזאת מצטברת. מספר קטן של שפופרות ניתן לניהול; סדר הגודל של ה־ENIAC הוא סיוט תחזוקה. אותו סדר־גודל של טרנזיסטורים הוא שגיאת־עיגול על גביש מודרני שמחזיק מיליארדים.

## מה בא אחר כך

לפי ETHW (לוחית ה־IEEE Milestone על הטרנזיסטור הראשון), Julius Edgar Lilienfeld רשם בהצלחה מספר פטנטים על תצורות טרנזיסטור שדה (field-effect) החל מ־1925 ואל תוך שנות ה־1930, ואין אינדיקציה שהפיק אי־פעם דגמים שעבדו. ([ETHW, "Milestones: Invention of the First Transistor… 1947"](https://ethw.org/Milestones:Invention_of_the_First_Transistor_at_Bell_Telephone_Laboratories,_Inc.,_1947))

לפי מוזיאון תולדות המחשב (Silicon Engine), ב־16 בדצמבר 1947 הגיעו John Bardeen ו־Walter Brattain במעבדות בל למגבר מוליך־למחצה ראשון שעבד — טרנזיסטור מגע־נקודה על גרמניום; ב־23 בדצמבר הדגימו אותו לבכירי המעבדה; בל הכריזה עליו בפומבי ב־30 ביוני 1948. ([Computer History Museum, Silicon Engine — Point-Contact Transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)) לוחית ה־IEEE Milestone ב־ETHW מתארת שבאותו אתר, מ־17 בנובמבר עד 23 בדצמבר 1947, גילו Brattain ו־Bardeen — בהנחיית William B. Shockley — את אפקט הטרנזיסטור ופיתחו והדגימו טרנזיסטור מגע־נקודה מגרמניום. ([ETHW, "Milestones: Invention of the First Transistor… 1947"](https://ethw.org/Milestones:Invention_of_the_First_Transistor_at_Bell_Telephone_Laboratories,_Inc.,_1947)) בריטניקה מייחסת את ההמצאה ל־1947–48 לשלושתם במעבדות בל, וכותבת שעד סוף שנות ה־1950 דחק הטרנזיסטור את שפופרת האלקטרונים ביישומים רבים. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) לפי עמוד CHM Revolution על המצאת הטרנזיסטור, ב־1948 המציא Shockley את טרנזיסטור הצומת (junction transistor) העמיד יותר, שנבנה ב־1951. ([Computer History Museum, "Inventing the Transistor"](https://www.computerhistory.org/revolution/story/273))

> **פרשנות (טענת הספר):** שום דבר מזה לא אומר שההתקן הגיע מוגמר. הפיזיקה של *איך* הוא ממתג — מוליכים־למחצה, סגסוג, פערים אנרגטיים — עדיין היתה צריכה להיות מובנת ומהונדסת. זה נושא אחר מלמה שהוא היה חייב לקרות. השלב הבא בשדרה מתחיל שם: מהו מוליך־למחצה, למה סיליקון הפך לחומר הבחירה, ואיך סגסוג יוצר את המתג הניתן־לשליטה ששפופרות לעולם לא יכלו להיות.

**דלת החוצה:** מאמרי הטרנזיסטור של Bardeen, Brattain ו־Shockley במעבדות בל (סוף שנות ה־1940 / ראשית שנות ה־1950) — הפיזיקה הראשונית של המתג מוצק־המצב ששבר את תקרת השפופרת.

**הבא:** [מוליכים־למחצה מהעקרונות הראשונים]({{< relref "12-semiconductors-from-first-principles.md" >}})

## מקורות

1. *Encyclopaedia Britannica*, "transistor": <https://www.britannica.com/technology/transistor>
2. Engineering and Technology History Wiki (IEEE), "Electron (or Vacuum) Tubes": <https://ethw.org/Electron_(or_Vacuum)_Tubes>
3. University of Pennsylvania, Penn Engineering, "ENIAC": <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
4. U.S. Army / ARL mirror, *Electronic Computers Within The Ordnance Corps*, Appendix I — ENIAC (sections NUMBER OF CIRCUIT ELEMENTS; PHYSICAL FACTORS): <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
5. Computer History Museum, "Computers" timeline (Public unveiling of ENIAC): <https://www.computerhistory.org/timeline/computers/>
6. Computer History Museum, Silicon Engine, "1947: Invention of the Point-Contact Transistor": <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
7. Engineering and Technology History Wiki (IEEE), "Milestones: Invention of the First Transistor at Bell Telephone Laboratories, Inc., 1947": <https://ethw.org/Milestones:Invention_of_the_First_Transistor_at_Bell_Telephone_Laboratories,_Inc.,_1947>
8. Computer History Museum, "Inventing the Transistor" (CHM Revolution): <https://www.computerhistory.org/revolution/story/273>
