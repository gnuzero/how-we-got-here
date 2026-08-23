---
title: "Instruction Sets"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 11
tags: []
summary: "What an ISA actually is — CISC vs RISC"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

An Instruction Set Architecture (ISA) is the contract between software and hardware: the full list of operations a processor supports, and the exact bit encoding that invokes each one. It is a specification, not a physical chip. x86, ARM, and RISC-V are ISAs; many different chips can implement the same one.

## What's Actually In an ISA

An ISA defines the register set (how many, how wide), the instruction encoding (opcode format, operand fields), the memory addressing modes (how instructions reference memory), and the semantics of every operation — what ADD does to flags, how division handles edge cases, and so on. Two chips that both implement, say, RISC-V can run the same compiled binary and produce identical results, even if their internal microarchitecture (pipelining, caching, out-of-order execution — all covered later in this phase) differs completely. That split between architecture (what software sees) and microarchitecture (how the hardware is built) is one of the most important ideas in this series.

## CISC vs RISC: Two Philosophies

CISC (Complex Instruction Set Computing) — x86's lineage — favors instructions that do a lot per instruction: variable-length encoding, complex addressing modes, and single instructions that combine memory access with arithmetic. The philosophy: fewer, richer instructions per program, saving instruction memory and reducing fetch count, at the cost of a much more complex decoder.

RISC (Reduced Instruction Set Computing) favors the opposite: fixed-length instructions, a strict load/store model (arithmetic operates only on registers, never directly on memory), and simple, uniform addressing. The philosophy: keep every instruction simple and fast to decode, and let the compiler emit more of them if needed. That uniformity is what makes pipelining (Post 13) tractable — a fixed-length, regularly structured instruction is far easier to fetch and decode predictably, stage after stage, than a CISC instruction whose length is unknown until it has been partially decoded.

## Encoding, Concretely

A typical RISC instruction is 32 bits, split into fixed fields: opcode, source registers, destination register, and (for immediate instructions) a constant — every instruction the same width, every field in a predictable position. x86 instructions, by contrast, range from 1 byte to 15 bytes, with prefixes, opcode bytes, and optional operand encoding all variable — dense and powerful, but harder to decode at high throughput.

## Why x86 Persisted Anyway

If RISC is simpler to build fast pipelines around, why does x86 still dominate desktop and server compute? Mostly software compatibility and decades of accumulated optimization investment — not raw architectural superiority. Post 19 goes deep on this tension: modern x86 chips *translate* their CISC instructions into simpler, RISC-like internal micro-ops before execution, running a RISC-style core underneath a CISC-compatible front end. It is a clever compromise, and a big part of why the CISC/RISC debate is less a clean binary today than this post might suggest. The next post starts building an actual datapath — the physical structure an ISA executes on.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
