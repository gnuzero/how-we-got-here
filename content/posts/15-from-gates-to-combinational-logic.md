---
title: "From Gates to Combinational Logic"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
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

Build the adder and the logic units side by side, and put a mux on their outputs: control bits select which result (add, AND, OR) leaves the block. Subtraction needs no new unit: an inverter on B in front of the adder, plus a carry-in of 1, turns A + B into A + B′ + 1 = A − B ([Gottlieb, NYU Computer Systems Design, lecture 9](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html); [Harris, HMC E158 lecture 15](https://pages.hmc.edu/harris/class/e158/01/lect15.pdf) on muxing a separate logic unit with the adder; adder designs in [Harris & Harris, CMOS VLSI Design lecture 17](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf)). One block, several combinational paths. Conceptually small; practically the first moment "gates" become CPU arithmetic.

Everything so far is combinational — outputs depend only on current inputs. A sequence of operations needs state that persists across time. That is the next post.

