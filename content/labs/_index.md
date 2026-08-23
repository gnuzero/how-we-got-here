---
title: "Interactive Labs"
---

Three hands-on labs, embedded directly in relevant posts (or usable standalone below). All run client-side — nothing is sent to a server.

## 🔧 Mini-CPU Lab
A custom 8-bit toy ISA — 4-bit opcode / 4-bit operand, 16 bytes of RAM, A/B registers, carry/zero flags. Write assembly, step through execution cycle by cycle, watch memory and registers change in real time. Built from scratch for this series — same instruction-set shape used in the "Building a CPU" and "Instruction Sets" posts, so what you assemble here maps directly to what those posts explain.

→ [Open Mini-CPU Lab](/labs/mini-cpu/)

## 🍞 Virtual Breadboard
An in-browser circuit simulator (Falstad CircuitJS) for building logic gates, CMOS stages, and small digital circuits without touching real hardware. A link to Wokwi is included for posts that need a real physical-breadboard layout with actual microcontroller firmware instead of a schematic-level simulation.

→ [Open Breadboard Lab](/labs/breadboard/)

## 💻 VM Terminal
A full x86 machine running client-side via WebAssembly (powered by [v86](https://github.com/copy/v86)) — boots a real Linux, gives you a real shell. Used in OS, real-time systems, and networking posts where reading about `ps`, scheduling, or `ping` isn't as useful as running them.

→ [Open VM Terminal Lab](/labs/vm-terminal/)

---

## Embedding a lab in a post

```markdown
{{</* lab type="mini-cpu" */>}}
{{</* lab type="breadboard" height="700" */>}}
{{</* lab type="vm-terminal" height="600" */>}}
```

See `TRACKER.md` / individual post frontmatter (`labs:` field) for which posts already have a lab assigned.
