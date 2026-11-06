---
title: "CUDA 코어, 워프, 점유율"
weight: 61
date: 2026-01-01
draft: false
phase: "9 — GPU와 병렬 계산"
series_index: 60
aliases:
  - /posts/53-cuda-cores-warps-and-occupancy/
  - /posts/59-cuda-cores-warps-and-occupancy/
  - /posts/60-cuda-cores-warps-and-occupancy/
tags: []
summary: "SIMT는 SM과 워프에 사상된다 — 맞춰 도는 일이 분기 발산까지 이기고, 점유율이 메모리 스톨을 가린다"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

[Post 60]({{< relref "60-why-gpus-exist" >}})가 GPU가 *왜* 대규모 병렬 SIMT에 베팅하는지를 다루었다. 이 쪽은 구체적 지도다. Streaming Multiprocessor, 워프, 점유율 — 그 병렬 하드웨어가 실제로 얼마나 쓰이는지.

## Streaming Multiprocessor

GPU는 많은 Streaming Multiprocessor(SM)다 — 각자 대체로 자족적인 병렬 유닛으로, 많은 단순 CUDA 코어(ALU형 레인, 3단계 CPU 코어보다 의도적으로 훨씬 덜 복잡: 비순차 실행 없음, [Post 21]({{< relref "21-branch-prediction" >}}) 종류의 정교한 분기 예측 없음), 워프 스케줄러, 상주 스레드가 공유하는 레지스터 파일이 있다. 대체로 독립적으로 도는 SM 수십 개가 CPU의 복잡한 코어 몇 개에 맞선 GPU 집계 병렬성의 원천이다.

## 워프: 단위로서의 맞춰 돌기

SM 위 스레드는 워프로 묶인다 — NVIDIA 하드웨어에서는 32 스레드 그룹([CUDA C++ Programming Guide, SIMT](https://docs.nvidia.com/cuda/archive/12.4.0/cuda-c-programming-guide/index.html#simt-architecture)). 워프는 [Post 60]({{< relref "60-why-gpus-exist" >}})의 SIMT가 강제되는 입도다. 32가 *같은* 사이클에 *같은* 명령을, 각자 자체 데이터 위에서 실행한다. 「공유 제어 유닛 하나, 많은 레인」의 하드웨어 형태다.

## 분기 발산: 맞춰 돌기가 비용을 내는 곳

*한 워프 안* 스레드가 다른 분기를 타면, 워프는 취해진 각 분기 경로를 실행하며 그 경로에 없는 스레드를 비활성화한다([CUDA Guide](https://docs.nvidia.com/cuda/archive/12.4.0/cuda-c-programming-guide/index.html#simt-architecture)). 각 스레드는 하나만 필요한데도 워프는 두 경로만큼 길어진다 — 비발산 경우를 싸게 만드는 같은 맞춰 돌기의 직접 세금. 워프 안 스레드를 같은 경로에 두는 일은 따라서 스타일 선호가 아니라 진짜 최적화다.

## 점유율: 준비된 작업으로 지연을 가리기

SM은 유한한 레지스터와 공유 메모리를 갖고, 상주 워프마다 몫을 소비한다. 점유율([CUDA Guide, occupancy calculator](https://docs.nvidia.com/cuda/archive/12.4.0/cuda-c-programming-guide/index.html#occupancy-calculator))은 하드웨어가 지원할 수 있는 것에 비해 얼마나 많은 워프가 상주·적격인지다. 높은 점유율은 메모리 지연([Post 42]({{< relref "42-the-memory-wall" >}}) 다시)을 가리는 데 돕는다. 한 워프가 느린 접근에서 스톨하는 동안 스케줄러가 준비된 워프로 바꿔 레인을 바쁘게 유지한다.

「최대화하고 끝」이 아니다. 스레드당 레지스터나 공유 메모리를 더 쓰는 커널은 워프가 더 적어도, 그 자원이 중복 작업이나 메모리 트래픽을 줄이면 더 빨리 끝날 수 있다. 점유율 대 스레드당 자원은 진짜 교환이다 — 추상에서만 추론할 때가 아니라 커널이 실제 실리콘을 만날 때 드러난다.
