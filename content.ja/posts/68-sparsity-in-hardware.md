---
title: "ハードにおけるスパース性"
weight: 68
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 67
aliases:
  - /posts/60-sparsity-in-hardware/
  - /posts/66-sparsity-in-hardware/
  - /posts/67-sparsity-in-hardware/
tags: []
summary: "精度が各演算を安くする——スパース性はゼロの演算を飛ばす"
image_prompt: "Diagram of dense vs 2:4 structured sparse weight matrices feeding specialized MAC hardware, clean AI-hardware infographic"
video_prompt: "15-second animation: zeros in a weight matrix causing MAC units to skip, structured 2:4 pattern highlighted, clean technical animation"
schematics: "Diagram: unstructured vs 2:4 structured sparsity + hardware skip path"
---

前章は精度削減で各演算を安くした。スパース性は相補のレバーだ：何も寄与しない演算——オペランドがすでにゼロの乗算——を飛ばす。

## なぜネットはしばしば疎か

訓練済みネットは、しばしば多くの重みがゼロ近くにある——訓練の動態から、あるいは正確さを少し払ってより小さく安いモデルのために、より多くの重みを厳密ゼロへ押す意図的な剪定から。ゼロかける何物かは無演算だ；その MAC を飛ばせば、近代モデルが走る尺度で本物の時間とエネルギーを節約する。スパース行列の型と、深層学習におけるモデル圧縮（剪定を含む）は、公開文献で広く文書化されている。([Wikipedia — Sparse matrix](https://en.wikipedia.org/wiki/Sparse_matrix); [Wikipedia — Deep learning](https://en.wikipedia.org/wiki/Deep_learning))

## 非構造対構造

**非構造**スパース性はゼロを任意に散らす。密な matmul ハード（テンソル・コア、シストリック・アレイ）は規則的な仕事向けに建てられており；任意のゼロを飛ばすには、節約を消し得る制御の複雑さが要る。

**構造**スパース性は、ハードに優しいパターンを強いる——よくある 2:4：四つの重みの各グループで、ちょうど二つがゼロ（位置は変わってよい；*数*は固定）。予測可能な構造こそ、専用ハードが控えめで規則的な制御論理で飛ばせるものだ。NVIDIA は、Ampere 世代向けに 2:4 構造スパース性を文書化し、密に対して最大 2× の疎行列演算スループットを謳う。([NVIDIA Developer — Structured Sparsity](https://developer.nvidia.com/blog/accelerating-inference-with-sparsity-using-ampere-and-tensorrt/))

## 見返り——と隙間

構造スパース対応ハードは、2:4 重み行列で密に対し最大 2× の数学スループットを広告し得る。実 GEMM はしばしばおよそ 1.3–1.8× に着地し；端到端ネットはおよそ 1.3–1.5× 近く——カーネル、メモリ、精度を保つ剪定／再訓練に限られる。なお第65章の主題だ：どの計算が構造的に不要か分かれば、シリコンはそれを飛ばすよう建てられる——理論と生産が離れていても。

## 精度と合成する

スパース性と精度削減は二者択一ではない。近代アクセラレータはしばしば両方を搾る：低精度で構造的に疎な MAC——より安い演算*と*より少ない数——を、同じ固定面積と電力予算の中で。
