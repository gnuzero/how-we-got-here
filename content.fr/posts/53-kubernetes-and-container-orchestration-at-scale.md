---
title: "Kubernetes et l'orchestration de conteneurs à l'échelle"
weight: 53
date: 2026-01-01
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 52
aliases:
  - /posts/45-kubernetes-and-container-orchestration-at-scale/
  - /posts/51-kubernetes-and-container-orchestration-at-scale/
  - /posts/52-kubernetes-and-container-orchestration-at-scale/
tags: []
summary: "Des milliers de conteneurs qui tombent en panne en routine forcent un état désiré déclaratif et une boucle de réconciliation continue"
image_prompt: "System diagram of a Kubernetes cluster showing control plane, nodes, pods, and services, clean cloud-native architecture diagram style"
video_prompt: "25-second animation: a pod failing and Kubernetes automatically rescheduling it onto a healthy node, clean technical animation showing the reconciliation loop"
schematics: "Diagram: Kubernetes control plane architecture (API server/scheduler/controller manager/etcd) + pod scheduling and reconciliation loop"
---

Les conteneurs offrent une isolation légère qui partage le noyau hôte. Un conteneur sur une machine se gère à la main. Des milliers sur des centaines de machines, avec boîtes et processus qui tombent en panne en routine (le même pari « la panne est normale » que GFS), est un autre problème opérationnel. Kubernetes est la réponse ouverte de Google à cette contrainte, distillée de gestionnaires de clusters internes qui l'avaient déjà vécue. ([Wikipedia — Kubernetes](https://en.wikipedia.org/wiki/Kubernetes))

## Le placement manuel ne scale pas

Choisir quelle machine exécute quel processus, redémarrer les crashes, router le trafic vers des instances saines, déployer sans coupure — tractable pour une poignée de conteneurs ; pas pour des flottes de production. Le basculement forcé : un logiciel qui gère en continu placement et récupération pour qu'un humain n'ait pas à remarquer chaque panne.

## État désiré, pas des commandes pas à pas

L'idée porteuse est déclarative, pas impérative. Un opérateur déclare l'état final — « cinq répliques de ce service, avec ces limites » — et le plan de contrôle travaille à faire coller l'état réel du cluster à ce désir tant que le désir reste. La dérive (crash, nœud mort, moins de répliques saines que demandé) n'est pas d'abord une alerte humaine ; c'est un écart que la boucle corrige en planifiant un remplacement. ([Kubernetes docs — Controllers](https://kubernetes.io/docs/concepts/architecture/controller/))

Borg, le gestionnaire de clusters Google, « admits, schedules, starts, restarts, and monitors the full range of applications that Google runs », sur « clusters each with up to tens of thousands of machines », et « offering a declarative job specification language ». ([Verma et al., « Large-scale cluster management at Google with Borg », EuroSys 2015](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43438.pdf))

## Lignée : Borg → Omega → open source

Burns et al. : Google a géré des conteneurs Linux à l'échelle « for more than ten years and built three different container-management systems » — Borg, puis Omega, puis Kubernetes. « Kubernetes is open source—a contrast to Borg and Omega » ; comme Omega, il a au cœur un store partagé persistant, accessible « exclusively through a domain-specific REST API ». ([Burns et al., « Borg, Omega, and Kubernetes », *ACM Queue* 2016](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44843.pdf))

## Pourquoi les clusters ML s'en soucient

La même boucle fait tourner non seulement des services web mais de l'entraînement et de l'inférence distribués — jobs sur beaucoup de machines GPU, qui doivent redémarrer sur panne matérielle routinière et scaler avec la capacité disponible. Relais vers la pile logicielle ML, puis le silicium des phases suivantes : le silicium seul ne place ni ne guérit une flotte d'entraînement.

Ensuite : [La pile logicielle du machine learning]({{< relref "54-the-machine-learning-software-stack" >}}).

## Sources

- Verma et al., Borg (EuroSys 2015) : <https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43438.pdf>
- Burns et al., Borg, Omega, and Kubernetes (ACM Queue 2016) : <https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44843.pdf>
- Wikipedia — Kubernetes
- Kubernetes docs — Controllers : <https://kubernetes.io/docs/concepts/architecture/controller/>
