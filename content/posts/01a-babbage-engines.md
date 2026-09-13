---
title: "Babbage's Engines"
weight: 2
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 1
tags: []
summary: "Difference Engine and Analytical Engine — store, mill, and a program on cards"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

Computing didn't start with electricity. It started with gears.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Charles Babbage's Difference Engine No. 2 at the Science Museum, London" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London). Photo: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

In 1822, Charles Babbage proposed the Difference Engine — a mechanical calculator for polynomial functions, using the method of finite differences, entirely through interlocking gears and column wheels. No electricity. Each column was a digit; carrying a "1" was a physical event: a gear tooth catching and turning its neighbor.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Close-up of Difference Engine No. 2 carry arms between digit columns" loading="lazy" width="1280">
<figcaption>Carry arms between digit columns on Difference Engine No. 2, Serial #2 (Computer History Museum). Photo: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Try this now.** Step the lab from Y=9, Δ₁=7. The ones wheel rolls past 9; a tooth catches tens. 9+7 becomes 16. That is finite differences doing x² — the method the engine was built for.

{{< lab type="difference-engine" height="720" >}}

Original for this book, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). A pedagogical column model, not a full No. 2 reconstruction.

He never finished a full-scale Difference Engine. Funding fought him; so did the manufacturing tolerances of the era. Every extra digit of precision meant another chance for friction, backlash, and stack-up to ruin the result.

His follow-up, the Analytical Engine, is the real ancestor of the modern computer. It had a "store" (memory) and a "mill" (the arithmetic unit), and it was programmable. Instructions came from punched cards — an idea borrowed from industrial machinery already on the factory floor.

The hosted emulator below is John Walker's Fourmilab Analytical Engine. Step the cards and watch the mill and store columns change. Public domain; we host a copy and keep the origin link.

{{< lab type="analytical-engine" height="780" >}}

Origin: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip) (public domain). Maps: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

That borrowing is the next stop: the Jacquard loom, and the separation of program from machine.

<!--
ASSET CHECKLIST
[x] Hero: CC BY 2.0 Commons hotlink (Marcin Wichary / Difference Engine No. 2) — not hosted
[x] Carry close-up: CC BY 2.0 Commons hotlink (Jitze Couperus)
[x] Lab: original difference-engine carry (CC BY 4.0)
[x] Lab: hosted Fourmilab Analytical Engine (public domain) — static/labs/analytical-engine/
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->
