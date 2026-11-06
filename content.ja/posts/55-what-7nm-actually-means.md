---
title: "「7nm」が実際に意味するもの"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — プロセス・ノードと製造"
series_index: 54
aliases:
  - /posts/47-what-7nm-actually-means/
  - /posts/53-what-7nm-actually-means/
  - /posts/54-what-7nm-actually-means/
tags: []
summary: "ノード名は長いあいだゲート長ではなかった——世代の印であり、横断ファウンドリの物理仕様ではない"
image_prompt: "Comparison chart of marketing node names vs measurable pitches across foundries, clean semiconductor infographic style"
video_prompt: "15-second animation: a ruler labeled 7nm sliding off a FinFET cross-section as multiple pitch arrows appear, clean technical animation"
schematics: "Diagram: historical gate-length naming vs modern multi-pitch FinFET/GAA metrics"
---

本シリーズのこれまでのシリコン装置——MOSFET（第13章）、CMOS（第14章）、メモリ・セル（第17章）——は、製造精度が可能を決める尺度に住む。「7nm」や「5nm」といったラベルは、トランジスタ上の一つの測れる長さであるかのように扱われる。長いあいだ、そうではなかった。

## 名前が長さだったとき

歴史的に、プロセス・ノード名は実寸——おおむねプレーナ MOSFET の最小ゲート長——を追った。何十年も、ノード名は装置上に指差せるものを意味した。その対応は、プレーナが道を譲るずっと前に壊れた：Intel の 2021年7月のノード改名発表（SEC Form 8-K に提出）は、産業が「伝統的なナノメートル・ベースのプロセス・ノード命名が、1997年に実際のゲート長指標と一致しなくなったことを長く認識してきた」と書く。([Intel Form 8-K, July 26, 2021 — via SEC](https://www.sec.gov/Archives/edgar/data/50863/000005086321000069/a8-knodeleadership.htm)) プレーナ・トランジスタは 2010年代まで生産に残り、プレーナ時代の多くで名前はすでに測定ではなくラベルだった。

## なぜ一数字では足りなくなったか

FinFET と、のちの Gate-All-Around 構造（第56–57章）は、ゲート長を、荷重を支えるいくつかの寸法の一つにすぎなくした。フィン高さ、フィン・ピッチ、ゲート・ピッチ、インターコネクト・ピッチはどれも独立に効く——そして違うファウンドリ（TSMC、Samsung、Intel）はそれらを違う取引で取る。「7nm」プロセス二つは、同じラベルの下の同じ物理ではない。

## ラベルがいま何か

近代のノード名は、ほとんど世代の印——「次の、より密で効率的な世代」——であり、横断ファウンドリの物理仕様ではない。意味のある比較は、独立に測れる量を使う：フィン・ピッチ、ゲート・ピッチ、平方ミリあたりトランジスタ数。それらはしばしば、あるファウンドリの「7nm」が他より密いことを示す。ブランディングがどの単一長さからも切り離されたからだ。Wikipedia は、半導体「プロセス・ノード」または「技術ノード」が、いまでは特定の幾何寸法に厳密に対応しないマーケティング用語として使われることが多い、と書く。([Wikipedia — Semiconductor device fabrication](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication))

## なぜ隙間が重要か

「TSMC の 5nm 対 Samsung の 5nm」は、文字列が一致しても同一条件ではない。命名の隙間はプレーナ時代に開き、設計空間が一次元でなくなった——プレーナのゲート長が 3D 幾何と多ピッチの取引へ道を譲った——ときに広がった。それが次章の設定だ：なおそれらの構造を刷れるリソグラフィ（第56章）と、単一長さを廃れたにしたトランジスタ幾何の移行（第57章）。
