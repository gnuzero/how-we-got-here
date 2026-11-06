---
title: "分岐予測"
weight: 21
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 20
aliases:
  - /posts/14-branch-prediction/
  - /posts/19-branch-prediction/
  - /posts/20-branch-prediction/
tags: []
summary: "パイプラインのフラッシュは高い——予測は、それを稀にするために存在する"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

誤予測された分岐は、誤った道へフェッチしたものをすべてフラッシュする。深いパイプラインでは、その浪費は大きくつきうる。前章がそのコストを卓上に残した。この章は答えだ。方向（とターゲット）を早く当てて、フラッシュを稀にする。

MIT 6.191 は、制御ハザードをデータ・ハザードの次に置き、「分岐が取られた／取られないとき、次に実行する命令は何か？」と問う。([MIT 6.191, L15](https://shd.mit.edu/2024/lectures/readings/6191-fall2023/L15.pdf); [Cornell CS 3410, Pipeline Hazards](https://www.cs.cornell.edu/courses/cs3410/2013sp/lecture/09-hazards-w.pdf))

## 静的な当て推量では足りない

静的規則——いつも非取、あるいは「後ろ向き分岐（ループ）は取られる」——はハードウェアを食わないが、実コードの多くを外す。分岐の振る舞いは、固定規則が見えない履歴に依存する。

動的予測器は実行時に結果を追う。100 回まわるループの後ろ向き分岐は 99 回取られる。「前回取られた」を覚える予測器は、ほとんどの反復を当てる。

## 2ビット飽和カウンタ

古典的な積み木は四状態——強く／弱く非取、弱く／強く取。解決された結果が、実際に起きた方へ一歩寄せ（端で飽和）、予測は最上位ビットだ。

なぜ 1 ビットではないか。1 ビットの「前回結果」は一回の異常でひっくり返り、次の*普通の*反復まで外す。2 ビットは連続二回の異常が要るので、ループ末尾の一回の非取が、次の周回の予測を毒しにくい。James E. Smith の 1981年 ISCA 論文は、動的分岐予測戦略の初期の系統的扱い——飽和カウンタ的な考えを含む——として教科書に残る。([ACM Digital Library — Smith, ISCA 1981](https://dl.acm.org/doi/10.5555/800052.801871))

## 次にどこをフェッチするか

方向は半分にすぎない。取られた分岐では、完全デコードの前に*ターゲット*も要る。Branch Target Buffer（BTB）は命令アドレスで索引する小さなキャッシュで、前回解決したターゲットを覚える。ヒットすれば、次サイクルに投機的に飛べる。

実予測器はカウンタ表（しばしば大域履歴つき）と BTB を組み合わせ、高端チップはさらに先へ行く。2 ビット・カウンタはなお概念の核であり、手で辿れる大きさだ。下の mini-CPU ラボに予測器・パイプライン・キャッシュはないが、ループの `JZ` をステップし、紙の上でその分岐の 2 ビット・カウンタを反復ごとに動かすことはできる。

{{< lab type="mini-cpu" >}}

**出口：** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — 動的分岐予測の初期の系統的扱い。飽和カウンタ的着想が教科書になった。
