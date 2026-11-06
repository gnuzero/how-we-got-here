---
title: "The Jacquard Loom"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Punched cards made a program separate from the machine that runs it"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage did not invent punched-card control. He borrowed it.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Narrow Jacquard loom at the Musée d'art et d'industrie, Saint-Étienne" loading="lazy" width="1280">
<figcaption>Jacquard loom, Musée d'art et d'industrie, Saint-Étienne. Photo: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

Joseph-Marie Jacquard's loom attachment (patented 23 December 1801, per the [Musée des Arts et Métiers](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard)) took over the drawloom's draw boy: it used a chain of punched cards to decide which threads lifted at each pass of the shuttle: hole → lift, no hole → block. Change the cards, change the pattern. The loom did not know "silk brocade"; it executed a fixed, physically encoded sequence of lift/no-lift decisions.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Close-up of Jacquard loom punched cards at the Museum of Science and Industry, Manchester" loading="lazy" width="249">
<figcaption>Punched cards on a Jacquard loom (Museum of Science and Industry, Manchester). Photo: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, public domain.</figcaption>
</figure>

That is the abstraction Babbage adopted for the Analytical Engine: a program is a sequence of instructions, separate from the machine that runs them.

Ada Lovelace saw what that separation implied. The machine could manipulate *any* symbols — not just numbers — if you designed the right cards. Her notes on Menabrea's Analytical Engine paper include what is often called the first published computer program (Bernoulli numbers).

**Door out:** Ada Lovelace's *Notes* on the Analytical Engine (on Menabrea's translation) — the primary text for the Bernoulli-numbers sketch and the "any symbols" argument. Map: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine).

Next: why this mechanical chapter still shapes everything after — and why gears alone could not scale.

