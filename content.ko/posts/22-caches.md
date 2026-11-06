---
title: "캐시"
weight: 22
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 21
aliases:
  - /posts/15-caches/
  - /posts/20-caches/
  - /posts/21-caches/
tags: []
summary: "지역성이 메모리 계층을 돌아가게 한다 — 연관성과 일관성은 그 정직함을 유지하는 비용이다"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

[Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})이 메모리 계층을 깔아 두었다. 레지스터, SRAM 캐시, DRAM, 디스크 — 매 단계마다 용량을 속도로 바꾼다. 캐시는 그 교환이 모든 CPU 성능을 떠받치는 곳이다. 전제는 실제 프로그램에 대한 하나의 경험적 사실이다. **지역성(locality)**.

## 캐시가 아예 돌아가는 이유

**시간 지역성** — 방금 건드린 위치는 곧 다시 건드릴 가능성이 크다(루프 변수, 뜨거운 코드). **공간 지역성** — 가까운 위치가 다음에 올 가능성이 크다(배열, 순차 페치). 캐시는 최근에 쓴 데이터를 가까이 두고, 미스 때 통째 *라인*(64바이트가 흔한 크기([Wikipedia, CPU cache](https://en.wikipedia.org/wiki/CPU_cache)))을 가져와 이웃이 곧 올 것에 건다.

조회는 주소를 **오프셋**(라인 안 바이트), **인덱스**(어느 세트), **태그**(그 라인이 정말 우리가 원하는 것인가?)로 나눈다.

## 라인이 살 수 있는 자리

**직접 사상(direct-mapped)** — 주소마다 슬롯 하나. 검사가 빠르다. 뜨거운 주소 둘이 인덱스를 공유하면 서로를 쫓아내며 충돌 미스가 난다.

**완전 연관(fully associative)** — 어떤 라인이든 어떤 슬롯이든. 충돌 미스는 없다. 매 접근이 모든 태그를 비교한다. 스케일이 안 된다.

**세트 연관(set-associative)** — 실용적 중간. 인덱스가 작은 세트(예: 8웨이)를 고르고, 태그는 그 안에서만 본다. 유연성의 대부분을 얻고, 전수 스캔보다 하드웨어가 훨씬 적다. 거의 모든 실제 캐시가 여기 있다.

## 멀티코어: 일관성이 새 제약

코어 하나, 전용 캐시 하나: 문제없다. 코어가 많고 각자 캐시를 가지면: 코어 A가 쓴 라인을 코어 B가 아직 들고 있다 — 프로토콜이 없으면 B는 영원히 낡은 값을 읽는다. MESI(Modified, Exclusive, Shared, Invalid)가 고전적 답이다. 라인마다 상태를 붙이고, 전환을 통신(버스 스눕 또는 디렉터리)해 쓰기가 다른 곳의 사본을 무효화하거나 갱신하게 한다.

일관성은 공짜가 아니고, 코어 수와 함께 비용이 커진다 — 「코어만 더 넣자」([Post 24]({{< relref "24-superscalar-multicore" >}}))가 ILP 한계와 별도로 체감 수익이 줄어드는 한 이유다.

**출구:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — 느린 주기억 옆에 빠른 슬레이브 저장소로서의 캐시 아이디어의 초기 진술.
