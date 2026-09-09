---
title: "CUDA Cores, Warps, and Occupancy"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 53
tags: []
summary: "SIMT maps onto SMs and warps — lockstep wins until divergence, occupancy hides memory stalls"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

Post 52 covered *why* GPUs bet on massively parallel SIMT. This post is the concrete map: Streaming Multiprocessors, warps, and occupancy — how fully that parallel hardware is actually used.

## The Streaming Multiprocessor

A GPU is many Streaming Multiprocessors (SMs) — each a largely self-contained parallel unit with many simple CUDA cores (ALU-style lanes, deliberately far less complex than a Phase 3 CPU core: no out-of-order execution, no sophisticated branch prediction of the Post 14 kind), a warp scheduler, and a register file shared by resident threads. Dozens of SMs running largely independently are the source of a GPU's aggregate parallelism versus a CPU's handful of complex cores.

## Warps: Lockstep as the Unit

Threads on an SM are grouped into warps — on NVIDIA hardware, always 32 threads (AMD wavefronts historically used 64). A warp is the granularity at which Post 52's SIMT is enforced: all 32 execute the *same* instruction on the *same* cycle, each on its own data. That is the hardware form of "one shared control unit, many lanes."

## Branch Divergence: Where Lockstep Costs

When threads *inside one warp* take different branches, the hardware executes both paths sequentially and masks the inactive half. The warp takes as long as both paths even though each thread needs only one — a direct tax of the same lockstep that makes the non-divergent case cheap. Keeping threads in a warp on the same path is therefore a real optimization, not a style preference.

## Occupancy: Hiding Latency With Ready Work

An SM has finite registers and shared memory; every resident warp consumes a share. Occupancy is how many warps are resident and eligible relative to what the hardware could support. Higher occupancy helps hide memory latency (Post 35 again): while one warp stalls on a slow access, the scheduler switches to a ready warp and keeps the lanes busy.

It is not "maximize and stop." A kernel that uses more registers or shared memory per thread may run fewer warps and still finish faster if those resources cut redundant work or memory traffic. Occupancy versus per-thread resources is a real tradeoff — one that shows up when kernels meet real silicon, not only when reasoned about in the abstract.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
