---
title: "Virtual Memory and Multitasking"
date: 2026-01-01
draft: true
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 24
tags: []
summary: "How the OS learned to lie to every program about owning the machine"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Time-sharing (Post 22) requires multiple processes to run — apparently simultaneously — on one machine. That raises an immediate problem: if every process could freely read and write any physical memory address, one buggy or malicious program could trivially corrupt another's data, or the OS's own. Virtual memory is the mechanism that prevents this, by giving every process the *illusion* of owning the entire address space, while the OS quietly manages the truth underneath.

## The Core Illusion

Every process sees a full virtual address space — on a 64-bit system, an enormous range of addresses, far larger than physical RAM actually installed. When a process references a virtual address, hardware (a Memory Management Unit, or MMU) translates it into a physical address, using a page table maintained by the OS. Two processes can both reference "virtual address 0x1000," and the MMU will translate those to two completely different physical locations — each process cannot see or touch the other's memory, even though from inside each process's own view it looks like ordinary, exclusively owned memory.

## Page Tables and Page Faults

Memory is divided into fixed-size chunks called pages (commonly 4KB). The page table maps virtual pages to physical page frames. Critically, not every virtual page needs a physical frame *at all times* — a page can be marked "not present," and if a process references it, the hardware triggers a page fault, trapping into the OS. The OS can then decide what to do: maybe that page needs to be loaded from disk (this is how program code and data are lazily brought into memory rather than loaded all at once), or maybe it is a genuine error (accessing memory the process was never granted, which is what a segmentation fault actually is under the hood).

This same page-fault mechanism enables swapping: when physical memory is under pressure, the OS can write a rarely used page out to disk and mark it not-present, freeing that physical frame for something more actively needed — the classic mechanism (though increasingly less common with modern RAM sizes) for making a system behave as if it has more memory than it physically does, at the cost of disk-speed access if that swapped-out page gets touched again.

## Isolation as a Security Property

Beyond enabling multitasking, this translation layer is a fundamental security boundary. A process simply has no *mechanism* to address another process's physical memory directly — there is no valid virtual address in its own page table that maps there. That is why memory corruption bugs in one well-behaved, properly sandboxed process do not (in principle) let it read or corrupt an unrelated process's data; the isolation is enforced by hardware-checked address translation, not just by good behavior or convention.

## Where This Leads

Virtual memory gives every process its own isolated address space — a strong guarantee, but a relatively heavyweight one, since each process traditionally also gets its own kernel data structures, its own page tables, and the overhead of a full context switch to move between them. Containers (the next post) ask a different question: can you get *most* of the practical isolation multiple processes need, without paying the full cost of giving each one an entirely separate operating system kernel?

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->
