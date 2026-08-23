---
title: "FinFET to GAA"
date: 2026-01-01
draft: true
phase: "8 — Process Nodes & Fabrication"
series_index: 49
tags: []
summary: "Why planar transistors ran out of runway"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

Post 6 introduced the planar MOSFET — gate, source, drain, all laid out flat on the silicon surface. That structure served the industry for decades, but as transistors shrank (enabled by the lithography advances in Post 48), planar design hit a fundamental problem that further shrinking alone couldn't fix: the gate lost the ability to reliably control the channel beneath it.

## The Problem: Short-Channel Effects

As a planar transistor's channel length shrinks, the gate — which sits above the channel, controlling it via the electric field described in Post 6 — has proportionally less influence relative to the channel's length, and current increasingly leaks even when the transistor is supposed to be "off." These short-channel effects are a physical problem, not an engineering oversight: past a certain point, further shrinking a *planar* transistor doesn't reliably improve performance, because the device stops switching cleanly between on and off — undermining the point of scaling it further.

## FinFET: Wrapping the Gate Around Three Sides

FinFET restructures the transistor to solve this: instead of a flat channel with the gate only above it, the channel is shaped into a thin, vertical "fin" protruding from the silicon surface, and the gate wraps around three sides of that fin (top and both sidewalls). That increases the gate's effective control over the channel relative to a planar design at the same channel length — more of the channel's surface is under direct gate influence, which suppresses the short-channel leakage that was crippling further planar scaling.

FinFET became the dominant transistor structure across the industry starting around the early 2010s, and it exemplifies a broader pattern: when an existing structure hits a fundamental physical wall, the fix is often a change in *geometry*, not just a further shrink of the same shape — analogous to the multicore pivot in Post 17, where hitting the clock-speed wall (Post 36) forced a structural rethink rather than pushing the existing approach harder.

## Gate-All-Around: Wrapping All Four Sides

FinFET's three-sided gate wrap is a big improvement over planar's one-sided control, but it isn't the theoretical maximum. Gate-All-Around (GAA) transistors — using horizontal nanosheet or nanowire channels rather than FinFET's vertical fin — let the gate completely surround the channel on *all four* sides, maximizing electrostatic control further. This is the structure the leading-edge nodes in Post 47 are transitioning to as FinFET approaches its own practical scaling limits — the same pattern that pushed the industry from planar to FinFET a decade earlier: incremental scaling within a geometry eventually plateaus, and the fix is a new geometry, not a smaller version of the old one.

## The Recurring Pattern

Planar to FinFET to GAA is a clean illustration of something that shows up repeatedly across this series: physical scaling within an existing approach eventually hits a real wall — sometimes electrical (short-channel effects, here), sometimes thermal (Post 36's clock speed wall), sometimes latency that refuses to scale (Post 35's memory wall) — and the fix is often a structural or architectural change, not simply "try harder" at the same approach. Chiplets (Post 51) apply this same pattern one level up — not to the transistor itself, but to how entire chips are assembled from smaller pieces.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
