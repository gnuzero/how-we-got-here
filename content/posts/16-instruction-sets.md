---
title: "Instruction Sets"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 15
aliases:
  - /posts/11-instruction-sets/
tags: []
summary: "The ISA is the software–hardware contract; CISC and RISC are two answers to what that contract should look like"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

An Instruction Set Architecture (ISA) is the contract between software and hardware: which operations exist, how they are encoded in bits, and what those bits mean. It is a *specification*, not a chip. x86, ARM, and RISC-V are ISAs — many different chips can implement the same one and still run the same binaries.

That split — architecture (what software sees) versus microarchitecture (how the silicon is built) — is the spine of this phase. Pipelines, caches, and out-of-order cores all live *under* the ISA. Software does not have to know.

## Two Philosophies: CISC and RISC

CISC (Complex Instruction Set Computing) — the lineage behind x86 — packs a lot into each instruction: variable length, rich addressing modes, arithmetic that can touch memory directly. Fewer instructions per program; a harder decoder.

RISC (Reduced Instruction Set Computing) goes the other way: fixed-length instructions, a strict load/store model (ALU ops on registers only), uniform fields. More instructions per program; each one simple enough to fetch and decode predictably, stage after stage. That uniformity is why pipelining (Post 13) became tractable on RISC first — a fixed-width instruction is far easier to stage than a CISC instruction whose length is unknown until you have already started decoding it.

Concretely: a typical RISC instruction is 32 bits with fields in fixed places. An x86 instruction can run from 1 byte to 15, with optional prefixes — dense and powerful, expensive to decode at high throughput.

**Try this now.** The mini-CPU below is a tiny ISA: 4-bit opcode, 4-bit operand, sixteen words of memory. Step the guided 8-instruction program and watch fetch / decode / execute move A and memory — the same contract this post just named, small enough to hold in one screen.

{{< lab type="mini-cpu" >}}

## Why x86 Persisted Anyway

If RISC is simpler to pipeline, why does x86 still dominate desktop and server? Compatibility and decades of engineering investment — not raw elegance. Modern x86 chips *translate* CISC instructions into simpler, RISC-like internal micro-ops, then run those on a RISC-style core behind a CISC front end (Post 19). The debate is less a clean binary than the labels suggest.

Next: build an actual datapath — the physical structure an ISA executes on.

**Door out:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — the classic argument that launched the RISC side of this split.

