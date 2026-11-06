---
title: "機械学習のソフトウェア・スタック"
weight: 54
date: 2026-01-01
draft: false
phase: "7 — 分散システム・ビッグデータ・オーケストレーション"
series_index: 53
aliases:
  - /posts/46-the-machine-learning-software-stack/
  - /posts/52-the-machine-learning-software-stack/
  - /posts/53-the-machine-learning-software-stack/
tags: []
summary: "配列から勾配、デバイス・カーネル、分散——ニューラルネットワークの衣を着た分散系"
image_prompt: "Layered diagram from NumPy tensors through PyTorch/TensorFlow to CUDA kernels and multi-GPU all-reduce, clean ML-systems diagram style"
video_prompt: "20-second animation: a model graph lowering to GPU kernels then synchronizing gradients across devices, clean technical animation"
schematics: "Diagram: ML software stack layers + data vs model parallelism"
---

フェーズ 9 と 10 は、近代 AI 計算のハード——GPU、テンソル・コア、インターコネクト——を扱う。大半の ML 技術者はそのシリコンを直接プログラムしない。「ここにネットワーク構造がある」と「ここに本物の装置上の行列積がある」のあいだにソフト・スタックが座り、それが本シリーズの分散系の糸が実際に*使われる*仕方だ。

## まず配列

実務の床は多次元配列（テンソル）とベクトル化演算——Python 世界では NumPy 級の数値計算だ。重い持ち上げは、Python から*呼ばれる*コンパイル済みルーチンで走る；インタプリタ・ループは数学のボトルネックではない。Wikipedia は、NumPy を Python の科学計算向け配列プログラミング・ライブラリとし、大規模多次元配列と演算を提供する、と書く。([Wikipedia — NumPy](https://en.wikipedia.org/wiki/NumPy))

## フレームワーク：勾配とハードを一つの契約に

深層学習フレームワーク（支配的な例としての PyTorch と TensorFlow）は、配列の上に学習が要るものを足す。**自動微分**は計算グラフを建て、どの構造にも人間が微積分を再導出せずに勾配を出す——研究のペースで勾配降下を実用にする制約だ。**ハード抽象**は、同じモデル・コードが CPU、CUDA 経由の NVIDIA GPU（フェーズ 9）、他のアクセラレータを、テンソル演算を最適化カーネルへ下げることで狙えるようにする——ISA／マイクロアーキテクチャ分割（第18章）と同じ*種*の契約が、ソフトの一段上にある。Wikipedia は、自動微分をコンピュータ・プログラムの導関数を自動評価する手法族とし、深層学習の訓練に広く使われる、と書く。([Wikipedia — Automatic differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation); [Wikipedia — PyTorch](https://en.wikipedia.org/wiki/PyTorch))

## グラフを下げる

フレームワーク演算とデバイス・カーネルのあいだに、ますますコンパイラ層が座る：演算子を融合し、メモリ交通を切り、中間表現をターゲットへ下げる。それは第35章のコンパイラの考えを、一般の命令型コードではなくテンソル・グラフへ適用したものだ——最適化して下げる；毎回字句解析し直さない。

## 分散が線に当たる

一つの GPU のメモリ（フェーズ 9 の HBM）は、近代の大規模モデルを、まして単独で学習することを、しばしば収められない。**データ並列**はモデルを複製し、バッチを分け、勾配を同期する（all-reduce——フェーズ 10／第44章と第49章）。**モデル並列**は、どこにも一度に収まらないとき、モデル自体を装置間で割る。実学習は両方を混ぜる。スループットは、どの単一 GPU が孤立して掛ける速さではなく、GPU が勾配と活性化をどれだけ速く交換するかでしばしば限られる。前章のインターコネクトの壁が、学習の壁として戻る。

## 本フェーズのループを閉じる

近代の ML 学習は、ニューラルネットワークの衣を着た分散系問題だ：多くの計算単位を協調させ、部分失敗を吸収し（GFS、Kubernetes）、巨大な中間データを効率よく動かす。そのソフト半分のないハード——あるいはシリコンとファブリックのないソフト——は、フェーズ 9 と 10 が仕上げる物語の半分にすぎない。
