---
title: "把漢字敲進機器：打字機、輸入法與雷射照排"
weight: 7
date: 2026-09-26
draft: false
phase: "4 — 軟體基礎：作業系統、程式語言與即時系統"
series_index: 7
tags: ["漢字輸入", "中文打字機", "倉頡", "五筆字型", "漢卡", "聯想", "雷射照排", "王選"]
summary: "英文鍵盤一鍵一個字母，漢字卻有幾千上萬個；從打字機字盤到輸入法、漢卡和王選的字形壓縮，每一步都在繞過同一個瓶頸。"
image_prompt: "Split composition: left, a 1920s Chinese typewriter with a large flat tray of metal character slugs and a selector arm; right, a 1980s beige PC with a Chinese-character expansion card and a laser-typeset newspaper page coming out of a phototypesetter; warm archival lighting, clean editorial illustration style"
video_prompt: "25-second animation: a typist's selector arm hunting across a tray of thousands of characters; the tray dissolves into a small keyboard where four keystrokes compose one character; the character outline is reduced to a few stroke parameters and curves, then rasterised by a laser onto a newspaper page"
schematics: "Diagram 1: the three bottlenecks (too many characters / too few keys / too little memory) and the answer each era gave (tray, input code, outline compression). Diagram 2: Wang Xuan's scheme: regular strokes stored as parameters, curved strokes as outlines, restored to a dot matrix for the laser."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F23-01, F23-02, F23-03, F23-04, F22-02, F22-03, F22-04, F22-05, F22-07, F22-08, F22-09, F22-10, F13-03, F12-02, F12-04, F12-05, F12-06, F12-07, F12-08, F22-12, F03-01, F03-02, F03-03, F03-05, F03-07, F03-14 -->

英文打字員面前只有幾十個鍵，一鍵一個字母。換成漢字，你面對的是幾千、幾萬個字。從 1910 年代到 1980 年代，中國工程師反覆撞上同一堵牆：**字太多，鍵太少，儲存太貴。**這一頁帶你看他們怎樣一次次繞過去。

## 字盤上的幾千個字

1912 年，在麻省理工學院讀書的周厚坤看到一種類似 Monotype 的排字機，萌生了做中文打字機的念頭。他的原型把 4000—6000 個字排在圓筒上；1916 年進入商務印書館後，他又做出只放 600 個常用字的“通俗打字盤”。

真正能用、能量產的是舒震東。據商務印書館官網轉載的其孫訪談，他 1919 年完成“中國第一台有實用價值的中文打字機”，1922 年獲農商部專利；1920 年萬籟鳴兄弟為它拍了廣告片，被稱為中國第一部動畫廣告。這條機械路線走得很長：清華大學科學博物館藏有一台 1984 年的雙鴿牌 DHY-d 中文打字機，那時個人電腦已經進入中國。

林語堂的明快打字機換了思路：用按鍵組合去“找”字。據東吳大學 2025 年的新聞稿，它可打常用字 7000、可擴至 9 萬字，從未量產，1960 年代下落不明，2025 年才在美國一處地下室重現。

**出處：**姚妙峰，結繩志，2022；商務印書館官網；清華大學科學博物館；東吳大學新聞稿，2025。

## 輸入法：把漢字拆成鍵盤能懂的碼

據朱邦復自述，他 1976 年底發表“形意檢字法”；在三軍大學為蔣緯國做中文電傳系統時，蔣緯國“認為『形意』兩字太俗，建議改名為『倉頡輸入法』”。為了讓 Apple II 漢卡便宜下來，他寫道：“我決定放棄我的中文輸入專利”，漢卡售價隨之從一萬多元新台幣跌到約 1500 元。不收專利費的編碼，就這樣成了事實標準。當時的對手多用大鍵盤：據他回憶，工研院“中華一號”有 228 鍵。

大陸的起點有確切日期：1978 年 8 月，上海《文匯報》發表支秉彝、錢鋒的“見字識碼”；同年 12 月，首屆全國漢字編碼學術討論會在青島召開，當時估計全國已有數百種方案，後來有人稱之為“萬碼奔騰”。王永民的方案從 62 鍵壓縮到 26 鍵，1983 年 8 月底通過鑑定：《光明日報》記為 28 日，1985 年的《中文信息處理技術大事記》記為 29 日，名稱還寫作“五筆字形”。王永民回憶，此前走過整字大鍵盤、主輔鍵盤和北大 256 鍵中鍵盤幾個階段。

## “聯想”：一個輸入功能變成了公司名

中國中文信息學會的大事記記載，1979 年計算所的“111 漢字信息處理實驗系統”“首先實現了聯想輸入功能”：你打出一個字，機器替你猜下一個。1985 年，倪光南主持研製“聯想式漢卡”，初始資金 6 萬元，第一型是三塊用扁平電纜相連的電路板加一套軟體。它十年賣出 16 萬套，1989 年 11 月計算所公司改名“聯想”。（“世界上第一塊漢卡”另有一說：中國計算機學會的另一份檔案把它給了長城 0520C-H 的 014 漢卡。）

長城 0520 也是一次繞路。據中國計算機學會檔案，1982 年 11 月一位香港商人帶來一台 IBM PC，次年主管部門定下 IBM PC 相容路線；32 歲的嚴援朝用兩個多月寫出 CCDOS，大事記稱之為我國第一套與 PC-DOS 相容的漢字磁碟作業系統；1985 年 5 月底，“由香港生產的第一台樣機”回京驗收，0520C-H 誕生。海峽對岸，宏碁 1980 年 9 月 28 日發表天龍中文電腦，據朱邦復回憶，它在 64KB 裡用“向量造字”配合倉頡碼生成字形。

## 王選：存不下，就壓縮

排版的瓶頸更大。748 工程 1974 年獲批，北大王選計算機研究所記為 8 月，中國中文信息學會記為 10 月。要為每個字、每種字型、每個字號存精密點陣，陳嘉庚科學獎的介紹說需要幾百億位元組。王選 1975—1976 年的答案是：橫、豎、折等規則筆畫用參數表示，曲線形筆畫用輪廓表示，總體壓縮率高達 500:1（研究所自己的說法是“幾百倍”）。1976 年他決定跳過第二代光機式和第三代陰極射線管照排機，直接做第四代雷射照排。1979 年 7 月 27 日樣機輸出第一張報紙樣張；1987 年 5 月 22 日，《經濟日報》四個版面全部用華光 III 型雷射照排輸出。

需要糾正一個說法：中國科學技術館展板稱這項發明“比西方早了10年”，但沒有給出可核對的比較。本書的表述是：這是一套獨立、早期的漢字輪廓字形方案。

在西方，英文打字機從來不必面對幾千個字的問題；英文世界關於中文打字機的標準參考是湯姆·穆拉尼（Thomas Mullaney）2017 年的專著 *The Chinese Typewriter*。

## 延伸閱讀

- 姚妙峰，《為了大眾教育：周厚坤眼中的中文打字機》（English: For mass education: the Chinese typewriter as Zhou Houkun saw it），結繩志，2022-10-06。[連結](https://tyingknots.net/2022/10/chinese-typewriter-2/)
- 商務印書館官網轉載 2010 年世博會網站對舒震東之孫舒沖慧的訪談（English: The Commercial Press reprints the 2010 Expo website's interview with Shu Zhendong's grandson Shu Chonghui），商務印書館，2014-08-01。[連結](https://www.cp.com.cn/Content/2014/08-01/1715352867.html)
- 清華大學科學博物館，《雙鴿牌DHY-d中文打字機（1984）》（English: Double Pigeon DHY-d Chinese typewriter, 1984），清華大學科學博物館。[連結](https://tsm.tsinghua.edu.cn/?p=5525)
- 東吳大學，“字鍵拾光”展覽新聞稿（English: press release for the exhibition “字鍵拾光” [roughly: gathering light from the keys], on Lin Yutang's MingKwai typewriter），中央社訊息平台，2025-03-18。[連結](https://www.cna.com.tw/postwrite/chi/396716)
- 朱邦復，《我與中文電腦的孽緣》（English: My fateful entanglement with the Chinese computer），為中推會撰。[連結](http://health999.net/jpf/word_01.htm)
- 朱邦復，《智慧之旅》第三章《電腦 倉頡、天龍、零壹、漢卡》（English: Journey of Wisdom, ch. 3: Computers: Cangjie, Tianlong, Zero-One [his company], the Chinese card）。[連結](http://open-lit.com/html/lit/506/18353.html)
- 龔濱良，《中文信息處理技術大事記》（English: Chronicle of Chinese information-processing technology），《中國科技史料》1985 年第 2 期。[連結](https://nmlr.muc.edu.cn/info/1106/2042.htm)
- 光明日報關於王永民與五筆字型的報導（English: Guangming Daily report on Wang Yongmin and Wubi, reprinted by People's Daily Online），人民網，2013-09-28。[連結](http://politics.people.com.cn/n/2013/0928/c70731-23065704.html)
- 凌加傑，人民網理論頻道文章（English: theory essay on People's Daily Online that uses the phrase “萬碼奔騰”），人民網，2018-08-16。[連結](http://theory.people.com.cn/n1/2018/0816/c40531-30232696.html)
- 中國中文信息學會，《中文信息處理大事記》（English: Chronology of Chinese information processing），中國中文信息學會（PDF）。[連結](http://bj.bcebos.com/cips-upload/cipsc30.pdf)
- 中國計算機學會，《長城0520C-H台式電腦》（English: The Great Wall 0520C-H desktop computer），中國計算機歷史記憶，2022-04-21。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2021/yllsjy/2022-04-21/760879.shtml)
- 中國計算機學會，《聯想式漢卡》（English: The Legend Chinese-character card），中國計算機歷史記憶，2023-03-01。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2022/yllsjy/2023-03-01/786740.shtml)
- 北京大學王選計算機研究所，《發展歷程》（English: Institute timeline），北京大學。[連結](https://wict.pku.edu.cn/gywm/fzlc/index.htm)
- 陳嘉庚科學獎基金會，《技術科學獎·1990·王選》（English: Tan Kah Kee Science Award in technological sciences, 1990: Wang Xuan），中國科學院。[連結](https://tsaf.cas.cn/ljhjqk/cjgkxj/asj/1990/200904/t20090402_4954702.html)
- 中國科學技術館，《漢字激光照排》展品說明（English: Exhibit text: Chinese laser phototypesetting），中國數字科技館，2021。[連結](https://www.cdstm.cn/museum/zphc/kcbnjd100znkjcjkpz/art/2021/art_4523f8dfceb24aabb9a29605ba2f17b6.html)
- 黃橙，《1987年：第一張國產激光照排系統整版輸出的中文日報》（English: 1987: the first Chinese daily output in full pages by a domestic laser typesetting system），中國工程院網站，2009-06-15 轉載。[連結](https://www.cae.cn/cae/html/main/col278/2012-02/27/20120227140259086980845_1.html)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s): none set (no existing lab fits input methods or glyph compression)
[ ] Photos: none used. No openly licensed image is verified in the dossier for threads 03/12/22/23. Candidates to check on Commons before use (licence + upload.wikimedia.org URL): Shu Zhendong typewriter, Double Pigeon typewriter, Great Wall 0520, Legend card, Huaguang typesetter.
[ ] Native-reader proofread (names, Taiwan terms in the Chu Bong-Foo passage)
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review); Taiwan-reader proofread still pending
-->
