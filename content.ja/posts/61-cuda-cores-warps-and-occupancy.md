---
title: "CUDA コア、ワープ、占有率"
weight: 61
date: 2026-01-01
draft: false
phase: "9 — GPU と並列計算"
series_index: 60
aliases:
  - /posts/53-cuda-cores-warps-and-occupancy/
  - /posts/59-cuda-cores-warps-and-occupancy/
  - /posts/60-cuda-cores-warps-and-occupancy/
tags: []
summary: "SIMT は SM とワープに写る——ロックステップは分岐まで勝ち、占有率がメモリ・ストールを隠す"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

前章は、なぜ GPU が巨大並列 SIMT に賭けるかだった。本章は具体的な地図だ：Streaming Multiprocessor、ワープ、占有率——その並列ハードが実際にどれだけ使われるか。

## Streaming Multiprocessor

GPU は多くの Streaming Multiprocessor（SM）だ——各々がほぼ自己完結の並列単位で、多くの単純な CUDA コア（ALU 風レーン。フェーズ 3 の CPU コアより意図的に単純：アウト・オブ・オーダなし、第21章級の洗練された分岐予測なし）、ワープ・スケジューラ、常駐スレッドが共有するレジスタ・ファイルを持つ。Wikipedia は、NVIDIA の用語で Streaming Multiprocessor を、複数の CUDA コアと共有資源を持つ GPU の基本計算ブロックとする説明を、CUDA 関連の記述に載せる。([Wikipedia — CUDA](https://en.wikipedia.org/wiki/CUDA)) 何十もの SM がほぼ独立に走るのが、CPU の一握りの複雑コアに対する GPU の総並列の源だ。

## ワープ：単位としてのロックステップ

SM 上のスレッドはワープにまとめられる——NVIDIA ハードでは常に 32 スレッド（AMD のウェーブフロントは歴史的に 64）。ワープは、前章の SIMT が強制される粒度だ：32 すべてが*同じ*サイクルに*同じ*命令を、各々自分のデータ上で実行する。「一つの共有制御、多くのレーン」のハード形だ。([Wikipedia — CUDA](https://en.wikipedia.org/wiki/CUDA))

## 分岐ダイバージェンス：ロックステップのコスト

*一つのワープ内*のスレッドが違う分岐を取ると、ハードは両経路を逐次実行し、非活性側をマスクする。各スレッドは一方だけ要るのに、ワープは両経路の長さかかる——非分岐の場合を安くする同じロックステップの直接の税だ。ワープ内のスレッドを同じ経路に保つことは、だから様式ではなく本物の最適化だ。

## 占有率：用意できた仕事でレイテンシを隠す

SM には有限のレジスタと共有メモリがあり；常駐ワープごとに取り分を食う。占有率は、ハードが支えられるのに対し、どれだけのワープが常駐し適格かだ。高い占有率はメモリ・レイテンシ（第42章）を隠す助けになる：一つのワープが遅いアクセスで止まっているあいだ、スケジューラが用意できたワープへ切り替え、レーンを忙しく保つ。

「最大化して終わり」ではない。スレッドあたりより多くのレジスタや共有メモリを使うカーネルは、ワープ数が減っても、冗長な仕事やメモリ交通を切ればなお速く終わり得る。占有率対スレッドあたり資源は本物の取引だ——抽象だけでなく、カーネルが本物のシリコンに会うときに現れる。
