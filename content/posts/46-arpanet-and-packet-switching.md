---
title: "ARPANET and Packet Switching"
weight: 46
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 45
aliases:
  - /posts/39-arpanet-and-packet-switching/
  - /posts/44-arpanet-and-packet-switching/
  - /posts/45-arpanet-and-packet-switching/
tags: []
summary: "Bursty computer traffic broke circuit switching — ARPANET proved packets and shared links could work"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

[Post 45]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}})'s serial links connect exactly two endpoints. ARPANET, live in 1969 under ARPA (later DARPA), set out to prove something else: many machines reaching many others without a dedicated circuit between every pair, by breaking data into packets routed independently hop by hop.

## Circuit Switching vs Packet Switching

The telephone network [Post 45]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}}) rode used circuit switching: reserve a continuous end-to-end path for the *entire* call, whether anyone is speaking or not. Fine for continuous voice; a poor fit for computer traffic, which is bursty — active transfer, then idle stretches during which a reserved circuit sits unused.

Packet switching takes the opposite bet. Break data into packets, each carrying a destination address; route each independently; share the physical links among many conversations. No path reserved for a whole session — packets from different transfers interleave, may take different routes, and reassemble at the destination. Paul Baran's RAND work on distributed, survivable communications and Leonard Kleinrock's queueing analysis of packet networks supplied the intellectual ground; Lawrence Roberts at ARPA turned the bet into a funded research network.

## IMPs: The Original Routers

ARPANET's hops were Interface Message Processors (IMPs) — dedicated minicomputers at each site (Phase 3's minicomputer era, applied to the wire) that accepted packets from the local host, chose the next hop, and forwarded. Conceptually, that is what a modern router still does. The first four nodes — UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah — were tiny by later standards. They were enough to show packet switching worked in practice, not only on paper.

## Why This Was a Real Bet

Telecom engineers steeped in circuit switching often doubted a network without reserved paths could deliver data reliably at all. ARPANET's success was institutional validation of an architecture that had real skepticism against it — not an inevitable "next step" everyone already agreed on.

## What This Set Up

ARPANET's own host-to-host protocols were not yet TCP/IP ([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}})). The architectural win — packets over dedicated circuits — is the foundation every later network in this phase builds on, through the modern internet, datacenter fabrics in [Post 49]({{< relref "49-datacenter-networking-and-rdma" >}}), and Phase 10's training-cluster interconnects. Next, local: how buildings standardized on Ethernet ([Post 47]({{< relref "47-ethernet-and-the-local-area-network" >}})) before TCP/IP tied heterogeneous nets into one internetwork.

**Door out:** Paul Baran, *On Distributed Communications* (RAND Corporation, 1964) — the classic distributed/packet argument that, with Kleinrock's queueing work and Roberts's ARPA program, underwrites why ARPANET could bet against circuit switching.

{{< lab type="vm-terminal" >}}

