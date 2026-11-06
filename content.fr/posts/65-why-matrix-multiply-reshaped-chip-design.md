---
title: "Pourquoi le produit matriciel a remodelé le design de puce"
weight: 65
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 64
aliases:
  - /posts/57-why-matrix-multiply-reshaped-chip-design/
  - /posts/63-why-matrix-multiply-reshaped-chip-design/
  - /posts/64-why-matrix-multiply-reshaped-chip-design/
tags: []
summary: "Le calcul IA se réduit au matmul à grande échelle — spécialiser le silicium pour cette forme"
image_prompt: "Infographic showing a neural network layer's forward pass as a matrix multiply mapped onto specialized hardware, clean AI hardware explainer style"
video_prompt: "20-second animation: a neural network layer computation as a matrix multiply through specialized MAC units, clean technical animation"
schematics: "Diagram: neural network layer as matrix multiply + general ALU vs specialized MAC array comparison"
---

Cette phase finale est le matériel bâti pour les charges IA modernes. Pourquoi le design de puce a plié si fort de ce côté devient plus clair une fois dit ce à quoi une « charge IA » se réduit au niveau arithmétique — plus étroit et plus mécanique que la phrase ne le suggère.

## Ce qu'une couche calcule

Une couche fully connected, en forward, est une multiplication de matrices : activations fois poids, puis une non-linéarité élément par élément bon marché. Les convolutions se reformulent souvent en produits matriciels ; le cœur du TPU Google, par exemple, « can perform either a matrix multiply or a convolution ». ([Jouppi et al., « In-Datacenter Performance Analysis of a Tensor Processing Unit », ISCA 2017](https://arxiv.org/pdf/1704.04760.pdf)) L'attention — cœur des transformers derrière la plupart des grands modèles de langage — est elle aussi, au cœur computationnel, des multiplications de matrices : scores query–key, puis valeurs pondérées. Vaswani et al. écrivent l'attention comme `Attention(Q, K, V) = softmax(QK^T / √d_k) V` avec Q, K, V des matrices. ([Vaswani et al., « Attention Is All You Need », 2017](https://arxiv.org/pdf/1706.03762.pdf)) Ce n'est pas une simplification pédagogique : la majorité écrasante des cycles bruts du deep learning moderne, entraînement et inférence, sont du multiply-accumulate de matrices — à échelle massive, répété sans fin.

## Pourquoi le matériel a suivi

Un cœur CPU est bâti pour du code séquentiel arbitraire — branches, accès mémoire variés, flot de contrôle imprévisible. Cette généralité coûte de l'aire et de la puissance en machinerie (prédiction, out-of-order, caches sophistiqués) dont une charge dominée par *une* opération régulière n'a pas besoin.

Une fois le matmul reconnu comme part dominante du calcul IA, le spécialiser est devenu rentable : du silicium qui saute la machinerie généraliste et dépense son budget en débit MAC. Les tensor cores (chapitre précédent) enchâssent cette idée dans un GPU encore généraliste. Le prochain chapitre va plus loin — le tableau systolique — en spécialisant toute l'architecture autour de la même constatation.

## Le motif récurrent

C'est le même *genre* d'histoire que le pivot superscalaire→multicœur et l'évolution planaire→FinFET→GAA, maintenant à l'échelle de l'architecture de puce entière : une fois la forme d'une charge bien comprise et assez dominante, le matériel spécialisé pour cette forme bat le matériel généraliste qui la traite comme un cas parmi d'autres. La dominance du matmul explique pourquoi tant de cette phase est du silicium purpose-built plutôt qu'une amélioration incrémentale de CPU — ou même de GPU généraliste — seule.

Ensuite : [Tableaux systoliques]({{< relref "66-systolic-arrays" >}}).

## Sources

- Vaswani et al., « Attention Is All You Need » (2017, arXiv)
- Jouppi et al., « In-Datacenter Performance Analysis of a Tensor Processing Unit » (ISCA 2017, arXiv)
