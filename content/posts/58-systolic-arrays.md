---
title: "Systolic Arrays"
weight: 61
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 60
tags: []
summary: "Data pulses through a MAC grid — specialize the whole chip for matmul (TPUs)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

Post 55 covered tensor cores — specialized matmul hardware inside an otherwise general GPU. Systolic arrays push specialization further: an architecture organized around streaming data through a grid of simple processing elements for matrix multiplication. Google's TPU (Tensor Processing Unit) is the most prominent shipping example. The idea itself is older: **H. T. Kung** and **Charles E. Leiserson** named and formalized systolic arrays for VLSI in the late 1970s.

## Data Flows; Computation Happens Along the Way

A systolic array is a 2D grid of simple processing elements, each a multiply-accumulate, arranged so data moves in a coordinated rhythm. Each PE does a MAC as data arrives. In a weight-stationary design (as in Google's TPU MXU), weights are preloaded and held while activations stream across and partial sums propagate to neighbors — a systolic "heartbeat," not both operands freely roaming. The name deliberately echoes the heart's pulse: data moves in waves rather than being fetched through a central shared control path.

## Weight-Stationary Dataflow

Keep weights *stationary* — loaded once into each PE — while activations stream past, multiplied against the held weight, partial sums accumulating through the grid. Once loaded, weights need not be re-fetched every MAC. Given the memory-bandwidth pressure of Posts 35 and 54, that matters: keep the reused values at the compute site and cut data movement — the same constraint systolic design was built to answer.

## GPU Tensor Cores vs a Systolic Chip

Tensor cores sit inside a still-general SIMT architecture (Posts 52–53) that can run many parallel workloads beyond matmul. A systolic-array chip like a TPU makes a narrower bet: organize the *whole* chip around efficient matrix multiplication, with less flexibility for work that does not fit that shape. Neither is strictly better — efficiency on matmul-dominated loads versus flexibility on a wider parallel mix.

## The MXU as Specialized Heart

In Google's TPU, the Matrix Multiply Unit (MXU) is the systolic array that carries the bulk of matmul throughput, beside control, memory interfaces, and vector units for the non-matmul remainder. Specialized core plus supporting logic is the recurring pattern across the accelerators in this phase.

**Door out:** H. T. Kung and Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — the classic statement of rhythmic MAC arrays for matrix computation; a closely related form also appears in Mead and Conway's *Introduction to VLSI Systems* (1980).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
