---
title: "Compilers, JIT, and Modern Language Runtimes"
weight: 31
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 30
tags: []
summary: "AOT compiles once without runtime facts; JIT waits for hot paths — and garbage collection shifts cost into the runtime"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

Post 27 covered *why* high-level languages exist. This post is the machinery that makes them usable: the compiler, translating source into something a real CPU (Phase 3) can execute.

## The Classical Pipeline (Short)

Lexer → tokens. Parser → Abstract Syntax Tree. Semantic analysis catches what grammar alone cannot (types, undeclared names). Most real compilers then lower to an Intermediate Representation (IR) — more uniform than source syntax, still independent of any target ISA — where the **optimizer** works: dead-code elimination, loop-invariant hoisting, inlining, and dozens of other transformations that preserve behavior while cutting wasted work. **Code generation** emits target instructions and does register allocation (which values live in scarce physical registers versus spilling to memory).

That is the spine. The encyclopedia of every pass is not the point — the constraint is: source abstractions do not run; something must lower them, and that something can run *before* execution or *during* it.

## Ahead-of-Time vs Just-in-Time

Run the whole pipeline once before the program ever executes: Ahead-of-Time (AOT) — C and traditional FORTRAN. Just-in-Time (JIT) — Java, JavaScript, and kin — starts with an interpreter or a fast baseline compiler, then *at runtime* finds hot paths and recompiles those with heavier optimization.

The JIT's advantage is information an AOT compiler never had: observed branches, argument types, actual hot loops — optimizations unsafe to assume without that data. Cost is real: compilation burns cycles during execution, and the first seconds often run slower than steady state — classic warm-up.

## Runtimes: More Than Compilation

Managed languages (Java, C#, and to varying degrees JavaScript and Python) pair the compiler with a broader runtime — most consequentially automatic memory management via garbage collection, freeing programmers from tracking every allocation's lifetime (a major bug source in C). Complexity shifts into the runtime: manual effort traded for overhead and, historically, less predictable pauses. That tension is exactly why Posts 29–30 treat "real-time" and "garbage-collected managed runtime" as frequently at odds.

## See It Live

The VM terminal below is a real Linux system, but a minimal BusyBox one: it has no C compiler (`gcc` answers `gcc: not found`). It can still show both sides of this post. Run `hexdump -C /bin/busybox | head -2`: the file starts `7f 45 4c 46` — `0x7f` then "ELF", the executable format a compiler and linker produce, built ahead of time on another machine long before you booted the VM. Then give an interpreter the same work: `echo 'BEGIN{s=0; for(i=1;i<=1000000;i++) s+=i; print s}' > /tmp/sum.awk`, then `time awk -f /tmp/sum.awk`. It prints `500000500000` after several seconds (about 6 s in our runs; your browser will differ), because awk executes every iteration at run time — a loop an optimizing compiler can reduce to a constant before the program ever runs.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
