---
title: "Moore's Law"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 55
tags: []
summary: "Moore's observation was economic component count — transistor count still climbs; clocks and cost-per-transistor tell different stories"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

"Moore's Law" is constantly declared dead, revived, and stretched to mean whatever the speaker needs. After the last posts' look at what fabrication has gotten harder, it is worth saying precisely what Gordon Moore observed — and which bundled trends are actually different constraints.

## What Moore Actually Wrote

Gordon Moore's 1965 *Electronics* article observed component *count*: the number of components that could be economically placed on one integrated circuit was doubling on a roughly yearly pace (revised around 1975 to roughly every two years). Notice what that claim is *not*: it is not a law of clock speed, not a promise about single-thread performance, and not a separate theorem about cost per transistor beyond the word "economically." Popular usage often bundles those metrics under one slogan; the underlying drivers are distinct.

## Transistor Count: Still Climbing

Measured as Moore framed it — components (today: transistors) per chip — the trend held for decades and still climbs, driven by lithography and transistor-structure advances in Posts 48 and 49. Modern high-end chips hold many billions of transistors against the roughly 2,300 on Intel's 4004 (Post 18) five decades earlier.

## Clock Speed: A Different Wall

Clock frequency climbed with transistor count for decades, then flattened around 2005 — not because transistor scaling stopped, but because of the power/thermal wall in Post 36. Calling that "the death of Moore's Law" conflates two metrics. Count kept rising through the clock plateau; the industry spent the new transistors on more cores and specialized on-chip function (Post 17), not on pushing one core's frequency further.

## Cost Per Transistor: Where Friction Shows

The economic half of Moore's framing — cheaper components as density rose — is where recent leading-edge friction is clearest. EUV tools (Post 48) are extraordinarily expensive; each node generation needs more elaborate process steps. For decades, more transistors per wafer drove cost per transistor down even when absolute chip cost held or grew modestly. At the newest nodes that relationship has weakened: density still climbs; cost-per-transistor improvement is no longer automatic at historical rates.

## Three Metrics, One Slogan

Transistor count: still scaling. Clock speed: flat since the mid-2000s for known thermal reasons. Cost per transistor: still improving in absolute terms at many nodes, with documented friction at the leading edge. Treating them as one "law" hides which constraint still yields and which forced the architectural turns this phase has been naming.

**Door out:** Gordon E. Moore, "Cramming more components onto integrated circuits" (*Electronics*, April 19, 1965) — the primary statement of the economic component-count observation later nicknamed Moore's Law.

