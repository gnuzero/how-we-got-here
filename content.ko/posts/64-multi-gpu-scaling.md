---
title: "멀티 GPU 스케일링"
weight: 64
date: 2026-01-01
draft: false
phase: "9 — GPU와 병렬 계산"
series_index: 63
aliases:
  - /posts/56-multi-gpu-scaling/
  - /posts/62-multi-gpu-scaling/
  - /posts/63-multi-gpu-scaling/
tags: []
summary: "한 GPU는 유한하다 — GPU 사이 인터커넥트가 다음 벽이 된다"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

단일 GPU의 계산과 HBM([Post 62]({{< relref "62-gpu-memory-hierarchy" >}}))은 유한하다. 오늘날 가장 큰 모델은 많은 GPU를 필요로 한다 — 한 서버 안에서, 그다음 클러스터에 걸쳐 — 그리고 그 GPU들이 서로 말하는 방식이 종종 단일 GPU의 피크 스펙만큼이나 실제 처리량을 결정한다.

## 작업을 나누는 일은 공짜가 아니다

[Post 54]({{< relref "54-the-machine-learning-software-stack" >}})가 데이터 병렬·모델 병렬 분할이 종종 *왜* 필요한지를 다루었다. 효율은 GPU가 데이터를 얼마나 빨리 교환하는지에 달렸다. 통신이 각 GPU의 계산에 비해 느리면, 피어들이 서로를 기다리며 스톨한다 — 메모리 벽([Post 42]({{< relref "42-the-memory-wall" >}}) 다시), CPU–DRAM이 아니라 GPU–GPU 링크에 적용된.

## 한 서버 안의 직접 경로

[Post 44]({{< relref "44-interconnects-at-scale" >}})가 NVLink를 CPU 매개 PCIe 경로를 우회하는 고대역폭 GPU–GPU 인터커넥트로 소개했다. 서버 안에서 NVSwitch([A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf))가 이를 올투올로 바꾼다. 모든 GPU가 PCIe와 호스트를 통하지 않고 NVLink 대역폭으로 서로를 닿는다. 큰 그래디언트를 끊임없이 교환하는 작업부하에서, 그 직접 경로는 고립된 피크 FLOPS 숫자보다 달성 학습 처리량을 더 자주 결정한다.

## 한 상자 너머

대형 학습은 많은 서버에 걸친다. [Post 49]({{< relref "49-datacenter-networking-and-rdma" >}})의 RDMA 생각이 돌아온다. GPUDirect RDMA([NVIDIA](https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf))는 네트워크 어댑터가 호스트 DRAM을 통한 추가 복사 없이 서버 간 GPU 메모리를 읽고 쓰게 한다 — 같은 「홉을 줄이고, 직접 대역폭을 최대화」 베팅, 이제 클러스터 규모에서.

## 이 시리즈가 계속 이름 붙이는 철학

직접 GPU–GPU 경로, 불필요한 홉 줄이기, 인터커넥트를 일급 제약으로 — 이 시리즈가 참조해 온 커스텀 GPU 메모리 패브릭 뒤의 같은 철학. 10단계는 진짜 데이터센터 규모에서 그 실을 집어 든다. 한 상자의 GPU 몇 개가 아니라, 학습 클러스터에 걸친 수천 개, 집계 이론 계산이 조율에 잃지 않도록 배선된.
