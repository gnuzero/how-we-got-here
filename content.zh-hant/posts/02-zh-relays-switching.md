---
title: "繼電器與交換機：上海電話局裡的“電腦”"
weight: 4
date: 2026-09-26
draft: false
phase: "1 — 基礎：從機械計算到真空管計算"
series_index: 4
tags: ["繼電器", "電話交換", "旋轉制", "縱橫制", "記發器", "七國八制", "HJD04", "上海"]
summary: "從 1882 年外灘的人工交換所到 1991 年的 HJD04：上海的繼電器交換機一用幾十年，改線就是改程式。"
image_prompt: "Interior of a mid-20th-century Shanghai telephone exchange: long rows of grey relay racks and rotary switch frames, cable-laced wiring looms, a technician in a work coat checking a rack with a test set, period-accurate, muted documentary photography style, no text"
video_prompt: "20-second animation: a dialled number enters as pulses, is stored in a row of relay 'register' contacts, then a marker lights a path through a crossbar grid and the call connects; cut to a technician rewiring one frame as the number grows from 5 to 7 digits"
schematics: "Diagram 1: direct control (step-by-step: dial pulses drive selectors) vs indirect control (register stores digits, marker drives the crossbar switch), labelled with 记发器 / 标志器. Diagram 2: Shanghai timeline 1882 manual, 1924 Ericsson register system, 1959 domestic crossbar, 1982 imported stored-program, 1991 HJD04, 2017 last TDM switch retired."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F35-01, F35-02, F35-03, F35-04, F35-05, F15-01, F15-02, F15-03, F15-04, F15-05, F15-06, F02-08 -->

在真空管時代之前，城市裡最會“按規則做決定”的機器不在實驗室，而在電話局。你每撥一個號碼，就有一串繼電器按規則開合，替你找到一條線路。上海是看這件事的好地方：那裡的繼電器交換機，一用就是幾十年。

## 1882：外灘 7 號

1882 年，丹麥大北電報公司在上海外灘 7 號開設磁石式人工電話交換所，這是中國領土上第一個電話交換所。第二年改由英商經營，1900 年專營權轉給華洋德律風公司。早期號碼只有一到三位；1907 年，清政府辦的南市電話局為華界開通。人工交換，意味著每一次接續都要接線員動手。

## 1924：不是步進制

1924 年，華洋德律風公司東區交換所裝了 1000 門愛立信自動交換機，上海號碼第一次改為五位。說到自動交換，人們常想到史端喬（Strowger）步進制；但當年的《愛立信評論》描述的是 register finder 和 register 兩類設備（本書譯作記發器尋線器、記發器），從這一點看，上海第一套自動交換機是愛立信的記發器控制系統，而不是步進制。開通月份也有兩說：澎湃新聞的文章說 3 月，《愛立信評論》說“今年 5 月”。

記發器是這段故事的關鍵。中國電信博物館這樣解釋：步進制由用戶的撥號脈衝直接驅動繼電器動作；縱橫制是間接控制，撥號脈衝“先由記發器接收、存儲，然後通過標誌器驅動接線器”。先存起來，再決定怎麼動：這是用繼電器搭出來的儲存，也是後來“程控”的種子。

## 六十年的旋轉制

1928 年，租界各電話局全部改為自動交換；1933 年，華界的上海電話局也改用自動交換機接線；1942 年 6 月 28 日，全市統一為五位號碼。中國電信博物館藏有一台比利時生產的 7A1 型旋轉制交換機，說明寫著“20世紀20-80年代上海電話局使用”。一套繼電器系統，在一座城市裡天天工作了約六十年。

## 1959：自己造縱橫制

1959 年 8 月，上海電信研究所、上海自動電話廠和上海市內電話局聯合研製成功我國第一部縱橫制局用自動電話交換機。它何時投入使用，中國電信博物館自己的兩份材料說法不同：2023 年的文章說同年 12 月 16 日，第一套 1000 門縱橫制交換機在上海吳淞局開通；2021 年的大事記說，1960 年 1 月第一個縱橫制自動電話實驗局在吳淞分局安裝開通。可能一個指安裝、一個指正式開通，這裡兩說並存。

電話工業也直接幫了第一台電腦。據中國科學院的記述，1958 年 5 月下旬，103 機插件底板的焊接進度落後，技術員夏紀寅和 738 廠的錢基廣請熟練工人“採取交換機總裝車間的扎纜型工藝”，5 月 31 日凌晨 2 點完工。

## 改線就是改程式

1989 年 11 月 12 日，上海電話升為七位號碼。在此之前，要先完成 18 萬門縱橫制交換機的電路修改。繼電器邏輯裡沒有軟體可改，號碼規則一變，就得動手改線。對繼電器機器來說，改線就是改程式。

## 七國八制與 HJD04

程控交換來得很快。1982 年，福州引進並開通了日本富士通 F-150 萬門程控電話交換機，程控電話隨即出現在其他城市。進口設備來自七個國家、八種制式，業內稱為“七國八制”；1989 年起，巴黎統籌委員會又對中國實施大型程控交換機禁運。1991 年，解放軍信息工程學院與中國郵電工業總公司聯合研製成功 HJD04，這是我國第一台擁有完全自主智慧財產權的大型數位程控交換機。新華社稱，它“標誌著‘七國八制’長期壟斷中國程控交換機市場格局的終結”，也使巴統的禁運徹底流產。此後，巨龍、大唐、中興、華為，也就是人們說的“巨大中華”，相繼崛起。

故事也在上海收尾：2017 年 12 月 21 日，中國電信最後一台程控交換機在上海退網，網路轉向全光、全 IP。

在西方，史端喬步進制常被當作自動電話交換的起點。上海的例子說明，繼電器時代在不同城市走的是不同的路：這裡先來的是記發器，再是縱橫制，最後是被禁運逼出來的國產程控機。

**出處：**中國電信博物館《從聽得見到聽得好，電話交換技術的百年演進》（2023）；葉亦帆《信息史︱電話號碼知幾位》（澎湃新聞，2021）。

## 延伸閱讀

- 葉亦帆，《信息史︱電話號碼知幾位》（English: Information history: how many digits in a phone number?），澎湃新聞，2021-12-12。[連結](https://www.thepaper.cn/newsDetail_forward_15277146)
- 中國電信博物館，《從聽得見到聽得好，電話交換技術的百年演進》（English: From audible to clear: a century of telephone switching technology），2023-11-13。[連結](http://museum.chinatelecom.com.cn/yj/txkp/202311/t20231113_77967.html)
- 中國電信博物館，《電信業大事，你知道多少？（1950——1979）》（English: How much do you know of telecom milestones, 1950–1979?），2021-06-11。[連結](http://museum.chinatelecom.com.cn/yj/zt/bwgwzbndx/2021bwgbnds/202106/t20210611_61601.html)
- L. M. Ericsson，“The Shanghai Automatic Exchange”（中文：上海自動交換所），*The L. M. Ericsson Review*，1924 年第 9—10 期。[連結](https://telecom.wiki/download/attachments/819291/Ericsson_Review_Vol_1_1924_9-10.pdf)
- 甘曉，《中國從此“有了”計算機》（English: From then on, China "had" a computer），《中國科學報》，中國科學院官網轉載，2024-04-01。[連結](https://www.cas.cn/cm/202404/t20240401_5010362.shtml)
- 新華社，《我國第一套擁有自主知識產權的大型數字程控交換機誕生》（English: China's first large digital stored-program exchange with its own intellectual property is born），《經濟日報》，2009-11-11。[連結](http://paper.ce.cn/jjrb/html/2009-11/11/content_86815.htm)

