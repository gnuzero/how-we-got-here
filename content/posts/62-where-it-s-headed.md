---
title: "Where It's Headed"
date: 2026-01-01
draft: true
phase: "10 — Modern AI Hardware"
series_index: 62
tags: []
summary: "Chiplet AI accelerators, optical interconnect, in-memory compute"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

This series opened with gears and relays — mechanical and electromechanical computing, primitive by any modern measure, but built on the same fundamental logical shape (instructions, execution, state) that every subsequent technology in this series has continued to refine. It closes here, looking forward rather than backward: three concrete directions AI hardware is actively moving in as of this writing, each a logical extension of ideas already covered throughout this series.

## Chiplet-Based AI Accelerators

Post 51 covered chiplets as a response to monolithic-die yield problems, and Post 54 covered how HBM's advanced packaging enables extremely high memory bandwidth to compute dies. The natural extension, increasingly appearing in real shipping AI accelerator designs, is combining both ideas fully: disaggregated compute chiplets — potentially specialized differently from each other, some optimized for particular operation types, others for different ones — connected via extremely high-bandwidth, low-latency interposer or advanced-substrate interconnects, alongside stacked HBM, all within a single integrated package. This is the logical continuation of a pattern this series has traced repeatedly: disaggregate into smaller, more specialized, higher-yield pieces, then use increasingly sophisticated packaging to make that disaggregation cost as little real performance as possible relative to what a single, larger monolithic design would have offered.

## Silicon Photonics: Moving Data With Light Instead of Electricity

Short in-rack links are still often copper. Rack-to-rack and many leaf–spine AI fabrics already use optical fiber with pluggable transceivers. Electrical SerDes still face real limits on reach, power, and density. The push into silicon photonics and co-packaged optics (CPO) is about moving E/O conversion onto the switch/GPU package — cutting SerDes/DSP power and reach limits versus long electrical traces plus discrete pluggables — not about introducing light into the datacenter for the first time. That packaging shift is a promising direction for the massive, sustained GPU-to-GPU and rack-to-rack bandwidth Post 56 and Post 61 established as an increasingly critical bottleneck.

## Processing-in-Memory: Attacking the Memory Wall Directly

Post 35's memory wall, and its echo throughout this final phase (Post 54's HBM discussion, Post 58's weight-stationary systolic array dataflow specifically designed to minimize data movement), has been a persistent constraint on this series' hardware story. Processing-in-memory (PIM) takes a more radical approach than any single technique covered so far: instead of continuing to optimize how efficiently data moves *between* memory and a separate compute unit, perform at least some computation directly *within* the memory array itself, minimizing the data-movement cost by eliminating a meaningful fraction of it altogether rather than merely making that movement faster or more bandwidth-efficient. This is architecturally quite different from anything else covered in this series, and still early-stage as broadly deployed technology — but it represents a real attempt to attack the memory wall at its structural root, rather than continuing to build increasingly elaborate hierarchies and caching strategies around it.

## The Thread Connecting All of It

Every one of these three directions is, at its core, the same fundamental engineering pattern this series has returned to again and again, in different specific forms each time: a hard physical or economic constraint gets identified precisely, and the response is a structural or architectural change — not simply pushing the existing approach incrementally harder. Relays gave way to vacuum tubes when mechanical switching speed became the binding constraint. Vacuum tubes gave way to transistors when power and reliability became the binding constraint. Single-core scaling gave way to multicore when the clock-speed wall became binding. Monolithic dies are increasingly giving way to chiplets as yield economics become binding at the most advanced process nodes. And now, memory movement itself — not just compute throughput — is becoming the binding constraint for the largest AI workloads, which is exactly what is driving processing-in-memory, silicon photonics, and increasingly disaggregated, tightly packaged compute architectures.

From relays to attention: the specific technology has changed almost beyond recognition at every step along this series, transistor by transistor, layer by layer. The underlying engineering logic — identify the real binding constraint precisely, then change the structure rather than merely pushing harder against the same wall — has not changed at all, and there is no obvious reason to expect it will anytime soon.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
