---
title: "Superscalar & Multicore"
weight: 24
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 23
aliases:
  - /posts/17-superscalar-multicore/
  - /posts/22-superscalar-multicore/
  - /posts/23-superscalar-multicore/
tags: []
summary: "ILP and power hit walls — so the industry went wide instead of faster per thread"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

Out-of-order issue, deeper pipelines, wider superscalar width — everything so far in this phase extracts more Instruction-Level Parallelism (ILP) from *one* instruction stream. By the mid-2000s that approach hit a ceiling hard enough to change strategy.

## Two Walls at Once

Real programs do not offer unlimited independent work. Branches, true data dependencies, and memory latency cap how many instructions can run in parallel from a single stream. Bigger ROBs, more reservation stations, wider issue: shrinking returns for growing area and power. That is an architectural wall.

At the same time, dynamic power scales roughly with capacitance, frequency, and voltage squared (P ≈ CV²f). Pushing clocks higher to compensate for ILP's dwindling gains ran into heat — the clock-speed wall Post 36 covers in detail. Two independent ceilings, mid-2000s, neither with a clean solo fix.

## Wide Instead of Fast

The pivot: stop making one core do more per cycle; put multiple, somewhat simpler cores on the same die, each with its own stream. Chip throughput can keep climbing while per-core complexity and clocks level off — *if* there is parallel work to hand those cores.

"Faster" changed meaning. A single-threaded program does not automatically win on eight cores versus four; it still runs on one core at roughly the same clock. Multicore gain appears only for workloads written (or compiled) for multiple threads. The ILP era mostly gave single-thread speedups "for free" each generation; this era demands parallel-aware software.

## Where the Pivot Points

The same force — many simpler units instead of one complex one — is the philosophy behind GPUs (Phase 9) taken further. It is also why coordinating parallel work correctly becomes a first-class problem in real-time systems (Phase 4) and distributed systems (Phase 7): waiting for the next chip to make one thread faster is no longer the main growth path.

**Door out:** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — an early, explicit argument for putting multiple cores on one die as ILP returns flatten.

