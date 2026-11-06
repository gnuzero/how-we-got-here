---
title: "PCIe 深掘り"
weight: 40
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 39
aliases:
  - /posts/33-pcie-deep-dive/
  - /posts/38-pcie-deep-dive/
  - /posts/39-pcie-deep-dive/
tags: []
summary: "意図は TLP に乗り、信頼性と信号は下層——共有バスを置き換えたスタック"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

前章は、なぜ PCIe がシリアルでポイント・ツー・ポイントになったかだった。本章は、それらのリンク上で転送が*どう*構造化されるか——ファブリックを話すハードを建てるなら重要な層であり、本シリーズが後で戻る Nitefury ベースの GPU メモリ作業にも関わる。

## 意図、信頼性、電子

三層、三つの仕事。**トランザクション層**は、読み・書き・完了が生まれ死ぬところ——ソフトが考える層だ。**データリンク層**は配送を信頼できるものにする：シーケンス番号、CRC、パケットが壊れていれば再送。**物理層**は線：差動対、ストリームが回復可能な符号化、銅への直列化。こう分けるので、カスタム設計は電子を再発明せずに*意図*を書ける。Wikipedia は、PCIe がトランザクション／データリンク／物理の層に分かれ、上位が Transaction Layer Packet（TLP）を扱う、と説明する。([Wikipedia — PCI Express](https://en.wikipedia.org/wiki/PCI_Express))

## パケットが契約

単位は Transaction Layer Packet だ。TLP は種類（メモリ読み／書き、I/O、構成）、アドレス、長さ、書きならペイロードを名指す。リンク層がシーケンスと CRC で包み、向こう側が検査し、必要なら再試行する。上から見ると信頼できる読み書きに見える。信頼性は魔法ではない。その包みだ。

## レーンは幅を、世代はレートを伸ばす

レーンは、各方向一つの差動対——最小のリンクだ。レーンを束ねる（x1…x16）と帯域が倍増する。各世代はレーンあたりのレートをほぼ倍にする（より高い信号、より締まった符号化）。同じ x16 スロットで、Gen 5 対 Gen 3：片方向帯域はおよそ 4 倍（約 64 GB/s 対約 16 GB/s）、余分な線なし。Wikipedia の世代表は、Gen 3 の x16 スループットを約 15.8 GB/s、Gen 5 の x16 を約 63.0 GB/s と載せる——英語版の「約 16／約 64」と同オーダーだ。([Wikipedia — PCI Express](https://en.wikipedia.org/wiki/PCI_Express)) 前章のシリアル賭けが、その上昇を可能にした。

## カスタム・ファブリックが気にする理由

FPGA メモリ・ファブリック・カードはこのスタックに住まねばならない：ルート・コンプレックスや他エンドポイントが受け入れる TLP を組み立て、リンクの信頼性と物理層は確立した IP に任せる。GPUDirect 風のピア・ツー・ピアは、同じ考えをさらに進めたもの——二つのエンドポイント間に宛てた TLP で、データ経路から CPU を外す。

**出口：** PCI Express Base Specification（PCI-SIG）——レーン・TLP・層スタックの生きた一次；版付き（凍結論文ではなく Base Spec）。
