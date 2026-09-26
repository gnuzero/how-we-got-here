---
title: "齿轮会数数：从记里鼓车到“较数器”"
weight: 3
date: 2026-09-26
draft: false
phase: "1 — 基础：从机械计算到电子管计算"
series_index: 3
tags: ["记里鼓车", "指南车", "水运仪象台", "苏颂", "手摇计算机", "数理精蕴", "六合丛谈", "巴贝奇"]
summary: "宋代的齿轮已经会十进制计数，苏颂想把人手从仪器里拿走，清宫造出了自己的手摇计算机，1858 年的上海杂志用中文介绍了巴贝奇的差分机。"
image_prompt: "Cutaway reconstruction drawing of a Song-dynasty odometer cart: road wheel, vertical and horizontal wooden gear wheels with visible teeth, two carved wooden figures with drum and bell on upper decks, parchment-toned technical illustration style, no text"
video_prompt: "20-second animation: a cart rolls, gear wheels turn at 18:54 and 3:100, a wooden figure strikes a drum at each li; every tenth li a second wheel clicks over and a bell rings; transition to brass digit wheels carrying 9 to 0; documentary style"
schematics: "Diagram 1: Lu Daolong odometer cart gear train per Song Shi (road wheel 3 paces/turn; 18->54; 3->100 = 1 li; 10->100 = 10 li), drawn as a two-digit decimal counter with 10:1 carry. Diagram 2: south-pointing chariot as fixed-axis train with automatic clutch (Song Shi), contrasted with the modern differential reconstruction."
labs: ["difference-engine"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F32-05, F32-06, F32-01, F32-02, F32-03, F32-04, F30-01, F30-02, F30-03, F30-04, F30-05, F30-07, F33-01, F33-02, F33-03 -->

算盘要人拨。能不能让机器自己数？中国文献里第一台写明齿数的计数机器，是一辆车。

## 1027 年：会数“里”的车

《宋史·舆服志》记载，天圣五年（1027），内侍卢道隆进献记里鼓车。账算得清清楚楚：足轮转一周走三步；立轮 18 齿带动下平轮 54 齿，同轴的旋风轮 3 齿再带动中平轮 100 齿。中平轮转一周，车正好走一里，下层木人击鼓。再往上，小平轮 10 齿带动上平轮 100 齿，上平轮转一周是十里，上层木人击镯。原文总结：“凡用大小轮八，合二百八十五齿，递相钩锁，犬牙相制，周而复始。”

算一下：足轮转 100 周是 300 步，正好一里。中平轮是“个位”，上平轮是“十位”，每满十里进一位。这是一个用齿轮做的两位十进制计数器，进位比固定为 10:1。原车没有传下来，今天看到的都是复原模型。

**出处：**《宋史》卷一百四十九《舆服一》，维基文库。

## 指南车：是离合，不是差速器

同一卷《宋史》还记了两种指南车：燕肃 1027 年的（大小轮九、合齿一百二十），吴德仁 1107 年的（用竹䉡和绳索让小轮在转向时落下啮合）。文献所载都是定轴轮系加自动离合：车一转弯，相应的齿轮自动咬合，把木人转回原来的方向。英文网络常说指南车是“第一个差动齿轮”，但差动方案是现代人的复原；中国科学院自然科学史研究所编著的条目写道，“许多技术史家怀疑古代是否出现过这种发达的齿轮传动机构”。指南车会累积误差，主要用于仪仗。燕肃奏章里追溯到黄帝、周公、张衡、马钧的“前身”，都属于传说。

## 苏颂：把人手从仪器里拿走

元祐元年（1086）冬，苏颂奉诏评定新旧浑仪。他在《新仪象法要·进仪象状》里点出症结：观测要靠人转动仪器，而“人手有高下”，读数跟着漂移，争论永无定论。他的办法是让水来驱动。枢轮直径一丈一尺，挂着 36 个受水壶（另一传本作 48 个），天衡、天关、天锁等构件“所以节受水壶之升降也”：壶里的水满到一定分量，才放轮子走一步。连续的水流，被切成了离散的节拍。

李约瑟把这套节制机构称作擒纵机构，中国学界却没有定论。2021 年清华大学的研讨会上，孙小淳介绍了中国科学院 2012 年的 1:3“固定斗”复原，胡维佳则主张“翻斗”，并指出史料中“未见水运仪象台的实际水运情况记载”。台中的国立自然科学博物馆有一座按原尺寸复原、能运转的木样模型。

**出处：**苏颂《新仪象法要》，维基文库（四库全书本）；清华大学科学博物馆，2021。

<figure><img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Clock_Tower_from_Su_Song%27s_Book_desmear.JPG" alt="《新仪象法要》中的水运仪象台全图" loading="lazy" width="908"><figcaption>苏颂《新仪象法要》中的水运仪象台图（书页照片）。图片：<a href="https://commons.wikimedia.org/wiki/File:Clock_Tower_from_Su_Song%27s_Book_desmear.JPG">苏颂</a> / Wikimedia Commons，<a href="https://commons.wikimedia.org/wiki/Template:PD-old-70-1923">公有领域</a>。</figcaption></figure>

## 清宫的手摇计算机

康熙年间，清宫造办处动手造计算机。故宫藏品记录写明，一台铜镀金盘式手摇计算机“由清宫造办处依巴斯加计算机的构造原理自制”：10 个圆盘，满十由齿轮向左进位，能做加减乘除。故宫还藏有把纳白尔算筹刻在旋转圆柱上的筹式机，以及用钥匙卷动纸筹的纸筹式计算器。

两处细节英文世界很少提。其一，故宫研究馆员周乾描述的一台盘式机，位名是“拾万、万、千、百、十、两、钱、分、厘、毫”，小数位用的是银两和衡制单位；藏品数据库却记为拉丁拼音位名。两说并存，也许不是同一件藏品。其二，1978 年白尚恕、李迪在故宫库房找到 10 件计算器，查阅第一历史档案馆的档案，没有找到关于它们的具体记载；布鲁塞尔一个展览称其中一台是惠更斯 1659 年所造，他们不同意。

同一时期，康熙敕编、1723 年刻竣的《御制数理精蕴》讲了对数，还介绍了“假数尺”：“此外又有假数尺，即用对数及正弦割切诸线之对数为之。”台湾师范大学的洪万生认为，这是中国第一次介绍计算尺。

**出处：**故宫博物院藏品记录；周乾，科技日报，2021；白尚恕、李迪；洪万生，国立台湾师范大学数学系。

## 1858 年：巴贝奇的机器有了中文名

1857 年，伟烈亚力（Alexander Wylie）主编的上海《六合丛谈》报道了法国多马（Thomas）的新造算器：“此器不须人算，而自得数，一如代人用心。”同年另一期介绍“造表新法”，列举了明安图等中国算家的造表方法（据姚远等人的论文转引）。随后的“新出算器”一文，介绍巴巴齐（巴贝奇）“能自成表，且能自作板”的机器：“其法之本，用级数累次之较，即名较数器”，并详述了瑞典舒德斯（Scheutz）父子的差分机。这是巴贝奇差分机最早的中文名字。这一期（2 卷 2 号）的年份有出入：论文正文记为咸丰八年（1858），文末参考文献却标 1859 年，有待核对原刊。

**出处：**姚远、杨琳琳、亢小玉《〈六合丛谈〉与其数理化传播》，《西北大学学报（自然科学版）》，2010。

在西方，巴贝奇的差分机正是用“级数累次之较”，也就是有限差分，来自动造表。下面的实验让你亲手转动数字轮，看进位怎样一格一格传下去。（实验界面为英文。）

{{< lab type="difference-engine" height="720" >}}

## 延伸阅读

- 《宋史》卷一百四十九《輿服一》（English: *History of Song*, ch. 149, Carriages and Robes 1），维基文库。[链接](https://zh.wikisource.org/wiki/宋史/卷149)
- 张柏春，《指南车》（English: The south-pointing chariot），据中国科学院自然科学史研究所编著《中国古代重要科技发明创造》，中国机械工程数字博物馆。[链接](https://museum.cmes.org/machinery/search/detail/69906c097da64f599f809905945aa6ba)
- 蘇頌，《新儀象法要》卷上、卷下（English: *New Design for an Armillary Clock*, vols. 1 and 3, Siku edition），维基文库。[链接](https://zh.wikisource.org/wiki/新儀象法要_(四庫全書本)/卷上)
- 清华大学科学博物馆，《“水运仪象台学术研讨会”成功举办》（English: Symposium on the water-driven astronomical clock tower held），2021-11-26。[链接](https://tsm.tsinghua.edu.cn/?p=9500)
- 國立自然科學博物館，《水運儀象臺》展品页（English: The water-powered astronomical clock tower, exhibit page）。[链接](https://www.nmns.edu.tw/ch/exhibitions/galleries/human-cultures-hall/chinese-science-and-technology/water-powered-clock/index.html)
- 故宫博物院，《铜镀金盘式手摇计算机》藏品记录（English: Gilt-brass disk-type hand calculator, collection record）。[链接](https://www.dpm.org.cn/collection/clock/234581.html)
- 故宫博物院，《铜镀金纳白尔筹式手摇计算机》藏品记录（English: Gilt-brass Napier-rod hand calculator, collection record），撰稿人付超。[链接](https://www.dpm.org.cn/collection/clock/231172.html)
- 故宫博物院，《纸筹式计算器》藏品记录（English: Paper-strip calculator, collection record）。[链接](https://www.dpm.org.cn/collection/clock/233756.html)
- 周乾，《康熙年间，皇家已经用上了计算机》（English: In the Kangxi era the court was already using calculating machines），科技日报，新华网转载，2021-08-20。[链接](http://www.news.cn/tech/20210820/1973d800610f4ef08fdf33a92ea63838/c.html)
- Bai Shangshu（白尚恕）、Li Di（李迪），“The Calculating Machines Stored in the Palace Museum in Beijing, their Structure and Algorithms”（中文：故宫所藏计算器的结构与算法），柏林自由大学网页副本。[链接](http://page.mi.fu-berlin.de/graf/bl.htm)
- 《御制数理精蕴》下编卷三十九《比例规解》（English: *Essence of Numbers and Their Principles*, part 2, ch. 39, on the sector），识典古籍（四库本）。[链接](https://www.shidianguji.com/book/SK1560/chapter/1l9m55l6h1mb2)
- 洪萬生，《〈數理精蘊〉（一）內容摘要》（English: Summary of the *Shuli Jingyun*, part 1），国立台湾师范大学数学系。[链接](https://math.ntnu.edu.tw/~horng/study/0525.htm)
- 姚远、杨琳琳、亢小玉，《〈六合丛谈〉与其数理化传播》（English: The *Shanghai Serial* and its transmission of mathematics, physics and chemistry），《西北大学学报（自然科学版）》40(3)，2010-06。[链接](https://wap.sciencenet.cn/upload/blog/file/2010/9/2010971519421827.pdf)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[x] Lab embedded: difference-engine (shared English UI in static/labs; not forked)
[x] Figure: Su Song clock-tower diagram, Wikimedia Commons, PD-old-70-1923 (licence template and upload URL verified via Commons API 2026-09-26). Note: the file is a 2007 photo of a printed book page; PD rests on the underlying diagram (PD-Art reasoning). Flag for Lucas if a stricter policy applies.
[ ] Not used: south-pointing chariot model photos (licence not checked); Palace Museum calculator photos (copyright Palace Museum); Shanghai Serial illustration (journal copyright)
[ ] Native-reader proofread (zh-Hans) before final
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review); Taiwan-reader proofread still pending
-->
