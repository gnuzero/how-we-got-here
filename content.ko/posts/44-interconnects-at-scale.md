---
title: "규모에서의 인터커넥트"
weight: 44
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 43
aliases:
  - /posts/37-interconnects-at-scale/
  - /posts/42-interconnects-at-scale/
  - /posts/43-interconnects-at-scale/
tags: []
summary: "계산이 여러 칩이 되면, 그 사이 경로가 다음 벽이다 — 전용 링크, 더 적은 복사"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

이 단계는 지금까지 *한* 기계 *안*의 부분을 이었다 — CPU에서 메모리로, CPU에서 장치로. 작업부하가 GPU 여러 개, 또는 기계 여러 개를 필요로 하면 질문이 바뀐다. 그 유닛들이 *서로* 충분히 빨리 말해, 추가 통신이 추가 계산을 먹지 않게 할 수 있는가?

## 기본 경로가 세금이다

피어 경로가 없으면 GPU A가 시스템 메모리를 통해 쓰고 GPU B가 다시 읽는다 — 추가 홉, 추가 지연, 복사에 쓰인 PCIe 대역폭. PCIe만으로도 GPUDirect P2P는 호스트 스테이징 없이 GPU↔GPU DMA를 할 수 있다(여전히 PCIe 속도). 남는 제약은 대역폭과 토폴로지다. 공유 확장 패브릭은 다GPU 메시로 설계된 적이 없다.

## 전용 링크, 일관 메모리, 더 적은 복사

NVIDIA의 NVLink는 목적 지어진 GPU-to-GPU 인터커넥트다 — 전송에서 CPU와 시스템 메모리 제외. NVSwitch는 노드의 모든 GPU를 서로 닿게 할 수 있다([NVIDIA A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)), PCIe-and-CPU 경로보다 훨씬 높은 대역폭으로. 잦고 큰 교환 — 대규모 학습이 7·10단계에서 돌아오는 패턴 — 에서 그 직접 경로는 일차이지 조정이 아니다.

CXL(Compute Express Link; [CXL 2.0 white paper](https://computeexpresslink.org/wp-content/uploads/2023/12/CXL2.0_White_Paper_November-2020_FINAL.pdf)가 스위칭과 메모리 풀링을 더함)은 이웃 제약에 답한다. 한 다이 너머의 캐시 일관 접근, 그리고 더 멀리, 단일 소켓에 납땜되지 않은 풀링 메모리. 용량이 어느 DIMM 슬롯에 떨어졌는지에 얼어 있지 않고 계산 노드 사이를 옮길 수 있다 — DDR([Post 41]({{< relref "41-memory-buses" >}}))도 날 PCIe도 주지 않는 유연함.

GPUDirect RDMA는 NIC가 GPU 메모리를 직접 읽거나 쓰게 한다([NVIDIA GPUDirect overview](https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf)). 없으면 네트워크를 가로지르는 GPU-to-GPU 전송은 GPU → 시스템 메모리 → NIC → 먼 시스템 메모리 → 먼 GPU — 지연과 메모리 대역폭을 드는 복사. 그걸 GPU → 네트워크 → GPU로 접는다. 저장과 메시징에서 RDMA([Post 49]({{< relref "49-datacenter-networking-and-rdma" >}}))가 이기는 같은 이유: 더 적은 복사, 이동을 돌보는 CPU가 덜함.

## 같은 문제, 열린 하드웨어

이것이 시리즈가 계속 가리키는 맞춤 GPU 메모리 패브릭 아래의 개념 기반이다. 경로에 범용 CPU 없이 원격 GPU 메모리를 주소 가능하게. NVLink와 GPUDirect는 한 벤더 스택 안에서 그걸 푼다. 열린 PCIe 기반 대안은 같은 비효율을 빼야 한다 — Posts [39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})–[40]({{< relref "40-pcie-deep-dive" >}})의 TLP 수준 피어 경로와, 이 쪽의 「전용 링크가 존재하는 이유」가 같은 이야기인 이유다.
