# Chinese (zh-Hans / zh-Hant) desk progress

Combined log: batch 1 (PR #23 / zh-desk-1) below, then batch 2 (PR #35 / zh-desk-2). Conflict on merge resolved 2026-11-05 by keeping both logs.

---

## Batch 1 (PR #23)

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
- Feeds English: ch 4 (04-jacquard-loom) Jacquard loom, 02-take-silk-cards
- Sources: F31-01…F31-10. Main primary sources: 宋应星《天工开物》(1637) 结花本 / 花机式; 成都老官山汉墓 loom models (中国丝绸博物馆 reconstruction, 龙博 2021); 赵丰; 中国丝绸博物馆《神机妙算》exhibition; 南京云锦 intangible-heritage records; UNESCO yunjin inscription.
- Omitted / unverified: Jacquard date now sourced to Encyclopaedia Britannica (1801 demonstration; 1804–05 punched-card attachment; 1806 public property), fact-check gate 2026-09-26; the Silk Museum exhibition text still gives both 1817 and 1799 (shown as contradictory); medium findings attributed (赵丰's 6th-century argument, 挑花结本 description, 1910 铁机 arrival).
- Image: 《天工开物》drawloom woodcut, PD-old; the Commons source scan is only 500×353, so `width="500"`.
- zh-Hant hand edits: 3 (電腦 ×2; 圖像證據).

### 3. 01-zh-gears-and-calculators (weight 3)

- Files: `content.zh-hans/posts/01-zh-gears-and-calculators.md`, `content.zh-hant/posts/01-zh-gears-and-calculators.md`
- Title: 齿轮会数数：从记里鼓车到“较数器” / 齒輪會數數：從記里鼓車到“較數器”
- Feeds English: ch 3 (03-babbage-engines) Babbage engines (digit wheels, carry), ch 5 (05-why-mechanical-matters) / take-water-wheel (Su Song), south-pointing chariot correction
- Sources: F32-01…F32-06, F30-01…F30-05, F30-07, F33-01…F33-03. Main primary sources: 《宋史·舆服一》(1027 odometer cart, south-pointing chariots); 苏颂《新仪象法要》; Palace Museum collection records for the Qing hand-cranked calculators; 《御制数理精蕴》; 《六合丛谈》(1857–58, arithmometer and difference engine “较数器”).
- Mechanical fix in this pass: the page had no **出处** labels; four were added, citing sources already listed on the page.
- Omitted / unverified: Su Song's completion date 1088 (only the 1086 edict is given); 《六合丛谈》 vol. 2 no. 2 dated 1858 vs 1859 (flagged in text); the Zhou Qian dial-label account shown against the museum database.
- Image: Su Song clock tower diagram, Commons, tagged PD-old-70-1923. **Licence resolved (fact-check gate 2026-09-26):** the file (a desmeared copy of File:Clock_Tower_from_Su_Song's_Book.JPG, {{PD-art|PD-old}}) is a 2007 photo of p. 451 of Needham, *Science and Civilisation in China* vol. 4 pt. 2 (1965), which reproduces the woodcut from Su Song's 《新仪象法要》; the same woodcut is in the 1844 《守山阁丛书》 edition scanned on Commons (卷下 plate, same labels 天池 / 平水壶 / 退水壶 / 枢臼). The underlying work is centuries old and the photo is a faithful 2D reproduction, so PD is established; image kept, caption now states the provenance. Optional: swap in the 守山阁 scan. Lab: difference-engine.
- zh-Hant hand edits: 0 (8 changed spots came from helper table fixes: 帳, 轉一周 ×3, 自製, 報導, 卷上 ×2).

### 4. 02-zh-relays-switching (weight 4)

- Files: `content.zh-hans/posts/02-zh-relays-switching.md`, `content.zh-hant/posts/02-zh-relays-switching.md`
- Title: 继电器与交换机：上海电话局里的“计算机” / 繼電器與交換機：上海電話局裡的“電腦”
- Feeds English: 02 relays; 02 → 03 connective tissue; 64 (七国八制, COCOM)
- Sources: F35-01…F35-05, F15-01…F15-06, F02-08. Main primary sources: *The L. M. Ericsson Review* (1924, "The Shanghai Automatic Exchange"); 中国电信博物馆; 澎湃新闻《信息史︱电话号码知几位》; 新华社 on HJD04 (1991); 《中国科学报》 on the 103.
- Omitted / unverified: HJD04 project leader not named; the Ericsson "register system" type is an inference (hedged). Conflicts shown: Ericsson opening March vs May 1924; Wusong crossbar 1959-12-16 vs 1960-01.
- **QA note (resolved 2026-09-26):** the quotation framing is gone; the page now names the Ericsson Review's English terms (register finder, register) and glosses them as the book's renderings 记发器寻线器 / 记发器.
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
- **QA note (resolved 2026-09-26):** Chinese sources exist. 国家科技传播中心 (2021-08-30) says 措恩 typed the English line and 李澄炯 then translated it as “越过长城，走向世界”; 中国互联网协会, CNNIC (via 中新网 2003) and the CAS Archives article use the same wording. The page now attributes the translation instead of calling it “usual”. .cn is now presented as a sequence (26 Nov application, 28 Nov completion), not a conflict.
- zh-Hant hand edits: 7 (簽任何文件; 運作 ×2; 連接 108 所大學; 大學這邊; 僅限校內連線; 鍵入).

### 9. 47-zh-taiwan-semiconductors (weight 9)

- Files: `content.zh-hans/posts/47-zh-taiwan-semiconductors.md`, `content.zh-hant/posts/47-zh-taiwan-semiconductors.md`
- Title: 从豆浆店到晶圆代工：台湾半导体之路 / 從豆漿店到晶圓代工：台灣半導體之路
- Feeds English: 47 (and 48 / 68)
- Sources: F25-01…F25-11. Main primary sources: 潘文渊文教基金会 / ITRI chronology; ITRI 50-year semiconductor history; 中央社 2019; 新竹科学园区 20-year chronicle; TSMC 2007 annual report; 王百禄《学李国鼎做事》; 台湾事实查核中心 report #3514.
- Mechanical fix in this pass: "同年 12 月 15 日" (read as 1985) → "1980 年 12 月 15 日" for the opening of Hsinchu Science Park, matching finding F25 and the reading copy.
- Omitted / unverified: ITRI founding year (no dossier finding). Conflicts shown: VLSI project start 1982 (Pan chronology) vs 1983 (ITRI 50th timeline) vs 1984 (ITRI 50th narrative). The Philips 27.5% figure and the “party-owned” label for 中央投资 were removed (no source found; TODO below). ITRI's 70% vs RCA 50% yield is ITRI's own claim (attributed).
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
- **QA note (resolved 2026-09-26):** the “都是中国人” wording was replaced by the institutional fact: all four authors were at Microsoft Research Asia in Beijing (孙剑 and 何恺明 in the Visual Computing Group; 张祥雨 and 任少卿 joint PhD students), per MSRA's own report.
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

Terms flagged for the Taiwan proofreader: 中文信息處理 (page 63 title), 協定 for protocol (page 39, new in the fact-check pass), 舒沖慧, the published form of the TANet title (臺灣學術網路), 佔, 構建 in the phase label (建構?), 演算法 in page 1's title.

## Image licence notes

- **Counting rods (page 1):** "Western Han Lead Counting Rods", Gary Todd, Wikimedia Commons, CC0 1.0.
- **Drawloom woodcut (page 2):** 《天工开物》 drawloom illustration, Wikimedia Commons, PD-old. The Commons scan is only 500×353 px, so the figure is set to `width="500"`; replace with a higher-resolution PD scan if one is found.
- **Su Song clock tower (page 3):** Wikimedia Commons, tagged PD-old-70-1923. Provenance checked 2026-09-26: a 2007 photo of p. 451 of Needham, *Science and Civilisation in China* vol. 4 pt. 2 (1965), reproducing the 《新仪象法要》 woodcut (same plate in the 1844 《守山阁丛书》 edition on Commons). Underlying work centuries old; faithful 2D reproduction, so PD is established. Kept.
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

## Fact-check gate (2026-09-26, Asia/Bangkok)

Every factual claim, date, number and quotation on the 11 zh-Hans pages was checked against the cited sources (sources opened; hosts that block curl were read through a web fetch). Fixes were made in zh-Hans and mirrored line for line to zh-Hant (OpenCC via `tools/zh_hant.py`, desk hand edits re-applied, then a manual Taiwan-term pass).

### Wen's seven flags

1. **p4 寄发器(寻线器) quotation:** the quotation framing was removed. The page now gives the Review's English terms and glosses them (本书译作记发器寻线器、记发器).
2. **p8 越过长城，走向世界:** sources found (国家科技传播中心: 李澄炯 translated the line; 中国互联网协会, CNNIC / 中新网 2003 and the CAS Archives use it). “常译作” replaced by an attributed statement.
3. **p2 Jacquard 1804:** replaced by Encyclopaedia Britannica: 1801 demonstration, 1804–05 punched-card attachment, 1806 declared public property. Britannica was added to 延伸阅读.
4. **p11 ResNet “都是中国人”:** replaced by the MSRA institutional fact (all four at MSRA Beijing; two joint PhD students).
5. **DJS-100 on p5 and p10:** the full account stays on p10 (17-zh-supercomputers-cpus, the architecture and compatibility page) and absorbs p5's Tsinghua detail (服务性程序、BASIC、汇编语言、外设管理程序; “原来NOVA的软件中是没有的”). p5 now has one sentence plus a relref to p10.
6. **Su Song image:** PD established (see page 3 and the image notes). Kept; caption states the provenance.
7. **Conflicting dates:** every conflict is shown as disputed with its sources: 六合丛谈 1858 / 1859 (summary and heading now say 一说 1859 年); 电报新书 1872 (张文洋) / 1873 (中文维基百科); 1987 email 14 / 20 Sep; Wubi 28 / 29 Aug 1983; 748 Aug / Oct 1974; 天龙 1980-09-28 / end-1980 (two Chu memoirs); VLSI 1982 / 1983 / 1984; 刘建国 1999 / 2000; Ericsson March / May 1924; Wusong 1959-12-16 / 1960-01; UNESCO 12-04 / 12-05. .cn (26 / 28 Nov 1990) was **not** a real conflict (application, then completion) and is now a sequence.

### Other fixes (zh-Hans; mirrored in zh-Hant)

- p1: dead 维基文库 link 孫子算經/卷上 (404) → 孫子算經.
- p3: odometer described accurately (中平轮 drum per 里, 上平轮 bell per 10 里; a two-stage decimal count with 10:1 carry, signalled by drum and bell rather than a displayed total); 新仪象法要 quote reassigned (“所以节受水壶之升降也” = 枢衡/枢权; 天锁 “所以持正枢轮也”); 卷下 link added; “最早的中文名字” attributed to 姚远等.
- p4: HJD04 quotation corrected to the exact 新华社 wording (“…长期垄断中国程控交换机市场格局的终结”); unsourced “英文资料常以…” softened.
- p5: 320 机 satellite claim attributed to 徐祖哲、司宏伟 (not 电子十五所所志); 张劲夫 sentence re-attributed as the CAS article's own conclusion; JSY-20 provenance per the Tsinghua museum collection page (1964, 上海计算机打字机厂, via 221 厂 → 青海大学, donated 2018) and mechanism per Rechnerlexikon (both added to 延伸阅读); nine-computation durations re-attributed (旗帜网 nine months; 国家博物馆 gives no duration).
- p6: 1873 attributed to 中文维基百科 (not “英文资料”, which say 1872); IBM 5550 sentence corrected; GB 18030-2022 “联合宣贯” → 联合召开发布会 (MOE source wording); unsourced “英文报道常…” removed; Big5 “five companies” attributed to English Wikipedia.
- p7: “类似 Monotype” → 英文排字机 (source wording); 通俗打字盘 attributed to 1917《青声周刊》 (六百余字); Chu's price drop placed after he gave up the 汉卡 rights and licensed five small firms; 天龙 date shown as disputed between his two memoirs; 014 汉卡 “first” claim attributed to CCF.
- p8: 1986 email details split by source (CAS Archives: date, Geneva time, 吴为民, 710 所, IBM-PC, satellite, billing; 中国互联网大事记: Beijing time, VXCRNA / 王淑琴 account, Steinberger); dropped the unsourced “Jack” first name; 李澄炯 / 王运丰 roles per 国家科技传播中心 (王运丰赞同, not 指导), with 阮任成's differing memory noted; 14 Sep failure causes shown as two accounts; Zorn quote now the Chinese text as quoted by 国家科技传播中心; NCFC protocol and router figures corrected (1992 年底…共安装运行 30 台); CAS Archives reading-list entry corrected (title; published 2024-04-22; the 2024-04-19 date was unverified).
- p9: breakfast “决定” → 提出建议; “三方记载一致” and two unsourced “English sources say…” sentences removed; first IC wording and yield (营运第六个月良率七成 vs RCA 五成) per ITRI; 王永庆 account per Chang (declined, then 台塑 took 5% after 俞国华 phoned); Philips 27.5% and “党营” removed.
- p10: DJS account extended (flag 5); unsourced “English sources…” asides removed; LoongArch “2020 年推出、2021 年 4 月正式发布” (新华网).
- p11: RoPE sentence softened (no claim about what English readers notice).

### Remaining unverified items / TODOs

- **TODO p9:** the Philips 27.5% figure (dropped; no source found). If a source turns up, show it against TFC's 27.6%.
- **TODO p9:** whether 中央投资 should be described as KMT party-owned (dropped; not in the TFC source).
- **TODO p9:** ITRI founding year (not stated on the page).
- p4: HJD04 project leader (not named).
- p3: Su Song's 1088 completion (only the 1086 edict given).
- p10: Tianhe-1A CPU/GPU mix (only TOP500 facts used); Dawning-1 Silicon Valley phase single-source (flagged in text).
- p7: 天龙 date (shown as disputed).
- p1: 李培业 link is an abstract-only aggregator page (exa.ai); replace with a journal URL.
- ctext.org links answer with a bot check to scripted clients; the URLs look right but were not machine-verified.

## Build check

2026-09-26 (fact-check gate): built in the repo with **Hugo v0.158.0 extended** (the deploy version), theme hugo-book 45cbd2d via `--themesDir` (the submodule is empty in this worktree): exit 0, no errors or warnings. zh-Hans and zh-Hant each rendered 191 pages; all 22 post pages are full pages (21–27 KB); 884 internal links / assets on the 22 pages checked, 0 broken (including the new p5 → p10 relref).

2026-09-26: a copy of the branch outside the repo (theme hugo-book at the pinned commit 45cbd2d, Git info disabled because the copy has no `.git`) built with Hugo v0.165.0 extended with no errors or warnings. zh-Hans and zh-Hant each rendered 191 pages including all 11 posts; every internal link on the 22 pages resolves.

## In progress

(none)

## Remaining

- Native proofreads (zh-Hans; zh-Hant by a Taiwan reader).
- Resolve or keep the flagged date conflicts after proofreading.
- Open TODOs from the fact-check gate (see below).
- Reed: lab ideas above (optional).

---

## Batch 2 (PR #35)

> Batch 2 section. Branch was zh-desk-2 (based on zh-locales-policy). Combined into this file when PR #35 merged onto main after #23.

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
- Names, checked: 董韞美, 林蘭英, 楊芙清, 孫玉芳, 王守武, 王守覺, 夏鍾瑞, 呂述望, 朱邦復, 張汝京, 余承東, 胡偉武. **夏钟瑞 / 夏鍾瑞** is the spelling in the source (上观新闻 oral history) and on the page; the brief's "夏忠瑞" does not match the source. 王頌贊 (王颂赞) uses 贊, not OpenCC's 讚; decided in the PR #35 follow-up (see that section).
- **Perspective fix:** 23-zh's "海峡对岸的起点" (i.e. Taiwan, seen from the mainland) becomes "台灣的起點" in zh-Hant.
- **Generic vs statute terms (67):** the zh-Hant title uses the generic Taiwan term 個人資料保護法制 (changed from 個人資料保護法, the name of Taiwan's own statute, in the PR #35 follow-up). Statute names and close paraphrases of PIPL keep 個人信息.

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
- zh-Hant hand edits: 9 (發布 ×4; 用戶; 組織機構代碼; 數位憑證 / 電子簽章; 個人資料; link text 《…個人資料保護法》, now 《…個人資料保護法制》 after the PR #35 follow-up).

### 21. 67-zh-privacy-law (weight 21)

- Files: `content.zh-hans/posts/67-zh-privacy-law.md`, `content.zh-hant/posts/67-zh-privacy-law.md`
- Title: 从电脑处理到自动化决策：两岸三地的个人信息保护法制 / 從電腦處理到自動化決策：兩岸三地的個人資料保護法制 (both titles end in 法制 after the PR #35 follow-up, so the zh-Hans title is not read as the PIPL short name)
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
- zh-Hant hand edits: 8 (title 個人資料保護法, now 個人資料保護法制; 制定 ×2; 個人信息 ×4 in close statute paraphrases; 對象).

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

## Follow-up to the gate (PR #35), 2026-09-26

These are the three calls Lucas left open, decided in one commit on top of dd94409.

1. **王頌贊, not 王頌讚 (zh-Hant, 68).**
   - Who he is: 王颂赞, 特级教师 at 中国福利会少年宫 and director of its 儿童计算机活动中心 in Shanghai (《新民晚报》 2014 via people.com.cn; the CWI pages on gov.eastday.com).
   - He is a mainland teacher. No Taiwan or Hong Kong institution page, obituary or news item for him was found.
   - The only Traditional-script form he uses himself is on his LinkedIn profile: 王頌贊 (Shanghai; teacher at CWI Children's Palace; the URL slug is 頌贊-王). This profile is self-published, not an institutional record.
   - The only 王頌讚 hits are machine-converted content farms (jendow.com.tw, newton.com.tw, mingyanjiaju.org). They also show other OpenCC artifacts: 套用 for 应用, 國小員 for 小学员.
   - zh-Hant keeps 王頌贊 at all four places. The Taiwan proofreader should still confirm.
   - Also on 68 zh-Hant: the contest name as printed in the Xinmin article, 首屆少年兒童計算機程序設計競賽, is restored (OpenCC had written 程式設計競賽). This is the same slip as 全國青少年程序設計競賽 at the gate.
2. **67 zh-Hant title: 從電腦處理到自動化決策：兩岸三地的個人資料保護法制.**
   - The page covers mainland PIPL, the Hong Kong PDPO and Taiwan's PDPA together.
   - 個人資料保護法 on its own is the name of Taiwan's statute, so the title read as if the page were about Taiwan's law only.
   - 個人資料保護法制 is Taiwan's generic term for the body of personal-data law. For example, the NDC release of 2018-07-04 (ndc.gov.tw/nc_27_29899) uses 個人資料保護法制架構 and 個人資料保護法制之主政機關.
   - The title stays parallel to the zh-Hans title, whose 个人信息保护法 is also generic (not in 《》).
   - The one echo, the link text on 66-zh zh-Hant, was updated. Statute names in 《》 and the tags are unchanged.
3. **Chapter 64: both pages stay, no rename.**
   - English 64, "Who Decides the Wire" (phase Governance / Internet Civics), asks who sets the shared numbers, names and encodings that let networks interoperate.
   - Its encodings section is twinned by 64-zh-hanzi-encoding (#23). Its IEEE 802 / Wi-Fi line, and the governance question itself, are twinned by 64-zh-mobile-standards: who assigns spectrum, who picks the cellular standard, a mandatory WLAN national standard (WAPI), and the patent inside that standard.
   - No other English chapter fits this page better. 40 (Ethernet) and 41 (TCP/IP) are engineering chapters, and there is no English chapter 65.
   - The phase 治理 / 互联网公民 matches English 64.
   - The two pages do not overlap. Several English chapters already have more than one zh page (three for 01 in #23).
   - Nothing on zh-desk-1 has to change. Once both PRs are in, the "本章另一篇中文页" pointer here can become a relref (already listed under TODO cross-links). A reciprocal pointer from 64-zh-hanzi-encoding back to this page is optional.
- **Leftover from the 44 gate fix:** the body still had one 中国最早的搜索引擎研究 (end of the first section) after the gate. It now reads 按这篇回顾的说法，中国大陆第一批搜索引擎的研究… (zh-Hant: 按這篇回顧的說法，中國大陸第一批搜尋引擎的研究…), in line with the title and intro and credited in the same sentence.
- Tools (desk workspace, not in the repo): `zh_hant.py` now auto-fixes 餘承東 → 余承東, 王頌讚 → 王頌贊 and 併發布/併發表 → 並發布/並發表, and turns 光刻機 into 曝光機 in prose. It also keeps as names 工业和信息化部, 最高人民法院知识产权法庭, the two CCF contest names, 少年儿童计算机程序设计竞赛 and 中国福利会, and it leaves Commons File:/Template: names verbatim. New REVIEW flags cover 併發, 個人資料保護法 (statute vs generic), 程式設計競賽, 部/局…訊息 (消息 → 訊息), and localized PRC institution names.

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
5. ~~王頌贊 vs 王頌讚~~: resolved in the PR #35 follow-up (王頌贊).
6. ~~67-zh zh-Hant title~~: resolved in the PR #35 follow-up (兩岸三地的個人資料保護法制).
7. ~~Scope of 64-zh~~: resolved in the PR #35 follow-up (both chapter-64 pages stay; no rename).
8. ~~SPC judgment quotations~~: resolved at the gate (checked against ipc.court.gov.cn).
9. ~~HK CDMA date~~: resolved at the gate (both credited; kept).
10. **CU40 quotation (43-zh):** verified live, but no local copy could be saved (captcha). Re-check at proofreading time.
11. **Traditional-script TW/HK quotations inside zh-Hans pages:** the same house style as batch 1; proofreaders should confirm.

## Build check

2026-09-26: a copy of the worktree outside the repo (no `.git`; theme hugo-book 45cbd2d; `HUGO_ENABLEGITINFO=false`) built with **Hugo v0.158.0 extended**: exit 0, no errors or warnings. zh-Hans and zh-Hant each rendered 228 pages, including all 12 posts. 53,182 internal links and assets across the zh-Hans and zh-Hant output were checked, with 0 broken; every relref between batch-2 pages resolves. No `.hugo_build.lock` was left in the repo.

After the fact-check gate fixes (2026-09-26), the worktree was rebuilt with **Hugo v0.158.0 extended**: no errors or warnings, and 228 pages each for zh-Hans and zh-Hant. A link check over 930 HTML files found 0 broken internal links or assets. The only exception is the `labs/.../` placeholder on the en/th/si/ta ch19 page, which predates this branch.

After the PR #35 follow-up (2026-09-26), a copy outside the repo was rebuilt with **Hugo v0.158.0 extended** (`--enableGitInfo=false`, theme hugo-book 45cbd2d). The build exited 0 with no errors or warnings, and zh-Hans and zh-Hant rendered 228 pages each. A link check over 930 HTML files (53,182 internal links and assets in zh-hans and zh-hant) found 0 broken in zh-hans or zh-hant, and every relref resolves. The only broken targets are the same pre-existing `labs/.../` placeholder on en/th/si/ta pages.

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
- Add the cross-links listed under "TODO cross-links after PR #23 merges" (now that #23 has landed).
- The open decisions above.
- Reed: the lab ideas above (optional).
