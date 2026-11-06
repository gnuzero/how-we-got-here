---
title: "ARMとRISC-V：いまのアーキテクチャ地図"
weight: 27
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 26
aliases:
  - /posts/20-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/25-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/26-arm-and-risc-v-the-architecture-landscape-today/
tags: []
summary: "デスクトップがx86に落ち着いたあと、戦いは電力とライセンスへ移った——ARMがモバイルを取り、RISC-Vは開くことに賭ける"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

x86対RISCの闘争（前章）は、1990年代末までにデスクトップとサーバの多くを落着させた。競争は終わらなかった——場所が変わった。モバイル、組み込み、エッジは単スレッドの頂点よりワットを気にし、ISA の*まわりの事業模型*が符号化と同じくらい効くと分かった。

## ARM：ISAを貸し、ファブは持たない

Arm の公式企業頁は、同社を半導体知的財産の設計者・ライセンサーとし、パートナーが Arm ベースの製品を構築するエコシステムを支える、と位置づける。([Arm — Company](https://www.arm.com/company)) 模型は、完成コアのライセンスから、自前の Arm 互換コアを設計するアーキテクチャ・ライセンスまで広がる（後者の際立った例が Apple のシリコンだ、と英語版は書く）。Arm 自身がファブを回さなくても、ISA は多くの製造者へ広がった。

技術的には、ARM はモバイル時代へ、すでに電力効率向けに調律された RISC 系単純デコードとして入った——大量規模で初めて性能対ワットが売れた市場と出会った、と読むのは筆者の解釈である。

英語版が ARM のサーバ／HPC への侵食に触れるところを、日本語版は日本の例を添える。理化学研究所計算科学研究センター（R-CCS）の富岳解説は、単一ノードの命令セットを **Armv8.2-A SVE 512 bit**（富士通拡張つき）とし、「The unique chip is based on the Arm instruction set architecture」と書く。ノード総数は 158,976。通常モード（2 GHz）の理論ピーク倍精度は 488 PFlops と表にある。([RIKEN R-CCS, About Fugaku](https://www.r-ccs.riken.jp/en/fugaku/about/))

## RISC-V：ライセンスより開く

RISC-V International は、開かれた標準の RISC-V ISA とその仕様・利害関係者コミュニティのグローバル非営利の拠点だ、と自ら書く。開かれたロイヤリティ・フリーの ISA——誰でもどこでも、コミュニティが寄与した IP の恩恵を受けられる——と組み合わせる、ともある。([RISC-V International — About](https://riscv.org/about/)) 仕様の入口は riscv.org の Technical Specifications 頁にある。([RISC-V Specifications](https://riscv.org/technical/specifications/)) 実装者が支配ベンダーと交渉せずコアを実装できることが、深いカスタムや ISA ライセンス費用ゼロが要点になる組み込みやアクセラレータで効く、と読むのは筆者の解釈である。

## 同じ教訓を一段深く

荒い地図：x86 は互換の慣性でデスクトップとサーバの多くをなお握る。ARM はモバイルを握り、サーバとノートにも現実の侵食がある（カスタム・クラウド ARM、Apple Silicon、そして上の富岳）。RISC-V は商業ではなお早く、ロイヤリティ・フリーの柔軟さが成熟したソフト積みより勝つところで最も速く伸びる。

前章の型がもう一度：ある区画の勝者は、孤立した「最良」の ISA とは限らない——その区画が買うものに経済が合う方だ。ARM はワット*と*、電話メーカーが下でカスタムできるライセンス模型でモバイルを取った。RISC-V は、増え続ける事例で「無料で開いている」がその先を超える、と賭ける。それが x86 や ARM の規模に届くかは、なお開いている。

{{< lab type="mini-cpu" >}}

**出口：** The RISC-V Instruction Set Manual（riscv.org）——この章が名付ける開いた ISA の生きた一次仕様。非特権 ISA 巻から。
