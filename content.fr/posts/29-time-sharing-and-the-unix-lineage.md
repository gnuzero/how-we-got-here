---
title: "Temps partagé et lignée Unix"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 28
aliases:
  - /posts/22-time-sharing-and-the-unix-lineage/
  - /posts/27-time-sharing-and-the-unix-lineage/
  - /posts/28-time-sharing-and-the-unix-lineage/
tags: []
summary: "Le batch gardait le CPU occupé ; le temps partagé donne à plusieurs utilisateurs l'illusion de le posséder — ambition Multics, puis simplicité Unix"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

Le traitement par lots a résolu le débit — garder le CPU cher occupé entre les travaux. Il n'a rien fait pour l'interactivité. Le temps partagé, au début et au milieu des années 1960, résout une autre contrainte : laisser plusieurs utilisateurs interagir *en même temps*, chacun avec l'illusion d'avoir la machine seul.

## L'astuce : commutation rapide

Un CPU est rapide par rapport au temps de réaction humain. Commuter entre les processus de beaucoup d'utilisateurs plusieurs fois par seconde — chacun reçoit une petite tranche — et personne ne perçoit les trous. Corbató et Vyssotsky : le temps partagé est « basically the rapid time-division multiplexing of a central processor unit among the jobs of several users, each of which is on-line at a typewriter-like console », donnant « the illusion of having the whole machine at his disposal ». ([Corbató & Vyssotsky, FJCC 1965](https://multicians.org/fjcc1.html))

**Multics** (*Multiplexed Information and Computing Service*) commence en 1965 comme projet conjoint MIT / Bell Labs / GE ; il est présenté dans une série d'articles au Fall Joint Computer Conference 1965. Les objectifs incluent des structures hiérarchiques d'information et un système de fichiers nommé symboliquement. ([multicians.org — History](https://multicians.org/history.html) ; [fjcc1](https://multicians.org/fjcc1.html)) Bell Labs se retire du développement en 1969. ([ibid.](https://multicians.org/history.html))

## De Multics à Unix

Ken Thompson et Dennis Ritchie, qui avaient travaillé sur Multics, continuent à bien plus petite échelle — délibérément plus simple, d'abord sur un PDP-7 de rechange. Ritchie et Thompson décrivent Unix comme « a general-purpose, multi-user, interactive operating system » offrant notamment « A hierarchical file system », « Compatible file, device, and inter-process I/O », et une « High degree of portability ». ([Ritchie & Thompson, « The UNIX Time-Sharing System », *CACM* 1974 — archive Bell Labs / Nokia](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html)) Les premières versions tournent sur PDP-7/-9, puis PDP-11. ([ibid.](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html))

Les *pipes* passent des descripteurs de fichier parent→enfant : `pipe()` « creates an inter-process channel » ; une lecture sur le pipe attend qu'un autre processus écrive. ([ibid.](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html))

**Essaie maintenant.** Démarrez la VM ci-dessous, cliquez l'écran, puis lancez `uname`, `whoami` et `ls` — un shell de lignée Unix vivant, pas un diagramme.

{{< lab type="vm-terminal" height="600" >}}

## La scission : BSD et System V

L'histoire de licences d'Unix est embrouillée (restrictions liées à l'antitrust AT&T, qui paradoxalement encouragent la diffusion académique). Elle finit par se scinder en deux grandes lignées : **BSD** (Berkeley Software Distribution) et la ligne commerciale **System V** d'AT&T. Les deux se croisent pendant des années. **Notre interprétation** du paysage moderne : macOS porte une lignée BSD profonde ; beaucoup d'Unix d'entreprise descendent plutôt de System V.

Ensuite : [Le mouvement GNU et Linux]({{< relref "30-the-gnu-movement-and-linux" >}}).

## Sources

- Corbató & Vyssotsky, FJCC 1965 : <https://multicians.org/fjcc1.html>
- Multicians — History : <https://multicians.org/history.html>
- Ritchie & Thompson, CACM 1974 : <https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html>
