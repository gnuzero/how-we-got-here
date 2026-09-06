---
title: "Datapath Design"
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 12
tags: []
summary: "A single-cycle datapath makes the pieces visible — and shows why its clock is sized to the worst case"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

An ISA (Post 11) is a contract. A datapath is the hardware that carries it out. The simplest version — a *single-cycle* datapath — finishes one whole instruction per clock tick: fetch, decode, execute, write-back, done. Real CPUs are not built this way today. It is still the clearest way to see how Phase 2's pieces connect.

## One Instruction, One Clock

The pieces: a **program counter** (Post 9's flip-flops) holding the next instruction address; **instruction memory** indexed by that PC; a **register file** for operands and results; an **ALU** (Post 8) for the operation; **data memory** for loads and stores; and a **control unit** that reads the opcode and drives every mux and enable.

Take ADD. The PC indexes instruction memory. The control unit sees a register-register ADD. Two source registers feed the ALU; the ALU result writes the destination; the PC advances. Fetch, decode, register read, ALU, write-back, PC update — all inside *one* clock period.

## The Constraint That Forces Pipelining

That clock period must be long enough for the *slowest* instruction's full path — even instructions that never touch data memory. Every ADD therefore runs at the speed of the worst case. Throughput sits on the floor.

Pipelining answers that constraint: cut the long path into stages, clock each stage for *its* worst case, and let different instructions occupy different stages at once. Same ISA. Far more work finished per second. That is the next post — and the central idea of classical microarchitecture.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
