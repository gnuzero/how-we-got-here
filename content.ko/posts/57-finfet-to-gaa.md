---
title: "FinFET에서 GAA로"
weight: 57
date: 2026-01-01
draft: false
phase: "8 — 공정 노드와 제조"
series_index: 56
aliases:
  - /posts/49-finfet-to-gaa/
  - /posts/55-finfet-to-gaa/
  - /posts/56-finfet-to-gaa/
tags: []
summary: "단채널 누설이 평면 축소를 죽였다 — 게이트를 감싸고(FinFET), 그다음 사방을 감싼다(GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

[Post 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})이 평면 MOSFET을 소개했다 — 실리콘 위 평평한 게이트·소스·드레인. 그 기하가 수십 년 섬겼다. 트랜지스터가 줄어들며([Post 56]({{< relref "56-photolithography" >}})의 리소그래피), 평면 설계는 축소만으로 고칠 수 없는 벽에 부딪혔다. 게이트가 채널을 신뢰성 있게 제어하지 못하게 되었다.

## 단채널 효과

평면 채널 길이가 줄면, 채널 위 게이트([Post 13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})의 전기장 제어)의 권한이 비례해 줄고, 꺼져 있어야 할 때 전류가 샌다. 공정 버그가 아니라 물리다. 어느 지점을 지나면 *평면* 트랜지스터를 줄이는 일이 깨끗한 스위칭을 주지 않는다 — 그래서 더 이상의 평면 스케일링이 값어치 없어진다.

## FinFET: 제어의 세 면

FinFET은 크기만이 아니라 기하를 바꾼다. 채널을 얇은 수직 fin으로 올리고 게이트를 세 면(위와 양쪽 벽)으로 감싼다. 같은 채널 길이에서 채널의 더 많은 부분이 게이트 영향 아래 앉아, 평면 축소를 죽이던 단채널 누설을 억누른다.

업계는 2010년대 초에 양산 FinFET으로 옮겼다(Intel의 22nm Ivy Bridge 세대, 2011–2012가 초기 대량 이정표([Wikipedia, FinFET](https://en.wikipedia.org/wiki/Fin_field-effect_transistor))). [Post 24]({{< relref "24-superscalar-multicore" >}})가 클럭 속도 벽([Post 43]({{< relref "43-the-clock-speed-wall" >}}) 뒤 멀티코어로 선회한 것과 같은 패턴: 진짜 물리 천장에 부딪히면 구조만 더 세게 밀지 말고 바꾼다.

## Gate-All-Around: 네 면

세 면 감쌈이 정전 최대는 아니다. Gate-all-around(GAA) — 수평 나노시트나 나노와이어 채널 — 은 게이트가 채널을 네 면 모두에서 감싸게 한다. 선단 노드([Post 55]({{< relref "55-what-7nm-actually-means" >}}))는 FinFET 자체가 실용 한계에 다가가며 그쪽으로 움직인다. 같은 평면→FinFET 이동, 한 기하 뒤.

## 되풀이되는 패턴

평면 → FinFET → GAA는 장치 형태의 이 시리즈 스케일링 교훈이다. 전기 벽(여기서 단채널 효과), 열 벽([Post 43]({{< relref "43-the-clock-speed-wall" >}})), 지연 벽([Post 42]({{< relref "42-the-memory-wall" >}}))이 모두 결국 같은 설계에 더 세게 노력하는 것이 아니라 아키텍처를 강제한다. 칩렛([Post 59]({{< relref "59-chiplets-advanced-packaging" >}}))은 그 패턴을 한 층 위에 적용한다 — 트랜지스터가 아니라 칩 전체가 조립되는 방식에.
