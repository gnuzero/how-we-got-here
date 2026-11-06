---
title: "パイプライン"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 19
aliases:
  - /posts/13-pipelining/
  - /posts/18-pipelining/
  - /posts/19-pipelining/
tags: []
summary: "スループットのために命令を重ねる——ハザードがフォワーディングとストールと、その先を強いる"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

単一サイクル・データパス（前章）はスループットを卓上に残す。どの命令も、ありうる最長経路を待つ。パイプラインは実行を段階に分け、複数の命令が*同時に*別の段階を占めるようにする。

## 五段階、重ねて

古典的な RISC パイプライン：**IF**（フェッチ）、**ID**（デコード／レジスタ読み）、**EX**（ALU）、**MEM**（ロード／ストア）、**WB**（ライトバック）。段階のあいだにパイプライン・レジスタが、クロックごとに結果をラッチする。

MIT 6.5900 は、ジャンプなしのパイプライン RISC-V データパスを F–D–E–M–W として示す。([MIT CSAIL 6.5900, L05](https://csg.csail.mit.edu/6.5900/Lectures/L05handout.pdf)) MIT 6.191 は、パイプラインの目標を「CPI を 1 に近づけ、段階が短くなるぶんサイクル時間を下げる」と書く。([MIT 6.191, L15](https://shd.mit.edu/2024/lectures/readings/6191-fall2023/L15.pdf)) 定常状態では、各命令の開始から終了はなお五サイクルでも、*完了*は毎サイクル起きる。レイテンシは残り、スループットは上がる。

**いま試す。** 下の mini-CPU を命令ごとにステップする——それは前章が見せた単一サイクルの癖だ。パイプラインの主張はスループット：同じフェッチ／デコード／実行の部品が、命令をまたいで重なること。逐次の Step を感じたうえで、ハザード節を読めば、実パイプラインがなぜその単純さに留まれないかが分かる。

{{< lab type="mini-cpu" >}}

## ハザード：独立が壊れるところ

命令はほとんど独立ではない。

**データ・ハザード**——前の、まだ飛行中の命令が書き終えていない値を、あとの命令が要る。Cornell CS 3410 は、データ依存の問題と、遅延・ストール・フォワーディング（バイパス）などの解決を講義の目標に掲げる。([Cornell CS 3410, Pipeline Hazards](https://www.cs.cornell.edu/courses/cs3410/2013sp/lecture/09-hazards-w.pdf)) MIT 6.191 は戦略を二つに整理する。ストール（早い段階を凍らせて結果を待つ——単純でサイクルを浪費し CPI が上がる）と、バイパス（計算され次第、早い段階へデータを回す——高価で CPI は下がるが、EXE よりあとに結果が出る場合はなおストールが要る）。([MIT 6.191, L15](https://shd.mit.edu/2024/lectures/readings/6191-fall2023/L15.pdf)) ロードの直後の使用は、その典型的な残り隙間だ。

**制御ハザード**——分岐。取られた／取られない、あるいはターゲットが分かるのは遅い——だが続く命令はすでにフェッチされている。取られた分岐では、それらをフラッシュしなければならない。誤った道に費やしたサイクルは無駄になる。

## そのコストが次を強いるもの

誤予測フラッシュは高い——だから分岐予測（次章）がある。早く、十分正確に当てて、フラッシュを稀にする。ロード–使用のストールがアウト・オブ・オーダー（後章）を強いる理由でもある。待つ命令だけ止め、後ろの独立な仕事を走らせる。
