---
title: "Glossaire"
weight: 102
date: 2026-01-01
draft: false
phase: "Reference"
series_index: 101
aliases:
  - /posts/99-glossary/
tags: ["glossary", "reference"]
summary: "Termes clés de la série, définis précisément et reliés aux chapitres FR"
---

# Glossaire

Référence concise des termes les plus importants de *Comment nous y sommes arrivés*. Chaque entrée renvoie au chapitre FR qui développe et cite.

**Attention (self-attention)**  
Mécanisme qui calcule, pour chaque position d'une séquence, une somme pondérée des vecteurs valeur de toutes les positions. Les poids viennent de la similarité entre vecteurs *query* et *key*. Motif computationnel central du Transformer. → [Attention Is All You Need]({{< relref "71-attention-is-all-you-need" >}})

**Prédiction de branche (*branch prediction*)**  
Spéculation matérielle sur la direction des branches conditionnelles pour que le pipeline continue à fetch / exécuter sans attendre la résolution de la condition. → [Prédiction de branchement]({{< relref "21-branch-prediction" >}})

**Cache**  
Petite mémoire rapide qui retient données ou instructions récemment utilisées pour que le processeur n'attende pas la mémoire principale bien plus lente à chaque accès. → [Caches]({{< relref "22-caches" >}}) ; début de hiérarchie dans [La hiérarchie mémoire commence]({{< relref "17-the-memory-hierarchy-begins" >}})

**Chiplet**  
Die plus petit, assemblé avec d'autres chiplets dans un package pour former un processeur ou accélérateur logique plus grand — réponse au rendement aux nœuds avancés. → [Chiplets et packaging avancé]({{< relref "59-chiplets-advanced-packaging" >}})

**Logique combinatoire**  
Logique dont les sorties ne dépendent que des entrées courantes (pas de mémoire d'état antérieur). Construite à partir de portes ; opposée à la logique séquentielle. → [Des portes à la logique combinatoire]({{< relref "15-from-gates-to-combinational-logic" >}})

**CUDA**  
Plateforme de calcul parallèle et modèle de programmation NVIDIA permettant d'exécuter du code généraliste sur GPU (créé 2004, sorti 2007). → [Pourquoi les GPU existent]({{< relref "60-why-gpus-exist" >}}) ; [Cœurs CUDA, warps et occupancy]({{< relref "61-cuda-cores-warps-and-occupancy" >}})

**Chemin de données (*datapath*)**  
Ensemble des unités fonctionnelles (ALU, registres, multiplexeurs, etc.) qui réalisent l'arithmétique et le mouvement de données d'une instruction. → [Conception du chemin de données]({{< relref "19-datapath-design" >}})

**FinFET**  
Structure de transistor dont le canal est une « ailette » verticale. Succède aux MOSFET planaires ; succédé lui-même par les dispositifs Gate-All-Around (GAA) aux nœuds les plus avancés. → [FinFET vers GAA]({{< relref "57-finfet-to-gaa" >}})

**Architecture de jeu d'instructions (ISA)**  
Interface entre logiciel et matériel : l'ensemble des instructions qu'un processeur peut exécuter, avec registres, modèle mémoire et conventions d'appel. → [Jeux d'instructions]({{< relref "18-instruction-sets" >}})

**Multiply-accumulate de matrices (MAC)**  
L'opération \(D = A \times B + C\). Motif arithmétique dominant des réseaux de neurones modernes — raison d'être des unités spécialisées (tensor cores, tableaux systoliques). → [Pourquoi le produit matriciel a remodelé le design]({{< relref "65-why-matrix-multiply-reshaped-chip-design" >}})

**Loi de Moore**  
Observation (et pendant des décennies cible industrielle) sur le nombre économique de composants par circuit intégré — doublement annuel en 1965, puis ≈ tous les deux ans après 1975 ; ce n'est pas une loi d'horloge ni de performance single-thread. → [La loi de Moore]({{< relref "58-moore-s-law" >}})

**Exécution out-of-order**  
Technique microarchitecturale : les instructions s'exécutent dès que leurs opérandes sont prêts, pas strictement dans l'ordre du programme, pour cacher la latence. → [Exécution out-of-order]({{< relref "23-out-of-order-execution" >}})

**Pipeline**  
Découper l'exécution d'instruction en étages pour que plusieurs instructions soient à des stades différents en même temps, ce qui augmente le débit. → [Pipeline]({{< relref "20-pipelining" >}})

**Relais**  
Commutateur électromécanique : une bobine qui, excitée, déplace un contact. Primitive de commutation des premiers calculateurs numériques (Zuse Z3, etc.). → [Relais et logique électromécanique]({{< relref "09-relays-and-electromechanical-logic" >}})

**RISC / CISC**  
*Reduced* vs *Complex Instruction Set Computer* — deux philosophies de conception d'ISA ; les designs haute performance modernes ont largement convergé en pratique. → [La scission x86 vs RISC]({{< relref "26-the-x86-vs-risc-split" >}}) ; [ARM et RISC-V]({{< relref "27-arm-and-risc-v-the-architecture-landscape-today" >}})

**Logique séquentielle**  
Logique qui a de la mémoire (bascules, latches, registres). Ses sorties dépendent à la fois des entrées courantes et de l'état précédent. → [Logique séquentielle]({{< relref "16-sequential-logic" >}})

**Tableau systolique (*systolic array*)**  
Grille régulière d'éléments de traitement qui calculent et passent des données aux voisins selon un rythme — très efficace pour le produit matriciel dense (ex. unité matricielle du TPU). → [Tableaux systoliques]({{< relref "66-systolic-arrays" >}})

**Tensor core**  
Unités matérielles de produit matriciel spécialisées, introduites avec l'architecture NVIDIA Volta (2017). Conçues pour les opérations de matrices en précision mixte du deep learning. → [Tensor cores]({{< relref "63-tensor-cores" >}})

**Transformer**  
Architecture de réseau de neurones introduite dans « Attention Is All You Need » (2017). Bâtie surtout sur self-attention et couches feed-forward ; fondation des grands modèles de langage modernes. → [Attention Is All You Need]({{< relref "71-attention-is-all-you-need" >}})

**Tube à vide (*vacuum tube* / valve)**  
Commutateur / amplificateur électronique antérieur au transistor. Utilisé dans les premiers calculateurs numériques électroniques (ENIAC, etc.). Forte puissance, grande taille, fiabilité limitée. → [L'ère des tubes à vide]({{< relref "10-the-vacuum-tube-era" >}})

**Mémoire virtuelle**  
Technique de gestion mémoire qui donne à chaque processus l'illusion d'un grand espace d'adressage contigu, tandis que le matériel et l'OS mappent ces adresses sur la RAM physique et le stockage secondaire. → [Mémoire virtuelle et multitâche]({{< relref "31-virtual-memory-and-multitasking" >}})

## Sources

- Définitions alignées sur les chapitres FR reliés (citations primaires y restent)
