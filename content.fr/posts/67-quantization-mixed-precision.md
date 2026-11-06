---
title: "Quantification et précision mixte"
weight: 67
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 66
aliases:
  - /posts/59-quantization-mixed-precision/
  - /posts/65-quantization-mixed-precision/
  - /posts/66-quantization-mixed-precision/
tags: []
summary: "Moins de bits par MAC, plus de MAC dans le même budget de puissance — mélanger la précision là où l'exactitude l'exige encore"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

L'efficacité des tensor cores et des tableaux systoliques dépend de la précision numérique sur laquelle ils tournent. Voici pourquoi la précision plus basse est devenue un levier central — et ce qu'on trade pour l'obtenir.

## Ce que « précision » veut dire ici

Les formats traduisent plage contre précision avec un budget de bits fixe. FP32 (signe, 8 bits d'exposant, 23 de mantisse dans l'IEEE 754 binary32) est le défaut scientifique classique. FP16 (*binary16*) occupe 16 bits avec 5 bits d'exposant. ([Wikipedia — Half-precision floating-point format](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)) BF16 (*bfloat16*) « preserves the approximate dynamic range of 32-bit floating-point numbers by retaining 8 exponent bits, but supports only an 8-bit precision rather than the 24-bit significand » — plage dynamique privilégiée sur grain fin. Développé chez Google Brain pour le TPU v2 (2017). ([Wikipedia — Bfloat16 floating-point format](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format)) FP8 va plus loin ; INT8 abandonne le flottant pour des entiers fixes plus un facteur d'échelle vers la plage voulue.

## Moins de bits, plus de débit

Un MAC FP32 demande plus de transistors et de puissance qu'un MAC FP16 ou INT8. Sous budget d'aire et de puissance fixe (le mur thermique lie encore les accélérateurs), une précision plus basse packe plus de débit MAC parallèle dans la même enveloppe. C'est une raison *physique* — pas seulement un choix algorithmique — pour laquelle tensor cores et tableaux systoliques sont souvent conçus autour de formats à précision réduite. Le TPU d'origine poussait déjà des MAC 8 bits pour l'inférence. ([Jouppi et al., ISCA 2017](https://arxiv.org/pdf/1704.04760.pdf))

## Ce qu'on trade

Précision réduite signifie valeurs plus grossières et plus d'erreur d'arrondi sur de longues chaînes. Empiriquement, beaucoup de réseaux de neurones le tolèrent bien — surtout en inférence, et avec soin sur de grandes parties de l'entraînement — ce qui n'était pas évident d'avance ; il a fallu le montrer.

## Mixte, pas simplement « bas »

Micikevicius et al. (ICLR 2018) entraînent « using IEEE half-precision format (FP16) » tout en maintenant « a master copy of weights in FP32 », avec *loss-scaling* et « FP16 arithmetic with accumulation in FP32 », pour matcher l'accuracy FP32. ([Micikevicius et al., « Mixed Precision Training », 2018](https://arxiv.org/pdf/1710.03740.pdf)) La précision basse là où le débit matériel gagne ; la précision haute là où l'arrondi composerait — d'où le terme *mixte*, pas simplement *bas*.

## Levier suivant

La précision rend chaque opération moins chère. Le prochain chapitre vise à *sauter* certaines opérations quand un zéro connu ne contribuerait rien.

Ensuite : [La sparsité dans le matériel]({{< relref "68-sparsity-in-hardware" >}}).

## Sources

- Wikipedia — Half-precision floating-point format ; Bfloat16 floating-point format
- Jouppi et al., TPU ISCA 2017
- Micikevicius et al., « Mixed Precision Training » (ICLR 2018 / arXiv)
