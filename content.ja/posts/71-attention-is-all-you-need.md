---
title: "Attention Is All You Need"
weight: 71
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 70
aliases:
  - /posts/63-attention-is-all-you-need/
  - /posts/69-attention-is-all-you-need/
  - /posts/70-attention-is-all-you-need/
tags: []
summary: "自己注意が系列を並列の行列積へ開いた——リレーから注意へのアルゴリズムの到着点"
image_prompt: "Diagram of multi-head self-attention with Q,K,V projections and softmax attention weights, clean ML textbook style"
video_prompt: "20-second animation: tokens attending to all positions in parallel via QK^T softmax V, clean technical animation"
schematics: "Diagram: scaled dot-product attention + multi-head block"
---

本シリーズの題は *From Relays to Attention* だ。ここまでのすべては、大規模行列乗算を実務にした長い物理・アーキテクチャの道だった。本章は、その道が可能にしたアルゴリズムの到着点だ。

2017年、**Vaswani et al.** は "Attention Is All You Need" を発表した。論文は Transformer を導入し、*自己注意*を系列をモデル化する主機構にした——RNN と LSTM の逐次再帰を、どの位置も一度に見られる完全に並列化可能な演算で置き換えた。([Vaswani et al., NeurIPS 2017 — arXiv:1706.03762](https://arxiv.org/abs/1706.03762); [Wikipedia — Transformer (deep learning architecture)](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)))

## 自己注意がすること

トークン埋め込みが与えられると、自己注意はどの位置についても、すべての位置の値の重み付き結合を計算する。重みは、*クエリ*（現位置）と*キー*（どの位置）の類似から来る。行列形では：

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\)、\(K\)、\(V\) は入力の線形射影だ。
- \(\sqrt{d_k}\) でのスケールは、次元が大きいときに softmax が飽和するのを抑える。
- 結果は同じ長さの系列で、各位置がデータ依存の仕方で他のすべてから集めたものだ。

演算が matmul と softmax なので、前章のハード——高スループット MAC、大きなオンチップ・メモリ、活性化と重みを動かすインターコネクト——に写る。

## Multi-Head Attention

一つのヘッドは一つの種の関係を学びがちだ。Multi-head attention はいくつかを並列に走らせ（違う学習射影）、連結する——統語、意味、位置、長距離と短距離を同じ層で。

元の Transformer の base モデルは 8 ヘッド（大きなモデルは 16）を使った。近代 LLM は典型的に層あたり数十から百前後のクエリ・ヘッド（例：GPT-3：96；Llama 3 405B：128）を、数十から約 100+ 層（Llama 3 405B：126）横断で使う——どちらも日常的に「何百」ではない。([Vaswani et al., 2017](https://arxiv.org/abs/1706.03762); [Wikipedia — GPT-3](https://en.wikipedia.org/wiki/GPT-3); [Meta Llama 3.1 model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md))

## なぜ支配的になったか

1. **並列性** — RNN と違い、どの位置も一度に走れる。学習スループットは系列長とハードの matmul 容量でスケールし、逐次ステップではスケールしない。
2. **長距離依存** — 原理上どのトークンも他のどれへも直接注意でき、二次の注意行列と実務の文脈窓に限られる。
3. **ハード親和** — 支配的な仕事は密な行列乗算——テンソル・コア、シストリック・アレイ、近代 GPU メモリ階層が最適化したまさにそれ（第63–66章）。

フル注意の二次コストはなお本物だ——だから疎、線形、スライディング・ウィンドウなどの近似がある。核の洞察はなお立つ：単純で並列化可能な注意機構が再帰を置き換え得た。

## 弧を閉じる

ブール論理を実装した電磁リレーから、管、トランジスタ、パイプライン、キャッシュ、GPU、テンソル・コアまで、ハードの軌跡はスイッチング・記憶・算術をより速く、密に、効率的にした。注意は、系列モデリングのためにそのハードからいま最も価値を引き出すアルゴリズム構造だ。

物理制約は変わり続ける（メモリ帯域、演算あたりエネルギー、インターコネクト・レイテンシ）。工学の応答は、本シリーズの始めからの同じ型だ：縛る制約を正確に名指し、同じ壁をより強く押すだけでなくアーキテクチャを変える。

それが、リレーから注意への連続する糸だ。

**出口：** Ashish Vaswani et al., "Attention Is All You Need"（NeurIPS 2017）——Transformer を導入し、自己注意を支配的な系列モデル機構にした一次論文。
