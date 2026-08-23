---
title: "ARM and RISC-V: The Architecture Landscape Today"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 20
tags: []
summary: "How ARM won mobile and edge computing, and why RISC-V is reshaping the ISA business model"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

The x86-versus-RISC story (Post 19) was mostly settled by the late 1990s for desktop and server compute. That was not the end of ISA competition — it moved to a different battlefield: mobile, embedded, and edge devices, where power efficiency matters more than raw single-thread performance, and where a different business model around ISA licensing turned out to matter enormously.

## ARM: Licensing as a Business Model

ARM Holdings does not manufacture chips. It designs the ARM ISA and licenses it — either as a complete, ready-to-fabricate core design, or as an "architecture license" that lets a company design its own custom core implementing the ARM ISA from scratch (Apple's own silicon is the standout example of the latter). That licensing model let ARM's ISA spread across an enormous range of manufacturers and product categories without ARM building a single fab of its own.

ARM's core technical advantage going into the mobile era was power efficiency — a design philosophy consistent with RISC's original goals of simple, efficient instruction decode — which mattered enormously once "computer" started meaning "battery-powered device in your pocket" rather than "machine plugged into a wall." That is not an accident; it is the direct consequence of decades of RISC-lineage design discipline meeting a market that, for the first time, cared intensely about performance-per-watt rather than just raw performance.

## RISC-V: Open Instead of Licensed

RISC-V (developed starting around 2010 at UC Berkeley) takes ARM's model one step further: the ISA itself is completely open and royalty-free. Anyone can implement a RISC-V core without paying licensing fees or negotiating terms with a controlling entity — a fundamentally different economic structure than either x86 or ARM. This matters most for companies that want deep customization or want to avoid ISA licensing costs and dependencies entirely, particularly in embedded and specialized-accelerator contexts where a firm might bolt highly custom instructions onto a RISC-V base without needing anyone's permission.

## Market Segments, Roughly Mapped

x86 still dominates desktop and much of server compute, mostly on the compatibility inertia described in Post 19. ARM dominates mobile almost completely, and has made real inroads into servers (cloud providers building custom ARM server chips for power-efficiency-driven cost savings at scale) and, notably, into desktop and laptop compute via Apple Silicon. RISC-V is the earliest-stage of the three commercially, but is growing fastest in embedded systems, microcontrollers, and as a base ISA for custom accelerator designs where royalty-free flexibility is worth more than a mature software ecosystem.

## The Pattern Continues

Notice this is the same lesson as Post 19, one layer deeper: the winning architecture in any given market segment is not necessarily the technically "best" one in isolation — it is the one whose economic and licensing model best fits what that segment's customers need. ARM won mobile partly on power efficiency and partly on a licensing model that let phone manufacturers customize freely. RISC-V is betting that "free and open" beats even ARM's model for a growing set of use cases. Whether that bet pays off at x86's or ARM's scale is still an open question as of this writing.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
