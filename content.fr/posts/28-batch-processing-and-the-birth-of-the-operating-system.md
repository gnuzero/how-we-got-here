---
title: "Traitement par lots et naissance du système d'exploitation"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 27
aliases:
  - /posts/21-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/26-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/27-batch-processing-and-the-birth-of-the-operating-system/
tags: []
summary: "Des CPU chers qui restent oisifs entre deux paquets de cartes perforées forcent le premier moniteur résident — logiciel système, pas programme utilisateur"
image_prompt: "Historical illustration of an operator loading punch cards into a batch-processing mainframe, clean vintage computing illustration style"
video_prompt: "20-second animation: punch cards feeding sequentially into a card reader, clean vintage-style motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: batch job queue flow + early OS resident monitor block diagram"
---

Les mainframes du chapitre sur les trois ères ne faisaient pas tourner un système d'exploitation au sens que nous reconnaîtrions. Quelqu'un chargeait un programme, le lançait, attendait, puis chargeait le suivant. Cela marche pour un utilisateur à accès exclusif. Cela s'effondre dès que plusieurs travaux doivent partager une machine chère — ce qui, vu le coût des mainframes, arrive presque tout de suite.

## Le temps mort était la contrainte

Au début, un humain chargeait un paquet de cartes perforées, lançait le travail, recueillait la sortie, chargeait le suivant — pendant que le CPU restait oisif à chaque montage et démontage. Corbató et Vyssotsky (1965) résument le tableau : « Principally for economic reasons, batch processing of computer jobs has been developed and is currently practiced by most large computer installations », avec « the concomitant isolation of the user from elementary cause-and-effect relationships ». ([Corbató & Vyssotsky, « Introduction and Overview of the Multics System », FJCC 1965](https://multicians.org/fjcc1.html))

Le traitement par lots automatise le *séquençage* : on soumet une pile de travaux, et un programme **résident** (un « moniteur » précoce) charge et lance chacun à son tour, sans humain entre deux. **Notre interprétation** : ce moniteur résident est l'ancêtre direct du système d'exploitation — tâche étroite (charger, démarrer, détecter la fin, charger le suivant), mais premier logiciel *système* distinct de tout programme utilisateur, qui tourne en continu pour gérer la machine au nom du travail en cours.

La chronologie CHM place le *Atlas Supervisor* (Manchester / Ferranti Atlas) parmi les premiers systèmes qu'on peut vraiment appeler OS, avec la mémoire virtuelle Atlas. ([CHM Timeline — 1962 Atlas](https://www.computerhistory.org/timeline/1962/))

## L'ordonnancement devient une politique

En mûrissant, les systèmes batch ajoutent des langages de contrôle de travaux (ressources, gestion des pannes, routage de sortie) et des files où les priorités remplacent l'ordre strict de soumission. Priorité, allocation de ressources, politique d'ordonnancement : des préoccupations OS réelles — plus le jugement informel de l'opérateur.

## Ce que le batch ne pouvait pas donner

Pas d'interactivité. Un travail court du début à la fin sans intervention, sans état intermédiaire à inspecter. Un bogue ne surgit souvent qu'après la course complète — parfois des heures plus tard, après avoir brûlé une allocation chère. Pour le travail exploratoire, ce délai était un plafond dur.

**Essaie maintenant.** Démarrez la VM ci-dessous, cliquez l'écran, puis lancez `whoami`, `uname` et `ls`. Ce prompt est l'opposé d'un paquet de cartes — vous intervenez *maintenant*, inspectez l'état, redirigez. Le temps partagé (prochain chapitre) rend cette illusion partageable.

{{< lab type="vm-terminal" height="600" >}}

Ensuite : [Temps partagé et lignée Unix]({{< relref "29-time-sharing-and-the-unix-lineage" >}}).

## Sources

- Corbató & Vyssotsky, FJCC 1965 (Multics overview) : <https://multicians.org/fjcc1.html>
- CHM Timeline 1962 — Atlas / virtual memory / Supervisor : <https://www.computerhistory.org/timeline/1962/>
