---
title: "데이터패스 설계"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 18
aliases:
  - /posts/12-datapath-design/
  - /posts/17-datapath-design/
  - /posts/18-datapath-design/
tags: []
summary: "단일 사이클 데이터패스가 부품을 보이게 한다 — 그리고 클록이 최악 경우에 맞춰지는 이유를 보여 준다"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

ISA([Post 18]({{< relref "18-instruction-sets" >}}))는 계약이다. 데이터패스는 그것을 수행하는 하드웨어다. 가장 단순한 버전 — *단일 사이클* 데이터패스 — 는 클록 틱마다 명령 하나를 끝낸다. 페치, 디코드, 실행, 라이트백, 끝. 오늘날 실제 CPU는 이렇게 지어지지 않는다. Phase 2의 부품이 어떻게 이어지는지를 보는 데는 여전히 가장 분명하다.

## 명령 하나, 클록 하나

부품: 다음 명령 주소를 담는 **프로그램 카운터**([Post 16]({{< relref "16-sequential-logic" >}})의 플립플롭); 그 PC로 색인하는 **명령 메모리**; 피연산자와 결과를 위한 **레지스터 파일**; 연산을 위한 **ALU**([Post 15]({{< relref "15-from-gates-to-combinational-logic" >}})); 로드와 스토어를 위한 **데이터 메모리**; opcode를 읽고 모든 먹스와 이네이블을 구동하는 **제어 단위**.

ADD를 보자. PC가 명령 메모리를 색인한다. 제어 단위가 레지스터–레지스터 ADD를 본다. 소스 레지스터 둘이 ALU를 먹이고, ALU 결과가 목적지에 쓰이며, PC가 전진한다. 페치, 디코드, 레지스터 읽기, ALU, 라이트백, PC 갱신 — 모두 *한* 클록 주기 안.

**지금 해 보세요.** 아래 미니 CPU를 안내 프로그램으로 한 단계씩 밟아 보세요. 각 Step이 그 부품 하나를 슬로모션으로 보여 준다 — IR로의 페치, opcode 디코드, A와 메모리로의 실행 — 이 쪽이 방금 이름 붙인 같은 경로, 지켜볼 만큼 작다.

{{< lab type="mini-cpu" >}}

## 파이프라이닝을 강제하는 제약

그 클록 주기는 *가장 느린* 명령의 전체 경로에 충분해야 한다 — 데이터 메모리를 건드리지 않는 명령까지도. 따라서 모든 ADD가 최악 경우의 속도로 돈다. 처리량이 바닥에 앉는다.

파이프라이닝이 그 제약에 답한다. 긴 경로를 스테이지로 자르고, 각 스테이지를 *그* 최악 경우에 맞춰 클록하며, 다른 명령이 다른 스테이지를 동시에 차지하게 한다. 같은 ISA. 초당 끝나는 일은 훨씬 많다. 그것이 다음 쪽이고 — 고전 마이크로아키텍처의 중심 아이디어다.
