---
title: "Mainframes to Minicomputers to Microprocessors"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 22
aliases:
  - /posts/18-mainframes-to-minicomputers-to-microprocessors/
tags: []
summary: "Three eras of who gets a computer — institutional, departmental, then one chip for everyone"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC (Phase 1) occupied about 1,800 square feet and weighed roughly 30 tons. A phone CPU outperforms it by orders of magnitude on a fingertip. That collapse was not one leap — three eras, each answering differently: *who gets a computer, and how many exist?*

## Mainframes: One Machine, Shared

1950s–60s: room-filling machines for universities, corporations, governments — shared through batch processing (Post 21). IBM's System/360 (1964) mattered beyond scale: a *family* of compatible machines across a performance range, same software. Deliberate separation of ISA (Post 11) from the box underneath, so a customer's code survived a hardware upgrade. Gene Amdahl, Gerrit Blaauw, and Fred Brooks drove that architecture.

## Minicomputers: A Department Can Afford One

1970s: DEC's PDP-11 (1970) and kin shrank the machine to something a department — not a whole institution — could buy and run without a central bureau. By May 1990, DEC counted [more than 600,000 PDP-11s installed](http://archive.computerhistory.org/resources/text/DEC/dec.digital_%28DEC%29_timeline_1957-1997.102630354/timelinetext.htm). The ISA's orthogonal addressing and clean encoding shaped later design, including habits in C (Post 27), which grew up with Unix (Post 22) largely on PDP-11 hardware.

## Microprocessors: The CPU on One Die

The discontinuity: fabricate the whole CPU on one integrated circuit instead of wiring racks of discrete parts. Intel's 4004 (1971), built for a calculator, is usually credited as the first commercial single-chip CPU — 4-bit, about 2,300 transistors, up to roughly 740 kHz. Weak by any modern measure; the direct ancestor of the 8080, the Z80, and the x86 line in the next post.

## Why the Collapse Compounded

Each step tracks fabrication density from Phase 8: more transistors, less area, lower cost. Mainframes were thousands of components on backplanes; microprocessors compressed that structure onto silicon. Computing moved from institutional resource to departmental tool to personal (then embedded) device — the same scaling curve Phase 8 follows into what a modern process node actually means.

{{< lab type="mini-cpu" >}}

**Door out:** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — the primary statement of a compatible machine family and the ISA/implementation split.

