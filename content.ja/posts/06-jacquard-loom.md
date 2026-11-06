---
title: "ジャカード織機"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "パンチカードが、プログラムを走らせる機械から切り離した"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage はパンチカード制御を発明したのではない。借りたのだ。

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="サン＝テティエンヌ美術産業博物館の細いジャカード織機" loading="lazy" width="1280">
<figcaption>ジャカード織機、Musée d'art et d'industrie, Saint-Étienne。写真: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>。</figcaption>
</figure>

Musée des Arts et Métiers の解説によれば、Joseph Marie Jacquard は1801年12月23日、紋織・紋様織で糸を引く「tireur de lacs」を補う機械の特許を取った。([Musée des Arts et Métiers, Métier original de Jacquard](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard)) Computer History Museum は、1801年にリヨンで、穴あきカードの連鎖が各杼打ちでどの経糸を上げるかを決める機を実演した、と記す。穴があれば上げ、なければ上げない。([Computer History Museum, Storage Engine — 1801](https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="マンチェスター科学産業博物館のジャカード織機パンチカードの接写" loading="lazy" width="249">
<figcaption>ジャカード織機のパンチカード（Museum of Science and Industry, Manchester）。写真: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>、パブリックドメイン。</figcaption>
</figure>

同館は、Babbage が1837年に解析機関へプログラムとデータを入れるパンチ「number cards」の計画を記した、とも書く。([Computer History Museum, Storage Engine — 1801](https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/)) 筆者の解釈では、ここで採用された抽象はこうだ。プログラムは命令の並びであり、それを走らせる機械から分離できる。

## 西陣：明治のジャカード導入

西陣織工業組合の詳細年表は、明治5年（1872）に西陣の技術者・佐倉、井上、吉田の3名をフランスへ派遣して新織法を習得させ、明治6年（1873）にフランス・オーストリアよりジャカード・バッタン機を輸入した、と記す。明治7年には京都博覧会にジャカードなどを陳列し、二条河原町の織工場で本邦最初の洋式機械を運転した、ともある。明治10年（1877）には「日本最初のジャカード機製作」と記す。([西陣織工業組合「西陣詳細年表」](https://nishijin.or.jp/whats-nishijin/chronology/))

京都府の西陣織解説は、明治時代に京都府からの派遣により佐倉常七ら3名が欧州に留学し、フランスからジャカードなどの洋式技術を取り入れた、と書く。([京都府「西陣織」](https://www.pref.kyoto.jp/senshoku/nisijin.html))

Fourmilab がホストする Menabrea の Analytical Engine 概説（1842）には、翻訳者 Ada Augusta, Countess of Lovelace の注が付く。([Fourmilab, Sketch of The Analytical Engine](https://www.fourmilab.ch/babbage/sketch.html)) 筆者の解釈では、カードと機械の分離は、数に限らない記号の操作へも開ける——ただしその読みは注そのものの要約ではなく、解釈である。

次へ: この機械の章が、そのあとのすべてをいまなお形づくる理由——そして歯車だけではスケールしなかった理由。
