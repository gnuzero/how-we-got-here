---
title: "Real-Time Systems in Practice"
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 30
tags: []
summary: "Sense–compute–actuate on a fixed budget — avionics and industrial control where Phase 3's speed tricks become timing enemies"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

Post 29 covered the theory: hard vs soft deadlines, rate-monotonic scheduling, why "fast" and "real-time" differ. This post is where those guarantees get deployed — and what building for them looks like in practice.

## Avionics: Missed Deadline as Catastrophe

Flight control is the canonical hard-real-time example for good reason. A fly-by-wire stability-augmentation loop reads sensors, computes control-surface adjustments, and issues actuator commands on a fixed, tight cycle. Miss the deadline and control response can become unstable, sometimes within a very short window. Avionics software is built to standards like DO-178C that demand rigorous timing analysis — not "usually meets deadlines," but evidence that it *always* does under certified operating conditions (objectives scale by assurance level; the spine is worst-case discipline, not average-case hope).

## Industrial Automation: Coordinated Continuous Control

A production line — robotic arms, conveyor timing, quality-control sensors — runs the same closed-loop pattern: sense, compute, actuate, repeat, often on a millisecond cycle. Miss a deadline here and the failure is usually less catastrophic than in avionics, but still serious — a late position command relative to a moving part can mean collision, a dropped piece, or damage to expensive equipment.

## The Shared Architecture: Closed-Loop Control

Both domains share a pattern worth naming: **sense** (current state from sensors), **compute** (correct response — often a PID or similar control-theory algorithm), **actuate** (motor signal, surface deflection), repeated on a fixed period. The real-time guarantee covers the *entire* loop end to end — sensor latency, computation, and actuation all count against the same budget. A blazing control algorithm still fails if sensor I/O or actuator communication injects unpredictable delay elsewhere in that loop.

## Why General-Purpose Hardware Often Isn't Enough

Real-time systems frequently run on dedicated microcontrollers rather than general-purpose CPUs under a general-purpose OS. Simpler, more predictable architecture — often no caches, no out-of-order execution, no speculative branch prediction — deliberately trading away exactly the Phase 3 techniques that make timing *less* predictable. What Phase 3 treats as a performance win is precisely what a hard-real-time system must design *around*, or avoid.

## Two Labs, One Contrast

This is the one post tagged with both interactive labs, deliberately: the mini-CPU is where deterministic, countable instruction timing on simple hardware is tangible — why simplicity aids certifiability. The VM terminal runs a full general-purpose OS stack — useful for seeing the scheduling and timing variance a hard-real-time system is built to eliminate.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

**Door out:** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification* — the primary civil-avionics software assurance standard this post names (assurance objectives scale by Design Assurance Level).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
