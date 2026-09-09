---
title: "From Gates to Combinational Logic"
weight: 9
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 8
tags: []
summary: "Compose gates into adders and an ALU — then hit the carry-ripple delay that forces better structures"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

A single gate is almost useless alone. Useful behavior starts when you compose them — and the canonical first structure is the adder: the place gates become "the thing that does arithmetic inside a CPU."

## Half Adder to Full Adder

Two bits A and B: sum is XOR, carry is AND. That half adder cannot accept a carry-*in* from a less-significant bit. A full adder takes A, B, and Cin and produces Sum and Cout — Sum = A XOR B XOR Cin; Cout from the majority of the three inputs. Chain Cout of one stage into Cin of the next and you can add arbitrary width, one bit position at a time.

**Try this now.** The lab below still opens on an AND gate — that is the half-adder’s carry. Toggle both inputs high and watch the output go high; that single gate is the constraint that will ripple when you chain adders in the next section.

{{< lab type="breadboard" height="700" >}}

## Ripple-Carry: Simple, Slow for a Reason

Four full adders in a row make a 4-bit ripple-carry adder. Bit 3's carry cannot be right until bit 2's has settled, which waits on bit 1, which waits on bit 0. The carry *ripples*. Fine at 4 bits; at 64 bits that chain sets how fast the whole ALU can clock. That delay constraint is exactly why real CPUs add carry-lookahead (and kin): more gates, shorter worst-case path. Same pattern as the rest of this book — a physical bottleneck forces the next architecture.

## From Adders to a Simple ALU

Put a mux in front of the same adder hardware: control bits select add, subtract (add with inverted operand plus Cin — reuse the adder), AND, OR. One block, several combinational paths. Conceptually small; practically the first moment "gates" become CPU arithmetic.

Everything so far is combinational — outputs depend only on current inputs. A sequence of operations needs state that persists across time. That is the next post.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
