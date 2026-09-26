---
title: "一台伺服器裝不下：中國大陸第一批搜尋引擎"
weight: 19
date: 2026-09-26
draft: false
phase: "7 — 分散式系統、大數據與編排"
series_index: 19
tags: ["搜尋引擎", "網絡指南針", "天網", "木棉", "CERNET", "中文斷詞", "九五攻關", "集中式與分散式"]
summary: "據賽爾網絡的回顧，中國大陸第一批搜尋引擎誕生在三所大學的實驗室裡；它們先撞上中文沒有空格這堵牆，再撞上網頁多到一台機器裝不下這堵牆。"
image_prompt: "1997 university network lab in Beijing: one beige tower server and one PC on a desk, cables to a wall socket labelled CERNET, a whiteboard with a sentence of Chinese characters split by vertical strokes; later-era racks faintly overlaid behind them to suggest growth; documentary illustration, no readable text"
video_prompt: "20-second animation: a line of Chinese characters with no spaces; candidate word boundaries flicker until a query matches; then a page counter climbs from 200,000 (1997) to tens of millions (2000) while a single server strains and splits into several parallel machines; end on the words centralised vs distributed"
schematics: "Diagram 1: the 1996 national project -> CERNET task 'network information discovery' -> three university engines (Tsinghua Net Compass, PKU Tianwang, SCUT Kapok). Diagram 2: why segmentation matters: character-by-character indexing vs word-based indexing, with the Honglou Meng example '邸报看真'. Diagram 3: one server + one PC (Tianwang 1997) vs parallelised system (2000s), set against Li Xing's 'centralised, not distributed' remark."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F29-01, F29-02, F29-03, F29-06, F29-07 -->

1997 年，中國大陸的第一批搜尋引擎（賽爾網絡的回顧這樣稱呼它們），是在大學實驗室裡、用國家攻關計畫的經費做起來的。它們先撞上一堵英文搜尋沒有的牆：中文詞與詞之間沒有空格。接著又撞上第二堵牆：網頁多到一台機器裝不下。

## 一個攻關計畫，三所大學

據賽爾網絡 2024 年為 CERNET 三十週年寫的回顧，1996 年“九五”攻關啟動，CERNET 領到的任務是“計算機信息網絡及其應用關鍵技術研究”。計畫列了六項任務，其中一項是“網絡信息發現技術”，搜尋引擎就屬於這一項。這個課題沒有交給一家單位，而是選了三所大學來做：清華大學、北京大學和華南理工大學。按這篇回顧的說法，中國大陸第一批搜尋引擎的研究，就這樣在三所大學的網路實驗室裡開始了：清華的網絡指南針、北大的天網、華南理工的木棉。

整個計畫由教育部主持，清華大學等 14 所單位承擔，1998 年通過國家鑑定驗收。那篇回顧稱，這是“我國第一個互聯網領域的國家重大科研項目通過驗收”。

## 第一堵牆：沒有空格

清華的網絡指南針由李星主持。英文的詞與詞之間有空格，機器天然知道在哪裡切開；中文沒有。所以團隊面對的第一個關鍵問題是：“如何切分中文的關鍵詞來進行搜索？”一個字一個字地切，計算量巨大；按詞來切，又得決定那些沒有實際含義的片語要不要切。

據同一篇回顧，指南針考慮了漢語的使用習慣，調整了斷詞方式。《紅樓夢》裡“雨村領其意，作別至館中，忙尋邸報看真確了”一句中的“邸報看真”，既不是成語，也不是常用詞，在指南針上照樣能搜出連結。1997 年 10 月，指南針開始提供中英文資訊查詢，收錄了 20 多萬網頁；從 1999 年 12 月到 2000 年 8 月，10 萬多名使用者在上面查詢了 80 多萬次。

## 第二堵牆：一台伺服器

據賽爾網絡的回顧，北大天網 1997 年 10 月 29 日起在 CERNET 上提供服務（它和百度的淵源，另見本書中文版《從中文信息處理到注意力機制》一頁）。《中國教育網絡》2014 年的文章這樣轉述技術負責人劉建國的看法：當時的天網只是搜尋技術的一個實驗性產品，“只有一台服務器、一台PC、抓網頁，建索引、提供搜索服務，雖然簡陋但卻實用”。

網頁的數量很快漲了上去。據賽爾網絡的回顧，天網團隊認為，搜尋的核心問題可以歸結為“一要準，二要快”；到 2000 年李曉明帶領新課題組時，網上的網頁已達千萬級，閆宏飛和彭波開發了一套技術，實現系統的平行化。《中國教育網絡》的文章則記下了隨後的規模：到 2002 年，天網 FTP 搜尋已有上千萬個檔案，每天點擊 60 多萬次；到 2005 年底，天網 Maze 有 340 萬註冊使用者、30 萬活躍使用者，同時線上人數最高突破 10 萬。再往後，據賽爾網絡的回顧，北大網絡實驗室 2002 年開發建設了中國Web信息博物館，到 2015 年收藏了 70 多億網頁文本資料。

**出處：**賽爾網絡，《中國第一批搜索引擎往事丨CERNET30週年》，2024；《中國教育網絡》，《百度與天網—你不知道的那些事》，2014。

## 李星的兩個遺憾

多年以後，李星這樣回顧網絡指南針：“第一個遺憾是依賴於集中式的技術，未能像谷歌那樣發明Map-Reduce技術，從而走到分佈式。第二個遺憾是缺乏相應的機制，將網絡指南針商業化。”

回顧文章解釋了前一個遺憾：指南針的體系結構是集中式的，網際網路資訊量不大時夠用；網際網路飛速發展以後，這種模式就逐漸跟不上了。一台機器能裝下的網，很快就不是真正的網了。

## 在西方

同一篇回顧把 Google 的辦法概括為“面向大規模數據處理的並行計算模型和方法”，也就是 MapReduce：把一份大活拆給許多台機器同時做。本書英文版第 44 章講的正是這條路：網頁多到一台機器裝不下，儲存和計算就都得假設機器會壞、並且分到大量機器上去做。

線路通了以後，人們一邊找資訊，一邊找人說話；同一時期交談的那一半，見[《擠不進去的廣場：兩岸三地的校園 BBS》]({{< relref "43-zh-bbs.md" >}})。

## 延伸閱讀

- 賽爾網絡，《中國第一批搜索引擎往事丨CERNET30週年》（English: Stories of China's first search engines: CERNET at 30），中國教育和科研計算機網，2024-10-14。[連結](https://www.cernet.com/hlw30/202410/4811.html)
- 《中國教育網絡》，《百度與天網—你不知道的那些事》（English: Baidu and Tianwang: things you didn't know），中國教育網，2014-11-05。[連結](https://www.edu.cn/cxcy_12722/20141105/t20141105_1198967.shtml)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] No lab: none of the existing labs fits search or segmentation. Idea for Reed: a segmentation toy (type a Chinese sentence, toggle character-by-character vs dictionary-word indexing, see which queries hit), then a "one server vs N servers" toy where a growing page count overwhelms one indexer and is split across several.
[ ] No figure: no openly licensed image in the dossier for thread 29 (the CERNET article's engine home-page screenshots are not openly licensed).
[ ] Twin: kept English 44 (Google's big data infrastructure). The fit is direct: Li Xing names MapReduce and centralised-vs-distributed as his first regret, and Tianwang started as one server and one PC. English 43 (Archie/Gopher, "find, then talk") would also fit the "find" side; the BBS page 43-zh-bbs sits there and the two pages cross-link.
[ ] Not repeated from batch 1 (63-zh-road-to-attention): Tianwang team names beyond 劉建國, the Baidu hiring story and dates, the Web InfoMall's use as LLM training data. Only one clause each.
[ ] Left out as unverified or single-source: 木棉 launch date (1998-12) and the keyword-filtering crawler claim; the "Google blocked in late 2002" episode; 李彥宏's patent; 張朝陽's 指南針/搜狐 naming anecdote (in the 2024 article but not in the dossier findings).
[ ] Source details beyond the dossier finding summaries (all in the findings' own cited sources; saved text in /workspace/tmp/wd/cernet_search.txt and educn_tw.txt): the six tasks incl. 網路資訊發現技術; the "我國第一個網際網路領域…通過驗收" quote; the segmentation reasoning and the 紅樓夢 / 邸報看真 example; 1999-12 to 2000-08 usage (10萬多 users, 80多萬 queries); 劉建國's 一台伺服器、一台PC quote; 一要準，二要快; 千萬級 pages and 閆宏飛/彭波 parallelisation (2000); 李星's two-regrets quote and the article's explanation; its MapReduce gloss.
[ ] TODO after PR #23 merges: relref 63-zh-road-to-attention (Tianwang → Baidu; Web InfoMall → LLM corpora; segmentation standard 1992) and 39-zh-networks-1986-1994 (CERNET).
[ ] Native-reader proofread (zh-Hans) before final
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review, review/decisions/44-zh-chinese-search.md); Taiwan-reader proofread still pending
-->
