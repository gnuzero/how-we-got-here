---
title: "릴레이와 전기기계 논리"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "릴레이는 이진 논리가 작동함을 증명했다 — 그리고 움직이는 금속은 따라가지 못함을"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

릴레이는 거의 부끄러울 만큼 단순하다. 전자석, 스프링 달린 아마추어, 접점 한 벌. 코일에 전류를 넣으면 아마추어가 당겨지고, 접점이 열리거나 닫힌다. 대략 십오 년 동안, 그것이 계산의 전환 원시였다.

## 같은 부품, 두 가지 일

이 장에서 **릴레이**는 스위치다. 약한 코일이 더 센 회로를 열거나 닫고, 나중에는 AND·OR·NOT의 벽돌이 된다. 전신선에서의 일은 [메시지는 어떻게 여행했는가]({{< relref "03-how-the-message-travelled" >}})를 보라.

이제 스위치를 논리에 배선한다.

## 논리로서의 릴레이

접점 둘을 직렬로 이으면 AND다. 둘 다 닫혀야 전류가 흐른다. 병렬이면 OR. 상시 닫힘 접점을 더하면 NOT. 그것들을 합치면 어떤 불리언 함수든 — 가산기, 비교기, 디코더 — Phase 2가 실리콘에서 짓는 같은 논리 족을, 여기서는 전기기계 하드웨어로 지을 수 있다.

전화 교환은 대략 1900년부터 전기기계 스위치로 자동화되었고, 1938년까지 릴레이로 지은 첫 크로스바 교환기가 뉴욕에서 운용되었다. ([ETHW, "Electromechanical Telephone-Switching"](https://ethw.org/Electromechanical_Telephone-Switching)) 그 산업 기반 — 양산되고, 잘 이해되고, 충분히 신뢰할 만함 — 이 릴레이 컴퓨터가 아예 만들어질 수 있었던 큰 이유다. Konrad Zuse의 Z3(1941)가 두드러진다. 릴레이 2,300개, 이진 부동소수점, 22비트 워드. ([CHM timeline](https://www.computerhistory.org/timeline/computers/)) 흔히 최초의 작동하는 프로그램 가능·완전 자동 디지털 컴퓨터라 불리지만, 한 가지 유보는 적을 가치가 있다. Z3에는 진짜 조건 분기가 없었다. Raúl Rojas는 1998년에, 런타임에 분기하는 대신 프로그램이 가능한 모든 분기 결과를 계산하게 하면 *원리상* 튜링 완전하다고 보였다.

**출구:** Raúl Rojas, "How to Make Zuse's Z3 a Universal Computer" (1998) — Z3 튜링 완성과 그 한계에 대한 조심스러운 논증.

## 왜 릴레이는 너무 느렸는가

릴레이의 전환 시간은 *기계적* 운동이 지배한다. 아마추어가 움직여야 한다 — 밀리초 차수. 릴레이 기계의 클록은 초당 한 주기 단위로 세지, 수백만이 아니다. 초당 수십억 주기의 현대 CPU 옆에 두면 그 간격은 점진적이지 않다. 존재적이다. 아무리 잘 설계해도 기계적 스위치로 쓸모 있는 현대 컴퓨터를 지을 수는 없다.

두 번째 문제: 접점이 닳는다. 매번 닫힘이 금속 대 금속이다 — 아크, 패임, 결국 고장. 수천 개의 릴레이는 수천 개의 마모점이다. 신뢰성과 속도가 같은 제약과 싸웠다. 움직이는 부품.

## 전자로의 다리

릴레이는 아키텍처를 증명했다. 이진 표현, 단순 스위치로 만든 불리언 게이트, 데이터로서의 프로그램. 증명하지 못한 것은 그 아키텍처가 *빠르게* 돌 수 있다는 점이다. 그것을 풀려면 기계적 스위치를, 금속이 아니라 전자를 움직여 상태를 바꾸는 것으로 바꿔야 했다 — 진공관. 대가로 막대한 전력과 열. 그 트레이드오프가 다음이다.
