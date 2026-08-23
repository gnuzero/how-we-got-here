---
title: "Sequential Logic"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 9
tags: []
summary: "Latches, flip-flops, clocking, setup/hold time"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

Everything in the previous post was combinational — pure functions of their current inputs, with zero memory. A full adder computing 2+2 right now has no idea what it computed a moment ago, and doesn't need to. But a computer needs *state* — register values, program counters, memory contents — that persists across clock cycles. That requires a genuinely different kind of circuit: one with feedback.

## The SR Latch: Memory From Feedback

The simplest possible memory element is built from two NOR (or NAND) gates cross-coupled — each gate's output feeds the other gate's input. This creates two stable states, and the circuit will sit in whichever one it was last set to, indefinitely, as long as power is applied. That's the essence of memory: not storing a value in some abstract sense, but a physical circuit that's bistable and stays wherever you last pushed it.

An ungated SR latch is always sensitive to its Set/Reset inputs, and it has a forbidden input combination. For synchronous design the more important intermediate step is a gated (level-sensitive) latch: while its enable is high the latch is *transparent* — the output tracks the data input — and only when enable goes low does it hold. That transparency window is fine for some uses but awkward when many state elements must update in a coordinated way.

## The D Flip-Flop: Solving Transparency With Edges

A D (Data) flip-flop fixes this using two latches in a master-slave configuration, controlled by a clock signal. The critical property: the output only changes at a clock *edge* (say, the rising edge), not continuously while the clock is high. Between edges, the flip-flop is closed off from its input entirely — it holds its value regardless of what the D input does.

This edge-triggered behavior is what makes synchronous digital design tractable at all. Every flip-flop in a chip updates at the same clock edge, so you can reason about the whole system one discrete step at a time, rather than as a continuous, asynchronous mess of signals racing each other.

## Setup and Hold Time: Where Physics Intrudes

Edge-triggering isn't instantaneous or free of constraints. A flip-flop needs its D input to be stable for some minimum window *before* the clock edge (setup time) and to remain stable for some minimum window *after* the edge (hold time). Violate either one and the flip-flop can enter metastability — an undefined, unstable state that can take an unpredictable amount of time to resolve to a valid 0 or 1, and might even resolve to different values on different downstream gates reading it.

This isn't a theoretical concern. Setup/hold constraints are exactly why maximum clock frequency has a hard ceiling for any given circuit — the clock period has to be long enough for signals to propagate through combinational logic *and* satisfy the next flip-flop's setup time, with margin. Post 36 (The Clock Speed Wall) picks this exact constraint back up when it explains why simply cranking clock frequency stopped being viable.

## What This Unlocks

With edge-triggered flip-flops in hand, you can build registers (arrays of flip-flops holding a multi-bit value), counters, state machines, and — critically for Phase 3 — the program counter and pipeline registers that make a CPU a *sequential* machine instead of a fixed combinational function. The next post takes this same bistable-storage idea and specializes it for one purpose: holding large amounts of data efficiently, which is where SRAM and DRAM diverge.

{{< lab type="breadboard" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
