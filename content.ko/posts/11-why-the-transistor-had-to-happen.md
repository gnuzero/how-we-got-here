---
title: "왜 트랜지스터가 나와야 했는가"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "크기·전력·신뢰성 — 고체 전환을 불가피하게 만든 세 진공관 천장"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

1950년대 초까지 진공관은 이미 개념을 증명했다. 전자 전환, 움직이는 부품 없음, 마이크로초 차수 속도. 풀지 못한 것은 *스케일*이었다. 관을 하나 더할 때마다 열, 더 많은 전력, 또 하나의 고장 기회가 더해졌다. 트랜지스터가 관을 대체한 것은 멋진 가제트여서가 아니다. 관의 물리 자체에 단단한 천장이 있었고, 계산이 그 너머로 가야 했기 때문이다.

## 세 제약, 한 병목

**크기.** 진공관은 음극·그리드·양극을 떼어 둘 만큼 크고, 진공을 견딜 만큼 강한 유리 외피가 필요하다. 그 최소 크기에는 바닥이 있다. 트랜지스터는 고체다 — 진공 없음, 유리 외피 없음 — 크기는 진공실의 물리가 아니라 가공 정밀도가 정한다. 다른 스케일 곡선이고, 결국 한 다이에 수십억 트랜지스터를 올리는 곡선이다(Phase 8).

**전력.** 관의 음극은 열전자 방출을 위해 가열되어야 한다 — 그 히터는 관이 전환하든 말든 전류를 쓴다. 수천 개로 곱하면 ENIAC의 150–174 kW가 된다(Penn; Army Ordnance 데이터시트, 앞 장). 트랜지스터에는 히터 필라멘트가 없다. 공핍 영역이나 채널을 변조해 전환한다. 트랜지스터 기계가 녹지 않고 훨씬 밀집할 수 있었던 가장 큰 이유다.

**신뢰성.** 관은 필라멘트 소손과 밀봉 열화로 고장 난다 — 일상적 열 사이클에 구워진 마모. 고체 트랜지스터에는 필라멘트도, 유지할 진공 밀봉도 없어 같은 방식으로 그 고장 모드를 공유하지 않는다. 초기 트랜지스터에도 문제(패키징, 오염)가 있었지만, 고장 *메커니즘*이 필라멘트 소손처럼 일상 운전에 구워져 있지는 않았다.

## 숫자를 나란히

관은 히터 전력을 항상 태우고 쓰면서 닳는다. 트랜지스터에는 히터가 없고 — 결정적으로 — 가공이 나아질수록 크기와 전력이 *줄어든다*. 관의 것은 그렇지 않다. 그 비대칭이 쌓인다. 관 열 개는 관리할 만하다. 만팔천 개는 ENIAC의 유지보수 악몽이다. 같은 수의 트랜지스터는 현대 칩 하나의 작은 부분이다.

## 다음에 오는 것

Bell Labs에서 John Bardeen과 Walter Brattain이 1947년 12월 16일 첫 점접촉 트랜지스터를 만들었고 ([CHM](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)), William Shockley는 1948년 1월 23일 접합 트랜지스터를 구상했다 ([CHM](https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/)). 세 사람은 1956년 노벨 물리학상을 함께 받았다 ([NobelPrize.org](https://www.nobelprize.org/prizes/physics/1956/summary/)). 그것이 장치가 완성되어 도착했다는 뜻은 아니다. *어떻게* 전환하는지의 물리 — 반도체, 도핑, 밴드갭 — 를 이해하고 공학해야 했다. 왜 나와야 했는가와는 다른 주제다. Phase 2가 거기서 시작한다. 반도체가 무엇인지, 왜 실리콘이 선택 재료가 되었는지, 도핑이 관이 될 수 없었던 제어 가능 스위치를 어떻게 만드는지.

**출구:** Bardeen, Brattain, Shockley의 Bell Labs 트랜지스터 논문(1940년대 말 / 1950년대 초) — 관 천장을 깬 고체 스위치의 1차 물리.
