---
title: "The Memory Hierarchy Begins"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 10
tags: []
summary: "SRAM vs DRAM cell design"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

The D flip-flop from the last post is a perfectly good memory element — reliable, fast, and directly compatible with clocked logic. It's also large overhead per bit: a typical clocked CMOS D flip-flop costs on the order of twenty transistors (often more once reset/scan are included), continuously powered, just to hold a single 0 or 1. Build a few registers out of flip-flops and that's fine. Try to build gigabytes of main memory that way and it's not remotely practical. Two different memory technologies emerged to solve this at different points in the tradeoff space: SRAM and DRAM.

## SRAM: Fast, Stable, Expensive

Static RAM (SRAM) is built from cross-coupled inverters — essentially the same bistable feedback idea as the SR latch, packaged as a standard 6-transistor (6T) cell: two inverters cross-coupled to hold the bit, plus two access transistors to read/write it. As long as power is supplied, an SRAM cell holds its value indefinitely with no additional intervention — that's what "static" means here.

The cost is transistor count. 6 transistors per bit is a lot of silicon area, which directly limits how much SRAM you can fit on a die and how cheap it can be per bit. This is exactly why SRAM shows up as *cache* — small, fast, close to the CPU — rather than as main memory. Caches, covered in Phase 3, are built from SRAM precisely because their capacity is small enough that the area cost is acceptable, and their speed requirement is high enough that SRAM's directness (no refresh cycle, no destructive read) matters.

## DRAM: Dense, Cheap, High-Maintenance

Dynamic RAM (DRAM) makes a very different tradeoff: one transistor and one capacitor (1T1C) per bit. The capacitor holds charge representing the stored value; the transistor acts as an access gate connecting that capacitor to the bit line during read/write. One transistor instead of six is a massive area win — which is exactly why DRAM is what main memory is built from, capable of packing far more bits into the same silicon area at far lower cost per bit.

The tradeoff is right there in the name: *dynamic*. Capacitors leak charge over time, even with no circuit fault at all — it's just physics, charge naturally bleeding away through leakage paths. Left alone, a DRAM cell's stored value can degrade into ambiguity on the order of tens of milliseconds (commodity parts are specified so every cell is refreshed within a 64 ms window at normal temperature). That's why DRAM requires periodic *refresh* — reading each cell's value and rewriting it at full strength, on a scheduled cycle, continuously, for as long as the system is powered. This refresh overhead consumes real memory bandwidth and adds real complexity to the memory controller, but it's the price paid for DRAM's density advantage.

There's a second cost: reading a DRAM cell is *destructive* — sensing the tiny charge on the capacitor disturbs it, so every read has to be followed by a rewrite of that same value. SRAM has no such problem; reading it doesn't disturb the stored state at all.

## The Hierarchy This Sets Up

Registers (flip-flops) at the top: fastest, smallest, most expensive per bit. SRAM cache next: fast, small-ish, expensive. DRAM main memory below that: slower, large, cheap. Disk/SSD below that again: slowest, largest, cheapest. This pyramid shape isn't arbitrary — it's the direct consequence of the transistor-count-vs-speed tradeoffs covered in this post, repeated at every level. Phase 3's caching posts build directly on this foundation, and Phase 5's "Memory Wall" post explains what happens when the gap between CPU speed and DRAM speed — set up by exactly this density/speed tradeoff — widens faster than anyone can comfortably paper over with caching alone.

{{< lab type="breadboard" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
