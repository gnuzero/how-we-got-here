---
title: "The Memory Wall"
weight: 36
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 35
tags: []
summary: "CPU speed and DRAM latency diverged for decades — caches hide the gap; they do not close it"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

Post 34 closed on a split: DDR bandwidth scaled; DRAM *latency* did not. Zoom out and that split is a system-level gap that has been widening for decades.

## Diverging Exponentials

Wm. A. Wulf and Sally A. McKee named it in 1995. Processor speed and DRAM speed both improve exponentially, but the exponents differ — and the difference of diverging exponentials grows exponentially. CPU performance (Phase 3's clocks and architecture) ran away; DRAM latency improved by a much smaller factor. They called the result the **memory wall**: not a nuisance better engineering quietly absorbs, a structural limit.

## Why Bandwidth Moved and Latency Did Not

Not an oversight — physics. DRAM access latency is dominated by sensing a tiny charge on a capacitor (Post 10's 1T1C cell) reliably enough to tell 1 from 0. That sensing does not scale down like transistor switching. Bandwidth can be raised *without* beating that limit: wider prefetch, more banks, more channels, double-data-rate transfer. Throughput without a shorter first access. That is why DDR generations (Post 34) sold bandwidth. Latency has stayed stubborn.

## What the Gap Costs

A core waiting hundreds of cycles on one miss is not computing. The cache hierarchy (Post 15) is not a nicety; it is the industry's main paper over the wall — keep the working set in SRAM so the CPU rarely pays full DRAM latency. Out-of-order execution (Post 16) hides some of the rest, overlapping independent work with a miss. Neither closes the gap. Both hide it for programs that are cache-friendly or have enough independent work.

Poor locality — large random structures, some graphs, some databases — still pays the wall in full. That is a large part of why *bandwidth* (not just capacity) became a first-class design target, and why GPU memory hierarchies and HBM (Phase 9) spend cost and complexity on moving bytes even though the first-bit wait barely budged. Next: a cousin wall, on the compute side, at almost the same historical moment.

**Door out:** Wm. A. Wulf and Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious" (*ACM SIGARCH Computer Architecture News*, 1995) — the short note that named the wall and showed why the gap would dominate unless something basic changed.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
