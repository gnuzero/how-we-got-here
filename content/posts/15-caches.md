---
title: "Caches"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 15
tags: []
summary: "Locality makes the memory hierarchy work; associativity and coherence are the costs of keeping it honest"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Post 10 set up the memory hierarchy: registers, SRAM cache, DRAM, disk — capacity traded for speed at every step. Caches are where that tradeoff carries every CPU's performance. The premise is one empirical fact about real programs: **locality**.

## Why Caches Work at All

**Temporal locality** — a location just touched is likely to be touched again soon (loop variables, hot code). **Spatial locality** — nearby locations are likely next (arrays, sequential fetch). Caches keep recently used data close, and fetch whole *lines* (often 64 bytes) on a miss, betting neighbors arrive soon.

Lookup splits an address into **offset** (byte in the line), **index** (which set), and **tag** (is the line present actually the one we want?).

## Where a Line Can Live

**Direct-mapped** — one possible slot per address. Fast check; conflict misses when two hot addresses share an index and thrash each other.

**Fully associative** — any line, any slot. No conflict misses; every access compares every tag. Does not scale.

**Set-associative** — the practical middle: index picks a small set (say 8 ways); tags checked only there. Most of the flexibility, far less hardware than a full scan. Almost every real cache sits here.

## Multicore: Coherence as the New Constraint

One core, one private cache: fine. Many cores, each with a cache: core A writes a line core B still holds — without a protocol, B reads stale forever. MESI (Modified, Exclusive, Shared, Invalid) is the classic answer: tag every line with a state, and communicate transitions (bus snoop or directory) so a write invalidates or updates copies elsewhere.

Coherence is not free, and its cost grows with core count — one reason "just add cores" (Post 17) has diminishing returns of its own, separate from ILP limits.

**Door out:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — early statement of the cache idea as a fast slave store beside slower main memory.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->
