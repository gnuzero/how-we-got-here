# Chinese (zh-Hans / zh-Hant) desk progress

- Desk: Nayana (Chinese desk, zh-desk-1)
- Started: 2026-09-26 (Asia/Bangkok)
- Branch: zh-desk-1, based on origin/zh-locales-policy (PR #13: zh-hans / zh-hant languages, section indexes, i18n). This batch adds post files only; no `_index.md`, `hugo.toml`, `i18n/`, `assets/`, `layouts/` or `static/` change.
- Scope (first batch): 11 **original** Simplified Chinese pages written from Chinese primary sources (not translations of the English chapters), plus zh-Hant (Taiwan-first) versions derived from them.
- Status of all 22 files: **draft, needs native proofread.** `draft: false` so they build and can be read on the preview; the front-matter status comment and ASSET CHECKLIST say "not final".
- Rules:
  - Every factual claim traces to a finding in the desk's research dossier (finding IDs in each page's `<!-- sources: … -->` comment). High / medium-high findings stated flat; medium findings attributed (据……回忆 / ……称); low / legend left out or shown as disputed. Conflicting dates are shown, not resolved silently.
  - Inline source pointers **出处：** / **出處：**; closing **延伸阅读 / 延伸閱讀** list in the original language with English glosses.
  - Western inventors (Jacquard, Babbage, Strowger, Vaswani et al.) appear briefly after the Chinese story, as context.
  - Images only with licence verified on Wikimedia Commons (API check 2026-09-26). Labs only where one genuinely fits; lab UI stays English.
  - zh-Hans uses mainland terminology (软件, 网络, 内存, 程序, 信息, 芯片, 字符); zh-Hant uses Taiwan terminology (軟體, 網路, 記憶體, 程式, 資訊, 晶片, 字元), except in names, titles and quotations.

## Conventions and desk decisions

### Phase field

The English posts and the existing th / ta / si posts all render the **English twin's phase** in the page language, formatted `N — label`; no locale uses custom labels. The zh pages follow the same convention (zh-Hant is the converted zh-Hans label):

| Page | English twin phase | zh-Hans | zh-Hant |
|---|---|---|---|
| 01-zh-counting-rods-abacus, 01-zh-drawloom-huaben, 01-zh-gears-and-calculators, 02-zh-relays-switching, 03-zh-first-electronic-computers | 1 — Foundations: Mechanical to Vacuum-Tube Computing | 1 — 基础：从机械计算到电子管计算 | 1 — 基礎：從機械計算到真空管計算 |
| 17-zh-supercomputers-cpus | 3 — Building a CPU & Its Architectures | 3 — 构建 CPU 及其架构 | 3 — 構建 CPU 及其架構 |
| 26-zh-input-and-typesetting | 4 — Software Foundations: OS, Languages & Real-Time Systems | 4 — 软件基础：操作系统、编程语言与实时系统 | 4 — 軟體基礎：作業系統、程式語言與即時系統 |
| 39-zh-networks-1986-1994 | 6 — Networking Evolution | 6 — 网络的演进 | 6 — 網路的演進 |
| 47-zh-taiwan-semiconductors | 8 — Process Nodes & Fabrication | 8 — 工艺节点与制造 | 8 — 製程節點與製造 |
| 63-zh-road-to-attention | 10 — Modern AI Hardware | 10 — 现代 AI 硬件 | 10 — 現代 AI 硬體 |
| 64-zh-hanzi-encoding | Governance / Internet Civics (no number) | 治理 / 互联网公民 | 治理 / 網際網路公民 |

Writer A's long labels and writer B's short labels ("4 — 软件", "10 — 注意力" …) were replaced. Page 64's special label "专题 — 谁来决定线上的规则" was replaced by the convention, so the 线上 ("online") ambiguity is gone. **If the desk ever reinstates a special label, write 电线上 / 電線上, not 线上.**

### zh-Hant decisions (2026-09-26)

- **台 vs 臺:** 台 in zh-Hant prose (common Taiwan usage, consistent with 台積電 / 台灣 in company names). 臺 kept only where a published title or official name uses it: 國立臺灣師範大學, 國立臺中教育大學, 臺灣學術網路 (TANet), 國立自然科學博物館《水運儀象臺》. Recorded in the desk glossary and s2twp checklist; `tools/zh_hant.py` applies it by default.
- **Quotations and 《》 titles:** plain `s2tw` (Taiwan character forms, no word swaps). Titles in 《》 keep names as published (《算法統宗》, 《計算機學報》, 《個人信息保護法》, 《中文信息處理大事記》).
- **alt / title / aria-label:** converted like prose.
- **视频:** 影片 for a clip, 視訊 for video technology or calls. (No 视频 occurs in this batch.)
- **Mainland names** keep mainland words in zh-Hant (中國互聯網協會, 中國科學院軟件研究所, 中國中文信息學會, 北大計算機所 …).
- **Quotes in the zh-Hans pages:** classical quotations were converted from the dossier's Traditional excerpts to Simplified; modern Taiwan and Hong Kong quotations (pages 26, 39, 64) are kept in their original Traditional script inside the Simplified page. Proofreaders: confirm this house style.
- **Hong Kong forms** in the glossary remain unverified against Hong Kong sources.

### Pipeline (reproducible)

zh-Hans master → `tools/zh_hant.py` (OpenCC `s2twp` + protections for URLs, shortcodes, code, English front-matter fields; plain `s2tw` for 《》, quotes and KEEP names; OVERRIDE tables; 台 policy) → scripted desk hand edits → Taiwan proofreader. The helper, glossary, checklist and per-chapter review records live in the desk workspace, outside the repo. Every URL, shortcode and protected front-matter field is byte-identical between the zh-Hans and zh-Hant files.

### VERIFY terms (no Taiwan authority found; chosen by the desk in context, not auto-replaced)

| zh-Hans | zh-Hant chosen | Occurrences | Why |
|---|---|---|---|
| 反汇编 | 反組譯 | 03-zh-first-electronic-computers L46; 17-zh-supercomputers-cpus L22 | pairs with 組譯器 / 組合語言; NAER only has 解組合 |
| 流片 | 投片 | 17-zh-supercomputers-cpus L38 | Taiwan industry usage for tape-out; 設計定案 is the alternative |
| 众核 | 眾核 (kept) | 17-zh-supercomputers-cpus L44 | "many-core" ≠ 多核心 (multicore) |
| 残差连接 | 殘差連接 | 63-zh-road-to-attention L44, L50 | a connection inside the network, not a network link (連線) |
| 大模型 | 大型語言模型 | 63-zh-road-to-attention L18 (×2), L26, L32 (heading), L38 | the text means LLMs; NAER has 大型語言模型 |
| 巨型机 | 巨型機 (kept) | 17-zh-supercomputers-cpus L28 (×3, one in quotes) | the paragraph discusses the PRC period term itself |

Line numbers refer to the zh-Hant files (the zh-Hans lines are the same).

## Done

Weights 1–11 are unique and equal `series_index`. Every page has: status comment, sources comment, **出处** labels, 延伸阅读, ASSET CHECKLIST (zh-Hant marked derived 2026-09-26, Taiwan proofread pending). All internal links resolve in the test build.

### 1. 01-zh-counting-rods-abacus (weight 1)

- Files: `content.zh-hans/posts/01-zh-counting-rods-abacus.md`, `content.zh-hant/posts/01-zh-counting-rods-abacus.md`
- Title: 算筹与算盘：数放在手里，算法记在口诀里 / 算籌與算盤：數放在手裡，演算法記在口訣裡
- Feeds English: 01 (take-pebbles, mechanical), 03 (abacus myth)
- Sources: F01-01…F01-11, F11-01, F36-01…F36-04. Main primary sources: 《孙子算经》; 《汉书·律历志》; 《数术记遗》 and the 《四库全书总目》 提要 (forgery judgement); 程大位《算法统宗》; China intangible-heritage listing (2008, Ⅹ-119); UNESCO 2013 inscription; 徐祖哲、司宏伟 2025 (《中国科学院院刊》).
- Omitted / unverified: Qianyang 1971 rods' "first excavated" claim and sizes (sources disagree); UNESCO decision date shown as 12-04 vs 12-05. One 延伸阅读 link (李培业) points to an abstract-only aggregator page; replace with a journal URL if one is found.
- Image: Western Han lead counting rods, Gary Todd, CC0 (Commons). Lab: pebble-trays.
- zh-Hant hand edits: 3 (計算機→電腦 ×2; classical 十四種算法 kept as 算法). 演算法 kept in title/summary/heading on purpose (the verse rules framed as an algorithm).

### 2. 01-zh-drawloom-huaben (weight 2)

- Files: `content.zh-hans/posts/01-zh-drawloom-huaben.md`, `content.zh-hant/posts/01-zh-drawloom-huaben.md`
- Title: 花本：程序第一次和机器分开 / 花本：程式第一次和機器分開
- Feeds English: 01b Jacquard loom, 01-take-silk-cards
- Sources: F31-01…F31-10. Main primary sources: 宋应星《天工开物》(1637) 结花本 / 花机式; 成都老官山汉墓 loom models (中国丝绸博物馆 reconstruction, 龙博 2021); 赵丰; 中国丝绸博物馆《神机妙算》exhibition; 南京云锦 intangible-heritage records; UNESCO yunjin inscription.
- Omitted / unverified: Jacquard's 1804 date rests on a researcher note only (the Silk Museum exhibition text gives both 1817 and 1799); medium findings attributed (赵丰's 6th-century argument, 挑花结本 description, 1910 铁机 arrival).
- Image: 《天工开物》drawloom woodcut, PD-old; the Commons source scan is only 500×353, so `width="500"`.
- zh-Hant hand edits: 3 (電腦 ×2; 圖像證據).

### 3. 01-zh-gears-and-calculators (weight 3)

- Files: `content.zh-hans/posts/01-zh-gears-and-calculators.md`, `content.zh-hant/posts/01-zh-gears-and-calculators.md`
- Title: 齿轮会数数：从记里鼓车到“较数器” / 齒輪會數數：從記里鼓車到“較數器”
- Feeds English: 01a Babbage engines (digit wheels, carry), 01c / take-water-wheel (Su Song), south-pointing chariot correction
- Sources: F32-01…F32-06, F30-01…F30-05, F30-07, F33-01…F33-03. Main primary sources: 《宋史·舆服一》(1027 odometer cart, south-pointing chariots); 苏颂《新仪象法要》; Palace Museum collection records for the Qing hand-cranked calculators; 《御制数理精蕴》; 《六合丛谈》(1857–58, arithmometer and difference engine “较数器”).
- Mechanical fix in this pass: the page had no **出处** labels; four were added, citing sources already listed on the page.
- Omitted / unverified: Su Song's completion date 1088 (only the 1086 edict is given); 《六合丛谈》 vol. 2 no. 2 dated 1858 vs 1859 (flagged in text); the Zhou Qian dial-label account shown against the museum database.
- Image: Su Song clock tower diagram, Commons, tagged PD-old-70-1923. **Licence note:** the file is a 2007 photograph of a printed book page; public-domain status rests on the underlying diagram (PD-Art reasoning for a faithful 2D reproduction). Flag for Lucas if a stricter policy applies. Lab: difference-engine.
- zh-Hant hand edits: 0 (8 changed spots came from helper table fixes: 帳, 轉一周 ×3, 自製, 報導, 卷上 ×2).

### 4. 02-zh-relays-switching (weight 4)

- Files: `content.zh-hans/posts/02-zh-relays-switching.md`, `content.zh-hant/posts/02-zh-relays-switching.md`
- Title: 继电器与交换机：上海电话局里的“计算机” / 繼電器與交換機：上海電話局裡的“電腦”
- Feeds English: 02 relays; 02 → 03 connective tissue; 64 (七国八制, COCOM)
- Sources: F35-01…F35-05, F15-01…F15-06, F02-08. Main primary sources: *The L. M. Ericsson Review* (1924, "The Shanghai Automatic Exchange"); 中国电信博物馆; 澎湃新闻《信息史︱电话号码知几位》; 新华社 on HJD04 (1991); 《中国科学报》 on the 103.
- Omitted / unverified: HJD04 project leader not named; the Ericsson "register system" type is an inference (hedged). Conflicts shown: Ericsson opening March vs May 1924; Wusong crossbar 1959-12-16 vs 1960-01.
- **QA note (factual, not changed):** "寄发器寻线器" / "寄发器" are in quotation marks as if quoting the 1924 Ericsson Review, but they are the researcher's Chinese renderings (the Review is in English), and the page uses the standard 记发器 elsewhere. Suggest dropping the quotation marks or glossing them as renderings.
- zh-Hant hand edits: 4 (title “電腦”; 第一台電腦; 用戶; 進口設備).

### 5. 03-zh-first-electronic-computers (weight 5)

- Files: `content.zh-hans/posts/03-zh-first-electronic-computers.md`, `content.zh-hant/posts/03-zh-first-electronic-computers.md`
- Title: 电子管与晶体管：中国第一批计算机，和算盘的真实角色 / 真空管與電晶體：中國第一批電腦，和算盤的真實角色
- Feeds English: 03 vacuum-tube era (abacus-bomb correction), 04/06 transistor, 18/21 minicomputers
- Sources: F02-01…F02-07, F02-10…F02-16, F11-01, F11-02, F11-05, F11-07, F11-09, F11-10, F14-01…F14-05, F34-01…F34-03. Main primary sources: 徐祖哲、司宏伟 2025 (《中国科学院院刊》); ICT 历史沿革; 《中国科学报》 on the 1956 plan and the 103; USTC archive on the first general-purpose computer; CCF 441-B documents; National Museum record of Deng Jiaxian's team's hand-cranked calculator (Shanghai 201, no. 34695); 吕文超 and 林行良 (DJS-100, 2018).
- Omitted / unverified: 103 speed / word-length / production count conflicts; the 1961 artificial-viscosity check (medium). Conflicts shown: plan name 1956–1967 vs 1956–1965; 441-B vs 109乙 as first transistor computer; H-bomb on the 119 vs J-501; three versions of the "nine computations".
- Overlap: the DJS-100 / NOVA reverse-engineering story also appears on page 17; consider trimming one.
- VERIFY: 反汇编 → 反組譯 L46.
- zh-Hant hand edits: 13 (電腦 / 數位電腦; 調校; 反組譯; 周邊設備管理程式 …).

### 6. 64-zh-hanzi-encoding (weight 6)

- Files: `content.zh-hans/posts/64-zh-hanzi-encoding.md`, `content.zh-hant/posts/64-zh-hanzi-encoding.md`
- Title: 汉字上线：从四位电码到 GB 18030 / 漢字上線：從四位電碼到 GB 18030
- Feeds English: 64 who-decides-the-wire (Big5 correction, GB 18030 framing), 38/39 telegraph hooks, 66 wartime crypto
- Sources: F20-01…F20-05, F20-07…F20-09, F21-01, F21-02, F21-04, F21-06, F21-08…F21-14, F05-01…F05-03, F05-09. Main primary sources: 张文洋 2018 (《近代史研究》, telegraph code book); 1879 London telegraph conference rule; 《人民日报》1969; 中研院《謝清俊訪談》(2001); 全字庫 / CNS 11643; openstd.samr.gov.cn (GB 2312-1980, GB 18030); 林宁 2001; 华视 1984-03-30 report on the 五大软体专案; HKSAR 香港增补字符集; 国办发〔2001〕56号.
- Omitted / unverified: PRC 标准电码本 edition (F20-06), Taiwan's 電信碼, GBK counts, RFC / IDN material. Conflicts shown: 《电报新书》 1872 vs 1873; 6,391 vs ~6,800–6,900 characters; GB 2312 announcement date vs official record.
- zh-Hant hand edits: 4 (史丹佛; 電腦; 發布; 香港增補字符集 kept as the official name).

### 7. 26-zh-input-and-typesetting (weight 7)

- Files: `content.zh-hans/posts/26-zh-input-and-typesetting.md`, `content.zh-hant/posts/26-zh-input-and-typesetting.md`
- Title: 把汉字敲进机器：打字机、输入法与激光照排 / 把漢字敲進機器：打字機、輸入法與雷射照排
- Feeds English: 26 (and 01/32/52/64/68 hooks: Cangjie, Lenovo's name, 0520C-H, Wang Xuan)
- Sources: F23-01…F23-04, F22-02…F22-05, F22-07…F22-10, F22-12, F13-03, F12-02, F12-04…F12-08, F03-01…F03-03, F03-05, F03-07, F03-14. Main primary sources: 周厚坤 (结绳志 2022); Commercial Press interview with 舒冲慧; Tsinghua museum 双鸽牌 typewriter (1984); 朱邦复 memoirs (《我与中文电脑的孽缘》, 《智慧之旅》); 龚滨良 1985; CIPS 大事记; CCF on 0520C-H and 联想式汉卡; 北大王选计算机研究所; 陈嘉庚科学奖 (王选, 1990).
- Omitted / unverified: "万码奔腾" thousands figure (low-medium, phrase only). Conflict: Wubi appraisal 28 vs 29 August 1983; 748 project August vs October 1974. Medium findings attributed (Chu's memoir, Wang Yongmin, MingKwai press release, CCDOS).
- zh-Hant hand edits: 1 (舒沖慧 — the Traditional form of this name is unverified; Taiwan proofreader to confirm).

### 8. 39-zh-networks-1986-1994 (weight 8)

- Files: `content.zh-hans/posts/39-zh-networks-1986-1994.md`, `content.zh-hant/posts/39-zh-networks-1986-1994.md`
- Title: 越过长城：中文世界接入网络（1986—1995） / 越過長城：中文世界接入網路（1986—1995）
- Feeds English: 39 / 41 (1986 email, 1994 connection), 43 (BBS), 64 (.cn)
- Sources: F24-01…F24-06, F24-08…F24-10, F26-01…F26-04. Main primary sources: CAS Archives (潘亚男、孔祥盛 2024) on the 1986-08-25 email via CERN; 中国互联网大事记 (中国互联网协会 / CNNIC); CNNIC first statistical report (1997); 台大計資中心 TANet 30-year review; TANet 2007 paper; 《中大校友》1999 and 黄力信 (CUHK); 水木社区 history post; 批踢踢实业坊沿革. Lab: vm-terminal.
- Omitted / unverified: F24-07 (钱华林's map recollection, medium). Conflicts shown: 1987 email 09-14 (test) vs 09-20 (success); .cn registration 11-26 vs 11-28 1990. "77th country" attributed to Chinese sources.
- **QA note (factual, not changed):** "越过长城，走向世界" is presented as the usual Chinese rendering (中文常译作), but the dossier has only the English text of the 1987 email. No Chinese source supports this wording; confirm or cut the parenthesis.
- zh-Hant hand edits: 7 (簽任何文件; 運作 ×2; 連接 108 所大學; 大學這邊; 僅限校內連線; 鍵入).

### 9. 47-zh-taiwan-semiconductors (weight 9)

- Files: `content.zh-hans/posts/47-zh-taiwan-semiconductors.md`, `content.zh-hant/posts/47-zh-taiwan-semiconductors.md`
- Title: 从豆浆店到晶圆代工：台湾半导体之路 / 從豆漿店到晶圓代工：台灣半導體之路
- Feeds English: 47 (and 48 / 68)
- Sources: F25-01…F25-11. Main primary sources: 潘文渊文教基金会 / ITRI chronology; ITRI 50-year semiconductor history; 中央社 2019; 新竹科学园区 20-year chronicle; TSMC 2007 annual report; 王百禄《学李国鼎做事》; 台湾事实查核中心 report #3514.
- Mechanical fix in this pass: "同年 12 月 15 日" (read as 1985) → "1980 年 12 月 15 日" for the opening of Hsinchu Science Park, matching finding F25 and the reading copy.
- Omitted / unverified: ITRI founding year (no dossier finding). Conflicts shown: Philips 27.6% vs 27.5%; VLSI project 1983 vs 1984. ITRI's 70% vs RCA 50% yield is ITRI's own claim (attributed).
- zh-Hant hand edits: 1 (合約). Taiwan terms (積體電路, 工研院, 良率, 晶圓代工) are used on purpose on the zh-Hans page.

### 10. 17-zh-supercomputers-cpus (weight 10)

- Files: `content.zh-hans/posts/17-zh-supercomputers-cpus.md`, `content.zh-hant/posts/17-zh-supercomputers-cpus.md`
- Title: 规模：从银河到太湖之光 / 規模：從銀河到太湖之光
- Feeds English: 17 / 37 (Dawning-1), 18 / 11 (DJS-130 = NOVA ISA), 20 (Loongson)
- Sources: F14-01…F14-05, F04-01…F04-05, F04-07…F04-14. Main primary sources: 吕文超 and 林行良 (2018); 国防科技大学 on 银河-I (2019); CCF 中国计算机历史记忆 (银河-1, 曙光1号); ICT 历史沿革; 《人民日报》2019-06-17 on the Loongson team; 新华网 on LoongArch; MOST on 申威 (2016); TOP500 lists 2010–2018.
- Omitted / unverified: Tianhe-1A CPU+GPU configuration (only TOP500 facts used); Dawning-1 Silicon Valley phase is single-source (flagged in text).
- VERIFY: 反汇编 → 反組譯 L22; 流片 → 投片 L38; 众核 → 眾核 L44; 巨型机 → 巨型機 L28 (×3).
- zh-Hant hand edits: 7 (電腦 ×2; 反組譯; 投片; 發表; 發布; 攻堅).

### 11. 63-zh-road-to-attention (weight 11)

- Files: `content.zh-hans/posts/63-zh-road-to-attention.md`, `content.zh-hant/posts/63-zh-road-to-attention.md`
- Title: 从中文信息处理到注意力机制 / 從中文信息處理到注意力機制
- Feeds English: 63 attention (MT line, segmentation, residual connection, RoPE), 43/44 (Tianwang → Baidu; web archive), 27 (Wu Wenjun)
- Sources: F13-01…F13-03, F13-06, F06-01…F06-03, F06-07…F06-09, F29-02…F29-06. Main primary sources: CASS 语言研究所 on 刘涌泉; CIPS 大事记; 吴文俊《我的机器证明之路》; 赛尔网络 / 《中国教育网络》 on 天网 and Baidu; He et al. 2015 (ResNet); 苏剑林, 科学空间 2021-03-23 (RoPE) and Su et al. arXiv 2104.09864; Touvron et al. (LLaMA); Vaswani et al. 2017.
- Omitted / unverified: China Web InfoMall "30+ institutions" is single-source (attributed to CERNET). Conflict shown: 刘建国 joined Baidu 1999 vs 2000.
- **QA note (tone, not changed):** the line saying the ResNet authors "都是中国人" is sensitive wording; the proofreader should check it reads as fact, not as a national claim (the dossier supports the MSRA joint-PhD detail).
- VERIFY: 残差连接 → 殘差連接 L44, L50; 大模型 → 大型語言模型 L18 ×2, L26, L32, L38. 中文信息處理 kept in the title (CIPS field name).
- zh-Hant hand edits: 10 (大型語言模型 ×5; 殘差連接 ×2; 電腦; 先學組合語言; 1992 年發布).

### zh-Hant review counts

| Page | Hand edits | Changed spots vs first-pass helper output (incl. helper-table fixes) |
|---|---|---|
| 01-zh-counting-rods-abacus | 3 | 14 |
| 01-zh-drawloom-huaben | 3 | 5 |
| 01-zh-gears-and-calculators | 0 | 8 |
| 02-zh-relays-switching | 4 | 6 |
| 03-zh-first-electronic-computers | 13 | 15 |
| 64-zh-hanzi-encoding | 4 | 18 |
| 26-zh-input-and-typesetting | 1 | 3 |
| 39-zh-networks-1986-1994 | 7 | 27 |
| 47-zh-taiwan-semiconductors | 1 | 8 |
| 17-zh-supercomputers-cpus | 7 | 15 |
| 63-zh-road-to-attention | 10 | 15 |
| **Total** | **53** | **134** |

Terms flagged for the Taiwan proofreader: 中文信息處理 (page 63 title), 斯坦伯格 (Steinberger), 宣貫 (PRC term, page 64), 舒沖慧, the published form of the TANet title (臺灣學術網路), 佔, 構建 in the phase label (建構?), 演算法 in page 1's title.

## Image licence notes

- **Counting rods (page 1):** "Western Han Lead Counting Rods", Gary Todd, Wikimedia Commons, CC0 1.0.
- **Drawloom woodcut (page 2):** 《天工开物》 drawloom illustration, Wikimedia Commons, PD-old. The Commons scan is only 500×353 px, so the figure is set to `width="500"`; replace with a higher-resolution PD scan if one is found.
- **Su Song clock tower (page 3):** Wikimedia Commons, tagged PD-old-70-1923. The file is a 2007 photograph of a printed book page; the PD claim relies on PD-Art reasoning (a faithful reproduction of a public-domain 2D work adds no new copyright). Flag for Lucas if the book requires a stricter policy.
- Pages 4–11: no image (no licence-verified candidate in the dossier).

## Lab ideas for Reed

- **花本 knot matrix (page 2):** a grid where each row is a weft pick and each column a pattern heddle / warp group; the reader knots cells (on/off), then "weaves" row by row and watches the pattern appear. Shows program-separate-from-machine; could export the grid as a punched-card view to link to Jacquard.
- **Crossbar register / marker (page 4):** dial a number; a register stores the digits, then a marker picks a free path through a small crossbar matrix and closes the crosspoints. Contrast with step-by-step switching where each dial pulse drives a selector directly.
- **Telegraph code to bytes (page 6):** type a character → four-digit Chinese telegraph code (e.g. 米 4149) → the 1870s digit-addition cipher (4149 + 5555 → 9694) → GB 2312 / Big5 / GB 18030 / UTF-8 bytes side by side.
- **RoPE rotation widget (page 11, optional):** rotate query and key vectors by position and show that their dot product depends only on the relative offset.

## Ready for native-reader proofreading

All 22 files have the status **draft, needs native proofread**. zh-Hans needs a native mainland Simplified Chinese reader; **zh-Hant needs a Taiwan proofreader** (Taiwan terminology, 台/臺 policy, the VERIFY terms above, names in Traditional).

| File | Status |
|---|---|
| content.zh-hans/posts/01-zh-counting-rods-abacus.md | draft, needs native proofread |
| content.zh-hans/posts/01-zh-drawloom-huaben.md | draft, needs native proofread |
| content.zh-hans/posts/01-zh-gears-and-calculators.md | draft, needs native proofread |
| content.zh-hans/posts/02-zh-relays-switching.md | draft, needs native proofread |
| content.zh-hans/posts/03-zh-first-electronic-computers.md | draft, needs native proofread |
| content.zh-hans/posts/64-zh-hanzi-encoding.md | draft, needs native proofread |
| content.zh-hans/posts/26-zh-input-and-typesetting.md | draft, needs native proofread |
| content.zh-hans/posts/39-zh-networks-1986-1994.md | draft, needs native proofread |
| content.zh-hans/posts/47-zh-taiwan-semiconductors.md | draft, needs native proofread |
| content.zh-hans/posts/17-zh-supercomputers-cpus.md | draft, needs native proofread |
| content.zh-hans/posts/63-zh-road-to-attention.md | draft, needs native proofread |
| content.zh-hant/posts/01-zh-counting-rods-abacus.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/01-zh-drawloom-huaben.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/01-zh-gears-and-calculators.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/02-zh-relays-switching.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/03-zh-first-electronic-computers.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/64-zh-hanzi-encoding.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/26-zh-input-and-typesetting.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/39-zh-networks-1986-1994.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/47-zh-taiwan-semiconductors.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/17-zh-supercomputers-cpus.md | draft, needs native proofread (Taiwan) |
| content.zh-hant/posts/63-zh-road-to-attention.md | draft, needs native proofread (Taiwan) |

## Build check

2026-09-26: a copy of the branch outside the repo (theme hugo-book at the pinned commit 45cbd2d, Git info disabled because the copy has no `.git`) built with Hugo v0.165.0 extended with no errors or warnings. zh-Hans and zh-Hant each rendered 191 pages including all 11 posts; every internal link on the 22 pages resolves.

## In progress

(none)

## Remaining

- Native proofreads (zh-Hans; zh-Hant by a Taiwan reader).
- Resolve or keep the flagged date conflicts after proofreading.
- Lucas: image-policy call on the Su Song PD-Art figure.
- Reed: lab ideas above (optional).
