---
title: "제1원리에서 본 반도체"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "어느 쪽으로든 밀 수 있는 밴드갭 — 도핑이 실리콘을 제어 가능한 스위치로 만든다"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

실리콘이 특별한 것은 마법이기 때문이 아니다. 밴드 구조가, 전도를 항상 켜거나 항상 끈 채로 사는 대신 *제어*할 수 있는 자리에 있기 때문이다.

## 왜 건널 수 있는 갭이 중요한가

금속에서는 가전자대와 전도대가 겹친다 — 전자가 자유롭게 움직이고, 합리적인 전압으로 그것을 끌 수 없다. 절연체에서는 금지 갭이 거대하다. 켤 수 없다. 반도체는 그 사이에 있다. 실리콘의 갭은 300 K에서 1.11 eV이다. ([HyperPhysics, "Semiconductor Band Gaps" (Kittel data)](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html)) 적당한 전기장(또는 약간의 열이나 빛)이 캐리어를 전도하는 자리에 둘 만큼 작고, 실온에서 이미 캐리어로 넘치지 않을 만큼 크다. 그 「어느 쪽으로든 밀 수 있는」 성질이 트랜지스터에 필요하다. Post 4의 관 천장은 크기·전력·신뢰성이었다. 해법은 여기서 시작한다. 도핑하고 전계로 제어할 수 있는 고체.

## 왜 실리콘이 게르마늄을 이겼는가

게르마늄이 첫 실용 트랜지스터 재료였다(Bell Labs, 1947: Bardeen과 Brattain의 점접촉 소자). 실리콘이 긴 게임을 잡았다. 더 넓은 갭(같은 표에서 300 K에 1.11 eV 대 게르마늄 0.66 eV)은 열 캐리어가 신호를 덮기 전에 더 높은 온도에서 소자가 돌아가게 한다. 열성장 이산화실리콘은 조용하고 안정한 Si/SiO₂ 계면을 만든다 — MOSFET이 의존하는 절연 게이트 유전체(Post 6). 그리고 실리콘은 실질적으로 모래다. 대량 제조에 충분하다. 그 세 제약 — 온도 여유, 산화물 품질, 공급 — 이 업계가 Ge가 아니라 Si로 표준화한 이유다.

## 도핑: 결정에서 스위치로

진성 실리콘은 전도가 나쁘고 균일하다. 도핑은 미량 불순물을 넣어 캐리어의 *종류*와 *농도*를 정한다. 인(원자가 전자 다섯)이 실리콘 격자에서 느슨히 묶인 전자를 내놓는다 — N형. 붕소(원자가 전자 셋)는 빠진 결합 — 이동하는 양의 캐리어로 행동하는 정공 — 을 남긴다. P형.

어느 쪽만으로는 스위치가 아니다. 둘을 맞대는 일 — P-N 접합 — 이 이어지는 모든 다이오드와 트랜지스터의 벽돌이다. Post 6이 거기서 이어진다. 접합(또는 게이트로 제어하는 채널)이 도핑된 실리콘을, 외부 신호가 켜고 끌 수 있는 것으로 바꾸는 방법.
