---
title: "Relays and Electromechanical Logic"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 5
tags: []
summary: "Relays proved binary logic works — and that moving metal cannot keep up"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

A relay is almost embarrassingly simple: an electromagnet, a spring-loaded armature, a set of contacts. Energize the coil, the armature pulls in, the contacts open or close. For roughly a decade and a half, that was computing's switching primitive.

## Relays as Logic

Wire two contacts in series and you have AND: current only if *both* are closed. Wire them in parallel and you have OR. Add a normally closed contact and you get NOT. Combine those and you can build any boolean function — adders, comparators, decoders — the same logic families Phase 2 builds in silicon, here in electromechanical hardware.

Telephone exchanges were already full of relays by the early 20th century, routing calls with exactly this kind of combinational switching. That industrial base — mass-produced, well-understood, reliable-enough — is a big reason relay computers were buildable at all. Konrad Zuse's Z3 (1941) is the standout: roughly 2,000–2,600 relays, binary floating-point, a program on punched celluloid film. It is often called the first working programmable, fully automatic digital computer — with one caveat worth naming: the Z3 lacked true conditional branching. Raúl Rojas showed in 1998 that it is Turing-complete *in principle*, by having the program compute every possible branch outcome rather than branch at runtime.

**Door out:** Raúl Rojas, "How to Make Zuse's Z3 a Universal Computer" (1998) — the careful argument for Z3 Turing-completeness and its limits.

## Why Relays Were Too Slow

A relay's switching time is dominated by *mechanical* motion: the armature has to move — on the order of milliseconds. The Z3 ran at roughly 5–10 Hz (often cited around 5.3 Hz). Set that next to a modern CPU at billions of cycles per second and the gap is not incremental; it is existential. You cannot build a useful modern computer out of mechanical switches, no matter how well engineered.

Second problem: contacts wear. Every closure is metal on metal — arcing, pitting, eventual failure. Thousands of relays means thousands of wear points. Reliability and speed were fighting the same constraint: moving parts.

## The Bridge to Electronics

Relays proved the architecture: binary representation, boolean gates from simple switches, programs as data. What they could not prove was that the architecture could run *fast*. Solving that meant replacing the mechanical switch with something that changed state by moving electrons instead of metal — the vacuum tube, at the cost of enormous power and heat. That tradeoff is next.

