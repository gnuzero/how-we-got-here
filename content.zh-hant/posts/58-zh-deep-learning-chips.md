---
title: "從 DianNao 到昇騰：為矩陣乘法造的晶片"
weight: 14
date: 2026-09-26
draft: false
phase: "10 — 現代 AI 硬體"
series_index: 14
tags: ["深度學習處理器", "DianNao", "寒武紀", "計算所", "TPU", "NPU", "麒麟970", "昇騰"]
summary: "2014 年，計算所與法國 Inria 合作的 DianNao 拿下 ASPLOS 最佳論文；三年後，這條路線進了手機，而華為的新聞稿裡沒有提到寒武紀。"
image_prompt: "A cramped glass-walled lab room at night, under 30 square metres, two researchers leaning over a debug host whose screen shows a test passing, a bare prototype chip on a small board connected by a serial cable, whiteboard with a grid of multiply-accumulate units; warm documentary illustration style, no text"
video_prompt: "25-second sequence: a neural-network layer dissolves into a grid of multiply-accumulate cells; memory bandwidth drawn as a narrow pipe; on-chip memory blocks appear beside the grid (DianNao, 2014); many chips tile together (DaDianNao); cut to a 2017 phone launch stage with the word NPU; a 16x16x16 cube of MAC units pulses (Da Vinci, 2018); restrained explainer tone"
schematics: "Diagram 1: the DianNao family 2014-2016 (DianNao ASPLOS'14, DaDianNao MICRO'14, ShiDianNao ISCA'15, PuDianNao ASPLOS'15, Cambricon ISA ISCA'16) with the TPU paper (ISCA'17) citing them. Diagram 2: Cambricon IP-licensing revenue share from HiSilicon: 2017 100.00%, 2018 97.94%, 2019 92.56%. Diagram 3: a 16x16x16 MAC cube = 4,096 MACs per cycle per AI Core."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F08-01, F08-02, F08-03, F08-04, F08-06, F08-07, F08-08, F08-09, F08-10, F08-11, F08-12 -->

神經網路的一層，算的幾乎全是乘加。華為 2019 年解讀自家達芬奇架構時說，典型神經網路裡“99%的計算都需要用到矩陣乘”。如果計算這麼單一，為什麼不給它專門造一塊晶片？2014 年前後，北京的一個團隊給出了自己的答案。

## 2012—2016：一個中法合作的晶片家族

據中科院計算所 DianNao 計畫主頁的中英雙語介紹，“本項目是中科院計算所的陳雲霽教授和法國Inria的Olivier Temam間的一個學術合作項目，雙方為此設立了聯合實驗室”。起點是 Temam 在 2012 年 ISCA 上提出的第一個機器學習加速器設計，它的瓶頸在記憶體頻寬。

主頁把之後的工作排成一個家族。DianNao 在加速器旁加上片上儲存，緩解頻寬問題，2014 年獲 ASPLOS 最佳論文；多晶片的 DaDianNao 把整個模型放在片上，獲 MICRO 2014 最佳論文；ShiDianNao 直接接在視覺感測器上（ISCA 2015）；面向通用機器學習的 PuDianNao 是家族的最後一個成員（ASPLOS 2015）。之後團隊設計了神經網路加速器指令集 Cambricon，在 ISCA 2016 上獲得評審最高分。計算所當年的新聞稱，DianNao 論文的第一作者是陳天石，這是亞洲首次、美國之外第二次獲 ASPLOS 最佳論文；中科院 2024 年的專題還稱，DaDianNao 是 MICRO 自 1963 年創辦以來首次由美國以外的學者獲獎。

同一專題講了一個細節：陳雲霽讀研究生時被龍芯 1 號研製組組長胡偉武招進團隊，在驗證組寫測試程式。它還寫道，2015 年，“國際上第一顆深度學習處理器原型芯片的一次流片成功”，是在計算所一間不足 30 平方米、被戲稱為“小黑屋”的玻璃房裡揭曉的；專題稱陳雲霽、陳天石為兄弟。

## TPU 論文怎麼寫

Google 的 Jouppi 等人 2017 年的 TPU 論文在相關工作裡專門討論了 DianNao 家族：“All use 16-bit integer operations and all designs dove down to layout, but no chips were fabricated.”（它們都用 16 位整數運算，設計都做到了佈局，但沒有製造晶片。）論文還寫道，原版 DianNao 有 64 個 16 位整數乘加單元和 44 KB 片上儲存，估計面積 3 平方毫米（65 奈米）、1 GHz、0.5 瓦；後繼的 DaDianNao 用 eDRAM 在片上存放 36 MiB 權重。

這句話要和中科院的說法分開讀。TPU 論文說的是 DianNao 家族已發表的那幾種設計；中科院專題說的是 2015 年另一顆原型晶片投片成功，而且沒有說明它實現的是哪一種設計。兩句話講的對象不同，並不互相否定。

## 從論文到手機

據寒武紀的招股書，公司成立於 2016 年 3 月 15 日；中國科學院的專題文章說，它是在計算所和創投機構的支持下成立的。2017 年 9 月，華為在 IFA 上發表麒麟 970，稱它“首次集成NPU”，新的異構計算架構相較於四個 Cortex-A73 核心有大約 50 倍能效和 25 倍效能優勢，晶片整合 55 億個電晶體。那份新聞稿通篇沒有提到寒武紀。據驅動中國的報導，計算所隨後致華為、海思的賀信寫明，麒麟 970 整合寒武紀 1A 處理器作為核心人工智慧處理單元，“即余承東總在發布會中所述NPU”，並稱 1A 是“國際上首個商用深度學習處理器產品”。

最具體的記錄在寒武紀 2020 年的科創板招股書裡：2017—2019 年，華為海思佔公司終端智慧處理器 IP 授權收入的 100.00%、97.94% 和 92.56%；2019 年這項收入下滑 41.23%，主要是因為華為海思選擇自研終端智慧晶片，未再合作。招股書還說，1A、1H 已整合於超過 1 億台智慧手機及其他智慧終端裝置。

華為自己的路線叫達芬奇。據它的官方解讀（IT之家轉載），2018 年全聯接大會上推出的昇騰 310 是達芬奇架構的首次亮相；每個 AI Core 的 3D Cube 用 16×16×16 的結構，一個時脈週期完成 4096 次乘加。2019 年 8 月，華為發表訓練晶片昇騰 910，央視網報導，它達到規格算力時的實測功耗為 310 瓦，低於 350 瓦的設計規格。

英文版第 57、58 章講的是同一個邏輯：計算收縮成矩陣乘法，晶片就按矩陣的形狀去造，TPU 的脈動陣列是其中一種做法。這一頁補上的是 2014 年前後北京的那一段，以及它進入商用時的署名之爭。

**出處：**中科院計算所 DianNao 計畫主頁；Jouppi 等，TPU 論文（ISCA 2017）；《中科寒武紀科技股份有限公司首次公開發行股票並在科創板上市招股說明書》。

## 延伸閱讀

- 中國科學院計算技術研究所，《A Brief Introduction to The DianNao Project / 中法聯合DianNao項目簡介》（English: the DianNao project page, bilingual），novel.ict.ac.cn。[連結](https://novel.ict.ac.cn/diannao/)
- 中國科學院計算技術研究所，《計算所國重未來計算團隊喜獲ASPLOS最佳論文獎》（English: ICT team wins the ASPLOS best paper award），2014 年新聞，中國科學院網信工作網轉載。[連結](http://www.ecas.cas.cn/dtfb/ysdt/201802/t20180206_4934055.html)
- 中國科學院，《開創“寒武紀”》（English: Founding "Cambricon", CAS feature on self-reliance in science and technology），2024-09-19。[連結](https://www.cas.cn/zt/kjzt/kjzlzqzl/kjzlzq/202409/t20240919_5032328.shtml)
- Norman P. Jouppi et al.，“In-Datacenter Performance Analysis of a Tensor Processing Unit”（中文：資料中心內張量處理單元的效能分析），ISCA 2017，arXiv:1704.04760。[連結](https://arxiv.org/abs/1704.04760)
- 華為，麒麟 970 IFA 2017 發表新聞稿（English: Huawei press release on the Kirin 970 launch at IFA 2017），2017-09。[連結](https://www.huawei.com/cn/news/2017/9/mobile-ai-ifa-2017)
- 驅動中國，《中科院賀信柔中有剛，強調Kirin NPU並非華為所有》（English: CAS congratulatory letter stresses that the Kirin NPU is not Huawei's own），2017-09-08。[連結](https://mobile.qudong.com/article/433829.shtml)
- 中科寒武紀科技股份有限公司，《首次公開發行股票並在科創板上市招股說明書（註冊稿）》（English: Cambricon STAR Market IPO prospectus, registration draft），上海證券交易所披露，2020-06-22。[連結](https://static.sse.com.cn/stock/disclosure/announcement/c/202006/000354_20200622_AWSW.pdf)
- IT之家，《華為深度解讀達芬奇架構：3D Cube計算引擎加速運算》（English: Huawei explains the Da Vinci architecture and its 3D Cube engine），2019-08-22。[連結](https://www.ithome.com/0/440/590.htm)
- 央視網，《華為正式發布最新AI處理器昇騰910及全場景AI計算框架MindSpore》（English: Huawei launches the Ascend 910 AI processor and the MindSpore framework），2019-08-23。[連結](http://news.cctv.com/2019/08/23/ARTI2cqgeaCmXn6WauhnfNyy190823.shtml)

