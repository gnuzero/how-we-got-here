---
title: "Quantization & Mixed Precision"
weight: 60
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 59
tags: []
summary: "Fewer bits per MAC means more MACs in the same power budget — mix precision where accuracy still needs it"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

Post 55 flagged the coupling: tensor-core and systolic-array efficiency depends on the numerical precision they run. This post is why lower precision became a central lever — and what is traded away to get it.

## What Precision Means Here

Formats trade range against precision with a fixed bit budget. FP32 (sign, 8 exponent bits, 23 mantissa) is the traditional scientific default. FP16 and BF16 use half the bits — BF16 keeps FP32's exponent range and spends less on mantissa, favoring dynamic range over fine grain. FP8 goes further; INT8 drops floating point for fixed integers plus a scale factor back to the needed range.

## Fewer Bits, More Throughput

Posts 6–7 established that circuit area scales with what you compute. An FP32 MAC needs more transistors and power than FP16 or INT8. Given a fixed area and power budget (Post 36's wall still binds accelerators), lower precision packs more parallel MAC throughput into the same envelope. That is a physical reason — not only an algorithmic choice — that tensor cores and systolic arrays are often designed around specific lower-precision formats.

## What Is Traded

Reduced precision means coarser values and more rounding error across long chains. Empirically, many neural networks tolerate it well — especially for inference, and with care for large parts of training — which was not obvious in advance; it had to be shown.

## Mixed, Not Blanket Low

Mixed-precision training and inference use lower precision (often FP16 or BF16) for the heavy matmuls where hardware throughput gains, and keep higher precision (often FP32) for numerically sensitive work — like accumulations where rounding would compound. Full precision only where it earns its keep: that is why the term is *mixed*, not simply *low*.

## Next Lever

Precision makes each operation cheaper. The next post's sparsity aims to skip some operations entirely when a known zero would contribute nothing.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
