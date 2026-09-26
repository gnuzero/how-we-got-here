---
title: "程式語言與編譯器：從 104 機到倉頡"
weight: 16
date: 2026-09-26
draft: false
phase: "4 — 軟體基礎：作業系統、程式語言與即時系統"
series_index: 16
tags: ["編譯器", "董韞美", "徐家福", "104機", "BCY", "ALGOL 60", "國家標準", "LCCD", "倉頡"]
summary: "1960 年，兩位程式設計師花三四個月讀懂一個設計者已離開、資料殘缺的編譯程式；此後幾家單位的說法裡都有“第一”或“最早”，各自說的並不是同一件事。"
image_prompt: "Early-1960s Beijing computing institute: two young programmers at a desk covered with long printouts and hand-drawn flowcharts, pencils and a flowchart template, a large vacuum-tube computer cabinet in the background; black-and-white documentary photo style, no text"
video_prompt: "25-second sequence: a stack of incomplete, error-marked compiler documents; two people annotate listings day after day, a calendar flips through three months; a program finally runs on the 104; cut to an ALGOL-like BCY program on a coding sheet, a J-501 console, a 1979 national standard cover; then Stanford 1980, a brush-like Chinese glyph drawn by parameters; end on a 2024 conference stage announcing Cangjie"
schematics: "Diagram: what a compiler does (one line of high-level code → several machine instructions). Timeline: 1960 104 compiler rescued → 1963 P-grammar → 1964–65 BCY on the 119 (CAS profile) / from 1971 BCY on the 109 and 111 (CCF record) → 1965-06 J-501 ALGOL debugged → 1967 DJS-21 ALGOL 60 → 1977 NDHD → 1979 XCY; GB 1500 ALGOL 60 first issued 1979-02-13 → 1980 LCCD at Stanford → 1982 GB 3057 FORTRAN → 1984 GB 4144 Minimal BASIC → 2004 EPL review → 2019 Cangjie project → 2024-06-21 Cangjie released. Side table: the 'first' claims and the exact wording of each."
labs: ["mini-cpu"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F09-01, F09-02, F09-03, F09-04, F09-05, F09-06, F09-07, F09-08, F09-09, F09-10, F09-11, F03-02, F03-12 -->

編譯器把人寫的程式翻譯成機器能執行的指令。中國第一批編譯器的故事，是從一個設計者已經離開、資料殘缺的程式開始的。

## 104 機：把別人的編譯程式讀懂

1960 年，中國科學院計算技術研究所的董韞美參加了 104 機編譯程式的總體設計。據中國科學院官網 2026 年的人物報導，104 機是“我國當時最大的計算機”。編譯程式進入聯調時，“原來的設計人員大多已經離開，留下的資料不僅殘缺，還有不少錯誤”。董韞美和同事李開德決定不放棄，“每天看幾十條程序，反覆推測、驗證、再推測，整整看了三四個月”，一點一點弄清這個程式接受什麼輸入、做什麼加工、產生什麼輸出。報導說，“104機編譯程序成為國內第一個能夠運行的編譯程序”。

那個年代程式設計師用的工具，有一部分保存了下來。中國計算機學會 2019 年認定的歷史記憶裡，有張綺霞保存的流程圖板、程式紙和 104、109乙、111、119、655、013 機的指令集表。同一條目記載，《104電子計算機標準程序彙編》是“國內首個算法標準程序庫”，用浮動地址的機器語言寫成，共發行 2600 冊。

下面的小 CPU 實驗，可以讓你體會手寫機器指令是什麼感覺：先組譯、載入程式，再單步執行，每條助記符都對應一串操作碼。編譯器做的，就是把一行高階語言自動變成許多條這樣的指令。（這台小 CPU 是教學模型，和 104 機的指令集無關。）

{{< lab type="mini-cpu" >}}

## P語法與 BCY

1962 年，董韞美所在的程式組轉向研究 ALGOL 60。1963 年，他與李開德提出語法模型“P語法”，用數學方式精確描述程式語言的規則。BCY 的來歷有兩種記載。據中國科學院的人物報導，1964 至 1965 年，董韞美主持研製 BCY，在 119 機上成功執行，報導稱它是“國內最早的實用高級程序語言”。中國計算機學會“中國計算機歷史記憶”收錄的程式手稿條目則寫道，BCY 程式語言系統“是由中科院計算所三室姚偉民等自主研發”，“從1971年起配置於109，111等國產機上”。兩份記載給出的研製者和機器不同，這一頁把兩說並列，不作取捨。據中國科學院的報導，BCY 借鑑 ALGOL 的核心思想，刪繁就簡，更貼近中國電腦的硬體；報導還說它“開創性地支持漢字書寫”，但沒有說明漢字具體用在哪裡。同一篇報導寫到，BCY 後來用於 109丙機和 015 機：109丙機為“兩彈一星”研製工作了 15 年，015 機連續運轉 16 年。

## 誰是“第一”

幾乎同時，南京大學也在做 ALGOL。中國計算機學會的終身成就獎介紹說，1965 年徐家福領導南京大學與華東計算所的研製組，在國產 J-501 機上研製出“中國第一個ALGOL編譯系統”。《南京大學報》上一位組員的回憶更具體：1964 年 8 月開工，共 8 人，1965 年 6 月除錯完畢，是“國內第一個可用的Algol編譯系統”。北京大學這邊，據陳嘉庚科學獎基金會 1990 年的獲獎介紹，王選與北大另三位同志於 1967 年完成 DJS21 機 ALGOL 60 編譯系統，“是國內最早的幾個實用編譯系統之一”。1975 年起，王選轉向漢字激光照排系統的研製。

把幾種說法放在一起看，用的標準並不相同：“第一個能夠運行的編譯程序”“最早的實用高級程序語言”“第一個ALGOL編譯系統”“第一個可用的”“最早的幾個實用編譯系統之一”。這一頁不替它們排座次。

## 1970 年代：系統語言與國家標準

1977 年，徐家福在 655 機上設計實現了基於自編譯語言的軟體自動產生系統 NDHD；1979 年，他與仲萃豪、楊芙清合作研製通用系統程式設計語言 XCY（楊芙清的作業系統工作見[《作業系統》]({{< relref "23-zh-operating-systems.md" >}})）。據中國計算機學會的記載，張綺霞第一次用 FORTRAN 程式設計計算，是 1976 年在華東計算所的 655 機上。

語言也成了國家標準。據標準目錄，ALGOL 60 國家標準 GB 1500 首發於 1979 年 2 月 13 日，1987 年代替它的 GB/T 1500-1987 等同採用 ISO 1538-1984；FORTRAN 標準 GB 3057-1982 後來被 GB/T 3057-1996 全部代替；1984 年的最小 BASIC 標準 GB 4144-1984，是為了“在多種自動數據處理系統中促進BASIC程序的可互換性”。1979 至 1981 年，徐家福參加了 ALGOL、COBOL 國家標準的制定。

## 漢字字形與中文程式設計

1978 年 11 月，董韞美到史丹佛大學做訪問學者，合作導師是高德納。據中國科學院的報導，他用參數描述漢字筆畫，做成 LCCD 系統，1980 年在史丹佛人工智慧實驗室執行；1981 年《計算機程序設計藝術》第二卷新版問世，“索引中首次出現了漢字”。回國後，他研發出漢字字形設計系統 CCDS，並用它設計了 GB 2312-80 全部 6763 個漢字的宋體字形。

進入 21 世紀，也有人專門做中文程式設計。易語言官網稱，“易語言漢語編程環境”2004 年 11 月獲得科學技術部高技術研究發展中心組織的技術經濟評議。據南京大學的新聞稿，2024 年 6 月 21 日，華為在開發者大會上向全球開發者介紹了自研程式語言倉頡，並發布了開發者預覽版。新聞稿說，“此前主流的通用編程語言均源於國外”；倉頡專案 2019 年啟動，南京大學馮新宇教授擔任首席架構師。

英文版第 27 章講 FORTRAN、COBOL、Lisp 和 C，第 28 章講編譯器、JIT 和現代語言執行時；這一頁講的是同一批問題在中國由誰、在哪幾台機器上做出來。

**出處：**樊曉麗《董韞美：在空白荒原拓出中國軟件之路》（中國科學院官網）；中國計算機學會“中國計算機歷史記憶”與終身成就獎介紹；《南京大學報》《鐵骨錚錚一鴻儒》。

## 延伸閱讀

- 樊曉麗，《董韞美：在空白荒原拓出中國軟件之路》（English: Dong Yunmei: opening a road for Chinese software on blank ground），《中國科學報》，中國科學院官網，2026-08-27。[連結](https://www.cas.cn/zt/hyzt/ysdh22nd/fc/202608/t20260827_5119143.shtml)
- 中國計算機學會，《2013年CCF終身成就獎 董韞美》（English: CCF Lifetime Achievement Award 2013: Dong Yunmei），2013。[連結](https://www.ccf.org.cn/Awards/Awards_Recipients/2013/Lifetime_Contribution/2013-02-16/578017.shtml)
- 中國計算機學會，《2011年CCF終身成就獎 徐家福》（English: CCF Lifetime Achievement Award 2011: Xu Jiafu），2011。[連結](https://www.ccf.org.cn/Awards/Awards_Recipients/2011/Lifetime_Contribution/2011-02-16/578028.shtml)
- 《南京大學報》，《鐵骨錚錚一鴻儒》（English: A scholar of iron integrity, a team member's memoir of Xu Jiafu），2020-05-20。[連結](https://xiaobao.nju.edu.cn/da/a0/c18185a318112/page.htm)
- 中國計算機學會，《104、109乙、111、119、013、655等機器程序手稿》（English: Program manuscripts for the 104, 109B, 111, 119, 013, 655 and other machines, China Computing History Memory, 2019），2020-03-24。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2019/Second_class/2020-03-24/697781.shtml)
- 陳嘉庚科學獎基金會，《技術科學獎·1990·王選》（English: Tan Kah Kee Science Award in technological sciences, 1990: Wang Xuan），2009-04-02。[連結](https://tsaf.cas.cn/ljhjqk/cjgkxj/asj/1990/200904/t20090402_4954702.html)
- 工標網，《GB/T 1500-1987 程序設計語言 ALGOL 60》（English: Catalogue record for the ALGOL 60 national standard）。[連結](http://doc.csres.com/detail/63390.html)
- 國家標準信息公共服務平台，《GB/T 3057-1996 信息技術 程序設計語言 Fortran》（English: National standard record for Fortran）。[連結](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D79D40D3A7E05397BE0A0AB82A)
- 工標網，《GB 4144-1984 程序設計語言 最小BASIC》（English: Catalogue record for the Minimal BASIC national standard）。[連結](http://doc.csres.com/detail/65823.html)
- 易語言官網，《易語言獲得〈科技項目技術經濟評議書〉》（English: EPL receives a technical-economic review certificate, vendor news），2004-11-18。[連結](http://epl.eyuyan.com/news/2004/111801.html)
- 南京大學，《華為發布通用編程語言“倉頡”，南京大學計算機科學與技術系馮新宇教授作為首席架構師領導研發》（English: Huawei releases the general-purpose language Cangjie, with NJU's Feng Xinyu as chief architect），2024-06-21。[連結](https://www.nju.edu.cn/info/1067/369771.htm)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field (include the side table of 'first' claims with each source's exact wording)
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[x] Lab embedded via {{</* lab type="mini-cpu" */>}}, framed as hand-writing machine instructions (the 104 standard library was machine language) and what a compiler automates. The page says the toy CPU is unrelated to the 104's instruction set.
[ ] No figure: no open-licence image of the 104, 119, J-501 or DJS-21, or of the CCF-recognised manuscripts, was found on Commons. Asset lead: ask CCF / Zhang Qixia's family for photos of the flowchart templates, coding sheets and the 104 standard program collection.
[ ] Left out as unverified: BCY's name expansion; whether the 104 compiler came from a Soviet design; what BCY's "Chinese-character support" meant technically; Knuth's English wording (the CAS article gives only a Chinese rendering, so no quote is used); CCDS year (the article implies 1986 via 「第二年」 after March 1985; the page gives no year); the LL-grammar detail in the CCF Dong citation (not a dossier finding).
[x] BCY origin (desk decision 2026-09-26): both accounts are on the page, each attributed to its own source: CAS profile (F09-02): 董韞美, on the 119, 1964–65; CCF manuscripts record (same page as F09-06): 中科院計算所三室姚偉民等, on the 109/111 from 1971. The page does not choose between them.
[ ] Lab idea for Reed: a "hand compiler" toy: type one arithmetic line (X = A*B + C) and watch it expand into mini-cpu instructions, with a counter comparing hand-written vs generated instruction counts.
[ ] TODO after PR #23 merges: relref to 26-zh-input-and-typesetting.md at the Wang Xuan sentence (his move to laser typesetting) and at LCCD/CCDS (glyph description by parameters).
[ ] Native-reader proofread (zh-Hans) before final
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review, review/decisions/27-zh-languages-compilers.md); Taiwan-reader proofread still pending
-->
