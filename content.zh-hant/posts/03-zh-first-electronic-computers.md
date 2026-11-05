---
title: "真空管與電晶體：中國第一批電腦，和算盤的真實角色"
weight: 5
date: 2026-09-26
draft: false
phase: "1 — 基礎：從機械計算到真空管計算"
series_index: 5
tags: ["103機", "104機", "109丙", "兩彈一星", "手搖計算機", "DJS-130", "逆向工程", "夏培肅"]
summary: "從 1956 年的“緊急措施”到 DJS-100 系列：中國早期電腦為誰而造、在哪裡日夜運轉，以及為什麼“算盤造原子彈”是誤傳。"
image_prompt: "Late-1950s Beijing computer room: tall grey vacuum-tube cabinets with rows of glowing tubes, a paper-tape reader, two young engineers at a control console at night, a hand-cranked mechanical calculator on a side desk, period-accurate, black-and-white documentary photo style, no text"
video_prompt: "20-second sequence: a hand-cranked calculator's handle turns, dissolve to tube cabinets glowing through a night shift clock from 18:00 to 06:00, then a transistor board, then a tracking-station printout as a satellite's first orbit is computed; restrained documentary tone"
schematics: "Timeline diagram 1952-1979: 1952 group; 1956 twelve-year plan and four emergency measures; 103 (1958) and 104 (1959) tube machines; 107 (1960); 441-B and 109B (1965, transistor); 109C (1967); 320; 111 (1971, IC); DJS-130 (1974, NOVA-compatible). Side panel: who used them (bomb, missile, satellite tracking)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F02-01, F02-02, F02-03, F02-04, F02-05, F02-06, F02-07, F02-10, F02-11, F02-12, F02-13, F02-14, F02-15, F02-16, F11-01, F11-02, F11-05, F11-07, F11-09, F11-10, F14-01, F14-02, F14-03, F14-04, F14-05, F34-01, F34-02, F34-03 -->

1956 年，中國決定造電腦時，手裡幾乎什麼都沒有。很快你會發現，真正稀缺的不是圖紙，而是機時。

## 1956：寫進規劃的“緊急措施”

準備其實更早。1952 年，華羅庚在中國科學院數學所組建計算機小組，成員是閔乃大、夏培肅、王傳英，之後做成了示波管記憶體和基本邏輯電路試驗。1956 年的十二年科技規劃列出 57 項重大任務，第 41 項是“計算技術的建立”；同年 5 月 20 日，無線電電子學、自動化、電子計算機、半導體被列為“四項緊急措施”，“作為國家機密組織實施”。（規劃名稱，中國科學院的文章寫作“1956—1967 年”，《中國科學院院刊》2025 年的論文寫作“1956—1965 年”。）中國科學院的文章在回顧張勁夫的經歷後總結說，這四項措施“本質上皆是為原子彈攻關服務的關鍵布局”。

1957 年元旦，中國科學院、總參謀部和二機部簽訂協議，定下“先集中，後分散”：先把專家集中到計算所造出快速通用電腦，再各回原單位分頭發展。1959 年 5 月 17 日，計算所正式成立。1956—1962 年的四屆訓練班，培養了七百多名計算技術人員。

## 103 與 104：先照著造

103 機按蘇聯 M-3 圖紙仿製，由北京有線電廠（738 廠）試製、計算所調校，1958 年 8 月 1 日執行短程式，被叫作“八一型”；張勁夫給它起了個小名：“有了”。它約用 800 個真空管，最初用磁鼓儲存，每秒 30 次。104 機仿蘇聯 БЭСМ-Ⅱ，1959 年完成，平均每秒 1 萬次，738 廠定名 DJS-2，生產了 7 台。第一顆原子彈研製中的計算任務就在這台機器上完成。自己設計的機器也跟了上來：夏培肅主持的 107 機 1960 年完成，是我國第一台自主設計的通用電子數位電腦，可惜 1970 年中國科大南遷後被處理掉了。

## 算盤沒有造出原子彈

“中國用算盤算出了原子彈”，這個說法流傳很廣，英文世界也常這麼講。中國科學院自然科學史研究所的徐祖哲、司宏偉 2025 年在《中國科學院院刊》上明確指出，這類說法“誤導了公眾”：原子彈的大量課題用的是手搖計算機和計算所的 104 真空管電腦，日夜運算，“一些邊緣題只得使用算盤作為輔助工具”。

手搖計算機也有名有姓。中國國家博物館藏有鄧稼先團隊用過的一台“上海通用”201 型，編號 34695；清華大學科學博物館藏有一台飛魚牌 JSY-20，1964 年由上海計算機打字機廠生產，由青海大學捐贈；據德國 Rechnerlexikon，它是階梯軸（萊布尼茨輪）式機械計算器。著名的“九次計算”，各方說法並不一致：清華的展籤說四台飛魚牌手搖機日夜連軸轉，算了九天；旗幟網說九遍用了九個多月（國家博物館的英文說明只說算了九次，未給時長）；九三學社的材料說用的是“幾台電動計算機和手搖計算機”，歷時將近一年。

真正的瓶頸是機時。1960 年，738 廠給九所提供了一台 104 機，于敏所在的小組每週只能爭取到 6 小時；“596”（第一顆原子彈）的計算多排在晚 6 點到早 6 點的夜班。1963 年，用機器語言編寫的“596L”程式在 104 機上一次通過。論文作者還指出，“因為核武器研製計算機屬於機密”，電腦界多年閉口不談，這些貢獻才少為人知。

## 電晶體：為導彈和衛星計算

1965 年出現了兩個“第一”。哈爾濱軍事工程學院慈雲桂主持的 441-B 於 4 月 26 日通過鑑定，中國計算機學會稱它為中國第一台電晶體通用數位電腦，它的 4 個型號生產了上百台，用於酒泉、馬蘭基地和核潛艇研製；計算所蔣士騛主持的 109乙 6 月 5 日通過鑑定，計算所稱其為第一台大型通用電晶體電腦。1967 年完成的 109丙交付二機部九院，工作了 15 年，有效算題 10 萬小時以上，被譽為“功勳計算機”。氫彈的計算在哪台機器上完成，也有兩種說法：計算所說是 119 機，徐祖哲、司宏偉的論文說于敏 1966 年初在上海的 J-501 機上突破了氫彈理論。

衛星同樣靠它們。1970 年 4 月 24 日東方紅一號發射，湘西測控站的 717 機在起飛 10 分鐘後開始處理雷達資料，“衛星起飛後14分16秒實際初軌被準確算出”。在此之前，計算所程式設計師張綺霞在 119 機上用了 100 多個機時、算了 3000 多條模擬軌道，驗證了數學所劉易成提出的多普勒測軌方案。據徐祖哲、司宏偉的論文，我國第 2 至第 22 顆衛星的發射計算都由該所設計的 320 機（DJS-8）完成。1971 年的 111 機，是我國第一批積體電路電腦之一。

## DJS-100 系列

1973 年起聯合設計的 DJS-100 系列，指令集與美國的 NOVA 小型機一致，系統軟體由反組譯 NOVA 的機器碼後分析、移植而來；這段故事詳見[《規模：從銀河到太湖之光》]({{< relref "17-zh-supercomputers-cpus.md" >}})。

回頭看，從[算盤]({{< relref "01-zh-counting-rods-abacus.md" >}})到[交換機]({{< relref "02-zh-relays-switching.md" >}})再到這些機櫃，中國的計算走過的是同一條路：先有人按規則執行，再讓機器替人執行，而機器之間要說同一種“話”，就需要標準。

**出處：**徐祖哲、司宏偉《中國計算機：從核物理到衛星測控》，《中國科學院院刊》2025, 40(Z2)；中國科學院計算技術研究所《歷史沿革》。

## 延伸閱讀

- 徐祖哲、司宏偉，《中國計算機：從核物理到衛星測控》（English: Chinese computers: from nuclear physics to satellite tracking），《中國科學院院刊》，2025, 40(Z2): 109–118，DOI 10.3724/j.issn.1000-3045.20240705005。[連結](http://old2022.bulletin.cas.cn/publish_article/2025/Z2/zgkxyyk-40-Z2-109.htm)
- 中國科學院計算技術研究所，《歷史沿革》（English: Institute history），ict.ac.cn。[連結](https://www.ict.ac.cn/jssgk/lsyg/)
- 甘曉，《中國從此“有了”計算機》（English: From then on, China "had" a computer），《中國科學報》，中國科學院官網轉載，2024-04-01。[連結](https://www.cas.cn/cm/202404/t20240401_5010362.shtml)
- 《中國科學報》，《1956年“十二年科技規劃”如何誕生》（English: How the 1956 Twelve-Year Science Plan was born），中國科學院官網，2025-05-09。[連結](https://www.cas.cn/cm/202505/t20250509_5067720.shtml)
- 中國科學技術大學檔案文博院，《中國第一台通用數字電子計算機》（English: China's first general-purpose digital electronic computer），2023-09-03。[連結](https://arch.ustc.edu.cn/2023/0903/c30534a611014/page.htm)
- 中國計算機學會，《國產441B晶體管計算機文檔（講義）》（English: Documents (lecture notes) of the Chinese-made 441B transistor computer），中國計算機歷史記憶。[連結](https://www.ccf.org.cn/Computing_history/Full_List/2018/Second_class/2019-02-18/660377.shtml)
- National Museum of China，“Hand-cranked calculator used by Deng Jiaxian and his team”（中文：鄧稼先團隊使用的手搖計算機），2020-08-06。[連結](https://en.chnmuseum.cn/collections_577/collection_highlights_608/objects_of_chinese_modern_history_611/202008/t20200806_246811.html)
- 清華大學科學博物館，《飛魚牌JSY-20型計算機》（English: The Flying Fish JSY-20 calculator），2020-02-17。[連結（存檔）](https://web.archive.org/web/20251211085405/https://tsm.tsinghua.edu.cn/?p=1620)
- Rechnerlexikon，“Shanghai Calculator JSY-20”（中文：德國機械計算器百科 JSY-20 詞條）。[連結](https://rechnerlexikon.de/en/artikel/Shanghai_Calculator_JSY-20)
- 九三學社中央，《人物素描》（鄧稼先）（English: Portrait sketch: Deng Jiaxian）。[連結（存檔）](https://web.archive.org/web/20260213001102/https://www.93.gov.cn/html/93gov/zt/70/rwsm/150821142728561820.html)
- 旗幟網，《黨建史話｜幹驚天動地事 做隱姓埋名人》（English: Party-history notes: do earth-shaking work, live as an unknown），2023-02-17。[連結](http://www.qizhiwang.org.cn/n1/2023/0217/c447058-32626010.html)
- 呂文超，《100系列計算機聯合設計成功的啟示》（English: Lessons from the successful joint design of the 100-series computers），清華大學計算機系，2018-07-24。[連結](https://www.cs.tsinghua.edu.cn/info/1169/4071.htm)
- 林行良，《DJS100系列機系統軟件聯合設計》（English: Joint design of system software for the DJS-100 series），清華大學計算機系，2018-07-24。[連結](https://www.cs.tsinghua.edu.cn/info/1169/4069.htm)

