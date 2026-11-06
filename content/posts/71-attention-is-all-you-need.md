---
title: "Attention Is All You Need"
weight: 71
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 70
aliases:
  - /posts/63-attention-is-all-you-need/
  - /posts/69-attention-is-all-you-need/
  - /posts/70-attention-is-all-you-need/
tags: ["attention", "transformers", "neural networks"]
summary: "Self-attention closed the spine — parallel sequence modeling that maps onto the matmul hardware the journey built"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

The title of this series is *From Relays to Attention*. Everything up to here was the long physical and architectural path that made large-scale matrix multiplication practical. This chapter is the algorithmic destination that path enabled.

In 2017, **Vaswani et al.** published "Attention Is All You Need." The paper introduced the Transformer and made *self-attention* the primary mechanism for modeling sequences — replacing the sequential recurrence of RNNs and LSTMs with a fully parallelizable operation that can look at every position at once.

## What Self-Attention Does

Given token embeddings, self-attention computes for every position a weighted combination of values at all positions. Weights come from similarity between a *query* (current position) and *keys* (every position). In matrix form:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\), and \(V\) are linear projections of the input.
- Scaling by \(\sqrt{d_k}\) keeps softmax from saturating when dimension is large.
- The result is a same-length sequence where each position gathered from every other in a data-dependent way.

Because the op is matmuls plus a softmax, it maps onto the hardware of the previous chapters: high-throughput MAC units, large on-chip memories, interconnects that move activations and weights.

## Multi-Head Attention

One head tends to learn one kind of relationship. Multi-head attention runs several in parallel (different learned projections) and concatenates — syntactic, semantic, positional, long- and short-range in the same layer.

The original Transformer's base model used 8 heads (the big model used 16). Modern LLMs typically use tens to low hundreds of query heads per layer (e.g. GPT-3: 96; Llama 3 405B: 128) across tens to ~100+ layers (Llama 3 405B: 126) — not routinely "hundreds" of either.

## Why It Became Dominant

1. **Parallelism** — Unlike RNNs, every position can run at once. Training throughput scales with sequence length and hardware matmul capacity, not sequential steps.
2. **Long-range dependency** — In principle any token attends directly to any other, limited by the quadratic attention matrix and practical context windows.
3. **Hardware affinity** — The dominant work is dense matrix multiplication — exactly what tensor cores, systolic arrays, and modern GPU memory hierarchies were optimized for (Posts 55–58).

The quadratic cost of full attention remains real — hence sparse, linear, sliding-window, and other approximations. The core insight still stands: a simple, parallelizable attention mechanism could replace recurrence.

## Closing the Arc

From electromagnetic relays that implemented Boolean logic, through tubes, transistors, pipelines, caches, GPUs, and tensor cores, the hardware trajectory made switching, storage, and arithmetic faster, denser, and more efficient. Attention is the algorithmic structure that currently extracts the most value from that hardware for sequence modeling.

Physical constraints keep changing (memory bandwidth, energy per op, interconnect latency). The engineering response is the same pattern since the beginning of this series: name the binding constraint precisely, then change the architecture rather than only pushing harder against the same wall.

That is the continuous thread from relays to attention.

**Door out:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — the primary paper that introduced the Transformer and made self-attention the dominant sequence-modeling mechanism.

