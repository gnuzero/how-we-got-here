---
title: "The Memory Wall"
weight: 42
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 41
aliases:
  - /posts/35-the-memory-wall/
  - /posts/40-the-memory-wall/
  - /posts/41-the-memory-wall/
tags: []
summary: "CPU speed and DRAM latency diverged for decades — caches hide the gap; they do not close it"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

[Post 41]({{< relref "41-memory-buses" >}}) closed on a split: DDR bandwidth scaled; DRAM *latency* did not. Zoom out and that split is a system-level gap that has been widening for decades.

## Diverging Exponentials

Wm. A. Wulf and Sally A. McKee named it in 1995 ([PDF](https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf)), projecting that each memory access would soon cost "tens or even hundreds of processor cycles." Processor speed and DRAM speed both improve exponentially, but the exponents differ — and the difference of diverging exponentials grows exponentially. CPU performance (Phase 3's clocks and architecture) ran away; DRAM latency improved by a much smaller factor. They called the result the **memory wall**: not a nuisance better engineering quietly absorbs, a structural limit.

## Why Bandwidth Moved and Latency Did Not

Not an oversight — physics. DRAM access latency is dominated by sensing a tiny charge on a capacitor ([Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})'s 1T1C cell) reliably enough to tell 1 from 0. That sensing does not scale down like transistor switching. Bandwidth can be raised *without* beating that limit: wider prefetch, more banks, more channels, double-data-rate transfer. Throughput without a shorter first access. That is why DDR generations ([Post 41]({{< relref "41-memory-buses" >}})) sold bandwidth. Latency has stayed stubborn.

## What the Gap Costs

A core waiting hundreds of cycles on one miss is not computing. The cache hierarchy ([Post 22]({{< relref "22-caches" >}})) is not a nicety; it is the industry's main paper over the wall — keep the working set in SRAM so the CPU rarely pays full DRAM latency. Out-of-order execution ([Post 23]({{< relref "23-out-of-order-execution" >}})) hides some of the rest, overlapping independent work with a miss. Neither closes the gap. Both hide it for programs that are cache-friendly or have enough independent work.

Poor locality — large random structures, some graphs, some databases — still pays the wall in full. That is a large part of why *bandwidth* (not just capacity) became a first-class design target, and why GPU memory hierarchies and HBM (Phase 9) spend cost and complexity on moving bytes even though the first-bit wait barely budged. Next: a cousin wall, on the compute side, at almost the same historical moment.

**Door out:** Wm. A. Wulf and Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious" (*ACM SIGARCH Computer Architecture News*, 1995) — the short note that named the wall and showed why the gap would dominate unless something basic changed.

