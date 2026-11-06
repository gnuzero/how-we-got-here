---
title: "x86 대 RISC 갈림"
weight: 26
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 25
aliases:
  - /posts/19-the-x86-vs-risc-split/
  - /posts/24-the-x86-vs-risc-split/
  - /posts/25-the-x86-vs-risc-split/
tags: []
summary: "종이 위로는 RISC가 더 깔끔했다 — 소프트웨어 고착과 µop 변환이 x86을 위에 남겼다"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

[Post 18]({{< relref "18-instruction-sets" >}})이 CISC와 RISC를 철학으로 이름 붙였다. 이 쪽은 둘이 상업적으로 맞붙었을 때 일어난 일과, 「더 깔끔한」 ISA가 그냥 이기지 않은 이유다.

## RISC의 주장

1980년대 초: RISC는 CISC 복잡성에 대한 반응으로 — Berkeley는 SPARC 쪽으로, Stanford는 MIPS 쪽으로, IBM 작업은 POWER/PowerPC로 흘렀다. 주장은 경험적이었다. 복잡한 CISC 연산은 컴파일된 코드에서 거의 쓰이지 않는 경우가 많고, 필요한 디코드 하드웨어는 실리콘을 태우고 이 단계가 이미 다룬 파이프라인을 복잡하게 만든다. ISA를 단순·고정 길이·균일 명령으로 줄이고, 실리콘을 레지스터·더 빠른 파이프라인·더 나은 캐시에 쓰라.

MIPS, SPARC, PowerPC가 모두 출하되었다. 한동안 순수 연산 벤치마크 — 특히 워크스테이션과 서버 — 에서 x86을 이겼다.

## x86이 바닥을 지킨 이유

x86의 가장자리는 우아함이 아니었다 — IBM PC 호환성 위에 이미 앉아 있던 소프트웨어였다. 그게 데스크톱 표준이 되자, 거대한 설치 기반은 x86에서만 돌았다. 하위 호환이 해자가 되었다. 새 칩은 옛 바이너리를 돌려야 해서 ISA를 RISC식으로 깔끔히 다시 설계할 수 없었고 — 혹을 하나씩 늘리며 확장할 뿐이었다. Intel과 이후 AMD는 *표면*에도 불구하고 *구현*을 빠르게 만들었다.

진짜 해소: 현대 x86은 CISC 연산을 비순차 코어에서 직접 실행하지 않는다. 디코더가 각 x86 명령을 하나 이상의 고정 형식 내부 마이크로연산(µop) — RISC스러운 — 으로 옮기고, *그것들*이 [Post 23]({{< relref "23-out-of-order-execution" >}})의 예약 스테이션·ROB·실행 유닛을 지난다. 바깥: CISC 호환. 안: 변환 층 아래의 RISC형 파이프라인.

## 남길 패턴

이기는 ISA는 기술 우수만으로 거의 이기지 않는다. 호환성, 생태계 고착, 제조 규모가 더 깔끔한 종이 아키텍처를 일상적으로 이긴다. 같은 역학이 다음에 ARM의 라이선스 모델 대 RISC-V의 열린 ISA에서 다시 나타난다 — 명령 집합을 둘러싼 *사업 모델*이 부호화만큼 중요할 수 있다.

{{< lab type="mini-cpu" >}}

**출구:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — 이 상업적 싸움의 RISC 쪽 선언문.
