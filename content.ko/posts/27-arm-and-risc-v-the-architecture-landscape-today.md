---
title: "ARM과 RISC-V: 오늘의 아키텍처 지형"
weight: 27
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 26
aliases:
  - /posts/20-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/25-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/26-arm-and-risc-v-the-architecture-landscape-today/
tags: []
summary: "데스크톱이 x86으로 가라앉은 뒤 싸움은 전력과 라이선스로 옮겼다 — ARM이 모바일을 이겼고, RISC-V는 열림에 건다"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

x86 대 RISC 싸움([Post 26]({{< relref "26-the-x86-vs-risc-split" >}}))은 1990년대 말까지 데스크톱과 서버를 대체로 가라앉혔다. 경쟁은 끝나지 않았다 — 옮겼다. 모바일·임베디드·에지는 단일 스레드 정점보다 와트를 더 보고, ISA를 둘러싼 *사업 모델*이 부호화만큼 중요해졌다.

## ARM: ISA를 라이선스하고, 팹은 짓지 않는다

ARM Holdings는 ISA를 설계하고 라이선스한다 — 바로 제조할 수 있는 코어, 또는 회사가 자체 ARM 호환 코어를 설계하게 하는 아키텍처 라이선스(후자의 대표가 Apple 실리콘). 모델은 ARM이 팹을 돌리지 않고도 ISA를 많은 제조사로 퍼뜨렸다.

기술적으로 ARM은 이미 전력 효율에 맞춰진 채로 모바일 시대에 들어갔다 — RISC 계열의 단순 디코드가, 대중 규모로는 처음, 와트당 성능을 신경 쓰는 시장을 만났다. 운이 아니었다. 수십 년의 그 설계 규율이 배터리 장치를 만난 것이다.

## RISC-V: 라이선스 대신 열림

RISC-V(2010년 UC Berkeley에서 작업 시작([Wikipedia, RISC-V](https://en.wikipedia.org/wiki/RISC-V)), Krste Asanović, David Patterson 등이 이름 붙은 추진자)는 더 간다. ISA는 열려 있고 로열티가 없다. 지배 벤더와 협상하지 않고 코어를 구현한다. 깊은 맞춤이나 ISA 라이선스 비용 제로가 핵심인 곳에서 — 임베디드, 그리고 RISC-V 기반 위에 허가 없이 맞춤 명령을 원하는 가속기 — 가장 중요하다.

## 같은 교훈, 한 층 더

거친 지도: x86은 호환 관성으로 데스크톱·서버의 많은 부분을 여전히 차지한다. ARM은 모바일, 서버·노트북에도 실질 침투(맞춤 클라우드 ARM; Apple Silicon). RISC-V는 상업적으로 더 이르고, 로열티 없는 유연성이 성숙한 소프트웨어 스택을 이기는 곳에서 가장 빠르다.

[Post 26]({{< relref "26-the-x86-vs-risc-split" >}})의 패턴이 다시: 한 구간의 승자는 고립된 「최고」 ISA가 아니라, 그 구간이 사는 것과 경제가 맞는 쪽이다. ARM은 와트 *와* 폰 제조사가 아래에서 맞출 수 있는 라이선스 모델로 모바일을 이겼다. RISC-V는 「무료·개방」이 그조차 이기는 경우가 늘어난다고 건다. x86이나 ARM 규모에 닿을지는 아직 열려 있다.

{{< lab type="mini-cpu" >}}

**출구:** The RISC-V Instruction Set Manual (riscv.org) — 이 쪽이 이름 붙인 열린 ISA의 살아있는 원규격. 비특권 ISA 권부터.
