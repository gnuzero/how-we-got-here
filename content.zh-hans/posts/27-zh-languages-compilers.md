---
title: "编程语言与编译器：从 104 机到仓颉"
weight: 16
date: 2026-09-26
draft: false
phase: "4 — 软件基础：操作系统、编程语言与实时系统"
series_index: 16
aliases: []
tags: ["编译器", "董韫美", "徐家福", "104机", "BCY", "ALGOL 60", "国家标准", "LCCD", "仓颉"]
summary: "1960 年，两位程序员花三四个月读懂一个设计者已离开、资料残缺的编译程序；此后几家单位的说法里都有“第一”或“最早”，各自说的并不是同一件事。"
image_prompt: "Early-1960s Beijing computing institute: two young programmers at a desk covered with long printouts and hand-drawn flowcharts, pencils and a flowchart template, a large vacuum-tube computer cabinet in the background; black-and-white documentary photo style, no text"
video_prompt: "25-second sequence: a stack of incomplete, error-marked compiler documents; two people annotate listings day after day, a calendar flips through three months; a program finally runs on the 104; cut to an ALGOL-like BCY program on a coding sheet, a J-501 console, a 1979 national standard cover; then Stanford 1980, a brush-like Chinese glyph drawn by parameters; end on a 2024 conference stage announcing Cangjie"
schematics: "Diagram: what a compiler does (one line of high-level code → several machine instructions). Timeline: 1960 104 compiler rescued → 1963 P-grammar → 1964–65 BCY on the 119 (CAS profile) / from 1971 BCY on the 109 and 111 (CCF record) → 1965-06 J-501 ALGOL debugged → 1967 DJS-21 ALGOL 60 → 1977 NDHD → 1979 XCY; GB 1500 ALGOL 60 first issued 1979-02-13 → 1980 LCCD at Stanford → 1982 GB 3057 FORTRAN → 1984 GB 4144 Minimal BASIC → 2004 EPL review → 2019 Cangjie project → 2024-06-21 Cangjie released. Side table: the 'first' claims and the exact wording of each."
labs: ["mini-cpu"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F09-01, F09-02, F09-03, F09-04, F09-05, F09-06, F09-07, F09-08, F09-09, F09-10, F09-11, F03-02, F03-12 -->

编译器把人写的程序翻译成机器能执行的指令。中国第一批编译器的故事，是从一个设计者已经离开、资料残缺的程序开始的。

## 104 机：把别人的编译程序读懂

1960 年，中国科学院计算技术研究所的董韫美参加了 104 机编译程序的总体设计。据中国科学院官网 2026 年的人物报道，104 机是“我国当时最大的计算机”。编译程序进入联调时，“原来的设计人员大多已经离开，留下的资料不仅残缺，还有不少错误”。董韫美和同事李开德决定不放弃，“每天看几十条程序，反复推测、验证、再推测，整整看了三四个月”，一点一点弄清这个程序接受什么输入、做什么加工、产生什么输出。报道说，“104机编译程序成为国内第一个能够运行的编译程序”。

那个年代程序员用的工具，有一部分保存了下来。中国计算机学会 2019 年认定的历史记忆里，有张绮霞保存的流程图板、程序纸和 104、109乙、111、119、655、013 机的指令系统表。同一条目记载，《104电子计算机标准程序汇编》是“国内首个算法标准程序库”，用浮动地址的机器语言写成，共发行 2600 册。

下面的小 CPU 实验，可以让你体会手写机器指令是什么感觉：先汇编引导程序，再单步执行，每条助记符都对应一串操作码。编译器做的，就是把一行高级语言自动变成许多条这样的指令。（这台小 CPU 是教学模型，和 104 机的指令系统无关。）

{{< lab type="mini-cpu" >}}

## P语法与 BCY

1962 年，董韫美所在的程序组转向研究 ALGOL 60。1963 年，他与李开德提出语法模型“P语法”，用数学方式精确描述程序语言的规则。BCY 的来历有两种记载。据中国科学院的人物报道，1964 至 1965 年，董韫美主持研制 BCY，在 119 机上成功运行，报道称它是“国内最早的实用高级程序语言”。中国计算机学会“中国计算机历史记忆”收录的程序手稿条目则写道，BCY 编程语言系统“是由中科院计算所三室姚伟民等自主研发”，“从1971年起配置于109，111等国产机上”。两份记载给出的研制者和机器不同，这一页把两说并列，不作取舍。据中国科学院的报道，BCY 借鉴 ALGOL 的核心思想，删繁就简，更贴近中国计算机的硬件；报道还说它“开创性地支持汉字书写”，但没有说明汉字具体用在哪里。同一篇报道写到，BCY 后来用于 109丙机和 015 机：109丙机为“两弹一星”研制工作了 15 年，015 机连续运行 16 年。

## 谁是“第一”

几乎同时，南京大学也在做 ALGOL。中国计算机学会的终身成就奖介绍说，1965 年徐家福领导南京大学与华东计算所的研制组，在国产 J-501 机上研制出“中国第一个ALGOL编译系统”。《南京大学报》上一位组员的回忆更具体：1964 年 8 月开工，共 8 人，1965 年 6 月调试完毕，是“国内第一个可用的Algol编译系统”。北京大学这边，据陈嘉庚科学奖基金会 1990 年的获奖介绍，王选与北大另三位同志于 1967 年完成 DJS21 机 ALGOL 60 编译系统，“是国内最早的几个实用编译系统之一”。1975 年起，王选转向汉字激光照排系统的研制。

把几种说法放在一起看，用的标准并不相同：“第一个能够运行的编译程序”“最早的实用高级程序语言”“第一个ALGOL编译系统”“第一个可用的”“最早的几个实用编译系统之一”。这一页不替它们排座次。

## 1970 年代：系统语言与国家标准

1977 年，徐家福在 655 机上设计实现了基于自编译语言的软件自动产生系统 NDHD；1979 年，他与仲萃豪、杨芙清合作研制通用系统程序设计语言 XCY（杨芙清的操作系统工作见[《操作系统》]({{< relref "23-zh-operating-systems.md" >}})）。据中国计算机学会的记载，张绮霞第一次用 FORTRAN 编程计算，是 1976 年在华东计算所的 655 机上。

语言也成了国家标准。据标准目录，ALGOL 60 国家标准 GB 1500 首发于 1979 年 2 月 13 日，1987 年代替它的 GB/T 1500-1987 等同采用 ISO 1538-1984；FORTRAN 标准 GB 3057-1982 后来被 GB/T 3057-1996 全部代替；1984 年的最小 BASIC 标准 GB 4144-1984，是为了“在多种自动数据处理系统中促进BASIC程序的可互换性”。1979 至 1981 年，徐家福参加了 ALGOL、COBOL 国家标准的制定。

## 汉字字形与中文编程

1978 年 11 月，董韫美到斯坦福大学做访问学者，合作导师是高德纳。据中国科学院的报道，他用参数描述汉字笔画，做成 LCCD 系统，1980 年在斯坦福人工智能实验室运行；1981 年《计算机程序设计艺术》第二卷新版问世，“索引中首次出现了汉字”。回国后，他研发出汉字字形设计系统 CCDS，并用它设计了 GB 2312-80 全部 6763 个汉字的宋体字形。

进入 21 世纪，也有人专门做中文编程。易语言官网称，“易语言汉语编程环境”2004 年 11 月获得科学技术部高技术研究发展中心组织的技术经济评议。据南京大学的新闻稿，2024 年 6 月 21 日，华为在开发者大会上向全球开发者介绍了自研编程语言仓颉，并发布了开发者预览版。新闻稿说，“此前主流的通用编程语言均源于国外”；仓颉项目 2019 年启动，南京大学冯新宇教授担任首席架构师。

英文版第 27 章讲 FORTRAN、COBOL、Lisp 和 C，第 28 章讲编译器、JIT 和现代语言运行时；这一页讲的是同一批问题在中国由谁、在哪几台机器上做出来。

**出处：**樊晓丽《董韫美：在空白荒原拓出中国软件之路》（中国科学院官网）；中国计算机学会“中国计算机历史记忆”与终身成就奖介绍；《南京大学报》《铁骨铮铮一鸿儒》。

## 延伸阅读

- 樊晓丽，《董韫美：在空白荒原拓出中国软件之路》（English: Dong Yunmei: opening a road for Chinese software on blank ground），《中国科学报》，中国科学院官网，2026-08-27。[链接](https://www.cas.cn/zt/hyzt/ysdh22nd/fc/202608/t20260827_5119143.shtml)
- 中国计算机学会，《2013年CCF终身成就奖 董韫美》（English: CCF Lifetime Achievement Award 2013: Dong Yunmei），2013。[链接](https://www.ccf.org.cn/Awards/Awards_Recipients/2013/Lifetime_Contribution/2013-02-16/578017.shtml)
- 中国计算机学会，《2011年CCF终身成就奖 徐家福》（English: CCF Lifetime Achievement Award 2011: Xu Jiafu），2011。[链接](https://www.ccf.org.cn/Awards/Awards_Recipients/2011/Lifetime_Contribution/2011-02-16/578028.shtml)
- 《南京大学报》，《铁骨铮铮一鸿儒》（English: A scholar of iron integrity, a team member's memoir of Xu Jiafu），2020-05-20。[链接](https://xiaobao.nju.edu.cn/da/a0/c18185a318112/page.htm)
- 中国计算机学会，《104、109乙、111、119、013、655等机器程序手稿》（English: Program manuscripts for the 104, 109B, 111, 119, 013, 655 and other machines, China Computing History Memory, 2019），2020-03-24。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2019/Second_class/2020-03-24/697781.shtml)
- 陈嘉庚科学奖基金会，《技术科学奖·1990·王选》（English: Tan Kah Kee Science Award in technological sciences, 1990: Wang Xuan），2009-04-02。[链接](https://tsaf.cas.cn/ljhjqk/cjgkxj/asj/1990/200904/t20090402_4954702.html)
- 工标网，《GB/T 1500-1987 程序设计语言 ALGOL 60》（English: Catalogue record for the ALGOL 60 national standard）。[链接](http://doc.csres.com/detail/63390.html)
- 国家标准信息公共服务平台，《GB/T 3057-1996 信息技术 程序设计语言 Fortran》（English: National standard record for Fortran）。[链接](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D79D40D3A7E05397BE0A0AB82A)
- 工标网，《GB 4144-1984 程序设计语言 最小BASIC》（English: Catalogue record for the Minimal BASIC national standard）。[链接](http://doc.csres.com/detail/65823.html)
- 易语言官网，《易语言获得〈科技项目技术经济评议书〉》（English: EPL receives a technical-economic review certificate, vendor news），2004-11-18。[链接](http://epl.eyuyan.com/news/2004/111801.html)
- 南京大学，《华为发布通用编程语言“仓颉”，南京大学计算机科学与技术系冯新宇教授作为首席架构师领导研发》（English: Huawei releases the general-purpose language Cangjie, with NJU's Feng Xinyu as chief architect），2024-06-21。[链接](https://www.nju.edu.cn/info/1067/369771.htm)

