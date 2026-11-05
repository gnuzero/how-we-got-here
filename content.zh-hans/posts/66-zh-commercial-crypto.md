---
title: "从“属于国家秘密”到国际标准：中国商用密码的二十年"
weight: 20
date: 2026-09-26
draft: false
phase: "密码与战时计算"
series_index: 20
tags: ["商用密码", "商用密码管理条例", "密码法", "SM2", "SM3", "SM4", "SM9", "国家密码管理局", "ISO/IEC"]
summary: "1999 年的条例写明商用密码技术属于国家秘密，2006 年起算法陆续公开，2018 年进入 ISO/IEC 国际标准，2019 年的《密码法》把密码分成三类：谁可以造、卖、用密码，二十年里被改写了好几次。"
image_prompt: "Editorial still life on a desk: a 1999 printed regulation booklet, a 2010s smart card and USB security token, and a printed ISO standard cover, arranged along a timeline ruler; cool neutral light, documentary style, no readable text"
video_prompt: "20-second animation: a locked box labelled 1999 opens to reveal three published algorithm sheets (2006, 2010), which travel to an international standards building (2018); then a single word 'cryptography' splits into three tiers labelled core, ordinary and commercial (2019); clean motion graphics, neutral tone"
schematics: "Timeline: 1999-10-07 Decree 273 (Art. 3 'technology is a state secret'; designated R&D, designated production, licensed sale, user registration, no foreign products) -> 2006 SM4 published for WAPI -> 2010-12-17 SM2/SM3 notices No. 21/22 -> 2012 GM/T 0002 / 2016 GB/T 32907 -> 2018 ISO/IEC 10118-3 (SM3) and 14888-3 (SM2/SM9) -> 2020-01-01 Cryptography Law in force (three tiers; Art. 31 no forced source-code disclosure) -> 2023-07-01 revised regulations (Decree 760)."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F27-01, F27-02, F27-03, F27-04, F27-05 -->

战争年代，密码是军队的事。到了电子认证、电子政务和无线网络的年代，普通的信息也要加密。那么谁可以研制、生产、销售和使用密码？在中国，这个问题的答案写在一串法规里，二十年里改写了好几次。

## 1999：技术本身是国家秘密

1999 年 10 月 7 日，国务院令第 273 号发布《商用密码管理条例》，自发布之日起施行。第二条给商用密码下了定义：“对不涉及国家秘密内容的信息进行加密保护或者安全认证所使用的密码技术和密码产品”。紧接着，第三条写道：“商用密码技术属于国家秘密。国家对商用密码产品的科研、生产、销售和使用实行专控管理。”

专控管理落实到每一个环节。按条例原文：科研任务由国家密码管理机构指定的单位承担（第五条）；产品由指定的单位生产（第七条）；销售要经许可（第十条），而且卖家要登记每一个直接用户的名称或姓名、地址、组织机构代码或居民身份证号码，以及每台产品的用途（第十二条）；“任何单位或者个人不得销售境外的密码产品”（第十三条）；使用者只能用经认可的产品，“不得使用自行研制的或者境外生产的密码产品”（第十四条）。

## 算法公开：SM4、SM2、SM3

算法随后一个个公开。据 SM4 标准作者之一吕述望 2016 年的综述，SM4 分组密码算法是为配合 WAPI 无线局域网标准的推广应用，于 2006 年公开发布的；2012 年 3 月成为密码行业标准 GM/T 0002—2012，2016 年 8 月成为国家标准 GB/T 32907—2016。WAPI 本身的故事，见[《空中的标准之争：从大哥大到 TD-SCDMA》]({{< relref "64-zh-mobile-standards.md" >}})。

2010 年 12 月 17 日，国家密码管理局发布第 21 号公告，公布 SM2 椭圆曲线公钥密码算法及其推荐曲线参数；同日的第 22 号公告公布 SM3 密码杂凑算法。两份公告给出的理由相同：“为满足电子认证服务系统等应用需求”。公钥算法和杂凑算法，正是数字证书和电子签名要用的两块积木。

## 进入 ISO/IEC

据国家密码管理局 2018 年 11 月 22 日的消息：2018 年 10 月，含有 SM3 的 ISO/IEC 10118-3:2018（第 4 版）发布；2018 年 11 月，前一年以补篇形式纳入国际标准的 SM2、SM9 数字签名算法，以正文形式随 ISO/IEC 14888-3:2018 发布。

## 2019：三类密码

据新华社 2019 年 10 月 27 日电，全国人大常委会日前审议通过《中华人民共和国密码法》，自 2020 年 1 月 1 日起施行，共五章四十四条。第六条：“密码分为核心密码、普通密码和商用密码。”第七条规定，“核心密码保护信息的最高密级为绝密级，普通密码保护信息的最高密级为机密级”。第八条则说：“商用密码用于保护不属于国家秘密的信息。”“公民、法人和其他组织可以依法使用商用密码保护网络与信息安全。”

第三十一条还写了一条限制：密码管理部门和有关部门及其工作人员，“不得要求商用密码从业单位和商用密码检测、认证机构向其披露源代码等密码相关专有信息”。国家密码管理局负责人在答记者问时，把立法思路概括为：由商用密码管理条例规定的“全环节严格管理调整为重点把控产品销售、服务提供、使用、进出口等关键环节”。

## 2023：条例改写

2023 年 4 月 27 日，国务院令第 760 号公布修订后的《商用密码管理条例》，自 2023 年 7 月 1 日起施行。新的第二条把商用密码定义为：“采用特定变换的方法对不属于国家秘密的信息等进行加密保护、安全认证的技术、产品和服务”。1999 年第三条那句“商用密码技术属于国家秘密”，在新条例里不再出现。

**出处：**《商用密码管理条例》1999 年版全文；国家密码管理局公告第 21、22 号；《中华人民共和国密码法》全文；国务院令第 760 号。

## 在西方

本书英文版第 66 章讲的是战时的密码破译：Enigma、布莱切利园和 Colossus。那时的密码是交战国之间的较量；这一页讲的，是密码进入日常以后，一个国家怎样用法规回答谁可以造、卖、用密码。个人信息本身怎样受保护，见[《从电脑处理到自动化决策：两岸三地的个人信息保护法制》]({{< relref "67-zh-privacy-law.md" >}})。

## 延伸阅读

- 国务院，《商用密码管理条例》（1999 年版，国务院令第 273 号）（English: Commercial Cryptography Regulations, 1999 edition, State Council Decree No. 273），江苏省国家密码管理局网站转载，1999-10-07。[链接](https://www.jsmm.gov.cn/flfg/54745.jhtml)
- 吕述望，《SM4分组密码算法综述》（English: A survey of the SM4 block cipher），《信息安全研究》2016 年第 2 卷第 11 期（摘要）。[链接](http://www.sicris.cn/CN/Y2016/V2/I11/995)
- 国家密码管理局，《国家密码管理局关于发布〈SM2椭圆曲线公钥密码算法〉公告（国密局公告第21号）》（English: OSCCA Notice No. 21 publishing the SM2 elliptic-curve public-key algorithm），2010-12-17。[链接](https://www.oscca.gov.cn/sca/xxgk/2010-12/17/content_1002386.shtml)
- 国家密码管理局，《国家密码管理局关于发布〈SM3密码杂凑算法〉公告（国密局公告第22号）》（English: OSCCA Notice No. 22 publishing the SM3 hash algorithm），2010-12-17。[链接](https://www.oscca.gov.cn/sca/xxgk/2010-12/17/content_1002389.shtml)
- 国家密码管理局，《我国SM2/3/9密码算法正式成为ISO/IEC国际标准》（English: China's SM2/3/9 algorithms become ISO/IEC international standards），2018-11-22。[链接](https://www.oscca.gov.cn/sca/xwdt/2018-11/22/content_1039430.shtml)
- 全国人大常委会，《中华人民共和国密码法》（English: Cryptography Law of the People's Republic of China, full text），国家密码管理局网站转载。[链接](https://oscca.gov.cn/sca/xxgk/2023-06/04/content_1057225.shtml)
- 新华社，《维护国家密码安全 促进密码事业发展——国家密码管理局负责人就〈中华人民共和国密码法〉答记者问》（English: OSCCA official answers questions on the Cryptography Law），中国人大网，2019-10-28。[链接](http://www.npc.gov.cn/npc/c2/c30834/201910/t20191028_301731.html)
- 国务院，《商用密码管理条例》（2023 年修订，国务院令第 760 号）（English: Commercial Cryptography Regulations, 2023 revision, State Council Decree No. 760），中国政府网。[链接](https://www.gov.cn/zhengce/zhengceku/202305/content_6875928.htm)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] No lab: none of the existing labs fits. Idea for Reed: a toy block cipher / hash playground (not SM4 itself) that shows why a published algorithm can still be secure (Kerckhoffs), or a "who may do what" timeline toggle (1999 / 2019 / 2023) over R&D, production, sale, use and import.
[ ] No figure: no openly licensed image in the dossier for thread 27.
[ ] Tone: descriptive only; every rule is stated as the text says it, with the article number. No evaluation of the policy.
[ ] Statute details beyond the dossier finding summaries (same official texts as F27-01 / F27-05; saved in /workspace/tmp/wd/jsmm1999.txt, mimafa.txt, npc_qa.txt, gov760.txt): 1999 Art. 2 definition, Arts. 5, 7, 10, 12 (user registration), 13 (no sale of foreign products); the full Q&A sentence (产品销售、服务提供、使用、进出口); 2023 Art. 2 definition quoted in full; absence of the Art. 3 sentence in the 2023 text checked by search.
[ ] Left out as unverified: SM4 in ISO/IEC 18033-3 AMD1 (2021); the exact NPC adoption date 2019-10-26 (page says only 日前 in a 10-27 dispatch); the 2004 WAPI deferral's reasons; ZUC in 3GPP.
[ ] Quote format note: the 1999 text on jsmm.gov.cn uses half-width commas; quotes were chosen to avoid comma-bearing spans except Art. 3 (full-width in the source). The SM3 notice has a half-width comma after 需求; the quote stops before it.
[ ] TODO after PR #23 merges: mention/relref 64-zh-hanzi-encoding (the telegraph-code cipher books) as the Qing-era prequel.
[ ] Native-reader proofread (zh-Hans) before final
[x] zh-Hant derived 2026-09-26 (tools/zh_hant.py: OpenCC s2twp + protections, then desk terminology review, review/decisions/66-zh-commercial-crypto.md); Taiwan-reader proofread still pending
-->
