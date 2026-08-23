---
title: "The Vacuum Tube Era"
date: 2026-01-01
draft: true
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 3
tags: []
summary: "Triodes, and the 30-ton switchboard: ENIAC and why 18,000 tubes changed everything (and why reliability was hard)"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

The vacuum tube's core trick is simple: control a large current with a small one, and do it with no moving parts. That made computers orders of magnitude faster than anything relay-based — and it is also why the era was a constant fight against heat, power, and failure rate.

## How a Triode Switches

A triode has three elements sealed in a vacuum: a heated cathode that emits electrons (thermionic emission), a control grid, and an anode (plate) held at positive voltage that attracts those electrons. The grid sits between cathode and anode. A small negative voltage on it repels enough electrons to throttle — or cut off — current to the anode. Small grid-voltage change, large anode-current change. That is amplification; with the right topology it is also a switch: current on or off for a 1 or a 0.

Critically, nothing moves except electrons. That is why tubes could switch in microseconds where relays needed milliseconds — roughly a thousand-fold gain from removing mechanical motion.

## ENIAC: The 30-Ton Switchboard

ENIAC (1945) is the era's landmark, and it's worth sitting with the actual physical scale: about 18,000 vacuum tubes, 1,800 square feet of floor space, and roughly 30 tons of hardware. It consumed about 150–174 kilowatts — the "the whole west side of Philadelphia dimmed the lights" story around ENIAC is folklore, but the power draw was genuinely industrial-scale.

"Programming" ENIAC meant physically rewiring it: patch cables between units, switches set function by function, on what really was a giant switchboard. There was no stored program in the modern sense; the *sequence of operations* lived in the cable routing. Reconfiguring for a new calculation could take days. That pain is the direct ancestor of the CPU-architecture story in Phase 3 — a *stored* program, instructions in the same memory as data, was the fix that the original ENIAC lacked, and that defined the general-purpose machines that followed.

## Why 18,000 Tubes Was a Nightmare

Vacuum tubes fail: filaments burn out, seals leak, emission degrades. With ~18,000 tubes, something failed regularly—early on often enough that downtime was severe. After derating heaters and using burn-in tubes, ENIAC settled to roughly one tube failure every couple of days (not the popular "swap every few minutes" story). Failures were real and costly; they were not a full-time daily scavenger hunt. Each tube also dissipates real heat — rooms full of them needed serious cooling — so the machine was powerful for its era and brutally expensive to keep running.

That sets up the next post. The transistor did not win because engineers were clever for cleverness's sake. It won because the tube's own physics — heat, size, and the fragile vacuum envelope — put a hard ceiling on how far this approach could scale.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
