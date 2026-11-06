---
title: "Interconnects at scale"
weight: 44
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 43
aliases:
  - /posts/37-interconnects-at-scale/
  - /posts/42-interconnects-at-scale/
  - /posts/43-interconnects-at-scale/
tags: []
summary: "Une fois le calcul sur plusieurs puces, le chemin entre elles est le prochain mur — liens dédiés, moins de copies"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

Cette phase a jusqu'ici connecté des pièces *dans* une machine — CPU à mémoire, CPU à périphériques. Dès qu'une charge demande plusieurs GPU, ou plusieurs machines, la question change : ces unités peuvent-elles se parler *entre elles* assez vite pour que la communication supplémentaire ne mange pas le calcul supplémentaire ?

## Le chemin par défaut est la taxe

Sans chemin pair-à-pair, le GPU A écrit via la mémoire système et le GPU B la relit — hops en plus, latence en plus, bande passante PCIe dépensée en copies. NVIDIA GPUDirect documente exactement ce contraste : sans GPUDirect, copies via mémoire système épinglée ; avec, « Eliminates system memory allocation & copy overhead » pour le *Peer-to-Peer* entre GPU, et pour RDMA « Direct communication between GPUs across a cluster ». ([NVIDIA GPUDirect Technology Overview](https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf)) Même sur PCIe seul, le P2P peut DMA GPU↔GPU sans staging hôte (toujours aux débits PCIe). La contrainte restante est bande passante et topologie : un fabric d'expansion partagé n'a jamais été conçu comme un maillage multi-GPU.

## Liens dédiés, mémoire cohérente, moins de copies

NVLink (génération Ampere / A100) : « lossless, high bandwidth, low-latency shared memory interconnect » ; les GPU A100 « can use NVLink links to access peer GPU memory at bandwidths much higher than achievable with PCI Express ». Douze liens par A100 « yielding a whopping 600 GB/sec total bandwidth for an entire A100 versus 300 GB/sec for Tesla V100 », avec NVSwitch pour interconnecter plusieurs GPU dans un nœud. ([NVIDIA A100 Tensor Core GPU Architecture](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-ampere-architecture-whitepaper.pdf)) Pour des échanges fréquents et volumineux, ce chemin direct est de premier ordre, pas un réglage.

CXL (*Compute Express Link*) répond à une contrainte voisine : « coherency and memory semantics on top of the PCI Express® (PCIe®) 5.0 based I/O semantics ». CXL 1.0 (mars 2019) multiplexe CXL.io, CXL.cache et CXL.memory ; « CXL maintains a unified, coherent memory space between the CPU (host processor) and any memory on the attached CXL device. » CXL 2.0 ajoute notamment le *pooling* : « memory can be flexibly allocated and deallocated to different servers […] depending on the need » via switch et dispositifs multi-domaines. ([CXL Consortium, CXL 2.0 White Paper, nov. 2020](https://computeexpresslink.org/wp-content/uploads/2023/12/CXL2.0_White_Paper_November-2020_FINAL.pdf))

GPUDirect RDMA laisse une NIC lire ou écrire la mémoire GPU directement — même logique que le P2P : moins de copies, moins de babysitting CPU.

## Le même problème, matériel ouvert

C'est la base conceptuelle sous le fabric mémoire GPU custom que la série pointe : rendre la mémoire GPU distante adressable sans CPU généraliste sur le chemin. NVLink et GPUDirect le résolvent dans la pile d'un vendeur. Une alternative ouverte, basée PCIe, doit lever la même inefficacité — d'où le chemin pair TLP des chapitres PCIe et le « pourquoi le lien dédié existe » de celui-ci sont la même histoire.

Ensuite : [Liens série et les premières connexions machine à machine]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}}).

## Sources

- NVIDIA GPUDirect Technology Overview : <https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf>
- NVIDIA A100 Tensor Core GPU Architecture (NVLink / NVSwitch) : <https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-ampere-architecture-whitepaper.pdf>
- CXL Consortium, CXL 2.0 White Paper (nov. 2020) : <https://computeexpresslink.org/wp-content/uploads/2023/12/CXL2.0_White_Paper_November-2020_FINAL.pdf>
