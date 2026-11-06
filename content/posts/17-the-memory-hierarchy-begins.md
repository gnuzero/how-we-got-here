---
title: "The Memory Hierarchy Begins"
weight: 17
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "Flip-flops are too expensive per bit — SRAM buys speed, DRAM buys density, and the hierarchy is the tradeoff repeated"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

A D flip-flop (Post 9) is a fine memory element — and expensive per bit: on the order of twenty transistors once clocking, reset, and scan land. A few registers are fine. Gigabytes of main memory that way are not. Two cell designs split the tradeoff: SRAM for speed close to the CPU, DRAM for density farther out.

## SRAM: Fast, Stable, Area-Heavy

Static RAM uses the same bistable feedback idea as a latch, packed as a 6-transistor (6T) cell: two cross-coupled inverters hold the bit; two access transistors read and write. With power on, it holds indefinitely — no refresh. Six transistors per bit burn area, so SRAM shows up as *cache* (Phase 3): small enough that the cost is acceptable, fast enough that no refresh and non-destructive reads matter.

## DRAM: Dense, Cheap, High-Maintenance

Dynamic RAM stores the bit as charge on a capacitor, gated by one transistor (1T1C). One transistor instead of six is the density win — and why main memory is DRAM. The cost is in the name: capacitors leak. Commodity parts require every cell refreshed inside a ~64 ms window at normal temperature, or the value fades into ambiguity. Refresh burns bandwidth and complicates the memory controller; it is the price of density. Reads are also destructive — sensing the tiny charge disturbs it — so every read is followed by a rewrite. SRAM has neither problem.

**Door out:** Robert H. Dennard's one-transistor DRAM cell (U.S. Patent 3,387,286, 1968) — the 1T1C idea that made dense main memory practical.

## The Hierarchy This Sets Up

Registers (flops) at the top: fastest, smallest, most expensive per bit. SRAM cache next. DRAM main memory below. Disk/SSD below that. The pyramid is not decoration — it is transistor-count-vs-speed repeated at every level. Phase 3's caches build on this; Phase 5's Memory Wall is what happens when the CPU–DRAM gap, set by exactly this tradeoff, widens faster than caching can hide.

{{< lab type="breadboard" >}}

