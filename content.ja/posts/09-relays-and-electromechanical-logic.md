---
title: "リレーと電気機械式の論理"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "リレーは二値論理が動くことを示し——動く金属では追いつけないことも示した"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

リレーは、ほとんど恥ずかしいほど単純だ。電磁石、ばね付きアーマチュア、接点の組。コイルに通電すればアーマチュアが引き込まれ、接点が開くか閉じる。およそ15年のあいだ、それが計算のスイッチングの原語だった。

## 同じ部品の、二つの仕事

この章での**リレー**はスイッチだ。弱いコイルが、より強い回路を開閉し、のちに AND・OR・NOT の積み木になる。電信線上の仕事については、[メッセージはどう旅したか]({{< relref "03-how-the-message-travelled" >}})を見よ。

いま、そのスイッチを論理のために配線する。

## 論理としてのリレー

二つの接点を直列にすれば AND——両方閉じたときだけ電流が流れる。並列にすれば OR。常閉接点を足せば NOT。それらを組み合わせれば、任意のブール関数——加算器、比較器、デコーダ——を組める。フェーズ2がシリコンで組むのと同じ論理族が、ここは電気機械のハードウェアだ。

筆者の解釈では、20世紀初めまでに電話交換がすでにリレーで埋まり、組合せスイッチングで通話を振り分けていたことが、リレー計算機を造れた大きな理由の一つだ——量産され、よく理解され、十分に信頼できる産業基盤。

Computer History Museum の年表は、ドイツの Konrad Zuse が完成させた Z3 について、約2,300個のリレーを用い、二進浮動小数点演算を行い、語長22ビットだった、と記す。空力計算に使われ、1943年末のベルリン空襲で破壊された。1960年代の復元がミュンヘンの Deutsches Museum に展示されている、ともある。([Computer History Museum, Timeline 1941](https://www.computerhistory.org/timeline/1941/))

## 日本：スイッチング理論からリレー計算機へ

情報処理学会コンピュータ博物館は、日本電気の中島章が交換機などのリレー回路設計から接点の理論を組み立て、ブール代数と同じ法則に至ったが、当時ブール代数の存在を知らなかった、と書く。中島が電信電話学会雑誌に発表した2年後に、同じ内容の論文を Shannon が出し、世界の学会では Shannon の方がスイッチング理論の創始者として知られる、とも記す。電気試験所の大橋幹一・後藤以紀が時間遅れを含むリレー回路理論・論理数学へ拡張した、と続く。([情報処理学会コンピュータ博物館「スイッチング理論／リレー回路網理論／論理数学理論」](https://museum.ipsj.or.jp/computer/dawn/0002.html))

同博物館によれば、電気試験所はリレーを用いて1952年に ETL Mark I を試作し、我が国最初のディジタル式自動計算機とした。真空管の信頼度が悪くトランジスタはまだ実用でなかったため、電話自動交換で実績のあるリレーが選ばれた、という。同一の理論・方式で実用機 ETL Mark II が続いた、ともある。([情報処理学会「ETL Mark I」](https://museum.ipsj.or.jp/computer/dawn/0005.html))

富士通信機製造（現富士通）の FACOM 100 は、同館によれば1954年10月完成の日本初の実用リレー式自動計算機で、本体は約4,500個のリレー、プログラムは60単位の紙テープ（繰り返しは不燃フィルム）から読み、浮動小数点を採用した、と記す。([情報処理学会「FACOM 100」](https://museum.ipsj.or.jp/computer/dawn/0008.html))

## リレーが遅すぎた理由

筆者の解釈では、リレーのスイッチング時間は*機械的*な動きに支配される。アーマチュアが動かねばならない。動く接点は摩耗する。閉じるたび金属が金属に当たり、アークし、穴が開き、やがて壊れる。何千個のリレーは、何千の摩耗点だ。信頼性と速度が、同じ制約——動く部品——と戦っていた。

## 電子への橋

筆者の解釈では、リレーは建築を証明した。二値表現、単純なスイッチからのブールゲート、データとしてのプログラム。証明できなかったのは、その建築が*速く*走れることだ。それを解くには、機械的スイッチを、金属ではなく電子の状態変化に替える——真空管へ、莫大な電力と熱を代償に。その取引が次だ。
