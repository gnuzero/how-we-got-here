---
title: "PCIe deep dive"
weight: 40
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 39
aliases:
  - /posts/33-pcie-deep-dive/
  - /posts/38-pcie-deep-dive/
  - /posts/39-pcie-deep-dive/
tags: []
summary: "L'intention circule en TLP ; fiabilité et signalisation sont en dessous — la pile qui a remplacé le bus partagé"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

Le chapitre précédent a couvert *pourquoi* PCIe est passé en série et point-à-point. Ici : *comment* un transfert est structuré sur ces liens — la couche qui compte si l'on construit du matériel qui doit parler le fabric.

## Intention, fiabilité, électrons

PCI-SIG présente l'architecture en couches pour modularité et réutilisation. **Transaction** : protocole à paquets, transactions découpées (*split-transaction*), contrôle de flux à crédits. **Data Link** : « Reliable data transport services (CRC, Retry, Ack/Nak) ». **Logical PHY / Electrical** : échange physique, initialisation, form factors. ([PCI-SIG, « 30 Years of PCI-SIG Innovation », 2023](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)) Découpage pour qu'un design custom puisse exprimer une *intention* sans réinventer les électrons.

## Le paquet est le contrat

L'unité est le *Transaction Layer Packet* (TLP). PCI-SIG note encore, côté overhead, « 236B for TLP, 6B for DLP » dans le contexte des évolutions de protocole. ([ibid.](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)) Un TLP nomme le type (lecture/écriture mémoire, I/O, configuration), l'adresse, la longueur, et — en écriture — la charge utile. La couche liaison l'enveloppe avec séquence et CRC ; le côté distant vérifie et retransmet au besoin. Vu d'en haut : une lecture ou écriture fiable. La fiabilité n'est pas magique. C'est cette enveloppe.

## Les voies multiplient la largeur ; les générations multiplient le débit

Une voie (*lane*) est une paire différentielle dans chaque sens — le plus petit lien. PCI Express démarre à « Differential, full-duplex signaling at 2.5GT/s » avec largeurs « x1, x2, x4, x8, x12, x16, x32 ». ([ibid.](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf))

Table PCI-SIG (bande passante x16, débit brut de données) : Gen 1 — 2.5 GT/s (8b/10b) → 32 Gb/s ; Gen 3 — 8.0 GT/s (128b/130b) → 126 Gb/s ; Gen 5 — 32.0 GT/s → 504 Gb/s. ([ibid.](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)) En octets approximatifs : ~16 Go/s (Gen 3) contre ~63 Go/s (Gen 5) sur le même slot x16 — sans fils supplémentaires. Le pari série du chapitre précédent est ce qui a rendu cette montée possible.

## Pourquoi un fabric custom s'en soucie

Une carte FPGA mémoire-fabric doit vivre dans cette pile : former des TLP que le *root complex* et les autres endpoints acceptent, et laisser l'IP établie gérer fiabilité de lien et couche physique. Les transferts *peer-to-peer* style GPUDirect (chapitre interconnects) poussent la même idée plus loin — TLP adressés entre deux endpoints, CPU hors du chemin de données.

Ensuite : [Buses mémoire]({{< relref "41-memory-buses" >}}).

## Sources

- PCI-SIG, « 30 Years of PCI-SIG Innovation » (2023) — couches, TLP/DLP, 2.5GT/s, table Gen 1–6 : <https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf>
