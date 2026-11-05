---
title: "操作系统：从大庆的“虚拟机”到开源欧拉"
weight: 15
date: 2026-09-26
draft: false
phase: "4 — 软件基础：操作系统、编程语言与实时系统"
series_index: 15
tags: ["操作系统", "杨芙清", "150机", "虚拟机", "红旗Linux", "银河麒麟", "openEuler", "CLE"]
summary: "1970 年代初，北大的操作系统组在大庆油田的另一台计算机上模拟出 150 机，用 23 天调通了操作系统；半个世纪后，中国的操作系统走进了开源基金会。"
image_prompt: "Early-1970s computer room at Daqing oilfield in winter: a dozen young engineers in padded coats working night shifts at a large transistor computer console, paper tape and printouts everywhere, a thermos and enamel mugs, frost on the window; black-and-white documentary photo style, no text"
video_prompt: "25-second sequence: a hardware cabinet labelled 150 sits unfinished in Beijing; cut to Daqing where another computer runs a program that pretends to be the 150; a calendar counts 23 days; in 1973 a loudspeaker on the finished 150 plays a tune from instruction timings; montage: a 1981 OS manual, a microkernel diagram, a Red Flag Linux boot screen in 1999, a FreeBSD-derived layer in 2006, a foundation logo in 2021"
schematics: "Timeline: 1969-12 150 task → Daqing simulation, OS debugged in 23 days → 1973 150 plays The East Is Red → 1981 240 OS in a high-level language → 1990s COSIX V2.0 microkernel → 1998 CLE (Taiwan) → 1999-08-10 Red Flag Linux → 2003 OSSF (Taiwan) → 2006-12-04 Kylin accepted (own kernel layer + FreeBSD-derived service layer) → 2019 openEuler open-sourced, HarmonyOS microkernel → 2021 openEuler donated to OpenAtom. Side diagram: a program on machine A emulating machine B's instruction set."
labs: ["vm-terminal"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F10-01, F10-02, F10-03, F10-04, F10-05, F10-06, F10-07, F10-08, F10-09, F10-10, F10-11, F10-12 -->

假设你要给一台还没造好的计算机写操作系统。硬件没调通，你手里的程序没地方跑。怎么办？1970 年代初，北京大学的一群年轻人给出的办法，今天我们叫它虚拟机。

## 150 机：先在别的机器上模拟出它来

1969 年 12 月，国务院向北京大学下达研制每秒百万次集成电路大型计算机 150 机的任务。杨芙清任组长，负责 150 机的多道运行操作系统。杨芙清在回忆中写道，组员是青年教师、留校学生和工厂、用户单位的人员，“他们都没有见过计算机，也不知什么是操作系统”。

一年多后，整套操作系统软件设计出来了，150 机的硬件却还没调试完成。据杨芙清回忆，操作系统组和编译系统组一起去了大庆油田，在那里的 108乙机上编写了一套仿真 150 机指令系统的程序，模拟 150 机的硬件，然后在模拟得到的“虚拟机”上调试 150 机的操作系统和编译系统。十几个人昼夜倒班，23 天就把多道运行操作系统调试成功，并完成了与编译系统的联调。回到北京，他们再用软件帮助硬件调试。

机器造好后怎么宣布？每条指令的微程序不同，执行起来就是不同的频率。他们接上喇叭，挑出合适的指令组成音阶，写出《东方红》的曲谱程序。据杨芙清回忆，1973 年的一个晚上通宵调试，第二天早晨乐曲放了出来，“这首《东方红》宣告我国第一台百万次集成电路计算机研制成功”。

下面这个实验室做的是同一件事：你的浏览器用软件模拟一台 x86 计算机，上面跑着真正的 Linux。你在屏幕里敲下的每条命令，都由软件模拟出来的硬件执行。

{{< lab type="vm-terminal" height="720" >}}

之后，杨芙清参加 200 系列机的软件总体设计，负责 240 机操作系统。1981 年，这个采用层次管程结构、PCM 方法设计的操作系统完成，有批处理和实时两个版本。杨芙清称之为“我国第一个用高级语言书写的大型操作系统”；用的是哪种语言，回忆里没有写明。同一时期的系统程序设计语言，见[《编程语言与编译器》]({{< relref "27-zh-languages-compilers.md" >}})。

## 从微核心到红旗 Linux

1997 年《软件学报》的一篇论文讨论了国产操作系统 COSIX V2.0 的安全设计。据论文摘要页，COSIX V2.0 采用基于微核心的多服务器结构，课题来自“八五”国家项目。

据《南方都市报》2005 年的报道，1999 年 8 月 10 日，孙玉芳（2005 年去世时任中国科学院软件研究所副所长）带领的团队发布红旗 Linux；2000 年，孙玉芳创建北京中科红旗软件技术有限公司。该报道还说，从 1999 年起，孙玉芳与香港文化传信集团的朱邦复合作筹建北京红旗中文贰仟软件技术有限公司（简称中文2000），2001 年推出 RedOffice 办公套件，与红旗 Linux 一起中标北京市政府采购，报道称这是“我国第一次政府软件正版化采购”。

## 银河麒麟：自己的内核层，FreeBSD 的服务层

据中国教育和科研计算机网的报道，2001 年，国家把研制拥有自主知识产权的操作系统列为 863 重大专项，由国防科技大学计算机学院承担。据《光明日报》2006 年的报道，“银河麒麟”服务器操作系统于当年 12 月 4 日通过 863 计划信息领域办公室组织的专家验收，它“由自主研发的基本内核层和基于FreeBSD(一种Unix操作系统)改造的系统服务层组成”。也就是说，它的系统服务层来自英文版第 22 章讲到的 BSD 一支。该报道还称，它是“我国第一个高安全等级(B2级)的64位操作系统”。

## 2019：开源，并把代码交出去

2019 年 12 月 31 日，华为宣布 openEuler 开源社区正式开放源代码、镜像及开发测试环境；2021 年 11 月，华为宣布把欧拉的全量代码、品牌商标、社区基础设施等资产捐赠给开放原子开源基金会。同在 2019 年，华为香港发布的开发者大会新闻稿引述华为消费者业务 CEO 余承东的话说，鸿蒙 OS 是“一款建基於微內核、以全場景應用為中心的分佈式操作系統”。微内核的思路，在 1990 年代的 COSIX 和 2019 年的鸿蒙上都出现过。

## 台湾：从 CLE 到自由软体铸造场

海峡对岸的起点是一个开放源码社群项目。据 CLE 协调人黄志伟 2004 年接受 ZDNet 台湾的访谈，CLE（中文 Linux 延伸套件）由郑原忠（小虫）大约在 1998 年中发起；1999 年 1 月的 v0.7 是第一个众人通力合作的版本；2000 年 3 月的 v0.9 第一次以完整的 I18N 架构为主轴进行中文化。黄志伟说：“我想最重要的是促進了國際化(I18N)與本土化(L10N)設計的風潮”。2003 年，中央研究院资讯科学研究所接受经济部工业局“自由軟體產業推動計畫”的补助，成立自由软体铸造场（OpenFoundry）。

英文版第 22、23 章讲分时、Unix、GNU 和 Linux 的来历；这一页讲的是这些思想到了中文世界以后，由谁、为了什么接手。

**出处：**杨芙清《七十年，我始终和祖国在一起》；《“银河麒麟”服务器操作系统通过验收》（《光明日报》，中国政府网转载）；ZDNet 台湾《黄志伟专访问答实录》。

## 延伸阅读

- 杨芙清，《我和我的祖国｜七十年，我始终和祖国在一起》（English: Seventy years with my country, Yang Fuqing's memoir），北京大学计算机学院网站。[链接](https://cs.pku.edu.cn/info/1263/2373.htm)
- 李军、孙玉方，《基于微核心的国产操作系统安全性研究》（English: Security of a microkernel-based domestic operating system），《软件学报》1997, 8(2): 99–106。[链接](https://jos.org.cn/jos/article/abstract/19970204)
- 《南方都市报》，《红旗Linux痛失旗手 董事长孙玉芳辞世》（English: Red Flag Linux loses its standard-bearer: chair Sun Yufang dies），新浪科技转载，2005-01-14。[链接](http://tech.sina.com.cn/it/2005-01-14/1204504579.shtml)
- 中国教育和科研计算机网，《国防科技大学研制成功“银河麒麟”操作系统》（English: NUDT develops the Kylin operating system），2006-03-23。[链接](https://www.edu.cn/gao_xiao_zi_xun_1091/20060323/t20060323_161429.shtml)
- 《光明日报》，《我国研制成功具有自主知识产权的服务器操作系统》（English: China develops a server OS with its own intellectual property, on Kylin's acceptance），中国政府网转载，2006-12-05（Wayback Machine 存档）。[链接](https://web.archive.org/web/20190204014734/http:/www.gov.cn/fwxx/kp/2006-12/05/content_461334.htm)
- 华为，《openEuler操作系统源代码正式开放》（English: openEuler source code formally opened），2019-12-31。[链接](https://www.huawei.com/cn/news/2019/12/huawei-openeuler)
- 华为，《华为捐赠欧拉 共建数字基础设施开源操作系统》（English: Huawei donates openEuler to build an open-source OS for digital infrastructure），2021-11。[链接](https://www.huawei.com/cn/news/2021/11/huawei-openeuler-openatom-foundation)
- 華為消費者業務（香港），《華為發佈全新分佈式鴻蒙 OS 打造全場景智能生活新體驗》（English: Huawei launches the distributed HarmonyOS, HDC 2019 Hong Kong release），2019。[链接](https://consumer.huawei.com/hk/press/news/2019/hdc2019/)
- ZDNet Taiwan，《尋找台灣自由軟體力量：黃志偉專訪問答實錄》（English: Looking for Taiwan's free-software strength: interview with CLE coordinator Huang Chih-wei），2004-03-04（Wayback Machine 存档）。[链接](https://web.archive.org/web/20080604032823/http:/www.zdnet.com.tw/enterprise/feature/0,2000085762,20087861-7,00.htm)
- 自由軟體鑄造場，〈關於 OpenFoundry & OSSF〉（English: About OpenFoundry and the OSSF），2025 年存档。[链接](https://web-archive-2025.openfoundry.org/tw/about-openfoundry.html)

