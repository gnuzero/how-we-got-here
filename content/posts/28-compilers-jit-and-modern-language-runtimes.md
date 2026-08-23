---
title: "Compilers, JIT, and Modern Language Runtimes"
date: 2026-01-01
draft: true
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 28
tags: []
summary: "How source code becomes machine code, then and now"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

Post 27 covered *why* high-level languages exist. This post covers the machinery that makes them practically usable at all: the compiler, which translates source code into something a real CPU (built from everything in Phase 3) can actually execute.

## The Classical Compiler Pipeline

A compiler typically works in stages. The **lexer** breaks raw source text into tokens — identifiers, keywords, operators, literals — stripping out whitespace and comments. The **parser** takes that token stream and builds an Abstract Syntax Tree (AST), a structured representation of the program's grammar — which expressions nest inside which statements, how operator precedence groups things. Semantic analysis walks that tree checking things a parser alone cannot catch: type correctness, whether a variable was actually declared before use.

From there, most real compilers lower the AST into an Intermediate Representation (IR) — a lower-level, more uniform format that is easier to analyze and optimize than the original source-level syntax tree, but still independent of any specific target CPU's instruction set. The **optimizer** operates on this IR: eliminating dead code that can never execute, hoisting loop-invariant computations out of loops so they are not needlessly recomputed every iteration, inlining small function calls to avoid call overhead, and dozens of other transformations — all provably preserving the program's original behavior while reducing wasted work. Finally, **code generation** translates the optimized IR into actual machine instructions for the target ISA, handling register allocation (deciding which values live in the limited set of physical registers versus needing to spill to memory) along the way.

## Ahead-of-Time vs Just-in-Time

This entire pipeline, run once before the program ever executes, is Ahead-of-Time (AOT) compilation — C and traditional FORTRAN compilers work this way. Just-in-Time (JIT) compilation, used by languages like Java and JavaScript, takes a different approach: initially run code through a simpler interpreter or a fast-but-unoptimized baseline compiler, then *at runtime*, identify "hot" code paths — functions or loops actually being executed frequently — and recompile just those specific paths with heavier, more aggressive optimization.

The reasoning behind JIT is clever: a compiler doing this at runtime has information an AOT compiler never had — actual observed branch behavior, actual observed argument types, actual observed hot paths — which can enable optimizations an AOT compiler cannot safely make without that runtime data. The cost is real: JIT compilation itself consumes CPU cycles during program execution, and a program's first few seconds often run slower than its steady state, before the JIT has identified and optimized the hot paths — the classic "JIT warm-up" tradeoff.

## Language Runtimes: More Than Just Compilation

Modern managed languages (Java, C#, and to varying degrees JavaScript, Python) pair their compiler with a broader runtime system — most consequentially, automatic memory management via garbage collection, which frees programmers from manually tracking every allocation's lifetime (a major source of bugs in languages like C). This shifts real complexity into the runtime itself, trading manual memory-management effort for runtime overhead and, at least historically, less predictable pause behavior — a tradeoff that matters enormously for real-time systems, which is exactly why Posts 29 and 30 treat "real-time" and "garbage-collected managed runtime" as frequently being in tension with each other.

## A Place to See This Live

The VM terminal lab attached to this post gives you a real environment to compile something — try running `gcc` on a small C program and inspecting the resulting assembly output with `-S`, watching the abstractions from this post become concrete machine instructions.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
