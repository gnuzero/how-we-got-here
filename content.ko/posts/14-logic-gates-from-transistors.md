---
title: "트랜지스터로 만든 논리 게이트"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS는 NMOS와 PMOS를 짝지어, 대기 게이트에 정적 경로가 없게 한다 — 스케일한 토폴로지"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS — Complementary Metal-Oxide-Semiconductor — 는 1970년대 말부터 1980년대를 거치며 NMOS를 대신 VLSI의 주류가 된 뒤, 거의 모든 디지털 칩 뒤의 회로 토폴로지다. ([Makimoto, SHMJ Makimoto Library VI-12](https://www.shmj.or.jp/makimoto/en/pdf/makimoto_E_06_12.pdf)) NMOS와 PMOS를 짝지어, 정상 상태에서는 정확히 하나만 도통하게 한다. 소자 수준의 거의 0인 정적 전류([Post 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}}))가 조합 가능한 논리 족이 된다.

## 인버터: 가장 작은 CMOS 단위

위쪽에 PMOS(전원 레일), 아래쪽에 NMOS(접지). 게이트를 입력으로 묶고, 드레인을 출력으로. PMOS는 게이트가 *낮을* 때 도통하고, NMOS는 게이트가 *높을* 때 도통한다. 입력 높음 → NMOS 켜짐, PMOS 꺼짐 → 출력 접지. 입력 낮음 → PMOS 켜짐, NMOS 꺼짐 → 출력 레일. 어느 정상 상태에서든 하나는 켜지고 다른 하나는 꺼진다 — 짧은 전환 순간을 제외하면 레일에서 접지로의 정적 경로가 없다.

## 왜 이것이 전력 문제를 푸는가

옛 NMOS식 논리(풀다운 + 로드)는 출력이 낮은 동안 전류를 쓴다. CMOS는 대기 중 전원과 접지 사이에 전류 경로가 없다. ([MIT OCW 6.012, Lecture 12](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf)) 전력은 주로 전환 — 다음 게이트 입력 커패시턴스의 충전·방전 — 에 쓰이므로, 다이 위 대기 게이트 수가 아니라 전환 *활동*과 *주파수*에 따라 스케일한다. MOSFET이 소자에서 거의 0 정적 전류를 가능하게 했고, CMOS는 그것을 이어지는 모든 게이트로 바꾸는 회로 트릭이다.

## NAND, NOR, 그리고 기능적 완전성

2입력 CMOS NAND는 NMOS를 직렬로(둘 다 높아야 낮게 당김), PMOS를 병렬로(어느 쪽이든 낮으면 높게 당김) 둔다. NOR는 그 거울이다. 어느 게이트 하나만으로도 기능적으로 완전하다 — AND, OR, NOT, 따라서 어떤 불리언 함수든 지을 수 있다. 표준 셀 라이브러리가 잘 특성화된 NAND 셀에 그렇게 기대는 이유다. 조합하면 가산기, 레지스터 파일, 프로세서 전체가 나온다.

**지금 해 보세요.** 아래 랩은 AND 게이트로 열린다 — 두 입력을 토글하고 출력을 보세요. NAND와 NOR가 위의 CMOS 원시이고, AND는 그것들을 조합한 결과다. 다음 쪽이 가산기를 짓기 전에 게이트를 만져 보세요.

{{< lab type="breadboard" height="700" >}}

## 다음으로 가는 곳

Phase 3의 모든 CPU 구조 — 전가산기, ALU, 레지스터 파일 — 는 이 게이트들의 조합이다. 다음: 첫 실제 구조, 조합 논리, 가산기부터.
