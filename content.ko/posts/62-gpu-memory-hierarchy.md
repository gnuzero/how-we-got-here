---
title: "GPU 메모리 계층"
weight: 62
date: 2026-01-01
draft: false
phase: "9 — GPU와 병렬 계산"
series_index: 61
aliases:
  - /posts/54-gpu-memory-hierarchy/
  - /posts/60-gpu-memory-hierarchy/
  - /posts/61-gpu-memory-hierarchy/
tags: []
summary: "수천 스레드가 DDR 너머 대역폭을 강제한다 — HBM이 메모리를 계산 옆에 쌓는다"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

[Post 42]({{< relref "42-the-memory-wall" >}})가 메모리 벽을 이름 붙였다. DRAM 지연이 계산을 따라가지 못해, 업계는 지연이 고집스러운 곳에서 *대역폭*을 쫓았다. 그 응답이 가장 중대한 곳이 GPU 메모리다. Posts [60]({{< relref "60-why-gpus-exist" >}})–[61]({{< relref "61-cuda-cores-warps-and-occupancy" >}})의 병렬 처리량이 관용 DDR([Post 41]({{< relref "41-memory-buses" >}}))이 먹일 수 없는 식욕을 만든다.

## GPU가 CPU형 메모리에서 굶는 이유

CPU는 적당한 수의 명령 스트림을 돌리고, 캐시([Post 22]({{< relref "22-caches" >}}))가 종종 작업 집합을 흡수한다. GPU는 많은 SM에 걸쳐 수천 스레드가 한꺼번에 메모리를 원할 수 있다. 온칩 캐시가 돕지만, 집계 대역폭 수요는 비슷한 전력의 CPU 메모리 서브시스템보다 극적으로 높다 — 다른 물리 답을 강제하는 제약.

## HBM: 다이 옆에 쌓기

High Bandwidth Memory는 DRAM 다이를 수직으로 쌓고, 별도 DIMM으로 가는 긴 PCB 트레이스가 아니라 through-silicon via(TSV)로 잇는다. 매우 넓은 인터페이스와 합쳐, 동급 DDR보다 훨씬 많은 대역폭을 낸다(A100의 HBM2 40 GB는 1,555 GB/s, [A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf) 기준) — [Post 59]({{< relref "59-chiplets-advanced-packaging" >}})의 고급 패키징으로 값을 치른다. HBM과 GPU 계산 다이는 보통 실리콘 인터포저를 공유한다. 칩렛에 쓰인 같은 패키징 가족으로, 기능 다이를 분해하는 대신 메모리를 계산 *옆에* 둔다.

## GPU 안의 계층

HBM 대 DDR을 넘어, GPU에는 자체 피라미드가 있다. [Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})의 레지스터–캐시–주기억 형태를 GPU 특유 층으로 메아리친다. 각 SM의 레지스터 파일이 가장 빠른 로컬 저장소다. 공유 메모리 — SM 위의 프로그래머 관리 스크래치패드 — 는 블록 안 스레드가 더 멀리 왕복하지 않고 데이터를 공유하게 한다. L2 캐시가 GPU 전체를 가로지른다. HBM이 「주기억」 층이다. CPU DRAM보다 훨씬 높은 대역폭, 온칩 무엇보다 여전히 높은 지연 — 같은 지연 대 용량 교환, GPU 규모에서.

## 다음에 오는 것을 먹이기

이 아키텍처는 거대한 계산 식욕을 먹이려고 존재한다. 피크 FLOPS는 피연산자가 도착하고 결과가 나갈 수 없으면 무의미하다. 다음 쪽의 텐서 코어가 HBM 대역폭이 공급하려고 지어진 계산 구조다 — 대역폭 틀을 앞으로 가져가라. 텐서 코어의 피크는 그것을 유지할 수 있는 메모리 시스템에 맞서야만 의미가 있다.
