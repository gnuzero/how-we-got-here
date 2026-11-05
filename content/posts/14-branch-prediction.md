---
title: "Branch Prediction"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 18
tags: []
summary: "Pipeline flushes are expensive — prediction exists to make them rare"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

A mispredicted branch flushes everything fetched down the wrong path. On a deep pipeline that can cost well over ten cycles. Post 13 left that cost on the table; this post is the answer: guess direction (and target) early enough that flushes become rare.

## Static Guessing Is Not Enough

Static rules — always not-taken, or "backward branches (loops) are taken" — cost no hardware and miss a lot of real code. Branch behavior depends on history a fixed rule cannot see.

Dynamic predictors track outcomes at runtime. A loop that runs 100 times takes its backward branch 99 times; a predictor that remembers "taken last time" gets almost every iteration right.

## The 2-Bit Saturating Counter

The classic building block: four states — strongly/weakly not-taken, weakly/strongly taken. Each resolved outcome nudges the counter one step toward what actually happened (saturating at the ends). Prediction is the top bit.

Why not one bit? A 1-bit "last outcome" flips after a single anomaly — then mispredicts the next *normal* iteration too. Two bits need two consecutive anomalies before flipping, so a loop's final not-taken exit does not poison the next run of the loop.

## Where to Fetch Next

Direction is only half. For a taken branch, fetch also needs a *target* before the branch is fully decoded. A Branch Target Buffer (BTB) is a small cache, indexed by instruction address, remembering the last resolved target. On a hit, fetch can jump speculatively next cycle.

Real predictors combine counter tables (often with global history) and a BTB; high-end chips go further. The 2-bit counter is still the conceptual core — and small enough to trace by hand. The mini-CPU lab below has no predictor, pipeline or cache, but you can step a loop's `JZ` and, on paper, move a 2-bit counter for that branch each iteration.

{{< lab type="mini-cpu" >}}

**Door out:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — early systematic treatment of dynamic branch prediction, including saturating-counter ideas that became textbook.

