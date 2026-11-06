---
title: "ARM and RISC-V: The Architecture Landscape Today"
weight: 27
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 26
aliases:
  - /posts/20-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/25-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/26-arm-and-risc-v-the-architecture-landscape-today/
tags: []
summary: "After desktop settled on x86, the fight moved to power and licensing — ARM won mobile; RISC-V bets on open"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

The x86-versus-RISC fight (Post 19) mostly settled desktop and server by the late 1990s. Competition did not end — it moved. Mobile, embedded, and edge care more about watts than single-thread peak, and the *business model* around an ISA turned out to matter as much as the encoding.

## ARM: License the ISA, Don't Build the Fab

ARM Holdings designs the ISA and licenses it — ready-to-fabricate cores, or architecture licenses that let a company design its own ARM-compatible core (Apple's silicon is the standout of the latter). The model spread the ISA across many manufacturers without ARM running a fab.

Technically, ARM entered the mobile era already tuned for power efficiency — RISC-lineage simple decode meeting a market that, for the first time at mass scale, cared about performance-per-watt. That was not luck; it was decades of that design discipline meeting battery-powered devices.

## RISC-V: Open Instead of Licensed

RISC-V (work starting around 2010 at UC Berkeley, with Krste Asanović, David Patterson, and colleagues among the named drivers) goes further: the ISA is open and royalty-free. Implement a core without negotiating with a controlling vendor. That matters most where deep customization or zero ISA licensing cost is the point — embedded systems, and accelerators that want custom instructions on a RISC-V base without asking permission.

## Same Lesson, One Layer Deeper

Rough map: x86 still owns much of desktop and server on compatibility inertia. ARM owns mobile, with real server and laptop inroads (custom cloud ARM; Apple Silicon). RISC-V is earlier commercially, growing fastest where royalty-free flexibility beats a mature software stack.

Post 19's pattern again: the winner in a segment is not always the "best" ISA in isolation — it is the one whose economics fit what that segment buys. ARM won mobile on watts *and* a licensing model phone makers could customize under. RISC-V bets that "free and open" beats even that for a growing set of cases. Whether that reaches x86 or ARM scale is still open.

{{< lab type="mini-cpu" >}}

**Door out:** The RISC-V Instruction Set Manual (riscv.org) — the living primary specification for the open ISA this post names; start with the unprivileged ISA volume.

