# Chinese (zh-Hans / zh-Hant) desk progress: batch 2

> **This is the batch-2 section only.** Branch zh-desk-2 is based on origin/zh-locales-policy (573c848), which does not have batch 1's log. Batch 1 (11 pages, 22 files) is PR #23 on branch zh-desk-1, with Lucas's fact-check fixes. **After PR #23 lands, merge this file into PR #23's `_editorial/zh-progress.md`** (append these sections; keep one Conventions block; add batch 2's rows to the phase and VERIFY tables).

- Desk: Nayana (Chinese desk, zh-desk-2)
- Date: 2026-09-26 (Asia/Bangkok)
- Branch: zh-desk-2, based on origin/zh-locales-policy 573c848 (PR #13: zh-hans / zh-hant languages, section indexes, i18n). This batch adds post files and this log only. No `_index.md`, `hugo.toml`, `i18n/`, `assets/`, `layouts/` or `static/` changes.
- Scope: 12 **original** Simplified Chinese pages (weights 12–23) written from Chinese primary sources (research dossier files 07–10 and 16–19, plus 26–29 for the writer-D pages), and zh-Hant (Taiwan-first) versions derived from them.
- Status of all 24 files: **draft, needs native proofread.** `draft: false` so they build on the preview. The front-matter status comment and the ASSET CHECKLIST both say "not final".
- Rules: the same as batch 1, plus the batch-2 rules and the lessons from the PR #23 fact-check gate:
  - Quotation marks only around verbatim source text.
  - No ethnicity framing.
  - Phase = the English twin's phase, in "N — label" form.
  - Link to an existing zh story instead of retelling it.
  - No unsourced "English sources say / 常被忽略" claims.
  - Each detail is attributed to its own source.
  - Quotes are exact; unsourced figures are removed.
  - Sequences are not presented as conflicts.
  - Conclusions are attributed to their authors.
  - Links are checked, and the site is built with Hugo 0.158.0.

## Conventions and desk decisions (batch 2)

### Phase field

Every label was checked against the English twin's `phase:`, batch 1's labels (origin/zh-desk-1), and Lucas's zh files (`i18n/zh-hans.toml`, `i18n/zh-hant.toml`, `content.zh-hans/_index.md`, `content.zh-hant/_index.md`; read only). The i18n files and `_index.md` hold no phase labels, so batch 1 is the only canonical source. Labels shared with batch 1 are identical. The new labels follow batch 1's pattern: "&" becomes 与, list commas become 、, and unnumbered English labels keep their " / " separators.

| Page | English twin phase | zh-Hans | zh-Hant |
|---|---|---|---|
| 05-zh-transistors-semiconductors | 2 — Physics & Devices | 2 — 物理与器件 | 2 — 物理與元件 |
| 18-zh-hong-kong-computing | 3 — Building a CPU & Its Architectures | 3 — 构建 CPU 及其架构 (= batch 1) | 3 — 構建 CPU 及其架構 |
| 23-zh-operating-systems, 27-zh-languages-compilers | 4 — Software Foundations: OS, Languages & Real-Time Systems | 4 — 软件基础：操作系统、编程语言与实时系统 (= batch 1) | 4 — 軟體基礎：作業系統、程式語言與即時系統 |
| 43-zh-bbs, 44-zh-chinese-search | 7 — Distributed Systems, Big Data & Orchestration | 7 — 分布式系统、大数据与编排 | 7 — 分散式系統、大數據與編排 |
| 48-zh-lithography-fabs | 8 — Process Nodes & Fabrication | 8 — 工艺节点与制造 (= batch 1) | 8 — 製程節點與製造 |
| 58-zh-deep-learning-chips | 10 — Modern AI Hardware | 10 — 现代 AI 硬件 (= batch 1) | 10 — 現代 AI 硬體 |
| 64-zh-mobile-standards | Governance / Internet Civics | 治理 / 互联网公民 (= batch 1) | 治理 / 網際網路公民 |
| 66-zh-commercial-crypto | Crypto & Wartime Computing | 密码与战时计算 | 密碼與戰時計算 |
| 67-zh-privacy-law | Privacy / Identity / Consent | 隐私 / 身份 / 同意 | 隱私 / 身份 / 同意 |
| 68-zh-computer-craze | Visions That Shipped | 落地的愿景 | 落地的願景 |

Four labels are new, with no canonical rendering yet: 物理与器件, 分布式系统、大数据与编排, 密码与战时计算, 落地的愿景. They are desk renderings for the proofreaders to confirm. In zh-Hant, 器件 → 元件 (the Taiwan term for "device"), and the same form is used in the page text.

### Desk decisions applied in this pass

- **27-zh BCY origin:** both accounts are on the page, each attributed to its own source, and the page does not choose between them.
  - CAS profile (F09-02): 董韫美, on the 119, 1964–65.
  - CCF manuscripts record (same page as F09-06): 中科院计算所三室姚伟民等, installed on the 109/111 from 1971.
- **67-zh:** the vague closing pointer to "this book's chapters on attention" was cut. No batch-2 page fits it.
- **68-zh:** a relref to 18-zh-hong-kong-computing was added at the end of the VTech section (18-zh's 1980s section covers IBM Hong Kong's mainland procurement office and the IBM 5550). It fits the "Hong Kong as gateway" thread.
- **Twins:** 44-zh stays on English 44 and 68-zh stays on English 68.

### zh-Hant decisions (batch 2)

- Pipeline: zh-Hans master → `tools/zh_hant.py` (unchanged since PR #23: s2twp, protections, OVERRIDE tables, 台 policy, auto-fixes for 朱邦復 and 里數) → scripted hand edits (`review/b2/hand_edits_b2.py` in the desk workspace) → Taiwan proofreader. Per-page records are in `review/decisions/<name>.md`.
- Every URL, shortcode, sources comment and protected front-matter field (weight, date, draft, series_index, image_prompt, video_prompt, schematics, labs) is byte-identical between zh-Hans and zh-Hant.
- Quotations that are already Traditional in the master (Hong Kong and Taiwan sources on pages 05, 18, 23, 43, 64) are unchanged.
- relref link texts match the target pages' zh-Hant titles.
- Lucas's PR #23 patterns applied:
  - 調校 for hardware 调试 (23-zh ×2); 除錯 stays for software.
  - 發布 / 發表 instead of 釋出 for regulations, standards and product unveilings (58, 64, 66). 釋出 is kept for a software release (紅旗 Linux) and a spectrum release (NCC 2600 MHz).
  - 協定 is only for network protocols: 和解協議 (48) is an agreement and stays.
  - No 反汇编, 外设 or 录入 occurs in this batch.
- Post-PR-#23 greps (複/裡/鬥/衝/餘/鹹 inside names and units) found and fixed:
  - 餘承東 → 余承東, inside a quotation (58).
  - 鬍偉武 → 胡偉武 (58).
  - 範克廉樓 → 范克廉樓 (18).
  - 幹擾 → 干擾 (48).
  - 模擬製式 → 模擬制式 (64).
  - 製定 → 制定 (67).
  - 拉制 → 拉製 (05).
  - 餘杭 (the place 余杭) is correct and kept.
- Other OpenCC breakages fixed:
  - 模擬行動電話閘道器閉 → 類比行動電話網關閉 (64).
  - 32/28 納米制造工藝 → 奈米製程 (48).
  - 一箇 → 一個 (58).
  - 可程式設計序 → 可編程序 (18).
  - 組織機構程式碼 → 組織機構代碼 (66).
  - 物件 → 對象 (58, 67).
- Names, checked: 董韞美, 林蘭英, 楊芙清, 孫玉芳, 王守武, 王守覺, 夏鍾瑞, 呂述望, 朱邦復, 張汝京, 余承東, 胡偉武. **夏钟瑞 / 夏鍾瑞** is the spelling in the source (上观新闻 oral history) and on the page; the brief's "夏忠瑞" does not match the source. 王頌贊 (王颂赞) uses 贊, not OpenCC's 讚; flagged for the proofreader.
- **Perspective fix:** 23-zh's "海峡对岸的起点" (i.e. Taiwan, seen from the mainland) becomes "台灣的起點" in zh-Hant.
- **Generic vs statute terms (67):** the zh-Hant title uses the generic Taiwan term 個人資料保護法. Statute names and close paraphrases of PIPL keep 個人信息.

### VERIFY terms (batch 2)

| zh-Hans | zh-Hant chosen | Occurrences (zh-Hant line) | Why |
|---|---|---|---|
| 流片 | 投片 | 58-zh-deep-learning-chips L32 | batch-1 decision; the quotation on L26 (“…原型芯片的一次流片成功”) keeps 流片 |
| 光刻机 (new) | 曝光機 | 05-zh-transistors-semiconductors L36; 48-zh-lithography-fabs L8 (tag), L9 (summary), L22, L30 ×2, L42 | Taiwan industry usage; NAER lists only 微影術 for lithography (glossary: "曝光機/微影設備, not verified"). Kept as 光刻機 in quotations and titles: 48 L9 and L22 (“土光刻機”), L42 (SMEE quotation), L58 (《SSX600系列光刻機》) |
| 反汇编, 众核, 残差连接, 大模型, 巨型机 | — | no occurrences in batch 2 | — |

Taiwan-term choices flagged for the proofreader (not VERIFY, but new in this batch):
- 反及閘 for 与非门, used outside quotations (05 L34, L38)
- 晶粒 for 管芯 (05 L38)
- 良率 for 成品率 (05)
- 積體規模 for 集成规模 (05)
- 曝光機 in 48's heading-free prose
- 新聞群組 (43)
- 文章 for BBS 帖子 (43)
- 國際資訊奧林匹亞競賽 (68)
- 賈伯斯 (68)
- 卡式錄音機 (68)
- 時脈週期 and 佈局 (58)
- 數位憑證 and 電子簽章 (66)
- 大數據 in the phase-7 label (巨量資料?)

## Done

Weights 12–23 are unique, equal `series_index`, and follow batch 1's 1–11. Every page has a status comment, sources comment, **出处** label, 延伸阅读 list, and an ASSET CHECKLIST (zh-Hant marked derived 2026-09-26; Taiwan proofread pending).

### 12. 05-zh-transistors-semiconductors (weight 12)

- Files: `content.zh-hans/posts/05-zh-transistors-semiconductors.md`, `content.zh-hant/posts/05-zh-transistors-semiconductors.md`
- Title: 从一门课到一块芯片：中国半导体的头十年 / 從一門課到一塊晶片：中國半導體的頭十年
- Feeds English: 05 Semiconductors from First Principles (also 06)
- Sources: F07-01, 02, 03, 05, 06, 07, 09, 10, 11, 12, 15.
- Main primary sources:
  - PKU School of Physics (Huang Kun) and 朱邦芬's memoir
  - 林兰英《四十年峥嵘岁月》 (2000)
  - 《中国科学报》 on 王守武 (2016, 2023)
  - CAS Institute of Semiconductors (2024; the 1964-11 研究工作简报)
  - SASTIND and 《科技日报》 2021 on the GT31
  - NYCU Nano Facility Center history and the NSTC 2023 Presidential Science Prize citation (張俊彥)
- Kept apart, not a conflict:
  - The Institute of Semiconductors' 1964-11 19-component sample ("integration scale")
  - Institute 13's 1965 GT31 DTL NAND ("first practical monolithic IC", yield 33.6%)
- Also shown with both attributions: the 1957 Ge crystal is credited to the materials group (林兰英) and to 王守武 (《中国科学报》 2023). The dates agree.
- Omitted / unverified: see the ASSET CHECKLIST. Whether the 1964 sample was monolithic or hybrid is not stated on the page (the source does not say).
- Image: File:Huangkun.png (People's Pictorial 1963 no. 1), **PD-China; URAA status unassessed** (see image notes). Lab: none (idea below).
- VERIFY: 光刻机 → 曝光機 L36.
- zh-Hant hand edits: 19 (拉製 ×5, including 3 inside quotations; 北京電子管廠; 製程 ×3; 反及閘 ×2; 積體規模 ×2; 晶粒; 良率; 元件 ×2 including the phase label; 曝光機; link text 《微影…》; 電腦; 設備).

### 13. 48-zh-lithography-fabs (weight 13)

- Files: `content.zh-hans/posts/48-zh-lithography-fabs.md`, `content.zh-hant/posts/48-zh-lithography-fabs.md`
- Title: 光刻：从显微镜到扫描机 / 微影：從顯微鏡到掃描機
- Feeds English: 48 Photolithography (also 47 for the node-number question)
- Sources: F07-09, F07-13, F16-01…F16-08, F16-10.
- Main primary sources:
  - CAS Institute of Semiconductors 2024 (王守觉's 土光刻机)
  - CCF history record (Tsinghua step-and-repeat camera PCB)
  - 徐端颐's first-hand account (Tsinghua)
  - 王守武's 1990 CPPCC proposal (《中国科学报》 2023)
  - 夏钟瑞 oral history (上观新闻 2020, reprinted by 上海党史网)
  - 锦天城 legal opinion for SMIC's STAR listing
  - SMIC's 2009-11-10 settlement announcement
  - SMEE history and product page
  - 2014 《国家集成电路产业发展推进纲要》
- Attributed: the 0.8 µm (1980) figure is the developer's own recollection (stated on the page). The 1971 "国内第一台" camera and SMEE's 2016 "首台前道扫描光刻机" are explained as different machine types, not a conflict.
- Omitted / unverified: the 742 factory / 1978 Toshiba line; details of the 908 project; the "造不如买" slogan; SMEE's 28 nm claims; 张汝京's background. YMTC Xtacking was left out for length (better on chapter 51).
- Image: none (asset requests are in the checklist). Lab: none (idea below).
- VERIFY: 光刻机 → 曝光機 L8, L9, L22, L30 ×2, L42.
- zh-Hant hand edits: 14 (曝光機 ×6; 插件; 運轉中; 設備; 8 吋; 奈米製程 ×2; 元件; link text 《…晶片》; 干擾).

### 14. 58-zh-deep-learning-chips (weight 14)

- Files: `content.zh-hans/posts/58-zh-deep-learning-chips.md`, `content.zh-hant/posts/58-zh-deep-learning-chips.md`
- Title: 从 DianNao 到昇腾：为矩阵乘法造的芯片 / 從 DianNao 到昇騰：為矩陣乘法造的晶片
- Feeds English: 58 Systolic Arrays (also 57)
- Sources: F08-01…F08-04, F08-06…F08-12.
- Main primary sources:
  - ICT DianNao project page (bilingual)
  - ICT 2014 ASPLOS news
  - CAS 2024 feature 《开创“寒武纪”》
  - Jouppi et al., ISCA 2017 (TPU)
  - Huawei's Kirin 970 IFA 2017 release
  - The ICT congratulatory letter as reported by 驱动中国
  - Cambricon's 2020 STAR prospectus
  - Huawei's Da Vinci explainer (IT之家)
  - 央视网 on the Ascend 910
- Not a conflict (stated on the page): the TPU paper's "no chips were fabricated" refers to the published DianNao-family designs; the CAS feature's 2015 prototype tape-out is a different chip.
- Omitted / unverified: DianNao headline numbers from an ACM snippet; the Science "pioneer" article (F08-05, not located); "first commercial DL processor" has no neutral check. Taiwan/HK accelerators: no primary source found (gap).
- Image: none. Lab: none (idea below).
- VERIFY: 流片 → 投片 L32 (the quotation keeps 流片, L26).
- zh-Hant hand edits: 17 (新聞稿 ×2; 發表 ×3; 一個; 計畫 ×2; 胡偉武; 余承東 inside a quotation; Google; 佈局; 投片; 對象; 支持; 整合; 時脈週期).

### 15. 23-zh-operating-systems (weight 15)

- Files: `content.zh-hans/posts/23-zh-operating-systems.md`, `content.zh-hant/posts/23-zh-operating-systems.md`
- Title: 操作系统：从大庆的“虚拟机”到开源欧拉 / 作業系統：從大慶的“虛擬機”到開源歐拉
- Feeds English: 23 The GNU Movement and Linux (also 22, for the BSD line)
- Sources: F10-01…F10-12.
- Main primary sources:
  - 杨芙清's memoir (PKU)
  - 《软件学报》 1997 (COSIX V2.0)
  - 《南方都市报》 2005 (孙玉芳, 红旗 Linux, 中文2000)
  - 中国教育和科研计算机网 and 《光明日报》 2006 (银河麒麟, FreeBSD-based service layer)
  - Huawei (openEuler 2019; donation to OpenAtom 2021; HarmonyOS HK release)
  - ZDNet Taiwan interview with 黄志伟 (CLE)
  - OpenFoundry
- Omitted / unverified:
  - Whether the COSIX byline 孙玉方 is 红旗's 孙玉芳 (the paper is cited under its published byline).
  - COSIX's origin.
  - Kylin's FSG "first".
  - Deepin/UOS.
  - The RedOffice superlative.
  - The year of the Daqing trip.
- Image: none. Lab: vm-terminal (framed by the Daqing simulation).
- VERIFY: none.
- zh-Hant hand edits: 17 (開源歐拉 ×2, the product name, not the s2twp 尤拉; 電腦 ×4; 用戶單位; 調校 ×2; 批次處理; link text 《程式語言與編譯器》; 國家計畫; 軟件 in two company names; 信息領域辦公室; 映像; 台灣的起點).

### 16. 27-zh-languages-compilers (weight 16)

- Files: `content.zh-hans/posts/27-zh-languages-compilers.md`, `content.zh-hant/posts/27-zh-languages-compilers.md`
- Title: 编程语言与编译器：从 104 机到仓颉 / 程式語言與編譯器：從 104 機到倉頡
- Feeds English: 27 High-Level Languages: FORTRAN, COBOL, Lisp, C
- Sources: F09-01…F09-11, F03-02, F03-12.
- Main primary sources:
  - CAS 2026 profile of 董韫美
  - CCF lifetime-achievement citations (董韫美, 徐家福)
  - CCF manuscripts record (104/109乙/111/119/013/655)
  - 《南京大学报》 memoir
  - Tan Kah Kee Science Award 1990 (王选)
  - Standards catalogues (GB 1500, GB/T 1500-1987, GB 3057, GB/T 3057-1996, GB 4144-1984)
  - 易语言 site
  - NJU press release on 仓颉
- **Desk decision applied:** the BCY origin now gives both records side by side (see above).
- The five "first / earliest" claims are each quoted with their own wording, and the page does not rank them.
- Omitted / unverified: BCY's name expansion; whether the 104 compiler came from a Soviet design; what BCY's Chinese-character support meant technically; Knuth's English wording; the CCDS year.
- Image: none. Lab: mini-cpu (hand-writing machine instructions).
- VERIFY: none.
- zh-Hant hand edits: 9 (保存 ×2; 組譯; 電腦; 運轉; link text 《作業系統》; 史丹佛 ×2; 國家標準信息公共服務平台).

### 17. 18-zh-hong-kong-computing (weight 17)

- Files: `content.zh-hans/posts/18-zh-hong-kong-computing.md`, `content.zh-hant/posts/18-zh-hong-kong-computing.md`
- Title: 香港：打孔卡、主机与天文台的电脑 / 香港：打孔卡、主機與天文台的電腦
- Feeds English: 18 Mainframes to Minicomputers to Microprocessors
- Sources: F19-01…F19-03, F19-05…F19-10.
- Main primary sources:
  - Hong Kong Observatory 《天文台的电脑系统及应用》
  - C&SD 《政府统计处的主要发展（1967–2012）》
  - IT PRO Magazine's IBM Hong Kong 60-year retrospective (Benny Yeung, 2017)
  - 港识多史 (1963 newspaper reports, second-hand; stated on the page)
  - JUCC
  - 《中大校友》 1999-03
- Omitted: F19-04 (IBM 1620 at HKU, year unknown); F19-11 (medium-low); F19-12 (Fairchild Kwun Tong, 1962 vs 1964, better on a manufacturing page); the "Asia's first real-time banking" claim (low).
- Image: none. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 6 (設備 ×2; 編製; 設置…可編程序 as in the C&SD source; 范克廉樓; 零組件).

### 18. 43-zh-bbs (weight 18)

- Files: `content.zh-hans/posts/43-zh-bbs.md`, `content.zh-hant/posts/43-zh-bbs.md`
- Title: 挤不进去的广场：两岸三地的校园 BBS / 擠不進去的廣場：兩岸三地的校園 BBS
- Feeds English: 43 Usenet, Archie, Gopher and the Pre-Web Internet (the twin phase is 7)
- Sources: F26-01…F26-04.
- Main primary sources:
  - SMTH 精华区 station-history post (1997, forwarded from 网易 BBS)
  - 《中国教育网络》 2014 (《校园BBS风雨十年路》)
  - PTT official history (peak-online table)
  - 黄力信《中大电子通讯简史 1991-2003》 in 《中大四十年》
- QA note: the CU40 quotation “有時甚至因為使用者過多，影響網站的服務” was verified by re-fetching https://cusp.hk/cu40/?p=73 on 2026-09-26. The saved copy in the desk workspace was a captcha page, so no local copy exists. The same page confirms CUBBS closed 1995-12-01, HKiBBS was founded in 1995, and TCLBBS was HKiBBS's predecessor.
- Omitted / unverified: 杜奕瑾 as PTT founder (not on the official page); CFido 1991; the 天涯 / 西祠 era; any "first mainland BBS" claim (39-zh in batch 1 handles that dispute).
- Image: none. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 15 (社群媒體; 保存; 文章 ×4 for BBS posts; 連線; 大型主機 ×2; 成長曲線; 新聞群組 ×5; 運作; link text 《一台伺服器裝不下…搜尋引擎》).

### 19. 44-zh-chinese-search (weight 19)

- Files: `content.zh-hans/posts/44-zh-chinese-search.md`, `content.zh-hant/posts/44-zh-chinese-search.md`
- Title: 一台服务器装不下：中国最早的校园搜索引擎 / 一台伺服器裝不下：中國最早的校園搜尋引擎
- Feeds English: 44 Google's Big Data Infrastructure (twin kept)
- Sources: F29-01, 02, 03, 06, 07.
- Main primary sources:
  - 赛尔网络 《中国第一批搜索引擎往事丨CERNET30周年》 (2024)
  - 《中国教育网络》 《百度与天网—你不知道的那些事》 (2014)
- Omitted / unverified: 木棉's launch date and crawler claim; the "Google blocked in 2002" episode; 李彦宏's patent; the 张朝阳 naming anecdote. The Baidu story is not repeated from batch-1 page 63 (one clause only).
- Image: none. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 13 (網絡指南針 ×4, the proper name; 計畫 ×4; 大學; 平行化; 點擊; 中國Web信息博物館; Google).

### 20. 66-zh-commercial-crypto (weight 20)

- Files: `content.zh-hans/posts/66-zh-commercial-crypto.md`, `content.zh-hant/posts/66-zh-commercial-crypto.md`
- Title: 从“属于国家秘密”到国际标准：中国商用密码的二十年 / 從“屬於國家秘密”到國際標準：中國商用密碼的二十年
- Feeds English: 66 Wartime Crypto
- Sources: F27-01…F27-05.
- Main primary sources:
  - 《商用密码管理条例》 1999 (Decree 273) full text
  - 吕述望 2016 SM4 survey (abstract)
  - OSCCA notices No. 21 / 22 (2010-12-17)
  - OSCCA 2018-11-22 (ISO/IEC)
  - 《密码法》 full text
  - Xinhua / NPC Q&A (2019-10-28)
  - Decree 760 (2023)
- Omitted / unverified: SM4 in ISO/IEC 18033-3 AMD1 (2021); the exact NPC adoption date (the page says only 日前); the reasons for the 2004 WAPI deferral; ZUC in 3GPP.
- Image: none. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 9 (發布 ×4; 用戶; 組織機構代碼; 數位憑證 / 電子簽章; 個人資料; link text 《…個人資料保護法》).

### 21. 67-zh-privacy-law (weight 21)

- Files: `content.zh-hans/posts/67-zh-privacy-law.md`, `content.zh-hant/posts/67-zh-privacy-law.md`
- Title: 从电脑处理到自动化决策：两岸三地的个人信息保护法 / 從電腦處理到自動化決策：兩岸三地的個人資料保護法
- Feeds English: 67 Privacy, Consent, Identity, Cyber
- Sources: F28-01…F28-04.
- Main primary sources:
  - PCPD 《重要资料及历史》
  - PDPC preparatory office's legislative history of Taiwan's 个人资料保护法
  - Presidential Order No. 91
  - PIPL full text (CAC)
- Sequence, not conflict: HK enacted 1995-08-03, in force 1996-12-20; Taiwan promulgated 1995-08-11. The page says outright that "first" depends on what you count.
- **Desk decision applied:** the closing pointer to "this book's chapters on attention" was cut.
- Omitted: the "Asia's first data-privacy law" label; the 2012 NPC decision and 2016 Cybersecurity Law as precursors; the 2022 Constitutional Court NHI ruling; any GDPR comparison.
- Image: none. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 8 (title 個人資料保護法; 制定 ×2; 個人信息 ×4 in close statute paraphrases; 對象).

### 22. 64-zh-mobile-standards (weight 22)

- Files: `content.zh-hans/posts/64-zh-mobile-standards.md`, `content.zh-hant/posts/64-zh-mobile-standards.md`
- Title: 空中的标准之争：从大哥大到 TD-SCDMA / 空中的標準之爭：從大哥大到 TD-SCDMA
- Feeds English: 64 Who Decides the Wire (a second zh page for chapter 64, after batch-1's hanzi-encoding page)
- Sources: F17-01…F17-12.
- Main primary sources:
  - 科普中国 2016
  - 《广州日报》 2023
  - China Telecom Museum chronology
  - OFCA telecom milestones
  - 曹煦, CAE site (1998 TD-SCDMA submission)
  - gov.cn 2009-01-07 (3G licences, Wayback copy)
  - MIIT 无〔2009〕11号
  - AQSIQ/SAC 2003 No. 110
  - GB 15629.11-2003 record
  - SPC (2022) 最高法知民终 817 号 (WIPO Lex copy)
  - iThome 2014 (2600 MHz)
- QA fix: "香港的 CDMA 有两种记法" was reworded to plain attribution ("香港的 CDMA 也来得早：…；通讯办的里程碑记…"). The page now shows CTM's "1995年9月…商用CDMA移动通信网…开通" and OFCA's October 1995 service launch side by side, labelling them neither a conflict nor a sequence. **Open:** the dossier (F17-04) calls Sep vs Oct a conflict, while the writer judged they may be successive steps (network opening vs service launch). Unresolved; for the fact-checker.
- Omitted / unverified:
  - The origin of the 大哥大 nickname.
  - Why TACS was chosen.
  - PHS peak subscribers.
  - The reasons for the 2004 WAPI deferral.
  - Taiwan's earlier WiMAX promotion.
  - TD-SCDMA's commercial outcome.
  - 小灵通 = the 1900–1920 MHz system is per the dossier; the MIIT notice does not name it.
- Image: 3G phones, Yoshi Canopus, CC BY-SA 3.0. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 14 (類比 ×3 including the 閘道器閉 fix; 蜂巢式; 用戶 ×2; 模擬制式 inside a quotation; 高級流動電話系統 as in OFCA; 數位 ×2; 工業和信息化部 ×2; 簽合約; 發布 ×2; 電信業者).

### 23. 68-zh-computer-craze (weight 23)

- Files: `content.zh-hans/posts/68-zh-computer-craze.md`, `content.zh-hant/posts/68-zh-computer-craze.md`
- Title: 娃娃与学习机：1984 年以后的电脑热 / 娃娃與學習機：1984 年以後的電腦熱
- Feeds English: 68 Visions That Shipped (twin kept)
- Sources: F18-01…F18-09.
- Main primary sources:
  - 《新民晚报》 2014 via People's Daily Online
  - Xinhua 2004-08-21 (reprinted on CPC News 2019)
  - CCF NOI introduction
  - CCF 《中华牌CEC-1型学习机》 history page
  - VTech 《历史及里程碑》
  - 《新京报》 via 中新网 2018
- Wording dispute, presented exactly as sourced with no side taken:
  - 做起: 王颂赞 2014; CCF CEC-I page.
  - 抓起: Xinhua 2004 quotation; CCF NOI page; the 2014 article's own original headline.
  - The General Office text was not found.
- The CCF page contradicts itself (Tsinghua-led design vs "天津无线电二厂模仿"); both statements are shown as the page's own.
- **Desk decision applied:** a relref to 18-zh-hong-kong-computing was added (VTech section).
- Omitted / unverified: Subor's ~80% share and its output figures; cumulative sales; CEC-I sales; the Laser 310 "most common" claim; the Taiwan 小教授 line.
- Images: Laser 310, Thomas Conté, CC BY-SA 2.0; 小霸王 SB-486D, 七个点, CC BY-SA 4.0. Lab: none (idea below).
- VERIFY: none.
- zh-Hant hand edits: 14 rules, 17 spots (彩色電視; 14 吋; 電腦 ×3; 王頌贊 ×4; 信息學 ×3 in NOI names; 國際資訊奧林匹亞競賽; 計算機與信息局; 卡式錄音機; 微電腦; 賈伯斯).

### zh-Hant review counts (batch 2)

| Page | Hand-edit rules | Replaced spots | Helper REVIEW items checked |
|---|---|---|---|
| 05-zh-transistors-semiconductors | 19 | 19 | 8 |
| 48-zh-lithography-fabs | 14 | 14 | 17 |
| 58-zh-deep-learning-chips | 17 | 17 | 15 |
| 23-zh-operating-systems | 17 | 17 | 15 |
| 27-zh-languages-compilers | 9 | 9 | 2 |
| 18-zh-hong-kong-computing | 6 | 6 | 1 |
| 43-zh-bbs | 15 | 15 | 2 |
| 44-zh-chinese-search | 13 | 13 | 5 |
| 66-zh-commercial-crypto | 9 | 9 | 17 |
| 67-zh-privacy-law | 8 | 8 | 7 |
| 64-zh-mobile-standards | 14 | 14 | 13 |
| 68-zh-computer-craze | 14 | 17 | 9 |
| **Total** | **155** | **158** | **111** |

## QA pass against the PR #23 lessons (2026-09-26)

- **Quotes:** every quotation on the 12 zh-Hans pages (149 after the four scare quotes below were removed) was machine-searched, with OpenCC variants, against the writers' saved source texts and the dossier. 148 matched. The CU40 quote (43-zh) was verified by re-fetching the live page (see page 18 above).
- **Short quoted words:** each was checked to be verbatim in its source (芝麻管, 面条, 黄埔一期, 初芯, 可实用化, 打咭, 虚拟机, P语法, 两弹一星, 邸报看真, 土光刻机, 小黑屋, 大哥大, 起底, 学习卡, 热烈欢迎, 做起/抓起, 兼容). Our own scare quotes were removed:
  - 43/44: “找” / “谈”.
  - 48: “照相机” used as a metaphor; “纳米”. The 1971–1980 heading now names the 分步重复照相机.
- **"English sources / 常被忽略" claims:** none found. The only pointers are "英文版第 N 章", which refer to this book's English chapters.
- **Merged-source sentence fixed:** in 44-zh, the Web InfoMall sentence (2002, 70多亿 pages by 2015) followed a 《中国教育网络》 attribution but comes from the 赛尔网络 retrospective. It is now attributed to 赛尔网络.
- **Sequences vs conflicts:** in 64-zh (HK CDMA), the "two ways of recording it" framing was removed. Both dates are shown, attributed; whether they conflict is left open (see page 22). The existing pairs were checked and are presented correctly:
  - 67-zh HK/Taiwan 1995 dates.
  - 64-zh TD-SCDMA 1998 submission → 2000 adoption.
  - 05-zh two "first IC" claims.
  - 58-zh TPU vs CAS prototype.
  - 48-zh 1971 vs 2016 "first".
- **Figures:** every number on the pages was searched in the saved texts and dossier. The two not found as written (PTT 105403, 177734) appear as "105,403" and "177,734" in the saved PTT page.
- **Reading copies** in the desk workspace were updated to match every change above.

## Fact-check gate (batch 2), 2026-09-26

The standard is the same as the batch-1 gate (PR #23): quotation marks only on verbatim text; every detail credited to its own source; no claims about what English-language sources say; no unsourced figures. Quotes were spot-checked against the **live** sources, not only the saved copies.

- **URLs:** all 103 reading-list and source URLs were re-fetched. All resolve. Some are slow or block bots, but none is broken:
  - oscca.gov.cn is very slow from the checker's box; the 密码法 page was read via a second fetcher.
  - cusp.hk (CU40) returns 429 to curl; wetoasthk serves a bot challenge. Both were read via a second fetcher.
  - vtech.com needs a cookie (307 loop without one).
  - upload.wikimedia.org returns 429 to curl; the files were confirmed through the Commons API.
  - The Cambricon SSE prospectus is a large PDF; it was downloaded and searched.
- **Quotes:** all 129 quotations on the zh-Hans pages match their live sources, with no misquotes. The one quotation added at the gate (64, Xinhua) was also checked live. Most were matched automatically against the live-fetched corpus with OpenCC variants. The rest were checked by hand:
  - 18: headline (wetoasthk).
  - 23: ZDNet Taiwan (big5 archive).
  - 43: CU40.
  - 58: TPU paper (arXiv PDF).
  - 64: SPC judgment (ipc.court.gov.cn).
  - 66: 密码法 ×5 (oscca).
- **Figures:** the Cambricon prospectus figures (100.00% / 97.94% / 92.56%, −41.23%, 自研终端智能芯片, 超过1亿台, founded 2016-03-15) were found verbatim in the SSE PDF. The other pages' figures were checked against their cited sources.
- **Fixes (both locales):**
  - 05: Huangkun.png removed (see flags); the caption kept as prose.
  - 23:
    - 据论文摘要 → 据论文摘要页. 八五 is in the 基金项目 line, not in the abstract.
    - The Red Flag paragraph is now attributed to 《南方都市报》 2005 from its first sentence. 孙玉芳's title is given as at her death in 2005.
    - The Kylin paragraph is attributed to 中国教育和科研计算机网 from its first sentence.
    - The HarmonyOS quote is attributed to 余承东, as quoted in Huawei Hong Kong's release.
    - zh-Hant only: the nickname stays 小虫, as printed in ZDNet Taiwan.
  - 27: 仓颉 is now "据南京大学的新闻稿 … 介绍 … 并发布了开发者预览版". Before, the page said "首次公开发布", which the cited source does not say.
  - 43: cuhk.forum started in Sep 1992 as cuhk.campus and was renamed in Sep 1993 (CU40 table).
  - 44: "中文网络上的第一批 / 中国最早的校园搜索引擎" → "中国大陆第一批搜索引擎 (as the 赛尔网络 retrospective calls them)", in the title, summary and body. Taiwan's Yam (1995) predates them. Also added "据赛尔网络的回顾" for 天网's 1997-10-29 date, and marked the 刘建国 view as 《中国教育网络》's paraphrase.
  - 48: the SMIC incorporation details are now credited to SMIC's STAR-market legal opinion.
  - 58: the founding date is credited to the prospectus; "计算所和风险投资机构的支持" is credited to the CAS feature.
  - 64:
    - The GSM Jiaxing and analogue-close dates are credited to 中国电信博物馆's chronology; the 3G licences to gov.cn/MIIT.
    - The 110号 transition clause is now exact: "2003 年 12 月 1 日前已进口、生产或已签订有效合同…进口、生产和销售".
    - SM4/WAPI is credited to 吕述望.
    - 小灵通 is rewritten (see flags); Xinhua and 吕述望 were added to the reading list.
  - 68:
    - NOI: from 1989 the CCF picked the IOI team from the youth programming contest and renamed it NOI (noi.cn).
    - The English ch68 pointer now lists what that chapter actually covers (Cisco, Microsoft, Apple, GNU/Linux, Amazon…).
- **Wen's flags:**
  1. **Huangkun.png: removed.** Commons has only {{PD-CN}}, with no US tag. Under the URAA, a 1963 Chinese publication was still protected in China on 1996-01-01, so US copyright was restored (to end-2058). The repo is US-hosted.
  2. **SPC WAPI judgment:** checked against the authoritative copy on the SPC IP Tribunal site (ipc.court.gov.cn/zh-cn/news/view-2906.html, 精品裁判, 2024-03-25). Both quotes and the XG1-2006 detail match. That copy is now the primary link; WIPO Lex is kept as a secondary link.
  3. **小灵通 / 1900–1920 MHz:** 工信部无〔2009〕11号 does not name 小灵通. The page now says so and links the band to 小灵通 via Xinhua (2009-02-14, via chinanews.com.cn; 记者刘菊花、冯晓芳), where an MIIT official answers questions on "涉及小灵通使用频段清频问题".
  4. **HK CDMA:** both dates are credited (CTM Sep 1995; OFCA Oct 1995). Kept.
  5. **Tsinghua 0.8 µm:** labelled as the developer's own recollection. Kept.
  6. **BCY:** CAS (119) and CCF ("从1971年起配置于109，111等国产机上") are cited exactly. Kept.
  7. **孙玉方 / 孙玉芳:** the paper byline (李军、孙玉方) is cited as printed; the page does not identify the two. Kept.
  8. **夏钟瑞:** as printed. zh-Hant 夏鍾瑞 is a best guess and needs Taiwan proofreading.
  9. **Phase labels:** the theme and layouts do not render `phase`, and i18n has no phase keys. #23 uses "N — 中文". Wen's renderings are kept: 物理与器件 / 物理與元件; 分布式系统、大数据与编排 / 分散式系統、大數據與編排; 密码与战时计算; 落地的愿景.
  10. **zh-Hant 光刻机:** Taiwan usage is 微影 for the technique and 曝光機 or 微影設備 for the tool. TSMC's Chinese annual report uses 微影技術 and 極紫外光曝光機; CNA and UDN (2026-09) use 微影技術, EUV曝光機 and 微影設備. The zh-Hant pages already follow this. Quotes and titles keep 光刻机/光刻機 verbatim.
- **zh-Hant scan (OpenCC errors):** no leaked Simplified characters in prose. The OpenCC error candidates were checked and fixed:
  - 余承东 (not 餘), 並發布 (not 併), and the PRC names 工业和信息化部 and 最高人民法院知识产权法庭 were fixed in the new text.
  - 68: 全國青少年程序設計競賽 restored as the proper name.
  - 05 checklist: File:黄昆.JPG restored (a Commons file name).
  - Checked and correct: 复/複 (復旦, 朱邦復, 分步重複), 里/裡 (馬里蘭, 里程碑), 干 (干涉, 干擾), 范克廉樓, 餘杭.
- **Still open:** native proofreading (mainland reader for zh-Hans, Taiwan reader for zh-Hant) of all 24 pages.

## Image licence notes (batch 2)

- **05-zh, File:Huangkun.png** (Huang Kun with Gan Zizhao, 《人民画报》 1963 no. 1): Commons {{PD-CN}} → Template:PD-China (a photo published 1963; 50-year term). **Removed at the fact-check gate:** PD in China only; US copyright restored under the URAA (see the gate section). The caption is kept as prose. Rejected: File:黄昆.JPG (indoor bust with background photo; China's freedom of panorama covers outdoor places only).
- **64-zh, File:3G_Mobile_Phones_fot_China_Mobile.jpg:** Yoshi Canopus, own work, 2010-02-02; {{self|GFDL|cc-by-sa-3.0,2.5,2.0,1.0}}; credited as **CC BY-SA 3.0** with an author link and a licence link in the caption.
- **68-zh, File:VTech_Laser_310_Color_Computer_and_cassette_deck.jpg:** Thomas Conté (Flickr tomconte/9368418675, 2013-07-24); **CC BY-SA 2.0** (FlickreviewR passed 2016-06-17); attribution and licence link in the caption.
- **68-zh, File:小霸王学习机_SB-486D_正面.jpg:** 七个点, own work, 2022-02-25; **CC BY-SA 4.0**; attribution and licence link in the caption.
- CC BY-SA reuse obligations: the attributions are in the figcaptions. If the site ever crops or edits these images, the derivative must stay CC BY-SA and say so.
- All other batch-2 pages: no image (no licence-verified candidate). Asset requests are listed in each page's checklist.

## Lab ideas for Reed

- **DTL NAND breadboard (05):** a Falstad preset of a diode-transistor NAND gate, the circuit type of the 1965 GT31.
- **Step-and-repeat exposure toy (48):** choose a wavelength (532 nm, 436/365 nm, 13.5 nm) and a lens NA, step a pattern across a wafer grid, and watch the smallest printable line change.
- **MAC-grid / on-chip buffer toy (58):** a weight-stationary grid multiplies matrices; a buffer-size slider shows DRAM traffic falling; plus a 16×16×16 cube view. Would also serve English 57/58.
- **Two-machine emulator (23):** a 4-instruction "150" program interpreted on a different toy CPU.
- **Hand compiler (27):** one arithmetic line expands into mini-cpu instructions, with a hand-written vs generated count.
- **Punched-card (打咭) widget (18):** punch one line onto an 80-column card, queue it, wait for the printout. Would also suit English 21.
- **BBS login-cap simulator (43):** set a concurrent-login cap, watch "too many users" refusals, upgrade the server; a telnet-style board list.
- **Segmentation + one-server-vs-N toy (44):** character vs word indexing, then a growing page count split across machines.
- **Who-may-do-what timeline (66):** toggle 1999 / 2019 / 2023 over R&D, production, sale, use and import; or a toy block cipher showing Kerckhoffs's principle (not SM4 itself).
- **Non-personalised feed switch (67):** the same catalogue ranked by profile vs unranked (PIPL Art. 24), plus two profiles shown different prices.
- **Spectrum allocation strip (64):** assign 1900–1920 MHz, 1880–1900 MHz and 2600 MHz to competing systems.
- **Apple II-style BASIC on a TV screen (68):** with a cassette-load delay, printing 热烈欢迎 and drawing the blocky robot.

## TODO cross-links after PR #23 merges

Batch-1 pages are not on this branch, so these links are plain text or absent for now:

- 05-zh → 03-zh-first-electronic-computers (turn the plain-text 109丙 mention into a relref); 47-zh-taiwan-semiconductors (end of the Hsinchu section).
- 48-zh → 47-zh-taiwan-semiconductors (SMIC–TSMC paragraph).
- 58-zh → 17-zh-supercomputers-cpus (Loongson mention); 63-zh-road-to-attention (end).
- 23-zh → 17-zh-supercomputers-cpus (NUDT Yinhe line); 26-zh-input-and-typesetting (朱邦复).
- 27-zh → 26-zh-input-and-typesetting (王选's move to typesetting; LCCD/CCDS).
- 18-zh → 17-zh-supercomputers-cpus (Data General NOVA → DJS-100); 26-zh-input-and-typesetting (IBM 5550).
- 43-zh → 39-zh-networks-1986-1994 (first-BBS dispute, CUBBS); 17-zh-supercomputers-cpus (曙光).
- 44-zh → 63-zh-road-to-attention (turn the plain-text 《从中文信息处理到注意力机制》 mention into a relref); 39-zh-networks-1986-1994 (CERNET).
- 64-zh → 64-zh-hanzi-encoding (the opening line's "本章另一篇中文页"); 02-zh-relays-switching (HJD04, 七国八制).
- 66-zh → 64-zh-hanzi-encoding (telegraph-code cipher books).
- 68-zh → 26-zh-input-and-typesetting (长城 0520, 汉卡).

## Open decisions

1. ~~Huangkun.png~~: resolved at the gate (removed).
2. **New phase labels** (accepted at the gate; the theme does not render `phase`): 物理与器件 / 物理與元件, 分布式系统、大数据与编排 (zh-Hant 大數據 or 巨量資料?), 密码与战时计算, 落地的愿景. Confirm, or set canonical renderings in i18n.
3. **光刻机 → 微影 / 曝光機** in zh-Hant prose: checked against Taiwan usage at the gate (TSMC, CNA, UDN). The other Taiwan-term choices listed above still need the Taiwan proofread.
4. **夏钟瑞** (source spelling) vs "夏忠瑞" (spelling in the brief and in writer C's report). The page follows the source; confirm.
5. **王頌贊 vs 王頌讚** (zh-Hant form of 王颂赞).
6. **67-zh zh-Hant title:** generic 個人資料保護法 (chosen) vs the literal 個人信息保護法.
7. **Scope:** 64-zh is a second zh page for chapter 64 (after batch-1's 64-zh-hanzi-encoding). Confirm that both stay, or move one elsewhere.
8. ~~SPC judgment quotations~~: resolved at the gate (checked against ipc.court.gov.cn).
9. ~~HK CDMA date~~: resolved at the gate (both credited; kept).
10. **CU40 quotation (43-zh):** verified live, but no local copy could be saved (captcha). Re-check at proofreading time.
11. **Traditional-script TW/HK quotations inside zh-Hans pages:** the same house style as batch 1; proofreaders should confirm.

## Build check

2026-09-26: a copy of the worktree outside the repo (no `.git`; theme hugo-book 45cbd2d; `HUGO_ENABLEGITINFO=false`) built with **Hugo v0.158.0 extended**: exit 0, no errors or warnings. zh-Hans and zh-Hant each rendered 228 pages, including all 12 posts. 53,182 internal links and assets across the zh-Hans and zh-Hant output were checked, with 0 broken; every relref between batch-2 pages resolves. No `.hugo_build.lock` was left in the repo.

After the fact-check gate fixes (2026-09-26), the worktree was rebuilt with **Hugo v0.158.0 extended**: no errors or warnings, and 228 pages each for zh-Hans and zh-Hant. A link check over 930 HTML files found 0 broken internal links or assets. The only exception is the `labs/.../` placeholder on the en/th/si/ta ch19 page, which predates this branch.

## Ready for native-reader proofreading

All 24 files have the status **draft, needs native proofread**. zh-Hans needs a native mainland Simplified Chinese reader. **zh-Hant needs a Taiwan proofreader** for Taiwan terminology, the 台/臺 policy, the VERIFY terms above, and names in Traditional. It also needs Hong Kong readers for OFCA/PCPD terms (64, 67) and 打咭 (18).

| File | Status |
|---|---|
| content.zh-hans/posts/05-zh-transistors-semiconductors.md | draft, needs native proofread |
| content.zh-hans/posts/48-zh-lithography-fabs.md | draft, needs native proofread |
| content.zh-hans/posts/58-zh-deep-learning-chips.md | draft, needs native proofread |
| content.zh-hans/posts/23-zh-operating-systems.md | draft, needs native proofread |
| content.zh-hans/posts/27-zh-languages-compilers.md | draft, needs native proofread |
| content.zh-hans/posts/18-zh-hong-kong-computing.md | draft, needs native proofread |
| content.zh-hans/posts/43-zh-bbs.md | draft, needs native proofread |
| content.zh-hans/posts/44-zh-chinese-search.md | draft, needs native proofread |
| content.zh-hans/posts/66-zh-commercial-crypto.md | draft, needs native proofread |
| content.zh-hans/posts/67-zh-privacy-law.md | draft, needs native proofread |
| content.zh-hans/posts/64-zh-mobile-standards.md | draft, needs native proofread |
| content.zh-hans/posts/68-zh-computer-craze.md | draft, needs native proofread |
| content.zh-hant/posts/05-zh-transistors-semiconductors.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/48-zh-lithography-fabs.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/58-zh-deep-learning-chips.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/23-zh-operating-systems.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/27-zh-languages-compilers.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/18-zh-hong-kong-computing.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/43-zh-bbs.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/44-zh-chinese-search.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/66-zh-commercial-crypto.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/67-zh-privacy-law.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/64-zh-mobile-standards.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/68-zh-computer-craze.md | draft, needs native proofread (Taiwan) |

## In progress

(none)

## Remaining

- Native proofreads (zh-Hans; zh-Hant by a Taiwan reader).
- Merge this log into PR #23's log after #23 lands; then add the cross-links listed above.
- The open decisions above.
- Reed: the lab ideas above (optional).
