---
title: "メモリ・ウォール"
weight: 42
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 41
aliases:
  - /posts/35-the-memory-wall/
  - /posts/40-the-memory-wall/
  - /posts/41-the-memory-wall/
tags: []
summary: "CPU 速度と DRAM レイテンシは何十年も乖離した——キャッシュは隙間を隠すが、閉じはしない"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

前章は分かれ目で閉じた：DDR の帯域は伸び、DRAM の*レイテンシ*は伸びなかった。ズームアウトすると、その分かれは何十年も広がってきた系全体の隙間だ。

## 乖離する指数

Wm. A. Wulf と Sally A. McKee が 1995年に名を付けた。プロセッサ速度と DRAM 速度はどちらも指数的に改善するが、指数が違う——そして乖離する指数の差は指数的に広がる。Wikipedia は、彼らの短いノート "Hitting the Memory Wall: Implications of the Obvious"（*ACM SIGARCH Computer Architecture News*, 1995）が、プロセッサ性能の伸びがメモリ・レイテンシの伸びを大きく上回る問題を「メモリ・ウォール」として論じた、と書く。([Wikipedia — Memory wall](https://en.wikipedia.org/wiki/Memory_wall); [ACM DL — Wulf & McKee, 1995](https://dl.acm.org/doi/10.1145/216585.216588)) CPU 性能（クロックとアーキテクチャ）が走り去り、DRAM レイテンシははるかに小さな因子しか改善しなかった。結果を彼らは**メモリ・ウォール**と呼んだ：静かに吸収される迷惑ではなく、構造的な限界だ。

## なぜ帯域は動き、レイテンシは動かなかったか

見落としではない——物理だ。DRAM アクセス・レイテンシは、キャパシタ上の微小電荷を 1 と 0 と判別できるほど確実にセンスすることに支配される（メモリ階層の章の 1T1C セル）。そのセンシングは、トランジスタ切り替えのようにスケールダウンしない。帯域は、その限界を破らずに上げられる：より広いプリフェッチ、より多くのバンクとチャネル、ダブル・データ・レート転送。最初のアクセスを短くせずにスループットを買う。だから DDR 世代（第41章）は帯域を売った。レイテンシは頑固なままだった。

## 隙間のコスト

ミス一つで何百サイクルも待つコアは、計算していない。キャッシュ階層（第22章）は贅沢ではない。ウォールに貼る産業の主要な紙——ワーキングセットを SRAM に保ち、CPU がフルの DRAM レイテンシを払うのを稀にする。アウト・オブ・オーダ実行（第23章）は残りをいくらか隠す。ミスと独立な仕事を重ねる。どちらも隙間を閉じない。キャッシュに優しい、あるいは独立な仕事が十分なプログラム向けに隠すだけだ。

局所性が悪い——大きなランダム構造、ある種のグラフやデータベース——は、なおウォールを丸ごと払う。それが、*帯域*（容量だけではない）が一級の設計目標になった大きな理由であり、GPU メモリ階層や HBM が、最初のビットの待ちがほとんど動かなくてもバイト移動にコストと複雑さを使う理由でもある。次：ほぼ同じ歴史的瞬間に、計算側のいとこである壁。

**出口：** Wm. A. Wulf and Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious"（*ACM SIGARCH Computer Architecture News*, 1995）——ウォールに名を付け、何か基本が変わらなければ隙間が支配すると示した短いノート。
