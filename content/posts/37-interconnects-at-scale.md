---
title: "Interconnects at Scale"
date: 2026-01-01
draft: true
phase: "5 — The Bus & System Architecture"
series_index: 37
tags: []
summary: "NVLink, CXL, and why GPUDirect RDMA exists"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation — ties to BridgeStack fabric work"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

Everything so far in this phase has covered connecting components *within* a single machine — CPU to memory, CPU to expansion devices. Once a workload needs multiple GPUs, or multiple machines, working together, a new question arises: how do those independent compute units talk to *each other* fast enough that the communication overhead does not erase the benefit of having more of them?

## The Baseline: Routing Through the CPU Over PCIe

The naive answer is to let everything talk over the same PCIe fabric covered in Posts 32–33: GPU A wants to send data to GPU B, so it writes to system memory over PCIe, the CPU (or a DMA engine) copies that data, and GPU B reads it back out over its own PCIe link. This works, but it routes every GPU-to-GPU transfer through extra hops — CPU-attached memory, sometimes literal CPU-mediated copies — adding real latency and consuming PCIe bandwidth that is also needed for other traffic.

## NVLink: Direct GPU-to-GPU Paths

NVIDIA's NVLink is a purpose-built interconnect specifically for direct, high-bandwidth GPU-to-GPU communication — bypassing the CPU and system memory entirely for transfers between GPUs that both support it. Multiple GPUs can be connected through an NVSwitch, giving an all-to-all topology where every GPU in a node can reach every other GPU directly, at bandwidth substantially higher than routing the same transfer through PCIe and the CPU would allow. For workloads that need frequent, large data exchange between GPUs — exactly what large-scale ML training requires (a subject the series returns to in Phase 7 and Phase 10) — this direct path is a first-order performance factor, not a minor optimization.

## CXL: Extending Coherent Memory Beyond One Die

CXL (Compute Express Link) tackles an adjacent but distinct problem: rather than optimizing device-to-device data transfer specifically, CXL extends cache-coherent memory access across multiple devices and, in more advanced deployments, across pooled memory that is not physically attached to any single CPU. This opens up architectures where memory capacity can be shared and dynamically allocated across multiple compute nodes rather than being rigidly bound to whichever CPU socket it happens to be plugged into — a different flexibility than either traditional DDR (Post 34) or PCIe alone provide.

## GPUDirect RDMA: Why It Exists

GPUDirect RDMA lets a network adapter read directly from, or write directly into, GPU memory — without that data needing to be staged through CPU/system memory as an intermediate hop first. Without it, a GPU-to-GPU transfer across a network would require: GPU memory → system memory (one copy) → network adapter → destination system memory → destination GPU memory (another copy) — multiple unnecessary copies, each adding both latency and consumed memory bandwidth that could otherwise be doing useful work. GPUDirect RDMA collapses that path down to essentially GPU memory → network → GPU memory directly, which is a substantial win for exactly the same reason RDMA in general (Post 42) is a win for networked storage and messaging: fewer copies, lower latency, and CPU cycles freed up for actual computation instead of babysitting a data transfer.

## The Direct Line to This Series's Own Hardware Work

This entire post is the conceptual foundation underneath the custom GPU memory fabric project this series periodically references: making remote GPU memory appear directly addressable, without routing every transfer through a general-purpose CPU-mediated path, is precisely the same problem NVLink and GPUDirect RDMA solve within NVIDIA's own ecosystem — just pursued here as an open, PCIe-based alternative rather than a proprietary NVIDIA-only interconnect. Understanding *why* NVLink and GPUDirect exist, and what specific inefficiency they remove, is the clearest way to understand what an open, custom-hardware alternative to them would need to accomplish.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
