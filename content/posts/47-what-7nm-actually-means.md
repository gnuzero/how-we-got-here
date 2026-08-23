---
title: "What '7nm' Actually Means"
date: 2026-01-01
draft: true
phase: "8 — Process Nodes & Fabrication"
series_index: 47
tags: []
summary: "Spoiler: not the gate length anymore"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

Every silicon device covered so far in this series — the MOSFET (Post 6), CMOS gates (Post 7), memory cells (Post 10) — exists at a physical scale where fabrication precision directly determines what's possible. Marketing terms like "7nm" or "5nm" get thrown around constantly in coverage of new chips, and a persistent misconception is worth clearing up: these numbers haven't corresponded to a single physical measurement on the transistor for a long time.

## Where the Naming Convention Came From

Historically, process node names tracked a real physical dimension — specifically, the minimum gate length of a planar MOSFET (the structure Post 6 describes). A "90nm process" meant something concretely measurable on the transistor. That correspondence held reasonably well through the planar-transistor era.

## Why the Correspondence Broke Down

Once the industry moved to FinFET and later Gate-All-Around structures (Post 48 covers photolithography's role in enabling this shift; Post 49 covers the transistor structures themselves), gate length stopped being the single dominant factor for density and performance. Fin height, fin pitch, gate pitch, and interconnect pitch all became independently important — and different foundries (TSMC, Samsung, Intel) made different engineering tradeoffs across those dimensions. Their respective "7nm" processes are not directly comparable on any single physical measurement, despite carrying the same marketing label.

## What the Numbers Actually Represent Today

In practice, a modern node name is primarily a marketing and generational label — roughly "this is our next generation, denser and more efficient than the last one we called by a larger number" — rather than a precise, cross-foundry physical specification. To compare two foundries' "7nm" processes meaningfully, look at the independently measurable numbers: fin pitch, gate pitch, and transistor density (transistors per square millimeter). Those often reveal that one foundry's "7nm" is denser than another's, because the labels have partially decoupled from any single comparable physical measurement.

## Why This Matters Beyond Pedantry

This isn't just a factoid — it shapes how you should read coverage comparing chips built on different foundries' processes. "TSMC's 5nm vs Samsung's 5nm" is not apples-to-apples just because the labels match; real comparison requires density and performance numbers, not the marketing node name. Understanding *why* the naming gap exists — the shift from a single dominant dimension (planar gate length) to a multi-dimensional design space (fin/gate pitch, 3D transistor structure) — sets up the next several posts: Post 48 covers the lithography that makes these structures fabricable, and Post 49 covers how the transistor evolved from planar to FinFET to Gate-All-Around — the underlying story node names only loosely gesture at.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
