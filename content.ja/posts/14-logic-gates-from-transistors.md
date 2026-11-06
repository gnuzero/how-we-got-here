---
title: "トランジスタから論理ゲートへ"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOSはNMOSとPMOSを対にし、待機ゲートに静的経路を作らない——スケールした位相"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

Computer History Museum は、1963年に Fairchild の C. T. Sah と Frank Wanlass が、pチャネルと nチャネルの MOS を相補対称に組んだ論理が待機でほぼ零電力を引くことを示し、Wanlass が今日 CMOS と呼ばれる着想を特許化した、と記す。([Computer History Museum, 1963 CMOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) 筆者の解釈では、この相補位相は、1980年代半ばから後半に支配的な VLSI プロセスになって以来、ほぼすべてのデジタルチップの背後にある。NMOS と PMOS を対にし、定常状態ではちょうど一方だけが導通する。デバイス級のほぼ零静的電流（前章）が、組み立て可能な論理族になる。

## インバータ：最小の CMOS 単位

Cornell University ECE 315 の講義ノートは、静的 CMOS をプルアップ（PFETs のみ、出力を HIGH に充電）とプルダウン（NFETs のみ、出力を LOW に放電）の対として示す。インバータは一つの PFET と一つの NFET で構成される。([Cornell ECE 315, Handout 24](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf)) ゲートを入力として結び、ドレインを出力とする。PMOS はゲートが*低い*とき導通し、NMOS はゲートが*高い*とき導通する。入力高 → NMOS オン、PMOS オフ → 出力は接地。入力低 → PMOS オン、NMOS オフ → 出力はレールへ。どちらの定常状態でも、一方がオンで他方がオフ——短い切り替えのあいだを除き、レールから接地への静的経路はない。

## これが電力問題を解く理由

同館は、相補 MOS 構成が待機でほぼ零電力を引くことを強調する。([Computer History Museum, 1963 CMOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) 筆者の解釈では、古い NMOS 風論理（プルダウン＋負荷）は出力が低に座っているあいだずっと電流を引くが、CMOS はそうしない。電力はほぼ遷移——次のゲートの入力容量の充放電——に使われ、ダイ上に何個の待機ゲートがあるかではなく、切り替えの*活動*と*周波数*に比例してスケールする。MOSFET がデバイスでほぼ零静的電流を可能にし、CMOS はその回路トリックで、このあとのすべてのゲートへそれを運ぶ。

## NAND、NOR、そして関数完全性

同 Cornell ノートは、2入力 CMOS NAND ではプルダウンを直列 NFET、プルアップを並列 PFET とし、両方 HIGH のときだけ出力が LOW、どちらか LOW のとき出力が HIGH、と真理値表とともに示す。NOR ではプルダウンを並列、プルアップを直列とし、トポロジは相補になる、とも書く。([Cornell ECE 315, Handout 24](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf)) どちらか一方のゲートだけで関数完全——AND、OR、NOT、したがって任意のブール関数を組める。標準セル・ライブラリがよく特徴づけられた NAND セルに強く頼るのはそのためだ、と読むのも筆者の解釈である。それらを組み立てれば加算器、レジスタ・ファイル、プロセッサ全体になる。

**いま試す。** 下のラボは AND ゲートで開く——二つの入力を切り替え、出力を見る。NAND と NOR が上の CMOS 原語であり、AND はそれらを組み立てたものだ。次の章が加算器を組む前に、ゲートに触れる。

{{< lab type="breadboard" height="700" >}}

## この先どこへ行くか

Phase 3 の CPU 構造——フルアダー、ALU、レジスタ・ファイル——はすべて、これらのゲートの合成だ。次: 最初の本格構造、組合せ論理、加算器から。
