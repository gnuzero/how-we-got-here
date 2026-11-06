---
title: "메모리 계층이 시작된다"
weight: 17
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "플립플롭은 비트당 너무 비싸다 — SRAM은 속도를, DRAM은 밀도를 사고, 계층은 그 트레이드오프의 반복이다"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

D 플립플롭([Post 16]({{< relref "16-sequential-logic" >}}))은 훌륭한 메모리 소자다 — 그리고 비트당 비싸다. 래치 둘 분량의 트랜지스터에, 클록·리셋·스캔이 붙으면 더. 레지스터 몇 개는 괜찮다. 그렇게 기가바이트 주기억은 안 된다. 두 셀 설계가 트레이드오프를 나눈다. CPU 가까운 속도를 위한 SRAM, 바깥쪽 밀도를 위한 DRAM.

## SRAM: 빠르고, 안정하고, 면적 무겁다

정적 RAM은 래치와 같은 쌍안정 피드백을 6트랜지스터(6T) 셀로 묶는다. 교차 결합 인버터 둘이 비트를 유지하고, 액세스 트랜지스터 둘이 읽고 쓴다. 전원이 켜져 있으면 무기한 유지한다 — 리프레시 없음. 비트당 트랜지스터 여섯은 면적을 태우므로, SRAM은 *캐시*(Phase 3)로 나타난다. 비용이 감수될 만큼 작고, 리프레시 없음과 비파괴 읽기가 중요할 만큼 빠르다.

## DRAM: 밀집하고, 싸고, 유지보수가 많다

동적 RAM은 비트를 커패시터의 전하로 저장하고, 트랜지스터 하나로 게이트한다(1T1C). 여섯 대신 하나라는 것이 밀도 이기고 — 주기억이 DRAM인 이유다. 대가는 이름에 있다. 커패시터가 샌다. 상용 부품은 고정 창 안에서 모든 셀을 리프레시해야 한다(DDR·DDR2 SDRAM은 64 ms, 85 °C 이상에서는 절반, [Wikipedia, "Memory refresh"](https://en.wikipedia.org/wiki/Memory_refresh)에 따름). 그렇지 않으면 값이 모호함으로 사라진다. 리프레시는 대역폭을 태우고 메모리 컨트롤러를 복잡하게 한다. 밀도의 값이다. 읽기도 파괴적이다 — 작은 전하를 감지하면 교란되므로 — 매 읽기 뒤에 재기록이 따른다. SRAM에는 어느 문제도 없다.

**출구:** Robert H. Dennard의 1트랜지스터 DRAM 셀(U.S. Patent 3,387,286, 1968) — 밀집 주기억을 실용으로 만든 1T1C 아이디어.

## 이것이 까는 계층

맨 위 레지스터(플롭): 가장 빠르고, 가장 작고, 비트당 가장 비싸다. 다음이 SRAM 캐시. 아래가 DRAM 주기억. 그 아래 디스크/SSD. 피라미드는 장식이 아니다 — 매 수준에서 트랜지스터 수 대 속도의 반복이다. Phase 3의 캐시가 그 위에 서고, Phase 5의 메모리 벽은 CPU–DRAM 간격이 — 바로 이 트레이드오프가 정한 — 캐싱이 감출 수 있는 것보다 빨리 벌어질 때 일어나는 일이다.

{{< lab type="breadboard" >}}
