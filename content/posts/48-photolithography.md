---
title: "Photolithography"
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 48
tags: []
summary: "Diffraction forces shorter wavelengths — EUV's mirrors and tin plasma are what kept feature sizes moving"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

Every transistor on a modern chip — billions of them, denser than Post 47's node labels can honestly name — has to be *patterned* onto silicon. Photolithography is that patterning, and the push to EUV (extreme ultraviolet) is one of the hardest engineering chains under the semiconductor industry.

## Print With Light, Then Build

Coat the wafer with photoresist; shine light through a patterned mask; chemically change the resist where light hits so it can be selectively removed or kept. Etch, deposit, and dope use that pattern to place transistor structures. At root it is precision photographic printing — at a resolution diffraction will not casually allow.

## Diffraction Forces Shorter Wavelengths

How small a feature you can resolve is tied to wavelength: shorter light, finer pattern. That physical ceiling is why the industry spent decades walking down the spectrum — ultraviolet, then deep ultraviolet (DUV, around 193 nm), then extreme ultraviolet (EUV, around 13.5 nm) — each step buying the finer features Post 47's shrinking labels gesture at.

## Why EUV Was Exceptionally Hard

At EUV wavelengths, ordinary tricks fail. **Generating the light** means hitting molten tin droplets with a high-power laser tens of thousands of times per second so the resulting plasma emits usable EUV. **Focusing it** cannot use glass lenses — EUV is absorbed by essentially all conventional optics and by air — so the path is multilayer mirrors in near-vacuum. A production EUV scanner is among the most complex manufacturing tools ever built; commercially, ASML has been the sole supplier of those production tools.

Without that wavelength step, the finer FinFET and Gate-All-Around structures of the next post would not be producible at acceptable yield and cost. Diffraction set the constraint; tin plasma and mirrors were the forced architecture.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
