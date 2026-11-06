---
title: "데이터센터 네트워킹과 RDMA"
weight: 49
date: 2026-01-01
draft: false
phase: "6 — 네트워킹의 진화"
series_index: 48
aliases:
  - /posts/42-datacenter-networking-and-rdma/
  - /posts/47-datacenter-networking-and-rdma/
  - /posts/48-datacenter-networking-and-rdma/
tags: []
summary: "통제된 패브릭 하나 안에서는 커널 복사가 세금이 된다 — RDMA와 토폴로지가 전선을 되산다"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}))는 이종·신뢰 불가·전 지구 네트워크의 바른 척추다. 한 데이터센터 안 — 소유자 하나, 짧은 거리, 공학된 패브릭 — 에서는 같은 커널 매개 경로가, 마이크로초와 대역폭 바이트마다를 쓰는 작업부하에게 오버헤드처럼 보이기 시작한다.

## 오버헤드가 오는 곳

전통적 TCP/IP 송신은 애플리케이션 데이터를 커널 버퍼로 복사하고, 스택을 돌리고, NIC가 송신하게 한다 — 수신에서도 거울. 각 단계가 CPU 사이클을 들고, 지연에는 더 나쁘게, 메모리 위치 사이의 진짜 *복사*를 든다. 평범한 웹 트래픽에는 괜찮다. 초당 여러 번 그래디언트를 교환하는 HPC나 분산 ML 학습에는 비싸다.

## RDMA: 데이터 경로에서 커널과 CPU를 빼다

RDMA(Remote Direct Memory Access)는 수신 쪽 CPU나 커널이 전송을 돌보지 않고도 한 기계가 다른 기계의 메모리를 읽거나 쓰게 한다. RDMA 가능 어댑터가 네트워크를 가로질러 메모리에서 메모리로 바이트를 옮긴다. [Post 44]({{< relref "44-interconnects-at-scale" >}})의 GPUDirect RDMA와 같은 생각 — 더 적은 복사, 계산에 풀린 CPU — 노드 위 GPU만이 아니라 기계 전체에 적용.

## Fat-tree: 수천을 고르게 배선

기계가 수천이면, 토폴로지가 대역폭이 진짜인지 광고뿐인지 정한다. Fat-tree는 스위치가 계층을 올라가며 용량이 예측 가능하게 스케일하도록 짜여, 부하 아래에서만 나타나는 병목 링크를 숨기지 않는다. 대규모 학습 클러스터(10단계)는 그 숙고로 의도적으로 배선된다 — 임시 편의가 아니다.

## 이 시리즈의 패브릭 작업과 같은 철학

불필요한 복사를 빼고, 필요 없는 곳에서 커널을 우회하고, 토폴로지가 허락하는 한 하드웨어가 데이터를 직접 옮기게. [Post 44]({{< relref "44-interconnects-at-scale" >}})가 그걸 GPU 노드 안과 사이에 적용했고, 이 쪽은 기계 대 기계 네트워킹에 적용한다. 함께 7단계의 분산 시스템으로 넘긴다 — 웹 이전 인터넷의 초기 find-and-talk 시스템부터.

{{< lab type="vm-terminal" >}}
