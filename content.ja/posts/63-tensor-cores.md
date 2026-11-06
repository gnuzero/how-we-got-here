---
title: "テンソル・コア"
weight: 63
date: 2026-01-01
draft: false
phase: "9 — GPU と並列計算"
series_index: 62
aliases:
  - /posts/55-tensor-cores/
  - /posts/61-tensor-cores/
  - /posts/62-tensor-cores/
tags: []
summary: "行列の積和が支配的な AI 演算になった——だからハードがそれを一級の原始にした"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

第61章は CUDA コア——広い並列仕事向けの汎用 SIMT レーン——を扱った。テンソル・コアはより狭い：一つの演算——行列の積和——向けの専用ハードで、近代ニューラルネット計算を支配する。その演算に特化し、同じ仕事を汎用 CUDA コアだけより速くする。

## なぜ行列積か

全結合層、畳み込み（matmul へ再定式化）、トランスフォーマの注意はどれも、核では行列の積和へ還元される——その効率が系性能を支配する尺度で。その集中が、目的特化シリコンを割に合うものにする。

## テンソル・コアがすること

テンソル・コアは、小さな固定サイズの行列積和——例えば二つの 4×4 を三つ目へ——を、汎用 CUDA コア経由の長い別々の乗算・加算命令列ではなく、一つのハード演算として融合する。融合は、有用な算術に対する演算あたりオーバーヘッド（フェッチ、デコード、オペランド・ルーティング）を切る。大きな積はタイル化される：部分ブロックを順に入れ、部分を累積する——効率的な深層学習カーネルを自前の技にする協調仕事だ。Wikipedia は、NVIDIA の Tensor Core を、混合精度の行列演算を加速する専用ユニットとし、Volta 以降に導入された、と書く。([Wikipedia — CUDA](https://en.wikipedia.org/wiki/CUDA); [Wikipedia — Volta (microarchitecture)](https://en.wikipedia.org/wiki/Volta_(microarchitecture)))

## 精度はシリコンに結びつく

テンソル・コアはしばしば、より低い精度（FP16、BF16、INT8、ますます FP8）で最も効率よく走る。狭い算術は演算あたり面積と電力が少なく、同じ予算でより多くの MAC スループットを詰められる。第67章がこれを十分に戻る：精度削減は純粋なソフト選択ではない——各形式で下の MAC ハードがどれだけ効率よく走るかと結びつく。

## 唯一の答えではない

テンソル・コアは、なお汎用の GPU の中の NVIDIA の答えだ。フェーズ 10 は、同じ matmul 目標のために、ハード水準で違う組織をしたシストリック・アレイ——とりわけ Google の TPU——を扱う。同じ制約；違うアーキテクチャ。
