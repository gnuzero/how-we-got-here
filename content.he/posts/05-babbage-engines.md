---
title: "מנועי באבג׳"
weight: 5
date: 2026-11-06
draft: false
phase: "1 — יסודות: ממכניקה למחשוב בשפופרות ריק"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "מנוע ההפרשים והמנוע האנליטי — מחסן, טחנה, ותוכנית על כרטיסים"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

המחשוב לא התחיל בחשמל. הוא התחיל בגלגלי שיניים.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="מנוע ההפרשים מס׳ 2 של צ׳ארלס באבג׳ במוזיאון המדע בלונדון" loading="lazy" width="1280">
<figcaption>מנוע ההפרשים מס׳ 2 (מוזיאון המדע, לונדון). צילום: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

ב־14 ביוני 1822 הכריז צ׳ארלס באבג׳ (Charles Babbage) על מנוע ההפרשים (Difference Engine) במאמר שנקרא באגודה האסטרונומית המלכותית — מכונה לחישוב טבלאות אסטרונומיות. ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) לפי מוזיאון תולדות המחשב, מנועי ההפרשים נשענים על שיטת ההפרשים הסופיים: חישוב פולינומים בחיבור חוזר בלבד, בלי כפל וחילוק שקשה יותר לממש במכונה. ערכי מספרים מיוצגים בגלגלי שיניים, ולכל ספרה גלגל משלה. אין חשמל. ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="תקריב של זרועות נשיאה בין עמודי ספרות במנוע ההפרשים מס׳ 2" loading="lazy" width="1280">
<figcaption>זרועות נשיאה בין עמודי ספרות במנוע ההפרשים מס׳ 2, עותק מס׳ 2 (מוזיאון תולדות המחשב). צילום: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**נסו עכשיו.** התחילו את המעבדה מ־Y=9, Δ₁=7. גלגל היחידות עובר את 9; שן תופסת את העשרות. 9+7 הופכים ל־16. זו שיטת ההפרשים הסופיים כשהיא עושה x² — השיטה שלשמה נבנה המנוע.

{{< lab type="difference-engine" height="720" >}}

מקורי לספר הזה, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). דגם עמודות פדגוגי, לא שחזור מלא של מנוע מס׳ 2.

> **פרשנות (טענת הספר):** באבג׳ לא סיים מעולם מנוע הפרשים בקנה־מידה מלא. המימון נלחם בו; כך גם סובלנויות הייצור של התקופה. כל ספרת דיוק נוספת היתה עוד הזדמנות לחיכוך, למשחק־חופש בין שיניים ולהצטברות סטיות שיקלקלו את התוצאה.

אף אחד ממנועי באבג׳ לא מומש בשלמותו בחייו; העבודה על מנוע ההפרשים מס׳ 1 נעצרה ב־1832, והמימון הממשלתי נגדע סופית ב־1842. ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/)) מוזיאון המדע מוסיף שהאוצר הבריטי שילם בסוף £17,500 — סכום של כ־22 קטרי קיטור חדשים ממפעל רוברט סטיבנסון ב־1831 — והפרויקט נחשב כישלון יקר לממשלה שמימנה אותו. ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

ההמשך שלו, המנוע האנליטי (Analytical Engine), הוא האב־הטיפוס האמיתי של המחשב המודרני. ב־1834, כשהבנייה תקועה, הגה באבג׳ מכונת חישוב כללית שניתנת לתכנות. היה בה ״מחסן״ (Store) — זיכרון למספרים ולתוצאות ביניים — ו״טחנה״ (Mill) נפרדת לחישוב החשבוני, והיא תוכנתה בכרטיסים מנוקבים — רעיון שנשאל מנול Jacquard שכבר ארג דוגמאות מורכבות במפעל. ([Computer History Museum, "The Engines"](https://www.computerhistory.org/babbage/engines/); [Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

הסימולטור למטה הוא המנוע האנליטי של John Walker ב־Fourmilab. צעדו בכרטיסים וצפו בעמודות הטחנה והמחסן משתנות. נחלת כלל; אנחנו מארחים עותק ושומרים את קישור המקור.

{{< lab type="analytical-engine" height="780" >}}

מקור: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [קובץ המקור](https://www.fourmilab.ch/babbage/release/aemsource.zip) (נחלת כלל).

ההשאלה הזאת היא התחנה הבאה: נול Jacquard, וההפרדה בין תוכנית למכונה.

**הבא:** [נול Jacquard]({{< relref "06-jacquard-loom.md" >}})

## מקורות

1. Computer History Museum, "The Engines": <https://www.computerhistory.org/babbage/engines/>
2. Computer History Museum, "How it Works": <https://www.computerhistory.org/babbage/howitworks/>
3. Computer History Museum, "A Brief History": <https://www.computerhistory.org/babbage/history>
4. Computer History Museum, "A Modern Sequel": <https://www.computerhistory.org/babbage/modernsequel/>
5. Science Museum, "Charles Babbage's Difference Engines and the Science Museum": <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
6. Science Museum Group Collection, "Babbage's Difference Engine No 2, 2002" (co62748): <https://collection.sciencemuseumgroup.org.uk/objects/co62748/babbages-difference-engine-no-2-2002>
