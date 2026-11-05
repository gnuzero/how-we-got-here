---
title: "從“屬於國家秘密”到國際標準：中國商用密碼的二十年"
weight: 20
date: 2026-09-26
draft: false
phase: "密碼與戰時計算"
series_index: 20
tags: ["商用密碼", "商用密碼管理條例", "密碼法", "SM2", "SM3", "SM4", "SM9", "國家密碼管理局", "ISO/IEC"]
summary: "1999 年的條例寫明商用密碼技術屬於國家秘密，2006 年起演算法陸續公開，2018 年進入 ISO/IEC 國際標準，2019 年的《密碼法》把密碼分成三類：誰可以造、賣、用密碼，二十年裡被改寫了好幾次。"
image_prompt: "Editorial still life on a desk: a 1999 printed regulation booklet, a 2010s smart card and USB security token, and a printed ISO standard cover, arranged along a timeline ruler; cool neutral light, documentary style, no readable text"
video_prompt: "20-second animation: a locked box labelled 1999 opens to reveal three published algorithm sheets (2006, 2010), which travel to an international standards building (2018); then a single word 'cryptography' splits into three tiers labelled core, ordinary and commercial (2019); clean motion graphics, neutral tone"
schematics: "Timeline: 1999-10-07 Decree 273 (Art. 3 'technology is a state secret'; designated R&D, designated production, licensed sale, user registration, no foreign products) -> 2006 SM4 published for WAPI -> 2010-12-17 SM2/SM3 notices No. 21/22 -> 2012 GM/T 0002 / 2016 GB/T 32907 -> 2018 ISO/IEC 10118-3 (SM3) and 14888-3 (SM2/SM9) -> 2020-01-01 Cryptography Law in force (three tiers; Art. 31 no forced source-code disclosure) -> 2023-07-01 revised regulations (Decree 760)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F27-01, F27-02, F27-03, F27-04, F27-05 -->

戰爭年代，密碼是軍隊的事。到了電子認證、電子政務和無線網路的年代，普通的資訊也要加密。那麼誰可以研製、生產、銷售和使用密碼？在中國，這個問題的答案寫在一串法規裡，二十年裡改寫了好幾次。

## 1999：技術本身是國家秘密

1999 年 10 月 7 日，國務院令第 273 號發布《商用密碼管理條例》，自發布之日起施行。第二條給商用密碼下了定義：“對不涉及國家秘密內容的信息進行加密保護或者安全認證所使用的密碼技術和密碼產品”。緊接著，第三條寫道：“商用密碼技術屬於國家秘密。國家對商用密碼產品的科研、生產、銷售和使用實行專控管理。”

專控管理落實到每一個環節。按條例原文：科研任務由國家密碼管理機構指定的單位承擔（第五條）；產品由指定的單位生產（第七條）；銷售要經許可（第十條），而且賣家要登記每一個直接用戶的名稱或姓名、地址、組織機構代碼或居民身份證號碼，以及每台產品的用途（第十二條）；“任何單位或者個人不得銷售境外的密碼產品”（第十三條）；使用者只能用經認可的產品，“不得使用自行研製的或者境外生產的密碼產品”（第十四條）。

## 演算法公開：SM4、SM2、SM3

演算法隨後一個個公開。據 SM4 標準作者之一呂述望 2016 年的綜述，SM4 分組密碼演算法是為配合 WAPI 無線區域網標準的推廣應用，於 2006 年公開發布的；2012 年 3 月成為密碼行業標準 GM/T 0002—2012，2016 年 8 月成為國家標準 GB/T 32907—2016。WAPI 本身的故事，見[《空中的標準之爭：從大哥大到 TD-SCDMA》]({{< relref "64-zh-mobile-standards.md" >}})。

2010 年 12 月 17 日，國家密碼管理局發布第 21 號公告，公布 SM2 橢圓曲線公鑰密碼演算法及其推薦曲線參數；同日的第 22 號公告公布 SM3 密碼雜湊演算法。兩份公告給出的理由相同：“為滿足電子認證服務系統等應用需求”。公鑰演算法和雜湊演算法，正是數位憑證和電子簽章要用的兩塊積木。

## 進入 ISO/IEC

據國家密碼管理局 2018 年 11 月 22 日的訊息：2018 年 10 月，含有 SM3 的 ISO/IEC 10118-3:2018（第 4 版）發布；2018 年 11 月，前一年以補篇形式納入國際標準的 SM2、SM9 數位簽章演算法，以正文形式隨 ISO/IEC 14888-3:2018 發布。

## 2019：三類密碼

據新華社 2019 年 10 月 27 日電，全國人大常委會日前審議通過《中華人民共和國密碼法》，自 2020 年 1 月 1 日起施行，共五章四十四條。第六條：“密碼分為核心密碼、普通密碼和商用密碼。”第七條規定，“核心密碼保護信息的最高密級為絕密級，普通密碼保護信息的最高密級為機密級”。第八條則說：“商用密碼用於保護不屬於國家秘密的信息。”“公民、法人和其他組織可以依法使用商用密碼保護網絡與信息安全。”

第三十一條還寫了一條限制：密碼管理部門和有關部門及其工作人員，“不得要求商用密碼從業單位和商用密碼檢測、認證機構向其披露源代碼等密碼相關專有信息”。國家密碼管理局負責人在答記者問時，把立法思路概括為：由商用密碼管理條例規定的“全環節嚴格管理調整為重點把控產品銷售、服務提供、使用、進出口等關鍵環節”。

## 2023：條例改寫

2023 年 4 月 27 日，國務院令第 760 號公布修訂後的《商用密碼管理條例》，自 2023 年 7 月 1 日起施行。新的第二條把商用密碼定義為：“採用特定變換的方法對不屬於國家秘密的信息等進行加密保護、安全認證的技術、產品和服務”。1999 年第三條那句“商用密碼技術屬於國家秘密”，在新條例裡不再出現。

**出處：**《商用密碼管理條例》1999 年版全文；國家密碼管理局公告第 21、22 號；《中華人民共和國密碼法》全文；國務院令第 760 號。

## 在西方

本書英文版第 66 章講的是戰時的密碼破譯：Enigma、布萊切利園和 Colossus。那時的密碼是交戰國之間的較量；這一頁講的，是密碼進入日常以後，一個國家怎樣用法規回答誰可以造、賣、用密碼。個人資料本身怎樣受保護，見[《從電腦處理到自動化決策：兩岸三地的個人資料保護法制》]({{< relref "67-zh-privacy-law.md" >}})。

## 延伸閱讀

- 國務院，《商用密碼管理條例》（1999 年版，國務院令第 273 號）（English: Commercial Cryptography Regulations, 1999 edition, State Council Decree No. 273），江蘇省國家密碼管理局網站轉載，1999-10-07。[連結](https://www.jsmm.gov.cn/flfg/54745.jhtml)
- 呂述望，《SM4分組密碼算法綜述》（English: A survey of the SM4 block cipher），《信息安全研究》2016 年第 2 卷第 11 期（摘要）。[連結](http://www.sicris.cn/CN/Y2016/V2/I11/995)
- 國家密碼管理局，《國家密碼管理局關於發布〈SM2橢圓曲線公鑰密碼算法〉公告（國密局公告第21號）》（English: OSCCA Notice No. 21 publishing the SM2 elliptic-curve public-key algorithm），2010-12-17。[連結](https://www.oscca.gov.cn/sca/xxgk/2010-12/17/content_1002386.shtml)
- 國家密碼管理局，《國家密碼管理局關於發布〈SM3密碼雜湊算法〉公告（國密局公告第22號）》（English: OSCCA Notice No. 22 publishing the SM3 hash algorithm），2010-12-17。[連結](https://www.oscca.gov.cn/sca/xxgk/2010-12/17/content_1002389.shtml)
- 國家密碼管理局，《我國SM2/3/9密碼算法正式成為ISO/IEC國際標準》（English: China's SM2/3/9 algorithms become ISO/IEC international standards），2018-11-22。[連結](https://www.oscca.gov.cn/sca/xwdt/2018-11/22/content_1039430.shtml)
- 全國人大常委會，《中華人民共和國密碼法》（English: Cryptography Law of the People's Republic of China, full text），國家密碼管理局網站轉載。[連結](https://oscca.gov.cn/sca/xxgk/2023-06/04/content_1057225.shtml)
- 新華社，《維護國家密碼安全 促進密碼事業發展——國家密碼管理局負責人就〈中華人民共和國密碼法〉答記者問》（English: OSCCA official answers questions on the Cryptography Law），中國人大網，2019-10-28。[連結](http://www.npc.gov.cn/npc/c2/c30834/201910/t20191028_301731.html)
- 國務院，《商用密碼管理條例》（2023 年修訂，國務院令第 760 號）（English: Commercial Cryptography Regulations, 2023 revision, State Council Decree No. 760），中國政府網。[連結](https://www.gov.cn/zhengce/zhengceku/202305/content_6875928.htm)

