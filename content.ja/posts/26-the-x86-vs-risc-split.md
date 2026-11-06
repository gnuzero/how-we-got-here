---
title: "x86対RISCの分裂"
weight: 26
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 25
aliases:
  - /posts/19-the-x86-vs-risc-split/
  - /posts/24-the-x86-vs-risc-split/
  - /posts/25-the-x86-vs-risc-split/
tags: []
summary: "紙の上ではRISCのほうがきれいだった——ソフトのロックインとμop翻訳がx86を上に残した"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

命令セットの章は CISC と RISC を哲学として名付けた。この章は、それらが商業で競ったあとに起きたこと——そして「きれいな」ISA が単純には勝たなかった理由——だ。

## RISC の論拠

1980年代初め。RISC は CISC の複雑さへの反応だった——Berkeley の SPARC へ向かう仕事、Stanford の MIPS、IBM の POWER／PowerPC へ流れた仕事。Patterson と Ditzel の 1980年の論は、複雑化がいつも費用対効果ではなく、VLSI 世代では Reduced Instruction Set Computer のほうが効果的に実装できる場合がある、と主張する。([ACM SIGARCH — Patterson & Ditzel, 1980](https://dl.acm.org/doi/10.1145/641914.641917)) 主張は経験的でもあった。複雑な CISC 演算はコンパイル済みコードではほとんど使われず、それらが要するデコード・ハードウェアがシリコンを焼き、この Phase がすでに扱ったパイプラインを複雑にする、という読みだ。ISA を単純・固定長・一様な命令に削り、シリコンをレジスタ、速いパイプライン、より良いキャッシュへ回せ。

MIPS、SPARC、PowerPC はいずれも出荷された。しばらくのあいだ、純粋な計算ベンチマーク——とくにワークステーションとサーバ——では x86 を上回った、と商業史は語る。個々のベンチマーク数字はここでは主張しない。

## なぜ x86 が床を保ったか

x86 の強みは優雅さではなかった——IBM PC 互換の上にすでに座っていたソフトウェアだった。それがデスクトップ標準になると、巨大な設置ベースは x86 でしか動かない。後方互換が堀になる。新しいチップは古いバイナリを走らせねばならず、ISA を RISC 風にきれいに作り直せない——いぼの上に拡張するしかなく、Intel とその後の AMD が、表面にもかかわらず*実装*を速くした。

本当の決着：現代の x86 は、アウト・オブ・オーダー・コアで CISC 演算を直接は実行しない。デコーダが各 x86 命令を一つ以上の固定形式の内部マイクロオペ（μops）——RISC 風——へ翻訳し、*それら*が前章の予約ステーション、ROB、実行ユニットを流れる。外から見れば CISC 互換。内側は翻訳層の下の RISC 風パイプラインだ、と読むのは筆者の解釈である。Intel SDM が命令長の上限を 15 バイトと置く可変長エンコーディングは、その表面の複雑さの一端だ。([Intel SDM Vol. 2](https://cdrdv2-public.intel.com/825760/325383-sdm-vol-2abcd.pdf))

## 残すべき型

勝つ ISA は、技術的メリットだけで勝ることは稀だ。互換性、生態系のロックイン、製造規模が、紙の上のきれいなアーキテクチャを日常的に上回る。同じ力学は次に、ARM のライセンス模型対 RISC-V の開いた ISA——命令セットの*まわりの事業模型*が、符号化と同じくらい効きうる——として現れる。

{{< lab type="mini-cpu" >}}

**出口：** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — この商業闘争の RISC 側のマニフェスト。
