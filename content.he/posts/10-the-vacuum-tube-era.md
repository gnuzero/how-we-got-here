---
title: "עידן שפופרת הריק"
weight: 10
date: 2026-11-06
draft: false
phase: "1 — יסודות: ממכניקה למחשוב בשפופרות ריק"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "שפופרות הריק הסירו חלקים נעים — וקנו מהירות במחיר של חום, הספק וכשל"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

## WEIZAC במכון ויצמן

לפני ששפופרת הריק נעשית מושג מופשט, כדאי להתחיל במכונה שבנו כאן. לפי לוחית ה־IEEE Milestone (דרך ETHW), מכון ויצמן למדע ברחובות בנה את ה־WEIZAC (Weizmann Automatic Computer) בשנים 1954–1955, בחזון המדעי של חיים פקריס (Chaim Pekeris) ובהובלה הנדסית של ג׳רלד אסטרין (Gerald Estrin); המכונה התבססה על שרטוטי מחשב ה־IAS באוניברסיטת פרינסטון, והיתה המחשב הדיגיטלי האלקטרוני הראשון שנבנה במזרח התיכון. ([ETHW, "Milestones: WEIZAC Computer, 1955"](https://ethw.org/Milestones:WEIZAC_Computer,_1955))

עמוד אבני־הדרך של המחלקה למדעי המחשב והמתמטיקה השימושית במכון ויצמן מתאר את ה־WEIZAC כמחשב הראשון בישראל, ואחד המחשבים האלקטרוניים הגדולים, עם תוכנית מאוחסנת, הראשונים בעולם; הוא נבנה במכון במהלך 1954–1955 על בסיס ארכיטקטורת ה־IAS שפיתח ג׳ון פון נוימן, ופעל עד 29 בדצמבר 1963 לפני שהוחלף ב־GOLEM. ([Weizmann Institute, Faculty of Mathematics and Computer Science milestones](https://www.wisdom.weizmann.ac.il/~www/pages/milestones/1954.html))

רקע ה־Milestone ב־ETHW מוסיף פרטים תפעוליים: אסטרין וצוותו החלו את העבודה עם תמיכת ה־IAS וסט מלא של שרטוטים; לפי אותו עמוד, ה־WEIZAC החל בהתלהבות בידי הצוות של אסטרין, אשתו תלמה (Thelma) כמהנדסת חשמל, והטכנאי מיכה קדם (Micha Kedem); באוקטובר 1955 הוכנס ה־WEIZAC לפעולה, והוא פעל עד 1963. ([ETHW, "Milestones: WEIZAC Computer, 1955"](https://ethw.org/Milestones:WEIZAC_Computer,_1955))

> **פרשנות (נועה):** לוקאס נקב בטווח הבנייה שמופיע בלוחית ה־IEEE ובמקורות שלמעלה; תחילת הפעולה וסיומה מנוסחים שם בנפרד (אוקטובר לפי ETHW; תאריך סיום מפורט בעמוד ויצמן). זה דיווח על ניסוח המקורות, לא איחודם לתאריך אחד.

## למה שפופרת הריק בכלל

> **פרשנות (טענת הספר):** הטריק המרכזי של שפופרת הריק פשוט: לשלוט בזרם גדול באמצעות זרם קטן, בלי חלקים נעים. זה מה שהפך מחשבים למהירים בסדרי־גודל מכל דבר מבוסס־ממסרים — וזה גם למה שהעידן היה מאבק מתמיד בחום, בהספק ובשיעור הכשל.

לפי בריטניקה, שפופרת אלקטרונים (electron tube; גם vacuum tube) היא התקן אטום שמבקר זרימת אלקטרונים במעגל; קתודה פולטת אלקטרונים, לעיתים קרובות בפליטה תרמיונית (חימום), ואנודה חיובית מושכת אותם; ברשת (grid) בין הקתודה לאנודה אפשר לשנות את זרימת האלקטרונים. עד סוף שנות ה־1950 שימשו שפופרות ריק כמעט בכל התקן אלקטרוני — מחשבים, רדיו ועוד — לפני שהטרנזיסטור והתקנים מבוססי־מוליכים־למחצה תפסו את היישומים בהספק נמוך ובתדר נמוך. ([Britannica, "electron tube"](https://www.britannica.com/technology/electron-tube))

## איך טריודה ממתגת

טריודה היא שפופרת ריק עם שלושה אלקטרודים. לפי ETHW (IEEE), לטריודה שהמציא לי דה פורסט ב־1906 יש רשת תיל דקה בין הקתודה לאנודה: מתח על הרשת שולט בזרימת האלקטרונים — מטען חיובי מאיץ אותם, מטען שלילי דוחה אותם ומקטין מאוד או עוצר את הזרימה — והטריודה יכולה גם להגביר זרמים חלשים. ([ETHW, "Electron (or Vacuum) Tubes"](https://ethw.org/Electron_(or_Vacuum)_Tubes)) בריטניקה (ערך electron tube) מוסיפה שלשפופרת אלקטרונים יש שניים או יותר אלקטרודים, שקתודה פולטת אלקטרונים בפליטה תרמיונית, ושברשת בין הקתודה לאנודה אפשר לשנות את מספר האלקטרונים הזורמים. ([Britannica, "electron tube"](https://www.britannica.com/technology/electron-tube))

> **פרשנות (טענת הספר):** שום דבר לא זז חוץ מאלקטרונים. זו הסיבה ששפופרות יכלו למתג מהר ממסרים — ההפרש בא מהסרת התנועה המכנית, לא משיפור של אותו מנגנון.

## ENIAC: לוח־מתגים של שלושים טון

ה־ENIAC הוא ציון־הדרך של העידן. לפי מוזיאון תולדות המחשב, הבנייה החלה ב־1943 בידי John Mauchly ו־J. Presper Eckert ב־Moore School of Electrical Engineering באוניברסיטת פנסילבניה; בגלל הטכנולוגיה האלקטרונית (מול אלקטרו־מכנית) הוא מהיר יותר מפי אלף מכל מחשב קודם; תכנותו היה בחיווט מפאנל לפאנל ובמתגים; הוא תפס יותר מ־1,000 רגל רבוע, השתמש בכ־18,000 שפופרות ריק ושקל 30 טון; החשיפה הפומבית היתה ב־1946. ([Computer History Museum, Computers timeline — Public unveiling of ENIAC](https://www.computerhistory.org/timeline/computers/))

Penn Engineering כותבת שה־ENIAC הוכרז במקור ב־14 בפברואר 1946 כמחשב האלקטרוני הכללי־תכליתי הראשון; כשהיה בפעולה מלאה תפס חדר בגודל 30 על 50 רגל ושקל 30 טון; ארבעים פאנלים סודרו בצורת U; נדרשו כ־18,000 שפופרות ריק; והוא צרך 150 קילו־ואט חשמל. ([Penn Engineering, "ENIAC"](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) נספח ENIAC ב־*Electronic Computers Within The Ordnance Corps* (היסטוריית מחשבים של ה־Ordnance Corps באתר ARL) נותן, בסעיף NUMBER OF CIRCUIT ELEMENTS, Tubes 17,468, ובסעיף PHYSICAL FACTORS, Power consumption, Computer 174 K.W. ([ARL / Ordnance Corps Appendix I — ENIAC](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html)) בראיון מ־1989 שפורסם ב־*Computerworld*, אקרט (J. Presper Eckert) עצמו סיפר שבנו את ה־ENIAC בחדר של 30 על 50 רגל, שיש בו 18,000 שפופרות ריק, ושיש להם אספקה מווסתת של 150 קילו־ואט; לדברי אקרט, הסיפור ש״ה־ENIAC העמעם את האורות בפילדלפיה״ הוא בדיה עיתונאית גמורה. ([Computerworld, Eckert interview](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

״לתכנת״ את ה־ENIAC פירושו היה לחבר מחדש פיזית: כבלי תיקון ומתגים לפי פונקציה — לוח־מתגים ענק. מוזיאון תולדות המחשב מדגיש את החיווט מפאנל לפאנל ואת המתגים. ([Computer History Museum, Computers timeline](https://www.computerhistory.org/timeline/computers/)) לדברי אקרט באותו ראיון, תכנתו את המכונה בחיבור חוטים ממקום למקום — תכנות ״ניתן לחיבור״ (pluggable) עם מתגים להגדרת פונקציות — לא חומרה קבועה, לא תוכנה, ולא זיכרון במובן המודרני. ([Computerworld, Eckert interview](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

בבלוג של מוזיאון תולדות המחשב מתוארת ההמרה המאוחרת יותר: החל מיולי 1947 הוסב ה־ENIAC לסכמת פקודות מקודדות; משום שכמעט לא היה לו זיכרון אלקטרוני ניתן־לכתיבה, הפקודות נשמרו ב־״טבלאות פונקציה״ — בנקי מתגים בעלי עשרה מצבים; ה־ENIAC המוסב הריץ תוכנית שמורה במתגים באפריל 1948 (לפי התיעוד ההיסטורי שמציג המוזיאון, תוכנית מורכבת החלה לרוץ ב־12 באפריל 1948). ([Computer History Museum blog, "Programming the ENIAC"](https://computerhistory.org/blog/programming-the-eniac-an-example-of-why-computer-history-is-hard/))

> **פרשנות (טענת הספר):** הכאב הזה — רצף הפעולות חי בניתוב הכבלים — הוא האב הישיר של סיפור ארכיטקטורת המעבד בהמשך השדרה: תוכנית *מאוחסנת*, הוראות באותו זיכרון כמו הנתונים, היתה התיקון שה־ENIAC המקורי חסר, והיא הגדירה את המכונות הכלליות שבאו אחריו.

**דלת החוצה:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — היסטוריית ENIAC קלאסית מהמעגל הקרוב; כדאי לקרוא מולה סיפורי עם על שפופרות.

## למה אלפי שפופרות היו סיוט

שפופרות ריק נכשלות: פילמנטים נשרפים, אטימות דולפות, הפליטה מתדרדרת. בריטניקה כותבת שעד סוף שנות ה־1950 שימשו שפופרות ריק כמעט בכל התקן אלקטרוני, ושלאחר מלחמת העולם השנייה הטרנזיסטור והתקנים מבוססי־מוליכים־למחצה נכנסו לכל היישומים בהספק נמוך ובתדר נמוך. ([Britannica, "electron tube"](https://www.britannica.com/technology/electron-tube)) ETHW מוסיף שרוב התפקידים שמילאו שפופרות האלקטרונים נעשים היום בחומרים מוליכים־למחצה, שהם קומפקטיים ועמידים יותר. ([ETHW, "Electron (or Vacuum) Tubes"](https://ethw.org/Electron_(or_Vacuum)_Tubes))

לדברי אקרט באותו ראיון, הסיפור שמישהו רץ עם ארגז שפופרות ומחליף אחת כל כמה דקות הוא עוד מיתוס: הוא סיפר שכשלה שפופרת בערך כל יומיים, שאיתור התקלה ארך כרבע שעה, ושהם בנו על שלדות נשלפות כדי להחליף במהירות. ([Computerworld, Eckert interview](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html)) Penn מציינת שאתגר האמינות המרכזי היה אמינות השפופרות, ושאקרט השיג אמינות טובה בהרצתן ברבע הספק. ([Penn Engineering, "ENIAC"](https://www.engineering.upenn.edu/about/history-heritage/eniac/))

> **פרשנות (טענת הספר):** הכשלים היו אמיתיים ויקרים. כל שפופרת גם מפזרת חום אמיתי — חדרים מלאים בהן דרשו קירור רציני — ולכן המכונה היתה חזקה לעידנה וגם יקרה באכזריות להחזקה בפעולה.

> **פרשנות (טענת הספר):** זה מניח את הפוסט הבא. הטרנזיסטור לא ניצח כי מהנדסים היו חכמים לשם החכמה. הוא ניצח כי הפיזיקה של השפופרת עצמה — חום, גודל ומעטפת הריק השבירה — שמה תקרה קשה על עד כמה הגישה הזאת יכולה להתרחב.

**הבא:** [למה הטרנזיסטור היה חייב לקרות]({{< relref "11-why-the-transistor-had-to-happen.md" >}})

## מקורות

1. Engineering and Technology History Wiki (IEEE), "Milestones: WEIZAC Computer, 1955": <https://ethw.org/Milestones:WEIZAC_Computer,_1955>
2. Weizmann Institute of Science, Faculty of Mathematics and Computer Science, milestones (WEIZAC, 1954): <https://www.wisdom.weizmann.ac.il/~www/pages/milestones/1954.html>
3. *Encyclopaedia Britannica*, "electron tube": <https://www.britannica.com/technology/electron-tube>
4. Engineering and Technology History Wiki (IEEE), "Electron (or Vacuum) Tubes": <https://ethw.org/Electron_(or_Vacuum)_Tubes>
5. Computer History Museum, "Computers" timeline (Public unveiling of ENIAC): <https://www.computerhistory.org/timeline/computers/>
6. University of Pennsylvania, Penn Engineering, "ENIAC": <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
7. U.S. Army / ARL mirror, *Electronic Computers Within The Ordnance Corps*, Appendix I — ENIAC (sections NUMBER OF CIRCUIT ELEMENTS; PHYSICAL FACTORS): <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
8. *Computerworld*, "Q&A: A lost interview with ENIAC co-inventor J. Presper Eckert" (1989 interview, published 2006): <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>
9. Computer History Museum blog, "Programming the ENIAC: an example of why computer history is hard": <https://computerhistory.org/blog/programming-the-eniac-an-example-of-why-computer-history-is-hard/>
