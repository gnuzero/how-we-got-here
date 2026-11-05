---
title: "规模：从银河到太湖之光"
weight: 10
date: 2026-09-26
draft: false
phase: "3 — 构建 CPU 及其架构"
series_index: 10
aliases: []
tags: ["超级计算机", "DJS-130", "银河-I", "曙光", "龙芯", "神威·太湖之光", "天河", "指令系统"]
summary: "兼容别人、手工自造、用商品芯片拼、再自己设计芯片：中国的大型计算机四十年里换了几条路，每一次转向都被一个具体的约束逼出来。"
image_prompt: "Triptych: left, 1983 technicians hand-soldering a huge backplane of wires for the Yinhe-I; centre, a 1993 rack of VME boards with Motorola chips; right, rows of modern supercomputer cabinets glowing blue in a hall; clean technical illustration style"
video_prompt: "25-second animation: a soldering iron completing one joint among millions; zoom out to a cabinet; the cabinet splits into commodity boards on a bus; then many-core chips tile across a wafer; ending on a TOP500 ranking bar rising to first place and then being overtaken"
schematics: "Diagram 1: four strategies and their constraint (compatibility with NOVA; hand-built custom machine; commodity CPUs + UNIX under export controls; home-grown ISA/many-core). Diagram 2: Dawning-1 architecture: 4 boards × 4 Motorola 88100 on a VME bus, shared memory."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F14-01, F14-02, F14-03, F14-04, F14-05, F04-01, F04-02, F04-03, F04-04, F04-05, F04-07, F04-08, F04-09, F04-10, F04-11, F04-12, F04-13, F04-14 -->

一台计算机怎样变“大”？中国在四十年里走过几条路：兼容别人、自己手工造、用商品芯片拼，最后回到自己设计芯片。每一次转向，都是被一个具体的约束逼出来的。

## 先学会兼容：DJS-100 的一课

1973 年 5 月，四机部在清华大学宣布成立 DJS-100 系列机联合设计组。参与者林行良回忆，这个系列的指令系统“与当时美国的NOVA计算机的指令系统是一致的”。中科院物理所进口了一台 NOVA，把系统软件的机器代码反汇编成汇编语言，交给 1976 年成立的系统软件联合设计组分析、移植、改进，三年做出全套系统软件。林行良称，这在当时国内是第一次尝试这样的逆向工程；清华组负责服务性程序、BASIC、汇编语言和外设管理程序，其中外设管理程序是自己写的，“原来NOVA的软件中是没有的”。DJS-130 后来由北京、上海、苏州、天津等地工厂生产了几千台；清华方面的负责人吕文超总结的经验是“标准化、规模化、通用化”。

这一课很朴素：**指令系统兼容，就能继承软件。**后面每一代机器，都要在兼容与自主之间做选择。

## 银河-I：二百五十多万个手工焊点

1978 年 3 月，研制巨型机的任务交给国防科技大学，慈云桂任总指挥。1983 年 12 月 6 日，银河-I 在长沙通过国家鉴定，向量运算速度每秒一亿次以上，共生产安装 3 台。中国计算机学会的档案记录了鉴定方法：26 道考题，每题运行三遍，结果完全一致。据国防科大记载，这台机器有三十多万条线路、二百五十多万个焊点，全部手工焊接；系统设计组 15 个月画了 5000 多张逻辑图。国防科大和中国计算机学会都称，银河-I 使中国成为继美、日之后第三个能研制巨型机的国家；这个说法成立与否，取决于“巨型机”怎么定义。

## 曙光：换一条路，用商品芯片

1990 年 3 月，国家智能计算机研究开发中心成立，李国杰任主任。1993 年的曙光一号不再从头造一切：它用 Motorola 88100 微处理器，最多 16 个 CPU（每板 4 个，4 块板经 VME 总线相连），跑 UNIX，峰值定点速度每秒 6.4 亿次。计算所称，这是国内首次采用商品化微处理器芯片和 UNIX 操作系统研制并行机。

据中国计算机学会档案，曙光一号的攻坚阶段（1992.3—1993.10）以陈鸿安、樊建平、刘金水等人集中于美国硅谷“封闭式”攻关开始，技术路线还得到过伯克利的 David Patterson 和普林斯顿的李凯的建议。这只有一份来源，值得再用回忆录核实。2001 年初，曙光 3000 达到每秒 4000 亿次浮点运算，计算所称它“超出当时国外对我国禁运的高端计算机一个数量级”。出口管制，成了设计的驱动力。

## 龙芯：两个日期，指两件事

《人民日报》2019 年报道：2001 年 8 月，龙芯 1 号成功启动操作系统；2002 年 8 月，我国首款通用 CPU 龙芯 1 号流片成功。计算所所史则记 2002 年 9 月在展览上发布，0.18 微米 CMOS。报道还引用了胡伟武的反思：团队一度“过度追求多核以及浮点峰值性能的单一指标”，2013 年 5 月调整路线。2020 年推出、2021 年 4 月正式发布的 LoongArch 有近 2000 条指令，“不包含MIPS指令系统”。兼容与自主之间，这次选了自主。

## 登顶：只写榜单能核对的事

2010 年 11 月，国家超级计算天津中心的天河一号 A 以 2.57 PFlop/s 居 TOP500 第一。2013 年 6 月，国防科技大学的天河二号以 33.86 PFlop/s 登顶，16,000 个节点，每节点 2 颗 Intel Xeon 与 3 颗 Xeon Phi，共 3,120,000 核，此后连续六届居首。2016 年 6 月，神威·太湖之光以 93 PFlop/s 居第一：40,960 个节点、10,649,600 核，满载功耗 15.37MW，全部采用国产处理器。科技部说明，申威 26010 由国家高性能集成电路（上海）设计中心研制，单芯片 260 核，主频 1.5GHz。2018 年 6 月，美国的 Summit 以 122.3 PFlop/s 登顶，太湖之光在连续居首两年后降至第二。

对比一下：天河二号的算力来自美国芯片，太湖之光全用国产众核处理器。四十年后，DJS-100 那道“兼容还是自主”的题，又出现了一次。

**出处：**TOP500 榜单 2010-11、2013-06、2016-06、2018-06；科技部，2016。

在西方，DJS-100 所兼容的 NOVA 出自美国 Data General 公司；曙光一号请教过的 David Patterson 来自加州大学伯克利分校。

## 延伸阅读

- 吕文超，《100系列计算机联合设计成功的启示》（English: Lessons from the successful joint design of the 100-series computers），清华大学计算机系“60周年系庆”，2018-07-24。[链接](https://www.cs.tsinghua.edu.cn/info/1169/4071.htm)
- 林行良，《DJS100系列机系统软件联合设计》（English: Joint design of the DJS-100 series system software），清华大学计算机系“60周年系庆”，2018-07-24。[链接](https://www.cs.tsinghua.edu.cn/info/1169/4069.htm)
- 国防科技大学，《“银河－I”计算机横空出世！》（English: The Yinhe-I computer bursts onto the scene），国防科技大学官网，2019-12-06。[链接（存档）](https://web.archive.org/web/20260811113811/https://www.nudt.edu.cn/zjkd/kdgs/f510ef9ef03c49ebac9350a302c80290.htm)
- 中国计算机学会，《“银河-1”亿次计算机》（English: The Yinhe-1 100-million-ops computer），中国计算机历史记忆，2018-09-12。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2017/First_class/2018-09-12/652326.shtml)
- 中国计算机学会，《曙光1号并行计算机》（English: The Dawning-1 parallel computer），中国计算机历史记忆，2020-03-24。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2019/First_class/2020-03-24/697778.shtml)
- 中国科学院计算技术研究所，《历史沿革》（English: ICT history），计算所官网。[链接](https://www.ict.ac.cn/jssgk/lsyg/)
- 《把“不可能”变为现实的龙芯团队》（English: The Loongson team that made the “impossible” real），《人民日报》2019-06-17 第 14 版，计算所官网转载。[链接](https://ict.cas.cn/xwgg/mtwz/202008/t20200804_5649556.html)
- 《自主需要从根——龙芯中科正式发布完全自主指令集架构LoongArch》（English: Independence starts at the root: Loongson releases the LoongArch ISA），新华网（来源：中国网），2021-04-16。[链接](http://www.xinhuanet.com/tech/2021-04/16/c_1127339088.htm)
- 科技部，《申威处理器 中国超算最强芯》（English: The Sunway processor, the strongest chip in Chinese supercomputing），科技部网站，2016-06-29。[链接](https://most.gov.cn/kjbgz/201606/t20160628_126168.html)
- TOP500, “November 2010”, “June 2013”, “June 2016”, “June 2018”（English: TOP500 list pages），top500.org。[2010-11](https://www.top500.org/lists/top500/2010/11/) · [2013-06](https://www.top500.org/lists/top500/2013/06/) · [2016-06](https://www.top500.org/lists/top500/2016/06/) · [2018-06](https://www.top500.org/lists/top500/2018/06/)

