---
title: "TCP/IP and the Modern Internet Stack"
weight: 46
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 45
tags: []
summary: "How internet protocols stacked and why — layers, flag day, apps on an unreliable substrate — not a catalog"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET (Post 39) proved packet switching. Ethernet (Post 40) standardized the local wire. Neither alone says how to stitch *different* networks — different media, different addressing — into one internetwork any two machines can use. Vint Cerf and Bob Kahn's TCP/IP suite solved that; it is still the foundation the modern internet runs on.

## The Layered Model

TCP/IP splits concerns the way PCIe's stack does (Post 33), at internetworking scale. **Link** handles the local hop — Ethernet, Wi-Fi, fiber. **Internet (IP)** gives universal addressing and routing *across* those links; an IP packet does not care what medium carries it. **Transport (TCP or UDP)** offers either reliable ordered delivery (TCP) or minimal-overhead best-effort (UDP) on top of IP. **Application** is where HTTP, DNS, SMTP and kin sit, picking the transport that fits.

## Encapsulation

Data moving down gains a header at each layer — application bytes under TCP/UDP, that segment under IP, that packet under a link header (and often trailer). At the far end the process reverses: each layer strips its header and uses what it just read (ports, addresses) to hand the remainder upward.

## TCP on an Unreliable Substrate

IP is explicitly best-effort — no delivery promise, no ordering promise, drops allowed. TCP builds a reliable ordered byte stream on top with sequence numbers and acknowledgments (and retransmission when ACKs do not arrive) — the same reliability *kind* as PCIe's data-link layer (Post 33), stretched across a whole unreliable internetwork instead of one dedicated link.

A connection starts with a three-way handshake: SYN (client proposes a sequence number), SYN-ACK (server acknowledges and proposes its own), final ACK. Only then does application data flow — a small deliberate cost so both sides share synchronized state first.

## From One Network's Protocols to a Stack

ARPANET originally spoke its own host-to-host protocol (NCP), not TCP/IP. Cerf and Kahn's bet was larger: a *protocol stack* that could internet *many* packet networks, so the transport and the local wire could evolve separately. The practical cutover on the ARPANET itself was the January 1, 1983 "flag day," when NCP was turned off and TCP/IP became mandatory — a rare hard cut that made the layered story operational, not only architectural.

Application protocols then stacked *because* that substrate existed. DNS (Post 64's doors: [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034) / [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) made names usable at scale; mail and the web (SMTP, HTTP and kin) rode TCP as clients of a reliable stream rather than reinventing addressing and retransmission. The pattern is the point: each layer buys one constraint so the layer above can assume it. That is a story about stacking, not a catalog of every RFC.

## Why This Design Won

The load-bearing assumption was that the underlying network is heterogeneous and unreliable, so guarantees belong at a higher layer rather than in every physical link. That matched a global internetwork stitched over decades from different technologies by organizations that never agreed on one physical standard — which is why TCP/IP still sits under essentially the whole modern internet, including the datacenter networks next.

**Door out:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) and [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — the primary specs for the addressing/routing and reliable-transport halves of this stack (Cerf/Kahn lineage; Postel as RFC editor for these September 1981 texts).

{{< lab type="vm-terminal" >}}

