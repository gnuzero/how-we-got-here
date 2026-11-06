---
title: "量子化と混合精度"
weight: 67
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 66
aliases:
  - /posts/59-quantization-mixed-precision/
  - /posts/65-quantization-mixed-precision/
  - /posts/66-quantization-mixed-precision/
tags: []
summary: "ビットを減らせば同じ封筒に MAC がもっと入る——誤差との取引が混合精度を生む"
image_prompt: "Comparison of FP32, FP16, BF16, FP8, INT8 bit layouts beside a mixed-precision training diagram, clean numerical-formats infographic"
video_prompt: "15-second animation: wide FP32 MACs shrinking to narrower formats packing denser into the same die area, clean technical animation"
schematics: "Diagram: floating-point format bit fields + mixed-precision training data path"
---

第63章は結びつきに旗を立てた：テンソル・コアとシストリック・アレイの効率は、走る数値精度に依存する。本章は、なぜより低い精度が中心のレバーになったか——そして何を差し出して得るか——だ。

## ここで精度が意味すること

形式は、固定ビット予算で範囲と精度を取り替える。FP32（符号、指数 8 ビット、仮数 23）は伝統的な科学の既定だ。FP16 と BF16 は半分のビットを使う——BF16 は FP32 の指数範囲を保ち、仮数により少なく使うので、細粒度より動的範囲を好む。FP8 はさらに進み；INT8 は浮動小数を捨て、必要な範囲へ戻すスケール付き固定整数にする。Wikipedia は、bfloat16 を、FP32 と同じ指数ビット数を持つ 16 ビット浮動小数形式とし、深層学習向けに使われる、と書く。([Wikipedia — Bfloat16 floating-point format](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format); [Wikipedia — Half-precision floating-point format](https://en.wikipedia.org/wiki/Half-precision_floating-point_format))

## ビットが減ればスループットが増える

第13–14章は、回路面積が計算するものにスケールする、と据えた。FP32 MAC は FP16 や INT8 より多くのトランジスタと電力を要す。面積と電力の予算が固定なら（第43章の壁はなおアクセラレータを縛る）、より低い精度は同じ封筒により多くの並列 MAC スループットを詰める。それは物理の理由——アルゴリズム選択だけではない——で、テンソル・コアとシストリック・アレイがしばしば特定の低精度形式のまわりに設計される理由だ。

## 何が取引されるか

精度を下げると値は粗くなり、長い鎖で丸め誤差が増える。経験的に、多くのニューラルネットはそれをよく耐える——とりわけ推論で、学習の大部分でも注意すれば——それは事前には自明ではなく、示されねばならなかった。

## 一括低精度ではなく、混合

混合精度の学習と推論は、ハードのスループット利得がある重い matmul に低精度（しばしば FP16 または BF16）を使い、数値に敏感な仕事——丸めが複合する累積など——には高精度（しばしば FP32）を保つ。フル精度は稼ぐところだけ：だから用語は単に*低*ではなく*混合*だ。Wikipedia は、混合精度訓練を、計算の異なる部分に異なる数値精度を使う手法として説明する。([Wikipedia — Mixed-precision arithmetic](https://en.wikipedia.org/wiki/Mixed-precision_arithmetic) 関連；深層学習文脈は [Wikipedia — Quantization (signal processing)](https://en.wikipedia.org/wiki/Quantization_(signal_processing)) の応用としても論じられる)

## 次のレバー

精度は各演算を安くする。次章のスパース性は、既知のゼロが何も寄与しないとき、演算をまるごと飛ばすことを狙う。
