---
title: "칩렛과 고급 패키징"
weight: 59
date: 2026-01-01
draft: false
phase: "8 — 공정 노드와 제조"
series_index: 58
aliases:
  - /posts/51-chiplets-advanced-packaging/
  - /posts/57-chiplets-advanced-packaging/
  - /posts/58-chiplets-advanced-packaging/
tags: []
summary: "수율이 다이 면적과 함께 떨어진다 — 칩렛으로 나누고 고급 패키징으로 대역폭을 되산다"
image_prompt: "Cutaway diagram comparing a monolithic die vs a chiplet package with interposer, clean semiconductor packaging illustration style"
video_prompt: "20-second animation: a monolithic die splitting into chiplets connected via an interposer, yield improving, clean explainer motion graphics"
schematics: "Diagram: monolithic die vs chiplet+interposer cross-section + yield-vs-die-size curve"
---

[Post 57]({{< relref "57-finfet-to-gaa" >}})가 패턴을 다시 말했다. 한 기하 안의 스케일링이 벽에 부딪히면 구조를 바꾼다. 칩렛은 그 패턴을 트랜지스터 한 층 위에 적용한다 — 새 장치 물리가 아니라, 모놀리식 다이가 수율하기에 너무 커진 뒤 칩 전체가 조립되는 방식에 대한 새 답.

## 모놀리식 다이와 수율 벽

전통적 칩은 실리콘 한 조각이다. 코어·메모리 컨트롤러·I/O가 함께 제조된다. 어디든 치명 결함이 있으면 다이 전체가 망가지고, 그런 결함 확률은 면적과 함께 커진다 — 더 크고 더 유능한 칩이 아키텍처적으로 바람직해도 큰 다이는 수율이 나쁘다. 브랜드 선택이 아니라 경제/물리 제약이다. 단일 다이가 한없이 커지지 않게.

## 실리콘을 나누고, 기능은 유지한다

칩렛은 하나의 큰 다이였을 것을 더 작은·따로 제조된 다이로 자르고, 각자 기능을 소유한 뒤, 고밀도 인터커넥트(인터포저 또는 고급 기판)로 한 패키지 안에서 다시 잇는다. 결함은 그 작은 칩렛만 죽인다. 같은 총 기능에 더 작은 다이가 수율이 낫다. 한 패키지에 공정 노드를 섞을 수도 있다 — I/O에는 더 옛·싼 실리콘, 계산 밀도가 값어치를 하는 곳에만 선단 — 단일 공정 모놀리스가 줄 수 없는 유연함.

## 패키징이 전선을 되사야 한다

분해는 칩렛 간 대역폭·지연이 온다이 링크에 충분히 가까울 때만 돌아간다. 실리콘 인터포저와 3D 스택이 그 밀도를 제공하려고 존재한다 — 같은 신호를 관용 PCB로 빼는 것보다 훨씬 너머. 그 패키징 단계가 없으면 수율 승리를 새 인터커넥트 벽으로 지불하게 된다.

## 같은 패키징, 다음 단계의 메모리

같은 고급 패키징 가족이 9단계의 HBM을 가능하게 한다. 메모리 다이를 쌓고, 고밀도 인터포저로 계산 다이에 붙이고, 물리적으로 별도 실리콘을 대역폭 관점에서 거의 한 조각으로 다룬다. 칩렛 계산과 HBM 메모리는 한 제약의 두 사례다 — 분리된 다이 사이에 대역폭을 충분히 얻어 분할이 성능 벌이기를 멈추게.
