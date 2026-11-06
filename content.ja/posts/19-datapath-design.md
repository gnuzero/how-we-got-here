---
title: "データパス設計"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 18
aliases:
  - /posts/12-datapath-design/
  - /posts/17-datapath-design/
  - /posts/18-datapath-design/
tags: []
summary: "単一サイクル・データパスは部品を見える化し——クロックが最悪ケースに合わせられる理由も示す"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

ISA（前章）は契約だ。データパスは、それを実行するハードウェアだ。もっとも単純な版——*単一サイクル*データパス——は、クロック一拍ごとに命令を一本まるごと終える。フェッチ、デコード、実行、ライトバック、終わり。いまの実チップはこうは組まない。それでも Phase 2 の部品がどう繋がるかを見るには、いちばん明快だ。

## 一命令、一クロック

部品はこう並ぶ。次命令アドレスを持つ**プログラム・カウンタ**（フリップフロップ）；その PC で索引する**命令メモリ**；オペランドと結果のための**レジスタ・ファイル**；演算の**ALU**；ロード／ストアの**データメモリ**；オペコードを読んですべての mux とイネーブルを駆動する**制御ユニット**。

MIT 6.5900 のパイプライン講義は、単一サイクルに対する段階化の前提として、フェッチ（F）・デコード（D）・実行（E）・メモリ（M）・ライトバック（W）の RISC-V データパスを示す。([MIT CSAIL 6.5900, L05 Instruction Pipelining](https://csg.csail.mit.edu/6.5900/Lectures/L05handout.pdf)) Cornell CS 3410 は、MIPS の R／I／J 形式がすべて 32 ビットで揃うことを、パイプライン前の規則性として掲げる。([Cornell CS 3410, Pipeline Hazards](https://www.cs.cornell.edu/courses/cs3410/2013sp/lecture/09-hazards-w.pdf))

ADD を取る。PC が命令メモリを索引する。制御はレジスタ–レジスタ ADD を見る。二つのソース・レジスタが ALU に入り、ALU 結果がデスティネーションへ書き、PC が進む。フェッチ、デコード、レジスタ読み、ALU、ライトバック、PC 更新——すべて*一つの*クロック周期の内側だ。

**いま試す。** 下の mini-CPU をガイド・プログラムでステップする。各 Step は、それらの部品のスローモーションだ——IR へのフェッチ、オペコードのデコード、A とメモリへの実行——いま名付けた道を、見られる大きさで。

{{< lab type="mini-cpu" >}}

## パイプラインを強いる制約

そのクロック周期は、*もっとも遅い*命令の全経路に足りなければならない——データメモリに触れない命令でさえ。だからすべての ADD が、最悪ケースの速さで走る。スループットは床に張り付く。

パイプラインはその制約への答えだ。長い道を段階に切り、各段階を*その*最悪ケースでクロックし、別の命令が別の段階を同時に占めるようにする。同じ ISA。秒あたりに終わる仕事ははるかに多い。それが次章——古典的マイクロアーキテクチャの中心思想——である。

MIT 6.191 は、パイプラインの目標を「CPI を 1 に近づけ、各段階の仕事が減るぶんサイクル時間を下げる」と書く。([MIT 6.191, L15 Pipelined Processors](https://shd.mit.edu/2024/lectures/readings/6191-fall2023/L15.pdf)) 単一サイクルが残す床が、その目標の出発点だ、と読むのは筆者の解釈である。
