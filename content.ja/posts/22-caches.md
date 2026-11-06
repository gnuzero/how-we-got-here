---
title: "キャッシュ"
weight: 22
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 21
aliases:
  - /posts/15-caches/
  - /posts/20-caches/
  - /posts/21-caches/
tags: []
summary: "局所性がメモリ階層を動かし、連想度とコヒーレンスがそれを正直に保つコストだ"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

前のメモリ階層の章が据えたのは、レジスタ、SRAM キャッシュ、DRAM、ディスク——各段で容量と速さを取り替えるピラミッドだ。キャッシュは、その取引が CPU の性能を運ぶ場所だ。前提は実プログラムについての一つの経験事実：**局所性**である。

## キャッシュがそもそも効く理由

**時間的局所性**——さっき触った場所は、すぐまた触られやすい（ループ変数、ホットなコード）。**空間的局所性**——近くの場所が次に来やすい（配列、逐次フェッチ）。キャッシュは最近使ったデータを近くに置き、ミスでは*ライン*ごと取って、隣がすぐに来ることに賭ける。Intel の最適化解説は、「The size of one cache line is 64 bytes」とし、メモリからの読みでは少なくとも一行がキャッシュへコピーされる、と書く。([Intel Developer Zone — Loop Optimizations Where Blocks are Required](https://www.intel.com/content/www/us/en/developer/articles/technical/loop-optimizations-where-blocks-are-required.html))

参照はアドレスを**オフセット**（ライン内バイト）、**インデックス**（どのセットか）、**タグ**（いるラインは本当に欲しいものか）に分ける。

## ラインが住める場所

**ダイレクト・マップ**——アドレスごとに一つのスロット。検査は速い。ホットな二つのアドレスが同じインデックスを共有すると衝突ミスで叩き合う。

**フル・アソシアティブ**——どのラインもどのスロットへ。衝突ミスはない。毎回すべてのタグを比べる。スケールしない。

**セット・アソシアティブ**——実用の中間。インデックスが小さなセット（たとえば 8 ウェイ）を選び、タグはそこでだけ比べる。柔軟さの大半を、フル走査よりはるかに少ないハードウェアで得る。実キャッシュのほとんどがここに座る。

## マルチコア：新しい制約としてのコヒーレンス

コア一つ、私有キャッシュ一つなら問題は小さい。多くのコアがそれぞれキャッシュを持つと、コア A が書いたラインをコア B がなお持つ——プロトコルなしでは B は永遠に古い値を読む。University of Texas at Austin の講義ノートは、MESI（Modified, Exclusive, Shared, Invalid）を実用のマルチプロセッサ無効化プロトコルとし、各状態を次のように書く。Modified：ラインは変更済みでメモリと異なり、このキャッシュのみが持つ。Exclusive：メモリと同じで他キャッシュにコピーなし。Shared：メモリと同じで他にもコピーがありうる。Invalid：データは無効。遷移はバス・スヌープなどの活動で起きる、ともある。([UT Austin CS377P, Cache coherence / MESI](https://www.cs.utexas.edu/~pingali/CS377P/2019sp/lectures/mesi.pdf))

コヒーレンスは無料ではなく、コア数が増えるとコストも増える——「コアを足せばよい」（後章）が、ILP の天井とは別に収穫逓減を持つ理由の一つだ、と読むのは筆者の解釈である。

**出口：** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — 遅い主記憶の横に速いスレーブ記憶を置く、というキャッシュ着想の早い声明。
