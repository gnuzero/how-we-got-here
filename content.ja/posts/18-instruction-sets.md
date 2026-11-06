---
title: "命令セット"
weight: 18
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 17
aliases:
  - /posts/11-instruction-sets/
  - /posts/16-instruction-sets/
  - /posts/17-instruction-sets/
tags: []
summary: "ISAはソフトとハードの契約——CISCとRISCは、その契約の形への二つの答えだ"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

命令セット・アーキテクチャ（ISA）は、ソフトウェアとハードウェアのあいだの契約だ。どの演算があり、ビットにどう符号化され、それらのビットが何を意味するか。それは*仕様*であり、チップではない。x86、ARM、RISC-V は ISA だ——同じものを実装するチップはいくつあっても、同じバイナリを走らせられる。

その分離——アーキテクチャ（ソフトが見るもの）対マイクロアーキテクチャ（シリコンの組み方）——が、この Phase の背骨になる。パイプライン、キャッシュ、アウト・オブ・オーダーのコアは、すべて ISA の*下*に住む。ソフトは知らなくてよい。

## 二つの哲学：CISC と RISC

CISC（Complex Instruction Set Computing）——x86 の系統——は、命令一本に多くを詰める。可変長、豊かなアドレッシング、メモリを直接触る演算。プログラムあたりの命令は少なく、デコーダは重い。

RISC（Reduced Instruction Set Computing）はその逆だ。固定長命令、厳密なロード／ストア模型（ALU 演算はレジスタのみ）、一様なフィールド。プログラムあたりの命令は増え、一つひとつはフェッチとデコードを段階ごとに予測できるほど単純だ。David A. Patterson と David R. Ditzel の 1980年の論は、複雑化の傾向がいつも費用対効果ではないとし、VLSI 世代では Reduced Instruction Set Computer のほうが効果的に実装できる場合がある、と主張する。([ACM SIGARCH Computer Architecture News — Patterson & Ditzel, 1980](https://dl.acm.org/doi/10.1145/641914.641917)) Cornell CS 3410 の講義は、MIPS の設計原則として「単純さは規則性を好む」と「すべての MIPS 命令は 32 ビット」を掲げる。([Cornell CS 3410, Pipeline Hazards](https://www.cs.cornell.edu/courses/cs3410/2013sp/lecture/09-hazards-w.pdf)) その一様さが、後のパイプライン章で段階化を扱いやすくする、と読むのは筆者の解釈だ。

具体的には、典型的な RISC 命令はフィールド位置が決まった 32 ビットだ。Intel® 64 and IA-32 Architectures Software Developer’s Manual Volume 2 は、「The maximum length of an Intel 64 and IA-32 instruction remains 15 bytes」と明記する（REX プレフィックス付きでも 15 バイト上限は変わらない、ともある）。([Intel SDM Vol. 2 PDF](https://cdrdv2-public.intel.com/825760/325383-sdm-vol-2abcd.pdf); 目次頁 [Intel SDM](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html)) 可変長でプレフィックスを伴いうる——密で強力だが、高スループットのデコードには高い。

**いま試す。** 下の mini-CPU は小さな ISA だ。4ビット・オペコード、4ビット・オペランド、メモリ十六語。ガイドの 8 命令をステップし、フェッチ／デコード／実行が A とメモリを動かすのを見る——いま名付けた契約を、一画面に収まる大きさで。

{{< lab type="mini-cpu" >}}

## それでも x86 が残った理由

RISC のほうがパイプラインしやすいなら、なぜデスクトップとサーバでは x86 がなお支配的か。互換性と、何十年もの工学投資——生の優雅さではない。現代の x86 チップは CISC 命令を、より単純な RISC 風の内部マイクロオペに*翻訳*し、CISC フロントの奥で RISC 風コアを走らせる（後続のスーパースカラ章）。論争は、ラベルが示すほどきれいな二分法ではない、と読むのも筆者の解釈である。

次：ISA が実際に走る物理構造——データパス——を組む。

**出口：** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — この分裂の RISC 側を開いた古典的論拠。
