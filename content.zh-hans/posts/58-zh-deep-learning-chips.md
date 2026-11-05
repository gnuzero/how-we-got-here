---
title: "从 DianNao 到昇腾：为矩阵乘法造的芯片"
weight: 14
date: 2026-09-26
draft: false
phase: "10 — 现代 AI 硬件"
series_index: 14
aliases: []
tags: ["深度学习处理器", "DianNao", "寒武纪", "计算所", "TPU", "NPU", "麒麟970", "昇腾"]
summary: "2014 年，计算所与法国 Inria 合作的 DianNao 拿下 ASPLOS 最佳论文；三年后，这条路线进了手机，而华为的发布稿里没有提到寒武纪。"
image_prompt: "A cramped glass-walled lab room at night, under 30 square metres, two researchers leaning over a debug host whose screen shows a test passing, a bare prototype chip on a small board connected by a serial cable, whiteboard with a grid of multiply-accumulate units; warm documentary illustration style, no text"
video_prompt: "25-second sequence: a neural-network layer dissolves into a grid of multiply-accumulate cells; memory bandwidth drawn as a narrow pipe; on-chip memory blocks appear beside the grid (DianNao, 2014); many chips tile together (DaDianNao); cut to a 2017 phone launch stage with the word NPU; a 16x16x16 cube of MAC units pulses (Da Vinci, 2018); restrained explainer tone"
schematics: "Diagram 1: the DianNao family 2014-2016 (DianNao ASPLOS'14, DaDianNao MICRO'14, ShiDianNao ISCA'15, PuDianNao ASPLOS'15, Cambricon ISA ISCA'16) with the TPU paper (ISCA'17) citing them. Diagram 2: Cambricon IP-licensing revenue share from HiSilicon: 2017 100.00%, 2018 97.94%, 2019 92.56%. Diagram 3: a 16x16x16 MAC cube = 4,096 MACs per cycle per AI Core."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F08-01, F08-02, F08-03, F08-04, F08-06, F08-07, F08-08, F08-09, F08-10, F08-11, F08-12 -->

神经网络的一层，算的几乎全是乘加。华为 2019 年解读自家达芬奇架构时说，典型神经网络里“99%的计算都需要用到矩阵乘”。如果计算这么单一，为什么不给它专门造一块芯片？2014 年前后，北京的一个团队给出了自己的答案。

## 2012—2016：一个中法合作的芯片家族

据中科院计算所 DianNao 项目主页的中英双语介绍，“本项目是中科院计算所的陈云霁教授和法国Inria的Olivier Temam间的一个学术合作项目，双方为此设立了联合实验室”。起点是 Temam 在 2012 年 ISCA 上提出的第一个机器学习加速器设计，它的瓶颈在内存带宽。

主页把之后的工作排成一个家族。DianNao 在加速器旁加上片上存储，缓解带宽问题，2014 年获 ASPLOS 最佳论文；多芯片的 DaDianNao 把整个模型放在片上，获 MICRO 2014 最佳论文；ShiDianNao 直接接在视觉传感器上（ISCA 2015）；面向通用机器学习的 PuDianNao 是家族的最后一个成员（ASPLOS 2015）。之后团队设计了神经网络加速器指令集 Cambricon，在 ISCA 2016 上获得评审最高分。计算所当年的新闻称，DianNao 论文的第一作者是陈天石，这是亚洲首次、美国之外第二次获 ASPLOS 最佳论文；中科院 2024 年的专题还称，DaDianNao 是 MICRO 自 1963 年创办以来首次由美国以外的学者获奖。

同一专题讲了一个细节：陈云霁读研究生时被龙芯 1 号研制组组长胡伟武招进团队，在验证组写测试程序。它还写道，2015 年，“国际上第一颗深度学习处理器原型芯片的一次流片成功”，是在计算所一间不足 30 平方米、被戏称为“小黑屋”的玻璃房里揭晓的；专题称陈云霁、陈天石为兄弟。

## TPU 论文怎么写

谷歌 Jouppi 等人 2017 年的 TPU 论文在相关工作里专门讨论了 DianNao 家族：“All use 16-bit integer operations and all designs dove down to layout, but no chips were fabricated.”（它们都用 16 位整数运算，设计都做到了版图，但没有制造芯片。）论文还写道，原版 DianNao 有 64 个 16 位整数乘加单元和 44 KB 片上存储，估计面积 3 平方毫米（65 纳米）、1 GHz、0.5 瓦；后继的 DaDianNao 用 eDRAM 在片上存放 36 MiB 权重。

这句话要和中科院的说法分开读。TPU 论文说的是 DianNao 家族已发表的那几种设计；中科院专题说的是 2015 年另一颗原型芯片流片成功，而且没有说明它实现的是哪一种设计。两句话讲的对象不同，并不互相否定。

## 从论文到手机

据寒武纪的招股书，公司成立于 2016 年 3 月 15 日；中国科学院的专题文章说，它是在计算所和风险投资机构的支持下成立的。2017 年 9 月，华为在 IFA 上发布麒麟 970，称它“首次集成NPU”，新的异构计算架构相较于四个 Cortex-A73 核心有大约 50 倍能效和 25 倍性能优势，芯片集成 55 亿个晶体管。那份发布稿通篇没有提到寒武纪。据驱动中国的报道，计算所随后致华为、海思的贺信写明，麒麟 970 集成寒武纪 1A 处理器作为核心人工智能处理单元，“即余承东总在发布会中所述NPU”，并称 1A 是“国际上首个商用深度学习处理器产品”。

最具体的记录在寒武纪 2020 年的科创板招股书里：2017—2019 年，华为海思占公司终端智能处理器 IP 授权收入的 100.00%、97.94% 和 92.56%；2019 年这项收入下滑 41.23%，主要是因为华为海思选择自研终端智能芯片，未再合作。招股书还说，1A、1H 已集成于超过 1 亿台智能手机及其他智能终端设备。

华为自己的路线叫达芬奇。据它的官方解读（IT之家转载），2018 年全联接大会上推出的昇腾 310 是达芬奇架构的首次亮相；每个 AI Core 的 3D Cube 用 16×16×16 的结构，一个时钟周期完成 4096 次乘加。2019 年 8 月，华为发布训练芯片昇腾 910，央视网报道，它达到规格算力时的实测功耗为 310 瓦，低于 350 瓦的设计规格。

英文版第 57、58 章讲的是同一个逻辑：计算收缩成矩阵乘法，芯片就按矩阵的形状去造，TPU 的脉动阵列是其中一种做法。这一页补上的是 2014 年前后北京的那一段，以及它进入商用时的署名之争。

**出处：**中科院计算所 DianNao 项目主页；Jouppi 等，TPU 论文（ISCA 2017）；《中科寒武纪科技股份有限公司首次公开发行股票并在科创板上市招股说明书》。

## 延伸阅读

- 中国科学院计算技术研究所，《A Brief Introduction to The DianNao Project / 中法联合DianNao项目简介》（English: the DianNao project page, bilingual），novel.ict.ac.cn。[链接](https://novel.ict.ac.cn/diannao/)
- 中国科学院计算技术研究所，《计算所国重未来计算团队喜获ASPLOS最佳论文奖》（English: ICT team wins the ASPLOS best paper award），2014 年新闻，中国科学院网信工作网转载。[链接](http://www.ecas.cas.cn/dtfb/ysdt/201802/t20180206_4934055.html)
- 中国科学院，《开创“寒武纪”》（English: Founding "Cambricon", CAS feature on self-reliance in science and technology），2024-09-19。[链接](https://www.cas.cn/zt/kjzt/kjzlzqzl/kjzlzq/202409/t20240919_5032328.shtml)
- Norman P. Jouppi et al.，“In-Datacenter Performance Analysis of a Tensor Processing Unit”（中文：数据中心内张量处理单元的性能分析），ISCA 2017，arXiv:1704.04760。[链接](https://arxiv.org/abs/1704.04760)
- 华为，麒麟 970 IFA 2017 发布新闻（English: Huawei press release on the Kirin 970 launch at IFA 2017），2017-09。[链接](https://www.huawei.com/cn/news/2017/9/mobile-ai-ifa-2017)
- 驱动中国，《中科院贺信柔中有刚，强调Kirin NPU并非华为所有》（English: CAS congratulatory letter stresses that the Kirin NPU is not Huawei's own），2017-09-08。[链接](https://www.qudong.com/article/301101.html)
- 中科寒武纪科技股份有限公司，《首次公开发行股票并在科创板上市招股说明书（注册稿）》（English: Cambricon STAR Market IPO prospectus, registration draft），上海证券交易所披露，2020-06-22。[链接](https://static.sse.com.cn/stock/disclosure/announcement/c/202006/000354_20200622_AWSW.pdf)
- IT之家，《华为深度解读达芬奇架构：3D Cube计算引擎加速运算》（English: Huawei explains the Da Vinci architecture and its 3D Cube engine），2019-08-22。[链接](https://www.ithome.com/0/440/590.htm)
- 央视网，《华为正式发布最新AI处理器昇腾910及全场景AI计算框架MindSpore》（English: Huawei launches the Ascend 910 AI processor and the MindSpore framework），2019-08-23。[链接](http://news.cctv.com/2019/08/23/ARTI2cqgeaCmXn6WauhnfNyy190823.shtml)

