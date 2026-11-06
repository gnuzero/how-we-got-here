---
title: "메모리 벽"
weight: 42
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 41
aliases:
  - /posts/35-the-memory-wall/
  - /posts/40-the-memory-wall/
  - /posts/41-the-memory-wall/
tags: []
summary: "CPU 속도와 DRAM 지연은 수십 년 갈라졌다 — 캐시가 틈을 가리지만, 닫지는 않는다"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

[Post 41]({{< relref "41-memory-buses" >}})는 갈림으로 닫았다. DDR 대역폭은 스케일했고, DRAM *지연*은 그렇지 않았다. 줌 아웃하면 그 갈림은 수십 년 넓어져 온 시스템 수준 틈이다.

## 갈라지는 지수

Wm. A. Wulf와 Sally A. McKee가 1995년에 이름 붙였다([PDF](https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf)). 곧 메모리 접근마다 「수십, 심지어 수백 프로세서 사이클」이 들 것이라고 전망했다. 프로세서 속도와 DRAM 속도가 둘 다 지수적으로 나아지지만, 지수가 다르고 — 갈라지는 지수의 차는 지수적으로 커진다. CPU 성능(3단계의 클럭과 아키텍처)은 달아났고, DRAM 지연은 훨씬 작은 배수로만 나아졌다. 결과를 **메모리 벽**이라 불렀다. 더 나은 공학이 조용히 흡수하는 성가심이 아니라, 구조적 한계.

## 대역폭은 움직이고 지연은 그렇지 않은 이유

놓침이 아니라 물리다. DRAM 접근 지연은 커패시터의 작은 전하를 1과 0을 가릴 만큼 신뢰성 있게 감지하는 일이 지배한다([Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})의 1T1C 셀). 그 감지는 트랜지스터 스위칭처럼 줄어들지 않는다. 대역폭은 그 한계를 *이기지 않고도* 올릴 수 있다. 더 넓은 prefetch, 더 많은 뱅크, 더 많은 채널, 더블 데이터 레이트 전송. 더 짧은 첫 접근 없이 처리량. DDR 세대([Post 41]({{< relref "41-memory-buses" >}}))가 대역폭을 판 이유다. 지연은 고집스럽다.

## 틈이 드는 비용

미스 하나에 수백 사이클을 기다리는 코어는 계산하지 않는다. 캐시 계층([Post 22]({{< relref "22-caches" >}}))은 사치가 아니다. 벽에 대한 업계의 주된 덮개다 — 작업 집합을 SRAM에 두어 CPU가 전체 DRAM 지연을 거의 내지 않게. 비순차 실행([Post 23]({{< relref "23-out-of-order-execution" >}}))은 나머지의 일부를 가린다. 미스와 독립 작업을 겹친다. 어느 쪽도 틈을 닫지 않는다. 둘 다 캐시 친화적이거나 독립 작업이 충분한 프로그램에 대해 가린다.

지역성이 나쁘면 — 큰 무작위 구조, 일부 그래프, 일부 데이터베이스 — 벽을 온전히 낸다. *대역폭*(용량만이 아니라)이 일급 설계 목표가 된 큰 이유이고, GPU 메모리 계층과 HBM(9단계)이 첫 비트 대기는 거의 안 움직였는데도 바이트를 옮기는 데 비용과 복잡성을 쓰는 이유다. 다음: 거의 같은 역사적 순간에, 계산 쪽의 사촌 벽.

**출구:** Wm. A. Wulf and Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious" (*ACM SIGARCH Computer Architecture News*, 1995) — 벽을 이름 붙이고, 무언가 기본이 바뀌지 않으면 틈이 지배할 이유를 보여 준 짧은 노트.
