---
title: "Datapath Design"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 12
tags: []
summary: "Single-cycle CPU walkthrough"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

An ISA (Post 11) is a specification. A datapath is the physical hardware that carries it out. The simplest version — a single-cycle datapath — executes one complete instruction per clock cycle, start to finish, with no pipelining. It is not how real CPUs work today, but it is the clearest way to see how the pieces from earlier phases connect.

## The Core Components

**Program Counter (PC):** a register (Post 9's flip-flops) holding the address of the current instruction. **Instruction Memory:** read-only from the datapath's perspective, indexed by the PC, returning the raw instruction bits. **Register File:** a small, fast array of registers (built from the same SRAM-family cells as Post 10's cache discussion, organized differently) that the decoded instruction reads its operands from and writes its result to. **ALU:** Post 8's arithmetic/logic unit, performing the operation the instruction specifies. **Data Memory:** for load/store instructions, the path to main memory. **Control Unit:** decodes the opcode and generates every control signal — which ALU operation to perform, whether to write the register file, whether this is a memory access, and so on.

## Following an Instruction Through

Take a simple ADD. The cycle begins: the PC indexes instruction memory, and the instruction bits come out. The control unit decodes the opcode and determines that this is an ADD in register-register format. The register file is read using the two source-register fields. Those values enter the ALU, which the control unit has configured for addition. The ALU result goes to the register file's write-data input, and the destination-register field selects where it is written. At the same time, the PC is incremented (or, for a branch, computed differently) to point at the next instruction. Fetch, decode, register read, ALU operation, register write, and PC update all happen within a *single* clock cycle.

## Why "Single-Cycle" Is a Teaching Tool, Not a Real Design

Notice the constraint: the clock period must be long enough for the *slowest* possible instruction's full path through every stage — even for instructions that do not need every stage. A simple register-to-register ADD never touches data memory, yet the clock period must still accommodate instructions that do. Every instruction therefore runs at the speed of the worst case, which wastes potential throughput.

That is exactly the problem pipelining solves: instead of one long clock period sized for the worst case, break execution into stages, each sized for *its own* worst case, and let different instructions occupy different stages at once. That is the subject of the next post, and arguably the single most important idea in classical CPU microarchitecture.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
