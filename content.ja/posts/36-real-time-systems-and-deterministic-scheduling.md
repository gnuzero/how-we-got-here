---
title: "リアルタイム系と決定的スケジューリング"
weight: 36
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 35
aliases:
  - /posts/29-real-time-systems-and-deterministic-scheduling/
  - /posts/34-real-time-systems-and-deterministic-scheduling/
  - /posts/35-real-time-systems-and-deterministic-scheduling/
tags: []
summary: "スループットと公平は期限ではない——ハード・リアルタイムは最悪ケースの有界なタイミングを求める"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

フェーズ 4 でここまで扱ったもの——バッチ、タイムシェア、仮想メモリ、コンテナ——は、スループット・公平・効率的な共有を最適化する。どれも、ある仕事が*いつ*終わるかを硬く保証しない。リアルタイム系はその保証を気にする。「速い」と「リアルタイム」は別の性質だ——混同されやすい区別である。

## 速いことと決定的であることは違う

汎用スケジューラ（本シリーズのプロセス／スケジューリング章）は、*平均ケース*の応答性と公平な共有を狙う——普通は十分速い。だが「普通は速い」は「指定期限以内に例外なく終わる」ではない。キャッシュ効果、割り込み処理、ガベージコレクションの停止が遅延を伸ばし得る。大半のアプリではたまにのばらつきは問題にならない。リアルタイム系では、それが本題になり得る。

## ハードとソフト

**ハード**期限：破りは系全体の失敗——性能の劣化ではない。飛行制御の安定化、エアバッグ展開——毎回、窓内に、さもなければ破局になり得る。

**ソフト**期限：破りは品質を落とすが、即失敗ではない——負荷で落ちる動画フレームは不快だが、認証危機ではない。期限を守る強い実務的傾向はあるが、ハードが求めるような保証ではない。

Wikipedia は、ハード・リアルタイム系を「期限を破ることが系の失敗につながる」もの、ソフト・リアルタイムを「期限破りが望ましくない結果を生むが、必ずしも破局ではない」ものと対比して説明する。([Wikipedia — Real-time computing](https://en.wikipedia.org/wiki/Real-time_computing))

## レートモノトニック・スケジューリング

ハード・リアルタイムへの古典的な一手：レートモノトニック・スケジューリング——各周期タスクに、実行頻度から固定優先度を付ける；周期が短いほど優先度が高い。Wikipedia は、Liu と Layland（1973）が固定優先度の周期タスク集合に対し、レートモノトニックが最適（そのクラスで任意の固定優先度割当が期限を満たせるなら、レートモノトニックも満たす）であることを示した、と書く。([Wikipedia — Rate-monotonic scheduling](https://en.wikipedia.org/wiki/Rate-monotonic_scheduling)) スケジューラビリティの数学的な境界——ハード・リアルタイムが認証に使う種類の形式的性質だ。

## 別種の OS が要る理由

これらの保証には、最悪ケースのタイミングが有界であるよう設計された OS——リアルタイム OS（RTOS）——が要る。汎用のスループット／公平の系譜とは別だ。割り込みレイテンシは有界で既知でなければならない。メモリ確保は、汎用 GC のような予測不能な遅延に頼れないことが多い。ミューテックスさえ、低優先度タスクが高優先度を無制限に塞がないよう、優先度継承などの設計が要る——優先度逆転は古典的な落とし穴だ。Wikipedia は、優先度逆転を「高優先度タスクが、それが必要とする資源を低優先度タスクが保持しているためにブロックされる」状況とし、優先度継承を緩和策の一つとして挙げる。([Wikipedia — Priority inversion](https://en.wikipedia.org/wiki/Priority_inversion))

mini-CPU ラボをこのレンズで見直すとよい：単純なハードでは、各命令のタイミングは決定的で数えられる——系が複雑になるにつれ RTOS 設計が守ろうとする予測性だ。次章は、航空電子・産業制御・組み込み配備へこれらの原則を持ち込む。

{{< lab type="mini-cpu" >}}

**出口：** C. L. Liu and James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment"（*Journal of the ACM*, 1973）——レートモノトニックと古典的ハード・リアルタイム・スケジューラビリティの一次論文。
