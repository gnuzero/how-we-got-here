---
title: "게이트에서 조합 논리로"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "게이트를 가산기와 ALU로 조합한다 — 그다음 캐리 리플 지연이 더 나은 구조를 강제한다"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

게이트 하나는 거의 쓸모없다. 유용한 행동은 조합할 때 시작한다 — 그리고 고전적인 첫 구조가 가산기다. 게이트가 「CPU 안에서 산술을 하는 것」이 되는 자리.

## 반가산기에서 전가산기로

비트 A와 B 둘: 합은 XOR, 캐리는 AND. 그 반가산기는 더 낮은 자리에서 오는 캐리-*인*을 받을 수 없다. 전가산기는 A, B, Cin을 받아 Sum과 Cout을 낸다 — Sum = A XOR B XOR Cin; Cout은 세 입력의 다수결. 한 단의 Cout을 다음 단의 Cin에 이어 붙이면, 한 비트씩 임의의 폭을 더할 수 있다.

**지금 해 보세요.** 아래 랩은 여전히 AND 게이트로 열린다 — 반가산기의 캐리다. 두 입력을 모두 높게 토글하고 출력이 높아지는 것을 보세요. 그 단일 게이트가, 다음 절에서 가산기를 사슬로 이을 때 리플하는 제약이다.

{{< lab type="breadboard" height="700" >}}

## 리플 캐리: 단순하고, 이유가 있어 느리다

전가산기 네 개를 한 줄로 두면 4비트 리플 캐리 가산기가 된다. ([Wikipedia, Adder](https://en.wikipedia.org/wiki/Adder_(electronics))) 비트 3의 캐리는 비트 2가 안정될 때까지 옳을 수 없고, 비트 2는 비트 1을, 비트 1은 비트 0을 기다린다. 캐리가 *리플*한다. 4비트면 괜찮다. 64비트에서 그 사슬이 ALU 전체가 얼마나 빨리 클록할 수 있는지를 정한다. 그 지연 제약이 바로 실제 CPU가 캐리 룩어헤드(와 친척)를 더하는 이유다. 게이트는 더 많고, 최악 경로를 짧게. 이 책의 나머지와 같은 패턴 — 물리적 병목이 다음 아키텍처를 강제한다.

## 가산기에서 단순 ALU로

가산기와 논리 단위를 나란히 짓고, 출력에 먹스를 둔다. 제어 비트가 어느 결과(더하기, AND, OR)가 블록을 떠날지 고른다. 뺄셈에는 새 단위가 필요 없다. 가산기 앞에 B의 인버터와 캐리-인 1을 두면 A + B가 A + B′ + 1 = A − B가 된다. ([Gottlieb, NYU Computer Systems Design, lecture 9](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html); [Harris, HMC E158 lecture 15](https://pages.hmc.edu/harris/class/e158/01/lect15.pdf) — 별도 논리 단위와 가산기의 먹싱; 가산기 설계는 [Harris & Harris, CMOS VLSI Design lecture 17](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf)) 한 블록, 여러 조합 경로. 개념적으로는 작고, 실무에서는 「게이트」가 CPU 산술이 되는 첫 순간이다.

지금까지는 전부 조합이다 — 출력이 현재 입력에만 의존한다. 연산의 수열에는 시간에 걸쳐 남는 상태가 필요하다. 그것이 다음 쪽이다.
