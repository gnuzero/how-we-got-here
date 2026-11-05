---
title: "从中文信息处理到注意力机制"
weight: 11
date: 2026-09-26
draft: false
phase: "10 — 现代 AI 硬件"
series_index: 11
aliases: []
tags: ["机器翻译", "分词", "吴文俊", "天网", "百度", "ResNet", "RoPE", "注意力机制"]
summary: "从一台只能输出电报码的翻译机，到首发在中文博客上的旋转位置编码，中文这条线给今天的 Transformer 留下了两块实实在在的零件。"
image_prompt: "Visual timeline in one frame: a 1959 vacuum-tube computer printing rows of four-digit telegraph codes; a mathematician at a 1970s paper-tape machine; a 1997 search page; a modern diagram of a Transformer block with its residual connection and rotating query/key vectors highlighted; clean editorial illustration, white background"
video_prompt: "25-second animation: telegraph code digits on a printout turn into Chinese characters (1959 → 1978); a line of text without spaces gets segmented; a web crawl fills a warehouse of pages; two vectors rotate by position angles and their dot product stays constant for equal offsets; end on a Transformer layer with a residual arrow labelled ResNet"
schematics: "Diagram 1: the chain from Chinese MT and segmentation to web archive to model components. Diagram 2: RoPE: query and key rotated by angle proportional to position; inner product depends only on relative position. Diagram 3: Transformer sub-layer with residual connection (He et al. 2015)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F13-01, F13-02, F13-03, F13-06, F06-01, F06-02, F06-03, F29-02, F29-03, F29-04, F29-05, F29-06, F06-07, F06-08, F06-09 -->

Transformer 的原始任务是机器翻译。沿着中文这条线往回走，你会碰到一连串被英文叙事略过的节点：一台打不出汉字的翻译机，一位 58 岁学编程的数学家，一座后来变成大模型语料的网页博物馆，还有两块直接写进今天大模型里的零件。

## 1959：翻译成功了，却打不出汉字

1957 年，刘涌泉到苏联科学院精密仪器和计算技术研究所研究机器翻译；1958 年 5 月，他在莫斯科的会议上发表了中国第一篇机器翻译论文。1959 年国庆节前，他主持的俄汉机器翻译在计算所 104 机上试验成功，但“输出的是电报码”。直到 1978 年 ECMT-78 英汉机器翻译系统试验成功，“这次输出的是汉字”。

十九年里，瓶颈不在语言，而在字符输出。1978 年，正是刘涌泉以中国科技情报学会机器翻译委员会主任委员的身份，组织了第一次汉字编码学术交流会。

中文还有一个英文没有的难题：词与词之间没有空格。中国中文信息学会称，1992 年发布的《信息处理用现代汉语分词规范》从工程需求出发，“解决了语言学界争论了几十年而未解决的汉语的词的定义问题”。今天大模型要做的分词，在中文世界早就是一个标准化问题。

## 吴文俊：58 岁学编程

吴文俊在口述自传里说，研究中国古代数学让他明白“不必照西方的道路走，而是走另外一条道路”。1971 年他在北京无线电一厂劳动时第一次接触计算机；几何定理机器证明的研究从 1976 年冬天开始，1977 年春节期间先用手算验证了方法。他在纸带输入的长城 203 上证明了西姆松定理，58 岁从零学编程，先学汇编，后来“用Basic编写了四五千行的证明定理的程序”。学生周咸青把这个方法带到国外。1997 年，他获得自动推理领域的 Herbrand 奖。

## 天网：从搜索引擎到大模型语料

1996 年，北大网络实验室陈葆珏教授带领刘建国、周利民、雷鸣等研发“天网”，1997 年 10 月 29 日起在 CERNET 上提供服务，名字取自“天网恢恢，疏而不漏”。同期的清华“网络指南针”（李星主持）面对的第一个关键问题，就是怎样切分中文关键词。

百度初创时，刘建国、周利民、雷鸣加入了百度。CERNET 2024 年的文章说，1999 年李彦宏按天网上留的 Email 地址给刘建国写信，刘建国“成为百度的第一名员工”；2014 年的另一篇文章则说他是 2000 年辞职加入的。百度官网记载，公司 2000 年 1 月 1 日创立于中关村。

2002 年起，北大网络实验室建设“中国Web信息博物馆”，到 2015 年收藏 70 多亿网页、超过 200TB，2016 年捐赠给中国计算机学会。据 CERNET 的回顾，这近 20 年的数据已被 30 多家机构用于训练大模型。

**出处：**赛尔网络，《中国第一批搜索引擎往事》，2024。

## 写进 Transformer 的两块零件

2015 年，微软亚洲研究院以 152 层的“深度残差网络”（ResNet）赢得 ImageNet 挑战赛，错误率 3.57%。论文的四位作者何恺明、张祥雨、任少卿、孙剑当时都在北京的微软亚洲研究院：据该院报道，孙剑与何恺明来自视觉计算组，张祥雨（西安交通大学）和任少卿（中国科学技术大学）是该院联合培养的博士生。《Attention Is All You Need》描述编码器时写道：“We employ a residual connection [11]”，文献 [11] 就是这篇 ResNet 论文。每个 Transformer 层里的残差连接，都明确记在这项工作名下。

第二块是位置编码。2021 年 3 月 23 日，苏剑林在自己的中文博客“科学空间”发表《Transformer升级之路：2、博采众长的旋转式位置编码》，系统介绍了旋转式位置编码（RoPE），并开源了追一科技的 RoFormer 模型。思路是：按位置把查询向量和键向量各旋转一个角度，它们的内积就只取决于相对位置。4 月 20 日，论文才提交到 arXiv。后来 Meta 的 LLaMA 论文写明采用“rotary positional embeddings (RoPE), introduced by Su et al. (2021)”。LLaMA 引用的是这篇 arXiv 论文；而 RoPE 最早的系统介绍，是比它早约四周的一篇中文博客文章。

## 在西方

注意力机制的 Transformer 由 Vaswani 等人在《Attention Is All You Need》中提出；英文机器翻译史通常从 1954 年的乔治城—IBM 实验讲起。中文这条线补上的是：Transformer 的残差连接，和后来被 LLaMA 采用的旋转位置编码，都有中文世界的来源。

## 延伸阅读

- 中国社会科学院语言研究所，《学者介绍：刘涌泉》（English: Scholar profile: Liu Yongquan），语言研究所网站，2021-10-29。[链接](http://ling.cass.cn/xueren/xzjs/202110/t20211029_5370412.html)
- 中国中文信息学会，《中文信息处理大事记》（English: Chronology of Chinese information processing），中国中文信息学会（PDF）。[链接](http://bj.bcebos.com/cips-upload/cipsc30.pdf)
- 吴文俊，《吴文俊：我的机器证明之路》（English: My road to machine proof; from his oral autobiography《走自己的路》, “Walking my own road”），中国科学院网站“院士风采”，2024-06-21。[链接](https://www.cas.cn/zt/hyzt/ysdh21st/ysfc/202406/t20240621_5022393.shtml)
- 中国科学院，《深切缅怀吴文俊院士》专题“吴文俊简介”（English: In memory of Academician Wu Wenjun: biography），中国科学院网站，2017-05-08。[链接](https://www.cas.cn/zt/rwzt/sqmhwwjys/yw/201705/t20170508_4599560.shtml)
- 赛尔网络，《中国第一批搜索引擎往事丨CERNET30周年》（English: Stories of China's first search engines: CERNET at 30），中国教育和科研计算机网，2024-10-14。[链接](https://www.cernet.com/hlw30/202410/4811.html)
- 《中国教育网络》，《百度与天网—你不知道的那些事》（English: Baidu and Tianwang: things you didn't know），中国教育网，2014-11-05。[链接](https://www.edu.cn/cxcy_12722/20141105/t20141105_1198967.shtml)
- 百度，公司介绍（English: Baidu company profile），百度官网。[链接](https://home.baidu.com/about/about.html)
- 微软亚洲研究院，ImageNet 2015 获胜报道（English: MSRA article on winning ImageNet 2015），微软研究院网站，2015-12。[链接](https://www.microsoft.com/en-us/research/articles/imagenet-20151211/)
- He, Zhang, Ren, Sun，“Deep Residual Learning for Image Recognition”（English: original English title），arXiv:1512.03385，2015-12-10。[链接](https://arxiv.org/abs/1512.03385)
- 苏剑林，《Transformer升级之路：2、博采众长的旋转式位置编码》（English: The road to upgrading the Transformer, part 2: rotary position embedding, drawing on the best of many），科学空间，2021-03-23。[链接](https://kexue.fm/archives/8265)
- Su et al.，“RoFormer: Enhanced Transformer with Rotary Position Embedding”（English: original English title），arXiv:2104.09864，2021-04-20。[链接](https://arxiv.org/abs/2104.09864)
- Touvron et al.，“LLaMA: Open and Efficient Foundation Language Models”（English: original English title），arXiv:2302.13971。[链接](https://arxiv.org/abs/2302.13971)
- Vaswani et al.，“Attention Is All You Need”（English: original English title），arXiv:1706.03762。[链接](https://arxiv.org/abs/1706.03762)

