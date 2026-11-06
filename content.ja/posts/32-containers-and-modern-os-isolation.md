---
title: "コンテナと現代OSの隔離"
weight: 32
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 31
aliases:
  - /posts/25-containers-and-modern-os-isolation/
  - /posts/30-containers-and-modern-os-isolation/
  - /posts/31-containers-and-modern-os-isolation/
tags: []
summary: "フルVMは強い隔離を重い代償で買う——namespaceとcgroupは一つのカーネルを分け合い、ほかのほぼすべてを隔離する"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

仮想メモリ（前章）は、プロセス同士のメモリを隔離する。ファイルシステム、プロセス ID 空間、ネットワーク設定の共有からは隔離しない——伝統的な Unix プロセスは、生の RAM 以外でも他を見たり干渉したりしうる。コンテナはその面の多くへ隔離を広げ、フルなハードウェア仮想化までは行かない。

## フル仮想化：強く、重い

伝統的な VM は、完全なゲスト OS——固有のカーネル、固有のドライバ——を、仮想化（あるいはハードウェア支援でほぼネイティブな）CPU・メモリ・ストレージ・ネットを見せるハイパーバイザの上で走らせる。隔離は極めて強い。ゲストは、深刻なハイパーバイザ・バグを除けば、ホストのプロセスや他ゲストを見られない。代償は本物だ——各 VM が固有のカーネルを起動し、そのメモリ足跡を運び、一般にホスト直上より遅いハードウェア経路を払う。

## カーネルを分け合い、見え方を隔離する

コンテナは逆の取引を取る。ホスト上のどのコンテナも*同じ*カーネルを分け合う——インスタンスごとのゲスト OS 起動なし——一方、カーネルが隔離を提供し、各コンテナの見え方を別々に見せる。Linux の二つの機能が大半を担う。

**Namespaces** は、プロセスから見た特定資源を包む。man ページは、名前空間が大域資源を抽象で包み、中のプロセスには自分の隔離された実体があるように見せ、変更は同じ名前空間の他メンバーには見えるが外には見えない、と書く。用途の一つがコンテナの実装だ、ともある。種類には PID、ネットワーク、マウント、cgroup、IPC、UTS、ユーザーなどがある。([man7 namespaces(7)](https://man7.org/linux/man-pages/man7/namespaces.7.html))

**Cgroups**（control groups）は、CPU・メモリ・I/O などを制限・会計し、一つのコンテナが同じホスト上の他を飢えさせないようにする。Linux カーネルの cgroup v1 文書が、その枠組みを記述する。([Linux Kernel Docs — Control Groups](https://docs.kernel.org/admin-guide/cgroup-v1/cgroups.html))

系譜はバズワードより古い。chroot（プロセスの見かけのファイルシステム根を変える、1980年代初め）は、何十年も前の限られたファイルシステム隔離だった。cgroup と現代の名前空間は、その着想をプロセスの世界のより多くへ一般化する、と読むのは筆者の解釈である。

## なぜその取引が規模で勝ったか

コンテナはホスト・カーネルを分け合うので、典型的には秒の端数で起動し（カーネル起動なし）、インスタンスあたりの足跡もはるかに小さい——重複したカーネル・イメージやカーネル級キャッシュがない。その効率が、現代クラウド基盤の既定の梱包・配備単位になった理由だ——同じハードウェア上で VM よりはるかに多くのコンテナ、分散系（後続 Phase）が実際に回る規模では効く。

取引：共有カーネルは、十分深刻なカーネル脆弱性が、別カーネル仮想化の下では構造的により難しい仕方でコンテナ隔離を破りうることを意味する。多くの本番系はそれを意図的に受け入れ、ときに追加のサンドボックスを重ねる。あとの Kubernetes の議論はここを拾う。軽く速い隔離単位があれば、次の問題は艦隊をまたぐ何千もの調整だ。

{{< lab type="vm-terminal" >}}
