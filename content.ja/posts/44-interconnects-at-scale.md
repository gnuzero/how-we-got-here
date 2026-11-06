---
title: "規模のインターコネクト"
weight: 44
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 43
aliases:
  - /posts/37-interconnects-at-scale/
  - /posts/42-interconnects-at-scale/
  - /posts/43-interconnects-at-scale/
tags: []
summary: "計算が多くのチップになったら、あいだの経路が次の壁——専用リンク、より少ないコピー"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

本フェーズはここまで、一台の*中*の部品をつないだ——CPU とメモリ、CPU と装置。ワークロードが複数の GPU、あるいは複数の機械を要すると、問いが変わる：それらの単位が*互い*に、追加の通信が追加の計算を食わないほど速く話せるか？

## 既定の経路が税だ

ピア経路がなければ、GPU A はシステム・メモリ経由で書き、GPU B がそれを読み戻す——余分なホップ、余分なレイテンシ、コピーに使われる PCIe 帯域。PCIe だけでも、GPUDirect P2P はホスト・ステージングなしで GPU↔GPU の DMA ができる（なお PCIe レート）。残る制約は帯域とトポロジ：共有の拡張ファブリックは、多 GPU メッシュとして設計されたことがない。

## 専用リンク、コヒーレント・メモリ、より少ないコピー

NVIDIA の NVLink は、目的特化の GPU–GPU インターコネクトだ——転送から CPU とシステム・メモリを外す。Wikipedia は、NVLink を GPU 間の高帯域ポイント・ツー・ポイント・リンクとし、NVSwitch がノード内の全対全接続を可能にする、と書く。([Wikipedia — NVLink](https://en.wikipedia.org/wiki/NVLink)) 頻繁で大きな交換——大規模学習が戻るパターン——では、その直通経路は一級であり、微調整ではない。

CXL（Compute Express Link）は隣の制約に答える：一ダイを超えるキャッシュ・コヒーレント・アクセスと、さらに外では、単一ソケットに半田付けされていないプール・メモリ。Wikipedia は、CXL を PCIe 物理層上のキャッシュ・コヒーレント・インターコネクトとし、デバイス・タイプにメモリ拡張を含む、と書く。([Wikipedia — Compute Express Link](https://en.wikipedia.org/wiki/Compute_Express_Link)) 容量は、着いた DIMM スロットに凍りつくのではなく、計算ノード間を動ける——DDR（第41章）も生の PCIe も与えない柔軟さだ。

GPUDirect RDMA は、NIC が GPU メモリを直接読み書きできるようにする。なければ、ネットワーク越しの GPU–GPU 転送は GPU → システム・メモリ → NIC → 遠いシステム・メモリ → 遠い GPU——レイテンシとメモリ帯域を食うコピーだ。GPU → ネットワーク → GPU へ畳む。ストレージやメッセージングで RDMA（第49章）が勝つのと同じ理由：コピーが減り、移動の子守から CPU が解放される。

## 同じ問題、開いたハード

本シリーズが指し続けるカスタム GPU メモリ・ファブリックの概念的基盤がここだ：汎用 CPU を経路に置かず、遠い GPU メモリをアドレス可能にする。NVLink と GPUDirect は一ベンダーのスタック内でそれを解く。開いた PCIe ベースの代替は、同じ非効率を除かねばならない——だから第39–40章の TLP 級ピア経路と、本章の「なぜ専用リンクがあるか」は同じ物語だ。
