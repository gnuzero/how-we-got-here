---
title: "実践のリアルタイム系"
weight: 37
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 36
aliases:
  - /posts/30-real-time-systems-in-practice/
  - /posts/35-real-time-systems-in-practice/
  - /posts/36-real-time-systems-in-practice/
tags: []
summary: "固定予算でのセンス–コンピュート–アクチュエータ——航空電子と産業制御、そして組み込みの ITRON"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

前章は理論だった：ハードとソフトの期限、レートモノトニック、なぜ「速い」と「リアルタイム」が違うか。本章は、その保証が配備される現場——そしてそれを建てる実務がどう見えるか——である。

## 航空電子：期限破りは破局

飛行制御は、ハード・リアルタイムの正典例だ。フライ・バイ・ワイヤの安定化ループは、センサを読み、舵面の補正を計算し、アクチュエータ指令を固定の短い周期で出す。期限を破れば応答が不安定になり得る。民間航空機のソフトは、RTCA DO-178C のような規格で厳しいタイミング分析を求められる——「だいたい期限を守る」ではなく、認定された運用条件下で*常に*守る証拠だ。Wikipedia は、DO-178C を「航空機系・機器のソフトを対象とする文書」とし、Design Assurance Level ごとに目標が変わる、と書く。([Wikipedia — DO-178C](https://en.wikipedia.org/wiki/DO-178C))

## 産業オートメーション：協調する連続制御

生産ライン——ロボットアーム、コンベヤのタイミング、品質センサ——は同じ閉ループを回す：センス、コンピュート、アクチュエータ、反復。しばしばミリ秒周期だ。ここでの期限破りは航空ほど破局的でないことが多いが、なお深刻——動く部品に対する位置指令の遅れは衝突や高価な装置の損傷につながり得る。

## 共有の型：閉ループ制御

両領域は名付ける価値のある型を共有する：**センス**（センサからの現状態）、**コンピュート**（正しい応答——しばしば PID など制御理論のアルゴリズム）、**アクチュエータ**（モータ信号、舵面）、固定周期で反復。リアルタイム保証はループ*全体*を端から端まで覆う——センサ遅延、計算、作動のすべてが同じ予算に計上される。制御アルゴリズムがどれほど速くても、ループの他所で予測不能な遅延が入れば失敗する。

## 汎用ハードでは足りないことが多い理由

リアルタイム系は、汎用 OS 上の汎用 CPU ではなく、専用マイクロコントローラで走ることが多い。より単純で予測しやすいアーキテクチャ——しばしばキャッシュなし、アウト・オブ・オーダなし、投機的分岐予測なし——は、フェーズ 3 が性能として扱う技法を、意図的に捨てるか迂回する。タイミングを*予測しにくくする*ものが、ハード・リアルタイムでは設計の敵になる。

## 日本の組み込み：ITRON

英語版が航空・産業に置く保証の現場として、日本の組み込みでは ITRON（Industrial TRON）仕様のリアルタイム OS が長く使われてきた。TRON Forum の FAQ は、「ITRON Specification OS」を組み込み機器制御向けリアルタイム OS 仕様の名とし、ハードやプロセッサへの適合を許し、「ゆるい標準化」（実行時オーバーヘッドとメモリフットプリント削減を重視する方針）に基づく、と書く。同 FAQ は、日本の組み込み系の 50% 以上で ITRON 仕様準拠 OS が使われている、とも述べる。([TRON Forum — FAQ of ITRON Specification OS](https://www.tron.org/tron-project/itron/itron-faq/)) µITRON は、メモリと性能が限られたプロセッサ向けに機能を絞った系列で、当初は 8〜16 ビット MCU 向けだったが、いまは 8〜32 ビットへスケールする、と同 FAQ が説明する。µITRON4.0 仕様書の序文は、ITRON サブプロジェクトが 1984年に始まり、1987年に最初の ITRON1 仕様を出し、のち µITRON／ITRON2（1989）、µITRON3.0（1993）、µITRON4.0 と続いた、と記す。自動車制御向けのプロファイルも µITRON4.0 に反映された、ともある。([µITRON4.0 Specification PDF, TRON Forum](https://www.tron.org/wp-content/themes/dp-magjam/pdf/specifications/en_US/WG024-S001-04.03.00_en.pdf)) 英語版の航空・産業の型と並ぶ、日本の組み込み現場の一例として置く——本シリーズが日本の読者に示す、同じ最悪ケース規律の別の顔だ、と読むのは筆者の解釈である。

## 二つのラボ、一つの対比

両インタラクティブ・ラボを意図的に並べる唯一の章だ：mini-CPU は、単純ハード上の決定的で数えられる命令タイミング——なぜ単純さが認証可能性を助けるか——を手で触れる場所。VM ターミナルは、フルの汎用 OS スタックを走らせる——ハード・リアルタイムが消しにいくスケジューリングとタイミングのばらつきを見るのに役立つ。

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

**出口：** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification*——本章が名指す民間航空ソフト保証の一次規格。日本の組み込みでは TRON Forum の ITRON／µITRON 仕様書群。
