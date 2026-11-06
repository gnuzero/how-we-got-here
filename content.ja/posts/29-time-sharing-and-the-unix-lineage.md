---
title: "タイムシェアリングとUnixの系譜"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 28
aliases:
  - /posts/22-time-sharing-and-the-unix-lineage/
  - /posts/27-time-sharing-and-the-unix-lineage/
  - /posts/28-time-sharing-and-the-unix-lineage/
tags: []
summary: "バッチはCPUを忙しく保ち、タイムシェアリングは多くの利用者に所有の幻想を与えた——Multicsの野心、そしてUnixの単純さ"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

バッチ処理（前章）はスループットを解いた——高い CPU を仕事のあいだ忙しく保つ。対話性には何もしなかった。1960年代前半から半ばに現れたタイムシェアリングは、別の制約を解く。複数の利用者が*同時に*対話し、それぞれが機械を一人で持っている幻想を持つこと。

## 核の技：速い切り替え

CPU は人間の反応時間に対して速い。多くの利用者のプロセスを毎秒何度も切り替え——それぞれに小さな切片を——すれば、誰も隙間を知覚しない。前の Phase のクロック論理の、ソフト・スケジューリング版だ。離散で速い切り替えが*連続に見え*、単一コアでは瞬間ごとに一つのプロセスしか走らない。

MIT の Multics 史は、Multics（Multiplexed Information and Computing Service）を 1965年に MIT で始まったメインフレーム・タイムシェアリング OS の研究とし、OS 開発への重要な影響だった、と書く。計画は 1965年 Fall Joint Computer Conference で六本の論文として示され、MIT・GE・Bell Labs の共同だった。Bell Labs は 1969年に離脱した、と続く。MIT の研究は 1964年に Fernando J. Corbató のもと Project MAC で始まり、1969年からキャンパス全体の情報サービスになった、ともある。([MIT Multics History](https://web.mit.edu/multics-history/))

## Multics から Unix へ

Bell Labs が Multics から手を引いたあと、そこに関わった Ken Thompson と Dennis Ritchie は、はるかに小さな尺度で反復を続けた——意図的に単純に、はるかに弱いハードウェア（当初は余った PDP-7）の上で。結果が Unix だ。Nokia Bell Labs が公開する Ritchie & Thompson の論文（CACM 1974／BSTJ 再録）は、Unix を PDP-11 および Interdata 8/32 向けの汎用・多人数・対話型 OS とし、階層ファイル、互換のファイル／装置／プロセス I/O、非同期プロセス、ユーザーごとのコマンド言語、高い移植性などを掲げる。([Bell Labs / Nokia — The UNIX Time-Sharing System](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html))

移植性が効いた。Unix は多くの同時代機のように一社の箱に縛られず、控えめな移植でベンダーをまたげた——単一製品系列に縛られた系に対する構造的な利点だ、と読むのは筆者の解釈である。

**いま試す。** 下の VM を起動し、黒い画面をクリックしてから `uname`、`whoami`、`ls` を走る——図ではなく、生きた Unix 系譜のシェルだ。

{{< lab type="vm-terminal" height="600" >}}

## 分裂：BSD と System V

Unix のライセンス史は絡み合う。やがて二つの大きな系統へ分かれた。BSD（Berkeley Software Distribution）と、AT&T 系の商業 Unix（のちに System V として知られる線）。英語版 Wikipedia の Berkeley Software Distribution 頁は、BSD が Bell Labs の AT&T Unix の改良派生物として始まり、Apple の macOS と iOS の基盤である Darwin が 4.4BSD-Lite2 と FreeBSD に基づく、と書く。([Wikipedia — Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution)) 両者は何年も交叉受粉した、と読むのは筆者の解釈である。個々の企業 Unix 製品がどちらに近いかの細部は、ここでは広げない。

## これが向かう先

Unix の着想——そしてやがて Unix 由来または Unix に触発されたコード——は、Linux と macOS の両方の直接の祖先だ。AT&T の専有 Unix から「インターネットの多くを回す自由で公開開発の Linux」へは、別の思想的・法的運動——GNU プロジェクト——が要った。次章がそれを扱う。技術的系譜とは別の話だが、二つは結局一つの支配的スタックへ合わさる。

**出口：** Dennis M. Ritchie and Ken Thompson, "The UNIX Time-Sharing System" (*Communications of the ACM*, 1974) — 上の Bell Labs 再録が一次に近い公開テキスト。
