---
title: "一台服务器装不下：中国大陆第一批搜索引擎"
weight: 19
date: 2026-09-26
draft: false
phase: "7 — 分布式系统、大数据与编排"
series_index: 19
aliases: []
tags: ["搜索引擎", "网络指南针", "天网", "木棉", "CERNET", "中文切词", "九五攻关", "集中式与分布式"]
summary: "据赛尔网络的回顾，中国大陆第一批搜索引擎诞生在三所大学的实验室里；它们先撞上中文没有空格这堵墙，再撞上网页多到一台机器装不下这堵墙。"
image_prompt: "1997 university network lab in Beijing: one beige tower server and one PC on a desk, cables to a wall socket labelled CERNET, a whiteboard with a sentence of Chinese characters split by vertical strokes; later-era racks faintly overlaid behind them to suggest growth; documentary illustration, no readable text"
video_prompt: "20-second animation: a line of Chinese characters with no spaces; candidate word boundaries flicker until a query matches; then a page counter climbs from 200,000 (1997) to tens of millions (2000) while a single server strains and splits into several parallel machines; end on the words centralised vs distributed"
schematics: "Diagram 1: the 1996 national project -> CERNET task 'network information discovery' -> three university engines (Tsinghua Net Compass, PKU Tianwang, SCUT Kapok). Diagram 2: why segmentation matters: character-by-character indexing vs word-based indexing, with the Honglou Meng example '邸报看真'. Diagram 3: one server + one PC (Tianwang 1997) vs parallelised system (2000s), set against Li Xing's 'centralised, not distributed' remark."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F29-01, F29-02, F29-03, F29-06, F29-07 -->

1997 年，中国大陆的第一批搜索引擎（赛尔网络的回顾这样称呼它们），是在大学实验室里、用国家攻关项目的经费做起来的。它们先撞上一堵英文搜索没有的墙：中文词与词之间没有空格。接着又撞上第二堵墙：网页多到一台机器装不下。

## 一个攻关项目，三所大学

据赛尔网络 2024 年为 CERNET 三十周年写的回顾，1996 年“九五”攻关启动，CERNET 领到的任务是“计算机信息网络及其应用关键技术研究”。项目列了六项任务，其中一项是“网络信息发现技术”，搜索引擎就属于这一项。这个课题没有交给一家单位，而是选了三所高校来做：清华大学、北京大学和华南理工大学。按这篇回顾的说法，中国大陆第一批搜索引擎的研究，就这样在三所大学的网络实验室里开始了：清华的网络指南针、北大的天网、华南理工的木棉。

整个项目由教育部主持，清华大学等 14 所单位承担，1998 年通过国家鉴定验收。那篇回顾称，这是“我国第一个互联网领域的国家重大科研项目通过验收”。

## 第一堵墙：没有空格

清华的网络指南针由李星主持。英文的词与词之间有空格，机器天然知道在哪里切开；中文没有。所以团队面对的第一个关键问题是：“如何切分中文的关键词来进行搜索？”一个字一个字地切，计算量巨大；按词来切，又得决定那些没有实际含义的词组要不要切。

据同一篇回顾，指南针考虑了汉语的使用习惯，调整了切词方式。《红楼梦》里“雨村领其意，作别至馆中，忙寻邸报看真确了”一句中的“邸报看真”，既不是成语，也不是常用词，在指南针上照样能搜出链接。1997 年 10 月，指南针开始提供中英文信息查询，收录了 20 多万网页；从 1999 年 12 月到 2000 年 8 月，10 万多名用户在上面查询了 80 多万次。

## 第二堵墙：一台服务器

据赛尔网络的回顾，北大天网 1997 年 10 月 29 日起在 CERNET 上提供服务（它和百度的渊源，另见本书中文版《从中文信息处理到注意力机制》一页）。《中国教育网络》2014 年的文章这样转述技术负责人刘建国的看法：当时的天网只是搜索技术的一个实验性产品，“只有一台服务器、一台PC、抓网页，建索引、提供搜索服务，虽然简陋但却实用”。

网页的数量很快涨了上去。据赛尔网络的回顾，天网团队认为，搜索的核心问题可以归结为“一要准，二要快”；到 2000 年李晓明带领新课题组时，网上的网页已达千万级，闫宏飞和彭波开发了一套技术，实现系统的并行化。《中国教育网络》的文章则记下了随后的规模：到 2002 年，天网 FTP 搜索已有上千万个文件，每天点击 60 多万次；到 2005 年底，天网 Maze 有 340 万注册用户、30 万活跃用户，同时在线人数最高突破 10 万。再往后，据赛尔网络的回顾，北大网络实验室 2002 年开发建设了中国Web信息博物馆，到 2015 年收藏了 70 多亿网页文本数据。

**出处：**赛尔网络，《中国第一批搜索引擎往事丨CERNET30周年》，2024；《中国教育网络》，《百度与天网—你不知道的那些事》，2014。

## 李星的两个遗憾

多年以后，李星这样回顾网络指南针：“第一个遗憾是依赖于集中式的技术，未能像谷歌那样发明Map-Reduce技术，从而走到分布式。第二个遗憾是缺乏相应的机制，将网络指南针商业化。”

回顾文章解释了前一个遗憾：指南针的体系结构是集中式的，互联网信息量不大时够用；互联网飞速发展以后，这种模式就逐渐跟不上了。一台机器能装下的网，很快就不是真正的网了。

## 在西方

同一篇回顾把谷歌的办法概括为“面向大规模数据处理的并行计算模型和方法”，也就是 MapReduce：把一份大活拆给许多台机器同时做。本书英文版第 44 章讲的正是这条路：网页多到一台机器装不下，存储和计算就都得假设机器会坏、并且分到大量机器上去做。

线路通了以后，人们一边找信息，一边找人说话；同一时期交谈的那一半，见[《挤不进去的广场：两岸三地的校园 BBS》]({{< relref "43-zh-bbs.md" >}})。

## 延伸阅读

- 赛尔网络，《中国第一批搜索引擎往事丨CERNET30周年》（English: Stories of China's first search engines: CERNET at 30），中国教育和科研计算机网，2024-10-14。[链接](https://www.cernet.com/hlw30/202410/4811.html)
- 《中国教育网络》，《百度与天网—你不知道的那些事》（English: Baidu and Tianwang: things you didn't know），中国教育网，2014-11-05。[链接](https://www.edu.cn/cxcy_12722/20141105/t20141105_1198967.shtml)

