---
title: "微影：從顯微鏡到掃描機"
weight: 13
date: 2026-09-26
draft: false
phase: "8 — 製程節點與製造"
series_index: 13
tags: ["微影", "曝光機", "分步重複", "清華大學", "909工程", "華虹", "中芯國際", "上海微電子"]
summary: "1964 年的“土光刻機”是兩台顯微鏡加一盞紫外燈；1980 年清華做出自動對準的分步投影曝光機；1990 年代，摩爾定律成了審批流程的時鐘。"
image_prompt: "Split composition: left, a 1964 Beijing lab bench with two brass microscopes and a small UV lamp improvised into a mask aligner; right, a modern white lithography scanner in a cleanroom under yellow light; thin line of light connecting them; documentary illustration style, no text"
video_prompt: "25-second sequence: UV light passes through a mask under a microscope objective in 1964; a laser-interferometer stage steps a pattern across a glass plate cell by cell (1971); a projection lens focuses a 0.8 micrometre line (1980); a calendar flips five years while a chip roadmap advances two generations; a fab lights up in Pudong in 1999; a scanner is delivered in 2016"
schematics: "Diagram 1: step-and-repeat vs scanning exposure (stepper exposes one field at a time; scanner sweeps a slit across the field). Diagram 2: timeline 1964 home-made aligner → 1971 Tsinghua automatic step-and-repeat camera (532 nm, 2-3 µm) → 1980 Tsinghua automatic-alignment projection stepper (0.8 µm, developer's figure) → 1996 Project 909 approved (8-inch, 0.5 µm) → 1999 Hua Hong NEC → 2000 SMIC → 2016 SMEE first domestic front-end scanner (catalogue: 90 nm)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F07-09, F07-13, F16-01, F16-02, F16-03, F16-04, F16-05, F16-06, F16-07, F16-08, F16-10 -->

微影，說到底是用光把圖形印到矽片上。你可以把它想成一台極精密的照相機：光越細，印出的線越細。1960 年代初，中國連一台這樣的照相機都沒有。

## 1963—1964：兩台顯微鏡，一盞紫外燈

據半導體所 2024 年的文章，當時國內根本沒有曝光機，王守覺“因陋就簡，巧妙地用兩台顯微鏡再加上一個紫外曝光燈”，搭建了一台“土光刻機”。靠它，研究團隊 1963 年底做出第一批超小型矽平面高速開關管和高頻電晶體樣管，只有火柴頭那麼大；1964 年改進後小如芝麻，俗稱“芝麻管”。1964 年 4 月，半導體所的 5 種矽平面元件通過鑑定。這些電晶體從哪裡來、後來用到哪裡，見[《從一門課到一塊晶片》]({{< relref "05-zh-transistors-semiconductors.md" >}})。

## 1971—1980：清華造的分步重複照相機

下一步是把手工對準變成機器。據中國計算機學會的歷史記憶檔案，1971 年，我國第一台自動分步重複照相機研製成功，投入規模生產，供應全國半導體行業，1978 年獲全國科技大會獎；它的一塊插件印刷電路底板由清華 1954 級計算機系校友謝樹煜捐贈，今藏清華大學科學博物館。分步重複的意思是：把同一個圖形一格一格地重複曝光，排滿整塊版。

參與研製的清華教授徐端頤回憶，第一代雷射干涉定位分步重複照相機用的是 532 奈米的綠光，加上物鏡數值孔徑不夠大、運轉中焦距失調，加工能力只有 2—3 微米，定位精度為 ±0.25 微米。波長決定了能印多細，這正是英文版第 48 章的主題。

據徐端頤的說法，1970 年代以分步重複照相機、圖形發生器及分步投影曝光機為代表的積體電路微細加工設備“99%來自國內”，供應商正是清華大學，精密儀器系工廠累計生產超過 200 台。他還寫道，1980 年清華完成了國內第一台自動對準分步投影曝光機，加工最細線寬 0.8 微米，安裝在華北微電子研究所，獲 1981 年北京市首屆科技成果一等獎；“三年之後類似的設備才開始進入我國”。0.8 微米這一數字出自研製者本人的回憶，還需要鑑定檔案佐證。

## 1990—1999：摩爾定律成了審批的時鐘

1990 年，71 歲的王守武在給全國政協七屆三次會議的提案中寫道：“想從西方國家引進先進的微電子技術和裝備純屬幻想。”

1996 年起任上海 909 工程辦公室主任的夏鍾瑞，在 2019 年的口述中講了此前 908 工程的教訓：它的可行性研究報告光審批就花了 5 年，而按摩爾定律，這期間國際半導體產業升級了兩代，工程投產即落後。據他回憶，1995 年底江澤民在韓國考察三星的半導體工廠，回國後在一次專門會議上說，就算砸鍋賣鐵也要把我們國家的半導體產業搞上去。1996 年 3 月 29 日，國務院正式批准 909 工程立項，核心是投資百億建設一條 8 吋、0.5 微米的超大規模積體電路生產線，電子工業部代表中央出資 60%，上海出資 40%。工廠 18 個月建成；1999 年 9 月 28 日，華虹 NEC 浦東新廠投產，月產 2 萬片。

## 2000 年以後：代工廠與國產掃描機

據中芯國際科創板上市的法律意見書，2000 年 4 月 3 日，中芯國際依開曼群島公司法註冊成立，同年 5 月發行的首批 10,000 股普通股由張汝京持有。它與台積電的官司以 2009 年的和解收場：據中芯國際 2009 年 11 月 10 日的公告，加州陪審團 11 月 4 日判中芯國際敗訴，雙方 11 月 9 日訂立和解協議，中芯國際向台積電支付合共 2 億美元（分四年付清），並授出約佔已發行股本 8% 的股份。

曝光機本身呢？上海微電子 2002 年 3 月在張江成立。據公司的發展歷程，2016 年 6 月，“我司首台暨國內首台前道掃描光刻機交付用戶”；其 SSX600 系列產品頁標稱可滿足 90 奈米、110 奈米、280 奈米關鍵層和非關鍵層的微影需求。這和清華 1980 年的“國內第一台”並不矛盾：那是分步投影式，一次曝光一整格；這是掃描式，用一道光縫掃過整格。

節點數字這時也成了政策指標。2014 年 6 月的《國家集成電路產業發展推進綱要》要求，到 2015 年 32/28 奈米製程實現規模量產，到 2020 年 16/14 奈米製程實現規模量產。這些奈米數字到底量的是什麼，見英文版第 47 章。

**出處：**徐端頤《我國半導體專用設備研究開發歷史上光輝的一頁》；賈彥、宋曉東《神秘的“909工程”》（夏鍾瑞口述）；上海微電子《發展歷程》。

## 延伸閱讀

- 中國科學院半導體研究所，《自力更生，“從0到1”｜中國第一塊集成電路誕生記》（English: Self-reliance "from 0 to 1": the birth of China's first integrated circuit），原載《中國科學報》，2024-03-14。[連結](https://semi.cas.cn/xwdt/zhxw/202403/t20240314_7031094.html)
- 中國計算機學會，《清華大學自動分步重複照相機印刷電路板》（English: PCB from Tsinghua's automatic step-and-repeat camera, CCF computing-history record, 2024），中國計算機歷史記憶。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2024/ellsjy/2025-02-28/838658.shtml)
- 徐端頤，《我國半導體專用設備研究開發歷史上光輝的一頁》（English: A glorious page in the history of China's semiconductor equipment R&D, a first-hand account by a Tsinghua developer），清華大學建黨百年網站。[連結](https://www.jiandang100.tsinghua.edu.cn/info/1014/6518.htm)
- 計紅梅，《王守武：為中國半導體奠基的“大王先生”》（English: Wang Shouwu, the founder of Chinese semiconductors），《中國科學報》2023-11-17，中國科學院微電子研究所網站轉載。[連結](https://ime.cas.cn/icac/newsroom/newsroom_1/202312/t20231228_6931573.html)
- 賈彥、宋曉東，《神秘的“909工程”：為何國家領導人說砸鍋賣鐵也要搞》（English: The mysterious Project 909, oral history of Xia Zhongrui, director of the 909 office），上觀新聞 2020-05-12，上海黨史網轉載。[連結](https://www.ccphistory.org.cn/shds/pdkfkf30zn/content/3a59d8f1-f741-4b02-8aad-ebdefe4251d3.html)
- 上海市錦天城律師事務所，《關於中芯國際集成電路製造有限公司首次公開發行人民幣普通股（A股）股票並在科創板上市的法律意見書》（English: Legal opinion for SMIC's STAR Market listing），上海證券交易所披露，2020 年 6 月。[連結](http://static.sse.com.cn/stock/disclosure/announcement/c/202006/000497_20200622_RC98.pdf)
- 中芯國際，《中芯國際與台積電達成所有訴訟和解，預期不會對客戶造成干擾》（English: SMIC and TSMC settle all litigation; no disruption to customers expected），2009-11-10。[連結](https://www.smics.com/tc/site/news_read/4281)
- 上海微電子裝備（集團）股份有限公司，《發展歷程》（English: SMEE company history），smee.com.cn。[連結](https://www.smee.com.cn/eis.pub?method=indexinfo&onclicknodeno=1_2_2&service=homepageService)
- 上海微電子裝備（集團）股份有限公司，《SSX600系列光刻機》（English: SSX600-series scanner product page），smee.com.cn。[連結](https://www.smee.com.cn/eis.pub?method=indexinfo&onclicknodeno=1_4_1_1&service=homepageService)
- 國務院，《國家集成電路產業發展推進綱要》（English: National guideline for the development of the IC industry），2014 年 6 月，國家網信辦網站轉載。[連結](http://www.cac.gov.cn/2014-06/26/c_1111325916.htm)

