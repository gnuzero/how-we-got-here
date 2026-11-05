---
title: "Ethernet and the Local Area Network"
weight: 45
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 44
tags: []
summary: "Shared cable, no central arbiter — CSMA/CD solved the LAN collision constraint; switches later removed it"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (Post 39) solved wide-area packet switching between distant sites. Inside one building, IMP-style routing for a few dozen meters of cable is the wrong tool. Ethernet, begun at Xerox PARC in 1973 by Robert Metcalfe and David Boggs, became the dominant local answer.

## The Shared-Medium Problem

Early Ethernet put many stations on one shared cable — a bus topology, the same *kind* of contention Post 31 faced inside a machine, now on a LAN. Every station can transmit; every station hears every transmission. Two transmitters at once corrupt both.

## CSMA/CD: Listen, Transmit, Detect, Back Off

Ethernet's answer is CSMA/CD. **Carrier Sense:** listen first; transmit only if the medium looks idle. **Multiple Access:** any station may try — no central grant, unlike request/grant on system buses (Post 31). **Collision Detection:** keep listening while sending; if a collision appears, stop, wait a *random* backoff, retry.

Randomization is the load-bearing trick. Fixed identical backoffs would collide forever. Different random waits let one station succeed before the other retries — decentralized contention without an arbiter.

## The Frame

Ethernet carries data in frames: source and destination MAC addresses (hardware addresses, below the IP addresses of Post 41), a type field for the higher protocol, payload, and a CRC — the same reliability *kind* as PCIe's data-link checks (Post 33), on a different medium.

## From Shared Bus to Switched Star

Modern wired Ethernet mostly left the shared cable for switches that give each station its own point-to-point link — the same shared-to-point-to-point escape PCIe made relative to older parallel buses (Post 32). On a proper switch, classic CSMA/CD collisions largely vanish: each link has two ends. The ideas still matter historically, and early Wi-Fi — still a shared radio medium — had to solve the same collision constraint.

## Where This Leads

Local Ethernet plus wide-area packet routing still leave a gap: a *universal* addressing and routing scheme that ties different underlying technologies into one internetwork. That is TCP/IP — next.

**Door out:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — the primary paper that stated the shared-medium LAN and CSMA/CD design.

{{< lab type="vm-terminal" >}}

