---
title: "Le début de la hiérarchie mémoire"
weight: 17
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "Les basculeurs coûtent trop cher par bit — la SRAM achète la vitesse, la DRAM la densité, et la hiérarchie répète ce compromis"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

Le chapitre précédent a construit un bit de mémoire avec des basculeurs. Ça marche — et ça coûte cher. Ici, on suit le moment où les concepteurs acceptent qu'une mémoire ne peut pas être à la fois grande, rapide et bon marché, et l'organisent par niveaux.

## 1946 : la hiérarchie écrite noir sur blanc

Dans *Preliminary Discussion…* (IAS, 1946), Burks, Goldstine et von Neumann posent un idéal : capacité illimitée, chaque mot de 40 chiffres binaires disponible immédiatement — plus vite qu'une multiplication rapide, estimée vers 100 microsecondes, donc 5–50 µs par mot. Puis : « It does not seem possible physically to achieve such a capacity. We are therefore forced to recognize the possibility of constructing a hierarchy of memories, each of which has greater capacity than the preceding but which is less quickly accessible. » ([IAS 1946, §4.1 — transcription UNC](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html); [scan IAS](https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf))

Ils chiffrent le coût en basculeurs : une mémoire de n mots demanderait « about 40n such elements », et pour quelques milliers de mots « about 10⁵ flip-flops » — « entirely impractical ». ([ibid., §4.1](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html)) D'où le Selectron et, plus bas, un stockage secondaire puis un « dead storage ».

## SRAM : rapide, stable, gourmande en surface

Le Computer History Museum écrit que, jusqu'au milieu des années 1970, les tores de ferrite magnétiques restent la RAM dominante au plus bas coût par bit ; les RAM bipolaires entrent pour les *scratchpad* et les caches haute performance. Robert Norman brevète un design de RAM statique semi-conducteur chez Fairchild en **1963** ; en **1965**, IBM réalise le SP95, RAM de 16 bits pour le System/360 Model 95. Le System/370 Model 145, livré en **1971**, est le premier ordinateur commercial IBM à mémoire principale semi-conducteur. ([CHM — 1966: Semiconductor RAMs…](https://www.computerhistory.org/siliconengine/semiconductor-rams-serve-high-speed-storage-needs/))

**Notre interprétation** (non chiffrée par le CHM) : une cellule SRAM tient le bit dans une paire d'inverseurs croisés — la même rétroaction que le basculeur — plus des transistors d'accès ; le bit reste tant que l'alimentation est là, sans rafraîchissement.

## DRAM : dense, bon marché, exigeante

La densité vient de la mémoire dynamique. Le CHM décrit des premiers DRAM à 4–6 transistors par bit ; Bill Regitz (Honeywell) propose une cellule à 3 transistors, implémentée par Karp dans le procédé Intel — d'où le **1103**, « priced at 1 cent/bit », qui remplace rapidement les tores comme mémoire principale à partir de **1970**. ([CHM — 1970: MOS Dynamic RAM…](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/)) Le centime/bit est le prix rapporté par le musée, pas un coût de fab.

La cellule qui gagne est encore plus simple. Le brevet de Robert H. Dennard (IBM), US 3,387,286, déposé le **14 juillet 1967** et délivré le **4 juin 1968**, décrit des cellules à un seul transistor à effet de champ et un condensateur. La lecture peut être destructive : « the read out is destructive ». Et la charge fuit : « Since the charge on the capacitor does leak off, it is necessary to periodically regenerate the information stored in the memory ». ([Google Patents — US3387286A](https://patents.google.com/patent/US3387286A/en)) Le CHM note que Mostek adopte la cellule à un transistor de Dennard au niveau 16K (MK4116) en **1976**. ([CHM — 1970](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/)) Nous ne donnons pas d'intervalle de rafraîchissement : le brevet l'exige sans le chiffrer dans les sources ouvertes ici.

## La hiérarchie que cela prépare

Registres (basculeurs) en haut ; cache SRAM ensuite ; DRAM en mémoire principale ; disque/SSD en dessous. Les pages CHM montrent le même compromis qu'en 1946 : semi-conducteurs bipolaires d'abord sur les niveaux petits et rapides, DRAM 1103 sur la principale au critère du prix. ([CHM 1966](https://www.computerhistory.org/siliconengine/semiconductor-rams-serve-high-speed-storage-needs/); [CHM 1970](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/))

**Essaie maintenant.** Le labo ci-dessous n'est pas une cellule mémoire — c'est la même porte AND. Retiens la différence du chapitre 15 : à une porte, la sortie suit tout de suite ; la mémoire apparaît quand la sortie revient dans l'entrée.

{{< lab type="breadboard" height="700" >}}

Ensuite : [Jeux d'instructions]({{< relref "18-instruction-sets" >}}).

## Sources

- Burks / Goldstine / von Neumann — IAS 1946 §4 : <https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html> · <https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf>
- CHM Silicon Engine — 1966 RAM ; 1970 DRAM : <https://www.computerhistory.org/siliconengine/semiconductor-rams-serve-high-speed-storage-needs/> · <https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/>
- Dennard — US 3,387,286 : <https://patents.google.com/patent/US3387286A/en>
