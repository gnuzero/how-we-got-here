---
title: "포토리소그래피"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — 공정 노드와 제조"
series_index: 55
aliases:
  - /posts/48-photolithography/
  - /posts/54-photolithography/
  - /posts/55-photolithography/
tags: []
summary: "회절이 더 짧은 파장을 강제한다 — EUV의 거울과 주석 플라즈마가 피처 크기를 움직이게 유지했다"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

현대 칩의 모든 트랜지스터 — [Post 55]({{< relref "55-what-7nm-actually-means" >}})의 노드 라벨이 정직히 이름 붙일 수 있는 것보다 조밀한 수십억 — 은 실리콘에 *패턴*되어야 한다. 포토리소그래피가 그 패터닝이며, EUV(극자외선)로의 밀어붙이기는 반도체 산업 아래 가장 어려운 공학 사슬 중 하나다.

## 빛으로 인쇄하고, 그다음 짓는다

웨이퍼에 포토레지스트를 바르고, 패턴된 마스크를 통해 빛을 비추고, 빛이 닿은 곳의 레지스트를 화학적으로 바꿔 선택적으로 제거하거나 남긴다. 식각·증착·도핑이 그 패턴으로 트랜지스터 구조를 둔다. 뿌리는 정밀 사진 인쇄다 — 회절이 함부로 허락하지 않는 해상도에서.

## 회절이 더 짧은 파장을 강제한다

얼마나 작은 피처를 분해할 수 있는지는 파장에 묶인다. 짧은 빛, 더 고운 패턴. 그 물리 천장이 업계가 수십 년 스펙트럼을 내려간 이유다 — 자외선, 그다음 심자외선(DUV, 약 193nm([Wikipedia, Photolithography](https://en.wikipedia.org/wiki/Photolithography))), 그다음 극자외선(EUV, 약 13.5nm([Wikipedia, EUV lithography](https://en.wikipedia.org/wiki/Extreme_ultraviolet_lithography))) — 각 단계가 [Post 55]({{< relref "55-what-7nm-actually-means" >}})의 줄어드는 라벨이 가리키는 더 고운 피처를 산다.

## EUV가 유난히 어려웠던 이유

EUV 파장에서는 평범한 트릭이 실패한다. **빛을 만드는 일**은 초당 수만 번 고출력 레이저로 용융 주석 방울을 쳐 플라즈마가 쓸 수 있는 EUV를 내게 하는 일이다. **초점을 맞추는 일**은 유리 렌즈를 쓸 수 없다 — EUV는 거의 모든 관용 광학과 공기에 흡수된다 — 그래서 경로는 거의 진공의 다층 거울이다. 생산 EUV 스캐너는 지어진 가장 복잡한 제조 도구 중 하나이며, 상업적으로 ASML이 그 생산 도구의 유일한 공급자였다.

그 파장 단계가 없으면, 다음 쪽의 더 고운 FinFET과 Gate-All-Around 구조는 받아들일 수 있는 수율·비용으로 생산되지 못할 것이다. 회절이 제약을 정했고, 주석 플라즈마와 거울이 강제된 아키텍처였다.
