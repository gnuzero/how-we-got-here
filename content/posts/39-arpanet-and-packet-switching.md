---
title: "ARPANET and Packet Switching"
date: 2026-01-01
draft: true
phase: "6 — Networking Evolution"
series_index: 39
tags: []
summary: "The network that proved packet switching could work"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

Post 38 covered point-to-point serial links — inherently limited to connecting exactly two endpoints directly. ARPANET, beginning operation in 1969, set out to prove something different was viable: a network where many machines could reach many other machines, without a dedicated direct circuit between every pair, by breaking data into discrete packets that could be routed independently.

## Circuit Switching vs Packet Switching

The telephone network Post 38 relied on used circuit switching: establishing a dedicated, continuous end-to-end path for the *entire duration* of a call, with that path's resources reserved exclusively for that one conversation whether or not anyone is actually speaking at any given moment. This works fine for continuous voice traffic, but it is a poor fit for computer communication, which tends to be bursty — periods of active data transfer interspersed with idle stretches during which a dedicated circuit would sit unused but still fully reserved.

Packet switching takes a different approach: break data into discrete packets, each carrying its own destination address, and route each packet independently through the network, hop by hop, sharing the underlying links among many simultaneous conversations rather than dedicating a continuous path to any single one. No connection needs to be reserved in advance for the network's *entire* duration — packets from many different communications can interleave on the same physical links, and each packet finds its own way through, potentially even taking different paths from other packets belonging to the same overall transfer, all reassembled correctly at the destination.

## IMPs: The Original Routers

ARPANET's actual routing was performed by Interface Message Processors (IMPs) — dedicated minicomputers (a direct link back to Phase 3's minicomputer era) sitting at each network site, responsible for accepting packets from the local host, determining the next hop toward the packet's destination, and forwarding it onward. This is conceptually the direct ancestor of what a modern router does, just at a vastly smaller scale. ARPANET's initial deployment connected only four university and research sites (UCLA, Stanford Research Institute, UC Santa Barbara, and the University of Utah) in 1969 — tiny by any modern comparison, but proof that the underlying packet-switching concept worked in practice, not just on paper.

## Why This Was a Genuine Bet, Not an Obvious Choice

Packet switching was not an obviously "correct" choice at the time. Telecommunications engineers with deep experience in circuit-switched telephone networks were often skeptical that a network without dedicated, reserved paths could reliably deliver data at all, let alone efficiently. ARPANET's success in demonstrating reliable, efficient data delivery over a shared, packet-switched network was a significant validation of an approach that had real institutional skepticism working against it.

## What This Set Up

ARPANET itself used its own specific protocols, not what would eventually become TCP/IP (Post 41 covers that transition directly) — but the fundamental architectural bet it validated, packet switching over dedicated circuits, is the foundation every subsequent network in this phase builds on, right up through the modern internet and the datacenter-scale networks covered in Post 42 and, later, Phase 10's AI training cluster interconnects. Before getting to TCP/IP and the modern internet stack, though, the next two posts cover an important intermediate step: how *local* networks — a single building, a single office — standardized on Ethernet, and how the pre-web internet organized information and let people find things before the World Wide Web existed at all.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
