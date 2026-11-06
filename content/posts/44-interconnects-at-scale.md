---
title: "Interconnects at Scale"
weight: 44
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 43
aliases:
  - /posts/37-interconnects-at-scale/
  - /posts/42-interconnects-at-scale/
  - /posts/43-interconnects-at-scale/
tags: []
summary: "Once compute is many chips, the path between them is the next wall — dedicated links, fewer copies"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

This phase so far connected parts *inside* one machine — CPU to memory, CPU to devices. Once a workload needs several GPUs, or several machines, the question changes: can those units talk to *each other* fast enough that the extra communication does not eat the extra compute?

## The Default Path Is the Tax

Without a peer path, GPU A writes through system memory and GPU B reads it back — extra hops, extra latency, PCIe bandwidth spent on copies. Even on PCIe alone, GPUDirect P2P can DMA GPU↔GPU without host staging (still at PCIe rates). The remaining constraint is bandwidth and topology: a shared expansion fabric was never designed as a many-GPU mesh.

## Dedicated Links, Coherent Memory, Fewer Copies

NVIDIA's NVLink is a purpose-built GPU-to-GPU interconnect — CPU and system memory out of the transfer. An NVSwitch can make every GPU in a node reachable from every other ([NVIDIA A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)), at bandwidth well above the PCIe-and-CPU path. For frequent, large exchanges — the pattern large-scale training returns to in Phases 7 and 10 — that direct path is first-order, not a tweak.

CXL (Compute Express Link; [CXL 2.0 white paper](https://computeexpresslink.org/wp-content/uploads/2023/12/CXL2.0_White_Paper_November-2020_FINAL.pdf) adds switching and memory pooling) answers a neighboring constraint: cache-coherent access beyond one die, and, further out, pooled memory that is not soldered to a single socket. Capacity can move among compute nodes instead of being frozen to whichever DIMM slot it landed in — a flexibility neither DDR ([Post 41]({{< relref "41-memory-buses" >}})) nor raw PCIe gives you.

GPUDirect RDMA lets a NIC read or write GPU memory directly ([NVIDIA GPUDirect overview](https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf)). Without it, a GPU-to-GPU transfer across a network is GPU → system memory → NIC → far system memory → far GPU — copies that cost latency and memory bandwidth. Collapse that to GPU → network → GPU, for the same reason RDMA ([Post 49]({{< relref "49-datacenter-networking-and-rdma" >}})) wins in storage and messaging: fewer copies, less CPU babysitting the move.

## The Same Problem, Open Hardware

This is the conceptual base under the custom GPU memory fabric the series keeps pointing at: make remote GPU memory addressable without a general-purpose CPU in the path. NVLink and GPUDirect solve that inside one vendor's stack. An open, PCIe-based alternative has to remove the same inefficiency — which is why Posts [39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})–[40]({{< relref "40-pcie-deep-dive" >}})'s TLP-level peer path, and this post's "why the dedicated link exists," are the same story.

