---
title: "Out-of-Order Execution"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 22
aliases:
  - /posts/16-out-of-order-execution/
  - /posts/21-out-of-order-execution/
  - /posts/22-out-of-order-execution/
tags: []
summary: "Stall only what must wait — Tomasulo's idea: execute when ready, commit in order"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

Post 13's load-use hazard stalls an in-order pipeline *behind* one waiting instruction — even when later instructions are independent and ready. Out-of-order execution answers that constraint: run independent work whenever operands are ready; enforce program order only where architecture requires it.

## False Dependencies and Register Renaming

Not every "dependency" is real. If instruction A writes R1 and later instruction B also writes R1 for an unrelated result, no value flows between them — the ISA simply has few architectural register *names*, and the compiler reused one. That is a name (false) dependency, not a true data dependency.

Register renaming gives the CPU many more *physical* registers than the ISA exposes, and maps each write to a fresh physical register at decode. A's "R1" becomes P17; B's later "R1" becomes P42. No false conflict; both can proceed.

## Issue When Ready, Commit In Order

Renamed instructions wait in **reservation stations** until real operands arrive (by value or by tag from a producer still in flight). The moment operands are ready, the instruction can issue to an execution unit — regardless of original program order. That is the out-of-order part.

Architectural effects still must look in-order: visible registers, memory, exceptions. The **reorder buffer (ROB)** tracks every in-flight instruction in program order and only *retires* results to architectural state in that order, even when execution finished at different times.

## Tomasulo's Core Idea

"Execute whenever ready, commit strictly in order" — the pattern often credited to Robert Tomasulo's algorithm for the IBM System/360 Model 91 floating-point unit (published 1967) — is the conceptual core of essentially every high-performance out-of-order CPU since. It is also expensive: renaming tables, reservation stations, and the ROB cost area and power. Adding more of that machinery has diminishing returns — the wall the next post hits head-on.

{{< lab type="mini-cpu" >}}

**Door out:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — the primary paper behind modern out-of-order issue and rename.

