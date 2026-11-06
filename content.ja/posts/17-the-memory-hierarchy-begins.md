---
title: "メモリ階層の始まり"
weight: 17
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "フリップフロップはビットあたり高すぎる——SRAMは速さを、DRAMは密度を買い、階層はその取引の繰り返しだ"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

Dフリップフロップ（前章）は立派な記憶素子だ。レジスタ数個なら十分だが、そのやり方でギガバイトの主記憶は無理だ。二つのセル設計が取引を分ける。CPU 近くの速さのための SRAM、外側の密度のための DRAM。

## SRAM：速く、安定で、面積を食う

Cornell University ECE 315 の講義ノートは、二つのインバータと NFET ゲートで 6 FET の SRAM セルを実現できる、と書く。SRAM は速く、電源があれば静的に保持する、ともある。([Cornell ECE 315, Handout 24 — CMOS Logic Gates](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf)) IBM の DRAM 史は、Dennard 以前の MOS メモリ案がビットあたり六個のトランジスタを使っていた、と記す。([IBM History, DRAM](https://www.ibm.com/history/dram))

Computer History Museum は、1964年に Fairchild の John Schmidt が 64ビット MOS pチャネル・スタティック RAM を設計した、と記す。([Computer History Museum, 1970 MOS DRAM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/)) ビットあたり六個のトランジスタは面積を焼くので、SRAM は*キャッシュ*として現れる（Phase 3）。コストが許容できるほど小さく、リフレッシュなしと非破壊読みが効くほど速い、と読むのは筆者の解釈だ。

## DRAM：稠密で安く、手入れが多い

同館は、IBM 研究者 Robert Dennard が特許した単一トランジスタ・メモリ・セル（U.S. Patent 3,387,286、1967年7月14日出願、1968年6月4日発行）と、Siemens の Karl-Ulrich Stein の設計手法を、Mostek が 16K 水準（MK4116、1976）で採用した、と書く。([Computer History Museum, 1970 MOS DRAM](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/))

IBM の公式史は、Dennard の案がビットをコンデンサ上の正または負の電荷として蓄え、微小なエネルギーで繰り返しリフレッシュする、と書く。充電過程がデータを維持し、RAM を「ダイナミック」にした、ともある。([IBM History, DRAM](https://www.ibm.com/history/dram)) Cornell ECE 315 は、DRAM セルを一つの FET と一つのコンデンサで実装でき、コンデンサは漏れ電流で放電しうるため周期的なリフレッシュが要る、と書く。格納ビットを読むことはそのビットを破壊する——すべての読みのあとに書き込みが続かなければならない、とも明記する。([Cornell ECE 315, Handout 24](https://courses.cit.cornell.edu/ece315/Lectures/handout24.pdf))

Micron の DDR2 SODIMM データシート（MT16HTS 系列）は、「64ms, 8192-cycle refresh」を仕様に掲げる。([Micron MT16HTSxxxHY datasheet via Digi-Key](https://media.digikey.com/pdf/Data%20Sheets/Micron%20Technology%20Inc%20PDFs/MT16HTSxxxHY.pdf)) 通常ケース温度では、8192 サイクルのリフレッシュが 64 ms の窓に収まる。六個ではなく一つのトランジスタが密度の勝ち——主記憶が DRAM である理由だ、と読むのは筆者の解釈である。リフレッシュは帯域を焼き、メモリ・コントローラを複雑にする。それが密度の値段だ。

**出口：** Robert H. Dennard の一トランジスタ DRAM セル（U.S. Patent 3,387,286、1968）——稠密な主記憶を実用にした 1T1C の着想。

## これが据える階層

頂点にレジスタ（フロップ）。最も速く、最も小さく、ビットあたり最も高い。次に SRAM キャッシュ。その下に DRAM 主記憶。さらに下にディスク／SSD。ピラミッドは飾りではない——トランジスタ数対速さの取引が、すべてのレベルで繰り返される、と読むのも筆者の解釈だ。Phase 3 のキャッシュはこの上に立つ。Phase 5 のメモリ・ウォールは、まさにこの取引が据えた CPU–DRAM の隙間が、キャッシュが隠せない速さで広がるときに起きることだ。

{{< lab type="breadboard" >}}
