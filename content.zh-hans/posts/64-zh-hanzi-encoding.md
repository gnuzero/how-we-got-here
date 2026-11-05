---
title: "汉字上线：从四位电码到 GB 18030"
weight: 6
date: 2026-09-26
draft: false
phase: "治理 / 互联网公民"
series_index: 6
aliases: []
tags: ["中文电码", "汉字编码", "CCCII", "GB 2312", "Big5", "CNS 11643", "GB 18030", "HKSCS", "标准"]
summary: "电线只认得点和划：从 1870 年代的四位电报码到今天强制执行的 GB 18030，每一种把汉字送上线的办法，背后都有人在决定规则。"
image_prompt: "Split composition: on the left a late-Qing telegraph clerk at a desk with a thick code book open to a 10x10 grid of characters with four-digit numbers; on the right a 1980s CRT screen showing Chinese characters and a hexadecimal code table; linking them a single telegraph wire; historically accurate, muted palette, no readable text"
video_prompt: "20-second animation: the character 米 becomes 4149, a key 5555 is added digit by digit without carry to give 9694, the digits travel down a telegraph wire, then morph into byte sequences labelled GB 2312, Big5 and GB 18030 as three branches of the same road; clean motion graphics"
schematics: "Diagram 1: telegraph code book page layout (10x10 = 100 characters per page, four-digit codes 0001=一, 0002=丁, 0003=七) and the additive key cipher without carry (4149 + 5555 -> 9694). Diagram 2: who decides: tariff rule (1879 London conference) -> code books; mainland national standards (GB 2312, GB 18030) under SAC/TC28 mirroring ISO/IEC JTC 1; Taiwan industry project (Big5) vs national standard (CNS 11643); Hong Kong government supplement (HKSCS)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F20-01, F20-02, F20-03, F20-04, F20-05, F20-07, F20-08, F20-09, F21-01, F21-02, F21-04, F21-06, F21-08, F21-09, F21-10, F21-11, F21-12, F21-13, F21-14, F05-01, F05-02, F05-03, F05-09 -->

电线只认得点和划，汉字却有几千个。怎么把它们送上线？每一个答案，都同时回答了另一个问题：谁说了算。

## 四个数字一个字

最早的答案是一本码本。大北电报公司总裁 C.F. Tietgen 发起，丹麦人谢勒俄普（Hans Schjellerup）、法国人威基谒（S.A. Viguier）与中国官商一起编成《电报新书》。他们试过三位到六位的码，最后定为四位：0001 是“一”，0002 是“丁”，0003 是“七”。威基谒从《康熙字典》选了 6391 字，按 214 个部首排列。刊行年份说法不一：张文洋 2018 年在《近代史研究》上的文章写 1872 年；中文维基百科等资料写 1873 年，并说挑选了“常用汉字6800多个”。年份和字数都有待核对原书。

码本自带密码，叫“锁匙加减变法”：双方约定一个密钥，逐位相加、舍去进位。比如“米”是 4149，加上 5555，发出去的是 9694。

决定编码的不只是技术，还有账单。1879 年伦敦国际电报会议规定“以三码算一字”，于是李凤苞在 1881 年编了三字母码，26³ = 17576 个码位，好把更多内容塞进一个计费单位。同年，郑观应、经元善致函盛宣怀，主张编一本公用码本：“每号一字，拣字典内通用字面凑成万号”。

保密的代价也很真实。总理衙门陆续编发密码本，如 1890 年的“厘定”、1895 年的“红字”；甲午战争期间，日本破译了 1888、1890、1895 年的密码本。自 1897 年起，密本大约每两年一换。

这套电码活得比清朝久得多。1969 年 9 月 26 日，《人民日报》报道邮电部邮电研究院研制成功我国第一台电子式中文电报自动译报快速收报机，《中文信息处理技术大事记》把它视为计算机处理汉字的开端。直到今天，香港入境事务处的表格上还有一栏：“中文姓名電碼（如有者）”。

## 1979：一场图书馆里的抢跑

据台湾学者谢清俊回忆，1979 年时唯一的汉字编码标准仍是晚清的电报码本，而且“編得很糟糕”。那年 11 月，美国的研究图书馆组织（RLG）在斯坦福开会，打算用日本的 JIS 来处理中文。他报告李国鼎，筹得新台币 300 万元；“国字整理小组”12 月 25 日成立，三个月编出 4808 字，1980 年 3 月赴美报告，被采用而非日本方案。这就是 CCCII。因为收了简体字，他还被指“與匪認同”。CCCII 把这层关系直接写进了编码结构：简体字在第一字节上比对应的正体字大 6。

## 大陆：国家标准说了算

GB 2312-1980《信息交换用汉字编码字符集 基本集》收汉字 6763 个。官方记录为 1980 年 3 月 9 日发布、1981 年 5 月 1 日实施；另据《中文信息处理技术大事记》，它 1980 年 12 月批准、1981 年 3 月见报公布。中国中文信息学会称它是“第一个汉字信息技术标准”。2017 年，它转为推荐性标准。

GB 18030 则是强制性的。2000 年版收 27484 字，采用单、双、四字节编码，2001 年 9 月 1 日起对 PC 操作系统强制检测，嵌入式设备、PDA 和手机除外；当时的说法是“凡不符合该标准的产品，视为不合格产品”。至于由谁起草，据起草单位副所长林宁介绍，起草组由电子四所、北大计算机所、方正、中科院软件所、金山、联想等国内单位组成，并征求了微软、HP、Sun、IBM 的意见。2022 年版收字 87887 个，覆盖《通用规范汉字表》全部汉字，国家标准委、工信部、国家语委联合召开了发布会。

## 台湾：五个软件，不是五家公司

1983 年，日本 IBM 推出能处理汉字的日文个人电脑 IBM 5550，引发台湾自行开发中文 PC 的热潮。资策会在经济部资助下推动“五大软体专案”：据 1984 年 3 月 30 日的华视新闻，7 家硬件厂商和 6 家软件公司签约，开发中英文文书处理、档案管理、电子表格、图形与通讯软件。1984 年公布的、供这些软件共用的内码，就是 Big5（大五码）。专案本身失败了，中研院的资料甚至说“幾乎無人知道所謂的『五大』究竟指的是哪五種軟體”。英文维基百科等资料说 Big5 得名于“五家公司”，这是错的。

Big5 收 13053 字（去掉两个重复字后为 13051），字集取自 1983 年的“通用汉字标准交换码”草案，所以它和官方的 CNS 11643 同出一源。CNS 11643 于 1986 年成为国家标准，1992 年扩充为 7 个字面、48027 字，用于户政系统。谢清俊的评价却很干脆：“今日用的是big5”。

## 香港：为名字补字

香港在 Big5 之上补字。1995 年政府编成《政府通用字库》，1999 年发布香港增补字符集（HKSCS），此后多次增订；HKSCS-2016 共 5033 字，其中中文字 4591 个，主要是人名地名、粤语用字和科学用字。

## 谁来决定

一路看下来：电报时代，决定汉字怎么上线的是计费规则和码本编者；在大陆，是国家标准，今天由国务院授权的国家标准化管理委员会统一管理，全国信息技术标准化技术委员会（TC28）对口 ISO/IEC JTC 1，它最早的分委会之一就是 1983 年的 SC2“字符集与编码”；在台湾，市场选中了产业匆忙造出的 Big5；在香港，政府为居民的名字补字。

在西方，ISO/IEC 10646（与 Unicode 同一字符集）试图把各地字集收进同一张表。大陆在 1993 年以 GB 13000.1 等同采用 ISO/IEC 10646-1，收 CJK 汉字 20902 个。

**出处：**张文洋《晚清电报的语法：汉字电码本的设计与应用》（《近代史研究》2018）；全字库 cns11643.gov.tw；全国标准信息公共服务平台 std.samr.gov.cn。

## 延伸阅读

- 张文洋，《晚清电报的语法：汉字电码本的设计与应用》（English: The grammar of late-Qing telegraphy: design and use of Chinese code books），原载《近代史研究》2018，搜狐转载，2018-10-22。[链接](https://www.sohu.com/a/270424338_494916)
- 维基百科，《中文电码》（English: Chinese Wikipedia article “Chinese telegraph code”, giving 1873 and 6800+ characters, citing 《通信信息报》2004）。[链接](https://zh.wikipedia.org/wiki/中文电码)
- 香港入境事務處，ROP133 表格（English: Hong Kong Immigration Department form ROP133），2025-10 版。[链接](https://www.immd.gov.hk/pdforms/rop133.pdf)
- 龚滨良，《中文信息处理技术大事记》（English: Chronicle of Chinese information-processing technology），原载《中国科技史料》1985 年第 2 期。[链接](https://nmlr.muc.edu.cn/info/1106/2042.htm)
- 中研院資訊所，《謝清俊訪談》（English: Interview with 謝清俊, for the Institute of Information Science's 20th anniversary），2001-07-26。[链接](https://www.iis.sinica.edu.tw/file/20thAnniversary/i05.html)
- 全字庫，编码对照与各编码介绍页面（English: CNS11643 site pages comparing CCCII, CNS 11643, Big5 and other encodings），cns11643.gov.tw。[链接](https://www.cns11643.gov.tw/pageView.jsp?ID=9)
- 国家标准全文公开系统，GB 2312-1980 记录（English: GB 2312-1980 official record），openstd.samr.gov.cn。[链接](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=5664A728BD9D523DE3B99BC37AC7A2CC)
- 全国标准信息公共服务平台，GB 18030-2000 记录（English: GB 18030-2000 official record），std.samr.gov.cn。[链接](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D79585D3A7E05397BE0A0AB82A)
- 林宁，《关于GB18030汉字编码标准集》（English: On the GB 18030 Chinese character set standard），中国计算机报，新浪科技转载，2001-07-26。[链接](http://tech.sina.com.cn/s/2001-07-26/1850.html)
- 教育部，GB 18030-2022 发布会新闻（English: Ministry of Education news on the GB 18030-2022 launch），2022-07-29。[链接](http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/moe_1485/202207/t20220729_649675.html)
- 中央研究院，《認識中文字元碼》第 9 节（English: Understanding Chinese character codes, section 9: Big5），idv.sinica.edu.tw。[链接（存档）](https://web.archive.org/web/20251016233709/https://idv.sinica.edu.tw/bear/charcodes/Section09.htm)
- 華視新聞，1984-03-30 关于五大软体专案签约的报道（English: CTS television news report on the signing of the Big Five software project）。[链接](https://news.cts.com.tw/cts/politics/198403/198403301730592.html)
- 香港特區政府共通語言資訊基建，香港增補字符集介绍页面（English: Hong Kong government Common Chinese Language Interface: what HKSCS is），ccli.gov.hk。[链接](https://www.ccli.gov.hk/tc/hkscs/what_is_hkscs.html)
- 全国标准信息公共服务平台，《TC28 全国信息技术标准化技术委员会》（English: TC28, National IT Standardization Technical Committee），std.samr.gov.cn。[链接](https://std.samr.gov.cn/search/orgDetailView?tcCode=TC28)
- 国务院办公厅，国办发〔2001〕56 号通知（English: State Council General Office notice on the functions of AQSIQ, CNCA and SAC），国务院公报 2001 年第 27 号。[链接](https://www.gov.cn/gongbao/content/2001/content_61007.htm)
- 中国中文信息学会，《中文信息处理大事记》（English: Chronicle of Chinese information processing），CIPS。[链接](http://bj.bcebos.com/cips-upload/cipsc30.pdf)

