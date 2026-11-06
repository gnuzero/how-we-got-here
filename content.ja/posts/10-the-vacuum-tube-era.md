---
title: "真空管の時代"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "動く部品を外した速度——熱と故障との引き換え"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

真空管の核心は単純だ。小さな電流で大きな電流を制御する。動く部品はない。だからリレーより桁違いに速くコンピュータが組めた——そしてこの時代は、熱と電力と故障率との戦いでもあった。

## 三極管はどうスイッチするか

三極管には、真空中に三つの電極がある。熱した陰極が電子を出し（熱電子放出）、制御格子、正に保たれた陽極（プレート）がそれを引く。格子は間にある。小さな負電圧で陽極への電流を絞る——あるいは切る。小さな格子の変化が、大きな陽極電流の変化になる。それが増幅であり、適切な回路ではスイッチでもある。1と0のための、電流のオン／オフだ。

動くのは電子だけだ。だから機械の接点が動くリレーより速く切り替えられた。マイクロ秒対ミリ秒のオーダー差を「だいたい千倍」と読むのは筆者の解釈である。

## FUJIC：日本最初の電子計算機

情報処理学会コンピュータ博物館は、富士写真フイルムの真空管式計算機 **FUJIC** をこう記す。レンズ設計を目的に岡崎文次が開発し、1949年から研究を始め、1952年3月からメモリ研究と並行して組み立てが進み、1955年11月に電子通信学会の見学会でデモされ、**1956年3月初めに完成し「我が国最初の電子計算機」となった**、と。真空管は約1,700本、2進法・3アドレス方式。記憶は超音波水銀遅延線（255語）。クロックは約30 kHzだが並列演算で、加減算0.1 ms、掛算1.6 ms。目標は人手計算の1,000倍で、約2,000倍を実現した。小田原工場で約2年半、社内外の計算に使い、のち早稲田大学へ寄贈され、**現在は国立科学博物館に保存**されている。([情報処理学会コンピュータ博物館・FUJIC](https://museum.ipsj.or.jp/computer/dawn/0010.html))

同館のパイオニア頁は、岡崎が1939年に東京帝国大学理学部物理学科を卒業し富士写真フイルムに入社、レンズ設計の数値計算から電子的手段を考え、『科学朝日』1948年8月号のIBM-SSEC解説を見て可能性を知り、1949年3月に社内予算20万円を得た、と書く。製作着手は1952年12月、完成は1956年3月。資金と最小限の補助者を除けば、ほぼ単独で七年をやり切った、と同頁は記す。([情報処理学会・岡崎文次](https://museum.ipsj.or.jp/pioneer/okazaki.html))

情報処理技術遺産頁は、製造年1956年、本体に二極管約500本・三極管約1,200本、消費電力7 kW、加算0.1 ms、除算2.1 ms、史料所在地を国立科学博物館とする。([情報処理学会遺産・FUJIC](https://museum.ipsj.or.jp/heritage/FUJIC.html))

同館は **FACOM 100** を「日本初の実用リレー式自動計算機」とし、1954年10月完成と書く。本体は約4,500個のリレーである。([情報処理学会・FACOM 100](https://museum.ipsj.or.jp/computer/dawn/0008.html)) **FACOM 128A** は1956年完成の「国産初のリレー式商用計算機」で、同年9月に1号機が文部省統計数理研究所へ納入された、ともある。([情報処理学会・FACOM 128A/128B](https://museum.ipsj.or.jp/computer/dawn/0012.html))

筆者の解釈では、日本では真空管のFUJICとリレーのFACOMが、ほぼ同じ十年に並んだ。素子が違っても、「計算を人手から外す」制約は同じだった。

## ENIAC：三十トンの交換機

University of Pennsylvania の工学史ページによれば、ENIAC は全面稼働時に 30×50 フィートの部屋を占め、重量は 30 トン、真空管は約 18,000 本だった。同校は発表日を1946年2月14日とし、装置がムーア・スクールで建造・運用された、とも記す。([Penn Engineering, ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/))

消費電力の数字は機関ごとに並ぶ。U.S. Army Research Laboratory が公開する Ballistic Research Laboratories の史（*Electronic Computers Within The Ordnance Corps*）は、約 174 キロワットと書く。同史料の付録は「Power consumption, Computer 174 K.W.」と表にする。([ARL / BRL, Ordnance Corps history, ch.2](https://ftp.arl.army.mil/~mike/comphist/61ordnance/chap2.html); [Appendix I](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html)) Penn Engineering は 150 キロワットと記す。([Penn Engineering, ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) Smithsonian National Museum of American History の Initiating Unit 解説は 140 キロワットと書く。([NMAH, ENIAC Initiating Unit](https://americanhistory.si.edu/collections/object/nmah_334262))

筆者の解釈では、「プログラミング」はパッチケーブルとスイッチによる物理的な再配線——巨大な交換機——であり、操作の列はケーブルの引き回しのなかにあった。新しい計算への組み替えに何日もかかることがあった。その痛みが、Phase 3 の CPU アーキテクチャ——命令をデータと同じ記憶に置く——の直接の祖先だ、という読みも解釈である。

Herman H. Goldstine の初期電子計算機史は、いまも古典的な、当事者に近い記録だ。巷間の「数分ごとに管を交換」話は、それに照らせ。共同発明者の J. Presper Eckert は1989年のインタビューで、それを「another myth」と呼んだ。([Computerworld / Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html)) 同インタビューで Eckert は、およそ二日に一本の管が故障し、15分以内に問題を特定できた、とも述べる。([同上](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

**出口：** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine 級の ENIAC 史。伝承への対抗に使える。

## 18,000本の管が悪夢だった理由

真空管は壊れる。フィラメントが切れ、シールが漏れ、放出が劣化する。Penn は約 18,000 本の管を記す。([Penn Engineering, ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) 消費電力は上のとおり、ARL 約 174 kW・Penn 150 kW・NMAH 140 kW と機関ごとに並ぶ。Eckert は、およそ二日に一本の管が故障し、15分以内に問題を特定できた、と述べ、「数分ごとに交換」話を神話と呼ぶ。([Computerworld / Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html)) 故障は本物で高くついた。管は熱も出す。部屋いっぱいの冷却が要り、その時代としては強力でも、動かし続けるコストは苛烈だった。

次の記事のセットアップになる。トランジスタが勝ったのは、技師が器用だったからではない。管そのものの物理——熱、大きさ、脆い真空の封筒——が、このやり方の天井を決めてしまったからだ、と読むのも筆者の解釈である。日本の夜明けでも、リレー（FACOM）と真空管（FUJIC）のどちらを選んでも、次の素子への圧力は同じ方向を向いていた。
