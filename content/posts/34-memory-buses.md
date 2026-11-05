---
title: "Memory Buses"
weight: 37
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 36
tags: []
summary: "DDR bought bandwidth; latency barely moved — banks and channels hide the wait"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (Posts 32–33) is the path to expansion devices. The memory bus is the path that actually feeds the CPU — DRAM from Post 10 — and its evolution is a running negotiation among bandwidth, latency, and power. The generation names are not the story. The split between those three is.

## Both Edges, Not a Faster Clock

DDR — Double Data Rate — transfers on the rising *and* falling edge. Roughly twice the throughput of a single-data-rate design at the same clock, without doubling frequency (and the signal-integrity problems that come with it). Bandwidth without paying the clock wall first.

## Bandwidth Climbed; First-Bit Latency Did Not

Each DDR generation raised peak bandwidth, mostly by faster I/O. Prefetch and, in DDR5, a split into two independent 32-bit subchannels buy more parallelism on the module. What the headline numbers hide: raw access *latency* — request to first bit — moved far more slowly than bandwidth. DRAM got much better at a stream once it starts, and only a little better at the wait before it does. That is the setup for Post 35. Different metric, different physics (charge sensing, capacitor cells).

## Parallelism to Hide a Slow Access

A *channel* is an independent controller path — concurrent requests need not queue behind each other. Within a channel, *ranks* and *banks* let one bank finish (or refresh — Post 10) while another takes a new request. Overlap enough independent accesses and *aggregate* throughput stays high even though no single access got faster. That is why the organization exists: not a catalog of DIMM features, a way to hide the latency the next post names as a wall.

A DIMM is the physical package — chips on a board with a standard edge connector — so capacity is "how many slots, what size," not a redesign of the bus.

The next two posts are what happens when this negotiation falls short: the memory wall, and its cousin on the compute side, the clock-speed wall.

