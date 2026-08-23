---
title: "GPU Memory Hierarchy"
date: 2026-01-01
draft: true
phase: "9 — GPUs & Parallel Compute"
series_index: 54
tags: []
summary: "HBM and the real bandwidth bottleneck"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Post 35 established the memory wall: DRAM latency hasn't kept pace with compute speed, and the industry has largely responded by chasing *bandwidth* wherever latency itself proves stubborn. Nowhere is that bandwidth-chasing response more visible — or more architecturally consequential — than in GPU memory design, because a GPU's parallel compute throughput (Posts 52–53) creates an enormous appetite for memory bandwidth that conventional DDR (Post 34) simply can't satisfy.

## Why GPUs Need So Much More Bandwidth Than CPUs

A CPU, even a many-core one, is executing a relatively modest number of independent instruction streams at any moment, each with a working set that caching (Post 15) can often absorb reasonably well. A GPU, by contrast, may have thousands of threads across many SMs simultaneously wanting to read and write memory — and while on-chip caching helps here too, the sheer scale of parallel demand means aggregate memory bandwidth requirements are dramatically higher than what a CPU's memory subsystem needs to provide, even at similar overall chip power budgets.

## HBM: Stacking Memory Instead of Spreading It Out

High Bandwidth Memory (HBM) takes a different physical approach from conventional DIMM-based DDR (Post 34). Rather than DRAM chips sitting on a separate module connected to the processor via relatively long PCB traces, HBM stacks multiple DRAM dies vertically, connected to each other — and ultimately to the GPU compute die — through through-silicon vias (TSVs): vertical electrical connections drilled directly through the silicon dies themselves, rather than routed around their edges.

This stacked structure, combined with an extremely wide interface (far more parallel data lines than a conventional DIMM's interface width), delivers dramatically higher bandwidth than equivalent conventional DDR memory — at the direct cost of the advanced packaging complexity covered in Post 51. HBM dies and the GPU compute die typically sit together on a shared silicon interposer, the same fundamental packaging technology that post described for chiplet designs generally, applied here to stack memory dies extremely close to compute rather than to disaggregate separate functional chiplets.

## The GPU's Own Internal Memory Hierarchy

Beyond the HBM-vs-DDR distinction, a GPU has its own internal hierarchy, echoing the register–cache–main-memory pyramid from Post 10, with GPU-specific structures layered in. Each SM has a register file (Post 53) providing the fastest, most local storage, directly analogous to a CPU's register file. Shared memory — a fast, programmer-managed scratchpad local to each SM — sits below that, letting threads within the same thread block (a group of threads scheduled together on one SM) explicitly share data without round-tripping through slower, further-away memory. An L2 cache, shared across the entire GPU rather than private to individual SMs, sits below that. And HBM itself is the "main memory" tier — dramatically higher bandwidth than a CPU's equivalent DRAM tier, but still meaningfully higher latency than any of the on-chip tiers above it, in the same latency-vs-capacity tradeoff pattern Post 10 established for CPU memory hierarchies generally.

## Why This Sets Up Tensor Cores Directly

This entire memory architecture exists to feed an enormous compute appetite — and Post 27's earlier framing bears repeating in sharper form: raw compute throughput is useless if the memory system can't supply operands and absorb results fast enough to keep those compute units busy. The next post covers the specific compute structure — tensor cores — that HBM's bandwidth exists to feed, and it is worth carrying this memory-bandwidth framing into that discussion: a tensor core's peak throughput number only means something in the context of a memory system capable of sustaining it.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
