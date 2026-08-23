---
title: "Out-of-Order Execution"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 16
tags: []
summary: "Reorder buffers, register renaming"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

Post 13 described the load-use hazard: an instruction needs a value a preceding load has not finished fetching, forcing a pipeline stall. In-order pipelines must stall the *entire* pipeline behind that one instruction, even if later instructions are independent and could execute immediately. Out-of-order execution is the answer: let independent instructions run whenever their operands are ready, regardless of original program order, and enforce ordering only where it matters.

## Register Renaming: Removing False Dependencies

A subtlety that trips people up: not every apparent dependency between instructions is a *real* one. If instruction A writes register R1 and, several instructions later, instruction B *also* writes R1 (for an unrelated computation), no data flows between them — the ISA simply has a limited number of architectural registers, and the compiler reused R1's name. That is a "false" (or "name") dependency, as opposed to a "true" (data) dependency where a value genuinely flows from one instruction to another.

Register renaming solves this by giving the CPU many more *physical* registers than the ISA exposes, and dynamically mapping each instruction's architectural register references onto fresh physical registers as they are decoded. Instruction A's write to "R1" becomes a write to physical register P17; instruction B's later write to "R1" becomes a write to P42 — no false conflict, and both can proceed independently.

## Reservation Stations and Out-of-Order Issue

Once renamed, instructions wait in reservation stations — small buffers that hold an instruction until *all* of its actual operands are ready (already available, or being produced by another in-flight instruction, tracked via a tag). The moment an instruction's operands are ready, it can issue to an execution unit, regardless of its original program order relative to other waiting instructions. That is the out-of-order part: instructions execute in whatever order their dependencies allow, not the order they appeared in the program.

## The Reorder Buffer: Restoring Order Where It Matters

Executing out of order internally is fine, but the *architectural* effects — what gets committed to visible registers and memory, and in what order exceptions or interrupts appear — must look exactly as if everything executed in original program order. That is the reorder buffer's (ROB) job: it tracks every in-flight instruction in original program order, and only *retires* (commits results to architectural state) instructions in that same order, even though they may have finished executing at very different times internally.

This "execute whenever ready, commit strictly in order" pattern — often credited to Tomasulo's algorithm, originally developed for the IBM System/360 Model 91's floating-point unit in the 1960s — is the conceptual core of essentially every high-performance out-of-order CPU built since. It is also expensive: reservation stations, the reorder buffer, and register renaming all cost silicon area and power, which is part of why simply adding more out-of-order machinery has diminishing returns — the subject the next post picks up directly.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
