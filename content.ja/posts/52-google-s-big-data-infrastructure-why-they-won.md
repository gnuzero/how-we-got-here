---
title: "Google のビッグデータ基盤——なぜ勝ったか"
weight: 52
date: 2026-01-01
draft: false
phase: "7 — 分散システム・ビッグデータ・オーケストレーション"
series_index: 51
aliases:
  - /posts/44-google-s-big-data-infrastructure-why-they-won/
  - /posts/50-google-s-big-data-infrastructure-why-they-won/
  - /posts/51-google-s-big-data-infrastructure-why-they-won/
tags: []
summary: "ウェブ規模のデータが、失敗を常態とするストレージを強いた——GFS、MapReduce、Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined"
schematics: "Diagram: GFS architecture + MapReduce map/shuffle/reduce stages + Bigtable sparse table"
---

1990年代末までに、いくつかの会社がウェブ検索を建てていた。Google はランキングの巧妙さだけでは勝たなかった——PageRank は効いたが、持続する優位は基盤だった：一台では到底足りない、絶えず変わるウェブを蓄え処理できる系。

## 制約：ウェブが一箱を超えた

「ウェブ全体」を索引することは、どの単一ディスクやメモリより大きいデータセットを意味し、一回のスナップショットではなく連続して到着する。フェーズ 3 は*一台*を速くした。この問題は違う：*多くの*機械を協調させ、どれ一つにも収まらないものを共同で持ち処理させる。

## 失敗は常態——だからストレージはそれを仮定した

Google File System（Ghemawat, Gobioff, Leung, SOSP 2003）は、大半のファイルシステムがなお例外としていた設計仮定から始めた：何千台のコモディティ機械では、ハードの失敗は日常だ。ファイルを大きなチャンクに分け、各チャンクを複数の chunkserver に複製し、マスタに所在を追わせる——機械を失うことは危機ではなく、自動で吸収される。Wikipedia は、GFS を Google の分散ファイルシステムとし、大きなファイルをチャンクに分割して複製する、と書く。([Wikipedia — Google File System](https://en.wikipedia.org/wiki/Google_File_System)) データセンタ内のファブリック作業（第49章）がするのと同じ*種*の賭けだ：部分失敗の常態に合わせて設計する。

## クラスタを再発明せずに処理する

ストレージだけでは足りなかった。その規模の処理には、どの技術者も分散と回復を再発明しなくてよいプログラミング模型が要った。MapReduce（Dean and Ghemawat, OSDI 2004）は二つのフック——レコードからキー・値を出す **map** と、同じキーの値を集約する **reduce**——を与え、*系*が分割、並列 map、キーによるシャッフル／ソート、並列 reduce、失敗タスクの再試行を扱った。Wikipedia は、MapReduce を大規模データセット向けのプログラミング模型／実装とし、map と reduce の二段階に処理を分ける、と書く。([Wikipedia — MapReduce](https://en.wikipedia.org/wiki/MapReduce)) 制約は物理と同じくらい認知的だった：クラスタを隠し、ジョブの論理を小さく保てるようにする。

## 安いバイトの上の構造

Bigtable（Chang et al., OSDI 2006）は隣の必要に答えた：ウェブ規模の疎な構造化ストレージ——行は URL、列はクロール版やメタデータ、大半のセルは空——下に GFS を置く。Wikipedia は、Bigtable を Google の分散ストレージ系とし、GFS 上に構築された、と書く。([Wikipedia — Bigtable](https://en.wikipedia.org/wiki/Bigtable)) 設計は、産業がのちに NoSQL と呼んだものの多くを形作った；つなぎ組織は同じだ：失敗耐性のバルク・ストレージとバッチのプログラミング模型があれば、構造化アクセスが次の強制層になる。

## なぜこれが堀だったか

競合はランキングの着想をコピーできた。コモディティ・ハード上でウェブ全体を蓄え、処理し、連続して再索引する能力——機械の死を常態として扱うこと——を複製するのははるかに難しかった。Hadoop とのちの「ビッグデータ」スタックは、Google 内部コードがなくても*公開された*論文に従った：論文が問題のクラスの解き方を示した。

バッチの map/reduce は強力で硬い。次章は、分散データを*処理する*ことから、成熟した分散系を成す多くのサービスを*配備し癒す*ことへ転じる。

**出口：** Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung, "The Google File System"（SOSP 2003）；Jeffrey Dean and Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters"（OSDI 2004）；Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data"（OSDI 2006）——この基盤物語の三つの一次。
