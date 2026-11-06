---
title: "The Vacuum Tube Era"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
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

ENIAC (built 1943–45, announced 14 February 1946) is the era's landmark, and the physical scale matters. Penn Engineering gives about 18,000 vacuum tubes, a 30-by-50-foot room, 30 tons and 150 kilowatts ([Penn Engineering](https://www.seas.upenn.edu/about/history-heritage/eniac/)); the Army Ordnance Corps' own data sheet lists 17,468 tubes, 1,800 square feet and 174 kW ([US Army Ordnance Corps, *Electronic Computers Within the Ordnance Corps*, App. I](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html)). Either way, the power draw was industrial.

"Programming" ENIAC meant physically rewiring it: patch cables, switches set function by function — a giant switchboard. There was no stored program in the modern sense; the *sequence of operations* lived in the cable routing. Reconfiguring for a new calculation could take days. That pain is the direct ancestor of the CPU-architecture story in Phase 3 — a *stored* program, instructions in the same memory as data, was the fix ENIAC originally lacked (in 1948 it was modified to run programs stored in its function tables, a read-only arrangement first demonstrated in April 1948, per Wikipedia's [ENIAC](https://en.wikipedia.org/wiki/ENIAC) and [Stored-program computer](https://en.wikipedia.org/wiki/Stored-program_computer) pages; the latter notes that some historians do not count it as a stored-program computer), and that defined the general-purpose machines that followed.

Herman H. Goldstine's history of the early electronic computers remains the classic firsthand-adjacent account of this era; treat popular "tube swap every few minutes" stories carefully against it. Co-inventor J. Presper Eckert [called that one "another myth"](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html) in a 1989 interview.

**Door out:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine-class ENIAC history, useful against folklore.

## Why 18,000 Tubes Was a Nightmare

Vacuum tubes fail: filaments burn out, seals leak, emission degrades. With ~18,000 tubes, something failed regularly. Running tubes well below their ratings helped (Penn: Eckert ran them at one-quarter power); ENIAC still lost roughly one tube every day or two, and the maintenance team learned to fix a failure in about 15 minutes ([CHM, *Revolution*: ENIAC](https://www.computerhistory.org/revolution/birth-of-the-computer/4/78); compare [Eckert's account](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html), not the scavenger-hunt myth). Failures were real and costly. Each tube also dissipates real heat — rooms full of them needed serious cooling — so the machine was powerful for its era and brutally expensive to keep running.

That sets up the next post. The transistor did not win because engineers were clever for cleverness's sake. It won because the tube's own physics — heat, size, and the fragile vacuum envelope — put a hard ceiling on how far this approach could scale.

