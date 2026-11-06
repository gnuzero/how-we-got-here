---
title: "コンパイラ・JIT・近代言語ランタイム"
weight: 35
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 34
aliases:
  - /posts/28-compilers-jit-and-modern-language-runtimes/
  - /posts/33-compilers-jit-and-modern-language-runtimes/
  - /posts/34-compilers-jit-and-modern-language-runtimes/
tags: []
summary: "AOT は実行前に一度落とす；JIT はホットパスを待つ——そして GC がコストをランタイムへ移す"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

前章は、なぜ高級言語があるかだった。本章は、それを使えるようにする機械だ：ソースを本物の CPU が実行できるものへ翻訳するコンパイラ。

## 古典的パイプライン（短く）

字句解析器 → トークン。構文解析器 → 抽象構文木（AST）。意味解析は、文法だけでは捉えられないもの（型、未宣言の名前）を捕らえる。大半の実コンパイラはそのあと中間表現（IR）へ下げる——ソース構文より一様で、なおどのターゲット ISA からも独立——そこで**最適化器**が働く：デッドコード除去、ループ不変式の巻き上げ、インライン化、ふるまいを保ったまま無駄な仕事を切る他の何十もの変換。**コード生成**はターゲット命令を出し、レジスタ割当を行う（どの値が希少な物理レジスタに住み、どれがメモリへこぼれるか）。Wikipedia は、コンパイラを「あるプログラミング言語で書かれたコンピュータコードを、別の言語（しばしば機械語）へ変換するプログラム」と定義し、字句・構文・意味解析、最適化、コード生成を典型段階として挙げる。([Wikipedia — Compiler](https://en.wikipedia.org/wiki/Compiler))

それが背骨だ。全パスの百科事典が要点ではない——制約は：ソースの抽象は走らない；誰かが下げねばならず、それは実行*前*にも実行*中*にも走り得る。

## Ahead-of-Time 対 Just-in-Time

プログラムが一度も実行される前にパイプライン全体を一度走らせる：Ahead-of-Time（AOT）——C と伝統的 FORTRAN。Just-in-Time（JIT）——Java、JavaScript など——はインタプリタか速いベースライン・コンパイラで始め、*実行時に*ホットパスを見つけて、より重い最適化で再コンパイルする。Wikipedia は、JIT を「実行中にコンパイルする手法」とし、インタプリタやベースラインと組み合わせてホットなコードを最適化することが多い、と書く。([Wikipedia — Just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation))

JIT の利点は、AOT コンパイラが持たなかった情報だ：観測された分岐、引数の型、実際のホットループ——そのデータなしでは仮定するのが危険な最適化。コストは本物だ：コンパイルが実行中にサイクルを燃やし、最初の数秒は定常状態より遅いことが多い——古典的なウォームアップ。

## ランタイム：コンパイル以上のもの

管理言語（Java、C#、程度の差はあれ JavaScript と Python）は、コンパイラをより広いランタイムと組にする——いちばん結果が大きいのが、ガベージコレクションによる自動メモリ管理で、プログラマを各確保の寿命追跡から解放する（C での主要なバグ源）。Wikipedia は、ガベージコレクションを「プログラムがもはや必要としないメモリを自動的に回収するメモリ管理の形」とし、手動の解放を不要にする、と書く。([Wikipedia — Garbage collection (computer science)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))) 複雑さはランタイムへ移る：手作業をオーバーヘッドと、歴史的には予測しにくい停止と取り替える。その緊張が、まさに第36–37章が「リアルタイム」と「GC 付き管理ランタイム」をしばしば対立として扱う理由だ。

## ライブで見る

下の VM ターミナルは本物の Linux だが、最小の BusyBox だ：C コンパイラはない（`gcc` は `gcc: not found`）。それでも本章の両側を見せられる。`hexdump -C /bin/busybox | head -2` を走れ：ファイルは `7f 45 4c 46` で始まる——`0x7f` のあと "ELF"。コンパイラとリンカが出す実行形式で、あなたが VM を起動するずっと前に、別の機械上で ahead-of-time に建てられた。それからインタプリタに同じ仕事を与えよ：`echo 'BEGIN{s=0; for(i=1;i<=1000000;i++) s+=i; print s}' > /tmp/sum.awk`、つづいて `time awk -f /tmp/sum.awk`。約数秒後に `500000500000` を出す（こちらの実行では約 6 秒；ブラウザでは違う）——awk が各反復を実行時に実行するからだ。最適化コンパイラなら、プログラムが走る前に定数へ畳めるループである。

{{< lab type="vm-terminal" >}}
