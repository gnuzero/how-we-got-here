---
title: "Pipelining"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 15
tags: []
summary: "Overlap instructions for throughput — then hazards force forwarding, stalls, and everything that follows"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

The single-cycle datapath (Post 12) leaves throughput on the table: every instruction waits for the slowest possible path. Pipelining splits execution into stages and lets multiple instructions occupy different stages *at once*.

## Five Stages, Overlapped

A classic RISC pipeline: **IF** (fetch), **ID** (decode / register read), **EX** (ALU), **MEM** (load/store), **WB** (write back). Pipeline registers (Post 9 again) latch results between stages each clock.

While instruction N is in EX, N+1 can be in ID and N+2 in IF. In steady state a new instruction *completes* every cycle — even though each one still takes five cycles start to finish. Latency stays; throughput rises. That distinction shows up everywhere after this.

**Try this now.** Step the mini-CPU below once per instruction — that is the single-cycle habit Post 12 made visible. Pipelining’s claim is throughput: the same fetch / decode / execute pieces overlapping across instructions, not one whole instruction per tick. Feel the sequential Step, then read the hazard section knowing why real pipelines cannot stay that simple.

{{< lab type="mini-cpu" >}}

## Hazards: Where Independence Breaks

Instructions are rarely independent.

**Data hazards** — an instruction needs a value a previous, still-in-flight instruction has not finished writing. **Forwarding** (bypassing) routes the ALU result straight from a later pipeline register back into EX, skipping the register file, so the dependent instruction often needs no stall. Forwarding cannot close every gap: a load followed immediately by a use still needs a **stall** (a bubble) until the MEM stage finishes.

**Control hazards** — branches. The pipeline does not know taken/not-taken, or the target, until late — but following instructions have already been fetched. On a taken branch those must be flushed. Cycles spent on the wrong path are wasted.

## What Those Costs Force Next

Misprediction flushes are expensive — which is why branch prediction (Post 14) exists: guess early and accurately enough that flushes become rare. The load-use stall is why out-of-order execution (Post 16) exists: stall only the waiting instruction, not the whole pipeline, and let independent work behind it run.

