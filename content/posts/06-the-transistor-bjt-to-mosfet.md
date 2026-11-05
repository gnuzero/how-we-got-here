---
title: "The Transistor: BJT to MOSFET"
weight: 11
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 10
tags: []
summary: "Current-controlled BJTs burned idle power; voltage-controlled MOSFETs made density possible"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Two device families both get called "transistors." They switch on different physics — and only one of them scales into the billions of devices on a modern die.

## The BJT: Current Controls Current

A bipolar junction transistor (NPN: N emitter, P base, N collector) uses a small base *current* to control a larger collector–emitter current. To hold it on, you keep supplying base current. At chip scale that idle cost compounds: bipolar logic families in the 1970s hit a real thermal wall from static dissipation alone, even when gates were not switching.

## The MOSFET: Voltage Controls a Channel

A MOSFET puts a metal (or polysilicon) gate over silicon, separated by a thin oxide — that stable SiO₂ from Post 5. Gate voltage does not push current *through* the gate; the oxide blocks DC. It creates a field that forms or removes a conductive channel between source and drain. For NMOS, positive gate voltage attracts electrons into an inversion layer in a P-type body; current flows. Drop the gate voltage, the channel disappears, current stops.

**The gate draws essentially no steady-state current.** Once the gate capacitance is charged, holding the device on costs almost nothing. That is the opposite of the BJT's continuous base current.

## Why MOSFET Won for Digital Logic

Near-zero static gate current is the whole story. CMOS (Post 7) builds on it so meaningful current flows mainly *while switching*, not while holding state. That is what let transistor counts climb from thousands to billions without melting the die — the scaling arc Phase 8 returns to at process-node resolution.

BJTs did not vanish: they still matter where current drive or analog linearity beats density. For digital logic at serious scale, the MOSFET's idle-power physics made it the only viable path — and every gate in the next post is built from it.

**Door out:** D. Kahng and M. M. Atalla's 1960 silicon MOSFET work (Bell Labs / IRE–AIEE Solid-State Device Research Conference) — the practical field-effect device that made oxide-gated voltage control the digital standard.

