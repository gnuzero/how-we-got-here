---
title: "Memory Buses"
date: 2026-01-01
draft: true
phase: "5 — The Bus & System Architecture"
series_index: 34
tags: []
summary: "DDR evolution — bandwidth vs latency"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (Posts 32–33) connects the CPU to expansion devices — GPUs, network cards, storage. The memory bus is a different, and in some ways even more performance-critical, connection: the path between the CPU and main memory (DRAM, covered back in Post 10), and its evolution through successive DDR generations is a direct, ongoing negotiation between bandwidth, latency, and power.

## What DDR Actually Stands For, and Why It Matters

DDR — Double Data Rate — transfers data on both the rising *and* falling edge of the clock signal, effectively doubling throughput relative to a hypothetical single-data-rate design running at the same clock frequency, without needing to double the actual clock speed itself. This is a clever way to get more bandwidth without pushing clock frequency (and the associated signal-integrity challenges) as hard as would otherwise be required.

## Generational Evolution: More Bandwidth, Similar Latency

Each DDR generation (DDR3, DDR4, DDR5) has delivered substantially higher peak bandwidth than its predecessor — driven by higher clock speeds, wider internal prefetch (fetching more bits internally per access and streaming them out over more clock cycles, rather than needing a full fresh access per small chunk of data), and, with DDR5 specifically, splitting each module into two independent channels for improved parallelism.

What is easy to miss if you only look at the bandwidth headline numbers: raw access *latency* — the time from issuing a request to the first bit of data becoming available — has improved far more slowly across these same generations than bandwidth has. This is exactly the setup for Post 35's Memory Wall discussion: DRAM has gotten dramatically better at sustained *throughput* (once a stream of data starts flowing, it flows fast) without a correspondingly dramatic improvement in the *latency* of the very first access in that stream — a fundamentally different metric with different physical bottlenecks (charge sensing, capacitor physics) behind it.

## Channels, Ranks, Banks: How Parallelism Is Structured

A memory *channel* is an independent path from the memory controller to a set of DRAM devices — multiple channels let independent requests proceed in parallel rather than queuing behind each other, directly increasing effective throughput for workloads issuing many concurrent memory requests. Within a channel, memory is organized into *ranks* (independent sets of DRAM chips that can be selected and accessed somewhat independently) and, within a rank, into *banks* (further subdivisions that allow one bank to be busy completing a previous access — including that mandatory refresh cycle from Post 10 — while another bank services a completely new request). This banked structure is what lets DRAM sustain reasonably high throughput despite each individual bank access having real, non-negligible latency — overlap enough independent bank accesses and the *aggregate* throughput can stay high even though no single access got individually faster.

## The DIMM as a Physical Package

A DIMM (Dual In-line Memory Module) packages multiple DRAM chips onto a single circuit board with a standardized pinout and edge connector, letting a system's memory capacity be configured and upgraded by swapping physical modules — a practical packaging convenience layered on top of everything above, and the reason "how much RAM does this system have" is usually answerable by counting populated DIMM slots and their individual capacities.

This entire evolution — more bandwidth, banked parallelism, wider prefetch — has been DRAM's ongoing attempt to keep pace with ever-faster CPUs. The next two posts examine what happens when that attempt falls short: the memory wall, and its close cousin, the clock speed wall.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
