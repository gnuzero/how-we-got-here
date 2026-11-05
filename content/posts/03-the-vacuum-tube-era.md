---
title: "The Vacuum Tube Era"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 5
tags: []
summary: "Tubes removed moving parts — and traded that speed for heat, power, and failure"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

The vacuum tube's core trick is simple: control a large current with a small one, with no moving parts. That made computers orders of magnitude faster than anything relay-based — and it is why the era was a constant fight against heat, power, and failure rate.

## How a Triode Switches

A triode has three elements sealed in a vacuum: a heated cathode that emits electrons (thermionic emission), a control grid, and an anode (plate) held positive that attracts those electrons. The grid sits between them. A small negative voltage on it throttles — or cuts off — current to the anode. Small grid change, large anode-current change. That is amplification; with the right topology it is also a switch: current on or off for a 1 or a 0.

Nothing moves except electrons. That is why tubes could switch in microseconds where relays needed milliseconds — roughly a thousand-fold gain from removing mechanical motion.

## ENIAC: The 30-Ton Switchboard

ENIAC (1945) is the era's landmark, and the physical scale matters: about 18,000 vacuum tubes, roughly 1,800 square feet, about 30 tons. It drew about 150–174 kilowatts — the "whole west side of Philadelphia dimmed" story is folklore, but the power draw was genuinely industrial.

"Programming" ENIAC meant physically rewiring it: patch cables, switches set function by function — a giant switchboard. There was no stored program in the modern sense; the *sequence of operations* lived in the cable routing. Reconfiguring for a new calculation could take days. That pain is the direct ancestor of the CPU-architecture story in Phase 3 — a *stored* program, instructions in the same memory as data, was the fix ENIAC originally lacked (it gained a limited stored-program mode in 1948), and that defined the general-purpose machines that followed.

Herman H. Goldstine's history of the early electronic computers remains the classic firsthand-adjacent account of this era; treat popular "tube swap every few minutes" stories carefully against it. Co-inventor J. Presper Eckert [called that one "another myth"](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html) in a 1989 interview.

**Door out:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine-class ENIAC history, useful against folklore.

## Why 18,000 Tubes Was a Nightmare

Vacuum tubes fail: filaments burn out, seals leak, emission degrades. With ~18,000 tubes, something failed regularly — early on often enough that downtime was severe. After derating heaters and burning in tubes, ENIAC settled to roughly one tube failure every couple of days, [by Eckert's account](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html) (not the scavenger-hunt myth). Failures were real and costly. Each tube also dissipates real heat — rooms full of them needed serious cooling — so the machine was powerful for its era and brutally expensive to keep running.

That sets up the next post. The transistor did not win because engineers were clever for cleverness's sake. It won because the tube's own physics — heat, size, and the fragile vacuum envelope — put a hard ceiling on how far this approach could scale.

