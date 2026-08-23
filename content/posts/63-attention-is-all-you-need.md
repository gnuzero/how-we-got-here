---
title: "Attention Is All You Need"
date: 2026-01-01
draft: true
phase: "10 — Modern AI Hardware"
series_index: 63
tags: ["attention", "transformers", "neural networks"]
summary: "The algorithm that closed the arc — self-attention, multi-head attention, and why it became the dominant sequence model"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

The title of this series is *From Relays to Attention*. Everything up to this point has been the long physical and architectural path that made large-scale matrix multiplication practical. This chapter is the algorithmic destination that path enabled.

In 2017, Vaswani et al. published "Attention Is All You Need." The paper introduced the Transformer architecture and, more importantly, made *self-attention* the primary mechanism for modeling sequences. It replaced the sequential recurrence of RNNs and LSTMs with a fully parallelizable operation that could look at every position in a sequence at once.

## What Self-Attention Actually Does

Given a sequence of token embeddings, self-attention computes, for every position, a weighted combination of the values at all positions. The weights are derived from the similarity between a *query* vector (from the current position) and *key* vectors (from every position). In matrix form this is:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\), and \(V\) are linear projections of the input.
- The scaling by \(\sqrt{d_k}\) keeps the softmax from saturating when the dimension is large.
- The result is a new sequence of the same length, where each position has been allowed to gather information from every other position in a data-dependent way.

Because the operation is expressed as matrix multiplies and a softmax, it maps extremely well onto the hardware examined in the previous chapters: high-throughput matrix-multiply units, large on-chip memories, and interconnects that can move the necessary activations and weights.

## Multi-Head Attention

A single attention head tends to focus on one kind of relationship. Multi-head attention runs several attention operations in parallel (different learned projections) and concatenates the results. This lets the model simultaneously attend to different types of information — syntactic, semantic, positional, long-range, short-range — within the same layer.

The original Transformer used 8 heads. Modern LLMs typically use tens to low hundreds of query heads per layer (e.g. GPT-3: 96; Llama 3 405B: 128) stacked across tens to ~100+ layers (Llama 3 405B: 126) — not routinely "hundreds" of either.

## Why It Changed Everything

Three properties made the Transformer the dominant sequence architecture:

1. **Parallelism** — Unlike RNNs, every position can be processed simultaneously. Training throughput scales with sequence length and hardware matrix-multiply capacity rather than being limited by sequential steps.
2. **Long-range dependency** — In principle, any token can attend directly to any other token, limited only by the quadratic cost of the attention matrix and the practical context window.
3. **Hardware affinity** — The dominant operation is dense matrix multiplication. This is exactly what tensor cores, systolic arrays, and modern GPU memory hierarchies were optimized for (see Posts 55–58).

The quadratic cost of full attention remains a real constraint, which is why later work on sparse attention, linear attention, sliding-window attention, and other approximations has been intense. But the core insight — that a simple, parallelizable attention mechanism could replace recurrence — still stands.

## Closing the Arc

From the first electromagnetic relays that could implement Boolean logic, through vacuum tubes, transistors, pipelines, caches, GPUs, and tensor cores, the hardware trajectory has been one of making switching, storage, and arithmetic faster, denser, and more efficient. Attention is the algorithmic structure that currently extracts the most value from that hardware for sequence modeling.

The physical constraints keep changing (memory bandwidth, energy per operation, interconnect latency). The engineering response remains the same pattern seen since the beginning of this series: identify the binding constraint precisely, then change the architecture rather than merely pushing harder against the same wall.

That is the continuous thread from relays to attention.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->
