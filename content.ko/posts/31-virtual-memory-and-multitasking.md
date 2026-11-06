---
title: "가상 메모리와 멀티태스킹"
weight: 31
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 30
aliases:
  - /posts/24-virtual-memory-and-multitasking/
  - /posts/29-virtual-memory-and-multitasking/
  - /posts/30-virtual-memory-and-multitasking/
tags: []
summary: "타임쉐어링에는 격리가 필요하다 — 가상 메모리는 모든 프로세스에 기계를 소유한 환상을 준다"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

타임쉐어링([Post 29]({{< relref "29-time-sharing-and-the-unix-lineage" >}}))은 여러 프로세스가 — 겉보기에는 동시에 — 한 기계에서 돌기를 요구한다. 즉시 문제: 모든 프로세스가 아무 물리 주소나 자유롭게 읽고 쓸 수 있으면, 버그 난 또는 악의적 프로그램 하나가 다른 데이터의 데이터나 OS 자체를 망가뜨릴 수 있다. 가상 메모리는 모든 프로세스에 주소 공간 전체를 *소유한* 환상을 주고, OS가 아래의 진실을 관리해 그것을 막는다.

## 핵심 환상

모든 프로세스는 완전한 가상 주소 공간을 본다 — 64비트 시스템에서는 물리 RAM보다 훨씬 크다. 가상 주소를 참조하면 하드웨어(메모리 관리 장치, MMU)가 OS가 유지하는 페이지 표를 통해 물리 주소로 옮긴다. 두 프로세스가 둘 다 「가상 주소 0x1000」을 참조해도 서로 다른 물리 프레임에 닿는다 — 어느 쪽도 상대의 메모리를 볼 수 없고, 각 프로세스 안에서는 평범한 전용 소유처럼 보인다.

## 페이지, 폴트, 스왑

메모리는 고정 크기 페이지로 나뉜다(많은 아키텍처에서 흔히 4KB([Wikipedia, Page](https://en.wikipedia.org/wiki/Page_(computer_memory)))); 더 큰 「huge pages」도 있다). 페이지 표는 가상 페이지를 물리 프레임에 사상한다. 결정적으로, 모든 가상 페이지가 *항상* 프레임을 가질 필요는 없다 — 「없음」으로 표시하면 참조가 페이지 폴트로 OS에 트랩된다. OS는 디스크에서 페이지를 올릴 수 있고(코드·데이터의 지연 반입), 또는 진짜 오류로 다룰 수 있다(한 번도 주지 않은 메모리 접근 — 세그멘테이션 폴트로 가는 흔한 경로 하나).

같은 메커니즘이 스왑을 가능하게 한다. 메모리 압박 아래 차가운 페이지를 디스크에 쓰고, 없음으로 표시하고, 프레임을 비운다. 시스템은 물리보다 더 많은 RAM이 있는 것처럼 행동한다 — 그 페이지를 다시 건드리면 디스크 속도 비용으로. 풍부한 RAM은 무거운 스왑을 예전보다 덜 흔하게 만든다. 메커니즘은 여전히 근본이다.

## 격리로서의 보안

멀티태스킹을 가능하게 하는 것을 넘어, 변환은 보안 경계다. 프로세스는 다른 프로세스의 물리 메모리를 주소할 *메커니즘*이 없다 — 페이지 표에 거기로 가는 유효 가상 주소가 없다. 잘 동작하고 샌드박스된 프로세스 하나의 메모리 손상은 (원칙적으로) 무관한 프로세스를 읽거나 망가뜨리게 하지 않는다. 격리는 관례가 아니라 하드웨어가 검사하는 주소 변환이다.

## 이것이 이어지는 곳

가상 메모리는 모든 프로세스에 자체 격리 주소 공간을 준다 — 강한 보장이고, 무거운 보장이다. 자체 커널 구조, 자체 페이지 표, 그 사이의 전체 컨텍스트 스위치 비용. 컨테이너(다음 쪽)는 묻는다. 테넌트마다 완전히 별도 커널을 사지 않고도, 프로세스가 실제로 필요한 격리의 *대부분*을 얻을 수 있는가?

{{< lab type="vm-terminal" >}}
