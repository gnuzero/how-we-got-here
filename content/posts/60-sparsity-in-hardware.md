---
title: "Sparsity in Hardware"
weight: 63
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 62
tags: []
summary: "Skip known-zero MACs — but only structured patterns are cheap for dense MAC hardware to exploit"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

Post 59 made each operation cheaper via reduced precision. Sparsity is the complementary lever: skip operations that contribute nothing — multiplications where an operand is already zero.

## Why Networks Are Often Sparse

Trained networks often have many weights near zero — from training dynamics, or from deliberate pruning that pushes more weights to exact zero for a smaller, cheaper model at a small accuracy cost. Zero times anything is a no-op; skipping that MAC saves real time and energy at the scale modern models run.

## Unstructured vs Structured

**Unstructured** sparsity scatters zeros arbitrarily. Dense matmul hardware (tensor cores, systolic arrays) is built for regular work; skipping arbitrary zeros needs control complexity that can erase the savings.

**Structured** sparsity forces a hardware-friendly pattern — commonly 2:4: in every group of four weights, exactly two are zero (positions may vary; the *count* is fixed). Predictable structure is what specialized hardware can skip with modest, regular control logic.

## The Payoff — and the Gap

Hardware with structured-sparsity support can, on 2:4 weight matrices, advertise up to 2× math throughput versus dense. Real GEMMs often land closer to ~1.3–1.8×; end-to-end networks nearer ~1.3–1.5×, limited by kernels, memory, and accuracy-preserving prune/retrain. Still the Post 57 theme: once you know which computation is structurally unnecessary, silicon can be built to skip it — even if theory and production stay apart.

## Compose With Precision

Sparsity and reduced precision are not alternatives. Modern accelerators often exploit both: lower-precision, structurally sparse MACs — cheaper ops *and* fewer of them — inside the same fixed area and power budget.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
