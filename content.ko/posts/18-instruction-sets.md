---
title: "명령 집합"
weight: 18
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 17
aliases:
  - /posts/11-instruction-sets/
  - /posts/16-instruction-sets/
  - /posts/17-instruction-sets/
tags: []
summary: "ISA는 소프트웨어–하드웨어 계약이다. CISC와 RISC는 그 계약이 어떻게 보여야 하는지에 대한 두 답이다"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

명령 집합 아키텍처(ISA)는 소프트웨어와 하드웨어 사이의 계약이다. 어떤 연산이 있는지, 비트로 어떻게 부호화되는지, 그 비트가 무엇을 뜻하는지. *명세*이지 칩이 아니다. x86, ARM, RISC-V는 ISA다 — 같은 것을 구현한 다른 칩들이 같은 바이너리를 돌릴 수 있다.

그 분리 — 아키텍처(소프트웨어가 보는 것) 대 마이크로아키텍처(실리콘이 어떻게 지어졌는지) — 가 이 페이즈의 뼈대다. 파이프라인, 캐시, 비순차 코어는 모두 ISA *아래*에 산다. 소프트웨어는 알 필요가 없다.

## 두 철학: CISC와 RISC

CISC(Complex Instruction Set Computing) — x86 뒤의 계보 — 는 명령마다 많은 것을 넣는다. 가변 길이, 풍부한 어드레싱 모드, 메모리를 직접 건드리는 산술. 프로그램당 명령은 적고, 디코더는 더 어렵다.

RISC(Reduced Instruction Set Computing)는 반대다. 고정 길이 명령, 엄격한 로드/스토어 모델(ALU 연산은 레지스터만), 균일한 필드. 프로그램당 명령은 더 많고, 각각은 단계마다 예측 가능하게 페치·디코드할 만큼 단순하다. 그 균일성이 파이프라이닝([Post 20]({{< relref "20-pipelining" >}}))이 RISC에서 먼저 다룰 수 있게 된 이유다 — 고정 폭 명령이, 길이를 디코딩을 이미 시작한 뒤에야 아는 CISC 명령보다 훨씬 스테이지하기 쉽다.

구체적으로: 전형적인 RISC 명령은 필드가 고정된 자리에 있는 32비트다. x86 명령은 1바이트에서 15바이트까지 갈 수 있다(가능한 최장은 15바이트, [Wikipedia, "Instruction set architecture"](https://en.wikipedia.org/wiki/Instruction_set_architecture)에 따름). 선택적 접두어와 함께 — 밀집하고 강력하며, 높은 처리량으로 디코드하기에는 비싸다.

**지금 해 보세요.** 아래 미니 CPU는 작은 ISA다. 4비트 opcode, 4비트 피연산자, 메모리 16워드. 안내된 8명령 프로그램을 한 단계씩 밟으며 fetch / decode / execute가 A와 메모리를 움직이는 것을 보세요 — 이 쪽이 방금 이름 붙인 같은 계약, 한 화면에 담길 만큼 작다.

{{< lab type="mini-cpu" >}}

## 왜 x86은 그래도 남았는가

RISC가 파이프라인하기 더 단순한데도 왜 x86이 데스크톱과 서버를 여전히 지배하는가? 호환성과 수십 년의 공학 투자 — 날것의 우아함이 아니다. 현대 x86 칩은 CISC 명령을 더 단순한 RISC형 내부 마이크로옵으로 *번역*한 뒤, CISC 프론트엔드 뒤의 RISC형 코어에서 돌린다([Post 26]({{< relref "26-the-x86-vs-risc-split" >}})). 논쟁은 라벨이 암시하는 깔끔한 이분법보다 덜하다.

다음: 실제 데이터패스를 짓는다 — ISA가 위에서 실행되는 물리적 구조.

**출구:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — 이 분열의 RISC 쪽을 연 고전 논증.
