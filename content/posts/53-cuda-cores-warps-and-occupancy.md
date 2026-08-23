---
title: "CUDA Cores, Warps, and Occupancy"
date: 2026-01-01
draft: true
phase: "9 — GPUs & Parallel Compute"
series_index: 53
tags: []
summary: "Programming model meets hardware"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

Post 52 covered *why* GPUs use a massively parallel SIMT execution model. This post covers the concrete hardware that model maps onto — the Streaming Multiprocessor, warps, and the occupancy metric that determines how efficiently that parallel hardware is used by a given program.

## The Streaming Multiprocessor

A GPU is organized into many Streaming Multiprocessors (SMs) — each a largely self-contained parallel processing unit containing many individual CUDA cores (simple ALU-style execution lanes, deliberately far less complex than a single CPU core from Phase 3 — no out-of-order execution, no branch prediction of the sophisticated kind Post 14 covered), a warp scheduler, and a register file shared across the threads currently resident on that SM. A modern high-end GPU contains many dozens of these SMs, each running largely independently, which is the source of a GPU's enormous aggregate parallelism relative to a CPU's handful of complex cores.

## Warps: The Actual Unit of Lockstep Execution

Threads on an SM are grouped into warps — commonly groups of 32 threads — and a warp is the granularity at which the SIMT model from Post 52 is enforced: all 32 threads in a warp execute the *same* instruction on the *same* clock cycle, each operating on its own data. This is a direct hardware implementation of the "one shared control unit driving many parallel lanes" efficiency argument from the previous post.

## Branch Divergence: Where SIMT's Efficiency Breaks Down

Here is the sharp edge of this model: what happens when different threads *within the same warp* need to take different branches of an if/else — some threads' data satisfies the condition, others' doesn't? The hardware handles this, but not for free: it executes *both* branch paths sequentially, with threads that don't belong to the currently executing path masked off (temporarily disabled, contributing no useful work) for that portion. A warp with divergent branches therefore takes as long as executing both paths in sequence, even though only one path's result is needed per individual thread — a real efficiency cost, and a direct consequence of the same lockstep execution that makes the non-divergent case so efficient. Writing GPU code that minimizes this kind of divergence — keeping threads within a warp on the same execution path as much as possible — is an important practical optimization.

## Occupancy: How Fully the Hardware Is Actually Used

An SM has finite resources — a limited register file, limited shared memory — and every warp resident on that SM consumes some share of those resources for as long as it is active. Occupancy measures how many warps are actually resident and eligible to execute on an SM at once, relative to the theoretical maximum the hardware could support. Higher occupancy generally helps hide memory latency (connecting back to the memory wall discussion in Post 35): while one warp is stalled waiting on a slow memory access, the scheduler can switch to a different, ready warp instead, keeping the SM's execution units busy rather than idle during that stall.

But occupancy isn't simply "maximize this number and you're done" — a kernel using more registers or more shared memory per thread might achieve lower occupancy but still run faster overall, if those extra per-thread resources meaningfully reduce redundant computation or memory traffic elsewhere. Tuning occupancy against per-thread resource usage is a real optimization tradeoff in GPU programming, not a maximize-and-forget metric — a nuance that becomes relevant once actual kernels are written and profiled against real hardware, rather than reasoned about only in the abstract.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
