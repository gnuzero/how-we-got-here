---
title: "L'infrastructure big data de Google — pourquoi ils ont gagné"
weight: 52
date: 2026-01-01
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 51
aliases:
  - /posts/44-google-s-big-data-infrastructure-why-they-won/
  - /posts/50-google-s-big-data-infrastructure-why-they-won/
  - /posts/51-google-s-big-data-infrastructure-why-they-won/
tags: []
summary: "Les données à l'échelle du Web ont forcé un stockage où la panne est normale, puis un modèle de programmation qui cachait le cluster — GFS, MapReduce, Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined, clean technical animation"
schematics: "Diagram: GFS architecture (master/chunkserver) + MapReduce data flow (map→shuffle→reduce) + Bigtable sparse table model"
---

À la fin des années 1990, plusieurs sociétés construisaient de la recherche web. Google n'a pas gagné seulement sur l'astuce de ranking — PageRank comptait, mais l'avantage durable était l'infrastructure : des systèmes capables de stocker et traiter un Web qui change en continu quand une seule machine ne suffirait jamais.

## La contrainte : le Web a dépassé une seule boîte

Indexer « tout le Web » veut dire un jeu de données plus grand qu'aucun disque ou mémoire unique, qui arrive en continu plutôt qu'en instantané unique. Rendre *une* machine plus rapide est un autre problème. Ici : coordonner *beaucoup* de machines pour qu'elles détiennent et traitent ensemble quelque chose de trop grand pour chacune.

## La panne est normale — donc le stockage devait l'assumer

Le Google File System (Ghemawat, Gobioff, Leung, SOSP 2003) part d'une hypothèse que la plupart des systèmes de fichiers traitaient encore comme exceptionnelle : « First, component failures are the norm rather than the exception. » Le système tourne sur « thousands of storage machines built from inexpensive commodity parts » ; à tout moment, certaines machines sont indisponibles. ([Ghemawat et al., « The Google File System », SOSP 2003](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)) Découper les fichiers en grands *chunks*, les répliquer sur des chunkservers, laisser un master suivre où vivent les chunks — perdre une machine devient absorbé automatiquement, pas traité comme crise.

## Traiter sans réinventer le cluster

Le stockage seul ne suffisait pas. MapReduce (Dean & Ghemawat, OSDI 2004) : « Users specify a map function that processes a key/value pair to generate a set of intermediate key/value pairs, and a reduce function that merges all intermediate values associated with the same intermediate key. » Le *système* gère découpage, map parallèle, shuffle/sort, reduce parallèle, et le retry des tâches en échec — « use re-execution as the primary mechanism for fault tolerance ». ([Dean & Ghemawat, « MapReduce… », OSDI 2004](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)) La contrainte était cognitive autant que physique : cacher le cluster pour que la logique du job reste petite.

## Structure au-dessus d'octets bon marché

Bigtable (Chang et al., OSDI 2006) : « a distributed storage system for managing structured data that is designed to scale to a very large size: petabytes of data across thousands of commodity servers », avec un modèle de données simple qui laisse aux clients le contrôle dynamique de la disposition. ([Chang et al., « Bigtable… », OSDI 2006](https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)) Une fois le stockage bulk tolérant aux pannes et un modèle batch en place, l'accès structuré devient la couche forcée suivante.

## Pourquoi c'était le fossé

Les concurrents pouvaient copier des idées de ranking. Répliquer la capacité de stocker, traiter et ré-indexer en continu tout le Web sur du matériel commodity — en traitant la mort de machine comme normale — était bien plus dur. Hadoop et la pile « big data » plus tardive ont suivi les papiers *publiés* même sans le code interne de Google : les papiers montraient comment résoudre la classe de problème.

Le map/reduce batch est puissant et rigide. Le prochain chapitre passe du *traitement* de données distribuées au *déploiement et à la guérison* des nombreux services dont un système distribué mature est fait. (Le chapitre 51, déjà en `content.fr/`, reste en place ; on enchaîne sur l'orchestration.)

Ensuite : [Kubernetes et l'orchestration de conteneurs à l'échelle]({{< relref path="53-kubernetes-and-container-orchestration-at-scale" lang="en" >}}).

## Sources

- Ghemawat, Gobioff, Leung — The Google File System (SOSP 2003) : <https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf>
- Dean & Ghemawat — MapReduce (OSDI 2004) : <https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf>
- Chang et al. — Bigtable (OSDI 2006) : <https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf>
