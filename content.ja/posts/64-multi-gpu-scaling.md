---
title: "マルチ GPU スケーリング"
weight: 64
date: 2026-01-01
draft: false
phase: "9 — GPU と並列計算"
series_index: 63
aliases:
  - /posts/56-multi-gpu-scaling/
  - /posts/62-multi-gpu-scaling/
  - /posts/63-multi-gpu-scaling/
tags: []
summary: "一つの GPU は有限——GPU 間のインターコネクトが次の壁になる"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

一つの GPU には有限の計算と有限の HBM（第62章）がある。いまの最大モデルは多くの GPU を要す——一台のサーバ内、ついでクラスタ横断——そしてそれらの GPU がどう話すかが、どの単一 GPU のピーク仕様と同じくらい、実スループットを決めることが多い。

## 仕事を分けるのは無料ではない

第54章は、なぜデータ並列とモデル並列の分割がしばしば必要かを扱った。効率は、GPU がデータをどれだけ速く交換するかに依存する。通信が各 GPU の計算に対して遅いと、ピアは互いを待って止まる——メモリ・ウォール（第42章）が、CPU–DRAM ではなく GPU–GPU リンクに適用された形だ。

## 一台のサーバ内の直通経路

第44章は、CPU 経由の PCIe 経路を迂回する高帯域 GPU–GPU インターコネクトとして NVLink を導入した。サーバ内では、NVSwitch がそれを全対全にする：どの GPU もホストと PCIe 経由ではなく、NVLink 帯域で他のすべてへ届く。大きな勾配を絶えず交換するワークロードでは、その直通経路が、孤立したピーク FLOPS より達成学習スループットを決めることが多い。([Wikipedia — NVLink](https://en.wikipedia.org/wiki/NVLink))

## 一台の箱を超えて

大規模学習は多くのサーバにまたがる。第49章の RDMA の考えが戻る：GPUDirect RDMA は、ネットワーク・アダプタがホスト DRAM 経由の余分なコピーなしに、サーバ横断で GPU メモリを読み書きできるようにする——同じ「ホップを減らし、直通帯域を最大化する」賭けが、いまクラスタ尺度だ。

## 本シリーズが名指し続ける哲学

直通 GPU–GPU 経路、不要なホップの削減、一級の制約としてのインターコネクト——本シリーズが参照してきたカスタム GPU メモリ・ファブリックの後ろにあるのと同じ哲学：一ベンダーのスタック内で専有 GPU ファブリックがすることを、開いた PCIe ベースのやり方で。フェーズ 10 は、本当のデータセンタ尺度——一台の箱の一握りではなく、学習クラスタ横断の何千——で糸を拾う。総理論計算が協調で失われないよう結線する。
