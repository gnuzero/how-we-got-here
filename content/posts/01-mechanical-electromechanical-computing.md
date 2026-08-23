---
title: "Mechanical & Electromechanical Computing"
date: 2026-01-01
draft: true
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 1
tags: []
summary: "Babbage's engines, Jacquard looms, and punch cards — computing before electricity"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

Computing didn't start with electricity. It started with gears.

## Babbage's Engines

In 1822, Charles Babbage proposed the Difference Engine — a mechanical calculator that could compute polynomial functions using the method of finite differences, entirely through interlocking gears and column wheels. No electricity, no logic gates in the modern sense — just precisely machined brass parts translating rotational position into numerical value. Each column represented a digit; carrying a "1" to the next column was a physical event, a gear tooth catching and turning its neighbor.

Babbage never finished a full-scale Difference Engine — funding and manufacturing tolerances of the era both fought him — but his more ambitious follow-up, the Analytical Engine, is the real ancestor of the modern computer. It had a "store" (memory) and a "mill" (the arithmetic unit), and critically, it was programmable. Instructions came from punched cards, an idea Babbage borrowed from an existing piece of industrial machinery.

## The Jacquard Loom

That machinery was the Jacquard loom. Joseph-Marie Jacquard's 1801 patent covered an improved drawloom; the punched-card pattern-control mechanism that earned the loom its name was perfected around 1804–05 and publicly recognized in 1805 (Napoleon made it public property of Lyon that April). Weaving complex patterns required controlling which threads lifted at each pass of the shuttle — traditionally the job of a "draw boy" manually pulling cords. Jacquard automated this with a chain of punched cards: a hole let a hook pass through and lift a thread, no hole blocked it. Change the cards, change the pattern. The loom didn't know what "silk brocade" meant; it just executed a fixed, physically-encoded sequence of lift/no-lift decisions.

That is the same abstraction Babbage adopted for the Analytical Engine: a program is a sequence of physically encoded instructions, separate from the machine that executes them. Ada Lovelace's notes on the Analytical Engine — including what is often called the first published computer program (computing Bernoulli numbers) — exist because she saw that separation meant the machine could manipulate *any* symbols, not just numbers, if you designed the right cards.

## Why This Matters for Everything After

Every idea covered later in this series — instruction sets, stored programs, the separation of control from datapath — has roots here. The physical medium changes completely (relays, then tubes, then transistors), but the logical shape doesn't: a sequence of instructions, an execution unit that carries them out, and a store that holds state between steps.

What mechanical computing *could not* do was scale. Gear trains have friction, backlash, and manufacturing-tolerance stack-up; every extra digit of precision made the machine harder to build reliably. That ceiling — not a lack of ideas — is what pushed computing toward electrical switching. Next: relays, and the electromechanical logic that carried computing into WWII.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
