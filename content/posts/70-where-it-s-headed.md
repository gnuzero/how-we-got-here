---
title: "Where It's Headed"
weight: 70
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 69
aliases:
  - /posts/62-where-it-s-headed/
  - /posts/68-where-it-s-headed/
  - /posts/69-where-it-s-headed/
tags: []
summary: "Same pattern forward — chiplets, optics closer to the package, compute nearer memory"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

This series opened with gears and relays — mechanical and electromechanical computing, primitive by modern measure, but the same logical shape (instructions, execution, state) every later stop refined. It closes looking forward, not backward: three directions AI hardware is actively moving, each an extension of ideas already in this series. No invented roadmap — only the *kind* of response the spine already taught.

## Chiplet AI Accelerators

Post 51 covered chiplets as a yield answer; Post 54 covered HBM packaging for bandwidth beside compute. The natural combination is both: disaggregated compute chiplets — sometimes specialized differently — plus stacked HBM, tied by high-density interposer or advanced-substrate links inside one package. Disaggregate for yield and specialization; spend packaging to keep the split from becoming a new interconnect wall. Same pattern, applied to AI silicon.

## Optics Closer to the Package

Short in-rack links are still often copper. Rack-to-rack and many leaf–spine AI fabrics already use optical fiber with pluggable transceivers. Electrical SerDes still face reach, power, and density limits. Silicon photonics and co-packaged optics push E/O conversion onto the switch or GPU package — cutting SerDes/DSP power and reach costs versus long electrical traces plus discrete pluggables. Not "introducing light for the first time," but moving conversion where Posts 56 and 61 said bandwidth between GPUs and racks is increasingly binding.

## Processing-in-Memory

Post 35's memory wall echoed through HBM (54) and weight-stationary systolic dataflow (58) — minimize movement, or make it wider. Processing-in-memory goes further: do some compute *inside* the memory array so a fraction of movement never happens. Early as broadly deployed technology; still a real attempt to attack the wall at its root rather than only elaborating hierarchies around it.

## The Continuous Thread

Each direction is the series pattern again: name the binding constraint precisely, then change structure rather than only pushing harder. Relays gave way to tubes when mechanical switching bound; tubes to transistors when power and reliability bound; single-core scaling to multicore when the clock wall bound; monolithic dies to chiplets when yield bound. Memory movement — not only compute throughput — is binding for the largest AI workloads, which is why packaging, optics near the package, and compute nearer memory are the live answers.

From relays to attention: the technology changed almost beyond recognition at every step. The engineering logic — identify the real constraint, then change the architecture — has not, and there is no strong reason to expect it will.

