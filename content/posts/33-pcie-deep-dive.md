---
title: "PCIe Deep Dive"
date: 2026-01-01
draft: true
phase: "5 — The Bus & System Architecture"
series_index: 33
tags: []
summary: "Lanes, generations, TLPs"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

Post 32 covered *why* PCIe moved to serial, point-to-point links. This post covers *how* it structures communication over those links — which matters directly for anyone doing real hardware work, including the Nitefury-based GPU memory fabric project this series periodically references.

## The Layered Protocol Stack

PCIe organizes communication into three layers, each with a distinct job. The **Transaction Layer** is where read/write requests and completions originate and terminate — the layer application logic (or a device driver) interacts with conceptually. The **Data Link Layer** sits beneath it, responsible for reliable delivery: sequence numbering, CRC error checking, and retransmission if a packet is corrupted in transit — PCIe links are expected to deliver data reliably, and this layer is what makes that guarantee. The **Physical Layer** is the actual electrical signaling — differential pairs, 8b/10b or 128b/130b encoding (depending on PCIe generation) to keep the signal DC-balanced and recoverable, and the serialization/deserialization of the bit stream onto the physical wire.

## The Transaction Layer Packet (TLP)

The fundamental unit of communication is the Transaction Layer Packet. A TLP carries a header (specifying the transaction type — memory read, memory write, I/O request, configuration access — plus the target address and length) and, for writes, a payload of actual data. The Data Link Layer wraps this TLP with a sequence number and CRC before it goes out over the physical layer, and the receiving end uses that sequence number and CRC to detect drops or corruption and request retransmission if needed — all of this happening transparently beneath what looks, from the transaction layer's perspective, like a simple, reliable read or write.

## Lanes and Generations

A PCIe "lane" is one differential signal pair in each direction (transmit and receive) — the minimal unit of a PCIe link. Multiple lanes can be bonded together (x1, x4, x8, x16) to multiply available bandwidth for devices that need it. Each PCIe *generation* roughly doubles per-lane bandwidth over the previous one, through a combination of higher signaling rate and improved encoding efficiency — a x16 Gen 5 slot carries about 4× the unidirectional bandwidth of a x16 Gen 3 slot (~64 GB/s vs ~16 GB/s), even with the identical physical lane count, purely from these generational signaling improvements.

## Why This Matters for a Custom Fabric Project

Anyone building custom hardware that talks PCIe — including a custom FPGA-based memory fabric card — has to work within this layered structure: implementing (or using existing IP blocks for) the physical layer's serialization and encoding, the data link layer's reliability guarantees, and correctly forming transaction-layer packets that the rest of the PCIe ecosystem (root complex, switches, other endpoints) will interpret correctly. Understanding TLPs specifically matters because that is the layer at which a custom design expresses *intent* — a memory read, a memory write, the address and length involved — with everything below that (reliability, physical signaling) largely handled by well-established, reusable logic. This is the layer where GPUDirect-style peer-to-peer transfers, covered in Post 37, become meaningful: TLPs addressed directly between two PCIe endpoints, without the CPU needing to sit in the data path at all.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
