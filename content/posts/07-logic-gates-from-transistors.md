---
title: "Logic Gates from Transistors"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 7
tags: []
summary: "CMOS and the power/switching tradeoff"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS — Complementary Metal-Oxide-Semiconductor — is the single most consequential circuit topology in this entire series. Nearly every digital chip made since CMOS became the dominant VLSI process in the mid-to-late 1980s is built from it. The idea is simple once you see it: pair an NMOS transistor with a PMOS transistor so that, in steady state, exactly one of them is ever conducting.

## The Inverter: CMOS's Smallest Unit

Take a PMOS transistor on top (connected to the positive supply rail) and an NMOS transistor on the bottom (connected to ground), gates tied together as the input, drains tied together as the output. That's a CMOS inverter.

PMOS conducts when its gate is *low* relative to source; NMOS conducts when its gate is *high*. So: input high → NMOS on, PMOS off → output pulled to ground (low). Input low → PMOS on, NMOS off → output pulled to the supply rail (high). It's an inverter, and — this is the important part — in either steady state exactly one transistor is on and the other is off, so the output is connected to either the supply rail or ground, but never both at once. No static current path exists between rail and ground except during the brief moment of switching.

## Why This Solves the Power Problem

Compare this to NMOS-style logic that uses a pull-down transistor and a load device (classically another transistor, or in textbook examples a resistor): current flows through that load continuously whenever the output is held low, dissipating power the entire time the gate sits in that state. CMOS has no such static path. Power is dissipated almost entirely during transitions — charging and discharging the capacitance of the next gate's input — which is why CMOS power scales with switching *activity* and *frequency*, not with how many gates simply exist and sit idle.

This is precisely the tradeoff referenced in Post 5 and Post 6: MOSFETs made near-zero static current possible at the device level; CMOS is the circuit-level trick that turns that property into a complete, composable logic family.

## Building NAND and NOR

The inverter generalizes directly. A 2-input CMOS NAND gate puts two NMOS transistors in series (both must be on — both inputs high — to pull the output low) and two PMOS transistors in parallel (either one being on — either input low — pulls the output high). NOR is the mirror image: NMOS in parallel, PMOS in series.

NAND and NOR are functionally complete — either one alone, wired cleverly, can implement AND, OR, and NOT, and therefore any boolean function at all. This is why NAND gates specifically show up so often as the "primitive" cell in standard-cell chip design: fabricate a library of well-characterized NAND cells, and in principle you can build anything from adders to entire processors by composing them.

## Where This Goes Next

The full-adder, the ALU, the register file — every structure in Phase 3's CPU-building posts is, underneath, a composition of exactly these gates. The next post builds the first real structure out of them: combinational logic, starting with the humble adder.

{{< lab type="breadboard" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
