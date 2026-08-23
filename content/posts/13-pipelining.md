---
title: "Pipelining"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 13
tags: []
summary: "Hazards, stalls, forwarding"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

The single-cycle datapath from the last post wastes enormous potential throughput — every instruction, no matter how simple, takes as long as the slowest possible instruction, because the whole datapath is one big combinational block clocked once per instruction. Pipelining fixes this by splitting execution into stages and letting multiple instructions occupy different stages *simultaneously*.

## The Classic 5-Stage Pipeline

A standard RISC pipeline: **IF** (Instruction Fetch), **ID** (Instruction Decode / register read), **EX** (Execute — the ALU operation), **MEM** (memory access, for loads/stores), **WB** (Write Back to the register file). Each stage is separated from the next by a pipeline register (Post 9's flip-flops again) that latches intermediate results at every clock edge.

The throughput win: while instruction N is in EX, instruction N+1 can be in ID, and instruction N+2 in IF. Five instructions in flight at once, one clock cycle apart. In steady state, a new instruction *completes* every cycle, even though each individual instruction still takes five cycles start to finish — the same latency-versus-throughput distinction that shows up constantly in computer architecture.

## Hazards: Where the Clean Picture Breaks

This only works cleanly if instructions are truly independent. They usually are not.

**Data hazards** arise when an instruction needs a value that a *previous*, still-in-flight instruction has not finished computing. If instruction 1 computes a value in EX and instruction 2 needs that value as an input to *its own* EX stage one cycle later, a naive pipeline would read a stale register value. **Forwarding** (or "bypassing") solves the common case: route the ALU result directly from the EX/MEM pipeline register back into the EX stage's input mux, skipping the register file, so the dependent instruction gets the correct value in time — no stall needed. Forwarding cannot fix every case. A load followed immediately by an instruction that needs the loaded value creates a load-use hazard that forwarding alone cannot close in time, so the pipeline must **stall** (insert a bubble — one or more cycles where that instruction waits).

**Control hazards** come from branches. The pipeline does not know whether a branch is taken, or where it goes, until relatively late in its own stages — but by then several *following* instructions have already been fetched on the assumption that no branch occurred. If the branch is taken, those speculatively fetched instructions must be discarded (a pipeline "flush"), wasting the cycles spent fetching and partially decoding them.

## Why This Matters Downstream

Branch mispredictions are expensive precisely because of that flush cost — which is why branch prediction (the next post) exists: guess the branch outcome accurately enough, early enough, that flushes become rare rather than routine. The load-use hazard's stall cost is a direct motivator for out-of-order execution (Post 16): instead of stalling the *whole* pipeline for one instruction, let independent instructions behind it execute anyway, and stall only the instruction that needs the not-yet-ready value.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
