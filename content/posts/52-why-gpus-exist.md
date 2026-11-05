---
title: "Why GPUs Exist"
weight: 58
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 57
tags: []
summary: "Graphics gave an embarrassingly parallel workload — SIMT hardware followed, then general compute found the same shape"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

Every CPU in Phase 3 assumes instructions are independent and unpredictable enough that the machinery must be general-purpose — branch prediction, out-of-order execution, deep caches, all to run *arbitrary* sequential code fast. GPUs start from a different assumption, rooted in their original workload: the *same* operation applied independently to an enormous number of data points at once.

## Graphics Made Parallelism Explicit

Rendering a 3D scene means transforming millions of vertices and shading millions of pixels — the same math on each one, with no meaningful dependency between pixel (100, 200) and pixel (100, 201). Given enough lanes, they all run at once.

That is a different shape than Phase 3 was built for. A CPU extracts hidden parallelism from code that does *not* look like this. Graphics does not need that machinery: the parallelism is not hidden — it is explicit and massive from the start.

## SIMD / SIMT: One Instruction, Many Lanes

SIMD applies one instruction across many data elements at once. GPUs implement a closely related model — SIMT: many parallel threads, each on its own data (its pixel, its vertex), hardware executing groups of them in lockstep across simple lanes.

The payoff is direct: every lane in a group runs the *same* instruction at the same moment, so you do not duplicate fetch, decode, and control per lane the way a CPU duplicates pipeline machinery per core. One shared control unit drives many lanes — an area and power win *for* embarrassingly parallel, same-operation-many-data work, and a poor fit for unpredictable sequential code. That is why CPUs and GPUs are not interchangeable, and why real systems typically have both.

## From Graphics to General Compute

The industry-reshaping realization: the same SIMT shape fits a much broader class than triangles, whenever the math is massively parallel and regular. Neural-network training and inference are built almost entirely from that kind of matrix and vector work — which is why hardware born for rendering became the dominant AI compute substrate, and why the rest of this phase is about programming and feeding that parallel architecture, not about graphics specifically.

