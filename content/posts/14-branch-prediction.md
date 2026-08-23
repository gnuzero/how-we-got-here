---
title: "Branch Prediction"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 14
tags: []
summary: "Why it matters, how it works"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

A pipeline flush from a mispredicted branch is expensive — every instruction fetched down the wrong path must be discarded, and the pipeline must restart from the correct target. On a deep pipeline, that can cost ten or more wasted cycles per misprediction. Branch prediction exists to make that rare rather than routine.

## Static vs Dynamic Prediction

The simplest approach is static: always predict "not taken," or use a heuristic such as "backward branches (loops) are usually taken; forward branches usually are not." This costs nothing in hardware but is fairly inaccurate for real code, where branch behavior often depends on program history in ways a fixed rule cannot capture.

Dynamic prediction tracks *actual* branch outcomes at runtime and uses recent history to predict future behavior. It is far more accurate, because real branches are often correlated with their own past. A loop that runs 100 times takes its backward branch 99 times and falls through once; a dynamic predictor that remembers "this branch was taken last time" gets that loop right on almost every iteration.

## The 2-Bit Saturating Counter

The classic building block is a small state machine per branch: a 2-bit counter with four states — strongly not taken, weakly not taken, weakly taken, strongly taken. Each time the branch resolves, the counter moves one step toward the direction that actually happened (saturating at the extremes rather than wrapping). Prediction is simply the top bit of the counter.

Why this beats a plain 1-bit "last outcome" predictor: a 1-bit predictor flips after a *single* anomalous outcome, even if the branch is normally consistent — costing a misprediction on the next normal iteration as well. The 2-bit version needs *two consecutive* anomalous outcomes before it flips, which absorbs one-off exceptions (such as a loop's final, not-taken iteration) without destabilizing an otherwise consistent prediction.

## The Branch Target Buffer

Predicting *direction* (taken / not taken) is only half the problem. For a taken branch, the pipeline also needs to know *where* to fetch next, before the branch has been fully decoded. A Branch Target Buffer (BTB) is a small cache, indexed by instruction address, that remembers the target a given branch resolved to last time. On a BTB hit, fetch can jump speculatively to the predicted target on the next cycle, rather than waiting for the branch to be decoded and its target computed the slow way.

## Where the State Machine Lives (and a Lab)

Real predictors combine both structures — a table of 2-bit counters indexed by branch address (sometimes combined with global branch history for still better accuracy) plus a BTB for target prediction — and modern high-end CPUs push further with neural-inspired predictors trained on long histories. The 2-bit counter remains the conceptual core, and it is directly implementable as a tiny state machine: the kind of thing worth tracing by hand in the mini-CPU lab attached to this post. Step through a small loop's branch instruction and watch prediction state update on each iteration.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
