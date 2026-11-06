---
title: "GPU メモリ階層"
weight: 62
date: 2026-01-01
draft: false
phase: "9 — GPU と並列計算"
series_index: 61
aliases:
  - /posts/54-gpu-memory-hierarchy/
  - /posts/60-gpu-memory-hierarchy/
  - /posts/61-gpu-memory-hierarchy/
tags: []
summary: "何千スレッドが DDR 上の帯域を強いる——HBM がメモリを計算の横に積む"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

第42章はメモリ・ウォールに名を付けた：DRAM レイテンシが計算に遅れ、産業はレイテンシが頑固なところで*帯域*を追った。その応答がいちばん結果大きいのが GPU メモリだ——第60–61章の並列スループットが、従来の DDR（第41章）では養えない食欲を生む。

## なぜ GPU は CPU 風メモリで飢えるか

CPU は控えめな数の命令ストリームを走る；キャッシュ（第22章）がしばしばワーキングセットを吸収する。GPU は多くの SM 横断で何千スレッドが一度にメモリを欲しがり得る。オンチップ・キャッシュは助けるが、同程度の電力での CPU メモリ子系统より総帯域需要は劇的に高い——別の物理答えを強いた制約だ。

## HBM：ダイの横に積む

High Bandwidth Memory は DRAM ダイを垂直に積み、別 DIMM への長い PCB トレースではなくスルー・シリコン・ビア（TSV）でつなぐ。非常に広いインタフェースと合わせ、同等の DDR よりはるかに多い帯域を出す——第59章の先端パッケージで払う。Wikipedia は、HBM を、TSV で積んだ DRAM ダイによる高帯域インタフェースとし、GPU やアクセラレータと一緒にパッケージされる、と書く。([Wikipedia — High Bandwidth Memory](https://en.wikipedia.org/wiki/High_Bandwidth_Memory)) HBM と GPU 計算ダイは典型的にシリコン・インターポーザを共有する：チップレットに使った同じパッケージ族を、ここでは機能ダイの分解ではなく、メモリを計算の*横*に置くために適用する。

## GPU 内部の階層

HBM 対 DDR を超えて、GPU は自前のピラミッドを持ち、第17章のレジスタ–キャッシュ–主記憶の形を GPU 固有の段で響かせる。各 SM のレジスタ・ファイルが最速の局所ストアだ。共有メモリ——SM 上のプログラマ管理スクラッチパッド——は、ブロック内スレッドがより遠くへ往復せずにデータを共有できるようにする。L2 キャッシュが GPU 全体にまたがる。HBM が「主記憶」段：CPU DRAM よりはるかに高い帯域、なおオンチップの何より高いレイテンシ——同じレイテンシ対容量の取引が、GPU 尺度である。

## 次が何を食べるか

このアーキテクチャは、巨大な計算の食欲を養い続けるために存在する。ピーク FLOPS は、オペランドが到着し結果が帰れなければ無意味だ。次章のテンソル・コアは、HBM の帯域が供給するよう建てられた計算構造だ——帯域の枠を前へ運べ：テンソル・コアのピークは、それを支えられるメモリ系に対してだけ意味を持つ。
