---
title: "バベッジの機関"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "差分機関と解析機関——store、mill、そしてカード上のプログラム"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

計算は電気から始まったのではない。歯車から始まった。

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="ロンドン科学博物館のバベッジ差分機関2号" loading="lazy" width="1280">
<figcaption>差分機関2号（ロンドン科学博物館）。写真: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>。</figcaption>
</figure>

Computer History Museum によれば、Charles Babbage（1791–1871）は差分機関と解析機関の二系統を設計した。差分機関は有限差分法に基づき、加減の繰り返しだけで多項式の表を作り、乗除の機械実装を避ける。桁は歯車で表され、整数以外の位置で止まれば不定とみなして詰まるよう設計された、という。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

同館によれば、差分機関1号の設計は1821年に始まり、計算と印刷を一体とした最初の完全設計とされる。建設は1832年に止まり、政府資金は1842年に打ち切られた。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="差分機関2号の桁列間の繰り上げアームの接写" loading="lazy" width="1280">
<figcaption>差分機関2号 Serial #2（Computer History Museum）の桁列間の繰り上げアーム。写真: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>。</figcaption>
</figure>

**いま試す。** ラボを Y=9、Δ₁=7 からステップする。一の位の車が9を越え、歯が十の位を掴む。9+7 は16になる。それが x² を求める有限差分——機関が造られた方法——だ。

{{< lab type="difference-engine" height="720" >}}

本書オリジナル、[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。教育用の列モデルであり、2号機の完全な復元ではない。

同館は、Babbage の設計のどれも、生涯のうちに全体として物理的に実現されなかった、と記す。差分機関1号の約七分の一（約2,000部品、1832年組立）が主要な完成組であり、解析機関の小さな実験片は1871年の死去時に製作中だった、ともある。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

本書の主張では、資金だけでなく、当時の工作公差も彼と戦った。精度の桁を増やすたび、摩擦・バックラッシュ・積み上げ公差が結果を壊す余地が増える。

同館によれば、解析機関は1834年に構想された汎用のプログラム可能計算機であり、「Store」（記憶）と「Mill」（演算）を分け、パンチカードでプログラムできた。カードの着想は織物の Jacquard 機から借りた、と記される。([Computer History Museum, The Engines](https://www.computerhistory.org/babbage/engines/))

下のホスト済みエミュレータは、John Walker の Fourmilab Analytical Engine である。カードをステップし、mill と store の列の変化を見る。パブリックドメインであり、本書はコピーをホストし、出典リンクを残す。([Fourmilab / John Walker](https://www.fourmilab.ch/babbage/))

{{< lab type="analytical-engine" height="780" >}}

出典: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip)（パブリックドメイン）。

その借りが次の停留だ。ジャカード織機、そしてプログラムと機械の分離。
