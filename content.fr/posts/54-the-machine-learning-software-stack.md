---
title: "La pile logicielle du machine learning"
weight: 54
date: 2026-01-01
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 53
aliases:
  - /posts/46-the-machine-learning-software-stack/
  - /posts/52-the-machine-learning-software-stack/
  - /posts/53-the-machine-learning-software-stack/
tags: []
summary: "Entre un modèle et le silicium se trouve une pile qui transforme les tenseurs en entraînement distribué — et heurte le mur d'interconnect"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

Les phases GPU et accélérateurs couvrent le matériel du calcul IA moderne. La plupart des ingénieurs ML ne programment pas ce silicium directement. Une pile logicielle s'intercale entre « voici une architecture de réseau » et « voici des multiplications de matrices sur de vrais devices » — c'est ainsi que le fil systèmes distribués de cette série est réellement *utilisé*.

## D'abord les tableaux

Le plancher pratique : tableaux multidimensionnels (tenseurs) et opérations vectorisées — calcul numérique style NumPy dans le monde Python. Le gros du travail tourne dans des routines compilées *appelées depuis* Python ; la boucle de l'interpréteur n'est pas le goulot pour les maths.

## Frameworks : gradients et matériel comme un seul contrat

Les frameworks de deep learning — **PyTorch** (issu de Meta / Torch, aujourd'hui sous Linux Foundation) et **TensorFlow** (Apache 2.0) comme exemples dominants — ajoutent ce dont l'entraînement a besoin au-dessus des tableaux. ([Wikipedia — PyTorch](https://en.wikipedia.org/wiki/PyTorch) ; [Wikipedia — TensorFlow](https://en.wikipedia.org/wiki/TensorFlow)) La **différenciation automatique** construit un graphe de calcul et produit les gradients sans que l'humain redérive le calcul pour chaque architecture. Une **abstraction matérielle** laisse le même code de modèle cibler CPU, GPU NVIDIA via CUDA, ou d'autres accélérateurs en abaissant les ops tenseur vers des kernels optimisés.

**Fil français (écosystème, pas le silicium).** Hugging Face, fondée en 2016 à New York par les entrepreneurs français Clément Delangue, Julien Chaumond et Thomas Wolf, a pivoté vers une plateforme de modèles et datasets et la bibliothèque open-source Transformers — couche largement utilisée au-dessus de PyTorch/TensorFlow. ([Wikipedia — Hugging Face](https://en.wikipedia.org/wiki/Hugging_Face)) Mistral AI SAS, société française d'IA basée à Paris, fondée en 2023 par Arthur Mensch, Guillaume Lample et Timothée Lacroix, développe des grands modèles de langage sur cette même classe de pile. ([Wikipedia — Mistral AI](https://en.wikipedia.org/wiki/Mistral_AI))

## Abaisser le graphe

Une couche compilateur s'intercale de plus en plus entre ops de framework et kernels device : fusionner des opérateurs, couper le trafic mémoire, abaisser une représentation intermédiaire vers la cible — l'idée compilateur appliquée aux graphes de tenseurs plutôt qu'au code impératif général.

## La distribution heurte le fil

La mémoire d'un seul GPU ne tient souvent pas un grand modèle moderne, encore moins pour l'entraîner seul. Le **parallélisme de données** réplique le modèle, découpe le batch, synchronise les gradients (all-reduce). Le **parallélisme de modèle** découpe le modèle lui-même entre devices quand il ne tient nulle part d'un coup. L'entraînement réel mélange les deux. Le débit est alors souvent limité par la vitesse d'échange de gradients et d'activations entre GPU — pas par la vitesse d'une seule multiplication isolée. Le mur d'interconnect revient comme mur d'entraînement.

## Boucler la phase

L'entraînement ML moderne est un problème de systèmes distribués en costume de réseau de neurones : coordonner beaucoup d'unités de calcul, absorber les pannes partielles (GFS, Kubernetes), déplacer d'énormes données intermédiaires efficacement. Matériel sans cette moitié logicielle — ou logiciel sans silicium et fabric — n'est que la moitié de l'histoire.

Ensuite : [Ce que « 7 nm » veut vraiment dire]({{< relref "55-what-7nm-actually-means" >}}).

## Sources

- Wikipedia — PyTorch ; TensorFlow ; Hugging Face ; Mistral AI
