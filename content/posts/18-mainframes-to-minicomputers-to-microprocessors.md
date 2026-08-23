---
title: "Mainframes to Minicomputers to Microprocessors"
date: 2026-01-01
draft: true
phase: "3 — Building a CPU & Its Architectures"
series_index: 18
tags: []
summary: "How computing scaled down from room-sized mainframes through minicomputers to the single chip"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC (Phase 1) occupied 1,800 square feet and weighed 30 tons. A modern smartphone's CPU outperforms it by many orders of magnitude while fitting on a fingertip. That collapse in size did not happen in one step — it happened across three distinct eras, each defined by a different answer to "who gets to use a computer, and how many of them exist."

## Mainframes: One Machine, Institutional Scale

Through the 1950s and into the 60s, computers were mainframes: room-filling, expensive machines owned by large institutions — universities, corporations, governments — and shared among many users through batch processing (Post 21 covers how that worked in practice). The IBM System/360, launched in 1964, is a landmark for a reason beyond raw scale: it introduced a *family* of compatible machines spanning a wide performance range, all running the same software — an early, deliberate separation of ISA (Post 11) from the specific hardware implementing it, so a customer's software investment survived a hardware upgrade.

## Minicomputers: Smaller, Cheaper, Departmental

By 1970 and through the 1970s, minicomputers such as DEC's PDP-11 (introduced 1970) shrank the machine to something a single department — not just a whole institution — could afford and operate directly, without a centralized computing bureau. Around 600,000 PDP-11s were eventually sold across its lifespan, which stretched into the 1990s. The PDP-11's ISA is influential in its own right: its orthogonal addressing modes and clean instruction encoding shaped later architecture design, including aspects of the C programming language itself (Post 27), which was developed alongside Unix (Post 22) largely on PDP-11 hardware.

## Microprocessors: The Whole CPU on One Chip

The real discontinuity comes with the microprocessor — an entire CPU's logic fabricated on a single integrated circuit, rather than built from a rack of discrete transistors or small-scale-integration chips wired together. Intel's 4004 (1971), originally designed for a calculator, is usually credited as the first commercial single-chip CPU: 4-bit, about 2,300 transistors, clocked at roughly 740 kHz. It is almost comically weak by any modern standard — and it is also the direct technological ancestor of every microprocessor that followed, including the 8080, the Z80, and eventually the x86 lineage covered in the next post.

## Why the Collapse Kept Compounding

Each transition here — mainframe to mini to microprocessor — tracks directly with fabrication improvements from Phase 8: fitting more transistors into less silicon area at lower cost. The mainframe era's machines were built from thousands of discrete components wired together on backplanes; the microprocessor era compressed that entire structure onto one piece of silicon. That compounding density improvement is what turned computing from an institutional resource into first a departmental one, then a personal one, and eventually something embedded invisibly into nearly everything — a scaling curve that Phase 8 traces in far more physical detail, right down to what a modern "7nm" label actually means.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
