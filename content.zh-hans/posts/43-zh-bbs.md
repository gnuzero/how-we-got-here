---
title: "挤不进去的广场：两岸三地的校园 BBS"
weight: 18
date: 2026-09-26
draft: false
phase: "7 — 分布式系统、大数据与编排"
series_index: 18
tags: ["BBS", "水木清华", "批踢踢", "PTT", "小百合", "北大未名", "香港中文大学", "telnet", "校园网络"]
summary: "在门户网站和社交媒体之前，人们先在校园 BBS 上找到彼此，再开始交谈；一台服务器能同时容纳多少人，决定了这个广场有多大。"
image_prompt: "Late-1990s university computer room at night: a student at a beige PC with a black telnet window full of Chinese text menus and board lists; on a shelf behind, a humming tower server with a handwritten label; a clock showing past midnight; warm documentary photo style, no readable text"
video_prompt: "20-second animation: a counter of concurrent users on a text-mode BBS climbs from 38 to 1,029 to 10,504 to 177,734 as years flip from 1997 to 2014; midway, a small 386 PC is swapped for a larger server and a 'login refused' message disappears; end on a board list scrolling in a telnet window"
schematics: "Diagram 1: one-machine BBS architecture: many telnet clients -> one server with a hard cap on concurrent logins; 1997 SMTH migration from a SUN machine to a donated 8 GB disk / 512 MB RAM server ('supports over a thousand users'). Diagram 2: PTT peak concurrent users 1997-2014 on a log scale (38; 1,029; 10,504; 105,403; 177,734)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F26-01, F26-02, F26-03, F26-04 -->

1995 年前后，想在中文网络上找人说话，你多半要先 telnet 到某所大学的一台机器上。那台机器能同时撑住多少人，这个广场就有多大。

## 水木清华：换一台机器，多装一千人

水木清华站自己的精华区里，保存着一篇 1997 年 12 月从广州网易 BBS 转来的帖子。它讲了站的来历：1995 年 8 月初，ace（懂懂）在实验室的一台 386/Linux 上架起 BBS，后来几位同学把它移植到清华网络中心的一台 SUN Sparc 20 上，8 月 8 日正式开放，地址就是“非常著名的166.111.1.11”。

帖子也写了当时的难处。站上注册的已有数万人，平均同时在线数百人，而“高峰时期由于上站人数上限的限制使得无数醉心网虫屡试不能上线”。1997 年 12 月 7 日晚，水木清华告别原来那台 SUN，换上曙光公司捐赠的一台天演服务器：8G 硬盘、512M 内存，“同时能够支持上千人上站”。这次转站还恢复了 WWW 服务，用户除了 telnet 登录，也可以用 IE 或 Netscape 浏览器访问。帖子称它是“中国规模最大的民间电子公告板系统”，也记下了几年来“关站、地下开站、系统损坏数据丢失等磨难”。

后来的规模，见《中国教育网络》2014 年的回顾：水木清华曾有 500 多个版面，注册人数达到 30 万，最高在线 23674 人。2005 年 3 月 16 日，它从开放型转为校内型；据同一篇文章，到 2005 年 5 月，在线峰值保持在 4000 人上下。

## 一张校园 BBS 的族谱

同一篇回顾列出了随后出现的站。南京大学小百合 1997 年 7 月 25 日创立，一度是教育网内同时在线人数最多的站点之一。北大未名最初架在北京大学一台 IBM 捐赠的 S/390 大型机上，1999 年 12 月 21 日开通测试，2000 年 5 月 4 日正式对外开放。一台大型机，成了学生们聊天的广场。

## 批踢踢：宿舍里的站，一条在线人数曲线

在台大的宿舍网里，架 BBS 一度是热门风尚。据批踢踢实业坊（PTT）的官方沿革，男四舍有小鱼的紫色花园，男六舍有不良牛牧场，男七舍有阳光沙滩。1995 年 9 月 14 日，男八舍的一台 486DX2-66（16MB 内存）上开出了批踢踢实业坊。宿舍站后来慢慢并进大站：小鱼的紫色花园在 2004 年 6 月 14 日宣布与 PTT 合并。

PTT 的沿革里有一张最高同时在线人数表，读起来像一条增长曲线：1997 年 1 月 19 日第一次记录，38 人；1998 年 11 月 10 日突破千人（1029 人）；2003 年 4 月 28 日破万（10504 人）；2007 年 9 月 17 日达到 105403 人；2014 年 3 月 23 日达到 177734 人，表中注明是太阳花学运期间，也是 PTT 的历史最高纪录。十七年里，同一个站的同时在线人数，从几十涨到了十几万。

## 香港：新闻组与 BBS

在香港，据黄力信的《中大电子通讯简史 1991-2003》，香港中文大学的 CUBBS 从 1988 年一直运行到 1995 年 12 月 1 日；1992 年 9 月，中大开设了新闻组 cuhk.campus（1993 年 9 月改名为 cuhk.forum）；1995 年，HKiBBS 成立。同一所大学里，新闻组和 BBS 两种形式并存过。文中还写到，HKiBBS 的前身 TCLBBS 的多人聊天室很受欢迎，“有時甚至因為使用者過多，影響網站的服務”：香港的站长，也碰到了同一个天花板。

**出处：**水木社区精华区站史帖（1997）；《中国教育网络》，2014；批踢踢实业坊沿革；黄力信，《中大四十年》。

## 先找到人，再交谈

BBS 把找人和交谈放进了同一台机器：版面就是目录，帖子就是对话。像水木清华和 PTT 这样的站，所有人登录的是同一台服务器，所以上站人数的上限，才会成为站长们最头疼的问题，而换一台更大的机器，就能让广场一下子多装一千人。同一时期，找信息的那一半在校园搜索引擎里展开，见[《一台服务器装不下：中国大陆第一批搜索引擎》]({{< relref "44-zh-chinese-search.md" >}})。

在西方，本书英文版第 43 章讲的 Usenet 新闻组走的是另一条路：讨论分散在许多服务器之间转发，没有一台中心机器。中大的 cuhk.forum 用的也是新闻组这种形式。

## 延伸阅读

- 水木社区精华区，《其他BBS报道：隆重庆祝水木清华BBS转站成功》（English: SMTH archive post "Celebrating the successful migration of SMTH BBS", a 1997 repost from Guangzhou NetEase BBS），水木社区，1997-12-08。[链接](https://www.newsmth.net/bbsanc.php?path=%2Fgroups%2Fsystem.faq%2FNewSMTH%2Fterre%2FHistory%2FM.881686301.A)
- 《中国教育网络》，《校园BBS风雨十年路》（English: Ten stormy years of campus BBSes），中国教育和科研计算机网，2014-11-05。[链接](https://cernet.edu.cn/xxh/zt/cernet20/talent/cxcy/201411/t20141105_1198982.shtml)
- 批踢踢實業坊，《批踢踢歷史沿革》（English: PTT official history, with its table of peak concurrent users），PTT。[链接](https://www.ptt.cc/about.history.html)
- 黃力信，《中大電子通訊簡史 1991-2003》（English: A short history of electronic communication at CUHK, 1991–2003），《中大四十年》。[链接](https://cusp.hk/cu40/?p=73)

