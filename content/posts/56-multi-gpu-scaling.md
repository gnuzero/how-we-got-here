---
title: "Multi-GPU Scaling"
date: 2026-01-01
draft: true
phase: "9 — GPUs & Parallel Compute"
series_index: 56
tags: []
summary: "NVLink, GPUDirect, and where custom fabrics fit"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean animation — direct tie-in to BridgeStack GPU memory fabric"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

A single GPU, however capable, has finite compute throughput and finite HBM capacity (Post 54). Training or serving today's largest models routinely requires coordinating work across many GPUs — sometimes within a single server, sometimes across an entire cluster of servers — and how those GPUs communicate with each other turns out to be at least as important to real achieved performance as any single GPU's own specifications.

## Why Naive Scaling Doesn't Just Work

Splitting work across multiple GPUs isn't free — Post 46's data-parallel and model-parallel training discussion covered *why* this splitting is often necessary, but making it *efficient* depends heavily on how fast those GPUs can exchange data with each other. If inter-GPU communication is slow relative to each GPU's own compute throughput, GPUs spend a meaningful fraction of their time waiting on data from their peers rather than doing useful computation — directly analogous to a CPU core stalling on a slow memory access (Post 35's memory wall, again), just applied at the scale of GPU-to-GPU communication instead of CPU-to-DRAM.

## NVLink and NVSwitch: The Direct Path

Post 37 introduced NVLink as a direct, high-bandwidth GPU-to-GPU interconnect, deliberately bypassing the CPU-mediated PCIe path that would otherwise be the default. Within a single server, NVSwitch extends this into a genuine all-to-all topology — every GPU can reach every other GPU in that server directly, at NVLink's substantially higher bandwidth than routing the equivalent transfer through PCIe and the CPU would allow. For workloads requiring frequent, large data exchange between GPUs — exactly what large-scale training's gradient synchronization steps require — this direct, high-bandwidth path is very often the actual determinant of real achieved training throughput, not any single GPU's peak theoretical compute number in isolation.

## Scaling Beyond a Single Server

NVLink and NVSwitch handle GPU-to-GPU communication within one server extremely well, but real large-scale training frequently spans many servers. That's where the datacenter networking and RDMA concepts from Post 42 become directly relevant again: GPUDirect RDMA lets a network adapter read from or write directly into GPU memory across server boundaries, without unnecessary intermediate copies through host system memory — extending the same "minimize hops, maximize direct bandwidth" philosophy that motivated NVLink within a single server out to the scale of an entire multi-server cluster.

## Where This Leads

This entire discussion — direct GPU-to-GPU paths, minimizing unnecessary hops, treating interconnect bandwidth as a first-class design constraint rather than an afterthought — is the same underlying philosophy behind the custom GPU memory fabric project this series has referenced periodically throughout: an open, PCIe-based approach to achieving what NVLink achieves within NVIDIA's proprietary ecosystem, making remote GPU memory appear directly addressable rather than requiring every cross-GPU transfer to route through a general-purpose, CPU-mediated software path. Phase 10 picks this thread up at true datacenter scale — not just how a handful of GPUs within one server talk to each other, but how thousands of GPUs across an entire training cluster are wired together and kept fed with data efficiently enough to approach their aggregate theoretical compute potential.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
