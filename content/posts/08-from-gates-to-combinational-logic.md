---
title: "From Gates to Combinational Logic"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 8
tags: []
summary: "Adders, muxes, and ALUs"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

<!-- Write here -->
A single logic gate does almost nothing useful on its own. The interesting behavior starts when you compose them into structures that compute something — and the canonical starting example, the one every digital design course opens with, is the adder.

## The Half Adder

Adding two single bits, A and B, produces a sum bit and a carry-out bit. The sum is A XOR B (1 if exactly one input is 1); the carry is A AND B (1 only if both inputs are 1). Two gates, and you've built a circuit that adds — but it's missing something: no way to accept a carry-*in* from a previous, less-significant bit position. That's why it's called a "half" adder.

## The Full Adder

A full adder takes three inputs — A, B, and Carry-in — and produces Sum and Carry-out. It can be built from two half adders plus an OR gate to combine the two possible carry-out sources, or directly as Sum = A XOR B XOR Cin, and Carry-out = (A AND B) OR (Cin AND (A XOR B)). Either way, the key property is that it's *composable*: chain the carry-out of one full adder into the carry-in of the next, and you can add numbers of arbitrary width, one bit position at a time.

## Ripple-Carry: Simple, and Slow for a Reason Worth Understanding

Chain four full adders this way and you get a 4-bit ripple-carry adder. It works, and it's conceptually the simplest possible multi-bit adder — but notice the dependency: bit 3's carry-out can't be correct until bit 2's carry-out has settled, which depends on bit 1's, which depends on bit 0's. The carry has to physically "ripple" through every stage before the final result is valid. For a 4-bit adder that's a small delay; for a 64-bit adder, that ripple delay becomes a real bottleneck on how fast the whole ALU can run — which is exactly the kind of constraint that later drives more elaborate carry-lookahead adder designs in real CPUs, trading gate count for reduced worst-case delay.

## From Adders to a Simple ALU

An ALU (Arithmetic Logic Unit) generalizes this idea: instead of *only* adding, add a multiplexer in front of the adder logic that selects between operations — add, subtract (implemented as add-with-inverted-operand-plus-carry-in, a neat trick that reuses the same adder hardware), AND, OR — based on a few control bits. The output is whichever operation the control signal selected, chosen from a menu of pre-wired combinational paths.

This is a genuinely small step conceptually but a large one practically: it's the first point in this series where "logic gates" becomes "the thing that actually does arithmetic inside a CPU." Everything here so far is combinational — outputs depend only on current inputs, with no memory of the past. The next post introduces the piece that's still missing: state that persists across time, which is what makes a *sequence* of operations possible instead of just a single instantaneous computation.

{{< lab type="breadboard" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
