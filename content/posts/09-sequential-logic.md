---
title: "Sequential Logic"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 11
tags: []
summary: "Feedback makes bistable memory; edge-triggered flip-flops make synchronous design tractable — until setup/hold caps the clock"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

Combinational logic (Post 8) is a pure function of current inputs — no memory of the past. A computer needs *state*: registers, a program counter, memory contents that persist across cycles. That requires feedback.

## Memory From Feedback

Cross-couple two NOR (or NAND) gates — each output feeds the other input — and you get two stable states. The circuit sits wherever you last pushed it, as long as power is on. That is memory in the physical sense: bistability, not an abstract "store."

An ungated SR latch is always live on its inputs and has a forbidden combination. Synchronous design wants a gated (level-sensitive) latch: while enable is high it is *transparent* (output tracks data); when enable falls it holds. Transparency is awkward when many elements must update together.

**Try this now.** The lab below is still a live gate — toggle the inputs and watch the output change *immediately*. That instant response is combinational. This post is what happens when you wire gates back into themselves so the output can *hold* after the input leaves.

{{< lab type="breadboard" height="700" >}}

## The D Flip-Flop: Edges, Not Levels

A D flip-flop stacks two latches master–slave under a clock. The output changes only at a clock *edge*, not for the whole high (or low) phase. Between edges the flop ignores D and holds. Edge-triggering is what makes synchronous design tractable: every flop updates on the same edge, so you reason one discrete step at a time instead of racing continuous signals.

## Setup, Hold, and the Clock Ceiling

The D input must be stable for a minimum window *before* the edge (setup) and *after* it (hold). Violate either and the flop can go metastable — an undefined state that resolves late or inconsistently downstream. That is not textbook pedantry: it is why maximum clock frequency has a hard ceiling. The period must cover combinational propagation *plus* the next flop's setup, with margin. Post 36 (The Clock Speed Wall) returns to this exact constraint when simply raising frequency stopped working.

## What This Unlocks

Edge-triggered flops become registers, counters, state machines — and, in Phase 3, the program counter and pipeline registers that make a CPU a *sequential* machine. Next: specialize bistable storage for density — where SRAM and DRAM diverge.

