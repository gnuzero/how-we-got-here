---
title: "Conteneurs et isolement OS moderne"
weight: 32
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 31
aliases:
  - /posts/25-containers-and-modern-os-isolation/
  - /posts/30-containers-and-modern-os-isolation/
  - /posts/31-containers-and-modern-os-isolation/
tags: []
summary: "Les VM complètes achètent un isolement fort au prix lourd — namespaces et cgroups partagent un noyau et isolent presque tout le reste"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

La mémoire virtuelle isole les processus les uns des autres en mémoire. Elle ne les isole pas du partage du même système de fichiers, de l'espace de PID, ou de la configuration réseau. Les conteneurs étendent l'isolement sur plus de cette surface, sans aller jusqu'à la virtualisation matérielle complète.

## Virtualisation complète : forte, lourde

Une VM traditionnelle fait tourner un OS invité complet — propre noyau, propres pilotes — sur un hyperviseur. Isolement très fort. Le coût est réel : chaque VM démarre son propre noyau et porte son empreinte.

## Partager le noyau, isoler la vue

Les conteneurs prennent l'autre compromis : chaque conteneur sur un hôte partage le *même* noyau — pas de boot d'OS invité par instance — pendant que le noyau fournit l'isolement pour que la vue de chaque conteneur paraisse séparée.

La page de manuel Linux `namespaces(7)` : « A namespace wraps a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance of the global resource. […] One use of namespaces is to implement containers. » Types listés : Cgroup, IPC, Network, Mount, PID, Time, User, UTS. ([namespaces(7)](https://man7.org/linux/man-pages/man7/namespaces.7.html)) Un namespace PID fait qu'un conteneur ne voit que son propre arbre de processus ; un namespace réseau donne interfaces et routage privés ; un namespace mount une vue de système de fichiers privée.

Les **cgroups** (control groups) limitent et comptabilisent CPU, mémoire et E/S — documentés dans `cgroups(7)` pointé depuis la même page.

La lignée est plus ancienne que le buzzword : `chroot()` « changes the root directory of the calling process » — isolement limité du système de fichiers, utilisé depuis longtemps par des daemons. ([chroot(2)](https://man7.org/linux/man-pages/man2/chroot.2.html)) Les namespaces et cgroups modernes généralisent l'idée.

## Pourquoi le compromis a gagné à l'échelle

Parce que les conteneurs partagent le noyau hôte, ils démarrent en général en une fraction de seconde et portent une empreinte bien plus petite par instance. **Notre interprétation** du déploiement cloud : c'est pourquoi ils sont devenus l'unité de packaging par défaut — bien plus de conteneurs que de VM sur le même matériel. Compromis : un noyau partagé signifie qu'une vulnérabilité noyau assez grave peut, en principe, briser l'isolement d'une façon structurellement plus dure sous virtualisation à noyaux séparés.

{{< lab type="vm-terminal" >}}

Ensuite : [Du code machine à l'assembleur]({{< relref "33-from-machine-code-to-assembly" >}}).

## Sources

- namespaces(7) : <https://man7.org/linux/man-pages/man7/namespaces.7.html>
- chroot(2) : <https://man7.org/linux/man-pages/man2/chroot.2.html>
