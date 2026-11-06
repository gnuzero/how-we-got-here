---
title: "高級言語：FORTRAN・COBOL・Lisp・C"
weight: 34
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 33
aliases:
  - /posts/27-high-level-languages-fortran-cobol-lisp-c/
  - /posts/32-high-level-languages-fortran-cobol-lisp-c/
  - /posts/33-high-level-languages-fortran-cobol-lisp-c/
tags: []
summary: "四つの領域が四つの抽象を強いた——式、業務の散文、記号リスト、金属に近いシステム"
image_prompt: "Timeline infographic of FORTRAN, COBOL, Lisp, C with characteristic code snippets, clean historical technical infographic"
video_prompt: "20-second animation: a short algorithm expressed in FORTRAN, COBOL, Lisp, and C syntax successively, clean motion graphics"
schematics: "Diagram: language paradigm comparison + language family tree"
---

アセンブリ（前章）は機械語の上の一対一の層だ——生の二進よりましだが、なおプログラマに命令・レジスタ・手置きのレイアウトで考えさせる。高級言語は別物を導入した。ハードに一対一では写らない抽象だ。*何を*計算するかを書き、コンパイラ（次章）が*どう*するかを決める。

## FORTRAN：式の翻訳

英語版 Wikipedia は、Fortran を数値計算と科学計算向けの第三世代・コンパイル型・命令型言語とし、IBM が開発して参照マニュアルを 1956年に出し、最初のコンパイラが正確なコードを出し始めたのは二年後、と書く。名前は「Formula Translating System」として説明される、ともある。1957年4月にコンパイラが納入された、とも記す。([Wikipedia — Fortran](https://en.wikipedia.org/wiki/Fortran)) `X = A * B + C` を、明示的なレジスタ割当の算術命令列の代わりに書ける。初期の懐疑は、コンパイル済みが手書きアセンブリに勝てない、というものだった。FORTRAN のコンパイラは積極的な最適化でそれを覆さねばならなかった、と読むのは筆者の解釈である。

## COBOL：科学ではなく業務

Wikipedia は、COBOL の設計が 1959年に CODASYL で始まり、Grace Hopper が設計した FLOW-MATIC に部分的に基づく、と書く。業務・金融・行政系が主用途で、メインフレーム上の大規模バッチやトランザクションにいまも広く使われる、ともある。([Wikipedia — COBOL](https://en.wikipedia.org/wiki/COBOL)) 設計の選択は、冗長で英語に近い構文（`ADD SALARY TO TOTAL-PAY`）——非プログラマの分析者や監査が読めることを狙った。書き換えは高く危険なので、多くの組織が元を維持し続ける、と読むのも筆者の解釈である。

## Lisp：別のパラダイム

Wikipedia は、Lisp（歴史的には LISP、「list processing」）を、完全に括弧で囲んだ前置記法を持つ言語族とし、John McCarthy が 1958年に MIT で開発を始めた、と書く。Fortran に次ぐ、いまも普通に使われる二番目に古い高級言語だ、ともある。([Wikipedia — Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))) 関数を一級の値とし、コードとデータが同じリスト構造を共有する最小の一様構文——命令型の FORTRAN／COBOL から離れる。実行時に他のプログラムを組み立てて走らせることが、何十年もの AI と記号計算の基礎になった、と読むのは筆者の解釈である。

## C：機械に近いシステムプログラミング

Wikipedia は、C を 1972年に Dennis Ritchie が作った汎用言語とし、典型的な CPU アーキテクチャの機能へ比較的直接アクセスを与えるよう設計された、と書く。Unix 上のユーティリティ構築に使われ、のち Unix カーネルの再実装にも適用された、ともある。([Wikipedia — C](https://en.wikipedia.org/wiki/C_(programming_language))) ポインタ算術、小さなランタイム、機械演算への予測可能な写像が、Unix を移植可能にした——新しい機械へ OS をアセンブリで書き直すのではなく、C コンパイラを移植する。

## 共通の糸

各言語は違う優先を最適化した——FORTRAN は数値表現、COBOL は業務可読性、Lisp は記号抽象、C はシステム級制御——いまも設計を形作る。共有するのは、プログラマが手で翻訳しなくても抽象を効率的な機械語へ落とすコンパイラだ。その過程——「最適化」が具体的に何か——が次章である。

**出口：** Dennis M. Ritchie, "The Development of the C Language"（HOPL-II / ACM）——Unix 脇の C 設計の一次。Lisp の創立声明には McCarthy の初期 CACM 論文を。
