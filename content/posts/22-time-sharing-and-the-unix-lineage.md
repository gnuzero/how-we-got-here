---
title: "Time-Sharing and the Unix Lineage"
date: 2026-01-01
draft: true
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 22
tags: []
summary: "Multics, Unix, and the ideas that still run everything"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

Batch processing (Post 21) solved throughput — keep the expensive CPU busy, minimize idle time between jobs. It did nothing for interactivity. Time-sharing systems, emerging in the early-to-mid 1960s, solved a different problem: let multiple users interact with the machine *simultaneously*, each with the illusion of having it entirely to themselves.

## The Core Trick: Rapid Switching

Time-sharing works because a CPU is fast enough, relative to human reaction time, that it can switch between many users' processes many times per second — giving each a small slice of CPU time — and no individual user perceives the gaps. This is the software-scheduling analog of Post 9's clocked digital logic: discrete, rapid switching creating the *appearance* of continuous, simultaneous operation, even though at any given instant only one process is executing on a single core.

Multics (MULTiplexed Information and Computing Service), a joint MIT/Bell Labs/GE project starting in 1965, was hugely ambitious for its era — pioneering hierarchical file systems, dynamic linking, and fine-grained access control that took decades to become standard elsewhere. It was also, by most accounts, over-engineered for the hardware of its time, and commercially it struggled.

## From Multics to Unix

Bell Labs pulled out of the Multics project in 1969. Ken Thompson and Dennis Ritchie, who had worked on Multics, kept iterating on similar ideas at a much smaller scale — deliberately simpler, running on far less powerful hardware (initially a spare PDP-7). The result was Unix: a time-sharing OS built around a small set of powerful, composable ideas — "everything is a file," small single-purpose programs connected via pipes rather than monolithic applications, and a portable design once it was rewritten in C (Post 27 covers that language's development alongside Unix, largely by the same people).

That portability mattered enormously. Unix was not tied to one specific piece of hardware the way many contemporary operating systems were, so it could spread across many vendors' machines with relatively modest porting effort — a structural advantage over competitors locked to a single manufacturer's product line.

## The Split: BSD and System V

Unix's licensing history is tangled (AT&T's original antitrust-related restrictions meant it could not directly commercialize Unix, which paradoxically encouraged wide academic distribution), and it eventually split into two major lineages: BSD (Berkeley Software Distribution), developed at UC Berkeley with substantial new contributions including much of the TCP/IP networking stack covered in Phase 6, and AT&T's own commercial System V line. Both lineages cross-pollinated ideas for years, and modern systems still trace design decisions back to one branch or the other — macOS's kernel has deep BSD lineage, for instance, while much enterprise Unix descended more directly from System V.

## Where This Leads

Unix's ideas — and, eventually, Unix-derived or Unix-inspired code — are the direct ancestor of both Linux and macOS, which between them run the overwhelming majority of servers, workstations, and increasingly mobile and embedded devices in use today. But getting from "AT&T's proprietary Unix" to "the free, openly developed Linux running most of the internet" required a separate ideological and legal movement — the GNU project — which the next post covers directly. It is a distinct story from Unix's own technical lineage, even though the two ultimately combined into a single dominant software stack.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
