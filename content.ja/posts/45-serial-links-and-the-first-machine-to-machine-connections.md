---
title: "シリアル・リンクと最初の機械間接続"
weight: 45
date: 2026-01-01
draft: false
phase: "6 — ネットワーキングの進化"
series_index: 44
aliases:
  - /posts/38-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/43-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/44-serial-links-and-the-first-machine-to-machine-connections/
tags: []
summary: "一台の外へ出る最初の一歩——RS-232 とモデム、パケットより前の一点対一点"
image_prompt: "Historical technical illustration of RS-232 serial cable and acoustic coupler modem connecting two computers, clean vintage computing diagram style"
video_prompt: "20-second animation: bits streaming one-by-one over a serial wire, then a modem modulating onto a phone line, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 point-to-point link + modem over telephone network block diagram"
---

フェーズ 5 のどのバスも、一台の*中*に留まる。ネットワーキングは、別々の機械が話さねばならないときに始まる——そしてパケット交換網が存在する前、それはシリアル・リンクを意味した：一つのビット列、ポイント・ツー・ポイント、ルーティングなし、「この線の向こう端のやつ」以外のアドレスなし。

## RS-232：基準のシリアル・リンク

RS-232（EIA、1960）は、二つの装置のあいだの電圧レベルと非同期シリアルの約束を固定した——両端はあらかじめボーレートに合意する。データと一緒にクロックが乗らないからだ。Wikipedia は、RS-232 をシリアル通信の伝送の電気的特性を定義する標準とし、もともとモデムと端末の接続向けだった、と書く。([Wikipedia — RS-232](https://en.wikipedia.org/wiki/RS-232)) アドレスなし、ルーティングなし、両端が選んだ単純なパリティ以外の誤り訂正なし。ただ二つの装置、一度に一ビット。

それで足りた。端末はメインフレームやミニコンピュータへ届くために使った。いまも、上位のネットワーキング・スタックに依存しないチャネルが要るとき、ルータや組み込み機器への死ぬほど単純なコンソール経路である。

## モデム：アナログ線の上のデジタル

長距離の話は電話網——アナログ、狭帯域、声向け——に乗らねばならなかった。モデムはデジタルのビット列を、電話線が運べるアナログ搬送波へ変調し、向こう端でビットへ復調する。Wikipedia は、モデムを「デジタル・データ信号をアナログ信号へ変調し、またその逆を行う」装置とし、電話回線上のコンピュータ通信に使われた、と書く。([Wikipedia — Modem](https://en.wikipedia.org/wiki/Modem)) 初期レートは数百ビット毎秒、のち数万——いまの尺度では遅いが、同じ部屋にない機械へ、すでにほぼどこへでも届くインフラ越しに届く、実用上ほぼ唯一の道だった。

## なぜ次のアーキテクチャを強いるか

ポイント・ツー・ポイントのシリアル・リンク——直接の RS-232 でも電話上のモデムでも——は、ちょうど*二つの*端点をつなぐ。多ノードの網も、線上にない宛先へのルーティング決定もない。どの対のあいだにも専用ペアを置かずに多くの機械が互いに届くようスケールするには、別の賭けが要る：データをパケットに分け、ホップごとにルーティングし、リンクを共有する。それが ARPANET が証明しようとしたこと——次章。

{{< lab type="vm-terminal" >}}
