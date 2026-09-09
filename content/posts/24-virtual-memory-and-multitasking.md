---
title: "Virtual Memory and Multitasking"
weight: 24
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 24
tags: []
summary: "Time-sharing needs isolation — virtual memory gives every process the illusion of owning the machine"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Time-sharing (Post 22) requires multiple processes to run — apparently simultaneously — on one machine. Immediate problem: if every process could freely read and write any physical address, one buggy or malicious program could corrupt another's data, or the OS itself. Virtual memory prevents that by giving every process the *illusion* of owning the entire address space, while the OS manages the truth underneath.

## The Core Illusion

Every process sees a full virtual address space — on a 64-bit system, far larger than physical RAM. When it references a virtual address, hardware (a Memory Management Unit, or MMU) translates to a physical address via a page table the OS maintains. Two processes can both reference "virtual address 0x1000" and hit two different physical frames — neither can see the other's memory, even though from inside each process it looks like ordinary, exclusive ownership.

## Pages, Faults, Swap

Memory is divided into fixed-size pages (commonly 4 KB on many architectures; larger "huge pages" also exist). The page table maps virtual pages to physical frames. Critically, not every virtual page needs a frame *at all times* — mark it "not present," and a reference traps into the OS as a page fault. The OS can load the page from disk (lazy bring-in of code and data), or treat it as a genuine error (accessing memory never granted — one common path to a segmentation fault).

The same mechanism enables swapping: under memory pressure, write a cold page to disk, mark it not-present, free the frame. The system behaves as if it has more RAM than it physically does — at disk-speed cost if that page is touched again. Abundant RAM makes heavy swapping less common than it once was; the mechanism remains fundamental.

## Isolation as Security

Beyond enabling multitasking, translation is a security boundary. A process has no *mechanism* to address another process's physical memory — no valid virtual address in its page table maps there. Memory corruption in one well-behaved, sandboxed process does not (in principle) let it read or corrupt an unrelated process; isolation is hardware-checked address translation, not convention.

## Where This Leads

Virtual memory gives every process its own isolated address space — a strong guarantee, and a heavyweight one: own kernel structures, own page tables, full context-switch cost between them. Containers (the next post) ask: can you get *most* of the practical isolation processes need, without paying for an entirely separate kernel per tenant?

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
