---
title: "Relays and Electromechanical Logic"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 6
aliases:
  - /posts/02-relays-and-electromechanical-logic/
tags: []
summary: "Relays proved binary logic works — and that moving metal cannot keep up"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

A relay is almost embarrassingly simple: an electromagnet, a spring-loaded armature, a set of contacts. Energize the coil, the armature pulls in, the contacts open or close. For roughly a decade and a half, that was computing's switching primitive.

## Two jobs for the same part

In this chapter a **relay** is a switch: a weak coil opens or closes a stronger circuit, and later it becomes a building block for AND, OR and NOT. On a telegraph line a relay does a different job. A weak signal arriving over a long wire switches a fresh local current, so the message can go farther. Same family of parts, two jobs. In 1835 at Princeton, Joseph Henry built an early relay in which a small "intensity" magnet controlled a larger "quantity" magnet. The Smithsonian treats that as the principle behind the repeater Morse's telegraph used. We don't call Henry the sole inventor of the relay. ([Smithsonian Institution Archives, Joseph Henry](https://siarchives.si.edu/collections/siris_sic_12484))

### Before the wire: messages on wings

Moving a message in hops is older than electricity. Frontinus records that during the siege of Mutina (43 BC), Hirtius kept pigeons in the dark without food, tied letters to their necks and released them near the city walls; the birds made for the highest buildings, where Brutus collected the letters. ([Frontinus, *Strategemata* 3.13.8](https://penelope.uchicago.edu/thayer/e/roman/texts/frontinus/strategemata/3*.html))

On 28 April 1850, Paul Julius Reuter started a pigeon service between Aachen and Brussels with 45 birds bought from Heinrich Geller, to cover a stretch the telegraph had not yet reached. On 14 June 1851 he arrived in London, having run a news service that combined telegraph cables and carrier pigeons. It was store-and-forward across a missing segment. ([The Baron, Reuters history](https://www.thebaron.info/archives/history))

### The electric message

Cooke and Wheatstone patented their telegraph on 10 June 1837 and had it working at Euston Square on the London and Birmingham Railway by 6 September 1837. ([Distant Writing, Cooke & Wheatstone](https://www.distantwriting.co.uk/cookewheatstone.html)) Morse and Vail's official Washington–Baltimore demonstration ran on 24 May 1844. Annie Ellsworth chose the message: "What hath God wrought." ([U.S. Senate history](https://www.senate.gov/artandhistory/senate-stories/morses-telegraph-in-the-capitol.htm))

Back to the relay as logic.

## Relays as Logic

Wire two contacts in series and you have AND: current only if *both* are closed. Wire them in parallel and you have OR. Add a normally closed contact and you get NOT. Combine those and you can build any boolean function — adders, comparators, decoders — the same logic families Phase 2 builds in silicon, here in electromechanical hardware.

Telephone exchanges were already full of relays by the early 20th century, routing calls with exactly this kind of combinational switching. That industrial base — mass-produced, well-understood, reliable-enough — is a big reason relay computers were buildable at all. Konrad Zuse's Z3 (1941) is the standout: roughly 2,000–2,600 relays, binary floating-point, a program on punched celluloid film. It is often called the first working programmable, fully automatic digital computer — with one caveat worth naming: the Z3 lacked true conditional branching. Raúl Rojas showed in 1998 that it is Turing-complete *in principle*, by having the program compute every possible branch outcome rather than branch at runtime.

**Door out:** Raúl Rojas, "How to Make Zuse's Z3 a Universal Computer" (1998) — the careful argument for Z3 Turing-completeness and its limits.

## Why Relays Were Too Slow

A relay's switching time is dominated by *mechanical* motion: the armature has to move — on the order of milliseconds. The Z3 ran at roughly 5–10 Hz (often cited around 5.3 Hz). Set that next to a modern CPU at billions of cycles per second and the gap is not incremental; it is existential. You cannot build a useful modern computer out of mechanical switches, no matter how well engineered.

Second problem: contacts wear. Every closure is metal on metal — arcing, pitting, eventual failure. Thousands of relays means thousands of wear points. Reliability and speed were fighting the same constraint: moving parts.

## The Bridge to Electronics

Relays proved the architecture: binary representation, boolean gates from simple switches, programs as data. What they could not prove was that the architecture could run *fast*. Solving that meant replacing the mechanical switch with something that changed state by moving electrons instead of metal — the vacuum tube, at the cost of enormous power and heat. That tradeoff is next.

