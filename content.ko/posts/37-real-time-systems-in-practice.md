---
title: "실무의 실시간 시스템"
weight: 37
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 36
aliases:
  - /posts/30-real-time-systems-in-practice/
  - /posts/35-real-time-systems-in-practice/
  - /posts/36-real-time-systems-in-practice/
tags: []
summary: "고정 예산의 감지–계산–구동 — 3단계의 속도 트릭이 시각의 적이 되는 항공전자와 산업 제어"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

[Post 36]({{< relref "36-real-time-systems-and-deterministic-scheduling" >}})이 이론을 다루었다. 경성 대 연성 마감, rate-monotonic 스케줄링, 「빠름」과 「실시간」이 다른 이유. 이 쪽은 그 보장이 배치되는 곳 — 그리고 그것을 위해 짓는 일이 실무에서 어떻게 보이는지다.

## 항공전자: 놓친 마감이 재앙

비행 제어는 타당한 이유로 경성 실시간의 규범 예다. fly-by-wire 안정성 증강 루프는 센서를 읽고, 조종면 조정을 계산하고, 고정·타이트한 주기로 액추에이터 명령을 낸다. 마감을 놓치면 제어 응답이 불안정해질 수 있고, 때로 매우 짧은 창 안에서다. 항공전자 소프트웨어는 DO-178C 같은 표준에 맞춰 지어지며, 엄격한 시각 분석을 요구한다 — 「보통 마감을 맞춘다」가 아니라, 인증된 운용 조건 아래에서 *항상* 맞는다는 증거(목표는 보증 수준에 따라 스케일; 척추는 최악 규율이지 평균 희망이 아니다).

## 산업 자동화: 조율된 연속 제어

생산 라인 — 로봇 팔, 컨베이어 타이밍, 품질 제어 센서 — 은 같은 폐루프 패턴을 돈다. 감지, 계산, 구동, 반복, 종종 밀리초 주기. 여기서 마감을 놓치면 실패는 보통 항공전자보다 덜 재앙이지만 여전히 심각하다 — 움직이는 부품에 대한 늦은 위치 명령은 충돌, 떨어진 조각, 또는 비싼 장비 손상을 뜻할 수 있다.

## 공유 아키텍처: 폐루프 제어

두 영역이 이름 붙일 만한 패턴을 공유한다. **감지**(센서에서 현재 상태), **계산**(올바른 응답 — 종종 PID나 비슷한 제어 이론 알고리즘), **구동**(모터 신호, 면 편향), 고정 주기로 반복. 실시간 보장은 *전체* 루프를 끝에서 끝까지 덮는다 — 센서 지연, 계산, 구동이 모두 같은 예산에 대해 센다. 번쩍이는 제어 알고리즘도 센서 I/O나 액추에이터 통신이 루프 다른 곳에 예측 불가 지연을 넣으면 실패한다.

## 범용 하드웨어가 자주 부족한 이유

실시간 시스템은 범용 OS 아래의 범용 CPU보다 전용 마이크로컨트롤러에서 자주 돈다. 더 단순하고 더 예측 가능한 아키텍처 — 종종 캐시 없음, 비순차 실행 없음, 투기적 분기 예측 없음 — 시각을 *덜* 예측 가능하게 만드는 바로 그 3단계 기법을 의도적으로 버린다. 3단계가 성능 이득으로 다루는 것이, 경성 실시간 시스템이 *피하거나* 우회해 설계해야 하는 바로 그것이다.

## 랩 둘, 대비 하나

이 쪽만 의도적으로 대화형 랩 둘에 태그가 달려 있다. 미니 CPU는 단순 하드웨어에서 결정적·셀 수 있는 명령 시각이 손에 잡히는 곳 — 단순함이 인증 가능성을 돕는 이유. VM 터미널은 완전한 범용 OS 스택을 돈다 — 경성 실시간 시스템이 없애려고 지어진 스케줄링과 시각 분산을 보는 데 유용하다.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

**출구:** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification* — 이 쪽이 이름 붙인 민간 항공전자 소프트웨어 보증 원표준(보증 목표는 Design Assurance Level에 따라 스케일).
