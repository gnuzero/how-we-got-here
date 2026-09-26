---
title: "從中文信息處理到注意力機制"
weight: 11
date: 2026-09-26
draft: false
phase: "10 — 現代 AI 硬體"
series_index: 11
tags: ["機器翻譯", "斷詞", "吳文俊", "天網", "百度", "ResNet", "RoPE", "注意力機制"]
summary: "從一台只能輸出電報碼的翻譯機，到首發在中文部落格上的旋轉位置編碼，中文這條線給今天的 Transformer 留下了兩塊實實在在的零件。"
image_prompt: "Visual timeline in one frame: a 1959 vacuum-tube computer printing rows of four-digit telegraph codes; a mathematician at a 1970s paper-tape machine; a 1997 search page; a modern diagram of a Transformer block with its residual connection and rotating query/key vectors highlighted; clean editorial illustration, white background"
video_prompt: "25-second animation: telegraph code digits on a printout turn into Chinese characters (1959 → 1978); a line of text without spaces gets segmented; a web crawl fills a warehouse of pages; two vectors rotate by position angles and their dot product stays constant for equal offsets; end on a Transformer layer with a residual arrow labelled ResNet"
schematics: "Diagram 1: the chain from Chinese MT and segmentation to web archive to model components. Diagram 2: RoPE: query and key rotated by angle proportional to position; inner product depends only on relative position. Diagram 3: Transformer sub-layer with residual connection (He et al. 2015)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F13-01, F13-02, F13-03, F13-06, F06-01, F06-02, F06-03, F29-02, F29-03, F29-04, F29-05, F29-06, F06-07, F06-08, F06-09 -->

Transformer 的原始任務是機器翻譯。沿著中文這條線往回走，你會碰到一連串被英文敘事略過的節點：一台打不出漢字的翻譯機，一位 58 歲學程式設計的數學家，一座後來變成大型語言模型語料的網頁博物館，還有兩塊直接寫進今天大型語言模型裡的零件。

## 1959：翻譯成功了，卻打不出漢字

1957 年，劉湧泉到蘇聯科學院精密儀器和計算技術研究所研究機器翻譯；1958 年 5 月，他在莫斯科的會議上發表了中國第一篇機器翻譯論文。1959 年國慶節前，他主持的俄漢機器翻譯在計算所 104 機上試驗成功，但“輸出的是電報碼”。直到 1978 年 ECMT-78 英漢機器翻譯系統試驗成功，“這次輸出的是漢字”。

十九年裡，瓶頸不在語言，而在字元輸出。1978 年，正是劉湧泉以中國科技情報學會機器翻譯委員會主任委員的身份，組織了第一次漢字編碼學術交流會。

中文還有一個英文沒有的難題：詞與詞之間沒有空格。中國中文信息學會稱，1992 年發布的《信息處理用現代漢語分詞規範》從工程需求出發，“解決了語言學界爭論了幾十年而未解決的漢語的詞的定義問題”。今天大型語言模型要做的斷詞，在中文世界早就是一個標準化問題。

## 吳文俊：58 歲學程式設計

吳文俊在口述自傳裡說，研究中國古代數學讓他明白“不必照西方的道路走，而是走另外一條道路”。1971 年他在北京無線電一廠勞動時第一次接觸電腦；幾何定理機器證明的研究從 1976 年冬天開始，1977 年春節期間先用手算驗證了方法。他在紙帶輸入的長城 203 上證明了西姆松定理，58 歲從零學程式設計，先學組合語言，後來“用Basic編寫了四五千行的證明定理的程序”。學生周咸青把這個方法帶到國外。1997 年，他獲得自動推理領域的 Herbrand 獎。

## 天網：從搜尋引擎到大型語言模型語料

1996 年，北大網絡實驗室陳葆珏教授帶領劉建國、周利民、雷鳴等研發“天網”，1997 年 10 月 29 日起在 CERNET 上提供服務，名字取自“天網恢恢，疏而不漏”。同期的清華“網絡指南針”（李星主持）面對的第一個關鍵問題，就是怎樣切分中文關鍵詞。

百度初創時，劉建國、周利民、雷鳴加入了百度。CERNET 2024 年的文章說，1999 年李彥宏按天網上留的 Email 地址給劉建國寫信，劉建國“成為百度的第一名員工”；2014 年的另一篇文章則說他是 2000 年辭職加入的。百度官網記載，公司 2000 年 1 月 1 日創立於中關村。

2002 年起，北大網絡實驗室建設“中國Web信息博物館”，到 2015 年收藏 70 多億網頁、超過 200TB，2016 年捐贈給中國計算機學會。據 CERNET 的回顧，這近 20 年的資料已被 30 多家機構用於訓練大型語言模型。

**出處：**賽爾網絡，《中國第一批搜索引擎往事》，2024。

## 寫進 Transformer 的兩塊零件

2015 年，微軟亞洲研究院以 152 層的“深度殘差網絡”（ResNet）贏得 ImageNet 挑戰賽，錯誤率 3.57%。四位作者孫劍、何愷明、張祥雨、任少卿都是中國人，其中張祥雨（西安交通大學）和任少卿（中國科學技術大學）是聯合培養的博士生。《Attention Is All You Need》描述編碼器時寫道：“We employ a residual connection [11]”，文獻 [11] 就是這篇 ResNet 論文。每個 Transformer 層裡的殘差連接，都明確記在這項工作名下。

第二塊是位置編碼。2021 年 3 月 23 日，蘇劍林在自己的中文部落格“科學空間”發表《Transformer升級之路：2、博採眾長的旋轉式位置編碼》，系統介紹了旋轉式位置編碼（RoPE），並開源了追一科技的 RoFormer 模型。思路是：按位置把查詢向量和鍵向量各旋轉一個角度，它們的內積就只取決於相對位置。4 月 20 日，論文才提交到 arXiv。後來 Meta 的 LLaMA 論文寫明採用“rotary positional embeddings (RoPE), introduced by Su et al. (2021)”。英文世界引用的是 arXiv 論文，很少有人注意到它首先是用中文發表在個人部落格上的。

## 在西方

注意力機制的 Transformer 由 Vaswani 等人在《Attention Is All You Need》中提出；英文機器翻譯史通常從 1954 年的喬治城—IBM 實驗講起。中文這條線補上的是：Transformer 的殘差連接，和後來被 LLaMA 採用的旋轉位置編碼，都有中文世界的來源。

## 延伸閱讀

- 中國社會科學院語言研究所，《學者介紹：劉湧泉》（English: Scholar profile: Liu Yongquan），語言研究所網站，2021-10-29。[連結](http://ling.cass.cn/xueren/xzjs/202110/t20211029_5370412.html)
- 中國中文信息學會，《中文信息處理大事記》（English: Chronology of Chinese information processing），中國中文信息學會（PDF）。[連結](http://bj.bcebos.com/cips-upload/cipsc30.pdf)
- 吳文俊，《吳文俊：我的機器證明之路》（English: My road to machine proof; from his oral autobiography《走自己的路》, “Walking my own road”），中國科學院網站“院士風采”，2024-06-21。[連結](https://www.cas.cn/zt/hyzt/ysdh21st/ysfc/202406/t20240621_5022393.shtml)
- 中國科學院，《深切緬懷吳文俊院士》專題“吳文俊簡介”（English: In memory of Academician Wu Wenjun: biography），中國科學院網站，2017-05-08。[連結](https://www.cas.cn/zt/rwzt/sqmhwwjys/yw/201705/t20170508_4599560.shtml)
- 賽爾網絡，《中國第一批搜索引擎往事丨CERNET30週年》（English: Stories of China's first search engines: CERNET at 30），中國教育和科研計算機網，2024-10-14。[連結](https://www.cernet.com/hlw30/202410/4811.html)
- 《中國教育網絡》，《百度與天網—你不知道的那些事》（English: Baidu and Tianwang: things you didn't know），中國教育網，2014-11-05。[連結](https://www.edu.cn/cxcy_12722/20141105/t20141105_1198967.shtml)
- 百度，公司介紹（English: Baidu company profile），百度官網。[連結](https://home.baidu.com/about/about.html)
- 微軟亞洲研究院，ImageNet 2015 獲勝報導（English: MSRA article on winning ImageNet 2015），微軟研究院網站，2015-12。[連結](https://www.microsoft.com/en-us/research/articles/imagenet-20151211/)
- He, Zhang, Ren, Sun，“Deep Residual Learning for Image Recognition”（English: original English title），arXiv:1512.03385，2015-12-10。[連結](https://arxiv.org/abs/1512.03385)
- 蘇劍林，《Transformer升級之路：2、博採眾長的旋轉式位置編碼》（English: The road to upgrading the Transformer, part 2: rotary position embedding, drawing on the best of many），科學空間，2021-03-23。[連結](https://kexue.fm/archives/8265)
- Su et al.，“RoFormer: Enhanced Transformer with Rotary Position Embedding”（English: original English title），arXiv:2104.09864，2021-04-20。[連結](https://arxiv.org/abs/2104.09864)
- Touvron et al.，“LLaMA: Open and Efficient Foundation Language Models”（English: original English title），arXiv:2302.13971。[連結](https://arxiv.org/abs/2302.13971)
- Vaswani et al.，“Attention Is All You Need”（English: original English title），arXiv:1706.03762。[連結](https://arxiv.org/abs/1706.03762)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field (RoPE rotation diagram is the priority)
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s): none set (no existing lab fits attention or RoPE; a future RoPE rotation widget would fit)
[ ] Photos: none used. No openly licensed image is verified in the dossier for threads 06/13/29. Candidates to check on Commons before use: Wu Wenjun portrait, the 104 computer.
[ ] Native-reader proofread
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review); Taiwan-reader proofread still pending
-->
