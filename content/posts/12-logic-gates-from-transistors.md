---
title: "Logic Gates from Transistors"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 11
aliases:
  - /posts/07-logic-gates-from-transistors/
tags: []
summary: "CMOS pairs NMOS and PMOS so idle gates draw no static path — the topology that scaled"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS — Complementary Metal-Oxide-Semiconductor — is the circuit topology behind nearly every digital chip since it became the dominant VLSI process in the mid-to-late 1980s. Pair an NMOS with a PMOS so that, in steady state, exactly one conducts. Device-level near-zero static current (Post 6) becomes a composable logic family.

## The Inverter: Smallest CMOS Unit

PMOS on top (to the supply rail), NMOS on bottom (to ground); gates tied as input, drains as output. PMOS conducts when its gate is *low*; NMOS when its gate is *high*. Input high → NMOS on, PMOS off → output grounded. Input low → PMOS on, NMOS off → output to the rail. In either steady state one transistor is on and the other off — never a static path from rail to ground except during the brief switch.

## Why This Solves the Power Problem

Older NMOS-style logic (pull-down plus a load) draws current whenever the output sits low. CMOS does not. Power is spent almost entirely on transitions — charging and discharging the next gate's input capacitance — so it scales with switching *activity* and *frequency*, not with how many idle gates exist on the die. MOSFET made near-zero static current possible at the device; CMOS is the circuit trick that turns that into every gate that follows.

## NAND, NOR, and Functional Completeness

A 2-input CMOS NAND puts NMOS in series (both high to pull low) and PMOS in parallel (either low pulls high). NOR mirrors that. Either gate alone is functionally complete — you can build AND, OR, NOT, and therefore any boolean function. That is why standard-cell libraries lean so hard on well-characterized NAND cells: compose them and you get adders, register files, whole processors.

**Try this now.** The lab below opens on an AND gate — toggle the two inputs and watch the output. NAND and NOR are the CMOS primitives above; AND is what you get when you compose them. Touch the gate before the next post builds adders from them.

{{< lab type="breadboard" height="700" >}}

## Where This Goes Next

Every Phase 3 CPU structure — full-adder, ALU, register file — is composition of these gates. Next: the first real structure, combinational logic, starting with the adder.

