---
title: "Ethernet and the Local Area Network"
date: 2026-01-01
draft: true
phase: "6 — Networking Evolution"
series_index: 40
tags: []
summary: "CSMA/CD and how LANs standardized"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (Post 39) solved wide-area packet switching between geographically distant sites. A separate, related problem needed solving at a much smaller scale: connecting many machines within a single building or office efficiently, without anything as elaborate as IMP-style routing for what is often just a few dozen meters of cable. Ethernet, developed at Xerox PARC starting in 1973, became the dominant answer.

## The Shared-Medium Problem

Early Ethernet connected multiple stations to a single shared physical cable (a "bus" topology, echoing the shared-bus problem from Phase 5, applied here to networking instead of intra-machine communication). Every station could transmit onto that shared cable, and every station could hear every transmission — which immediately raises the same fundamental question Post 31 raised for system buses: what happens when two stations try to transmit at the same time?

## CSMA/CD: Listen, Transmit, Detect, Back Off

Ethernet's answer is CSMA/CD — Carrier Sense Multiple Access with Collision Detection. **Carrier Sense**: before transmitting, a station listens to check whether the shared medium is currently idle. **Multiple Access**: any station can attempt to transmit once it senses the medium is idle — there is no centralized arbitration granting permission, unlike the more structured arbitration schemes covered in Post 31. **Collision Detection**: because two stations might both sense an idle medium and start transmitting at nearly the same instant, a station continues monitoring the medium *while* transmitting, and if it detects that its own transmission has collided with another station's, both stop immediately, wait a random backoff interval, and retry.

The randomized backoff is the clever part: if both stations backed off for the same fixed interval, they would simply collide again on the next attempt, indefinitely. Randomizing the wait means the two stations will very likely pick different retry times, letting one of them transmit successfully before the other retries — a probabilistic, decentralized solution to contention that requires no central arbiter at all, in contrast to the request/grant arbitration scheme described for system buses in Post 31.

## The Ethernet Frame

Data on an Ethernet network is organized into frames — each carrying source and destination MAC addresses (hardware addresses, distinct from and lower-level than the IP addresses covered in Post 41), a type field indicating what higher-layer protocol the payload belongs to, the actual data payload, and a CRC for error detection, directly analogous to the error-checking approach PCIe's data link layer used in Post 33, just applied to a completely different physical medium.

## From Shared Bus to Switched Star

Modern Ethernet has moved almost entirely away from the original shared-cable topology, toward switches that give each station its own dedicated point-to-point link to the switch — directly mirroring the shared-bus-to-point-to-point evolution PCIe underwent relative to older parallel buses (Post 32). With a proper switch, collisions in the CSMA/CD sense become largely a non-issue on modern wired networks, since each link genuinely only has two endpoints. CSMA/CD's core ideas remain historically foundational, though, and directly informed the contention-handling approach used in early WiFi, which — being a shared medium (radio spectrum) rather than a switched point-to-point link — still has to solve essentially the same collision problem Ethernet originally faced.

## Where This Leads

With reliable local connectivity established via Ethernet, and reliable wide-area packet routing established via ARPANET's lineage, the missing piece was a *universal* addressing and routing scheme that could tie networks of different underlying technologies together into one coherent internetwork — which is exactly what TCP/IP, the next post's subject, was designed to provide.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
