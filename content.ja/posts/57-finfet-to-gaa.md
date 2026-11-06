---
title: "FinFET から GAA へ"
weight: 57
date: 2026-01-01
draft: false
phase: "8 — プロセス・ノードと製造"
series_index: 56
aliases:
  - /posts/49-finfet-to-gaa/
  - /posts/55-finfet-to-gaa/
  - /posts/56-finfet-to-gaa/
tags: []
summary: "短チャネル漏れがプレーナ縮小を殺した——ゲートを巻く（FinFET）、それから全周（GAA）"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

第13章はプレーナ MOSFET——シリコン上に平らなゲート・ソース・ドレイン——を導入した。その幾何は何十年も仕えた。トランジスタが縮むにつれ（リソグラフィは第56章）、プレーナ設計は、さらなる縮小だけでは直せない壁に当たった：ゲートがチャネルの信頼できる制御を失った。

## 短チャネル効果

プレーナのチャネル長が縮むと、チャネル上のゲート（第13章の電界制御）の権威が比例して減り、オフであるべきときに電流が漏れる。それは物理であり、プロセスのバグではない。ある点を過ぎると、*プレーナ*・トランジスタを縮めてもきれいなスイッチングが得られず——さらなるプレーナ・スケーリングは割に合わなくなる。Wikipedia は、短チャネル効果を、チャネル長が短くなるにつれ現れる MOSFET の望ましくない現象族とし、閾値低下や漏れの増加を含む、と書く。([Wikipedia — Short-channel effect](https://en.wikipedia.org/wiki/Short-channel_effect))

## FinFET：三方の制御

FinFET は大きさだけでなく幾何を変える：チャネルを薄い垂直フィンに上げ、ゲートを三方（上面と両壁）で巻く。同じチャネル長で、より多くのチャネルがゲートの影響下に座り、プレーナ縮小を殺していた短チャネル漏れを抑える。Wikipedia は、FinFET を非プレーナのマルチゲート・トランジスタとし、チャネルが薄いフィンを成しゲートが複数面を包む、と書く。([Wikipedia — FinFET](https://en.wikipedia.org/wiki/FinFET))

産業は 2010年代前半に FinFET を量産へ移した（Intel の 22 nm Ivy Bridge 世代、2011–2012 が早い高量産の里程標の一つ）。Wikipedia は、Intel が 2011年に 22 nm でトライゲート（FinFET）・トランジスタを量産へ導入した、と記す。([Wikipedia — FinFET](https://en.wikipedia.org/wiki/FinFET)) クロック速度の壁（第43章）のあとマルチコアへ舵を切ったのと同じ型だ（第24章）：本物の物理天井に当たったら、古い形をより強く押すだけでなく、構造を変える。

## Gate-All-Around：四方

三方の巻きは静電の最大ではない。Gate-all-around（GAA）——水平ナノシートまたはナノワイヤ・チャネル——は、ゲートがチャネルを四方すべてで囲める。先端ノード（第55章）は、FinFET 自体が実務限界へ近づくにつれそこへ移っている：プレーナ→FinFET と同じ一手が、幾何を一段あとにした形だ。Wikipedia は、GAAFET／ナノシートを、ゲートがチャネルを全周で包むマルチゲート装置とし、FinFET の後継として先端ノードで採用されつつある、と書く。([Wikipedia — Multigate device](https://en.wikipedia.org/wiki/Multigate_device))

## 繰り返す型

プレーナ → FinFET → GAA は、本シリーズのスケーリングの教訓の装置形だ。電気の壁（ここでの短チャネル効果）、熱の壁（第43章）、レイテンシの壁（第42章）はどれも、やがて同じ設計をより強くするだけでなく、アーキテクチャを強いる。チップレット（のちの章）はその型を一段上——トランジスタではなく、チップ全体の組み立て——に適用する。
