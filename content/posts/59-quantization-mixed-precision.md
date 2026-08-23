---
title: "Quantization & Mixed Precision"
date: 2026-01-01
draft: true
phase: "10 — Modern AI Hardware"
series_index: 59
tags: []
summary: "INT8/FP8 and why hardware chases numerics"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

Post 55 flagged a load-bearing connection worth returning to in full: tensor-core (and systolic-array) hardware efficiency is deeply coupled to the numerical precision it is asked to operate at. This post covers why lower precision has become such a central lever in modern AI hardware and software design — and what is actually being traded away to get it.

## What "Precision" Means Here, Concretely

Numbers in a computer are represented with a finite number of bits, and different formats trade off range and precision differently. FP32 (32-bit floating point) is the traditional default for scientific and general-purpose computing — a sign bit, 8 exponent bits (determining representable range), and 23 mantissa bits (determining precision within that range). FP16 (16-bit) and BF16 (Brain Float 16, also 16-bit but allocating those bits differently — same exponent range as FP32, fewer mantissa bits, prioritizing dynamic range over fine-grained precision) use half the bits. FP8 pushes further still, and INT8 abandons floating-point representation entirely in favor of fixed-point integer values, typically requiring an additional scaling factor to map back to the meaningful range the original computation needs.

## Why Fewer Bits Directly Means More Hardware Throughput

Post 6 and Post 7 established that transistor count and circuit area scale with the complexity of what is being computed. A multiply-accumulate unit built for FP32 arithmetic requires meaningfully more transistors, more silicon area, and more power per operation than an equivalent unit built for FP16 or INT8 — narrower operands need correspondingly less hardware to process. Given a fixed silicon area and power budget (Post 36's clock-speed-wall discussion again — power is still a hard constraint even for AI-specific accelerators), a chip built to operate at lower precision can pack in proportionally more parallel multiply-accumulate throughput within that same budget. That is a direct physical reason — not a purely algorithmic or software-level choice — that lower-precision arithmetic delivers real hardware throughput gains, and it connects straight back to why tensor cores and systolic arrays are frequently designed around specific lower-precision formats in the first place.

## What Gets Traded Away

Reduced precision means reduced numerical accuracy — smaller representable range, coarser gaps between representable values, and more accumulated rounding error across a long chain of computations. For neural network training and inference specifically, it turns out — somewhat counterintuitively, and validated extensively through empirical research rather than being obvious in advance — that many models tolerate significantly reduced precision remarkably well, particularly for inference (running an already-trained model) and, with appropriate care, even substantial portions of training itself.

## Mixed Precision: Using Different Formats for Different Parts of the Computation

Mixed-precision training and inference does not uniformly commit to one precision throughout. Instead it strategically uses lower precision (FP16 or BF16, commonly) for the bulk of the compute-heavy matrix multiplications, where reduced precision meaningfully speeds up hardware throughput, while retaining higher precision (often FP32) for numerically sensitive operations — like accumulating results across many additions where rounding error could otherwise compound into a problematic accuracy loss. That strategic mixing — full precision only where it is genuinely needed, reduced precision everywhere the hardware throughput gain outweighs the accuracy cost — is precisely why the term is "mixed" precision rather than simply "low" precision: a deliberate, workload-aware engineering tradeoff, not a blanket reduction applied indiscriminately everywhere.

## Where This Connects Next

Precision reduction is one major lever hardware designers pull to fit more effective compute into a fixed power and area budget. The next post covers a complementary lever — sparsity — which takes a different approach to the same goal: rather than making every individual operation cheaper (this post's approach), sparsity aims to skip performing certain operations entirely, when their result is already known (or close enough) to be zero and therefore not worth computing.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
