---
title: "チップレットと先端パッケージング"
weight: 59
date: 2026-01-01
draft: false
phase: "8 — プロセス・ノードと製造"
series_index: 58
aliases:
  - /posts/51-chiplets-advanced-packaging/
  - /posts/57-chiplets-advanced-packaging/
  - /posts/58-chiplets-advanced-packaging/
tags: []
summary: "歩留まりはダイ面積とともに落ちる——チップレットに分け、先端パッケージで帯域を買い戻す"
image_prompt: "Cutaway diagram comparing a monolithic die vs a chiplet package with interposer, clean semiconductor packaging illustration style"
video_prompt: "20-second animation: a monolithic die splitting into chiplets connected via an interposer, yield improving, clean explainer motion graphics"
schematics: "Diagram: monolithic die vs chiplet+interposer cross-section + yield-vs-die-size curve"
---

第57章が繰り返した型：一つの幾何の中のスケーリングが壁に当たったら、構造を変える。チップレットはその型をトランジスタの一段上に適用する——新しいデバイス物理ではなく、モノリシック・ダイが大きくなりすぎて歩留まりが取れなくなったとき、チップ全体をどう組むかの新しい答えだ。

## モノリシック・ダイと歩留まりの壁

伝統的なチップは一片のシリコンだ：コア、メモリ・コントローラ、I/O を一緒に作る。どこか一か所の致命欠陥がダイ全体をだめにし、そのような欠陥の確率は面積とともに増える——より大きく有能なチップがアーキテクチャ上望ましいときでも、大きなダイの歩留まりは悪い。それは経済／物理の制約であり、ブランディングの選択ではない：どの単一ダイも無制限に大きくしない。Wikipedia は、チップレットを、より大きなパッケージに組み立てられる小さな集積回路ダイとし、大きなモノリシック・ダイの歩留まり問題への応答として使われる、と書く。([Wikipedia — Chiplet](https://en.wikipedia.org/wiki/Chiplet))

## シリコンを分け、機能は保つ

チップレットは、一つの大きなダイだったものを、より小さく別々に作ったダイへ切り、各々が機能を所有し、高密度インターコネクト（インターポーザまたは先端基板）で一つのパッケージ内に再接続する。欠陥はその小さなチップレットだけを殺し；同じ総機能でも小さなダイのほうが歩留まりがよい。一つのパッケージでプロセス・ノードを混ぜることもできる——I/O には古く安いシリコン；計算密度が稼ぐところだけ先端——単一プロセスのモノリスにはない柔軟さだ。

## パッケージが線を買い戻さねばならない

分解が効くのは、チップレット間の帯域とレイテンシがオンダイ・リンクに十分近いときだけだ。シリコン・インターポーザと 3D スタックは、同じ信号を従来の PCB 経由で出すよりはるかに高い密度を与えるために存在する。そのパッケージ段階がなければ、歩留まりの勝ちは新しいインターコネクトの壁で払われる。

## 同じパッケージ、次フェーズのメモリ

同じ先端パッケージ族が、フェーズ 9 の HBM を可能にする：メモリ・ダイを積み、高密度インターポーザ経由で計算ダイへ付け、物理的に別のシリコンを帯域の観点ではほぼ一片として扱う。チップレット計算と HBM メモリは、一つの制約の二つの実例だ——分けたダイのあいだに、分割が性能の罰でなくなるだけの帯域を取る。
