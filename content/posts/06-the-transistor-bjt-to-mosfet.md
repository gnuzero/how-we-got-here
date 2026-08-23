---
title: "The Transistor: BJT to MOSFET"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 6
tags: []
summary: "Why MOSFET became the industry standard"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

<!-- Write here -->
Two different device families both call themselves "transistors," and they work on genuinely different principles. Understanding both — and why one displaced the other for almost all digital logic — matters for everything downstream in this series.

## The BJT: Current Controls Current

A Bipolar Junction Transistor has three doped regions — for an NPN device, that's N-type emitter, P-type base, N-type collector — forming two back-to-back junctions. Here's the key mechanism: a small current injected into the thin base region controls a much larger current flowing from collector to emitter. The base current effectively "opens the gate" for majority carriers to diffuse across the base and get swept into the collector.

The important word there is *current*. A BJT is current-controlled — to keep it in its "on" (saturated) state, you need to continuously supply base current. That has a real cost: even when a BJT-based circuit isn't actively switching, it can be drawing static current just to hold its state, which becomes a serious power problem at scale.

## The MOSFET: Voltage Controls Current

A MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) works completely differently. There's a gate electrode, separated from the silicon body by a thin insulating oxide layer (that stable SiO₂ from Post 5). Applying voltage to the gate doesn't push current *through* the gate — the oxide blocks that — instead, it creates an electric field that either attracts or repels carriers in the silicon just beneath it, forming (or not forming) a conductive channel between source and drain.

For an NMOS device, applying a positive gate voltage attracts electrons to the surface beneath the gate, forming an "inversion layer" — a thin N-type channel in what was originally P-type body silicon. Once that channel forms, current can flow from drain to source. Remove the gate voltage, the channel disappears, current stops.

The critical difference from a BJT: **the MOSFET's gate draws essentially no steady-state current.** It's an electric field controlling a channel, not a diffusion current controlling a junction. Once the gate capacitor is charged, holding a MOSFET "on" costs almost nothing.

## Why MOSFET Won

That near-zero static gate current is the whole story. Pack a few thousand BJTs onto a chip and idle power dissipation alone becomes a real thermal problem — this was a genuine bottleneck for bipolar logic families in the 1970s. MOSFETs, and specifically the CMOS configuration built from them (Post 7), draw meaningful current mainly *while switching*, not while holding state. That property is what let transistor counts scale from thousands to billions on a single die without the chip melting — a scaling story that plays out concretely in Phase 7's process-node posts.

BJTs didn't disappear — they're still used where raw current-driving strength or analog linearity matters more than density. But for digital logic at any serious scale, the MOSFET's low static power made it the only viable choice, and it's the device every gate in the next post is built from.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
