---
title: "Time-Sharing and the Unix Lineage"
weight: 25
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 24
tags: []
summary: "Batch kept the CPU busy; time-sharing gave many users the illusion of owning it — Multics ambition, then Unix simplicity"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

Batch processing (Post 21) solved throughput — keep the expensive CPU busy between jobs. It did nothing for interactivity. Time-sharing, emerging in the early-to-mid 1960s, solved a different constraint: let multiple users interact *simultaneously*, each with the illusion of having the machine alone.

## The Core Trick: Rapid Switching

A CPU is fast relative to human reaction time. Switch between many users' processes many times per second — each gets a small slice — and no one perceives the gaps. Software-scheduling analog of Post 9's clocked logic: discrete, rapid switching that *looks* continuous, even though only one process runs on a single core at any instant.

Multics (MULTiplexed Information and Computing Service), a joint MIT / Bell Labs / GE project planned from 1964 and publicly described in 1965, was hugely ambitious — hierarchical file systems, dynamic linking, fine-grained access control that took decades to become standard elsewhere. It was also, by most accounts, over-engineered for the hardware of its time, and commercially it struggled.

## From Multics to Unix

Bell Labs pulled out of Multics in 1969. Ken Thompson and Dennis Ritchie, who had worked on it, kept iterating at a much smaller scale — deliberately simpler, on far less powerful hardware (initially a spare PDP-7). The result was Unix: a time-sharing OS built around a small set of composable ideas — "everything is a file," small single-purpose programs connected by pipes, and a portable design once rewritten in C (Post 27 covers that language, largely by the same people).

Portability mattered. Unix was not locked to one manufacturer's box the way many contemporaries were, so it could spread across vendors with modest porting effort — a structural advantage over systems tied to a single product line.

**Try this now.** Boot the VM below, click the black screen for keyboard focus, then run `uname`, `whoami`, and `ls` — a living Unix-lineage shell, not a diagram of one.

{{< lab type="vm-terminal" height="600" >}}

## The Split: BSD and System V

Unix's licensing history is tangled (AT&T's antitrust-related restrictions meant it could not freely commercialize Unix for a long stretch, which paradoxically encouraged wide academic distribution). It eventually split into two major lineages: BSD (Berkeley Software Distribution), with substantial new work including much of the TCP/IP stack in Phase 6, and AT&T's commercial System V line. Both cross-pollinated for years. Modern systems still trace design decisions to one branch or the other — macOS's kernel has deep BSD lineage; much enterprise Unix descended more directly from System V.

## Where This Leads

Unix's ideas — and, eventually, Unix-derived or Unix-inspired code — are the direct ancestor of both Linux and macOS, which between them run the overwhelming majority of servers, workstations, and increasingly mobile and embedded devices today. Getting from "AT&T's proprietary Unix" to "the free, openly developed Linux running most of the internet" required a separate ideological and legal movement — the GNU project — which the next post covers. Distinct story from Unix's technical lineage, even though the two ultimately combined into one dominant stack.

**Door out:** Dennis M. Ritchie and Ken Thompson, "The UNIX Time-Sharing System" (*Communications of the ACM*, 1974) — the classic primary statement of Unix's design.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
