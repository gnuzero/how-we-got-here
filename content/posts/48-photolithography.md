---
title: "Photolithography"
date: 2026-01-01
draft: true
phase: "8 — Process Nodes & Fabrication"
series_index: 48
tags: []
summary: "From UV to EUV, why EUV was so hard"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

Every transistor on a modern chip — billions of them, per Post 47's discussion of how dense modern processes have become — has to be *patterned* onto silicon somehow. Photolithography is that patterning process, and the move to EUV (Extreme Ultraviolet) lithography is one of the hardest engineering achievements underlying the modern semiconductor industry.

## The Basic Idea

Lithography works, at its core, like an extremely precise photographic printing process. A photosensitive material (photoresist) is coated onto the silicon wafer; light is shone through a patterned mask (or reticle) onto that photoresist; and wherever light hits, it chemically changes the resist so it can later be selectively removed (or retained, depending on resist type). That leaves a precise pattern that subsequent steps — etching, deposition, doping — use to build transistor structures in the locations the pattern specifies.

## Why Smaller Features Need Shorter Wavelengths

There's a hard physical limit at the core of this technology: diffraction limits how small a feature you can resolve, and that limit is tied to wavelength — shorter wavelength allows finer resolution. That is why the industry has spent decades pushing toward shorter wavelengths: from earlier ultraviolet lithography down toward Deep Ultraviolet (DUV, around 193nm) and, eventually, Extreme Ultraviolet (EUV, around 13.5nm) — each step enabling the finer feature sizes that Post 47's shrinking node names represent.

## Why EUV Was Exceptionally Hard

Getting to EUV wavelengths required solving problems that don't arise at longer wavelengths. **Generating the light** is itself a serious engineering challenge: EUV at the required wavelength is produced by hitting tiny droplets of molten tin with a high-power laser, vaporizing them into a plasma that emits EUV radiation — tens of thousands of times per second, with extreme precision, just to generate a usable light source.

**Focusing the light** is harder still: EUV wavelengths are absorbed by essentially all conventional optical materials, including ordinary glass lenses — you cannot build a refractive lens system for EUV the way you can for visible or even DUV light. The entire optical path has to use precisely figured *mirrors* (multilayer reflective coatings, since even ordinary mirror coatings absorb EUV too readily), operating in a near-vacuum because EUV is also strongly absorbed by ordinary air.

## What EUV Actually Enabled

Despite the difficulty and cost of EUV systems (a single EUV lithography machine, produced essentially exclusively by ASML — the sole commercial producer of production EUV scanners to date — is one of the most complex and expensive pieces of manufacturing equipment ever built), EUV's shorter wavelength enabled continued feature-size scaling well past what DUV alone could achieve. Without EUV, the finer transistor structures underlying Post 47's newest node names simply wouldn't be producible with acceptable yield and cost. Worth flagging as a live development: Reuters reported in December 2025 that a Shenzhen-based team had completed a prototype EUV system, still in testing, targeting production by 2028 — the first real challenge to ASML's monopoly if it materializes, though 2030 is seen as a more realistic timeline even by optimistic accounts. The causal chain is direct: EUV's wavelength reduction is the physical enabler that let transistor structures keep shrinking into the FinFET and Gate-All-Around era the next post covers.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
