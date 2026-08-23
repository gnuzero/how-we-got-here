---
title: "Caches"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 15
tags: []
summary: "Locality, associativity, coherence basics"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Post 10 set up the memory hierarchy: registers, SRAM cache, DRAM main memory, disk — each level trading capacity for speed. Caches are where that tradeoff becomes an active, load-bearing part of every CPU's performance. Their premise rests on one empirical observation about how real programs behave: locality.

## Two Kinds of Locality

**Temporal locality:** if a program accesses a memory location, it is likely to access that *same* location again soon (loop variables, frequently called function code). **Spatial locality:** if a program accesses a memory location, it is likely to access *nearby* locations soon as well (array traversal, sequential instruction fetch). Caches exploit both — temporal locality by keeping recently used data around, spatial locality by fetching entire cache *lines* (typically 64 bytes) at once rather than single words, on the bet that neighboring bytes will be needed shortly.

## Address Breakdown: Tag, Index, Offset

A memory address is split into three fields for cache lookup. The **offset** bits select a specific byte within a cache line. The **index** bits select which cache "set" the address maps to. The remaining high-order bits are the **tag**, stored alongside the cached data — used to verify that the line present at that index actually corresponds to the address being looked up, rather than a different address that maps to the same index.

## Direct-Mapped, Set-Associative, Fully-Associative

A **direct-mapped** cache gives every address exactly one possible location, determined purely by its index bits. Simple and fast to check, but prone to conflict misses: two frequently used addresses that share the same index constantly evict each other, even if the rest of the cache sits empty.

A **fully-associative** cache allows any address to live in any line — no index-based restriction — which eliminates conflict misses entirely, but requires checking every line's tag on every access. That is expensive and does not scale to large caches.

**Set-associative** is the practical middle ground almost every real cache uses: the index selects a small *set* of possible locations (for example, 8-way associative means 8 lines per set), and the tag is checked against only those candidates. This captures most of fully-associative flexibility at far lower hardware cost than scanning the entire cache on every access.

## Coherence: The Multicore Complication

Once there is more than one core, each potentially with its own private cache, a new problem appears: what happens when core A modifies a value that core B also has cached? Without a coherence protocol, core B could keep reading a stale value indefinitely. MESI (Modified, Exclusive, Shared, Invalid) is the classic answer — every cache line is tagged with one of these four states, and cores communicate state transitions (typically by snooping a shared bus, or via a directory in larger systems) so that a write by one core correctly invalidates or updates that same line wherever else it is cached.

Coherence is one of the hard problems in multicore design. It is not free, and its cost scales with core count — a real reason "just add more cores" (Post 17's subject) has diminishing returns of its own, separate from the ILP limits that post focuses on.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
