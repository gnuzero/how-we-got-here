---
title: "算筹与算盘：数放在手里，算法记在口诀里"
weight: 1
date: 2026-09-26
draft: false
phase: "1 — 基础：从机械计算到电子管计算"
series_index: 1
aliases: []
tags: ["算筹", "算盘", "珠算", "位值制", "口诀", "程大位", "孙子算经"]
summary: "从《孙子算经》的纵横摆筹到程大位的珠算口诀：数存在筹和珠里，算法存在口诀里，执行它的是人。"
image_prompt: "Overhead view of a dark wooden table: bamboo counting rods laid out in alternating vertical and horizontal groups to show a four-digit number, beside a Ming-style abacus and an open woodblock-printed arithmetic book, soft museum lighting, historically accurate, no text"
video_prompt: "15-second animation: bamboo rods snap into place column by column (units upright, tens flat), then dissolve into abacus beads sliding as a rhymed rule appears line by line; calm documentary style"
schematics: "Diagram 1: rod-numeral place value per Sunzi Suanjing (units vertical, tens horizontal, alternating), showing 3052. Diagram 2: abacus column with one upper bead worth five and four lower beads worth one, labelled storage / program (verse rule) / processor (the person)."
labs: ["pebble-trays"]
# Status: not final. Needs a native-reader proofread before it is marked final.
---

<!-- sources: F01-01, F01-02, F01-03, F01-04, F01-05, F01-06, F01-07, F01-08, F01-09, F01-10, F01-11, F11-01, F36-01, F36-02, F36-03, F36-04 -->

先别急着想“计算机”。你手里有一把竹棍，面前有一块空桌面。要记下 3052 这个数，你会怎么摆？

## 竖一根，横一根：用方向记位置

传世的《孙子算经》给出的规则只有一句：

> 凡算之法：先识其位，一从十横，百立千僵，千十相望，万百相当。

个位的筹竖着摆，十位横着摆，百位又竖，千位又横。相邻两位方向相反，摆得再挤，你也不会把相邻两位的筹看成一堆。一根筹代表多少，不取决于筹本身，而取决于它落在哪一列——这就是位值制，今天每一台计算机的寄存器仍然靠它工作。同一卷还规定了乘除的布局：乘法的积放在“中位”，除法的商放在上方。几行位置各有用途，已经很像一组寄存器。

**出处：**《孙子算经·卷上》，中國哲學書電子化計劃与维基文库均有全文。

算筹甚至有一份“国家规格”。《汉书·律历志》写明：“其算法用竹，径一分，长六寸”，271 根捆成六角形的一握。计算工具的尺寸被写进正史，这本身就是一种标准。实物也留了下来：据中国科学院主办的中国科普博览介绍，1971 年陕西千阳一座西汉墓出土了一束装在丝袋里的兽骨算筹，可以随身携带。中国国家博物馆的介绍则提到，汉代的筹有策、筹、筭、算等名称，材质有竹、铅、骨。今天说“运筹”，说的还是这根竹棍。

<figure><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Western_Han_Lead_Counting_Rods_%289831915095%29.jpg" alt="中国国家博物馆展出的西汉铅质算筹" loading="lazy" width="1280"><figcaption>西汉铅质算筹，1982 年西安出土，中国国家博物馆展品。图片：<a href="https://commons.wikimedia.org/wiki/File:Western_Han_Lead_Counting_Rods_(9831915095).jpg">Gary Todd</a> / Wikimedia Commons，<a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>。</figcaption></figure>

## 从筹到珠：一个说不清的起点

“珠算”二字最早见于《数术记遗》，旧题东汉徐岳撰、北周甄鸾注。书中列了十四种算法，其中一条是“珠算，控带四时，经纬三才”。甄鸾的注说得具体些：板分三段，“位各五珠，上一珠与下四珠色别”，即每一位五颗珠，上面一颗颜色不同。这已经有了“一颗顶五、四颗各顶一”的影子；但注文描述的是一块刻成三段的板，和明代穿在档上的算盘并不相同。上珠是否明写“当五”，传本文字也不一致。

麻烦在于这本书本身。清代《四库全书总目提要》判定它是伪托：“此必当时购求古算，好事者因托为之，而嫁名于岳耳。”数学史家钱宝琮认为是甄鸾自己依托伪造；也有珠算史研究者坚持确为徐岳原著。中国社会科学网 2024 年的一篇文章直接写它成书于 190 年，英文网络也常把“公元 190 年出现算盘”当成定论。更稳妥的说法是：这个年代至今有争议。至于“珠算始于西周、已有三千多年”一类的媒体说法，找不到文献支撑。

**出处：**维基文库《數術記遺》；识典古籍《欽定四庫全書總目》卷一百七。

## 程大位：把算法写成口诀

算盘取代算筹，文献上能明确指认的节点在明代。程大位（1533—1606）编撰的《直指算法统宗》1592 年刊行，共 17 卷、595 题，以算盘为主要工具，收录珠算口诀和定位法，是最早记载珠算开平方、开立方方法的算书之一，后来传到日本、朝鲜和东南亚。国家级非遗档案的评价是：“它完成了计算由筹算向珠算的转变。”在它之前，徐心鲁《盘珠算法》（1573）、柯尚迁《数学通轨》（1578）已经在讲珠算。

换个角度看：算珠是存储，口诀是程序，拨珠的人是处理器。操作者不必每一步都重新推理，只要背出对应的那句口诀，照着拨。联合国教科文组织的英文介绍说得很准：“Zhusuan oral formulas have easy-to-learn rhymes that represent specific calculation rules”——口诀好学好记，每一句代表一条具体的计算规则。

下面的实验把这件事拆开给你看：三个托盘、一张每次只露出一步的配方卡、一条答案纸。你不需要知道自己在算什么，只需照着下一步做。

{{< lab type="pebble-trays" height="720" >}}

## 从名录到误传

2008 年，“珠算（程大位珠算法）”列入第二批国家级非物质文化遗产名录，编号Ⅹ-119，申报单位为安徽省黄山市屯溪区。2013 年，“中国珠算——运用算盘进行数学计算的知识与实践”经政府间委员会第八届会议（决定 8.COM 8.8）列入联合国教科文组织人类非物质文化遗产代表作名录。新华社报道决议于 12 月 4 日在阿塞拜疆巴库通过，安徽当地媒体则写 12 月 5 日；相差一天，可能是时差或报道日期所致，尚未核实。

报道里常见的“中国第五大发明”“世界上最古老的计算机”，是荣誉性的说法，不是史实。另一个流传更广的说法是“中国用算盘算出了原子弹”。中国科学院的计算机史学者已明确指出这是误传：算盘只在“一些边缘题”上当过辅助工具。那是[第 5 页]({{< relref "03-zh-first-electronic-computers.md" >}})的故事。

## 延伸阅读

- 《孙子算经·卷上》（English: *Sunzi Suanjing*, vol. 1），中國哲學書電子化計劃，传世文献。[链接](https://ctext.org/sunzi-suan-jing/juan-shang/zhs)
- 《孫子算經·卷上》（English: *Sunzi Suanjing*, vol. 1, with editorial notes），维基文库。[链接](https://zh.wikisource.org/wiki/孫子算經)
- 班固，《汉书·律历志上》（English: *Book of Han*, Treatise on Pitch-pipes and the Calendar, part 1），中國哲學書電子化計劃。[链接](https://ctext.org/han-shu/lv-li-zhi-shang/zhs)
- 中国科普博览，算筹虚拟博物馆页面（English: Counting rods, virtual museum page），中国科学院，2014-04-29。[链接](http://www.kepu.net.cn/vmuseum/overview/201404/t20140429_458093.html)
- 中国国家博物馆，《如果国宝会说话》第 45 集“算筹”（English: *If National Treasures Could Speak*, episode 45: Counting rods），中国国家博物馆。[链接](https://www.chnmuseum.cn/Portals/0/web/zt/20180101rggbhsh/detail.html?id=45)
- 徐岳（旧题）撰、甄鸾注，《數術記遺》（English: *Notes on the Traditions of Arithmetic Methods*），维基文库。[链接](https://zh.wikisource.org/zh/數術記遺)
- 《欽定四庫全書總目》卷一百七《數術記遺》提要（English: Imperial Siku Quanshu catalogue, abstract of the *Shushu Jiyi*），识典古籍。[链接](https://www.shidianguji.com/book/SK0000B/chapter/1kthxgjzw71n3)
- 李培业，《〈数术记遗〉中的算器研究（一）》（English: Calculating devices in the *Shushu Jiyi*, part 1），《中山大学学报（自然科学版）》，2002（仅见摘要）。[链接](https://exa.ai/library/publication/k6xqfjl958v)
- 牛腾、赵相翼、谭静，《中国珠算的历史溯源与当代价值研究》（English: The historical origins and present value of Chinese zhusuan），中国社会科学网，2024-01-08。[链接](https://www.cssn.cn/ztzl/ztzl_skwzg/ggfy/jyyj/zrjyz/202401/t20240108_5726506.shtml)
- 中国非物质文化遗产网，《珠算（程大位珠算法）》（English: Zhusuan, Cheng Dawei's method: national intangible heritage record），中国非物质文化遗产数字博物馆。[链接](https://www.ihchina.cn/Article/Index/detail?id=15273)
- 《算法統宗》条目（English: *Suanfa Tongzong*, catalogue entry citing the Siku abstract），中國哲學書電子化計劃 datawiki。[链接](https://ctext.org/datawiki.pl?if=gb&res=623880)
- 安徽新闻网，《程大位：明代的珠算口诀流传至今》（English: Cheng Dawei: Ming abacus rhymes still in use today），2020-05-13。[链接](http://ls.anhuinews.com/lswrgs/yw/202005/t20200513_4572473.html)
- UNESCO，“Chinese Zhusuan, knowledge and practices of mathematical calculation through the abacus”（中文：中国珠算——运用算盘进行数学计算的知识与实践），人类非物质文化遗产代表作名录，2013。[链接](https://ich.unesco.org/en/RL/chinese-zhusuan-knowledge-and-practices-of-mathematical-calculation-through-the-abacus-00853)
- 姜铁英，《中国珠算被正式列入联合国教科文组织非遗名录》（English: Chinese zhusuan formally inscribed on the UNESCO intangible heritage list），新华网（人民网转载），2013-12-04。[链接](http://culture.people.com.cn/n/2013/1205/c172318-23747049.html)
- 徐祖哲、司宏伟，《中国计算机：从核物理到卫星测控》（English: Chinese computers: from nuclear physics to satellite tracking），《中国科学院院刊》，2025, 40(Z2): 109–118。[链接](http://old2022.bulletin.cas.cn/publish_article/2025/Z2/zgkxyyk-40-Z2-109.htm)

