---
title: "データセンタ・ネットワーキングと RDMA"
weight: 49
date: 2026-01-01
draft: false
phase: "6 — ネットワーキングの進化"
series_index: 48
aliases:
  - /posts/42-datacenter-networking-and-rdma/
  - /posts/47-datacenter-networking-and-rdma/
  - /posts/48-datacenter-networking-and-rdma/
tags: []
summary: "一つの管理されたファブリックの中では、カーネル・コピーが税になる——RDMA とトポロジが線を取り戻す"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP（第48章）は、異種で信頼できないグローバル網の正しい背骨だ。一つのデータセンタの中——一人の所有者、短い距離、設計されたファブリック——では、同じカーネル経由の経路が、毎マイクロ秒と毎バイトの帯域を使うワークロードにはオーバーヘッドに見え始める。

## オーバーヘッドはどこから来るか

伝統的な TCP/IP 送信は、アプリケーション・データをカーネル・バッファへコピーし、スタックを走らせ、NIC に送らせる——受信側でも鏡像だ。各段が CPU サイクルを食し、レイテンシにとってはさらに悪いことに、メモリ位置のあいだの本物の*コピー*を食う。普通のウェブ交通には十分。秒あたり何度も勾配を交換する HPC や分散 ML 学習には高い。

## RDMA：データ経路からカーネルと CPU を外す

RDMA（Remote Direct Memory Access）は、受信側の CPU やカーネルが転送の子守をしなくても、一機械が他のメモリを読み書きできるようにする。RDMA 対応アダプタが、ネットワーク越しにメモリからメモリへバイトを動かす。Wikipedia は、RDMA を「あるコンピュータのメモリから、どちらの OS も関与せずに、別のコンピュータのメモリへ直接データ転送する」能力とし、低レイテンシ・高スループット向けに使われる、と書く。([Wikipedia — Remote direct memory access](https://en.wikipedia.org/wiki/Remote_direct_memory_access)) 第44章の GPUDirect RDMA と同じ考え——コピーが減り、CPU が計算へ戻る——を、ノード上の GPU 間だけでなく、機械間へ適用したものだ。

## Fat-tree：何千台を均等に結線する

何千台の機械では、トポロジが帯域が本物か広告だけかを決める。Fat-tree は、負荷の下でしか見えないボトルネック・リンクを隠すのではなく、階層を上がるにつれ容量が予測可能にスケールするようスイッチを組む。Wikipedia は、fat-tree を、葉に近いリンクより根に近いリンクの帯域を大きくしたツリー・トポロジの一種とし、データセンタ・ファブリックに使われる、と書く。([Wikipedia — Fat tree](https://en.wikipedia.org/wiki/Fat_tree)) 大規模学習クラスタがその意図で結線されるのは偶然ではない。

## 本シリーズのファブリック作業と同じ哲学

不要なコピーを除き、要らないところではカーネルを迂回し、トポロジが許す限りハードにデータを直接動かさせる。第44章はそれを GPU ノードの内外に適用した；本章は機械間ネットワーキングに適用する。合わせて、フェーズ 7 の分散システム——ウェブ前インターネット自身の初期の「見つけて話す」系から——へ渡す。

{{< lab type="vm-terminal" >}}
