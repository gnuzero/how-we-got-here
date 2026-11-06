---
title: "バッチ処理とオペレーティングシステムの誕生"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 27
aliases:
  - /posts/21-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/26-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/27-batch-processing-and-the-birth-of-the-operating-system/
tags: []
summary: "パンチカードの仕事のあいだに高いCPUが遊んだ——最初の常駐モニタ、利用者のプログラムではないシステムソフトを強いた"
image_prompt: "Historical illustration of an operator loading punch cards into a batch-processing mainframe, clean vintage computing illustration style"
video_prompt: "20-second animation: punch cards feeding sequentially into a card reader, clean vintage-style motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: batch job queue flow + early OS resident monitor block diagram"
---

メインフレームの章の機械は、いま私たちが認める意味のオペレーティングシステムでは走っていなかった。誰かがプログラムを載せ、走らせ、待ち、次を載せた。一人の利用者が独占するならそれでよい。複数の仕事が一台の高い機械を分け合わねばならない瞬間——メインフレームの値段を考えれば、ほぼすぐに来た——に崩れる。

## 遊休時間が制約だった

初期の運用は、人間がパンチカードのデッキを載せ、走らせ、出力を集め、次を載せる——そのあいだ CPU はセットアップと片付けのすべてで遊んでいた。バッチ処理は*順序付け*を自動化した。仕事の山を提出し、常駐プログラム（初期の「モニタ」）が一つずつ載せ、走らせ、人間を仕事のあいだに入れない。

その常駐モニタが、オペレーティングシステムの直接の祖先だ。狭い仕事——載せ、始め、終わりを検知し、次を載せる——だが、それは利用者のどのプログラムとも区別された*システム*ソフトの最初の一片であり、いま実行中の仕事の代わりに機械を管理し続ける。

IBM の System/360 史は、互換の家族とプラットフォームとしてのコンピュータを据えた、と書く。([IBM History, System/360](https://www.ibm.com/history/system-360)) バッチ時代の「誰が機械を回すか」は、その上に載る常駐ソフトの問題になった、と読むのは筆者の解釈である。

## スケジューリングが方針になる

バッチ系が成熟すると、ジョブ制御言語が提出した仕事に資源・失敗処理・出力経路を名付けさせ、待ち行列が厳格な提出順ではなく優先度で走らせる。優先度、資源配分、スケジューリング方針が、ここであいまいなオペレータ判断ではなく、本物の OS の関心事として現れる。

## バッチが渡せなかったもの

対話性はない。仕事は始めから終わりまで走り、途中で介入・中間状態の検査・リダイレクトの余地がない。バグはしばしばフルランのあと——ときには何時間もあと、高い割当を焼いたあと——にしか表面化しない。探索的な仕事では、そのターンアラウンドが硬い生産性の天井だった。

**いま試す。** 下の VM を起動し、画面をクリックしてから `whoami`、`uname`、`ls` を走る。そのプロンプトはバッチ・デッキの反対だ——*いま*介入し、状態を見、リダイレクトする。タイムシェアリング（次章）が、この幻想を共有可能にした。

{{< lab type="vm-terminal" height="600" >}}

それを解くには、バッチ・アーキテクチャが渡せないものが要った。複数の利用者が*同時に*活動し、それぞれが専用セッションの幻想を持つこと。それがタイムシェアリング——仕事の順序付けを自動化するだけでなく、同時に活動するプログラムを切り替えて、切り替えが見えなくなるまで重ねることだ。次章がそこを拾う。
