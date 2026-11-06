---
title: "ISA バスから PCI、そして PCIe へ"
weight: 39
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 38
aliases:
  - /posts/32-from-isa-bus-to-pci-to-pcie/
  - /posts/37-from-isa-bus-to-pci-to-pcie/
  - /posts/38-from-isa-bus-to-pci-to-pcie/
tags: []
summary: "スキューが広いパラレル・バスを殺し、ポイント・ツー・ポイントのシリアルが脱出になった"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

前章の天井：どの装置も同じ線を争う。ISA、次いで PCI、次いで PCIe は、その天井まわりの工学だ——バスのカタログではなく、制約の列。終わりの驚き：*シリアル*（線が少ない）が、パラレル（線が多い）に勝った。

## パラレルの直感と、それが壊れるところ

ISA（Industry Standard Architecture）は広いパラレル・バスだった：多数のデータ線、各 1 ビット、一緒にクロックされる。Wikipedia は、ISA を IBM PC／AT とその互換機で使われたバスとし、8088 ベースの 8 ビット・バスとおおむね後方互換だった、と書く。([Wikipedia — Industry Standard Architecture](https://en.wikipedia.org/wiki/Industry_Standard_Architecture)) 線が多いほど帯域が増える——控えめなクロックでは確かにそうだ。

どの線も長さと容量がわずかに違うので、ビットは同時に着かない——**スキュー**。遅いクロックではばらつきが周期の小さな割合で問題にならない。クロックを上げ、周期を縮めると、同じ固定スキューがタイミング余裕を食い、受信側が一つのエッジですべてのビットをサンプリングできなくなる。物理の天井であり、取りこぼした技巧ではない。広いパラレル・バスを無限に回せない。

## PCI は余裕を買ったが、脱出ではなかった

PCI（Peripheral Component Interconnect）は、Wikipedia によれば 1992年6月22日に生まれたローカル・バスで、Intel が最初の仕様を作り、のち PCI-SIG が標準を担った。ISA／EISA／MCA／VLB を置き換え、典型の 32 ビット・33 MHz 構成でピーク約 133 MB/s、と記す。([Wikipedia — Peripheral Component Interconnect](https://en.wikipedia.org/wiki/Peripheral_Component_Interconnect)) ISA より速く、よりよい調停とプラグ・アンド・プレイ構成、より実用的な帯域——だがなお共有パラレル・バスであり、クロックが上がればスキューの制約下にある。余裕であって、新しい位相ではない。

## PCIe が共有線を捨てた

PCI Express は、Wikipedia によれば 2003年に最初の版が出たシリアルのレーン型アーキテクチャで、共有パラレルの Conventional PCI を置き換えた。([Wikipedia — PCI Express](https://en.wikipedia.org/wiki/PCI_Express)) 一つの共有パラレル・バスの代わりに、各装置がスイッチへの専用ポイント・ツー・ポイント・シリアル・リンク（レーン、またはレーン束）を持つ。レーンあたり方向ごとに一つの差動対：十数本をロックステップで揃える必要がなく、レーンあたりのクロックはどのパラレル・バスより高く上げられる。帯域が要る装置はレーンを束ねる（x1、x4、x8、x16）——GPU が x16 を取るのは、x1 の NIC よりはるかに多く動かすからだ。無関係な装置は線を共有しないので、互いの調停を待たない。

物理線は減り、達成可能な帯域は上がる。共有バスの天井は消えた。次章は、それらのシリアル・リンクが転送をどう構造化し、機械の残りがなお読み書きを*意味*できるかである。
