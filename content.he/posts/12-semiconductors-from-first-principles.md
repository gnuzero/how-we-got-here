---
title: "מוליכים־למחצה מהעקרונות הראשונים"
weight: 12
date: 2026-11-06
draft: false
phase: "2 — פיזיקה והתקנים"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "פער אנרגיה שאפשר לדחוף לשני הכיוונים — סגסוג הופך סיליקון למתג שניתן לשלוט בו"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

> **פרשנות (טענת הספר):** סיליקון אינו מיוחד כי הוא קסם — הוא מיוחד כי מבנה הפסים שלו יושב במקום שבו אפשר *לשלוט* בהולכה, במקום לחיות עם חומר שתמיד דולק או תמיד כבוי.

## למה פער שאפשר לחצות חשוב

לפי בריטניקה, מוליך־למחצה (semiconductor) הוא מוצק גבישי שמוליכותו החשמלית בין זו של מוליך לזו של מבודד; המוליכות רגישה לטמפרטורה, לתאורה, לשדות מגנטיים ולכמויות זעירות של אטומי זיהום. במוצקים מקובצים חומרים למבודדים, מוליכים־למחצה ומוליכים; במבודד או במוליך־למחצה, בטמפרטורה נמוכה, אלקטרונים ממלאים פסים עד פס הערכיות (valence band), והפס הבא הוא פס ההולכה (conduction band), המופרד בפער אנרגיה (bandgap) — אזור של אנרגיות שהאלקטרונים בגביש אינם יכולים לשאת; רוב המוליכים־למחצה החשובים נמצאים בטווח כ־0.25 עד 2.5 אלקטרון־וולט. ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor)) טבלת פערי הפס ב־HyperPhysics (Georgia State University; נתונים מ־Kittel, *Introduction to Solid State Physics*, מהדורה 6) נותנת ב־300 K ערכים של 1.11 אלקטרון־וולט לסיליקון ו־0.66 אלקטרון־וולט לגרמניום (וב־0 K: 1.17 ו־0.74 בהתאמה). ([HyperPhysics, "Semiconductor Band Gaps"](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html))

בריטניקה מוסיפה שבמוליך־למחצה טהור (intrinsic) בטמפרטורה גבוהה יותר תנודה תרמית עשויה לשבור קשרים קוולנטיים ולתת אלקטרונים חופשיים להולכה, ושאחרי שאلكטרון עוזב קשר נשארת משרעת — ״חור״ הנושא מטען חיובי וזז בכיוון הפוך לאלקטרון. ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor))

> **פרשנות (טענת הספר):** במתכת פסי הערכיות וההולכה חופפים — אלקטרונים נעים בחופשיות; אי אפשר לכבות זאת במתחים סבירים. במבודד הפער האסור עצום; אי אפשר להדליק אותו. מוליך־למחצה יושב באמצע: הפער קטן מספיק ששדה חשמלי צנוע (או מעט חום או אור) יכול להעביר נושאי־מטען למקום שבו הם מוליכים, וגדול מספיק שבטמפרטורת חדר החומר אינו מוצף בהם כבר. התכונה הזאת — ״ניתן לדחיפה לשני הכיוונים״ — היא מה שטרנזיסטור צריך. תקרת השפופרת היתה גודל, הספק ואמינות; התיקון מתחיל כאן, במוצק שאפשר לסגסג ולשלוט בו בשדה.

## למה סיליקון ניצח את הגרמניום

גרמניום היה חומר הטרנזיסטור המעשי הראשון במעבדות בל ב־1947 (Bardeen, Brattain, ובהמשך Shockley) — כמתועד בפרק הקודם ובמקורותיו. בריטניקה כותבת שבראשית שנות ה־1950 היה גרמניום חומר המוליך־למחצה העיקרי, אך התברר כבלתי־מתאים ליישומים רבים כי התקנים ממנו הציגו זרמי דליפה גבוהים כבר בטמפרטורות מורמות במתינות; מאז ראשית שנות ה־1960 הפך סיליקון לחומר הנפוץ ביותר בהרבה, כמעט ודחק את הגרמניום מייצור התקנים, בעיקר משתי סיבות: התקני סיליקון מציגים זרמי דליפה נמוכים בהרבה, ותחמוצת הסיליקון (SiO₂) — מבודד באיכות גבוהה — קלה לשילוב כחלק מהתקן מבוסס־סיליקון; טכנולוגיית הסיליקון הפכה מתקדמת ורווחת, והתקני סיליקון מהווים יותר מ־95 אחוז מכלל מוצרי המוליכים־למחצה הנמכרים בעולם. ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor))

> **פרשנות (טענת הספר):** פער רחב יותר מזה של הגרמניום נותן מרווח טמפרטורה לפני שנושאי־מטען תרמיים מציפים את האות. תחמוצת הסיליקון הגדלה תרמית יוצרת ממשק שקט ויציב — הדיאלקטריק השער שה־MOSFET תלוי בו בהמשך השדרה. וסיליקון, בפועל, זמין בייצור בהיקף. שלושת האילוצים האלה — מרווח טמפרטורה, איכות תחמוצת, אספקה — הם למה שהתעשייה התקבעה על סיליקון ולא על גרמניום.

## סגסוג: מגביש למתג

בריטניקה מתארת שהולכה במוליך־למחצה intrinsic גרועה יחסית בטמפרטורת חדר, ושכדי להעלות הולכה מכניסים במכוון זיהומים (בדרך כלל לריכוז של כחלק אחד למיליון אטומי מארח) ליצירת מוליך־למחצה extrinsic — תהליך הנקרא doping (סגסוג). אם אטום סיליקון מוחלף באטום בעל חמישה אלקטרונים חיצוניים, כגון ארסן, ארבעה יוצרים קשרים קוולנטיים עם שכני הסיליקון והחמישי הופך לאלקטרון הולכה — סיליקון מסוג n (n-type), והאטום הוא תורם (donor). אם מחליפים באטום תלת־ערכי בעל שלושה אלקטרונים חיצוניים, כגון בורון, נוצר חור חיובי בפס הערכיות — סיליקון מסוג p (p-type), והבורון הוא מקבל (acceptor). ([Britannica, "semiconductor"](https://www.britannica.com/science/semiconductor)) HyperPhysics מונה זיהומים חמש־ערכיים כגון אנטימון, ארסן או זרחן (phosphorus) כתורמים לחומר מסוג n, וזיהומים תלת־ערכיים כגון בורון, אלומיניום או גליום לחומר מסוג p. ([HyperPhysics, "The Doping of Semiconductors"](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html))

> **פרשנות (טענת הספר):** אף אחד מהם לבדו אינו מתג. חיבורם — צומת P-N — הוא אבן־הבניין של כל דיודה וטרנזיסטור שיבואו. הפרק הבא ממשיך משם: איך צומת (או ערוץ הנשלט בשער) הופך סיליקון מסוגסג למשהו שאות חיצוני יכול להדליק ולכבות.

**הבא:** [הטרנזיסטור: מ־BJT ל־MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet.md" >}})

## מקורות

1. *Encyclopaedia Britannica*, "semiconductor": <https://www.britannica.com/science/semiconductor>
2. HyperPhysics (Georgia State University), "Semiconductor Band Gaps" (Kittel table; Si/Ge at 0 K and 300 K): <http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html>
3. HyperPhysics, "The Doping of Semiconductors": <http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/dope.html>
