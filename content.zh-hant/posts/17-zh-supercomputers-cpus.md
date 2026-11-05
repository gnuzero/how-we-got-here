---
title: "規模：從銀河到太湖之光"
weight: 10
date: 2026-09-26
draft: false
phase: "3 — 構建 CPU 及其架構"
series_index: 10
tags: ["超級電腦", "DJS-130", "銀河-I", "曙光", "龍芯", "神威·太湖之光", "天河", "指令集"]
summary: "相容別人、手工自造、用商品晶片拼、再自己設計晶片：中國的大型電腦四十年裡換了幾條路，每一次轉向都被一個具體的約束逼出來。"
image_prompt: "Triptych: left, 1983 technicians hand-soldering a huge backplane of wires for the Yinhe-I; centre, a 1993 rack of VME boards with Motorola chips; right, rows of modern supercomputer cabinets glowing blue in a hall; clean technical illustration style"
video_prompt: "25-second animation: a soldering iron completing one joint among millions; zoom out to a cabinet; the cabinet splits into commodity boards on a bus; then many-core chips tile across a wafer; ending on a TOP500 ranking bar rising to first place and then being overtaken"
schematics: "Diagram 1: four strategies and their constraint (compatibility with NOVA; hand-built custom machine; commodity CPUs + UNIX under export controls; home-grown ISA/many-core). Diagram 2: Dawning-1 architecture: 4 boards × 4 Motorola 88100 on a VME bus, shared memory."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F14-01, F14-02, F14-03, F14-04, F14-05, F04-01, F04-02, F04-03, F04-04, F04-05, F04-07, F04-08, F04-09, F04-10, F04-11, F04-12, F04-13, F04-14 -->

一台電腦怎樣變“大”？中國在四十年裡走過幾條路：相容別人、自己手工造、用商品晶片拼，最後回到自己設計晶片。每一次轉向，都是被一個具體的約束逼出來的。

## 先學會相容：DJS-100 的一課

1973 年 5 月，四機部在清華大學宣布成立 DJS-100 系列機聯合設計組。參與者林行良回憶，這個系列的指令集“與當時美國的NOVA計算機的指令系統是一致的”。中科院物理所進口了一台 NOVA，把系統軟體的機器碼反組譯成組合語言，交給 1976 年成立的系統軟體聯合設計組分析、移植、改進，三年做出全套系統軟體。林行良稱，這在當時國內是第一次嘗試這樣的逆向工程；清華組負責服務性程式、BASIC、組合語言和周邊設備管理程式，其中周邊設備管理程式是自己寫的，“原來NOVA的軟件中是沒有的”。DJS-130 後來由北京、上海、蘇州、天津等地工廠生產了幾千台；清華方面的負責人呂文超總結的經驗是“標準化、規模化、通用化”。

這一課很樸素：**指令集相容，就能繼承軟體。**後面每一代機器，都要在相容與自主之間做選擇。

## 銀河-I：二百五十多萬個手工焊點

1978 年 3 月，研製巨型機的任務交給國防科技大學，慈雲桂任總指揮。1983 年 12 月 6 日，銀河-I 在長沙通過國家鑑定，向量運算速度每秒一億次以上，共生產安裝 3 台。中國計算機學會的檔案記錄了鑑定方法：26 道考題，每題執行三遍，結果完全一致。據國防科大記載，這台機器有三十多萬條線路、二百五十多萬個焊點，全部手工焊接；系統設計組 15 個月畫了 5000 多張邏輯圖。國防科大和中國計算機學會都稱，銀河-I 使中國成為繼美、日之後第三個能研製巨型機的國家；這個說法成立與否，取決於“巨型機”怎麼定義。

## 曙光：換一條路，用商品晶片

1990 年 3 月，國家智能計算機研究開發中心成立，李國傑任主任。1993 年的曙光一號不再從頭造一切：它用 Motorola 88100 微處理器，最多 16 個 CPU（每板 4 個，4 塊板經 VME 匯流排相連），跑 UNIX，峰值定點速度每秒 6.4 億次。計算所稱，這是國內首次採用商品化微處理器晶片和 UNIX 作業系統研製平行電腦。

據中國計算機學會檔案，曙光一號的攻堅階段（1992.3—1993.10）以陳鴻安、樊建平、劉金水等人集中於美國矽谷“封閉式”攻堅開始，技術路線還得到過伯克利的 David Patterson 和普林斯頓的李凱的建議。這只有一份來源，值得再用回憶錄核實。2001 年初，曙光 3000 達到每秒 4000 億次浮點運算，計算所稱它“超出當時國外對我國禁運的高端計算機一個數量級”。出口管制，成了設計的驅動力。

## 龍芯：兩個日期，指兩件事

《人民日報》2019 年報導：2001 年 8 月，龍芯 1 號成功啟動作業系統；2002 年 8 月，我國首款通用 CPU 龍芯 1 號投片成功。計算所所史則記 2002 年 9 月在展覽上發表，0.18 微米 CMOS。報導還引用了胡偉武的反思：團隊一度“過度追求多核以及浮點峰值性能的單一指標”，2013 年 5 月調整路線。2020 年推出、2021 年 4 月正式發布的 LoongArch 有近 2000 條指令，“不包含MIPS指令系統”。相容與自主之間，這次選了自主。

## 登頂：只寫榜單能核對的事

2010 年 11 月，國家超級計算天津中心的天河一號 A 以 2.57 PFlop/s 居 TOP500 第一。2013 年 6 月，國防科技大學的天河二號以 33.86 PFlop/s 登頂，16,000 個節點，每節點 2 顆 Intel Xeon 與 3 顆 Xeon Phi，共 3,120,000 核，此後連續六屆居首。2016 年 6 月，神威·太湖之光以 93 PFlop/s 居第一：40,960 個節點、10,649,600 核，滿載功耗 15.37MW，全部採用國產處理器。科技部說明，申威 26010 由國家高性能集成電路（上海）設計中心研製，單晶片 260 核，主頻 1.5GHz。2018 年 6 月，美國的 Summit 以 122.3 PFlop/s 登頂，太湖之光在連續居首兩年後降至第二。

對比一下：天河二號的算力來自美國晶片，太湖之光全用國產眾核處理器。四十年後，DJS-100 那道“兼容還是自主”的題，又出現了一次。

**出處：**TOP500 榜單 2010-11、2013-06、2016-06、2018-06；科技部，2016。

在西方，DJS-100 所相容的 NOVA 出自美國 Data General 公司；曙光一號請教過的 David Patterson 來自加州大學伯克利分校。

## 延伸閱讀

- 呂文超，《100系列計算機聯合設計成功的啟示》（English: Lessons from the successful joint design of the 100-series computers），清華大學計算機系“60週年系慶”，2018-07-24。[連結](https://www.cs.tsinghua.edu.cn/info/1169/4071.htm)
- 林行良，《DJS100系列機系統軟件聯合設計》（English: Joint design of the DJS-100 series system software），清華大學計算機系“60週年系慶”，2018-07-24。[連結](https://www.cs.tsinghua.edu.cn/info/1169/4069.htm)
- 國防科技大學，《“銀河－I”計算機橫空出世！》（English: The Yinhe-I computer bursts onto the scene），國防科技大學官網，2019-12-06。[連結（存檔）](https://web.archive.org/web/20260811113811/https://www.nudt.edu.cn/zjkd/kdgs/f510ef9ef03c49ebac9350a302c80290.htm)
- 中國計算機學會，《“銀河-1”億次計算機》（English: The Yinhe-1 100-million-ops computer），中國計算機歷史記憶，2018-09-12。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2017/First_class/2018-09-12/652326.shtml)
- 中國計算機學會，《曙光1號並行計算機》（English: The Dawning-1 parallel computer），中國計算機歷史記憶，2020-03-24。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2019/First_class/2020-03-24/697778.shtml)
- 中國科學院計算技術研究所，《歷史沿革》（English: ICT history），計算所官網。[連結](https://www.ict.ac.cn/jssgk/lsyg/)
- 《把“不可能”變為現實的龍芯團隊》（English: The Loongson team that made the “impossible” real），《人民日報》2019-06-17 第 14 版，計算所官網轉載。[連結](https://ict.cas.cn/xwgg/mtwz/202008/t20200804_5649556.html)
- 《自主需要從根——龍芯中科正式發布完全自主指令集架構LoongArch》（English: Independence starts at the root: Loongson releases the LoongArch ISA），新華網（來源：中國網），2021-04-16。[連結](http://www.xinhuanet.com/tech/2021-04/16/c_1127339088.htm)
- 科技部，《申威處理器 中國超算最強芯》（English: The Sunway processor, the strongest chip in Chinese supercomputing），科技部網站，2016-06-29。[連結](https://most.gov.cn/kjbgz/201606/t20160628_126168.html)
- TOP500, “November 2010”, “June 2013”, “June 2016”, “June 2018”（English: TOP500 list pages），top500.org。[2010-11](https://www.top500.org/lists/top500/2010/11/) · [2013-06](https://www.top500.org/lists/top500/2013/06/) · [2016-06](https://www.top500.org/lists/top500/2016/06/) · [2018-06](https://www.top500.org/lists/top500/2018/06/)

