---
title: "用語集"
weight: 102
date: 2026-01-01
draft: false
phase: "Reference"
series_index: 101
aliases:
  - /posts/99-glossary/
tags: ["glossary", "reference"]
summary: "シリーズ全体で使う主要用語の簡潔な定義"
---

# 用語集

*How We Got There* 横断でいちばん重要な用語の簡潔な参照。定義は各章の一次・機関ソースと標準用語用法に沿う。([Wikipedia — Glossary of computer science](https://en.wikipedia.org/wiki/Glossary_of_computer_science) が同種の地図)

**Attention（Self-Attention）**  
系列のどの位置についても、すべての位置の値ベクトルの重み付き和を計算する機構。重みはクエリとキーの類似から来る。Transformer の核となる計算パターン。([Wikipedia — Attention (machine learning)](https://en.wikipedia.org/wiki/Attention_(machine_learning)))

**Branch Prediction（分岐予測）**  
条件が解けるのを待たずにパイプラインがフェッチと実行を続けられるよう、条件分岐の方向をハードが推測すること。

**Cache（キャッシュ）**  
最近使ったデータや命令を持つ小さく速いメモリで、プロセッサが毎回はるかに遅い主記憶を待たなくてよいようにする。([Wikipedia — CPU cache](https://en.wikipedia.org/wiki/CPU_cache))

**Chiplet（チップレット）**  
他のチップレットとパッケージされ、より大きな論理プロセッサまたはアクセラレータを成す、より小さなダイ。先端ノードでの製造歩留まり改善に使われる。([Wikipedia — Chiplet](https://en.wikipedia.org/wiki/Chiplet))

**Combinational Logic（組合せ論理）**  
出力が現在の入力だけに依存する論理（過去状態の記憶なし）。ゲートから組む；順序論理の対。

**CUDA**  
汎用コードを GPU 上で走らせられるようにする、NVIDIA の並列計算プラットフォームとプログラミング模型。([Wikipedia — CUDA](https://en.wikipedia.org/wiki/CUDA))

**Datapath（データパス）**  
命令の実際の算術とデータ移動を行う機能単位（ALU、レジスタ、マルチプレクサなど）の集まり。

**FinFET**  
チャネルが垂直の「フィン」であるトランジスタ構造。プレーナ MOSFET の後継であり、最先端では Gate-All-Around（GAA）に継がれた。([Wikipedia — FinFET](https://en.wikipedia.org/wiki/FinFET))

**Instruction Set Architecture（ISA）**  
ソフトとハードのインタフェース：プロセッサが実行できる命令の集合と、レジスタ、メモリ模型、呼び出し規約。

**Matrix Multiply-Accumulate（MAC）**  
演算 \(D = A \times B + C\)。近代ニューラルネットの支配的な算術パターンであり、専用単位（テンソル・コア、シストリック・アレイ）が存在する理由。

**Moore’s Law（ムーアの法則）**  
費用対効果のよいチップ上のトランジスタ数がおよそ二年ごとに倍になる、という観察（そして何十年も産業目標）。([Wikipedia — Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law))

**Out-of-Order Execution（アウト・オブ・オーダ実行）**  
命令を厳密なプログラム順ではなく、オペランドが用意できしだい実行し、レイテンシを隠すマイクロアーキテクチャ技法。

**Pipeline（パイプライン）**  
命令実行を段階に分け、複数命令が同時に違う完成段階にいられるようにし、スループットを上げること。

**Relay（リレー）**  
電気機械スイッチ：通電すると接点を動かすコイル。初期デジタル計算機（Zuse Z3 など）のスイッチング原始。

**RISC / CISC**  
Reduced 対 Complex Instruction Set Computer。ISA 設計の二つの哲学；近代高性能設計は実務上大きく収束した。

**Sequential Logic（順序論理）**  
記憶を持つ論理（フリップフロップ、ラッチ、レジスタ）。出力は現在の入力と過去状態の両方に依存する。

**Systolic Array（シストリック・アレイ）**  
リズムよく計算し隣へデータを渡す、処理要素の規則的格子。密な行列乗算に極めて効率的。([Wikipedia — Systolic array](https://en.wikipedia.org/wiki/Systolic_array))

**Tensor Core**  
NVIDIA の Volta アーキテクチャ（2017）で初めて導入された専用行列乗算ハード単位。深層学習で一般的な混合精度行列演算向け。

**Transformer**  
“Attention Is All You Need”（2017）で導入されたニューラルネット・アーキテクチャ。主に自己注意とフィードフォワード層から成り；近代大規模言語モデルの基盤。([Wikipedia — Transformer (deep learning architecture)](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)))

**Vacuum Tube（真空管／バルブ）**  
トランジスタ以前の電子スイッチ／増幅器。最初の電子デジタル計算機（ENIAC など）で使われた。高電力、大型、限られた信頼。

**Virtual Memory（仮想メモリ）**  
各プロセスに大きく連続したアドレス空間の幻想を与え、ハードと OS がそれらのアドレスを物理 RAM と二次記憶へ写すメモリ管理技法。([Wikipedia — Virtual memory](https://en.wikipedia.org/wiki/Virtual_memory))
