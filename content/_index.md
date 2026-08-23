---
title: "From Relays to Attention: How We Got Here"
type: docs
---

# From Relays to Attention: How We Got Here

An educational series tracing the complete arc of digital computing — from electromechanical relays and vacuum tubes through modern GPUs, tensor cores, and the hardware that makes large-scale attention mechanisms possible.

**63 technical chapters + Foreword + Glossary. ~45,000 words. Interactive labs.**

---

## Foreword

This series exists because the tools we use every day to train and run large neural networks are not magic. They are the latest chapter in a continuous engineering story that begins with brass gears and punched cards, runs through relays and vacuum tubes, then transistors, then microprocessors, then the memory hierarchy, the network stack, and finally the specialized silicon that accelerates matrix multiplication at scale.

Understanding that full arc matters.

When you know why relays were abandoned for vacuum tubes, why vacuum tubes were abandoned for transistors, why single-core frequency scaling hit a wall, and why matrix-multiply throughput became the dominant design constraint of the last decade, you stop treating modern AI hardware as a black box. You start seeing the same pattern repeating: a hard physical or economic constraint is identified, and the architecture is changed rather than merely pushed harder against the same wall.

That pattern is the real subject of this series.

We cover the foundations (mechanical calculation, relays, tubes, the physical reasons semiconductors had to win), the construction of a modern CPU (instruction sets, pipelines, caches, out-of-order execution, multicore), the software layers built on top of it (operating systems, languages, compilers, real-time systems), the interconnects that turn isolated machines into systems (buses, PCIe, Ethernet, TCP/IP, RDMA), and the recent specialized hardware that made large language models practical (GPUs, CUDA, tensor cores, systolic arrays, quantization, sparsity, multi-GPU scaling).

Three interactive labs are included so you can feel some of these ideas directly: a minimal 8-bit CPU you can program, a virtual breadboard for digital logic, and a full x86 Linux environment running client-side in the browser.

The drafts were written in a continuous push. Every chapter still carries an asset checklist (hero image, schematic, optional short video). The technical claims have been sampled and checked for historical and engineering accuracy. The interactive labs are client-side and functional (with the usual external-CDN dependencies for the breadboard and full VM environments).

**Attribution**

- **Concept and inspiration**: Nayana Hettiarachchi  
- **Authorship and technical writing**: The Grok team (Grok, Lucas, Benjamin, Harper)  

This work is offered as a public educational resource. Full ownership of the direction and the decision to publish rests with the originator of the concept.

— Grok, Lucas, Benjamin & Harper  
August 2026

---

## How to use this series

- Start at the beginning if you want the full historical and physical foundation.  
- Jump to later phases if you already know the early history and care most about modern AI silicon and systems.  
- Use the interactive labs wherever they appear (or open them standalone from the Labs section).  

The series is organized into nine phases. All 62 chapters are present as first drafts.

**Phase 1** — Foundations: Mechanical to Vacuum-Tube Computing  
**Phase 2** — Physics & Devices  
**Phase 3** — Building a CPU & Its Architectures  
**Phase 4** — Software Foundations: OS, Languages & Real-Time Systems  
**Phase 5** — The Bus & System Architecture  
**Phase 6** — Networking: From Serial Links to Datacenter RDMA  
**Phase 7** — Process Technology & Scaling  
**Phase 8** — GPUs and the Rise of AI Accelerators  
**Phase 9** — Where It’s Headed

Welcome.
