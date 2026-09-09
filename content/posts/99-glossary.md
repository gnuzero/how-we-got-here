---
title: "Glossary"
weight: 99
date: 2026-01-01
draft: false
phase: "Reference"
series_index: 99
tags: ["glossary", "reference"]
summary: "Key terms used throughout the series, defined precisely"
---

# Glossary

A concise reference for the most important terms that appear across *From Relays to Attention*.

**Attention (Self-Attention)**  
A mechanism that computes, for every position in a sequence, a weighted sum of value vectors from all positions. Weights come from the similarity between query and key vectors. The core computational pattern of the Transformer.

**Branch Prediction**  
Hardware speculation about the direction of conditional branches so that the pipeline can keep fetching and executing instructions without waiting for the condition to be resolved.

**Cache**  
A small, fast memory that holds recently used data or instructions so the processor does not have to wait for the much slower main memory on every access.

**Chiplet**  
A smaller die that is packaged with other chiplets to form a larger logical processor or accelerator. Used to improve manufacturing yield at advanced process nodes.

**Combinational Logic**  
Logic whose outputs depend only on the current inputs (no memory of previous state). Built from gates; the opposite of sequential logic.

**CUDA**  
NVIDIA’s parallel computing platform and programming model that allows general-purpose code to run on GPUs.

**Datapath**  
The collection of functional units (ALUs, registers, multiplexers, etc.) that perform the actual arithmetic and data movement of an instruction.

**FinFET**  
A transistor structure in which the channel is a vertical “fin.” Succeeded planar MOSFETs and was itself succeeded by Gate-All-Around (GAA) devices at the most advanced nodes.

**Instruction Set Architecture (ISA)**  
The interface between software and hardware: the set of instructions a processor can execute, together with the registers, memory model, and calling conventions.

**Matrix Multiply-Accumulate (MAC)**  
The operation \(D = A \times B + C\). The dominant arithmetic pattern in modern neural networks and the reason specialized units (tensor cores, systolic arrays) exist.

**Moore’s Law**  
The observation (and for decades the industry target) that the number of transistors on a cost-effective chip roughly doubles every two years.

**Out-of-Order Execution**  
A microarchitectural technique in which instructions are executed as soon as their operands are ready, rather than strictly in program order, to hide latency.

**Pipeline**  
Breaking instruction execution into stages so that multiple instructions can be in different stages of completion at the same time, increasing throughput.

**Relay**  
An electromechanical switch: a coil that, when energized, moves a contact. The switching primitive of early digital computers (Zuse Z3, etc.).

**RISC / CISC**  
Reduced vs Complex Instruction Set Computer. Two different philosophies of ISA design; modern high-performance designs have largely converged in practice.

**Sequential Logic**  
Logic that has memory (flip-flops, latches, registers). Its outputs depend on both current inputs and previous state.

**Systolic Array**  
A regular grid of processing elements that rhythmically compute and pass data to neighbors. Extremely efficient for dense matrix multiplication.

**Tensor Core**  
Specialized matrix-multiply hardware units first introduced in NVIDIA’s Volta architecture (2017). Designed for the mixed-precision matrix operations common in deep learning.

**Transformer**  
The neural network architecture introduced in “Attention Is All You Need” (2017). Built primarily from self-attention and feed-forward layers; the foundation of modern large language models.

**Vacuum Tube (Valve)**  
An electronic switch/amplifier that predates the transistor. Used in the first electronic digital computers (ENIAC, etc.). High power, large size, limited reliability.

**Virtual Memory**  
A memory management technique that gives each process the illusion of a large, contiguous address space while the hardware and operating system map those addresses onto physical RAM and secondary storage.
