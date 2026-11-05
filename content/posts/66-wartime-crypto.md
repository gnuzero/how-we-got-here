---
title: "Wartime Crypto"
weight: 69
date: 2026-09-06
draft: false
phase: "Crypto & Wartime Computing"
series_index: 68
tags: []
summary: "Enigma, Bletchley, and Colossus — why breaking ciphers forced electronic computing"
image_prompt: "Clean historical-technical diagram: Enigma rotors beside a Colossus rack of vacuum tubes at Bletchley, connective arrows from cipher traffic to electronic counting, muted wartime-engineering style"
video_prompt: "20-second animation: Enigma rotors stepping, intercept traffic flooding in, electromechanical Bombe searching, then Colossus tubes counting at electronic speed, clean technical motion graphics"
schematics: "Diagram: Enigma rotor stepping → Bombe search → Colossus electronic counting, bridging Posts 02–03"
---

Posts 01–02 show gears and relays proving that automatic computation was possible. The war made that possibility *urgent*: cipher traffic arrived faster than any human room could read, and the machines that could keep up dragged computing out of electromechanics into electronics.

This is connective tissue between **secrecy as a workload** and the vacuum-tube machines in Post 03 — not a second history of the war.

## Enigma Was a Moving Target

The German Enigma family encrypted operational traffic with rotors that stepped as you typed, so the substitution changed with every letter. Breaking one message did not buy you the next day for free. Before the war, Polish Cipher Bureau mathematicians — Marian Rejewski, with Jerzy Różycki and Henryk Zygalski — reconstructed Enigma's internal wiring from limited intercepts and documents, then shared that foundation with the British and French. Door out: Rejewski's own accounts and the Polish–Allied transfer histories held by museums and archives, not a Wikipedia paraphrase.

At Bletchley Park, Alan Turing (Hut 8) and colleagues turned that mathematical break into industrial search: the British Bombe (with Gordon Welchman's diagonal board among the key design improvements) ran Enigma settings as electromechanical possibility-space search. Relays and drums could *hunt*. They could not count ciphertext at the speed the later teleprinter ciphers demanded.

## Colossus: When the Workload Outran Metal

Lorenz teleprinter ciphers ("Tunny") produced a different problem: long streams that needed statistical attack at electronic speed. Max Newman organized the Newmanry around that attack. Tommy Flowers, a Post Office engineer who already trusted vacuum tubes in telephone switching, built **Colossus** (the first machine was delivered to Bletchley Park in January 1944 and attacked its first message on 5 February 1944, per Flowers' diary as cited by Copeland and per Crypto Museum; TNMOC gives late December 1943 / January 1944 for delivery and early February 1944 for working; Mark II followed from June 1944) — racks of tubes reading paper tape and counting toward breakable settings.

Name the constraint, not the mythology: Colossus was special-purpose cryptanalytic electronics, not a general stored-program computer. What it *forced* was the proof that large numbers of tubes could be wired into a reliable-enough machine that beat any relay farm on that workload. That is the same physical bet Post 03 unpacks — no moving contacts in the switch — under wartime pressure instead of peacetime research leisure.

Door out: [The National Museum of Computing](https://www.tnmoc.org/) (Colossus rebuild and primary material); Tommy Flowers and Max Newman in the scholarly Colossus literature (e.g. Copeland's edited histories); Bletchley Park's own archival guides for Enigma/Bombe.

## Why This Belongs Before the Transistor Argument

Read the spine forward:

- **Post 02** — relays prove binary logic and also prove moving metal is too slow.
- **This post** — a real workload (cipher search and stream counting) makes "too slow" operationally unacceptable.
- **Post 03** — tubes remove the mechanical motion; ENIAC-scale machines inherit the electronic switch under different programs.
- **Post 04** — tubes then hit *their* ceiling (heat, power, failure), which is why the transistor had to happen.

Wartime crypto did not invent computing. It made the jump from electromechanical to electronic *non-optional* for one of the hardest information problems of the century — and left a trail of named people who did the work. Optional side path; the main journey continues at Post 03.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->
