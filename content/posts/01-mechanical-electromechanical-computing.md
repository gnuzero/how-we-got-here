---
title: "Mechanical & Electromechanical Computing"
weight: 2
date: 2026-01-01
draft: true
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 1
tags: []
summary: "Gears forced the idea of a program; friction forced electricity"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

Computing didn't start with electricity. It started with gears.

## Babbage's Engines

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Charles Babbage's Difference Engine No. 2 at the Science Museum, London" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London). Photo: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

In 1822, Charles Babbage proposed the Difference Engine — a mechanical calculator for polynomial functions, using the method of finite differences, entirely through interlocking gears and column wheels. No electricity. Each column was a digit; carrying a "1" was a physical event: a gear tooth catching and turning its neighbor.

He never finished a full-scale Difference Engine — funding and manufacturing tolerances both fought him — but his follow-up, the Analytical Engine, is the real ancestor. It had a "store" (memory) and a "mill" (arithmetic unit), and it was programmable. Instructions came from punched cards, borrowed from industrial machinery already on the factory floor.

## The Jacquard Loom

That machinery was the Jacquard loom. Joseph-Marie Jacquard's early-1800s drawloom used a chain of punched cards to decide which threads lifted at each pass of the shuttle: hole → lift, no hole → block. Change the cards, change the pattern. The loom did not know "silk brocade"; it executed a fixed, physically encoded sequence of lift/no-lift decisions.

That is the abstraction Babbage adopted: a program is a sequence of instructions, separate from the machine that runs them. Ada Lovelace saw what that separation implied — the machine could manipulate *any* symbols, not just numbers, if you designed the right cards. Her notes on Menabrea's Analytical Engine paper include what is often called the first published computer program (Bernoulli numbers).

**Door out:** Ada Lovelace's *Notes* on the Analytical Engine (on Menabrea's translation) — the primary text for the Bernoulli-numbers sketch and the "any symbols" argument.

## Why This Matters for Everything After

Instruction sets, stored programs, control separated from datapath — all of them have roots here. The medium changes completely (relays, tubes, transistors); the logical shape does not: a sequence of instructions, an execution unit, a store that holds state between steps.

What mechanical computing *could not* do was scale. Gear trains have friction, backlash, and tolerance stack-up; every extra digit of precision made the machine harder to build reliably. That ceiling — not a lack of ideas — is what pushed computing toward electrical switching. Next: relays, and the electromechanical logic that carried the architecture into WWII.

