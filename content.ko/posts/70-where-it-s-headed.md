---
title: "어디로 가는가"
weight: 70
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 69
aliases:
  - /posts/62-where-it-s-headed/
  - /posts/68-where-it-s-headed/
  - /posts/69-where-it-s-headed/
tags: []
summary: "같은 패턴이 앞으로 — 칩렛, 패키지에 더 가까운 광학, 메모리에 더 가까운 계산"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

이 시리즈는 기어와 릴레이 — 기계·전기기계 계산, 현대 척도로는 원시적이지만, 이후 모든 정거장이 다듬은 같은 논리 모양(명령, 실행, 상태) — 으로 열렸다. 닫을 때는 뒤가 아니라 앞을 본다. AI 하드웨어가 활발히 움직이는 세 방향, 각자 이 시리즈에 이미 있는 생각의 연장. 발명된 로드맵이 아니다 — 척추가 이미 가르친 *종류의* 응답만.

## 칩렛 AI 가속기

[Post 59]({{< relref "59-chiplets-advanced-packaging" >}})가 칩렛을 수율 답으로 다루었고, [Post 62]({{< relref "62-gpu-memory-hierarchy" >}})가 계산 옆 대역폭을 위한 HBM 패키징을 다루었다. 자연스러운 조합은 둘이다. 분해된 계산 칩렛 — 때로 다르게 특화된 — 더하기 쌓인 HBM, 한 패키지 안에서 고밀도 인터포저나 고급 기판 링크로 묶인. 수율과 특화를 위해 분해하고, 분할이 새 인터커넥트 벽이 되지 않게 패키징에 쓴다. 같은 패턴, AI 실리콘에 적용.

## 패키지에 더 가까운 광학

짧은 랙 내 링크는 여전히 종종 구리다. 랙 간과 많은 leaf–spine AI 패브릭은 이미 플러거블 트랜시버와 광섬유를 쓴다. 전기 SerDes는 여전히 도달·전력·밀도 한계에 직면한다. 실리콘 포토닉스와 co-packaged optics는 E/O 변환을 스위치나 GPU 패키지 위로 민다 — 긴 전기 트레이스 더하기 이산 플러거블 대비 SerDes/DSP 전력과 도달 비용을 줄인다. 「빛을 처음 도입」이 아니라, Posts [64]({{< relref "64-multi-gpu-scaling" >}})와 [69]({{< relref "69-interconnect-at-datacenter-scale" >}})가 말한 GPU·랙 사이 대역폭이 점점 묶이는 곳으로 변환을 옮기는 것.

## Processing-in-Memory

[Post 42]({{< relref "42-the-memory-wall" >}})의 메모리 벽이 HBM(62)과 weight-stationary 시스톨릭 데이터플로(66)를 통해 메아리쳤다 — 이동을 최소화하거나, 더 넓게 만든다. Processing-in-memory는 더 간다. 메모리 어레이 *안에서* 일부 계산을 해, 이동의 일부를 아예 일어나지 않게. 광범위 배포 기술로는 이르다. 여전히 벽 주위에 계층만 정교화하는 것이 아니라 뿌리에서 공격하려는 진짜 시도다.

## 이어지는 실

각 방향이 시리즈 패턴 다시다. 묶는 제약을 정확히 이름 붙이고, 더 세게만 밀지 말고 구조를 바꾼다. 기계 스위칭이 묶일 때 릴레이가 튜브에 자리를 내주었고, 전력·신뢰성이 묶일 때 튜브가 트랜지스터에, 클럭 벽이 묶일 때 단일 코어 스케일링이 멀티코어에, 수율이 묶일 때 모놀리식 다이가 칩렛에. 메모리 이동 — 계산 처리량만이 아니라 — 이 가장 큰 AI 작업부하를 묶고 있어, 패키징·패키지 근처 광학·메모리에 더 가까운 계산이 살아 있는 답이다.

릴레이에서 어텐션까지. 기술은 매 단계에서 거의 알아볼 수 없을 만큼 바뀌었다. 공학 논리 — 진짜 제약을 식별하고, 그다음 아키텍처를 바꾼다 — 는 바뀌지 않았고, 바뀔 강한 이유도 없다.
