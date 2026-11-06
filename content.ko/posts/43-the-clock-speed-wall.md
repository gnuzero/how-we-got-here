---
title: "클럭 속도 벽"
weight: 43
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 42
aliases:
  - /posts/36-the-clock-speed-wall/
  - /posts/41-the-clock-speed-wall/
  - /posts/42-the-clock-speed-wall/
tags: []
summary: "전력이 주파수를 죽였다 — 업계는 더 빠른 클럭 대신 코어를 더 넣었다"
image_prompt: "Graph infographic: CPU clock frequency climbing then flattening around 2005, power density curve rising toward a thermal ceiling, clean data-visualization diagram style"
video_prompt: "20-second animation: a CPU die heating up as frequency is pushed higher, hitting a thermal ceiling, then splitting into multicore, clean technical animation"
schematics: "Diagram: clock frequency vs year graph + power density (P=CV²f) scaling curve + single-core-vs-multicore comparison"
---

[Post 42]({{< relref "42-the-memory-wall" >}})는 메모리 쪽 벽이었다. DRAM 지연이 CPU를 따라가지 못함. 이것은 거의 같은 순간에 떨어진 계산 쪽 벽이다. 함께 — 어느 하나만이 아니라 — 업계가 멀티코어([Post 24]({{< relref "24-superscalar-multicore" >}}))로, 그리고 나중에 [Post 44]({{< relref "44-interconnects-at-scale" >}})의 패브릭으로 선회한 이유다.

## 꺾인 곡선

클럭 주파수는 수십 년 올랐다가, 2000년대 초에 빠른 스케일링을 멈췄다([Horowitz, ISSCC 2014](https://osmarks.net/assets/misc/2014-horowitz.pdf)). 좁은 예외를 빼면, 트랜지스터 수(무어의 법칙, 8단계)가 계속 오르는 동안에도 주류 클럭은 더 이상 오르지 않았다. 수십 년 그 둘이 함께 움직였다. 그다음 그렇지 않았다.

## P ≈ CV²f, 그리고 전압 항

CMOS의 동적 전력은 대략 용량 × 전압 제곱 × 주파수다. 주파수만은 전력에 선형이다 — 불편하지만 치명적이지 않다. 고정 공정에서 더 빠른 클럭은 종종 신뢰성을 지키려 더 높은 전원을 필요로 했고, 전압은 *제곱*이다. 주파수와 전압이 함께 오르면 배가된다. 벽은 Dennard 스케일링이 무너진 것이기도 하다. 전압 스케일링이 문턱 전압이 정한 한계에 부딪혔고([Bohr, IEEE SSCS News 2007](https://users.cs.duke.edu/~lkw34/papers/dennard-ieee2007.pdf)), 커지는 누설이 더 이상의 문턱 절단을 막았다([Horowitz](https://osmarks.net/assets/misc/2014-horowitz.pdf)). 열이이지, 놓친 회로 트릭이 아니다.

## 스큐와 같은 종류의 열 천장

열이 된 전력은 다이를 떠나야 하거나 칩이 (설계상) 스로틀하거나, 더 나쁘면 실패한다. 프로세서는 저비용 공랭의 전력 벽에 부딪혔고, Horowitz는 약 100W로 둔다([ISSCC 2014](https://osmarks.net/assets/misc/2014-horowitz.pdf)). 클럭 — 그리고 그에 따른 전압 — 을 더 밀면 경제적 냉각이 빼낼 수 없는 전력 밀도가 된다. [Post 39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})의 병렬 버스 스큐와 같은 범주. 우회할 설계 비효율이 아니라 물리 천장.

## 빠른 대신 넓은

줄어드는 ILP([Post 24]({{< relref "24-superscalar-multicore" >}})) *와* 한 코어의 단단한 전력 천장: 한 코어를 더 빠르게 만들기를 멈추고, 다이 위에 여러 개를 두되 각자 더 겸손하고 더 효율적인 클럭으로. 집계 처리량은 여전히 오를 수 있다. 어느 단일 코어도 주파수를 멈춘 열 선을 넘을 필요가 없다.

## 벽 둘, 선회 하나

메모리 벽은 DRAM 지연이 계산에 지는 것이다. 클럭 속도 벽은 계산 자체가 열에 부딪히는 것이다. 다른 물리, 같은 십 년. 함께 「한 코어를 더 빠르게」를 성장 이야기로 끝내고 「더 많은 코어 — 그리고 점점, 전문화된 병렬 하드웨어로 일을 옮긴 뒤, 범용 CPU를 다시 거치지 않고 그 유닛들을 연결한다」를 강제했다. 그 마지막 절이 [Post 44]({{< relref "44-interconnects-at-scale" >}})이고, 나중의 GPU(9단계)와 가속기(10단계)다.
