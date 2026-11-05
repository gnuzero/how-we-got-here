---
title: "光刻：从显微镜到扫描机"
weight: 13
date: 2026-09-26
draft: false
phase: "8 — 工艺节点与制造"
series_index: 13
aliases: []
tags: ["光刻", "光刻机", "分步重复", "清华大学", "909工程", "华虹", "中芯国际", "上海微电子"]
summary: "1964 年的“土光刻机”是两台显微镜加一盏紫外灯；1980 年清华做出自动对准的分步投影光刻机；1990 年代，摩尔定律成了审批流程的时钟。"
image_prompt: "Split composition: left, a 1964 Beijing lab bench with two brass microscopes and a small UV lamp improvised into a mask aligner; right, a modern white lithography scanner in a cleanroom under yellow light; thin line of light connecting them; documentary illustration style, no text"
video_prompt: "25-second sequence: UV light passes through a mask under a microscope objective in 1964; a laser-interferometer stage steps a pattern across a glass plate cell by cell (1971); a projection lens focuses a 0.8 micrometre line (1980); a calendar flips five years while a chip roadmap advances two generations; a fab lights up in Pudong in 1999; a scanner is delivered in 2016"
schematics: "Diagram 1: step-and-repeat vs scanning exposure (stepper exposes one field at a time; scanner sweeps a slit across the field). Diagram 2: timeline 1964 home-made aligner → 1971 Tsinghua automatic step-and-repeat camera (532 nm, 2-3 µm) → 1980 Tsinghua automatic-alignment projection stepper (0.8 µm, developer's figure) → 1996 Project 909 approved (8-inch, 0.5 µm) → 1999 Hua Hong NEC → 2000 SMIC → 2016 SMEE first domestic front-end scanner (catalogue: 90 nm)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F07-09, F07-13, F16-01, F16-02, F16-03, F16-04, F16-05, F16-06, F16-07, F16-08, F16-10 -->

光刻，说到底是用光把图形印到硅片上。你可以把它想成一台极精密的照相机：光越细，印出的线越细。1960 年代初，中国连一台这样的照相机都没有。

## 1963—1964：两台显微镜，一盏紫外灯

据半导体所 2024 年的文章，当时国内根本没有光刻机，王守觉“因陋就简，巧妙地用两台显微镜再加上一个紫外曝光灯”，搭建了一台“土光刻机”。靠它，研究团队 1963 年底做出第一批超小型硅平面高速开关管和高频晶体管样管，只有火柴头那么大；1964 年改进后小如芝麻，俗称“芝麻管”。1964 年 4 月，半导体所的 5 种硅平面器件通过鉴定。这些晶体管从哪里来、后来用到哪里，见[《从一门课到一块芯片》]({{< relref "05-zh-transistors-semiconductors.md" >}})。

## 1971—1980：清华造的分步重复照相机

下一步是把手工对准变成机器。据中国计算机学会的历史记忆档案，1971 年，我国第一台自动分步重复照相机研制成功，投入规模生产，供应全国半导体行业，1978 年获全国科技大会奖；它的一块插件印刷电路底板由清华 1954 级计算机系校友谢树煜捐赠，今藏清华大学科学博物馆。分步重复的意思是：把同一个图形一格一格地重复曝光，排满整块版。

参与研制的清华教授徐端颐回忆，第一代激光干涉定位分步重复照相机用的是 532 纳米的绿光，加上物镜数值孔径不够大、运行中焦距失调，加工能力只有 2—3 微米，定位精度为 ±0.25 微米。波长决定了能印多细，这正是英文版第 48 章的主题。

据徐端颐的说法，1970 年代以分步重复照相机、图形发生器及分步投影光刻机为代表的集成电路微细加工设备“99%来自国内”，供应商正是清华大学，精密仪器系工厂累计生产超过 200 台。他还写道，1980 年清华完成了国内第一台自动对准分步投影光刻机，加工最细线宽 0.8 微米，安装在华北微电子研究所，获 1981 年北京市首届科技成果一等奖；“三年之后类似的设备才开始进入我国”。0.8 微米这一数字出自研制者本人的回忆，还需要鉴定档案佐证。

## 1990—1999：摩尔定律成了审批的时钟

1990 年，71 岁的王守武在给全国政协七届三次会议的提案中写道：“想从西方国家引进先进的微电子技术和装备纯属幻想。”

1996 年起任上海 909 工程办公室主任的夏钟瑞，在 2019 年的口述中讲了此前 908 工程的教训：它的可行性研究报告光审批就花了 5 年，而按摩尔定律，这期间国际半导体产业升级了两代，工程投产即落后。据他回忆，1995 年底江泽民在韩国考察三星的半导体工厂，回国后在一次专门会议上说，就算砸锅卖铁也要把我们国家的半导体产业搞上去。1996 年 3 月 29 日，国务院正式批准 909 工程立项，核心是投资百亿建设一条 8 英寸、0.5 微米的超大规模集成电路生产线，电子工业部代表中央出资 60%，上海出资 40%。工厂 18 个月建成；1999 年 9 月 28 日，华虹 NEC 浦东新厂投产，月产 2 万片。

## 2000 年以后：代工厂与国产扫描机

据中芯国际科创板上市的法律意见书，2000 年 4 月 3 日，中芯国际依开曼群岛公司法注册成立，同年 5 月发行的首批 10,000 股普通股由张汝京持有。它与台积电的官司以 2009 年的和解收场：据中芯国际 2009 年 11 月 10 日的公告，加州陪审团 11 月 4 日判中芯国际败诉，双方 11 月 9 日订立和解协议，中芯国际向台积电支付合共 2 亿美元（分四年付清），并授出约占已发行股本 8% 的股份。

光刻机本身呢？上海微电子 2002 年 3 月在张江成立。据公司的发展历程，2016 年 6 月，“我司首台暨国内首台前道扫描光刻机交付用户”；其 SSX600 系列产品页标称可满足 90 纳米、110 纳米、280 纳米关键层和非关键层的光刻需求。这和清华 1980 年的“国内第一台”并不矛盾：那是分步投影式，一次曝光一整格；这是扫描式，用一道光缝扫过整格。

节点数字这时也成了政策指标。2014 年 6 月的《国家集成电路产业发展推进纲要》要求，到 2015 年 32/28 纳米制造工艺实现规模量产，到 2020 年 16/14 纳米制造工艺实现规模量产。这些纳米数字到底量的是什么，见英文版第 47 章。

**出处：**徐端颐《我国半导体专用设备研究开发历史上光辉的一页》；贾彦、宋晓东《神秘的“909工程”》（夏钟瑞口述）；上海微电子《发展历程》。

## 延伸阅读

- 中国科学院半导体研究所，《自力更生，“从0到1”｜中国第一块集成电路诞生记》（English: Self-reliance "from 0 to 1": the birth of China's first integrated circuit），原载《中国科学报》，2024-03-14。[链接](https://semi.cas.cn/xwdt/zhxw/202403/t20240314_7031094.html)
- 中国计算机学会，《清华大学自动分步重复照相机印刷电路板》（English: PCB from Tsinghua's automatic step-and-repeat camera, CCF computing-history record, 2024），中国计算机历史记忆。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2024/ellsjy/2025-02-28/838658.shtml)
- 徐端颐，《我国半导体专用设备研究开发历史上光辉的一页》（English: A glorious page in the history of China's semiconductor equipment R&D, a first-hand account by a Tsinghua developer），清华大学建党百年网站。[链接](https://www.jiandang100.tsinghua.edu.cn/info/1014/6518.htm)
- 计红梅，《王守武：为中国半导体奠基的“大王先生”》（English: Wang Shouwu, the founder of Chinese semiconductors），《中国科学报》2023-11-17，中国科学院微电子研究所网站转载。[链接](https://ime.cas.cn/icac/newsroom/newsroom_1/202312/t20231228_6931573.html)
- 贾彦、宋晓东，《神秘的“909工程”：为何国家领导人说砸锅卖铁也要搞》（English: The mysterious Project 909, oral history of Xia Zhongrui, director of the 909 office），上观新闻 2020-05-12，上海党史网转载。[链接](https://www.ccphistory.org.cn/shds/pdkfkf30zn/content/3a59d8f1-f741-4b02-8aad-ebdefe4251d3.html)
- 上海市锦天城律师事务所，《关于中芯国际集成电路制造有限公司首次公开发行人民币普通股（A股）股票并在科创板上市的法律意见书》（English: Legal opinion for SMIC's STAR Market listing），上海证券交易所披露，2020 年 6 月。[链接](http://static.sse.com.cn/stock/disclosure/announcement/c/202006/000497_20200622_RC98.pdf)
- 中芯國際，《中芯國際與台積電達成所有訴訟和解，預期不會對客戶造成干擾》（English: SMIC and TSMC settle all litigation; no disruption to customers expected），2009-11-10。[链接](https://www.smics.com/tc/site/news_read/4281)
- 上海微电子装备（集团）股份有限公司，《发展历程》（English: SMEE company history），smee.com.cn。[链接](https://www.smee.com.cn/eis.pub?method=indexinfo&onclicknodeno=1_2_2&service=homepageService)
- 上海微电子装备（集团）股份有限公司，《SSX600系列光刻机》（English: SSX600-series scanner product page），smee.com.cn。[链接](https://www.smee.com.cn/eis.pub?method=indexinfo&onclicknodeno=1_4_1_1&service=homepageService)
- 国务院，《国家集成电路产业发展推进纲要》（English: National guideline for the development of the IC industry），2014 年 6 月，国家网信办网站转载。[链接](http://www.cac.gov.cn/2014-06/26/c_1111325916.htm)

