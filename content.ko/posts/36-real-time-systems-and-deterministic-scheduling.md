---
title: "실시간 시스템과 결정적 스케줄링"
weight: 36
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 35
aliases:
  - /posts/29-real-time-systems-and-deterministic-scheduling/
  - /posts/34-real-time-systems-and-deterministic-scheduling/
  - /posts/35-real-time-systems-and-deterministic-scheduling/
tags: []
summary: "처리량과 공정은 마감이 아니다 — 경성 실시간은 평균 속도가 아니라 유한한 최악 시각을 필요로 한다"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

4단계까지 — 배치, 타임쉐어링, 가상 메모리, 컨테이너 — 는 처리량·공정·효율적 공유에 맞춰져 있다. 어느 것도 주어진 작업이 *언제* 끝나는지를 단단히 보장하지 않는다. 실시간 시스템은 그 보장을 본다. 「빠름」은 「실시간」과 다른 성질이다 — 사람들이 끊임없이 걸려 넘어지는 구분.

## 빠름은 결정성이 아니다

범용 스케줄러(Posts [28]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}})–[32]({{< relref "32-containers-and-modern-os-isolation" >}}))는 좋은 *평균* 반응성과 공정한 공유에 맞춘다 — 흔히 보통 경우에는 꽤 빠르다. 「보통 빠르다」는 「지정 마감 안에 예외 없이 항상 끝난다」가 아니다. 캐시 효과, 인터럽트 처리, 또는 가비지 컬렉션 일시 정지([Post 35]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}}))가 지연을 늘릴 수 있다. 대부분의 앱에서는 가끔의 분산이 중요하지 않다. 실시간 시스템에서는 그게 전부일 수 있다.

## 경성 대 연성

**경성** 마감: 놓치면 전체 시스템 실패 — 성능 저하가 아니다. 비행 제어 안정화, 에어백 전개 — 매번, 창 안에서, 아니면 실패가 재앙일 수 있다.

**연성** 마감: 놓치면 품질이 떨어지지만  완전한 실패는 아니다 — 부하 아래 떨어진 비디오 프레임은 불쾌하지만 인증 위기는 아니다. 마감을 맞히려는 강한 실용 경향; 하드웨어가 강제하는 보장은 아니다.

## Rate-Monotonic 스케줄링

경성 실시간의 고전적 접근 하나: rate-monotonic 스케줄링 — 주기 태스크마다 얼마나 자주 돌아야 하는지로 고정 우선순위를 준다. 짧은 주기 → 높은 우선순위. 잘 정의된 주기 태스크 집합 부류에 대해 고정 우선순위 알고리즘 가운데 증명 가능하게 최적이다([Liu & Layland 1973, via Wikipedia](https://en.wikipedia.org/wiki/Rate-monotonic_scheduling)). *어떤* 고정 우선순위 할당이든 그 작업부하의 모든 마감을 맞출 수 있으면, rate-monotonic도 맞춘다. 수학적 스케줄 가능성 경계 — 경성 실시간 시스템이 인증에 맞서 필요로 하는 바로 그런 형식 성질.

## 왜 다른 종류의 OS인가

이 보장을 맞추려면 유한한 최악 시각을 중심으로 설계된 OS — Real-Time Operating System(RTOS) — 가 필요하고, Posts [28]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}})–[32]({{< relref "32-containers-and-modern-os-isolation" >}})의 처리량/공정 계보가 아니다. 인터럽트 지연은 유한하고 알려져야 한다. 메모리 할당은 보통 범용 GC처럼 예측 불가 지연 메커니즘에 기대면 안 된다. 뮤텍스조차 신중히 설계해야 한다(우선순위 상속) — 낮은 우선순위 태스크가 높은 우선순위를 무한히 막지 못하게. 우선순위 반전, 고전적 실시간 함정.

이 렌즈로 미니 CPU 랩을 다시 보라. 단순 하드웨어에서는 모든 명령의 시각이 결정적이고 셀 수 있다 — 시스템이 더 복잡해질수록 RTOS 설계가 지키려 싸우는 예측 가능성. 다음 쪽은 이 원칙을 항공전자·산업 제어·임베디드 배포로 가져가며, 보장이 하중을 견딘다.

{{< lab type="mini-cpu" >}}

**출구:** C. L. Liu and James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment" (*Journal of the ACM*, 1973) — rate-monotonic 스케줄링과 고전 경성 실시간 스케줄 가능성의 원논문.
