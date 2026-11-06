---
title: "Systèmes temps réel et ordonnancement déterministe"
weight: 36
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 35
aliases:
  - /posts/29-real-time-systems-and-deterministic-scheduling/
  - /posts/34-real-time-systems-and-deterministic-scheduling/
  - /posts/35-real-time-systems-and-deterministic-scheduling/
tags: []
summary: "Débit et équité ne sont pas des échéances — le temps réel dur exige un pire cas borné, pas une vitesse moyenne"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

Tout ce qui précède dans la phase logiciel — batch, time-sharing, mémoire virtuelle, conteneurs — optimise débit, équité ou partage efficace. Rien de tout cela ne garantit *quand* un travail donné se termine. Les systèmes temps réel portent sur cette garantie. « Rapide » n'est pas « temps réel ».

## Rapide n'est pas déterministe

Un ordonnanceur généraliste optimise la réactivité *en moyenne* et le partage équitable — souvent assez rapide au cas courant. « Souvent rapide » n'est pas « toujours terminé dans une échéance fixée, sans exception ». Effets de cache, traitement d'interruptions ou pauses de *garbage collection* (chapitre précédent) peuvent étirer un délai. Pour la plupart des applications, une variance occasionnelle ne compte pas. Pour un système temps réel, c'est tout le jeu.

## Dur vs souple

Une échéance **dure** : la manquer est une défaillance totale du système — pas une performance dégradée. Stabilisation de vol, déclenchement d'airbag — chaque fois, dans la fenêtre, sinon la défaillance peut être catastrophique.

Une échéance **souple** : la manquer dégrade la qualité sans échec franc — une image vidéo perdue sous charge est désagréable, pas une crise de certification. Forte tendance pratique à tenir les délais ; pas une garantie matérielle.

## Ordonnancement rate-monotonic

Liu et Layland (1973) étudient l'ordonnancement multiprogrammé « in a Hard-Real-Time Environment ». Hypothèses : requêtes périodiques (A1) ; l'échéance d'une requête est l'arrivée de la suivante (A2). ([Liu & Layland, *J. ACM* 20(1), 1973](https://www.cs.ru.nl/~hooman/DES/LiuLayland.pdf))

Ils définissent l'affectation de priorités **rate-monotonic** : priorité fixe selon la période — période plus courte → priorité plus haute. Théorème 2 : « If a feasible priority assignment exists for some task set, the rate-monotonic priority assignment is feasible for that task set. » ([ibid.](https://www.cs.ru.nl/~hooman/DES/LiuLayland.pdf))

Borne classique d'utilisation : pour *m* tâches à priorités fixes (sous une restriction de rapport de périodes), « the least upper bound to the processor utilization factor is \(U = m(2^{1/m} - 1)\) ». ([Theorem 4, ibid.](https://www.cs.ru.nl/~hooman/DES/LiuLayland.pdf)) Quand \(m\) croît, cette borne tend vers \(\ln 2 \approx 0{,}69\) — exactement le genre de propriété formelle contre laquelle certifier un système temps réel dur.

## Pourquoi un autre genre d'OS

Tenir ces garanties demande un OS conçu autour du *pire cas borné* — un RTOS — pas la lignée débit/équité des chapitres précédents. La latence d'interruption doit être bornée et connue. L'allocation mémoire ne peut en général pas s'appuyer sur un GC généraliste à latence imprévisible. Même un mutex demande un soin (héritage de priorité) pour qu'une tâche basse priorité ne bloque pas une haute pour un temps non borné — *priority inversion*, piège classique.

Revoir le lab mini-CPU sous cet angle : sur un matériel simple, le timing de chaque instruction est déterministe et comptable — la prévisibilité que le design RTOS cherche à préserver quand les systèmes se complexifient.

{{< lab type="mini-cpu" >}}

Ensuite : [Systèmes temps réel en pratique]({{< relref "37-real-time-systems-in-practice" >}}).

## Sources

- Liu & Layland, « Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment », *J. ACM* 20(1), janv. 1973 (PDF cs.ru.nl) : <https://www.cs.ru.nl/~hooman/DES/LiuLayland.pdf>
