---
title: "データセンタ尺度のインターコネクト"
weight: 69
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 68
aliases:
  - /posts/61-interconnect-at-datacenter-scale/
  - /posts/67-interconnect-at-datacenter-scale/
  - /posts/68-interconnect-at-datacenter-scale/
tags: []
summary: "何千 GPU では結線が仕様表に勝つ——fat-tree、レール最適化、all-reduce"
image_prompt: "Fat-tree / rail-optimized datacenter fabric diagram with thousands of GPUs, clean networking architecture style"
video_prompt: "20-second animation: all-reduce traffic flowing through leaf-spine switches vs a congested naive mesh, clean technical animation"
schematics: "Diagram: fat-tree vs rail-optimized + all-reduce ring/tree overlay"
---

第64章は、数台のサーバ内・横断のマルチ GPU スケーリング——NVLink、NVSwitch、GPUDirect RDMA——を扱った。大規模学習はさらに桁が違う：何百から何千のサーバ横断で、何千から何万の GPU。どう結線するかが、どの単一 GPU の仕様と同じくらい効く。

## 素朴な結線はスケールしない

どのサーバも他のすべてへつなぐと、接続は二次で増える——何千ノードのずっと前に荒唐無稽だ。実クラスタは階層スイッチを使う；選ばれた構造が、達成帯域と、重い学習交通の下でその帯域がどれだけ*均等に*持つかの両方を決める。

## 学習向けに調律された Fat-tree

Fat-tree はスイッチを層にする——サーバの葉スイッチ、葉をつなぐスパイン——高い（理想的には非オーバーサブスクライブの）バイセクション帯域を狙う；実 AI クラスタはなおオーバーサブスクライブし、あるいはレール最適化変種を使うことがある。これは第49章のデータセンタ・ネットワーキングの考えを、何千 GPU の体制へ上げたものだ。([Wikipedia — Fat tree](https://en.wikipedia.org/wiki/Fat_tree))

レール最適化設計は、大規模学習ジョブが実際に生む通信パターンのまわりにさらに調律する——汎用データセンタ交通ではない。学習交通は違う；それ向けに建てたトポロジは汎用のものに勝てる。

## All-reduce が縛るパターンだ

データ並列学習（第54章）は、参加するどの GPU も各ステップで勾配を同期せねばならない——各バッチ切片の局所勾配、ついで（典型的には平均して）結合し、次ステップの前に。その all-reduce は学習実行のあいだ絶えず走る。効率は生帯域*と*トポロジに依存する：リングや木のアルゴリズムは、理論上の総ピークだけでなく、物理の結線を感じる。

## トポロジは仕様表に勝てる

優れた GPU を貧しく設計された、またはオーバーサブスクライブしたファブリックに載せると、慎重にレール最適化した網上のより控えめな GPU に負け得る——ボトルネックがどのチップのピーク FLOPS ではなく all-reduce になるからだ。シリーズの主題がまた：部品仕様（トランジスタ数、クロック、ピーク FLOPS）は物語の一部にすぎない。部品がどうつながるか——チップのバス（フェーズ 5）から学習クラスタのトポロジまで——が、しばしば実達成性能を決める。
