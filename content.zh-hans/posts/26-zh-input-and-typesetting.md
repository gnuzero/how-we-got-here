---
title: "把汉字敲进机器：打字机、输入法与激光照排"
weight: 7
date: 2026-09-26
draft: false
phase: "4 — 软件基础：操作系统、编程语言与实时系统"
series_index: 7
tags: ["汉字输入", "中文打字机", "仓颉", "五笔字型", "汉卡", "联想", "激光照排", "王选"]
summary: "英文键盘一键一个字母，汉字却有几千上万个；从打字机字盘到输入法、汉卡和王选的字形压缩，每一步都在绕过同一个瓶颈。"
image_prompt: "Split composition: left, a 1920s Chinese typewriter with a large flat tray of metal character slugs and a selector arm; right, a 1980s beige PC with a Chinese-character expansion card and a laser-typeset newspaper page coming out of a phototypesetter; warm archival lighting, clean editorial illustration style"
video_prompt: "25-second animation: a typist's selector arm hunting across a tray of thousands of characters; the tray dissolves into a small keyboard where four keystrokes compose one character; the character outline is reduced to a few stroke parameters and curves, then rasterised by a laser onto a newspaper page"
schematics: "Diagram 1: the three bottlenecks (too many characters / too few keys / too little memory) and the answer each era gave (tray, input code, outline compression). Diagram 2: Wang Xuan's scheme: regular strokes stored as parameters, curved strokes as outlines, restored to a dot matrix for the laser."
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F23-01, F23-02, F23-03, F23-04, F22-02, F22-03, F22-04, F22-05, F22-07, F22-08, F22-09, F22-10, F13-03, F12-02, F12-04, F12-05, F12-06, F12-07, F12-08, F22-12, F03-01, F03-02, F03-03, F03-05, F03-07, F03-14 -->

英文打字员面前只有几十个键，一键一个字母。换成汉字，你面对的是几千、几万个字。从 1910 年代到 1980 年代，中国工程师反复撞上同一堵墙：**字太多，键太少，存储太贵。**这一页带你看他们怎样一次次绕过去。

## 字盘上的几千个字

1912 年，在麻省理工学院读书的周厚坤看到一台英文排字机，萌生了做中文打字机的念头。他的原型把 4000—6000 个字排在圆筒上；1916 年进入商务印书馆后，他又发明了只用六百余字的“通俗打字盘”（据 1917 年《青声周刊》）。

真正能用、能量产的是舒震东。据商务印书馆官网转载的其孙访谈，他 1919 年完成“中国第一台有实用价值的中文打字机”，1922 年获农商部专利；1920 年万籁鸣兄弟为它拍了广告片，被称为中国第一部动画广告。这条机械路线走得很长：清华大学科学博物馆藏有一台 1984 年的双鸽牌 DHY-d 中文打字机，那时个人电脑已经进入中国。

林语堂的明快打字机换了思路：用按键组合去“找”字。据东吴大学 2025 年的新闻稿，它可打常用字 7000、可扩至 9 万字，从未量产，1960 年代下落不明，2025 年才在美国一处地下室重现。

**出处：**姚妙峰，结绳志，2022；商务印书馆官网；清华大学科学博物馆；东吴大学新闻稿，2025。

## 输入法：把汉字拆成键盘能懂的码

据朱邦复自述，他 1976 年底发表“形意检字法”；在三军大学为蒋纬国做中文电传系统时，蒋纬国“认为『形意』两字太俗，建议改名为『仓颉输入法』”。为了苹果机上的汉卡，他写道：“我决定放弃我的中文输入专利”；后来他又放弃了汉卡本身的权利，授权五家小公司生产，汉卡售价从一万多元新台币跌到一千五百元。不收专利费的编码，就这样成了事实标准。当时的对手多用大键盘：据他回忆，工研院“中华一号”有 228 键。

大陆的起点有确切日期：1978 年 8 月，上海《文汇报》发表支秉彝、钱锋的“见字识码”；同年 12 月，首届全国汉字编码学术讨论会在青岛召开，当时估计全国已有数百种方案，后来有人称之为“万码奔腾”。王永民的方案从 62 键压缩到 26 键，1983 年 8 月底通过鉴定：《光明日报》记为 28 日，1985 年的《中文信息处理技术大事记》记为 29 日，名称还写作“五笔字形”。王永民回忆，此前走过整字大键盘、主辅键盘和北大 256 键中键盘几个阶段。

## “联想”：一个输入功能变成了公司名

中国中文信息学会的大事记记载，1979 年计算所的“111 汉字信息处理实验系统”“首先实现了联想输入功能”：你打出一个字，机器替你猜下一个。1985 年，倪光南主持研制“联想式汉卡”，初始资金 6 万元，第一型是三块用扁平电缆相连的电路板加一套软件。它十年卖出 16 万套，1989 年 11 月计算所公司改名“联想”。（另外，中国计算机学会的一份档案称长城 0520C-H 的 014 汉卡是“世界上第一块汉卡”。）

长城 0520 也是一次绕路。据中国计算机学会档案，1982 年 11 月一位香港商人带来一台 IBM PC，次年主管部门定下 IBM PC 兼容路线；32 岁的严援朝用两个多月写出 CCDOS，大事记称之为我国第一套与 PC-DOS 兼容的汉字磁盘操作系统；1985 年 5 月底，“由香港生产的第一台样机”回京验收，0520C-H 诞生。海峡对岸是宏碁的天龙中文电脑。发表日期朱邦复本人有两种写法：《智慧之旅》说 1980 年 9 月 28 日在师范大学发表，《我与中文电脑的孽缘》则说 1980 年底签约、次年推出天龙一号。据他回忆，它在 64KB 里用“向量造字”配合仓颉码生成字形。

## 王选：存不下，就压缩

排版的瓶颈更大。748 工程 1974 年获批，北大王选计算机研究所记为 8 月，中国中文信息学会记为 10 月。要为每个字、每种字体、每个字号存精密点阵，陈嘉庚科学奖的介绍说需要几百亿字节。王选 1975—1976 年的答案是：横、竖、折等规则笔画用参数表示，曲线形笔画用轮廓表示，总体压缩率高达 500:1（研究所自己的说法是“几百倍”）。1976 年他决定跳过第二代光机式和第三代阴极射线管照排机，直接做第四代激光照排。1979 年 7 月 27 日样机输出第一张报纸样张；1987 年 5 月 22 日，《经济日报》四个版面全部用华光 III 型激光照排输出。

需要纠正一个说法：中国科学技术馆展板称这项发明“比西方早了10年”，但没有给出可核对的比较。本书的表述是：这是一套独立、早期的汉字轮廓字形方案。

在西方，英文打字机从来不必面对几千个字的问题；英文世界关于中文打字机的标准参考是汤姆·穆拉尼（Thomas Mullaney）2017 年的专著 *The Chinese Typewriter*。

## 延伸阅读

- 姚妙峰，《为了大众教育：周厚坤眼中的中文打字机》（English: For mass education: the Chinese typewriter as Zhou Houkun saw it），结绳志，2022-10-06。[链接](https://tyingknots.net/2022/10/chinese-typewriter-2/)
- 商务印书馆官网转载 2010 年世博会网站对舒震东之孙舒冲慧的访谈（English: The Commercial Press reprints the 2010 Expo website's interview with Shu Zhendong's grandson Shu Chonghui），商务印书馆，2014-08-01。[链接](https://www.cp.com.cn/Content/2014/08-01/1715352867.html)
- 清华大学科学博物馆，《双鸽牌DHY-d中文打字机（1984）》（English: Double Pigeon DHY-d Chinese typewriter, 1984），清华大学科学博物馆。[链接（存档）](https://web.archive.org/web/20251112024909/https://tsm.tsinghua.edu.cn/?p=5525)
- 东吴大学，“字键拾光”展览新闻稿（English: press release for the exhibition “字鍵拾光” [roughly: gathering light from the keys], on Lin Yutang's MingKwai typewriter），中央社讯息平台，2025-03-18。[链接](https://www.cna.com.tw/postwrite/chi/396716)
- 朱邦复，《我与中文电脑的孽缘》（English: My fateful entanglement with the Chinese computer），为中推会撰。[链接](http://health999.net/jpf/word_01.htm)
- 朱邦复，《智慧之旅》第三章《电脑 仓颉、天龙、零壹、汉卡》（English: Journey of Wisdom, ch. 3: Computers: Cangjie, Tianlong, Zero-One [his company], the Chinese card）。[链接](http://open-lit.com/html/lit/506/18353.html)
- 龚滨良，《中文信息处理技术大事记》（English: Chronicle of Chinese information-processing technology），《中国科技史料》1985 年第 2 期。[链接](https://nmlr.muc.edu.cn/info/1106/2042.htm)
- 光明日报关于王永民与五笔字型的报道（English: Guangming Daily report on Wang Yongmin and Wubi, reprinted by People's Daily Online），人民网，2013-09-28。[链接](http://politics.people.com.cn/n/2013/0928/c70731-23065704.html)
- 凌加杰，人民网理论频道文章（English: theory essay on People's Daily Online that uses the phrase “万码奔腾”），人民网，2018-08-16。[链接](http://theory.people.com.cn/n1/2018/0816/c40531-30232696.html)
- 中国中文信息学会，《中文信息处理大事记》（English: Chronology of Chinese information processing），中国中文信息学会（PDF）。[链接](http://bj.bcebos.com/cips-upload/cipsc30.pdf)
- 中国计算机学会，《长城0520C-H台式电脑》（English: The Great Wall 0520C-H desktop computer），中国计算机历史记忆，2022-04-21。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2021/yllsjy/2022-04-21/760879.shtml)
- 中国计算机学会，《联想式汉卡》（English: The Legend Chinese-character card），中国计算机历史记忆，2023-03-01。[链接](https://www.ccf.org.cn/Computing_history/Full_List/2022/yllsjy/2023-03-01/786740.shtml)
- 北京大学王选计算机研究所，《发展历程》（English: Institute timeline），北京大学。[链接](https://wict.pku.edu.cn/gywm/fzlc/index.htm)
- 陈嘉庚科学奖基金会，《技术科学奖·1990·王选》（English: Tan Kah Kee Science Award in technological sciences, 1990: Wang Xuan），中国科学院。[链接](https://tsaf.cas.cn/ljhjqk/cjgkxj/asj/1990/200904/t20090402_4954702.html)
- 中国科学技术馆，《汉字激光照排》展品说明（English: Exhibit text: Chinese laser phototypesetting），中国数字科技馆，2021。[链接](https://www.cdstm.cn/museum/zphc/kcbnjd100znkjcjkpz/art/2021/art_4523f8dfceb24aabb9a29605ba2f17b6.html)
- 黄橙，《1987年：第一张国产激光照排系统整版输出的中文日报》（English: 1987: the first Chinese daily output in full pages by a domestic laser typesetting system），中国工程院网站，2009-06-15 转载。[链接](https://www.cae.cn/cae/html/main/col278/2012-02/27/20120227140259086980845_1.html)

