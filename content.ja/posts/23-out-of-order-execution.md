---
title: "アウト・オブ・オーダー実行"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 22
aliases:
  - /posts/16-out-of-order-execution/
  - /posts/21-out-of-order-execution/
  - /posts/22-out-of-order-execution/
tags: []
summary: "待つものだけ止めよ——Tomasuloの発想：準備できたら実行し、コミットは順序どおり"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

パイプライン章のロード–使用ハザードは、インオーダー・パイプラインを、待つ一本の*後ろ*まで止める——あとに独立で準備のできた命令があっても。アウト・オブ・オーダー実行はその制約への答えだ。オペランドが揃い次第、独立な仕事を走らせ、アーキテクチャが要求するところだけプログラム順を守る。

## 偽の依存とレジスタ・リネーミング

「依存」のすべてが本物ではない。命令 A が R1 を書き、あとの命令 B も無関係な結果のために R1 を書くなら、値は流れていない——ISA のアーキテクチャ・レジスタ*名*が少なく、コンパイラが一つを再利用しただけだ。それは名前（偽）依存であり、真のデータ依存ではない。

レジスタ・リネーミングは、ISA が晒すより多くの*物理*レジスタを CPU に持たせ、デコード時に各書き込みを新しい物理レジスタへ写す。A の「R1」は P17、あとの B の「R1」は P42。偽の衝突は消え、両方進める。

## 準備できたら発行し、コミットは順序どおり

リネームされた命令は**予約ステーション**で待ち、本物のオペランドが（値で、あるいはまだ飛行中の生産者のタグで）揃うまで留まる。揃った瞬間、元のプログラム順にかかわらず実行ユニットへ発行できる——それがアウト・オブ・オーダーの部分だ。

アーキテクチャ効果はなおインオーダーに見えなければならない。見えるレジスタ、メモリ、例外。**リオーダ・バッファ（ROB）**は飛行中の全命令をプログラム順に追い、実行が別々の時刻に終わっても、結果をアーキテクチャ状態へ*リタイア*するのはその順だけだ。

## Tomasulo の核

「準備できたら実行し、コミットは厳密に順序どおり」——IBM System/360 Model 91 浮動小数点ユニット向けに Robert Tomasulo が公表したアルゴリズム（1967）にしばしば帰せられる型——が、その後の高性能アウト・オブ・オーダー CPU のほぼすべての概念核だ。IBM Journal of Research and Development に載った一次論文が、その出典である。([IBM Journal — Tomasulo, 1967 via publisher record](https://ieeexplore.ieee.org/document/5391641); 扉：下の出口) それは高価でもある。リネーム表、予約ステーション、ROB は面積と電力を食う。その機械を足すほど収穫は逓減する——次章が正面からぶつかる壁だ、と読むのは筆者の解釈である。

{{< lab type="mini-cpu" >}}

**出口：** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — 現代のアウト・オブ・オーダー発行とリネームの背後にある一次論文。
