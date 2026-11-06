---
title: "仮想メモリとマルチタスク"
weight: 31
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 30
aliases:
  - /posts/24-virtual-memory-and-multitasking/
  - /posts/29-virtual-memory-and-multitasking/
  - /posts/30-virtual-memory-and-multitasking/
tags: []
summary: "タイムシェアリングには隔離が要る——仮想メモリは、どのプロセスにも機械を所有している幻想を与える"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

タイムシェアリング（前章）は、複数のプロセスが——見た目には同時に——一台の上で走ることを要求する。すぐの問題：どのプロセスも任意の物理アドレスを自由に読み書きできるなら、バグのある（あるいは悪意のある）プログラムが他のデータを、あるいは OS 自体を壊せる。仮想メモリは、どのプロセスにもアドレス空間全体を*所有している幻想*を与え、その下の真実は OS が管理することで、それを防ぐ。

## 核の幻想

どのプロセスも完全な仮想アドレス空間を見る——64ビット系では物理 RAM よりはるかに大きい。仮想アドレスを参照すると、ハードウェア（Memory Management Unit、MMU）が、OS が維持するページ表を介して物理アドレスへ翻訳する。二つのプロセスがどちらも「仮想アドレス 0x1000」を参照しても、二つの違う物理フレームに当たる——内側からは普通の独占所有に見えても、互いのメモリは見えない。

Linux カーネル文書は、物理メモリがページ・フレーム（ページ）に分かれ、各ページの大きさはアーキテクチャ依存であり、仮想ページへの写像はページ表が記述する、と書く。([Linux Kernel Docs — Memory Management Concepts](https://docs.kernel.org/admin-guide/mm/concepts.html)) University of Wisconsin の OSTEP は、典型的な 32ビット空間で **4 KB** ページを想像する例を示す（20ビット VPN と 12ビット・オフセット）。([OSTEP — Paging](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf))

## ページ、フォルト、スワップ

メモリは固定長のページに分かれる。ページ表は仮想ページを物理フレームへ写す。決定的なことに、すべての仮想ページが*常に*フレームを持つ必要はない——「不在」と印を付け、参照はページ・フォルトとして OS へトラップする。OS はディスクからページを読み込め（コードとデータの遅延持ち込み）、あるいは真のエラー（与えられなかったメモリへのアクセス——セグメンテーション・フォルトのよくある道）として扱える。

同じ仕組みがスワッピングを可能にする。メモリ圧の下で冷たいページをディスクへ書き、「不在」にし、フレームを空ける。物理より多い RAM があるかのように振る舞う——再び触ればディスク速度の代償が来る。豊富な RAM は重いスワップを昔ほど一般的でなくしたが、仕組みはなお根本だ、と読むのは筆者の解釈である。

## 隔離としてのセキュリティ

マルチタスクを可能にするだけでなく、翻訳はセキュリティ境界でもある。あるプロセスには、他プロセスの物理メモリを指す*仕組み*がない——自分のページ表に、そこへ写る有効な仮想アドレスがない。よく振る舞うサンドボックス化されたプロセス内のメモリ破壊は、（原理上）無関係なプロセスを読んだり壊したりさせない。隔離は慣習ではなく、ハードウェアが検査するアドレス翻訳だ。

## これが向かう先

仮想メモリは、どのプロセスにも隔離されたアドレス空間を与える——強い保証であり、重い保証でもある。固有のカーネル構造、固有のページ表、あいだのフルなコンテキスト・スイッチ費用。コンテナ（次章）は問う。テナントごとにまったく別のカーネルを払わずに、プロセスが要する実用的隔離の*ほとんど*を取れるか？

{{< lab type="vm-terminal" >}}
