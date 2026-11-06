---
title: "スーパースカラとマルチコア"
weight: 24
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 23
aliases:
  - /posts/17-superscalar-multicore/
  - /posts/22-superscalar-multicore/
  - /posts/23-superscalar-multicore/
tags: []
summary: "ILPと電力が壁に当たった——産業はスレッドあたりの速さより幅へ向かった"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

アウト・オブ・オーダー発行、より深いパイプライン、より広いスーパースカラ幅——この Phase がここまで取り出してきたのは、*一本の*命令ストリームからの命令レベル並列（ILP）だ。2000年代半ばまでに、そのやり方は戦略を変えるほど硬い天井に当たった。

## 同時に二つの壁

実プログラムは、無制限の独立な仕事を差し出さない。分岐、真のデータ依存、メモリ・レイテンシが、単一ストリームから並行に走れる命令数を抑える。ROB を大きくし、予約ステーションを増やし、発行幅を広げる——面積と電力は増え、戻りは縮む。それがアーキテクチャの壁だ。

同時に、動的電力はおおむね容量・周波数・電圧の二乗に比例する（P ≈ CV²f）。ILP の細る利得をクロックで補おうとすれば熱にぶつかる——クロック速度の壁は、後の電力／Dennard 章で詳しく扱う。2000年代半ば、独立した二つの天井。どちらにも単独のきれいな直しはない。

## 速さより幅

転換はこうだ。一つのコアにサイクルあたりもっとやらせるのをやめ、同じダイに、やや単純なコアを複数載せ、それぞれに自分のストリームを持たせる。コアあたりの複雑さとクロックが頭打ちでも、チップのスループットは——それらのコアに渡す並列仕事があれば——上がり続けうる。

Kunle Olukotun ら ASPLOS 1996 の論は、ILP の収穫が平坦化するなかで、複数コアを一つのダイに載せる明示的な論拠の早い一つだ。([ACM Digital Library — Olukotun et al., ASPLOS 1996](https://dl.acm.org/doi/10.1145/237090.237140))

「速さ」の意味が変わった。単一スレッドのプログラムは、八コア対四コアで自動的には勝たない。おおむね同じクロックの一つのコアで走る。マルチコアの利得は、複数スレッド向けに書かれた（あるいはコンパイルされた）仕事にだけ現れる。ILP の時代は世代ごとに単スレッドの速さを「無料で」渡しがちだった。この時代は、並列を意識したソフトを要求する、と読むのは筆者の解釈である。

## 転換が指す先

同じ力——一つの複雑な単位より、多くの単純な単位——が、GPU（後続 Phase）の哲学をさらに押し進めた理由でもある。並列仕事を正しく協調させることが、リアルタイム系や分散系で一級の問題になる理由でもある。次のチップが一本のスレッドを速くしてくれるのを待つことが、もはや主な成長経路ではない。

**出口：** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — ILP の戻りが平坦化するなか、複数コアを一つのダイへ、という早い明示的論拠。
