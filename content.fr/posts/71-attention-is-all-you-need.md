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
summary: "Le self-attention ferme la colonne — modélisation de séquence parallèle qui se mappe sur le matériel matmul que le parcours a bâti"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

Le titre de cette série est *From Relays to Attention*. Tout jusqu'ici était le long chemin physique et architectural qui a rendu la multiplication de matrices à grande échelle pratique. Ce chapitre est la destination algorithmique que ce chemin a rendue possible.

En 2017, **Vaswani et al.** publient « Attention Is All You Need ». Le papier introduit le Transformer et fait du *self-attention* le mécanisme primaire pour modéliser des séquences — en remplaçant la récurrence séquentielle des RNN et LSTM par une opération pleinement parallélisable qui peut regarder chaque position à la fois. ([Vaswani et al., NeurIPS 2017 / arXiv](https://arxiv.org/pdf/1706.03762.pdf))

## Ce que fait le self-attention

Étant donné des embeddings de tokens, le self-attention calcule pour chaque position une combinaison pondérée des valeurs à toutes les positions. Les poids viennent de la similarité entre une *query* (position courante) et les *keys* (chaque position). Sous forme matricielle :

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\) et \(V\) sont des projections linéaires de l'entrée.
- Le scaling par \(\sqrt{d_k}\) empêche le softmax de saturer quand la dimension est grande.
- Le résultat est une séquence de même longueur où chaque position a rassemblé depuis chaque autre de façon dépendante des données.

Parce que l'op est des matmuls plus un softmax, elle se mappe sur le matériel des chapitres précédents : unités MAC à haut débit, grandes mémoires on-chip, interconnects qui déplacent activations et poids.

## Multi-head attention

Une tête tend à apprendre un genre de relation. Le multi-head attention en lance plusieurs en parallèle (projections apprises différentes) et concatène. Le modèle de base du Transformer original utilise « h = 8 parallel attention layers, or heads » (le grand modèle en utilise 16). ([Vaswani et al., 2017](https://arxiv.org/pdf/1706.03762.pdf)) Les LLM modernes utilisent typiquement des dizaines à une centaine de query heads par couche — p. ex. GPT-3 175B : 96 têtes et 96 couches ; Llama 3.1 405B : 128 têtes d'attention et 126 couches — pas routinièrement « des centaines » de l'un ou de l'autre. ([Wikipedia — GPT-3](https://en.wikipedia.org/wiki/GPT-3) ; [Wikipedia — Llama (language model)](https://en.wikipedia.org/wiki/Llama_(language_model)))

## Pourquoi ça a dominé

1. **Parallélisme** — Contrairement aux RNN, chaque position peut tourner à la fois. Le débit d'entraînement scale avec la longueur de séquence et la capacité matmul du matériel, pas avec des pas séquentiels.
2. **Dépendance longue portée** — En principe tout token attend directement sur tout autre, limité par la matrice d'attention quadratique et les fenêtres de contexte pratiques.
3. **Affinité matérielle** — Le travail dominant est de la multiplication de matrices dense — exactement ce pour quoi tensor cores, tableaux systoliques et hiérarchies mémoire GPU modernes ont été optimisés.

Le coût quadratique de l'attention pleine reste réel — d'où approximations sparses, linéaires, sliding-window, etc. L'insight central tient : un mécanisme d'attention simple et parallélisable pouvait remplacer la récurrence.

## Fermer l'arc

Des relais électromagnétiques qui implémentaient la logique booléenne, en passant par tubes, transistors, pipelines, caches, GPU et tensor cores, la trajectoire matérielle a rendu commutation, stockage et arithmétique plus rapides, plus denses et plus efficaces. L'attention est la structure algorithmique qui extrait actuellement le plus de valeur de ce matériel pour la modélisation de séquences.

Les contraintes physiques continuent de changer (bande passante mémoire, énergie par op, latence d'interconnect). La réponse d'ingénierie est le même motif depuis le début de cette série : nommer précisément la contrainte qui lie, puis changer l'architecture plutôt que pousser seulement plus fort contre le même mur.

C'est le fil continu des relais à l'attention.

**Porte de sortie :** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser et Illia Polosukhin, « Attention Is All You Need » (NeurIPS 2017).

Ensuite : [Qui décide du fil]({{< relref "72-who-decides-the-wire" >}}).

## Sources

- Vaswani et al., « Attention Is All You Need » (2017, arXiv)
- Wikipedia — GPT-3 (table d'architecture 175B) ; Llama (language model) (table Llama 3.1 405B)
