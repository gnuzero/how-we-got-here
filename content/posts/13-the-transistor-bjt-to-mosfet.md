---
title: "The Transistor: BJT to MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "Current-controlled BJTs burned idle power; voltage-controlled MOSFETs made density possible"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Two device families both get called "transistors." They switch on different physics — and only one of them scales into the billions of devices on a modern die.

## The BJT: Current Controls Current

A bipolar junction transistor (NPN: N emitter, P base, N collector) uses a small base *current* to control a larger collector–emitter current. To hold it on, you keep supplying base current. At chip scale that idle cost compounds: the more bipolar gates you pack together, the more power they burn just holding their state.

## The MOSFET: Voltage Controls a Channel

A MOSFET puts a metal (or polysilicon) gate over silicon, separated by a thin oxide — that stable SiO₂ from Post 5. Gate voltage does not push current *through* the gate; the oxide blocks DC. It creates a field that forms or removes a conductive channel between source and drain. For NMOS, positive gate voltage attracts electrons into an inversion layer in a P-type body; current flows. Drop the gate voltage, the channel disappears, current stops.

**The gate draws essentially no steady-state current.** Once the gate capacitance is charged, holding the device on costs almost nothing. That is the opposite of the BJT's continuous base current.

## Why MOSFET Won for Digital Logic

Near-zero static gate current is the whole story. CMOS (Post 7) builds on it so meaningful current flows mainly *while switching*, not while holding state. That is what let transistor counts climb from thousands to billions without melting the die — the scaling arc Phase 8 returns to at process-node resolution.

The history took time. M. M. (John) Atalla and Dawon Kahng at Bell Labs achieved the first successful MOS transistor in 1959; Bell did not pursue it, but Fairchild and RCA did, and MOS devices reached the market in 1964 (General Microelectronics and Fairchild p-channel parts, an RCA n-channel transistor). Because of their smaller size and lower power than bipolar devices, CHM notes, over 99 percent of microchips made today use MOS transistors ([CHM, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated"](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)).

BJTs did not vanish: they still matter where current drive or analog linearity beats density. For digital logic at serious scale, the MOSFET's idle-power physics made it the only viable path — and every gate in the next post is built from it.

**Door out:** Dawon Kahng, "Electric Field Controlled Semiconductor Device," U.S. Patent 3,102,230 (filed 31 May 1960, granted 27 August 1963), listed on CHM's MOS milestone page above — the field-effect device whose descendants became the digital standard.

