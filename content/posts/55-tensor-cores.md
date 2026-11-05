---
title: "Tensor Cores"
weight: 61
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 60
tags: []
summary: "Matrix multiply-accumulate became the dominant AI op — so hardware made it a first-class primitive"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

Post 53 covered CUDA cores — general-purpose SIMT lanes for a wide range of parallel work. Tensor cores are narrower: dedicated hardware for one operation — matrix multiply-accumulate — that dominates modern neural-network compute. Specialize for that op, and you beat doing the same work on general CUDA cores alone.

## Why Matrix Multiply

Fully connected layers, convolutions (reformulated as matmul), and attention in transformers all reduce, at their core, to multiply-accumulate of matrices — at a scale where its efficiency dominates system performance. That concentration makes purpose-built silicon worthwhile.

## What a Tensor Core Does

A tensor core fuses a small fixed-size matrix multiply-accumulate — for example two 4×4 matrices into a third — as one hardware operation rather than a long sequence of separate multiply and add instructions through general CUDA cores. Fusion cuts per-op overhead (fetch, decode, operand routing) relative to useful arithmetic. Larger products are tiled: feed sub-blocks in sequence, accumulate partials — the coordination work that makes efficient deep-learning kernels its own craft.

## Precision Is Coupled to the Silicon

Tensor cores often run most efficiently at lower precisions (FP16, BF16, INT8, increasingly FP8). Narrower arithmetic needs less area and power per op, so a given budget packs more MAC throughput. Post 59 returns to this fully: precision reduction is not a pure software choice — it is coupled to how efficiently the underlying MAC hardware runs at each format.

## Not the Only Answer

Tensor cores are NVIDIA's answer inside an otherwise general GPU. Phase 10 covers systolic arrays — Google's TPU most prominently — built for the same matmul goal, organized differently at the hardware level. Same constraint; different architecture.

