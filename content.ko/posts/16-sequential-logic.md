---
title: "순차 논리"
weight: 16
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "피드백이 쌍안정 메모리를 만들고, 에지 트리거 플립플롭이 동기 설계를 다룰 수 있게 한다 — 셋업/홀드가 클록을 막을 때까지"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

조합 논리([Post 15]({{< relref "15-from-gates-to-combinational-logic" >}}))는 현재 입력의 순수 함수다 — 과거에 대한 기억이 없다. 컴퓨터에는 *상태*가 필요하다. 레지스터, 프로그램 카운터, 주기에 걸쳐 남는 메모리 내용. 그러려면 피드백이 필요하다.

## 피드백에서 온 메모리

NOR(또는 NAND) 게이트 둘을 교차 결합한다 — 각 출력이 다른 입력을 먹인다 — 그러면 안정 상태가 둘이다. 전원이 켜져 있는 한, 회로는 마지막으로 민 곳에 머문다. 그것이 물리적 의미의 메모리다. 쌍안정성이지, 추상적인 「스토어」가 아니다.

게이트 없는 SR 래치는 입력에 항상 살아 있고 금지 조합이 있다. 동기 설계는 게이트된(레벨 감지) 래치를 원한다. 이네이블이 높은 동안 *투명*(출력이 데이터를 따라감)하고, 이네이블이 떨어지면 유지한다. 많은 요소가 함께 갱신해야 할 때 투명함은 까다롭다.

**지금 해 보세요.** 아래 랩은 여전히 살아 있는 게이트다 — 입력을 토글하면 출력이 *즉시* 바뀐다. 그 즉시 응답이 조합이다. 이 쪽은 게이트를 자신으로 다시 배선해, 입력이 떠난 뒤에도 출력이 *유지*될 수 있게 하는 일이다.

{{< lab type="breadboard" height="700" >}}

## D 플립플롭: 레벨이 아니라 에지

D 플립플롭은 클록 아래 마스터–슬레이브로 래치 둘을 쌓는다. 출력은 클록의 *에지*에서만 바뀌고, 높은(또는 낮은) 위상 전체에서는 바뀌지 않는다. 에지 사이에는 플롭이 D를 무시하고 유지한다. 에지 트리거가 동기 설계를 다룰 수 있게 만드는 이유다. 모든 플롭이 같은 에지에서 갱신하므로, 연속 신호의 경주 대신 이산 단계로 추론한다.

## 셋업, 홀드, 그리고 클록 천장

D 입력은 에지 *전*에 최소 창(셋업)과 *후*에(홀드) 안정해야 한다. 어느 쪽이든 깨지면 플롭이 준안정 — 아래에서 늦게 또는 일관되지 않게 풀리는 미정 상태 — 에 갈 수 있다. 교과서 잔소리가 아니다. 최대 클록 주파수에 단단한 천장이 있는 이유다. 주기는 조합 전파 *더하기* 다음 플롭의 셋업을, 여유와 함께 덮어야 한다. 두 실패는 다르다. 셋업 위반은 클록을 늦추면 고칠 수 있고, 홀드 위반은 어떤 속도에서도 칩을 실패하게 한다. ([Harris & Harris, CMOS VLSI Design lecture 11, "Sequential Circuits"](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf)) [Post 43]({{< relref "43-the-clock-speed-wall" >}})(클록 속도의 벽)이 단순히 주파수를 올리는 일이 통하지 않게 되었을 때 이 정확한 제약으로 돌아온다.

## 이것이 여는 것

에지 트리거 플롭은 레지스터, 카운터, 상태 기계가 되고 — Phase 3에서는 CPU를 *순차* 기계로 만드는 프로그램 카운터와 파이프라인 레지스터가 된다. 다음: 밀도를 위해 쌍안정 저장을 특화한다 — SRAM과 DRAM이 갈라지는 곳.
