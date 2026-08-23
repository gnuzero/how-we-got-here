---
title: "Moore's Law"
date: 2026-01-01
draft: true
phase: "8 — Process Nodes & Fabrication"
series_index: 50
tags: []
summary: "What's actually slowing, what's still scaling"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

"Moore's Law" gets invoked constantly, and just as constantly gets declared dead, revived, and reinterpreted — often without precision about what the original observation claimed versus what has actually changed. Untangling that is worth doing directly, especially after the last several posts' look at what has been getting harder.

## What Moore Actually Observed

Gordon Moore's original 1965 observation was specifically about transistor *count*: the number of transistors that could be economically fabricated on a single chip was roughly doubling every year (later revised to roughly every two years). Notice what this claim is *not* about — it says nothing directly about clock speed, nothing directly about single-thread performance, and nothing about cost per transistor beyond the word "economically." Those are separate, related trends often loosely bundled under "Moore's Law" in popular usage, but they are distinct metrics with distinct underlying drivers.

## Transistor Count: Still Climbing

Measured strictly as Moore originally framed it — transistors per chip — the trend has held up remarkably well for decades, and continues climbing today, driven by the lithography and transistor-structure advances in Posts 48 and 49. Modern high-end chips contain many billions of transistors — an almost incomprehensible increase from the roughly 2,300 transistors on Intel's 4004 (Post 18) just over five decades earlier.

## Clock Speed: Flattened, for the Reasons Post 36 Covered

Clock frequency, by contrast, climbed steeply alongside transistor count for decades and then flattened starting around 2005 — not because transistor scaling stopped, but because of the power/thermal wall covered in Post 36. Conflating "Moore's Law" with "chips keep getting faster in the simple, single-thread sense" is a category error: transistor count kept climbing through the clock-speed plateau, and the industry's response — as Post 17 covers — was to spend those additional transistors on more cores and more specialized on-chip functionality, not on pushing a single core's clock further.

## Cost Per Transistor: The Metric That's Struggled Recently

The third, less-discussed dimension is cost per transistor — and this is where recent challenges are most concrete. EUV lithography (Post 48) is extraordinarily expensive to acquire and operate, and each successive process-node generation has required increasingly elaborate, costly manufacturing techniques to keep pushing density further. For a stretch of decades, cost per transistor fell alongside rising transistor count — smaller transistors meant more of them per wafer, driving cost per transistor down even as absolute chip cost held roughly steady or grew modestly. At the most leading-edge nodes today, that relationship has weakened — the newest nodes aren't necessarily delivering cost-per-transistor improvements at the same historical rate, even though raw transistor density keeps climbing.

## The Honest Summary

Transistor count: still scaling, driven by ongoing lithography and transistor-structure advances. Clock speed: flattened since the mid-2000s, for well-understood thermal reasons covered in Post 36. Cost per transistor: still improving in absolute terms at most nodes, but with well-documented recent friction at the very leading edge. All three trends get casually lumped under "Moore's Law," but treating them as one metric obscures what's still working versus what's gotten harder — a distinction this entire phase has been building toward making precise.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
