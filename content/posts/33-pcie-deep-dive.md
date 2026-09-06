---
title: "PCIe Deep Dive"
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 33
tags: []
summary: "Intent rides TLPs; reliability and signaling sit below — the stack that replaced the shared bus"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

Post 32 covered *why* PCIe went serial and point-to-point. This post is *how* a transfer is structured on those links — the layer that matters if you are building hardware that has to speak the fabric, including the Nitefury-based GPU memory work this series comes back to.

## Intent, Reliability, Electrons

Three layers, three jobs. The **Transaction Layer** is where a read, a write, or a completion is born and dies — the layer software thinks in. The **Data Link Layer** makes delivery reliable: sequence numbers, CRC, retransmission if a packet is corrupted. The **Physical Layer** is the wire: differential pairs, encoding so the stream stays recoverable, serialization onto copper. Split that way so a custom design can express *intent* without reinventing electrons.

## The Packet Is the Contract

The unit is the Transaction Layer Packet. A TLP names the type (memory read or write, I/O, configuration), the address, the length, and — on a write — the payload. The link layer wraps it with sequence and CRC; the far side checks and retries if needed. From above, it looks like a reliable read or write. The reliability is not magic. It is that wrap.

## Lanes Scale Width; Generations Scale Rate

A lane is one differential pair each way — the smallest link. Bond lanes (x1…x16) to multiply bandwidth. Each generation roughly doubles per-lane rate (higher signaling, tighter encoding). Same x16 slot, Gen 5 versus Gen 3: about 4× unidirectional bandwidth (~64 GB/s vs ~16 GB/s) with no extra wires. The serial bet from Post 32 is what made that climb possible.

## Why a Custom Fabric Cares

An FPGA memory-fabric card has to live in this stack: form TLPs the root complex and other endpoints will accept, and let established IP handle link reliability and the physical layer. GPUDirect-style peer-to-peer (Post 37) is the same idea taken further — TLPs addressed between two endpoints, CPU out of the data path.

**Door out:** The PCI Express Base Specification (PCI-SIG) — the living primary for lanes, TLPs, and the layered stack this post names; it is versioned (the Base Spec, not a frozen paper).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
