---
title: "Why GPUs Exist"
date: 2026-01-01
draft: true
phase: "9 — GPUs & Parallel Compute"
series_index: 52
tags: []
summary: "SIMD/SIMT and the graphics pipeline origin"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

Every CPU covered in Phase 3 rests on a core assumption: instructions are independent and unpredictable enough that the machinery must be general-purpose — branch prediction, out-of-order execution, deep caches, all in service of running *arbitrary* sequential code as fast as possible. GPUs start from a different assumption, rooted in their original workload: graphics rendering, where the *same* operation must be applied independently to an enormous number of data points at once.

## The Graphics Pipeline's Natural Parallelism

Rendering a 3D scene means transforming millions of vertices and shading millions of pixels — and the same mathematical operation (a vertex transform, a lighting calculation) is applied independently to each one. There is no meaningful data dependency between how pixel (100, 200) is shaded and how pixel (100, 201) is shaded — given enough parallel hardware, they can all be computed at once.

That is a different shape of problem than what CPU microarchitecture (Phase 3) was built to handle. A CPU's out-of-order execution and branch prediction exist to extract parallelism from code that *doesn't* have this obvious, embarrassingly parallel structure — general sequential programs with unpredictable branches and real data dependencies between nearby instructions. Graphics rendering does not need that machinery for extracting hidden parallelism, because the parallelism is not hidden — it is explicit and massive from the start.

## SIMD and SIMT: One Instruction, Many Data

SIMD (Single Instruction, Multiple Data) is the general concept: one instruction applied simultaneously across many data elements, rather than one instruction operating on one piece of data at a time. GPUs implement a closely related model called SIMT (Single Instruction, Multiple Thread) — many parallel "threads," each nominally executing the same instruction stream, but each operating on its own distinct data (its own pixel, its own vertex), with hardware executing groups of these threads in lockstep across many simple parallel execution lanes.

The architectural payoff is direct: since every lane in a group is executing the *same* instruction at the same moment, you don't need separate instruction-fetch, decode, and control logic duplicated per lane the way a CPU needs full pipeline machinery per core — one shared control unit can drive many parallel execution lanes at once. That is an enormous area and power efficiency win specifically *for* this class of embarrassingly parallel, same-operation-many-data workload — and correspondingly a poor fit for general sequential code with unpredictable branches, which is exactly why CPUs and GPUs aren't interchangeable, and why real systems typically have both.

## From Graphics to General-Purpose Compute

The realization that reshaped the industry: this same SIMT execution model — many simple parallel lanes, same instruction, different data — is an excellent fit for a much broader class of problems than graphics alone, as long as the underlying math has that same embarrassingly parallel structure. Neural network training and inference, as it turns out, is built almost entirely from this kind of massively parallel, regular matrix and vector math — which is why GPUs, originally built for rendering triangles, became the dominant hardware for AI compute, and why the rest of this phase is about programming and optimizing that same parallel architecture, not graphics rendering specifically.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
