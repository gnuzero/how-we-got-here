---
title: "FinFET to GAA"
weight: 57
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 56
aliases:
  - /posts/49-finfet-to-gaa/
  - /posts/55-finfet-to-gaa/
  - /posts/56-finfet-to-gaa/
tags: []
summary: "Short-channel leakage killed planar shrink — wrap the gate (FinFET), then wrap it all around (GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

Post 6 introduced the planar MOSFET — gate, source, drain flat on the silicon. That geometry served for decades. As transistors shrank (lithography in Post 48), planar design hit a wall further shrink alone could not fix: the gate lost reliable control of the channel.

## Short-Channel Effects

As planar channel length shrinks, the gate above the channel (Post 6's electric-field control) has proportionally less authority, and current leaks when the device should be off. That is physics, not a process bug. Past a point, shrinking a *planar* transistor stops delivering clean switching — so further planar scaling stops being worth it.

## FinFET: Three Sides of Control

FinFET changes geometry, not just size: raise the channel into a thin vertical fin and wrap the gate around three sides (top and both walls). More of the channel sits under gate influence at the same channel length, which suppresses the short-channel leakage that was killing planar shrink.

The industry moved to FinFET in volume in the early 2010s (Intel's 22 nm Ivy Bridge generation, 2011–2012, was an early high-volume milestone). Same pattern as Post 17's multicore pivot after the clock-speed wall (Post 36): when an approach hits a real physical ceiling, change the structure — do not only push the old shape harder.

## Gate-All-Around: Four Sides

Three-sided wrap is not the electrostatic maximum. Gate-all-around (GAA) — horizontal nanosheet or nanowire channels — lets the gate surround the channel on all four sides. Leading-edge nodes (Post 47) are moving there as FinFET itself approaches practical limits: the same planar→FinFET move, one geometry later.

## The Recurring Pattern

Planar → FinFET → GAA is this series's scaling lesson in device form. Electrical walls (short-channel effects here), thermal walls (Post 36), latency walls (Post 35) all eventually force architecture, not only harder effort at the same design. Chiplets (Post 51) apply that pattern one level up — not to the transistor, but to how whole chips are assembled.

