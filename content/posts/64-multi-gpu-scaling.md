---
title: "Multi-GPU Scaling"
weight: 64
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 63
aliases:
  - /posts/56-multi-gpu-scaling/
  - /posts/62-multi-gpu-scaling/
  - /posts/63-multi-gpu-scaling/
tags: []
summary: "One GPU is finite — interconnect between GPUs becomes the next wall"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

A single GPU has finite compute and finite HBM (Post 54). Today's largest models need many GPUs — in one server, then across a cluster — and how those GPUs talk to each other often decides real throughput as much as any single GPU's peak specs.

## Splitting Work Is Not Free

Post 46 covered *why* data-parallel and model-parallel splits are often necessary. Efficiency depends on how fast GPUs exchange data. If communication is slow relative to each GPU's compute, peers stall waiting on each other — the memory wall (Post 35) again, applied to GPU-to-GPU links instead of CPU-to-DRAM.

## Direct Paths Inside One Server

Post 37 introduced NVLink as a high-bandwidth GPU-to-GPU interconnect that bypasses the CPU-mediated PCIe path. Within a server, NVSwitch turns that into all-to-all: every GPU reaches every other at NVLink bandwidth rather than through PCIe and the host. For workloads that exchange large gradients constantly, that direct path often determines achieved training throughput more than any isolated peak-FLOPS number.

## Beyond One Box

Large training spans many servers. Post 42's RDMA ideas return: GPUDirect RDMA lets a network adapter read or write GPU memory across servers without extra copies through host DRAM — the same "minimize hops, maximize direct bandwidth" bet, now at cluster scale.

## The Philosophy This Series Keeps Naming

Direct GPU-to-GPU paths, fewer unnecessary hops, interconnect as a first-class constraint — the same philosophy behind the custom GPU memory fabric this series has referenced: an open, PCIe-based approach to what proprietary GPU fabrics do inside one vendor's stack. Phase 10 picks the thread up at true datacenter scale — not a handful of GPUs in one box, but thousands across a training cluster, wired so aggregate theoretical compute is not lost to coordination.

