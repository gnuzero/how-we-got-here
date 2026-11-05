---
title: "花本：程序第一次和机器分开"
weight: 2
date: 2026-09-26
draft: false
phase: "1 — 基础：从机械计算到电子管计算"
series_index: 2
aliases: []
tags: ["花楼机", "花本", "挑花结本", "提花机", "天工开物", "云锦", "程序"]
summary: "从老官山汉墓的多综提花机到《天工开物》的结花本：织出什么花，记在一束丝线里，而不在织工脑子里。"
image_prompt: "A Ming-dynasty drawloom in a dim workshop: a drawboy seated high on the draw tower pulling cords from a hanging knotted-string pattern record (huaben), a weaver below throwing the shuttle, silk brocade emerging, warm historical lighting, accurate costume, no text"
video_prompt: "20-second animation: a point-paper grid becomes a matrix of knotted threads; each weft cord is pulled, a set of warps lifts, a shuttle passes and a flower pattern grows row by row; the used cord moves to the back of a loop; documentary style"
schematics: "Diagram 1: Laoguanshan single-hook multi-heddle loom as program store (pattern heddles) plus a stepping selector (toothed beam) reading one heddle per pick. Diagram 2: huaben as a binary matrix: foot-threads (warp) x ear-threads (weft), knot = lift; loop hung behind the loom so the pattern cycles."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F31-01, F31-02, F31-03, F31-04, F31-05, F31-06, F31-07, F31-08, F31-09, F31-10 -->

1637 年，宋应星在《天工开物》里写下一句话，放进今天的计算机教科书也不违和：

> 即织者不知成何花色，穿综带经，随其尺寸度数提起衢脚。

织工并不知道自己在织什么花。他只是按尺寸、按次数拉起该拉的线；梭子过去，“居然花现”。花纹在哪里？在一件叫“花本”的东西里：结花本的人照着画稿，用丝线“算计分寸杪忽而结成之”，再把它高高挂在花楼上。机器是机器，花本是花本。这就是“程序与机器分离”，它在中国有一条可以追到两千多年前的实物链。

<figure><img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Tiangong_Kaiwu_Drawloom.jpg" alt="《天工开物》中的花楼机木刻插图，上方坐着拽花工，下方是织工" loading="lazy" width="500"><figcaption>《天工开物》（1637）中的花机图：拽花工坐在花楼上提线，织工在下方投梭。图片：<a href="https://commons.wikimedia.org/wiki/File:Tiangong_Kaiwu_Drawloom.jpg">宋应星</a> / Wikimedia Commons，<a href="https://commons.wikimedia.org/wiki/Template:PD-old">公有领域</a>。</figcaption></figure>

## 老官山：储存，再释放

2012—2013 年，成都天回镇老官山 2 号西汉墓出土了 4 部竹木提花织机模型和 15 件纺织木俑，墓葬年代推测为景帝至武帝时期（约公元前 157—前 88 年）。中国丝绸博物馆称它们是迄今世界上最早的提花织机实物资料；发掘者认为，这些“是参照原织机制作的缩小模型”。

复原研究把它读作“一勾多综提花机”：纹样分散存放在一片片提花综里，织工每织一纬，就把“选综齿梁”移动一齿，让钩子对准下一片综，再踩踏板把它提起。丝绸博物馆的龙博称之为“利用多个综片将纹样信息储存再释放的装置”。一片综是一步，齿梁就是指向“下一步”的指针。要说明的是，这套操作顺序是依据模型做出的现代复原。

复原还走得更远。丝绸博物馆用改进的老官山型织机复制尼雅出土的“五星出东方利中国”锦：“总经根数有10470根，纹综84片，地综2片，穿综过程耗时一年有余”。换成今天的话：一段 84 步的程序，写了一年多。

**出处：**龙博《成都老官山汉墓出土提花织机的复原研究》《“五星出东方利中国”锦的复制》，中国丝绸博物馆，2021。

## 挑花与提花

纺织史学者赵丰区分了两种做法：“挑花”每织一次都要重新挑起经线；“提花”则“只需一次制作花纹程序，反复利用，循环织出同一图案”。“程序”二字是他自己用的。他还认为花楼机并非纯粹的本土发明：西域的“1-N 线综系统”传入后与多综提花结合，约在公元 6 世纪前后完善为束综提花机，南宋《蚕织图》是明确的图像证据。这是他的学术论证，年代并无定论。

## 十万根线的程序

到明清，大花楼机把这套思路推到了极致。中国丝绸博物馆的展览文字给提花机下的定义，几乎就是计算机术语：“利用提花规律的贮存来控制提花程序的织机”。据该展览介绍，南京妆花机的花本耳子线可多达十余万根；花本做成环状挂在机后，用过一根就移到最后，图案于是循环往复，像一个首尾相接的程序环。

南京云锦把编花本的工序叫“挑花结本”。据江西服装学院古丝绸研究院的介绍，意匠图的纵格对应经线：用丝线做“脚子线”当经，用棉线做“耳子线”当纬，逐格挑成花本；上机后，每根脚子线与经丝一一相连，拉起一根耳子线，该起花的经线就一齐抬起。每个结，就是一个“提或不提”。那里把这道工序称为“纹样由图纸过渡到织物上的桥梁”。

在西南，程序还可以带着走。丝绸博物馆展出的广西壮锦竹笼机，用约 100 根提花竹棍编成花本，每织一纬转动一根；傣锦机用耳子线帘式花本。老挝—泰国织工的花本，“是当地女儿重要的财产，无论是出嫁还是旅行都会带在身边”，展览称之为“原始的移动应用”。

## 同一门手艺，两种说法

2006 年，南京云锦木机妆花手工织造技艺列入第一批国家级非遗；2009 年，“南京云锦织造技艺”入选联合国教科文组织人类非遗代表作名录。中文官方介绍写的是“由材料准备、纹样设计、挑花结本、造机、织造等百余道工序构成”，织造时拽花工在上、织工在下。教科文组织的英文简介却写成 “the creation of jacquard cards for programming weaving patterns”，即制作用来编排织造图案的“贾卡卡片”。云锦的程序载体是结成的丝线，不是卡片。这个英文措辞，恰好抹掉了中国程序载体最独特的地方。

## 卡片来到中国

据中国丝绸博物馆介绍，贾卡织机约在清末民初经日本传入：1910 年，经日本改进、装有贾卡装置的提花机运到江浙，苏州人叫它“铁机”；1915 年，上海肇新绸厂引进了 9 台瑞士电力丝织机。在工业里，卡片渐渐取代了丝线花本。

在西方，法国人雅卡尔（Jacquard）用穿孔卡片控制提花。据《不列颠百科全书》，他 1801 年展示了改良的提花机，1804—1805 年推出用一串可更换的穿孔卡片控制提花的装置，1806 年这种织机被宣布为公共财产。有意思的是，同一份中国丝绸博物馆展览文字对贾卡的发明年份既写 1817 年又写 1799 年，自相矛盾。

## 延伸阅读

- 宋應星，《天工開物·結花本》（English: *Tiangong Kaiwu*, "Knotting the pattern record"），1637，维基文库。[链接](https://zh.wikisource.org/wiki/天工開物/結花本)
- 宋應星，《天工開物·花機式》（English: *Tiangong Kaiwu*, "The drawloom"），1637，维基文库。[链接](https://zh.wikisource.org/wiki/天工開物/花機式)
- 龙博，《成都老官山汉墓出土提花织机的复原研究》（English: Reconstructing the pattern looms from the Laoguanshan Han tomb, Chengdu），中国丝绸博物馆，2021-04-15。[链接](https://www.chinasilkmuseum.com/gskt/info_319.aspx?itemid=28182)
- 龙博，《“五星出东方利中国”锦的复制》（English: Re-weaving the "Five Stars Rise in the East" brocade），中国丝绸博物馆，2021-05-07。[链接](https://www.chinasilkmuseum.com/gskt/info_319.aspx?itemid=28201)
- 吴晓铃，《成都老官山汉墓出土的4台织机入选“指南针计划”》（English: The four looms from Laoguanshan selected for the "Compass Plan"），四川日报，中国社会科学院考古研究所转载，2014-09-17。[链接](http://kaogu.cssn.cn/xsqy/zdkt/201409/t20140917_5948961.shtml)
- 赵丰，《丝路之绸与中国纺织史研究》（English: Silk Road silks and the study of Chinese textile history），科学网，2017-11-27。[链接](https://www.sciencenet.cn/skhtmlnews/2017/11/3788.html)
- 中国丝绸博物馆，《神机妙算：世界织机与织造艺术》展览（English: Divine machines, marvellous reckoning: world looms and the art of weaving, exhibition），2018-04-03。[链接](https://www.chinasilkmuseum.com/cs/info_164.aspx?itemid=30809)
- 江西服装学院古丝绸研究院，《南京云锦》（English: Nanjing yunjin brocade），2022-10-31。[链接](https://gscyjy.jift.edu.cn/info/1072/1005.htm)
- 中国非物质文化遗产网，《南京云锦织造技艺》（English: Craftsmanship of Nanjing yunjin brocade: national record）。[链接](https://www.ihchina.cn/yunjinzhizao.html)
- UNESCO，“Craftsmanship of Nanjing Yunjin brocade”（中文：南京云锦织造技艺），人类非物质文化遗产代表作名录，2009。[链接](https://ich.unesco.org/en/RL/craftsmanship-of-nanjing-yunjin-brocade-00200)
- Encyclopaedia Britannica，“Joseph-Marie Jacquard”（中文：《不列颠百科全书》雅卡尔词条），britannica.com。[链接](https://www.britannica.com/biography/Joseph-Marie-Jacquard)

