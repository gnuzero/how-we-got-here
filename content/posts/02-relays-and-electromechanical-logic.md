---
title: "Relays and Electromechanical Logic"
date: 2026-01-01
draft: true
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 2
tags: []
summary: "The relay as a switch — Zuse's Z3, telephone exchange logic, why relays were too slow"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

A relay is almost embarrassingly simple: an electromagnet, a spring-loaded metal armature, and a set of contacts. Energize the coil, the armature pulls in, the contacts open or close. That is it. For roughly a decade and a half, it was the switching primitive computing was built on.

## Relays as Logic

Relays matter here less for the mechanism than for what you can build from it. Wire two contacts in series and you have an AND gate: current flows only if *both* are closed. Wire them in parallel and you have OR. Add a normally closed contact and you get NOT. Combine those primitives and you can build any boolean function — adders, comparators, decoders — the same logic families covered in Phase 2, implemented in electromechanical hardware instead of silicon.

Telephone exchanges were already full of relays by the early 20th century, doing exactly this kind of combinational switching to route calls. That existing industrial base — mass-produced, well-understood, reliable-enough relays — is a big part of why relay computers were buildable at all. Konrad Zuse's Z3, completed in 1941, is the standout example: roughly 2,000-2,600 relays (sources vary), binary floating-point arithmetic, and a program read from punched celluloid film. It's frequently credited as the first working programmable, fully automatic digital computer — with one real caveat worth naming: the Z3 lacked true conditional branching. Raúl Rojas proved it Turing-complete in 1998, but only "in principle," by having the program speculatively compute every possible branch outcome rather than actually branching at runtime.

## Why Relays Were Too Slow

A relay's switching time is dominated by *mechanical* motion: the armature has to move, which takes on the order of milliseconds. That sounds fast until you need millions of operations for anything nontrivial. The Z3 ran at roughly 5–10 Hz (often cited around 5.3 Hz). Set that next to a modern CPU at billions of cycles per second and the gap is not incremental — it is existential. You cannot build a useful modern computer out of mechanical switches, no matter how well engineered.

There is a second problem: contacts wear. Every closure is metal on metal, which means arcing, pitting, and eventual failure. A machine with thousands of relays has thousands of wear points, each a potential failure mode. Reliability and speed were fighting the same physical constraint: moving parts.

## The Bridge to Electronics

Relays proved the logical architecture worked: binary representation, boolean gates from simple switches, programs as data. What they could not prove was that the architecture could run *fast*. Solving that meant replacing the mechanical switch with something that changed state by moving electrons instead of metal — exactly what the vacuum tube offered, at the cost of enormous power and heat. That tradeoff is next.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
