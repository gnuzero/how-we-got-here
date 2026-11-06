---
title: "What '7nm' Actually Means"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 54
aliases:
  - /posts/47-what-7nm-actually-means/
  - /posts/53-what-7nm-actually-means/
  - /posts/54-what-7nm-actually-means/
tags: []
summary: "Node names stopped tracking one physical length — density and pitch are the physics; the label is a generation"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

Every silicon device earlier in this series — MOSFET (Post 6), CMOS (Post 7), memory cells (Post 10) — lives at a scale where fabrication precision decides what is possible. Labels like "7nm" or "5nm" get treated as if they were a single measurable length on the transistor. They have not been that for a long time.

## When the Name Was a Length

Historically the process-node name tracked a real dimension — roughly the minimum gate length of a planar MOSFET (Post 6). For decades a node name meant something you could point at on the device. That correspondence broke well before planar transistors gave way: Intel's July 2021 node-renaming announcement (filed with the SEC on Form 8-K) says the industry "has long recognized that traditional nanometer-based process node naming stopped matching the actual gate-length metric in 1997." Planar transistors stayed in production into the 2010s, so for much of the planar era the name was already a label, not a measurement.

## Why One Number Stopped Sufficing

FinFET and later Gate-All-Around structures (Posts 48–49) made gate length only one of several load-bearing dimensions. Fin height, fin pitch, gate pitch, and interconnect pitch all matter independently — and different foundries (TSMC, Samsung, Intel) trade them off differently. Two "7nm" processes are not the same physics under the same label.

## What the Label Is Now

A modern node name is mostly a generational marker — "our next denser, more efficient generation" — not a cross-foundry physical spec. Meaningful comparison uses independently measurable quantities: fin pitch, gate pitch, transistors per square millimeter. Those often show one foundry's "7nm" denser than another's, because the branding decoupled from any single length.

## Why the Gap Matters

"TSMC's 5nm vs Samsung's 5nm" is not apples-to-apples because the strings match. The naming gap opened in the planar era and widened once the design space stopped being one-dimensional — planar gate length gave way to 3D geometry and multi-pitch tradeoffs. That is the setup for the next posts: lithography that can still print those structures (Post 48), and the transistor geometry shifts that made a single length obsolete (Post 49).

