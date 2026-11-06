---
title: "ムーアの法則"
weight: 58
date: 2026-01-01
draft: false
phase: "8 — プロセス・ノードと製造"
series_index: 57
aliases:
  - /posts/50-moore-s-law/
  - /posts/56-moore-s-law/
  - /posts/57-moore-s-law/
tags: []
summary: "Moore の観察は経済的な部品数だった——トランジスタ数はなお上がる；クロックとトランジスタあたりコストは別の物語"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

「ムーアの法則」は絶えず死んだ、復活した、話し手が要るもの何でも意味する、と宣言される。前章までで製造がどう難しくなったかを見たあと、Gordon Moore が正確に何を観察したか——そして束ねられたどの傾向が実際には別の制約か——を言う価値がある。

## Moore が実際に書いたこと

Gordon Moore の 1965年 *Electronics* 論文は、部品の*数*を観察した：一つの集積回路上に経済的に載せられる部品数が、およそ年一倍のペースで倍増していた（1975年ごろにおよそ二年ごとに改訂）。その主張が*何かではない*ことに注意せよ：クロック速度の法則ではなく、シングルスレッド性能の約束でもなく、「経済的に」の語を超えたトランジスタあたりコストの別定理でもない。通俗用法はしばしばそれらの指標を一つのスローガンの下に束ねる；下の駆動因は別々だ。Wikipedia は、Moore の 1965年観察を、集積回路上のトランジスタ（当初は部品）数がおよそ毎年倍になるという経験則とし、のちおよそ二年ごとに改められた、と書く。([Wikipedia — Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law))

## トランジスタ数：なお上がる

Moore が枠づけた通り——チップあたり部品（いま：トランジスタ）——として測ると、傾向は何十年も持ち、なお上がる。リソグラフィとトランジスタ構造の進展（第56・57章）が駆動する。近代の先端チップは何十億個のトランジスタを持ち、五十年前の Intel 4004 のおおよそ 2,300 個（第25章）に対してそうだ。([Wikipedia — Intel 4004](https://en.wikipedia.org/wiki/Intel_4004))

## クロック速度：別の壁

クロック周波数は何十年もトランジスタ数と一緒に上がり、2005年ごろ平坦化した——トランジスタ・スケーリングが止まったからではなく、第43章の電力／熱の壁のためだ。それを「ムーアの法則の死」と呼ぶのは、二つの指標を混同する。数はクロックの高原を通じて上がり続けた；産業は新しいトランジスタを、一コアの周波数をさらに押すのではなく、より多くのコアとオンチップの専用機能（第24章）に使った。

## トランジスタあたりコスト：摩擦が見えるところ

Moore の枠の経済半分——密度が上がるにつれ部品が安くなる——が、近年の先端の摩擦がいちばんはっきりするところだ。EUV ツール（第56章）は格別に高く；各ノード世代はより精巧な工程を要す。何十年も、ウェハあたりより多くのトランジスタが、絶対チップコストが保たれまたは穏やかに増えても、トランジスタあたりコストを下げた。最新ノードではその関係が弱まった：密度はなお上がる；トランジスタあたりコストの改善は、歴史的レートではもはや自動ではない。

## 三つの指標、一つのスローガン

トランジスタ数：なおスケーリング。クロック速度：既知の熱理由で 2000年代半ばから平坦。トランジスタあたりコスト：多くのノードで絶対にはなお改善し、先端では文書化された摩擦あり。それらを一つの「法則」として扱うと、どの制約がなお譲り、どれが本フェーズが名指してきたアーキテクチャ転回を強いたかが隠れる。

**出口：** Gordon E. Moore, "Cramming more components onto integrated circuits"（*Electronics*, April 19, 1965）——のちにムーアの法則とあだ名された経済的部品数観察の一次声明。
