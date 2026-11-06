---
title: "ゲートから組合せ論理へ"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "ゲートを加算器とALUへ組み立て——キャリー・リップル遅延がより良い構造を強いる"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

単一のゲートは、ほとんど単独では役に立たない。役に立つ振る舞いは、それらを組み立てたときに始まる——そして規範的な最初の構造は加算器だ。ゲートが「CPU の中で算術をするもの」になる場所である。

## ハーフアダーからフルアダーへ

Auburn University EE の実験ノートは、ハーフアダーについて \(S = A \oplus B\)、\(C = A \cdot B\) と書き、キャリーインを扱えないため多ビット算術に直接は使えない、と説明する。フルアダーは \(S = A \oplus B \oplus C_{IN}\)、\(C_{OUT} = A\cdot B + B\cdot C_{IN} + A\cdot C_{IN}\) とし、キャリーインを受け取るので任意ビット幅の加算に鎖でつなげられる、と続く。([Auburn University EE201 Lab, Experiment 4 — Binary Arithmetic Circuits](https://www.eng.auburn.edu/~niuguof/2210lab/ex04_adders.pdf))

**いま試す。** 下のラボはいまも AND ゲートで開く——それがハーフアダーのキャリーだ。両方の入力を高にして出力が高になるのを見る。その単一ゲートが、次の節で加算器を鎖にしたときにリップルする制約だ。

{{< lab type="breadboard" height="700" >}}

## リップル・キャリー：単純で、遅いのには理由がある

同ノートは、フルアダーを列ごとに接続して多ビット加算を行う、と書く。四つのフルアダーを並べれば 4ビット・リップル・キャリー加算器になる。ビット3のキャリーは、ビット2が落ち着くまで正しくなれず、それはビット1を待ち、ビット1はビット0を待つ。キャリーが*リップル*する。4ビットでは十分。64ビットでは、その鎖が ALU 全体をどれだけ速くクロックできるかを決める。その遅延制約こそ、実 CPU がキャリー・ルックアヘッド（および同類）を足す理由だ——ゲートは増えるが、最悪経路は短くなる、と読むのは筆者の解釈である。本書のほかと同じ型だ。物理のボトルネックが、次の建築を強制する。

## 加算器から簡単な ALU へ

同じ加算器ハードウェアの前に mux を置く。制御ビットが加算、減算（オペランドを反転して Cin 付き加算——加算器を再利用）、AND、OR を選ぶ。一つのブロック、いくつかの組合せ経路。概念的には小さい。実践的には、「ゲート」が CPU 算術になる最初の瞬間だ。

ここまではすべて組合せ——出力は現在の入力だけに依存する。操作の列には、時間をまたいで残る状態が要る。それが次の章だ。
