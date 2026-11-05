---
title: "GPU Memory Hierarchy"
weight: 60
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 59
tags: []
summary: "Thousands of threads force bandwidth over DDR — HBM stacks memory beside compute"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Post 35 named the memory wall: DRAM latency lagged compute, so the industry chased *bandwidth* where latency stayed stubborn. Nowhere is that response more consequential than GPU memory — Posts 52–53's parallel throughput creates an appetite conventional DDR (Post 34) cannot feed.

## Why GPUs Starve on CPU-Style Memory

A CPU runs a modest number of instruction streams; caches (Post 15) often absorb the working set. A GPU may have thousands of threads across many SMs wanting memory at once. On-chip caching helps, but aggregate bandwidth demand is dramatically higher than a CPU memory subsystem at similar power — the constraint that forced a different physical answer.

## HBM: Stack Beside the Die

High Bandwidth Memory stacks DRAM dies vertically, connected through through-silicon vias (TSVs) rather than long PCB traces to a separate DIMM. Combined with a very wide interface, that delivers far more bandwidth than equivalent DDR — paid for in the advanced packaging of Post 51. HBM and the GPU compute die typically share a silicon interposer: the same packaging family used for chiplets, applied here to put memory *beside* compute instead of disaggregating functional dies.

## The Hierarchy Inside the GPU

Beyond HBM-vs-DDR, the GPU has its own pyramid, echoing Post 10's register–cache–main-memory shape with GPU-specific tiers. Each SM's register file is the fastest local store. Shared memory — a programmer-managed scratchpad on the SM — lets threads in a block share data without round-tripping farther away. An L2 cache spans the whole GPU. HBM is the "main memory" tier: much higher bandwidth than CPU DRAM, still higher latency than anything on-chip — the same latency-versus-capacity tradeoff, at GPU scale.

## Feeding What Comes Next

This architecture exists to keep an enormous compute appetite fed. Peak FLOPS mean nothing if operands cannot arrive and results cannot leave. The next post's tensor cores are the compute structure HBM's bandwidth is built to supply — carry the bandwidth framing forward: a tensor core's peak only means something against a memory system that can sustain it.

