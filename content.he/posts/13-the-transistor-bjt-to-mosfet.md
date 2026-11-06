---
title: "הטרנזיסטור: מ־BJT ל־MOSFET"
weight: 13
date: 2026-11-06
draft: false
phase: "2 — פיזיקה והתקנים"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "BJT הנשלט בזרם בזבז הספק במנוחה; MOSFET הנשלט במתח אפשר צפיפות"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

> **פרשנות (טענת הספר):** שתי משפחות התקנים נקראות שתיהן ״טרנזיסטורים.״ הן ממתגות על פיזיקה שונה — ורק אחת מהן מתרחבת למספר העצום של התקנים על גביש מודרני.

## BJT: זרם שולט בזרם

לפי בריטניקה, לטרנזיסטור יש בדרך כלל שלושה חיבורים חשמליים — פולט (emitter), קולט (collector) ובסיס (base) — או, ביישומי מיתוג מודרניים, מקור (source), ניקוז (drain) ושער (gate); אות חשמלי על הבסיס (או השער) משפיע על יכולת חומר המוליך־למחצה להוליך זרם בין הפולט (או המקור) לקולט (או הניקוז). ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) בריטניקה מבחינה בין טרנזיסטורים דו־קוטביים (bipolar), המשתמשים גם בחורים וגם באלקטרונים להולכה ועם אזורים בשם פולט, בסיס וקולט, לבין טרנזיסטורי שדה (FET), ובכללם MOSFET, עם מקור, ניקוז ושער; הדו־קוטביים מהירים יותר מ־FET אך צורכים יותר זרם, בעוד ש־FET / MOSFET נשלטים במתח ולא בזרם. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

HyperPhysics מסביר שטרנזיסטור הצומת (junction transistor) הנפוץ סובל מאימפדנס כניסה נמוך כי הבסיס הוא כניסת האות והדיודה בסיס־פולט מוטית קדימה; לעומת זאת, ב־FET / JFET צומת הכניסה מוטית לאחור ולכן אימפדנס הכניסה גבוה מאוד. ([HyperPhysics, "Field Effect Transistors"](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fet.html))

> **פרשנות (טענת הספר):** בטרנזיסטור צומת דו־קוטבי (NPN: פולט N, בסיס P, קולט N) זרם בסיס *קטן* שולט בזרם גדול יותר בין קולט לפולט. כדי להחזיק אותו דולק צריך להמשיך לספק זרם בסיס. בקנה־מידה של שבב העלות במנוחה מצטברת: משפחות לוגיקה דו־קוטביות בשנות השבעים פגעו בקיר תרמי מפיזור סטטי לבדו, גם כששערים לא מיתגו.

## MOSFET: מתח שולט בערוץ

לפי מוזיאון תולדות המחשב (Silicon Engine), ב־1959 השיגו M. M. (John) Atalla ו־Dawon Kahng במעבדות בל את טרנזיסטור השדה בעל השער המבודד (insulated-gate FET) הראשון שעבד, בכך שהתגברו על ״מצבי פנים״ שחסמו חדירת שדות חשמליים לחומר; בחקר שכבות סיליקון־דו־חמצני שגדלו תרמית מצאו שאפשר להפחית מאוד את המצבים האלה בממשק בין הסיליקון לתחמוצת שלו — בכריך של מתכת (M — שער), תחמוצת (O — בידוד) וסיליקון (S — מוליך־למחצה), ומכאן השם MOSFET. ([Computer History Museum, Silicon Engine — MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) אותו עמוד מוסיף שאזור ההולכה של טרנזיסטור MOS הוא חומר מסוג p (ערוץ p) או מסוג n (ערוץ n); התקני MOS נכנסו לשוק המסחרי ב־1964; ובגלל גודלם הקטן יותר וצריכת ההספק הנמוכה יותר מהתקנים דו־קוטביים, יותר מ־99 אחוז מהמיקרו־שבבים המיוצרים היום משתמשים בטרנזיסטורי MOS. ([Computer History Museum, Silicon Engine — MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

בריטניקה מתארת שבזיכרון מחשב ובמיקרו־מעבדים המתח על אלקטרודת השער קובע אם זרם יכול לזרום מהמקור לניקוז — המתג דולק או כבוי — וש־FET, ובכללם MOSFET, נשלטים במתח ולא בזרם. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor)) HyperPhysics מתאר את ה־IGFET / MOSFET כהתקן עם שכבת סיליקון־דו־חמצני (ולעיתים ניטריד) מעל מבנה דמוי־JFET, כך שמתקבל אימפדנס כניסה גבוה במיוחד — בסדר גודל של 10¹⁵ אוהם. ([HyperPhysics, "Field Effect Transistors"](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fet.html))

> **פרשנות (טענת הספר):** MOSFET שם שער מתכת (או פוליסיליקון) מעל סיליקון, מופרד בתחמוצת דקה — אותה SiO₂ יציבה מהפרק הקודם. מתח השער אינו דוחף זרם *דרך* השער; התחמוצת חוסמת זרם ישר. הוא יוצר שדה שיוצר או מסיר ערוץ מוליך בין מקור לניקוז. ב־NMOS, מתח שער חיובי מושך אלקטרונים לשכבת היפוך בגוף מסוג P; זרם זורם. מורידים את מתח השער — הערוץ נעלם, הזרם נעצר.

> **פרשנות (טענת הספר):** השער שואב כמעט אפס זרם במצב יציב. ברגע שקיבול השער טעון, החזקת ההתקן דולק עולה כמעט כלום. זה ההפך מזרם הבסיס הרציף של ה־BJT.

## למה MOSFET ניצח בלוגיקה דיגיטלית

מוזיאון תולדות המחשב מדגיש את הגודל הקטן יותר ואת צריכת ההספק הנמוכה יותר של MOS מול דו־קוטביים, ואת הדומיננטיות של טרנזיסטורי MOS במיקרו־שבבים של היום (יותר מ־99 אחוז). ([Computer History Museum, Silicon Engine — MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) בריטניקה מתארת את יישום הטרנזיסטור הנפוץ ביותר כיום כמיתוג בשער בזיכרון מחשב ובמיקרו־מעבדים — דולק או כבוי לפי מתח השער — ומציינת שמעגלים משולבים מכילים לעיתים מיליארדי התקנים כאלה. ([Britannica, "transistor"](https://www.britannica.com/technology/transistor))

> **פרשנות (טענת הספר):** זרם שער סטטי קרוב לאפס הוא כל הסיפור. CMOS בהמשך השדרה בונה על כך כך שזרם משמעותי זורם בעיקר *בזמן מיתוג*, לא בעת החזקת מצב. זה מה שאפשר לספירת הטרנזיסטורים לטפס בלי להמיס את הגביש — קשת ההתרחבות שאליה חוזרים ברזולוציית צומת־תהליך בהמשך.

> **פרשנות (טענת הספר):** BJT לא נעלמו: הם עדיין חשובים היכן שזרם־הנעה או ליניאריות אנלוגית מנצחים צפיפות. ללוגיקה דיגיטלית בהיקף רציני, פיזיקת הספק־המנוחה של ה־MOSFET הפכה אותו לנתיב היחיד האפשרי — וכל שער בפרק הבא בנוי ממנו.

**דלת החוצה:** עבודת ה־MOSFET הסיליקוני של D. Kahng ו־M. M. Atalla (מעבדות בל / כנס IRE–AIEE Solid-State Device Research, סביב 1960) — התקן השדה המעשי שהפך שליטת מתח דרך תחמוצת לתקן הדיגיטלי.

**הבא:** [שערי לוגיקה מטרנזיסטורים]({{< relref "14-logic-gates-from-transistors.md" >}})

## מקורות

1. *Encyclopaedia Britannica*, "transistor": <https://www.britannica.com/technology/transistor>
2. HyperPhysics (Georgia State University), "Field Effect Transistors": <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fet.html>
3. Computer History Museum, Silicon Engine, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated": <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
