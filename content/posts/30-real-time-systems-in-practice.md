---
title: "Real-Time Systems in Practice"
date: 2026-01-01
draft: true
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 30
tags: []
summary: "Embedded control, avionics, and industrial automation — where determinism is non-negotiable"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

Post 29 covered the theory: hard vs soft deadlines, rate-monotonic scheduling, why "fast" and "real-time" are different properties. This post is about where those guarantees actually get deployed, and what building for them looks like in practice.

## Avionics: Where Missing a Deadline Is Catastrophic

Flight control systems are the canonical hard-real-time example for good reason. A fly-by-wire aircraft's stability-augmentation system reads sensor data, computes control-surface adjustments, and issues actuator commands on a fixed, tight cycle — and if that cycle's deadline is missed, the aircraft's control response can become unstable, sometimes within a very short window. This is exactly why avionics software is built to standards like DO-178C, which require rigorous, provable timing analysis — not testing that shows the system *usually* meets its deadlines, but formal verification (or exhaustive worst-case analysis) that it *always* does, under every certified operating condition.

## Industrial Automation: Coordinated, Continuous Control

A manufacturing production line's control system — coordinating robotic arms, conveyor timing, sensor feedback for quality control — runs a similar closed-loop pattern: sense, compute, actuate, repeat, on a fixed cycle, often measured in milliseconds. Miss a deadline here and the failure mode is usually less catastrophic than in avionics, but it is still serious — a robotic arm's position command arriving late relative to a moving part it is supposed to interact with can mean a collision, a dropped part, or physical damage to expensive equipment.

## The Common Architecture: Closed-Loop Control

Both domains share a structural pattern worth naming explicitly: **sense** (read current state from sensors), **compute** (determine the correct response, typically some flavor of control-theory algorithm like a PID controller), **actuate** (issue the physical command — a motor signal, a control surface deflection), repeated continuously on a fixed period. The real-time guarantee has to cover the *entire* loop, end to end — sensor read latency, computation time, and actuation command latency all count against the same deadline budget. A system can have a blazing-fast control algorithm and still fail its real-time requirement if sensor I/O or actuator communication introduces unpredictable delay somewhere else in that same loop.

## Why General-Purpose Hardware Often Isn't Enough

This is part of why real-time systems frequently run on dedicated microcontrollers rather than general-purpose CPUs running a general-purpose OS — a microcontroller's simpler, more predictable architecture (often no caches, no out-of-order execution, no speculative branch prediction — deliberately trading away exactly the performance techniques from Phase 3 that make timing *less* predictable) makes worst-case execution time far easier to bound and certify. The unpredictability that out-of-order execution and caching introduce, which Phase 3 treats purely as a performance win, is precisely the property a hard-real-time system has to design *around*, or avoid outright.

## Two Labs, One System

This is the one post in the series tagged with both interactive labs, deliberately: the mini-CPU lab is where you can directly feel deterministic, countable instruction timing on simple hardware — closing the loop back to why simplicity aids certifiability. The VM terminal lab, by contrast, runs on a full general-purpose OS stack — useful for seeing exactly the kind of scheduling and timing variance that a hard-real-time system is specifically built to eliminate.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
