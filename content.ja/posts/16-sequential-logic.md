---
title: "順序論理"
weight: 16
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "フィードバックが双安定メモリを作り、エッジトリガ・フリップフロップが同期設計を扱いやすくする——セットアップ／ホールドがクロックを上限づけるまで"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

組合せ論理（前章）は現在の入力の純粋関数だ——過去の記憶はない。コンピュータには*状態*が要る。レジスタ、プログラム・カウンタ、サイクルをまたいで残るメモリ内容。それにはフィードバックが要る。

## フィードバックからのメモリ

Purdue ECE 559 の順序論理ノートは、NOR ベースおよび NAND ベースの SR フリップフロップを示し、ゲートが高（または低）のあいだ透過ならラッチと呼ぶ、と書く。マスタ–スレーブとエッジトリガ FF が競合の解だ、ともある。([Purdue ECE 559, Sequential Logic notes](https://engineering.purdue.edu/~vlsi/ECE559_Fall09/Notes/SequentialLogic.pdf)) Cornell ECE 315 は、CLK が高のとき D から Q へ透過し、CLK が低のとき出力を保持する CMOS ラッチを示す。([Cornell ECE 315, Handout 24](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf))

二つの NOR（または NAND）ゲートを交差結合する——各出力が他方の入力を養う——と、二つの安定状態が得られる。回路は、最後に押したところに、電源があるかぎり座る。それが物理的な意味でのメモリだ。双安定性であり、抽象の「ストア」ではない。

**いま試す。** 下のラボはいまも生きたゲートだ——入力を切り替え、出力が*すぐに*変わるのを見る。その即時応答が組合せだ。この章は、ゲートを自分自身へ戻し配線し、入力が去ったあとも出力が*保持*できるときに起きることだ。

{{< lab type="breadboard" height="700" >}}

## Dフリップフロップ：レベルではなくエッジ

Harvey Mudd College の CMOS VLSI 講義は、フリップフロップをエッジトリガとし、マスタ–スレーブの背中合わせラッチとして造る、と書く。([HMC CMOS VLSI, Lecture 11](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf)) Cornell ノートも、データ・レジスタまたはフリップフロップを二つのマスタ／スレーブ・ラッチで実現できる、と記す。CLK が LOW から HIGH へ行くとき入力データが出力へ移り、保持される。([Cornell ECE 315, Handout 24](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf)) エッジとエッジのあいだ、フロップは D を無視して保持する。エッジトリガこそが同期設計を扱いやすくする、と読むのは筆者の解釈だ。すべてのフロップが同じエッジで更新するので、連続信号を競わせるのではなく、離散の一歩ずつで考える。

## セットアップ、ホールド、そしてクロックの天井

Purdue ノートは、セットアップ時間 \(t_{su}\) をクロック遷移の*前*にデータ入力が有効でなければならない時間、ホールド時間 \(t_{hold}\) を遷移の*後*に有効でなければならない時間、と定義する。([Purdue ECE 559, Sequential Logic notes](https://engineering.purdue.edu/~vlsi/ECE559_Fall09/Notes/SequentialLogic.pdf)) HMC 講義も \(t_{setup}\) / \(t_{hold}\) を図示し、最大遅延が \(T_c - (t_{setup} + t_{pcq})\) で抑えられる、と書く。([HMC CMOS VLSI, Lecture 11](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf)) どちらかを破れば、フロップはメタステーブルになりうる——下流で遅く、あるいは不整合に解ける未定義状態だ。それは教科書の杓子定規ではない。最大クロック周波数が硬い天井を持つ理由だ、と読むのも筆者の解釈である。周期は、組合せ伝播*と*次のフロップのセットアップを、余裕つきで覆わなければならない。Post 43（クロック速度の壁）は、単に周波数を上げるだけでは効かなくなったとき、まさにこの制約に戻る。

## これが開くもの

エッジトリガ・フロップはレジスタ、カウンタ、状態機械になり——Phase 3 では、CPU を*順序*機械にするプログラム・カウンタとパイプライン・レジスタになる。次: 双安定記憶を密度のために特殊化する——SRAM と DRAM が分かれるところ。
