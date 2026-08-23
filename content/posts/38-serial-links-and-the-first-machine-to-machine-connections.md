---
title: "Serial Links and the First Machine-to-Machine Connections"
date: 2026-01-01
draft: true
phase: "6 — Networking Evolution"
series_index: 38
tags: []
summary: "RS-232, modems, and moving bits before packet switching existed"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Every bus covered in Phase 5 connects components *within* one machine. Networking is about connecting separate machines — and before packet-switched networks existed at all, that meant simple serial links: one wire (pair) carrying one bit stream, point to point, with no routing and no addressing beyond "the thing on the other end of this wire."

## RS-232: The Baseline Serial Standard

RS-232 (standardized in the 1960s) defined voltage levels and signaling conventions for asynchronous serial communication between two devices — one voltage range for a logical 1, another for a logical 0, with both ends agreeing in advance on timing parameters (baud rate), since no separate clock travels alongside the data. By modern networking standards this is primitive: no addressing, no routing, and no error correction beyond whatever simple parity checking the two ends agreed to use — just a direct electrical connection between exactly two devices, one bit at a time.

Despite that, RS-232 mattered enormously in practice. It is the interface terminals used to connect to mainframes and minicomputers (a direct callback to Phase 3's mainframe-to-microprocessor history), and it is still in use today for exactly the low-level, direct-access purpose it was designed for: serial console access to routers, embedded systems, and other hardware where you need a dead-simple, dependency-free channel independent of any higher-level networking stack.

## The Modem: Bridging Digital and Analog

When computers started wanting to talk over long distances, the telephone network was built for voice — an analog medium with a narrow frequency range optimized for human speech, not digital bit streams. A modem (modulator-demodulator) bridges that gap: it takes a digital bit stream and modulates it onto an analog carrier (varying frequency, amplitude, or phase to encode the bits) suitable for ordinary phone lines, and a modem at the receiving end demodulates that carrier back into the original digital bit stream.

Early modems ran at a few hundred bits per second, later climbing to tens of kilobits per second as modulation techniques improved — painfully slow by any modern standard. But "painfully slow" is relative: at the time, it was the *only* practical way to connect a computer to another that was not in the same room, over infrastructure (the existing telephone network) that already reached nearly every home and business — an enormous practical advantage over building dedicated data-transmission infrastructure from scratch.

## Why This Sets Up Everything That Follows

A point-to-point serial link — whether RS-232 direct or modem-over-phone-line — connects exactly *two* endpoints. There is no network of many nodes, and no routing decision about which path data should take to reach a destination that is not directly connected. Scaling this idea to many machines, all able to reach each other without a dedicated wire between every pair, requires a different architecture: packet switching, where data is broken into discrete chunks that can be routed hop-by-hop through intermediate nodes rather than requiring one continuous dedicated circuit end to end. That is exactly what ARPANET set out to prove was viable, and it is the next post's entire subject.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
