---
title: "수퍼스칼라와 멀티코어"
weight: 24
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 23
aliases:
  - /posts/17-superscalar-multicore/
  - /posts/22-superscalar-multicore/
  - /posts/23-superscalar-multicore/
tags: []
summary: "ILP와 전력이 벽에 부딪히자 — 업계는 스레드당 속도 대신 넓게 갔다"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

비순차 이슈, 더 깊은 파이프라인, 더 넓은 수퍼스칼라 폭 — 이 단계까지는 *한* 명령 스트림에서 명령 수준 병렬성(ILP)을 더 뽑는 일이었다. 2000년대 중반에 그 접근이 전략을 바꿀 만큼 단단한 천장에 부딪혔다.

## 벽이 둘

실제 프로그램은 무한한 독립 작업을 내놓지 않는다. 분기, 진짜 데이터 의존, 메모리 지연이 한 스트림에서 병렬로 돌릴 수 있는 명령 수를 가로막는다. 더 큰 ROB, 더 많은 예약 스테이션, 더 넓은 이슈: 면적·전력은 커지고 수익은 줄어든다. 그게 아키텍처 벽이다.

동시에 동적 전력은 대략 용량, 주파수, 전압 제곱에 비례한다(P ≈ CV²f). ILP 수익이 줄어드는 것을 보상하려 클럭을 올리면 열에 부딪힌다 — [Post 43]({{< relref "43-the-clock-speed-wall" >}})이 자세히 다루는 클럭 속도 벽. 2000년대 중반, 서로 독립인 천장 둘. 어느 쪽도 혼자 깔끔히 풀리지 않았다.

## 빠른 대신 넓은

선회: 한 코어가 사이클당 더 하게 만드는 일을 멈추고, 같은 다이에 다소 단순한 코어를 여러 개 올려 각자 스트림을 갖게 한다. 코어당 복잡도와 클럭이 평평해져도 칩 처리량은 오를 수 있다 — *그 코어들에 줄 병렬 작업이 있다면*.

「더 빠르다」의 뜻이 바뀌었다. 단일 스레드 프로그램은 코어 여덟이 넷보다 자동으로 이기지 않는다. 대략 같은 클럭의 코어 하나에서 여전히 돈다. 멀티코어 이득은 여러 스레드용으로 쓰이거나 컴파일된 작업부하에만 나타난다. ILP 시대는 세대마다 단일 스레드 속도 향상을 「공짜로」 많이 주었다. 이 시대는 병렬을 아는 소프트웨어를 요구한다.

## 선회가 가리키는 곳

같은 힘 — 복잡한 하나 대신 단순한 다수 — 이 GPU(9단계)의 철학을 더 밀어 간 것이다. 실시간 시스템(4단계)과 분산 시스템(7단계)에서 병렬 작업을 올바르게 조율하는 일이 일급 문제가 되는 이유이기도 하다. 다음 칩이 한 스레드를 더 빠르게 만들어 주기를 기다리는 일이 더 이상 주된 성장 경로가 아니다.

**출구:** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — ILP 수익이 평평해질 때 한 다이에 여러 코어를 올리자는 초기·명시적 주장.
