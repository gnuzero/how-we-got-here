---
title: "Semiconductors from First Principles"
date: 2026-01-01
draft: true
phase: "2 — Physics & Devices"
series_index: 5
tags: []
summary: "Band gaps, doping, and why silicon won"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

Silicon isn't special because it's magic — it's special because its band structure sits in exactly the right place to be *controllable*.

## Band Gaps, Concretely

Electrons in a solid occupy energy bands. In a conductor (say, copper), the valence band and conduction band overlap — electrons are free to move at the slightest push, which is why metals conduct so well and are so hard to switch off. In an insulator, there's a large forbidden gap between the two bands — electrons simply don't have enough thermal energy at room temperature to jump across it, so current essentially doesn't flow. A semiconductor sits in between: the gap exists (about 1.1 eV for silicon) but it's small enough that a *modest* amount of energy — thermal energy at room temperature, or optical excitation — can promote electrons into the conduction band. Separately, an applied electric field can bend the bands and move carriers, which is how field-effect devices control conduction without needing to "jump" the gap thermally.

That "modest and controllable" property is the entire point. A conductor can't be switched off with reasonable voltages. An insulator can't be switched on. A semiconductor can be pushed into either regime, which is exactly what a transistor needs to do.

## Why Silicon, Specifically

Germanium was actually the first practical semiconductor used in transistors (Bell Labs, 1947) — but silicon won the long game for a few concrete reasons. Silicon's band gap (1.1 eV) is wider than germanium's (0.67 eV), which means silicon devices function correctly at higher temperatures before thermal generation of carriers swamps the intended signal — a real problem for germanium in anything that got warm, which is essentially every real circuit. Silicon also forms a high-quality silicon dioxide (SiO₂) layer when thermally oxidized — far more stable and electrically quiet at the Si/SiO₂ interface than germanium's oxides. That thermally grown oxide became the insulating gate dielectric of the MOSFET (Post 6 covers this directly). And silicon is, practically speaking, sand — it's the second most abundant element in the Earth's crust, which matters enormously once you're trying to manufacture at any real volume.

## Doping: Making the Semiconductor Do Something Useful

Pure ("intrinsic") silicon isn't very useful on its own — it conducts poorly and uniformly. The trick is doping: deliberately introducing trace impurities into the crystal lattice to control carrier concentration and type.

Add a phosphorus atom (5 valence electrons) into a silicon lattice (4 valence electrons per atom) and you get one extra, loosely-bound electron per phosphorus atom — a free negative carrier. This is N-type silicon; phosphorus is a "donor." Add boron instead (3 valence electrons) and you get a missing bond — a "hole" — which behaves like a mobile positive carrier. This is P-type silicon; boron is an "acceptor."

Neither N-type nor P-type alone is a switch. The switch comes from putting them *together* — a P-N junction — which is the basic building block of every diode and transistor that follows. Post 6 picks up exactly there: how a junction (or a gate-controlled channel, in a MOSFET) turns doped silicon into something that can be turned on and off by an external signal.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
