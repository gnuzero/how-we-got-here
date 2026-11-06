---
title: "데이터센터 규모의 인터커넥트"
weight: 69
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 68
aliases:
  - /posts/61-interconnect-at-datacenter-scale/
  - /posts/67-interconnect-at-datacenter-scale/
  - /posts/68-interconnect-at-datacenter-scale/
tags: []
summary: "수천 GPU — 토폴로지와 all-reduce가 어떤 칩의 피크 FLOPS만큼이나 중요하다"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: fat-tree topology + all-reduce ring/tree communication pattern"
---

[Post 64]({{< relref "64-multi-gpu-scaling" >}})가 몇 서버 안팎의 멀티 GPU 스케일링 — NVLink, NVSwitch, GPUDirect RDMA — 을 다루었다. 대규모 학습은 또 한 자릿수다. 수백에서 수천 서버에 걸친 수천에서 수만 GPU. 어떻게 배선하느냐가 개별 GPU의 스펙만큼이나 중요하다.

## 순진한 배선은 스케일하지 않는다

모든 서버를 모든 다른 서버에 잇는 일은 연결이 이차로 자란다 — 수천 노드 훨씬 전에 터무니없다. 실제 클러스터는 계층 스위칭을 쓰고, 선택한 구조가 달성 가능 대역폭과 무거운 학습 트래픽 아래 그 대역폭이 얼마나 *고르게* 유지되는지를 둘 다 정한다.

## Fat-Tree, 학습에 맞춰

Fat-tree는 스위치를 층으로 둔다 — 서버의 leaf 스위치, leaf를 잇는 spine 스위치 — 높은(이상적으로 non-oversubscribed) 이분 대역폭을 노린다. 실제 클러스터는 여전히 오버서브스크라이브할 수 있다. Charles Leiserson이 1985년 MIT에서 fat tree를 증명 가능하게 효율적인 보편 네트워크로 소개했다([Wikipedia, Fat tree](https://en.wikipedia.org/wiki/Fat_tree)). 이건 [Post 49]({{< relref "49-datacenter-networking-and-rdma" >}})의 데이터센터 네트워킹 생각을 수천 GPU 체제에서.

학습 트래픽은 일반 데이터센터 트래픽이 아니다. all-reduce가 매 스텝 같은 교환 패턴을 반복하므로, 패브릭의 이분 대역폭과 오버서브스크립션이 피크 링크 속도보다 더 중요하다.

## All-Reduce가 묶는 패턴이다

데이터 병렬 학습([Post 54]({{< relref "54-the-machine-learning-software-stack" >}}))은 매 스텝 참여하는 모든 GPU에 걸쳐 그래디언트를 동기화해야 한다 — 각 배치 슬라이스의 로컬 그래디언트, 그다음 다음 스텝 전에 결합(보통 평균). 그 all-reduce는 전체 학습 실행에 걸쳐 끊임없이 돈다. 그 효율은 원시 대역폭 *그리고* 토폴로지에 달렸다. ring이나 tree 알고리즘은 이론 집계 피크만이 아니라 물리 배선을 느낀다.

## 토폴로지가 스펙 시트를 이길 수 있다

설계가 나쁘거나 오버서브스크라이브된 패브릭 위의 훌륭한 GPU는, 잘 공급된 fat tree 위의 더 겸손한 GPU에 질 수 있다 — all-reduce가 병목이 되고, 어떤 칩의 피크 FLOPS가 아니기 때문이다. 시리즈 주제 다시. 부품 스펙(트랜지스터 수, 클럭, 피크 FLOPS)은 이야기의 일부일 뿐이다. 부품이 어떻게 연결되는가 — 칩의 버스(5단계)에서 학습 클러스터의 토폴로지까지 — 가 종종 실제 달성 성능을 결정한다.
