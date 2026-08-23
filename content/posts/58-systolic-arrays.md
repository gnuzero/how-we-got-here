---
title: "Systolic Arrays"
date: 2026-01-01
draft: true
phase: "10 — Modern AI Hardware"
series_index: 58
tags: []
summary: "TPUs and the alternative to GPU-style compute"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

Post 55 covered tensor cores — specialized matrix-multiply hardware embedded within an otherwise general-purpose GPU. Systolic arrays take the specialization idea further: an entire chip architecture, from the ground up, organized around streaming data through a grid of simple processing elements for matrix multiplication — Google's TPU (Tensor Processing Unit) being the most prominent real-world example.

## The Core Idea: Data Flows, Computation Happens Along the Way

A systolic array is a 2D grid of simple processing elements, each capable of a basic multiply-accumulate operation, arranged so that data — both input activations and weight values — flows through the grid in a coordinated, rhythmic pattern. Each processing element performs its multiply-accumulate step as data passes through it, then forwards both its result and the data it received onward to its neighbors. The name "systolic" is a deliberate reference to the rhythmic pumping of a heart — data pulses through the array in a coordinated wave, rather than being fetched and processed by a central, shared control path the way conventional architectures typically operate.

## Weight-Stationary Dataflow

A common systolic array design keeps weight values *stationary* — loaded into each processing element once and held there — while input activation data streams through the array, multiplied against each element's stationary weight as it passes, with partial sums accumulating and propagating through the grid. The payoff is direct: once loaded, weights need not be re-fetched from memory on every multiply-accumulate — they sit in place, locally, while activation data streams past them. Given how central the memory-bandwidth concerns from Post 35 and Post 54 have been throughout this series, that matters enormously. Minimizing how often data must move to and from memory — by keeping frequently reused values (the weights) physically resident at the compute site — is exactly the kind of data-movement reduction that memory-bandwidth-constrained systems benefit from most.

## Why This Differs From a GPU's Tensor Cores

A GPU's tensor cores are embedded within a broader, still fundamentally general-purpose SIMT architecture (Posts 52–53) — capable of running a wide range of parallel workloads beyond matrix multiplication, with tensor cores as a specialized accelerator *within* that flexible architecture. A systolic-array chip like a TPU makes a more aggressive, narrower bet: the *entire* chip is organized around efficient matrix multiplication, with correspondingly less flexibility for the varied parallel workloads a general-purpose GPU can also handle well.

This is a real architectural tradeoff, not simply "TPU is strictly better" or "GPU is strictly better." A systolic array can achieve excellent efficiency for the matrix-multiply-dominated workloads it is built around, at some cost to flexibility for workloads that do not fit that shape as cleanly. GPUs, retaining more general-purpose flexibility, can handle a wider variety of parallel workloads — including plenty of non-matrix-multiply compute — at some cost relative to a systolic array's efficiency on the narrow matrix-multiply case it is most aggressively optimized for.

## The MXU: A Systolic Array as One Component

In Google's TPU architecture specifically, the Matrix Multiply Unit (MXU) is the systolic array component handling the bulk of matrix-multiply throughput, integrated alongside supporting logic (control, memory interfaces, vector units for the non-matrix-multiply portions of a workload) into a complete, deployable chip — the systolic array is the specialized heart of the design, not the entirety of the chip's logic. That pairing of a highly specialized core compute structure with surrounding general-enough supporting logic is a recurring pattern across essentially every specialized accelerator covered in this final phase.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
