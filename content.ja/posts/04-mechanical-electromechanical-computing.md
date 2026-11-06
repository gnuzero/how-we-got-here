---
title: "機械式・電気機械式の計算"
weight: 4
date: 2026-01-01
draft: true
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 3
aliases:
  - /posts/01-mechanical-electromechanical-computing/
  - /posts/02-mechanical-electromechanical-computing/
tags: []
summary: "歯車がプログラムの考えを強制し、摩擦が電気を強制した"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

計算は電気から始まったのではない。歯車から始まった。

## バベッジの機関

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="ロンドン科学博物館のバベッジ差分機関2号" loading="lazy" width="1280">
<figcaption>差分機関2号（ロンドン科学博物館）。写真: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>。</figcaption>
</figure>

Computer History Museum の Babbage Engine 解説によれば、Charles Babbage（1791–1871）は差分機関と解析機関の二系統を設計した。差分機関は有限差分法に基づき、加減だけを繰り返して多項式の表を作る機械式の計算器であり、乗除を機械で実装する必要を避ける。桁は歯車で表され、整数以外の位置で止まれば不定とみなして詰まるよう設計された、という。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

同館によれば、差分機関1号の設計は1821年に始まり、自動計算と印刷を一体とした最初の完全設計とされる。建設は Joseph Clement との争いののち1832年に止まり、政府資金は1842年に打ち切られた。解析機関は1834年に構想され、パンチカードでプログラムでき、「Store」（記憶）と「Mill」（演算）を分けた、と記される。カードの着想は織物の Jacquard 機から借りた、ともある。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

## ジャカード織機

同館は、解析機関のプログラム用パンチカードが、複雑な模様を織る Jacquard 織機から借りた着想だと書く。カードを替えれば模様が替わる——機そのものは「錦」を知らない。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

筆者の解釈では、ここで分離されるのはプログラムと機械だ。命令の並びは、それを走らせる装置から独立できる。

## 日本：自働算盤とタイガー計算器

歯車の卓上計算器は、日本でも製造された。情報処理学会コンピュータ博物館によれば、矢頭良一は独力で研究し、1902年3月に専売特許を出願して全金属製の自働算盤を完成させ、特許は1903年1月に許可され、同年3月に工場を設けて日本で初めて計算機を製造した。1個の円筒と22の歯車を用い、入力は算盤と同じ2・5進の十進で加減乗除を行う手動式卓上機で、1台250円、二百数十台が売れた、という。現存機は関連資料とともに北九州市に寄贈されている、と記す。([情報処理学会コンピュータ博物館「機械式卓上計算機」](https://museum.ipsj.or.jp/computer/dawn/0052.html))

同博物館のタイガー計算器の項は、大本寅治郎が Brunsviga 型を改良して特許を取り、1923年に「虎印計算器」として売り出し、のちカタカナ名「タイガー計算器」に改めたところ普及した、と書く。1950年代中頃の価格は3万5千円、累積販売は50万台弱、卓上でも重さ約6キログラムだった、ともある。保存先として国立科学博物館などを挙げる。([情報処理学会コンピュータ博物館「タイガー計算器」](https://museum.ipsj.or.jp/computer/dawn/0001.html))

国立科学博物館の理工電子資料館は、タイガー計算器 No.59（1923・1924年頃、大本鉄工所製）について、大本鉄工所の大本虎次郎が1923（大正12）年に「虎印計算器」として発売し、のち「タイガー計算器」に改名して好評となり、1960年代後半に電子式卓上が登場するまで銀行や科学計算などに用いられた、と解説する。製作者の名の表記は、同学会の「大本寅治郎」と館の「大本虎次郎」で一致しない。([国立科学博物館「タイガー計算器 No.59」](https://www.kahaku.go.jp/exhibitions/vm/past_parmanent/rikou/computer/tiger59.html)) 同学会の情報処理技術遺産ページは、同機を1924年製・所有者国立科学博物館とし、製作者名を大本寅治郎と記す。([情報処理学会「タイガー計算器 No.59」](https://museum.ipsj.or.jp/heritage/tiger.html))

## このあと何が続くか

命令セット、記憶されたプログラム、制御とデータパスの分離——いずれもここに根を持つ、と読むのは筆者の解釈だ。媒体はリレー、真空管、トランジスタへと変わるが、論理の形——命令の並び、実行部、ステップ間の状態を保持する記憶——は変わらない、という読み方も同様に解釈である。

機械式の計算がスケールしにくかった理由として、歯車列の摩擦・バックラッシュ・公差の積み上げを挙げる議論がある。精度の桁を増やすほど、確実に造るのが難しくなる。その天井が、電気スイッチングへの押しとなった、と読むのも筆者の解釈だ。次はリレーと、第二次世界大戦へ運ばれた電気機械式の論理である。

扉のページへ: [これは何ものか？]({{< relref "04-what-is-this-thing.md" >}}) · 次へ: [バベッジの機関]({{< relref "05-babbage-engines.md" >}})
