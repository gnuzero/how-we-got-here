---
title: "齒輪會數數：從記里鼓車到“較數器”"
weight: 3
date: 2026-09-26
draft: false
phase: "1 — 基礎：從機械計算到真空管計算"
series_index: 3
tags: ["記里鼓車", "指南車", "水運儀象台", "蘇頌", "手搖計算機", "數理精蘊", "六合叢談", "巴貝奇"]
summary: "宋代的齒輪已經會十進位制計數，蘇頌想把人手從儀器裡拿走，清宮造出了自己的手搖計算機，1858 年（一說 1859 年）的上海雜誌用中文介紹了巴貝奇的差分機。"
image_prompt: "Cutaway reconstruction drawing of a Song-dynasty odometer cart: road wheel, vertical and horizontal wooden gear wheels with visible teeth, two carved wooden figures with drum and bell on upper decks, parchment-toned technical illustration style, no text"
video_prompt: "20-second animation: a cart rolls, gear wheels turn at 18:54 and 3:100, a wooden figure strikes a drum at each li; every tenth li a second wheel clicks over and a bell rings; transition to brass digit wheels carrying 9 to 0; documentary style"
schematics: "Diagram 1: Lu Daolong odometer cart gear train per Song Shi (road wheel 3 paces/turn; 18->54; 3->100 = 1 li; 10->100 = 10 li), drawn as a two-digit decimal counter with 10:1 carry. Diagram 2: south-pointing chariot as fixed-axis train with automatic clutch (Song Shi), contrasted with the modern differential reconstruction."
labs: ["difference-engine"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F32-05, F32-06, F32-01, F32-02, F32-03, F32-04, F30-01, F30-02, F30-03, F30-04, F30-05, F30-07, F33-01, F33-02, F33-03 -->

算盤要人撥。能不能讓機器自己數？中國文獻裡第一台寫明齒數的計數機器，是一輛車。

## 1027 年：會數“裡”的車

《宋史·輿服志》記載，天聖五年（1027），內侍盧道隆進獻記里鼓車。帳算得清清楚楚：足輪轉一周走三步；立輪 18 齒帶動下平輪 54 齒，同軸的旋風輪 3 齒再帶動中平輪 100 齒。中平輪轉一周，車正好走一里，下層木人擊鼓。再往上，小平輪 10 齒帶動上平輪 100 齒，上平輪轉一周是十里，上層木人擊鐲。原文總結：“凡用大小輪八，合二百八十五齒，遞相鉤鎖，犬牙相制，周而復始。”

算一下：足輪轉 100 周是 300 步，正好一里。中平輪每轉一周（一里）擊鼓一次；上平輪按 10:1 跟著轉，每轉一周（十里）擊鐲一次。打個比方，鼓是“個位”，鐲是“十位”：這相當於一個兩級的十進位制計數，按 10:1 進位，但它只用鼓聲和鐲聲報數，並不顯示累計的里數。原車沒有傳下來，今天看到的都是復原模型。

**出處：**《宋史》卷一百四十九《輿服一》，維基文庫。

## 指南車：是離合，不是差速器

同一卷《宋史》還記了兩種指南車：燕肅 1027 年的（大小輪九、合齒一百二十），吳德仁 1107 年的（用竹䉡和繩索讓小輪在轉向時落下齧合）。文獻所載都是定軸輪系加自動離合：車一轉彎，相應的齒輪自動咬合，把木人轉回原來的方向。英文網路常說指南車是“第一個差動齒輪”，但差動方案是現代人的復原；中國科學院自然科學史研究所編著的條目寫道，“許多技術史家懷疑古代是否出現過這種發達的齒輪傳動機構”。指南車會累積誤差，主要用於儀仗。燕肅奏章裡追溯到黃帝、周公、張衡、馬鈞的“前身”，都屬於傳說。

## 蘇頌：把人手從儀器裡拿走

元祐元年（1086）冬，蘇頌奉詔評定新舊渾儀。他在《新儀象法要·進儀象狀》裡點出癥結：觀測要靠人轉動儀器，而“人手有高下”，讀數跟著漂移，爭論永無定論。他的辦法是讓水來驅動。樞輪直徑一丈一尺，掛著 36 個受水壺（另一傳本作 48 個），卷下記載，樞衡、樞權“所以節受水壺之升降也”，左右天鎖“所以持正樞輪也”，再加上天衡、天關等一套槓桿：壺裡的水滿到一定分量，才放輪子走一步。連續的水流，被切成了離散的節拍。

李約瑟把這套節制機構稱作擒縱機構，中國學界卻沒有定論。2021 年清華大學的研討會上，孫小淳介紹了中國科學院 2012 年的 1:3“固定斗”復原，胡維佳則主張“翻斗”，並指出史料中“未見水運儀象台的實際水運情況記載”。台中的國立自然科學博物館有一座按原尺寸復原、能運轉的木樣模型。

**出處：**蘇頌《新儀象法要》，維基文庫（四庫全書本）；清華大學科學博物館，2021。

<figure><img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Clock_Tower_from_Su_Song%27s_Book_desmear.JPG" alt="《新儀象法要》中的水運儀象台全圖" loading="lazy" width="908"><figcaption>蘇頌《新儀象法要》中的水運儀象台木刻圖（書頁照片，翻拍自李約瑟《中國科學技術史》第 4 卷第 2 分冊第 451 頁；同一木刻圖見 1844 年《守山閣叢書》本卷下）。圖片：<a href="https://commons.wikimedia.org/wiki/File:Clock_Tower_from_Su_Song%27s_Book_desmear.JPG">蘇頌</a> / Wikimedia Commons，<a href="https://commons.wikimedia.org/wiki/Template:PD-old-70-1923">公有領域</a>。</figcaption></figure>

## 清宮的手搖計算機

康熙年間，清宮造辦處動手造計算機。故宮藏品記錄寫明，一台銅鍍金盤式手搖計算機“由清宮造辦處依巴斯加計算機的構造原理自製”：10 個圓盤，滿十由齒輪向左進位，能做加減乘除。故宮還藏有把納白爾算籌刻在旋轉圓柱上的籌式機，以及用鑰匙捲動紙籌的紙籌式計算器。

兩處細節英文世界很少提。其一，故宮研究館員周乾描述的一台盤式機，位名是“拾萬、萬、千、百、十、兩、錢、分、釐、毫”，小數位用的是銀兩和衡制單位；藏品資料庫卻記為拉丁拼音位名。兩說並存，也許不是同一件藏品。其二，1978 年白尚恕、李迪在故宮庫房找到 10 件計算器，查閱第一歷史檔案館的檔案，沒有找到關於它們的具體記載；布魯塞爾一個展覽稱其中一台是惠更斯 1659 年所造，他們不同意。

同一時期，康熙敕編、1723 年刻竣的《御製數理精蘊》講了對數，還介紹了“假數尺”：“此外又有假數尺，即用對數及正弦割切諸線之對數為之。”台灣師範大學的洪萬生認為，這是中國第一次介紹計算尺。

**出處：**故宮博物院藏品記錄；周乾，科技日報，2021；白尚恕、李迪；洪萬生，國立臺灣師範大學數學系。

## 1858 年（一說 1859 年）：巴貝奇的機器有了中文名

1857 年，偉烈亞力（Alexander Wylie）主編的上海《六合叢談》報導了法國多馬（Thomas）的新造算器：“此器不須人算，而自得數，一如代人用心。”同年另一期介紹“造表新法”，列舉了明安圖等中國算家的造表方法（據姚遠等人的論文轉引）。隨後的“新出算器”一文，介紹巴巴齊（巴貝奇）“能自成表，且能自作板”的機器：“其法之本，用級數累次之較，即名較數器”，並詳述了瑞典舒德斯（Scheutz）父子的差分機。據姚遠等人的論文，這是巴貝奇差分機最早的中文名字。這一期（2 卷 2 號）的年份有出入：論文正文記為咸豐八年（1858），文末參考文獻卻標 1859 年，有待核對原刊。

**出處：**姚遠、楊琳琳、亢小玉《〈六合叢談〉與其數理化傳播》，《西北大學學報（自然科學版）》，2010。

在西方，巴貝奇的差分機正是用“級數累次之較”，也就是有限差分，來自動造表。下面的實驗讓你親手轉動數字輪，看進位怎樣一格一格傳下去。（實驗介面為英文。）

{{< lab type="difference-engine" height="720" >}}

## 延伸閱讀

- 《宋史》卷一百四十九《輿服一》（English: *History of Song*, ch. 149, Carriages and Robes 1），維基文庫。[連結](https://zh.wikisource.org/wiki/宋史/卷149)
- 張柏春，《指南車》（English: The south-pointing chariot），據中國科學院自然科學史研究所編著《中國古代重要科技發明創造》，中國機械工程數字博物館。[連結](https://museum.cmes.org/machinery/search/detail/69906c097da64f599f809905945aa6ba)
- 蘇頌，《新儀象法要》卷上、卷下（English: *New Design for an Armillary Clock*, vols. 1 and 3, Siku edition），維基文庫。[連結：卷上](https://zh.wikisource.org/wiki/新儀象法要_(四庫全書本)/卷上)；[連結：卷下](https://zh.wikisource.org/wiki/新儀象法要_(四庫全書本)/卷下)
- 清華大學科學博物館，《“水運儀象台學術研討會”成功舉辦》（English: Symposium on the water-driven astronomical clock tower held），2021-11-26。[連結](https://tsm.tsinghua.edu.cn/?p=9500)
- 國立自然科學博物館，《水運儀象臺》展品頁（English: The water-powered astronomical clock tower, exhibit page）。[連結](https://www.nmns.edu.tw/ch/exhibitions/galleries/human-cultures-hall/chinese-science-and-technology/water-powered-clock/index.html)
- 故宮博物院，《銅鍍金盤式手搖計算機》藏品記錄（English: Gilt-brass disk-type hand calculator, collection record）。[連結](https://www.dpm.org.cn/collection/clock/234581.html)
- 故宮博物院，《銅鍍金納白爾籌式手搖計算機》藏品記錄（English: Gilt-brass Napier-rod hand calculator, collection record），撰稿人付超。[連結](https://www.dpm.org.cn/collection/clock/231172.html)
- 故宮博物院，《紙籌式計算器》藏品記錄（English: Paper-strip calculator, collection record）。[連結](https://www.dpm.org.cn/collection/clock/233756.html)
- 周乾，《康熙年間，皇家已經用上了計算機》（English: In the Kangxi era the court was already using calculating machines），科技日報，新華網轉載，2021-08-20。[連結](http://www.news.cn/tech/20210820/1973d800610f4ef08fdf33a92ea63838/c.html)
- Bai Shangshu（白尚恕）、Li Di（李迪），“The Calculating Machines Stored in the Palace Museum in Beijing, their Structure and Algorithms”（中文：故宮所藏計算器的結構與演算法），柏林自由大學網頁副本。[連結](http://page.mi.fu-berlin.de/graf/bl.htm)
- 《御製數理精蘊》下編卷三十九《比例規解》（English: *Essence of Numbers and Their Principles*, part 2, ch. 39, on the sector），識典古籍（四庫本）。[連結](https://www.shidianguji.com/book/SK1560/chapter/1l9m55l6h1mb2)
- 洪萬生，《〈數理精蘊〉（一）內容摘要》（English: Summary of the *Shuli Jingyun*, part 1），國立臺灣師範大學數學系。[連結](https://math.ntnu.edu.tw/~horng/study/0525.htm)
- 姚遠、楊琳琳、亢小玉，《〈六合叢談〉與其數理化傳播》（English: The *Shanghai Serial* and its transmission of mathematics, physics and chemistry），《西北大學學報（自然科學版）》40(3)，2010-06。[連結](https://wap.sciencenet.cn/upload/blog/file/2010/9/2010971519421827.pdf)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[x] Lab embedded: difference-engine (shared English UI in static/labs; not forked)
[x] Figure: Su Song clock-tower diagram, Wikimedia Commons, PD-old-70-1923 (licence template and upload URL verified via Commons API 2026-09-26). Provenance checked 2026-09-26 (fact-check gate): the file is a 2007 photo of p. 451 of Needham, Science and Civilisation in China vol. 4 pt. 2 (1965), reproducing the woodcut from Su Song's 新儀象法要 (text 1090s; the same woodcut appears in the 1844 守山閣叢書 edition on Commons). The underlying woodcut is centuries old and a faithful photo of a 2D work adds no copyright (PD-Art), so PD is established; image kept. Optional: swap in the 守山閣 scan to avoid the Needham intermediary.
[ ] Not used: south-pointing chariot model photos (licence not checked); Palace Museum calculator photos (copyright Palace Museum); Shanghai Serial illustration (journal copyright)
[ ] Native-reader proofread (zh-Hans) before final
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review); Taiwan-reader proofread still pending
-->
