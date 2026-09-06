---
title: "Serial Links and the First Machine-to-Machine Connections"
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 38
tags: []
summary: "Point-to-point serial links connect exactly two ends — the ceiling that forced packet switching"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Every bus in Phase 5 stays *inside* one machine. Networking starts when separate machines must talk — and before packet-switched networks existed, that meant a serial link: one bit stream, point to point, no routing, no address beyond "the thing on the other end of this wire."

## RS-232: The Baseline Serial Link

RS-232 (EIA, 1960) fixed voltage levels and asynchronous serial conventions between two devices — both ends agree on baud rate in advance, because no clock rides with the data. No addressing, no routing, no error correction beyond whatever simple parity the ends chose. Just two devices, one bit at a time.

That was enough. Terminals used it to reach mainframes and minicomputers (Phase 3's lineage). It is still the dead-simple console path into routers and embedded gear when you need a channel that does not depend on any higher networking stack.

## The Modem: Digital Over Analog Wire

Long-haul talk had to ride the telephone network — analog, narrowband, built for voice. A modem modulates a digital bit stream onto an analog carrier the phone line can carry, and demodulates it back to bits at the far end. Early rates were hundreds of bits per second, later tens of kilobits — slow by modern measure, but the only practical way to reach a machine that was not in the same room, over infrastructure that already went nearly everywhere.

## Why This Forces the Next Architecture

A point-to-point serial link — RS-232 direct or modem-over-phone — connects exactly *two* endpoints. There is no multi-node network and no routing decision for a destination that is not on the wire. Scaling to many machines that reach each other without a dedicated pair between every pair requires a different bet: break data into packets, route them hop by hop, share the links. That is what ARPANET set out to prove — next post.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
