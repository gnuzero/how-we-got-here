---
title: "作業系統：從大慶的“虛擬機”到開源歐拉"
weight: 15
date: 2026-09-26
draft: false
phase: "4 — 軟體基礎：作業系統、程式語言與即時系統"
series_index: 15
tags: ["作業系統", "楊芙清", "150機", "虛擬機器", "紅旗Linux", "銀河麒麟", "openEuler", "CLE"]
summary: "1970 年代初，北大的作業系統組在大慶油田的另一台電腦上模擬出 150 機，用 23 天調通了作業系統；半個世紀後，中國的作業系統走進了開源基金會。"
image_prompt: "Early-1970s computer room at Daqing oilfield in winter: a dozen young engineers in padded coats working night shifts at a large transistor computer console, paper tape and printouts everywhere, a thermos and enamel mugs, frost on the window; black-and-white documentary photo style, no text"
video_prompt: "25-second sequence: a hardware cabinet labelled 150 sits unfinished in Beijing; cut to Daqing where another computer runs a program that pretends to be the 150; a calendar counts 23 days; in 1973 a loudspeaker on the finished 150 plays a tune from instruction timings; montage: a 1981 OS manual, a microkernel diagram, a Red Flag Linux boot screen in 1999, a FreeBSD-derived layer in 2006, a foundation logo in 2021"
schematics: "Timeline: 1969-12 150 task → Daqing simulation, OS debugged in 23 days → 1973 150 plays The East Is Red → 1981 240 OS in a high-level language → 1990s COSIX V2.0 microkernel → 1998 CLE (Taiwan) → 1999-08-10 Red Flag Linux → 2003 OSSF (Taiwan) → 2006-12-04 Kylin accepted (own kernel layer + FreeBSD-derived service layer) → 2019 openEuler open-sourced, HarmonyOS microkernel → 2021 openEuler donated to OpenAtom. Side diagram: a program on machine A emulating machine B's instruction set."
labs: ["vm-terminal"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F10-01, F10-02, F10-03, F10-04, F10-05, F10-06, F10-07, F10-08, F10-09, F10-10, F10-11, F10-12 -->

假設你要給一台還沒造好的電腦寫作業系統。硬體沒調通，你手裡的程式沒地方跑。怎麼辦？1970 年代初，北京大學的一群年輕人給出的辦法，今天我們叫它虛擬機器。

## 150 機：先在別的機器上模擬出它來

1969 年 12 月，國務院向北京大學下達研製每秒百萬次積體電路大型電腦 150 機的任務。楊芙清任組長，負責 150 機的多道執行作業系統。楊芙清在回憶中寫道，組員是青年教師、留校學生和工廠、用戶單位的人員，“他們都沒有見過計算機，也不知什麼是操作系統”。

一年多後，整套作業系統軟體設計出來了，150 機的硬體卻還沒調校完成。據楊芙清回憶，作業系統組和編譯系統組一起去了大慶油田，在那裡的 108乙機上編寫了一套模擬 150 機指令集的程式，模擬 150 機的硬體，然後在模擬得到的“虛擬機”上除錯 150 機的作業系統和編譯系統。十幾個人晝夜倒班，23 天就把多道執行作業系統除錯成功，並完成了與編譯系統的聯調。回到北京，他們再用軟體幫助硬體調校。

機器造好後怎麼宣布？每條指令的微程式不同，執行起來就是不同的頻率。他們接上喇叭，挑出合適的指令組成音階，寫出《東方紅》的曲譜程式。據楊芙清回憶，1973 年的一個晚上通宵除錯，第二天早晨樂曲放了出來，“這首《東方紅》宣告我國第一台百萬次集成電路計算機研製成功”。

下面這個實驗室做的是同一件事：你的瀏覽器用軟體模擬一台 x86 電腦，上面跑著真正的 Linux。你在螢幕裡敲下的每條命令，都由軟體模擬出來的硬體執行。

{{< lab type="vm-terminal" height="720" >}}

之後，楊芙清參加 200 系列機的軟體總體設計，負責 240 機作業系統。1981 年，這個採用層次管程結構、PCM 方法設計的作業系統完成，有批次處理和即時兩個版本。楊芙清稱之為“我國第一個用高級語言書寫的大型操作系統”；用的是哪種語言，回憶裡沒有寫明。同一時期的系統程式設計語言，見[《程式語言與編譯器》]({{< relref "27-zh-languages-compilers.md" >}})。

## 從微核心到紅旗 Linux

1997 年《軟件學報》的一篇論文討論了國產作業系統 COSIX V2.0 的安全設計。據論文摘要頁，COSIX V2.0 採用基於微核心的多伺服器結構，課題來自“八五”國家計畫。

據《南方都市報》2005 年的報導，1999 年 8 月 10 日，孫玉芳（2005 年去世時任中國科學院軟件研究所副所長）帶領的團隊釋出紅旗 Linux；2000 年，孫玉芳創立北京中科紅旗軟件技術有限公司。該報導還說，從 1999 年起，孫玉芳與香港文化傳信集團的朱邦復合作籌建北京紅旗中文貳仟軟件技術有限公司（簡稱中文2000），2001 年推出 RedOffice 辦公套件，與紅旗 Linux 一起中標北京市政府採購，報導稱這是“我國第一次政府軟件正版化採購”。

## 銀河麒麟：自己的核心層，FreeBSD 的服務層

據中國教育和科研計算機網的報導，2001 年，國家把研製擁有自主智慧財產權的作業系統列為 863 重大專項，由國防科技大學計算機學院承擔。據《光明日報》2006 年的報導，“銀河麒麟”伺服器作業系統於當年 12 月 4 日通過 863 計畫信息領域辦公室組織的專家驗收，它“由自主研發的基本內核層和基於FreeBSD(一種Unix操作系統)改造的系統服務層組成”。也就是說，它的系統服務層來自英文版第 22 章講到的 BSD 一支。該報導還稱，它是“我國第一個高安全等級(B2級)的64位操作系統”。

## 2019：開源，並把程式碼交出去

2019 年 12 月 31 日，華為宣布 openEuler 開源社群正式開放原始碼、映像及開發測試環境；2021 年 11 月，華為宣布把歐拉的全量程式碼、品牌商標、社群基礎設施等資產捐贈給開放原子開源基金會。同在 2019 年，華為香港發布的開發者大會新聞稿引述華為消費者業務 CEO 余承東的話說，鴻蒙 OS 是“一款建基於微內核、以全場景應用為中心的分佈式操作系統”。微核心的思路，在 1990 年代的 COSIX 和 2019 年的鴻蒙上都出現過。

## 台灣：從 CLE 到自由軟體鑄造場

台灣的起點是一個開放原始碼社群專案。據 CLE 協調人黃志偉 2004 年接受 ZDNet 台灣的訪談，CLE（中文 Linux 延伸套件）由鄭原忠（小虫）大約在 1998 年中發起；1999 年 1 月的 v0.7 是第一個眾人通力合作的版本；2000 年 3 月的 v0.9 第一次以完整的 I18N 架構為主軸進行中文化。黃志偉說：“我想最重要的是促進了國際化(I18N)與本土化(L10N)設計的風潮”。2003 年，中央研究院資訊科學研究所接受經濟部工業局“自由軟體產業推動計畫”的補助，成立自由軟體鑄造場（OpenFoundry）。

英文版第 22、23 章講分時、Unix、GNU 和 Linux 的來歷；這一頁講的是這些思想到了中文世界以後，由誰、為了什麼接手。

**出處：**楊芙清《七十年，我始終和祖國在一起》；《“銀河麒麟”服務器操作系統通過驗收》（《光明日報》，中國政府網轉載）；ZDNet 台灣《黃志偉專訪問答實錄》。

## 延伸閱讀

- 楊芙清，《我和我的祖國｜七十年，我始終和祖國在一起》（English: Seventy years with my country, Yang Fuqing's memoir），北京大學計算機學院網站。[連結](https://cs.pku.edu.cn/info/1263/2373.htm)
- 李軍、孫玉方，《基於微核心的國產操作系統安全性研究》（English: Security of a microkernel-based domestic operating system），《軟件學報》1997, 8(2): 99–106。[連結](https://jos.org.cn/jos/article/abstract/19970204)
- 《南方都市報》，《紅旗Linux痛失旗手 董事長孫玉芳辭世》（English: Red Flag Linux loses its standard-bearer: chair Sun Yufang dies），新浪科技轉載，2005-01-14。[連結](http://tech.sina.com.cn/it/2005-01-14/1204504579.shtml)
- 中國教育和科研計算機網，《國防科技大學研製成功“銀河麒麟”操作系統》（English: NUDT develops the Kylin operating system），2006-03-23。[連結](https://www.edu.cn/gao_xiao_zi_xun_1091/20060323/t20060323_161429.shtml)
- 《光明日報》，《我國研製成功具有自主知識產權的服務器操作系統》（English: China develops a server OS with its own intellectual property, on Kylin's acceptance），中國政府網轉載，2006-12-05（Wayback Machine 存檔）。[連結](https://web.archive.org/web/20190204014734/http:/www.gov.cn/fwxx/kp/2006-12/05/content_461334.htm)
- 華為，《openEuler操作系統源代碼正式開放》（English: openEuler source code formally opened），2019-12-31。[連結](https://www.huawei.com/cn/news/2019/12/huawei-openeuler)
- 華為，《華為捐贈歐拉 共建數字基礎設施開源操作系統》（English: Huawei donates openEuler to build an open-source OS for digital infrastructure），2021-11。[連結](https://www.huawei.com/cn/news/2021/11/huawei-openeuler-openatom-foundation)
- 華為消費者業務（香港），《華為發布全新分佈式鴻蒙 OS 打造全場景智能生活新體驗》（English: Huawei launches the distributed HarmonyOS, HDC 2019 Hong Kong release），2019。[連結](https://consumer.huawei.com/hk/press/news/2019/hdc2019/)
- ZDNet Taiwan，《尋找台灣自由軟體力量：黃志偉專訪問答實錄》（English: Looking for Taiwan's free-software strength: interview with CLE coordinator Huang Chih-wei），2004-03-04（Wayback Machine 存檔）。[連結](https://web.archive.org/web/20080604032823/http:/www.zdnet.com.tw/enterprise/feature/0,2000085762,20087861-7,00.htm)
- 自由軟體鑄造場，〈關於 OpenFoundry & OSSF〉（English: About OpenFoundry and the OSSF），2025 年存檔。[連結](https://web-archive-2025.openfoundry.org/tw/about-openfoundry.html)

