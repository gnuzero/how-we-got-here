---
title: "Ethernet とローカル・エリア・ネットワーク"
weight: 47
date: 2026-01-01
draft: false
phase: "6 — ネットワーキングの進化"
series_index: 46
aliases:
  - /posts/40-ethernet-and-the-local-area-network/
  - /posts/45-ethernet-and-the-local-area-network/
  - /posts/46-ethernet-and-the-local-area-network/
tags: []
summary: "建物の中の共有媒体——CSMA/CD からスイッチド・スターへ"
image_prompt: "Diagram of early shared-cable Ethernet with CSMA/CD collision detection, morphing into a switched star, clean networking textbook style"
video_prompt: "20-second animation: two stations colliding on a shared cable then backing off randomly; then a switch eliminating the shared segment, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD timeline + Ethernet frame fields + shared bus vs switched star"
---

ARPANET（第46章）は、遠いサイト間の広域パケット交換を解いた。一つの建物の中で、数十メートルのケーブルのために IMP 風のルーティングは道具として誤りだ。Ethernet は、1973年に Xerox PARC で Robert Metcalfe と David Boggs により始まり、支配的なローカル解になった。Wikipedia は、Ethernet を Xerox PARC で開発された LAN 技術族とし、Metcalfe と Boggs の 1976年 CACM 論文が設計を述べた、と書く。([Wikipedia — Ethernet](https://en.wikipedia.org/wiki/Ethernet))

## 共有媒体の問題

初期 Ethernet は、多くの局を一本の共有ケーブル——バス・トポロジ——に置いた。機械の中の共有バス（第38章）と同*種*の競合が、いま LAN 上にある。どの局も送信でき、どの局もすべての送信を聞く。二つ同時に送れば両方壊れる。

## CSMA/CD：聞いて、送り、検出し、下がる

Ethernet の答えは CSMA/CD だ。**Carrier Sense：**まず聞く；媒体がアイドルに見えるときだけ送る。**Multiple Access：**どの局も試してよい——システム・バスの要求／許可と違い、中央の許可なし（第38章）。**Collision Detection：**送りながら聞き続け、衝突が見えたら止め、*ランダム*なバックオフを待ち、再試行。Wikipedia は、CSMA/CD を共有媒体上の多重アクセス方式として説明する。([Wikipedia — Carrier-sense multiple access with collision detection](https://en.wikipedia.org/wiki/Carrier-sense_multiple_access_with_collision_detection))

ランダム化が荷重を支える技巧だ。固定で同一のバックオフは永遠に衝突する。違うランダム待ちが、他方が再試行する前に一方を成功させる——アービタなしの分散競合。

## フレーム

Ethernet はフレームでデータを運ぶ：送信元と宛先の MAC アドレス（ハードウェア・アドレス、第48章の IP アドレスの下）、上位プロトコルのタイプ欄、ペイロード、CRC——PCIe のデータリンク検査（第40章）と同じ信頼性の*種*が、別の媒体上にある。

## 共有バスからスイッチド・スターへ

いまの有線 Ethernet の多くは、共有ケーブルを捨て、各局に専用のポイント・ツー・ポイント・リンクを与えるスイッチへ移った——古いパラレル・バスに対して PCIe が取った、共有からポイント・ツー・ポイントへの脱出と同型だ（第39章）。適切なスイッチ上では、古典的 CSMA/CD の衝突はほぼ消える：各リンクに端が二つしかない。考えは歴史的に重要であり、なお共有無線媒体である初期 Wi-Fi は、同じ衝突制約を解かねばならなかった。

## どこへ向かうか

ローカルの Ethernet と広域のパケット・ルーティングは、なお隙間を残す：異種の下位技術を一つのインターネットワークへ結ぶ*普遍的*なアドレスとルーティングの枠。それが TCP/IP——次章。

**出口：** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks"（*Communications of the ACM*, 1976）——共有媒体 LAN と CSMA/CD 設計を述べた一次論文。

{{< lab type="vm-terminal" >}}
