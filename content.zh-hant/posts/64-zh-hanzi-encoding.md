---
title: "漢字上線：從四位電碼到 GB 18030"
weight: 6
date: 2026-09-26
draft: false
phase: "治理 / 網際網路公民"
series_index: 6
tags: ["中文電碼", "漢字編碼", "CCCII", "GB 2312", "Big5", "CNS 11643", "GB 18030", "HKSCS", "標準"]
summary: "電線只認得點和劃：從 1870 年代的四位電報碼到今天強制執行的 GB 18030，每一種把漢字送上線的辦法，背後都有人在決定規則。"
image_prompt: "Split composition: on the left a late-Qing telegraph clerk at a desk with a thick code book open to a 10x10 grid of characters with four-digit numbers; on the right a 1980s CRT screen showing Chinese characters and a hexadecimal code table; linking them a single telegraph wire; historically accurate, muted palette, no readable text"
video_prompt: "20-second animation: the character 米 becomes 4149, a key 5555 is added digit by digit without carry to give 9694, the digits travel down a telegraph wire, then morph into byte sequences labelled GB 2312, Big5 and GB 18030 as three branches of the same road; clean motion graphics"
schematics: "Diagram 1: telegraph code book page layout (10x10 = 100 characters per page, four-digit codes 0001=一, 0002=丁, 0003=七) and the additive key cipher without carry (4149 + 5555 -> 9694). Diagram 2: who decides: tariff rule (1879 London conference) -> code books; mainland national standards (GB 2312, GB 18030) under SAC/TC28 mirroring ISO/IEC JTC 1; Taiwan industry project (Big5) vs national standard (CNS 11643); Hong Kong government supplement (HKSCS)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F20-01, F20-02, F20-03, F20-04, F20-05, F20-07, F20-08, F20-09, F21-01, F21-02, F21-04, F21-06, F21-08, F21-09, F21-10, F21-11, F21-12, F21-13, F21-14, F05-01, F05-02, F05-03, F05-09 -->

電線只認得點和劃，漢字卻有幾千個。怎麼把它們送上線？每一個答案，都同時回答了另一個問題：誰說了算。

## 四個數字一個字

最早的答案是一本碼本。大北電報公司總裁 C.F. Tietgen 發起，丹麥人謝勒俄普（Hans Schjellerup）、法國人威基謁（S.A. Viguier）與中國官商一起編成《電報新書》。他們試過三位到六位的碼，最後定為四位：0001 是“一”，0002 是“丁”，0003 是“七”。威基謁從《康熙字典》選了 6391 字，按 214 個部首排列。刊行年份說法不一：張文洋 2018 年在《近代史研究》上的文章寫 1872 年；中文維基百科等資料寫 1873 年，並說挑選了“常用漢字6800多個”。年份和字數都有待核對原書。

碼本自帶密碼，叫“鎖匙加減變法”：雙方約定一個金鑰，逐位相加、捨去進位。比如“米”是 4149，加上 5555，發出去的是 9694。

決定編碼的不只是技術，還有帳單。1879 年倫敦國際電報會議規定“以三碼算一字”，於是李鳳苞在 1881 年編了三字母碼，26³ = 17576 個碼位，好把更多內容塞進一個計費單位。同年，鄭觀應、經元善致函盛宣懷，主張編一本公用碼本：“每號一字，揀字典內通用字面湊成萬號”。

保密的代價也很真實。總理衙門陸續編發密碼本，如 1890 年的“釐定”、1895 年的“紅字”；甲午戰爭期間，日本破譯了 1888、1890、1895 年的密碼本。自 1897 年起，密本大約每兩年一換。

這套電碼活得比清朝久得多。1969 年 9 月 26 日，《人民日報》報導郵電部郵電研究院研製成功我國第一台電子式中文電報自動譯報快速收報機，《中文信息處理技術大事記》把它視為電腦處理漢字的開端。直到今天，香港入境事務處的表格上還有一欄：“中文姓名電碼（如有者）”。

## 1979：一場圖書館裡的搶跑

據台灣學者謝清俊回憶，1979 年時唯一的漢字編碼標準仍是晚清的電報碼本，而且“編得很糟糕”。那年 11 月，美國的研究圖書館組織（RLG）在史丹佛開會，打算用日本的 JIS 來處理中文。他報告李國鼎，籌得新台幣 300 萬元；“國字整理小組”12 月 25 日成立，三個月編出 4808 字，1980 年 3 月赴美報告，被採用而非日本方案。這就是 CCCII。因為收了簡體字，他還被指“與匪認同”。CCCII 把這層關係直接寫進了編碼結構：簡體字在第一位元組上比對應的正體字大 6。

## 大陸：國家標準說了算

GB 2312-1980《信息交換用漢字編碼字符集 基本集》收漢字 6763 個。官方記錄為 1980 年 3 月 9 日發布、1981 年 5 月 1 日實施；另據《中文信息處理技術大事記》，它 1980 年 12 月批准、1981 年 3 月見報公布。中國中文信息學會稱它是“第一個漢字信息技術標準”。2017 年，它轉為推薦性標準。

GB 18030 則是強制性的。2000 年版收 27484 字，採用單、雙、四位元組編碼，2001 年 9 月 1 日起對 PC 作業系統強制檢測，嵌入式裝置、PDA 和手機除外；當時的說法是“凡不符合該標準的產品，視為不合格產品”。至於由誰起草，據起草單位副所長林寧介紹，起草組由電子四所、北大計算機所、方正、中科院軟件所、金山、聯想等國內單位組成，並徵求了微軟、HP、Sun、IBM 的意見。2022 年版收字 87887 個，覆蓋《通用規範漢字表》全部漢字，國家標準委、工信部、國家語委聯合召開了發布會。

## 台灣：五個軟體，不是五家公司

1983 年，日本 IBM 推出能處理漢字的日文個人電腦 IBM 5550，引發台灣自行開發中文 PC 的熱潮。資策會在經濟部資助下推動“五大軟體專案”：據 1984 年 3 月 30 日的華視新聞，7 家硬體廠商和 6 家軟體公司簽約，開發中英文文書處理、檔案管理、電子表格、圖形與通訊軟體。1984 年公布的、供這些軟體共用的內碼，就是 Big5（大五碼）。專案本身失敗了，中研院的資料甚至說“幾乎無人知道所謂的『五大』究竟指的是哪五種軟體”。英文維基百科等資料說 Big5 得名於“五家公司”，這是錯的。

Big5 收 13053 字（去掉兩個重複字後為 13051），字集取自 1983 年的“通用漢字標準交換碼”草案，所以它和官方的 CNS 11643 同出一源。CNS 11643 於 1986 年成為國家標準，1992 年擴充為 7 個字面、48027 字，用於戶政系統。謝清俊的評價卻很乾脆：“今日用的是big5”。

## 香港：為名字補字

香港在 Big5 之上補字。1995 年政府編成《政府通用字庫》，1999 年發布香港增補字符集（HKSCS），此後多次增訂；HKSCS-2016 共 5033 字，其中中文字 4591 個，主要是人名地名、粵語用字和科學用字。

## 誰來決定

一路看下來：電報時代，決定漢字怎麼上線的是計費規則和碼本編者；在大陸，是國家標準，今天由國務院授權的國家標準化管理委員會統一管理，全國信息技術標準化技術委員會（TC28）對口 ISO/IEC JTC 1，它最早的分委會之一就是 1983 年的 SC2“字符集與編碼”；在台灣，市場選中了產業匆忙造出的 Big5；在香港，政府為居民的名字補字。

在西方，ISO/IEC 10646（與 Unicode 同一字元集）試圖把各地字集收進同一張表。大陸在 1993 年以 GB 13000.1 等同採用 ISO/IEC 10646-1，收 CJK 漢字 20902 個。

**出處：**張文洋《晚清電報的語法：漢字電碼本的設計與應用》（《近代史研究》2018）；全字庫 cns11643.gov.tw；全國標準信息公共服務平台 std.samr.gov.cn。

## 延伸閱讀

- 張文洋，《晚清電報的語法：漢字電碼本的設計與應用》（English: The grammar of late-Qing telegraphy: design and use of Chinese code books），原載《近代史研究》2018，搜狐轉載，2018-10-22。[連結](https://www.sohu.com/a/270424338_494916)
- 維基百科，《中文電碼》（English: Chinese Wikipedia article “Chinese telegraph code”, giving 1873 and 6800+ characters, citing 《通信信息報》2004）。[連結](https://zh.wikipedia.org/wiki/中文电码)
- 香港入境事務處，ROP133 表格（English: Hong Kong Immigration Department form ROP133），2025-10 版。[連結](https://www.immd.gov.hk/pdforms/rop133.pdf)
- 龔濱良，《中文信息處理技術大事記》（English: Chronicle of Chinese information-processing technology），原載《中國科技史料》1985 年第 2 期。[連結](https://nmlr.muc.edu.cn/info/1106/2042.htm)
- 中研院資訊所，《謝清俊訪談》（English: Interview with 謝清俊, for the Institute of Information Science's 20th anniversary），2001-07-26。[連結](https://www.iis.sinica.edu.tw/file/20thAnniversary/i05.html)
- 全字庫，編碼對照與各編碼介紹頁面（English: CNS11643 site pages comparing CCCII, CNS 11643, Big5 and other encodings），cns11643.gov.tw。[連結](https://www.cns11643.gov.tw/pageView.jsp?ID=9)
- 國家標準全文公開系統，GB 2312-1980 記錄（English: GB 2312-1980 official record），openstd.samr.gov.cn。[連結](https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=5664A728BD9D523DE3B99BC37AC7A2CC)
- 全國標準信息公共服務平台，GB 18030-2000 記錄（English: GB 18030-2000 official record），std.samr.gov.cn。[連結](https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D79585D3A7E05397BE0A0AB82A)
- 林寧，《關於GB18030漢字編碼標準集》（English: On the GB 18030 Chinese character set standard），中國計算機報，新浪科技轉載，2001-07-26。[連結](http://tech.sina.com.cn/s/2001-07-26/1850.html)
- 教育部，GB 18030-2022 發布會新聞（English: Ministry of Education news on the GB 18030-2022 launch），2022-07-29。[連結](http://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/moe_1485/202207/t20220729_649675.html)
- 中央研究院，《認識中文字元碼》第 9 節（English: Understanding Chinese character codes, section 9: Big5），idv.sinica.edu.tw。[連結](https://idv.sinica.edu.tw/bear/charcodes/Section09.htm)
- 華視新聞，1984-03-30 關於五大軟體專案簽約的報導（English: CTS television news report on the signing of the Big Five software project）。[連結](https://news.cts.com.tw/cts/politics/198403/198403301730592.html)
- 香港特區政府共通語言資訊基建，香港增補字符集介紹頁面（English: Hong Kong government Common Chinese Language Interface: what HKSCS is），ccli.gov.hk。[連結](https://www.ccli.gov.hk/tc/hkscs/what_is_hkscs.html)
- 全國標準信息公共服務平台，《TC28 全國信息技術標準化技術委員會》（English: TC28, National IT Standardization Technical Committee），std.samr.gov.cn。[連結](https://std.samr.gov.cn/search/orgDetailView?tcCode=TC28)
- 國務院辦公廳，國辦發〔2001〕56 號通知（English: State Council General Office notice on the functions of AQSIQ, CNCA and SAC），國務院公報 2001 年第 27 號。[連結](https://www.gov.cn/gongbao/content/2001/content_61007.htm)
- 中國中文信息學會，《中文信息處理大事記》（English: Chronicle of Chinese information processing），CIPS。[連結](http://bj.bcebos.com/cips-upload/cipsc30.pdf)

