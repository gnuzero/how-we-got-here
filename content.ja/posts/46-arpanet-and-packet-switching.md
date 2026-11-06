---
title: "ARPANET とパケット交換"
weight: 46
date: 2026-01-01
draft: false
phase: "6 — ネットワーキングの進化"
series_index: 45
aliases:
  - /posts/39-arpanet-and-packet-switching/
  - /posts/44-arpanet-and-packet-switching/
  - /posts/45-arpanet-and-packet-switching/
tags: []
summary: "専用回線を予約せずに多くの機械が届く——パケット、IMP、そして日本の JUNET／WIDE"
image_prompt: "Historical map of the first four ARPANET nodes with packet icons hopping between IMPs, clean vintage networking diagram style"
video_prompt: "25-second animation: a message broken into packets taking different routes then reassembling, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: circuit switching vs packet switching + early ARPANET four-node map"
---

前章のシリアル・リンクは、ちょうど二つの端点をつなぐ。1969年に ARPA（のち DARPA）の下で動いた ARPANET は、別のことを証明しようとした：どの対のあいだにも専用回線を置かずに、多くの機械が多くの他者へ届くこと——データをホップごとに独立にルーティングされるパケットへ分けることで。

## 回線交換対パケット交換

電話網は回線交換を使った：通話*全体*のために、誰かが話していなくても、連続した端点間経路を予約する。連続する声にはよい。バースト性のコンピュータ交通——活発な転送のあと、予約回線が遊休するアイドル——には貧しい適合だ。

パケット交換は逆の賭けを取る。データをパケットに分け、各々が宛先アドレスを持ち、独立にルーティングし、多くの会話で物理リンクを共有する。セッション全体のために経路を予約しない——別の転送のパケットが交差し、別の経路を取り、宛先で再組立される。Wikipedia は、ARPANET を最初の広域パケット交換網の一つとし、1969年に最初のノードが接続された、と書く。Paul Baran の分散・survivable 通信の仕事と Leonard Kleinrock の待ち行列分析が知的基盤を供給し、Lawrence Roberts が ARPA で研究網へ落とした、とも広く記述される。([Wikipedia — ARPANET](https://en.wikipedia.org/wiki/ARPANET); [Wikipedia — Packet switching](https://en.wikipedia.org/wiki/Packet_switching))

## IMP：元のルータ

ARPANET のホップは Interface Message Processor（IMP）——各サイトの専用ミニコンピュータで、ローカル・ホストからパケットを受け、次ホップを選び、転送した。概念的には、いまのルータがなおすることだ。最初の四ノード——UCLA、Stanford Research Institute、UC Santa Barbara、University of Utah——は後の尺度では小さい。紙の上だけでなく、パケット交換が実務で動くことを示すには足りた。([Wikipedia — ARPANET](https://en.wikipedia.org/wiki/ARPANET))

## 本当の賭けだった理由

回線交換に浸った通信技術者は、予約経路のない網がそもそもデータを信頼して届けられるか疑うことが多かった。ARPANET の成功は、本物の懐疑に対するアーキテクチャの制度的検証だった——誰もがすでに合意していた「次の一歩」ではない。

## 日本：JUNET と WIDE

英語版の弧は ARPA のパケット賭けに留まる。日本語版は、同じ「多くの機械が専用回線なしで届く」問題への日本の答えを添える。JPNIC の回顧は、1984年9月に慶應と東工大がモデムでつながり、石田晴久の「三つ以上つながってはじめてネットワーク」という言葉を受けて 1984年10月に東大が加わり、のち JUNET と呼ばれる網が始まった、と書く。([JPNIC — JUNETの誕生](https://www.nic.ad.jp/ja/newsletter/No29/060.html)) 科学技術振興機構の『情報管理』論文（砂原・村井）は、1984年10月に東工大・慶應・東大の UNIX マシンが接続されて JUNET が誕生し、電話網上のその網がいまのインターネットの基礎の一つとなり、コミュニティから WIDE プロジェクトが生まれた、と書く。([J-STAGE — WIDEプロジェクトの25年](https://www.jstage.jst.go.jp/article/johokanri/56/9/56_571/_article/-char/ja/)) 情報処理学会誌の村井の一文は、1984年の JUNET 設立と 1988年の WIDE プロジェクト設立を本人の経歴として記す。([IPSJ — インターネット文明を創る](https://www.ipsj.or.jp/magazine/9faeag000000pfzm-att/IPSJ-MGN610401.pdf)) ARPANET がパケットの制度的検証なら、JUNET／WIDE は日本でその検証を大学間の実務と研究コミュニティへ移した系譜だ、と読むのは筆者の解釈である。

## 何を据えたか

ARPANET 自身のホスト間プロトコルは、まだ TCP/IP（第48章）ではなかった。アーキテクチャの勝ち——専用回線の上のパケット——が、本フェーズののちのすべての網、現代インターネット、データセンタ・ファブリック（第49章）の基礎だ。次はローカル：TCP/IP が異種の網を一つのインターネットワークへ結ぶ前に、建物がどう Ethernet に標準化したか（第47章）。

**出口：** Paul Baran, *On Distributed Communications*（RAND Corporation, 1964）——Kleinrock の待ち行列と Roberts の ARPA 計画と並び、なぜ ARPANET が回線交換に賭けれられたかを支える古典。日本側は JPNIC／J-STAGE／IPSJ の JUNET・WIDE 一次回顧。

{{< lab type="vm-terminal" >}}
