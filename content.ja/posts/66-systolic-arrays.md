---
title: "シストリック・アレイ"
weight: 66
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 65
aliases:
  - /posts/58-systolic-arrays/
  - /posts/64-systolic-arrays/
  - /posts/65-systolic-arrays/
tags: []
summary: "データがリズムで流れ、MAC が途中で起きる——Kung/Leiserson から TPU の MXU へ"
image_prompt: "Diagram of a 2D systolic array with data waves moving through MAC processing elements, clean VLSI textbook style"
video_prompt: "20-second animation: activations streaming across a weight-stationary PE grid with partial sums propagating, clean technical animation"
schematics: "Diagram: weight-stationary systolic dataflow + TPU MXU block context"
---

第63章はテンソル・コア——なお汎用の GPU の中の専用 matmul ハード——を扱った。シストリック・アレイは特化をさらに押す：行列乗算のために、単純な処理要素の格子を通してデータを流すよう組織されたアーキテクチャだ。Google の TPU（Tensor Processing Unit）がいちばん目立つ出荷例だ。考え自体はより古い：**H. T. Kung** と **Charles E. Leiserson** が 1970年代末に VLSI 向けシストリック・アレイに名を付け、形式化した。Wikipedia は、シストリック・アレイを、データがリズムよく処理要素の網を流れる均一な計算アーキテクチャとし、Kung と Leiserson に帰す、と書く。([Wikipedia — Systolic array](https://en.wikipedia.org/wiki/Systolic_array))

## データが流れ；計算は途中で起きる

シストリック・アレイは、単純な処理要素の 2D 格子で、各々が積和し、データが協調したリズムで動くよう並べられる。各 PE はデータが着くと MAC を行う。重み固定設計（Google の TPU MXU のように）では、重みをあらかじめ載せ保持し、活性化が横断し部分和が隣へ伝播する——シストリックな「心拍」であり、両オペランドが自由にうろつくのではない。名前は意図的に心臓の脈を響かせる：データは中央の共有制御経路経由のフェッチではなく、波で動く。

## 重み固定データフロー

重みを*固定*する——各 PE に一度載せる——一方で活性化が通り過ぎ、保持した重みに掛けられ、部分和が格子を通って累積する。一度載せたら、重みは MAC ごとに再フェッチしなくてよい。第42章と第62章のメモリ帯域圧力を考えれば、それは効く：再利用値を計算の場に保ち、データ移動を切る——シストリック設計が答えるよう建てられた同じ制約だ。

## GPU テンソル・コア対シストリック・チップ

テンソル・コアは、matmul を超える多くの並列仕事を走らせられるなお汎用の SIMT アーキテクチャ（第60–61章）の中に座る。TPU のようなシストリック・アレイ・チップはより狭い賭けをする：*チップ全体*を効率的な行列乗算のまわりに組織し、その形に合わない仕事への柔軟さは減らす。どちらが厳密に良いわけではない——matmul 支配負荷での効率対、より広い並列の混在での柔軟さ。

## 専用の心臓としての MXU

Google の TPU では、Matrix Multiply Unit（MXU）が matmul スループットの大半を運ぶシストリック・アレイで、制御、メモリ・インタフェース、非 matmul 残り向けのベクトル単位の横に座る。Wikipedia は、TPU を Google の AI アクセラレータ ASIC 族とし、行列演算向けに設計された、と書く。([Wikipedia — Tensor Processing Unit](https://en.wikipedia.org/wiki/Tensor_Processing_Unit)) 専用コアに支える論理を足すのが、本フェーズのアクセラレータ横断で繰り返す型だ。

**出口：** H. T. Kung and Charles E. Leiserson, "Systolic Arrays (for VLSI)"（*Sparse Matrix Proceedings 1978*, SIAM, 1979）——行列計算向けリズム MAC アレイの古典声明；近い形は Mead and Conway『Introduction to VLSI Systems』（1980）にも現れる。
