---
title: "「7nm」가 실제로 뜻하는 것"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — 공정 노드와 제조"
series_index: 54
aliases:
  - /posts/47-what-7nm-actually-means/
  - /posts/53-what-7nm-actually-means/
  - /posts/54-what-7nm-actually-means/
tags: []
summary: "노드 이름은 한 물리 길이를 추적하기를 멈췄다 — 밀도와 피치가 물리고, 라벨은 세대다"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

이 시리즈 앞쪽의 모든 실리콘 장치 — MOSFET([Post 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})), CMOS([Post 14]({{< relref "14-logic-gates-from-transistors" >}})), 메모리 셀([Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})) — 은 제조 정밀도가 가능한 것을 정하는 규모에 산다. 「7nm」나 「5nm」 같은 라벨은 트랜지스터 위의 단일 측정 가능한 길이인 양 취급된다. 오래전부터 그렇지 않다.

## 이름이 길이였을 때

역사적으로 공정 노드 이름은 실제 치수 — 대략 평면 MOSFET의 최소 게이트 길이([Post 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})) — 를 추적했다. 수십 년 동안 노드 이름은 장치에서 가리킬 수 있는 것을 뜻했다. 그 대응은 평면 트랜지스터가 자리를 내주기 훨씬 전에 깨졌다. Wikipedia의 7nm 공정 항목은 「적어도 1997년 이래」 노드의 길이 척도가 「집적회로의 어떤 특정 치수 — 게이트 길이, 메탈 피치, 게이트 피치 — 도 가리키지 않았다」고 쓴다([Wikipedia, 7 nm process](https://en.wikipedia.org/wiki/7_nm_process)). 평면 트랜지스터는 2010년대까지 생산에 남아, 평면 시대의 많은 동안 이름은 이미 측정이 아니라 라벨이었다.

## 숫자 하나가 부족해진 이유

FinFET과 이후 Gate-All-Around 구조(Posts [56]({{< relref "56-photolithography" >}})–[57]({{< relref "57-finfet-to-gaa" >}}))는 게이트 길이를 하중을 견디는 여러 치수 중 하나로만 만들었다. Fin 높이, fin 피치, 게이트 피치, 인터커넥트 피치가 모두 독립적으로 중요하고 — 다른 파운드리(TSMC, Samsung, Intel)가 다르게 교환한다. 「7nm」 공정 둘은 같은 라벨 아래 같은 물리가 아니다.

## 라벨이 지금 무엇인가

현대 노드 이름은 대체로 세대 표지다 — 「우리의 다음 더 조밀하고 더 효율적인 세대」 — 파운드리 간 물리 스펙이 아니다. 의미 있는 비교는 독립 측정량: fin 피치, 게이트 피치, 제곱밀리미터당 트랜지스터([Wikipedia, Transistor count](https://en.wikipedia.org/wiki/Transistor_count)). 브랜드가 단일 길이에서 풀려, 한 파운드리의 「7nm」가 다른 쪽보다 조밀한 경우가 자주 보인다.

## 틈이 중요한 이유

「TSMC의 5nm 대 Samsung의 5nm」는 문자열이 같다고 사과 대 사과가 아니다. 명명 틈은 평면 시대에 열렸고, 설계 공간이 1차원이기를 멈춘 뒤 — 평면 게이트 길이가 3D 기하와 다중 피치 교환에 자리를 내준 뒤 — 넓어졌다. 그게 다음 쪽의 준비다. 그 구조를 여전히 인쇄할 수 있는 리소그래피([Post 56]({{< relref "56-photolithography" >}})), 그리고 단일 길이를 쓸모없게 만든 트랜지스터 기하 전환([Post 57]({{< relref "57-finfet-to-gaa" >}})).
