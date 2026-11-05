---
title: "继电器与交换机：上海电话局里的“计算机”"
weight: 4
date: 2026-09-26
draft: false
phase: "1 — 基础：从机械计算到电子管计算"
series_index: 4
tags: ["继电器", "电话交换", "旋转制", "纵横制", "记发器", "七国八制", "HJD04", "上海"]
summary: "从 1882 年外滩的人工交换所到 1991 年的 HJD04：上海的继电器交换机一用几十年，改线就是改程序。"
image_prompt: "Interior of a mid-20th-century Shanghai telephone exchange: long rows of grey relay racks and rotary switch frames, cable-laced wiring looms, a technician in a work coat checking a rack with a test set, period-accurate, muted documentary photography style, no text"
video_prompt: "20-second animation: a dialled number enters as pulses, is stored in a row of relay 'register' contacts, then a marker lights a path through a crossbar grid and the call connects; cut to a technician rewiring one frame as the number grows from 5 to 7 digits"
schematics: "Diagram 1: direct control (step-by-step: dial pulses drive selectors) vs indirect control (register stores digits, marker drives the crossbar switch), labelled with 记发器 / 标志器. Diagram 2: Shanghai timeline 1882 manual, 1924 Ericsson register system, 1959 domestic crossbar, 1982 imported stored-program, 1991 HJD04, 2017 last TDM switch retired."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F35-01, F35-02, F35-03, F35-04, F35-05, F15-01, F15-02, F15-03, F15-04, F15-05, F15-06, F02-08 -->

在电子管时代之前，城市里最会“按规则做决定”的机器不在实验室，而在电话局。你每拨一个号码，就有一串继电器按规则开合，替你找到一条线路。上海是看这件事的好地方：那里的继电器交换机，一用就是几十年。

## 1882：外滩 7 号

1882 年，丹麦大北电报公司在上海外滩 7 号开设磁石式人工电话交换所，这是中国领土上第一个电话交换所。第二年改由英商经营，1900 年专营权转给华洋德律风公司。早期号码只有一到三位；1907 年，清政府办的南市电话局为华界开通。人工交换，意味着每一次接续都要接线员动手。

## 1924：不是步进制

1924 年，华洋德律风公司东区交换所装了 1000 门爱立信自动交换机，上海号码第一次改为五位。说到自动交换，人们常想到史端乔（Strowger）步进制；但当年的《爱立信评论》描述的是 register finder 和 register 两类设备（本书译作记发器寻线器、记发器），从这一点看，上海第一套自动交换机是爱立信的记发器控制系统，而不是步进制。开通月份也有两说：澎湃新闻的文章说 3 月，《爱立信评论》说“今年 5 月”。

记发器是这段故事的关键。中国电信博物馆这样解释：步进制由用户的拨号脉冲直接驱动继电器动作；纵横制是间接控制，拨号脉冲“先由记发器接收、存储，然后通过标志器驱动接线器”。先存起来，再决定怎么动：这是用继电器搭出来的存储，也是后来“程控”的种子。

## 六十年的旋转制

1928 年，租界各电话局全部改为自动交换；1933 年，华界的上海电话局也改用自动交换机接线；1942 年 6 月 28 日，全市统一为五位号码。中国电信博物馆藏有一台比利时生产的 7A1 型旋转制交换机，说明写着“20世纪20-80年代上海电话局使用”。一套继电器系统，在一座城市里天天工作了约六十年。

## 1959：自己造纵横制

1959 年 8 月，上海电信研究所、上海自动电话厂和上海市内电话局联合研制成功我国第一部纵横制局用自动电话交换机。它何时投入使用，中国电信博物馆自己的两份材料说法不同：2023 年的文章说同年 12 月 16 日，第一套 1000 门纵横制交换机在上海吴淞局开通；2021 年的大事记说，1960 年 1 月第一个纵横制自动电话实验局在吴淞分局安装开通。可能一个指安装、一个指正式开通，这里两说并存。

电话工业也直接帮了第一台计算机。据中国科学院的记述，1958 年 5 月下旬，103 机插件底板的焊接进度落后，技术员夏纪寅和 738 厂的钱基广请熟练工人“采取交换机总装车间的扎缆型工艺”，5 月 31 日凌晨 2 点完工。

## 改线就是改程序

1989 年 11 月 12 日，上海电话升为七位号码。在此之前，要先完成 18 万门纵横制交换机的电路修改。继电器逻辑里没有软件可改，号码规则一变，就得动手改线。对继电器机器来说，改线就是改程序。

## 七国八制与 HJD04

程控交换来得很快。1982 年，福州引进并开通了日本富士通 F-150 万门程控电话交换机，程控电话随即出现在其他城市。进口设备来自七个国家、八种制式，业内称为“七国八制”；1989 年起，巴黎统筹委员会又对中国实施大型程控交换机禁运。1991 年，解放军信息工程学院与中国邮电工业总公司联合研制成功 HJD04，这是我国第一台拥有完全自主知识产权的大型数字程控交换机。新华社称，它“标志着‘七国八制’长期垄断中国程控交换机市场格局的终结”，也使巴统的禁运彻底流产。此后，巨龙、大唐、中兴、华为，也就是人们说的“巨大中华”，相继崛起。

故事也在上海收尾：2017 年 12 月 21 日，中国电信最后一台程控交换机在上海退网，网络转向全光、全 IP。

在西方，史端乔步进制常被当作自动电话交换的起点。上海的例子说明，继电器时代在不同城市走的是不同的路：这里先来的是记发器，再是纵横制，最后是被禁运逼出来的国产程控机。

**出处：**中国电信博物馆《从听得见到听得好，电话交换技术的百年演进》（2023）；叶亦帆《信息史︱电话号码知几位》（澎湃新闻，2021）。

## 延伸阅读

- 叶亦帆，《信息史︱电话号码知几位》（English: Information history: how many digits in a phone number?），澎湃新闻，2021-12-12。[链接](https://www.thepaper.cn/newsDetail_forward_15277146)
- 中国电信博物馆，《从听得见到听得好，电话交换技术的百年演进》（English: From audible to clear: a century of telephone switching technology），2023-11-13。[链接](http://museum.chinatelecom.com.cn/yj/txkp/202311/t20231113_77967.html)
- 中国电信博物馆，《电信业大事，你知道多少？（1950——1979）》（English: How much do you know of telecom milestones, 1950–1979?），2021-06-11。[链接](http://museum.chinatelecom.com.cn/yj/zt/bwgwzbndx/2021bwgbnds/202106/t20210611_61601.html)
- L. M. Ericsson，“The Shanghai Automatic Exchange”（中文：上海自动交换所），*The L. M. Ericsson Review*，1924 年第 9—10 期。[链接](https://telecom.wiki/download/attachments/819291/Ericsson_Review_Vol_1_1924_9-10.pdf)
- 甘晓，《中国从此“有了”计算机》（English: From then on, China "had" a computer），《中国科学报》，中国科学院官网转载，2024-04-01。[链接](https://www.cas.cn/cm/202404/t20240401_5010362.shtml)
- 新华社，《我国第一套拥有自主知识产权的大型数字程控交换机诞生》（English: China's first large digital stored-program exchange with its own intellectual property is born），《经济日报》，2009-11-11。[链接](http://paper.ce.cn/jjrb/html/2009-11/11/content_86815.htm)

