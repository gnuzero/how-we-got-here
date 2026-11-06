---
title: "비순차 실행"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 22
aliases:
  - /posts/16-out-of-order-execution/
  - /posts/21-out-of-order-execution/
  - /posts/22-out-of-order-execution/
tags: []
summary: "기다려야 하는 것만 멈추라 — Tomasulo의 생각: 준비되면 실행하고, 커밋은 순서로"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

[Post 20]({{< relref "20-pipelining" >}})의 load-use 해저드는 순차 파이프라인을 *기다리는 한 명령* 뒤에 멈춰 세운다 — 나중 명령이 독립이고 준비돼 있어도. 비순차 실행이 그 제약에 답한다. 피연산자가 준비되면 독립 작업을 돌리고, 아키텍처가 요구하는 곳에만 프로그램 순서를 강제한다.

## 거짓 의존과 레지스터 리네이밍

모든 「의존」이 진짜는 아니다. 명령 A가 R1에 쓰고 나중에 명령 B도 무관한 결과로 R1에 쓰면, 둘 사이에 값이 흐르지 않는다 — ISA가 드러내는 아키텍처 레지스터 *이름*이 적어서 컴파일러가 하나를 재사용했을 뿐이다. 이름(거짓) 의존이지 진짜 데이터 의존이 아니다.

레지스터 리네이밍은 CPU에 ISA가 드러내는 것보다 훨씬 많은 *물리* 레지스터를 주고, 디코드 때 각 쓰기를 새 물리 레지스터에 사상한다. A의 「R1」은 P17이 되고, 나중 B의 「R1」은 P42가 된다. 거짓 충돌이 없고, 둘 다 진행할 수 있다.

## 준비되면 이슈, 커밋은 순서로

리네임된 명령은 **예약 스테이션**에서 진짜 피연산자가 올 때까지 기다린다(값으로, 또는 아직 비행 중인 생산자의 태그로). 피연산자가 준비되는 순간, 원래 프로그램 순서와 무관하게 실행 유닛으로 이슈할 수 있다. 그게 비순차 부분이다.

아키텍처 효과는 여전히 순서로 보여야 한다. 보이는 레지스터, 메모리, 예외. **재정렬 버퍼(ROB)**는 비행 중인 모든 명령을 프로그램 순서로 추적하고, 실행이 다른 시각에 끝나도 그 순서로만 결과를 아키텍처 상태에 *퇴역(retire)*시킨다.

## Tomasulo의 핵심

「준비되면 실행하고, 커밋은 엄격히 순서로」 — IBM System/360 Model 91 부동 소수점 유닛용 Robert Tomasulo의 알고리즘(1967년 발표([Wikipedia, Tomasulo's algorithm](https://en.wikipedia.org/wiki/Tomasulo%27s_algorithm)))에 자주 돌려지는 패턴 — 이 그 이후 거의 모든 고성능 비순차 CPU의 개념적 핵이다. 비싸기도 하다. 리네이밍 표, 예약 스테이션, ROB는 면적과 전력을 먹는다. 그 기계를 더 넣는 수익은 줄어든다 — 다음 쪽이 정면으로 부딪히는 벽이다.

{{< lab type="mini-cpu" >}}

**출구:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — 현대 비순차 이슈와 리네임의 뒤에 있는 원논문.
