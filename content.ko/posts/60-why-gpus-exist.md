---
title: "GPU가 존재하는 이유"
weight: 60
date: 2026-01-01
draft: false
phase: "9 — GPU와 병렬 계산"
series_index: 59
aliases:
  - /posts/52-why-gpus-exist/
  - /posts/58-why-gpus-exist/
  - /posts/59-why-gpus-exist/
tags: []
summary: "그래픽이 대량 병렬 작업부하를 주었다 — SIMT 하드웨어가 따르고, 그다음 일반 계산이 같은 모양을 찾았다"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

3단계의 모든 CPU는 명령이 충분히 독립·예측 불가해서 기계가 범용이어야 한다고 가정한다 — 분기 예측, 비순차 실행, 깊은 캐시, 모두 *임의의* 순차 코드를 빠르게 돌리려고. GPU는 원래 작업부하에 뿌리를 둔 다른 가정에서 출발한다. 엄청난 수의 데이터 점에 *같은* 연산을 독립적으로 한 번에 적용한다.

## 그래픽이 병렬성을 명시적으로 만들었다

3D 장면을 렌더링하는 일은 수백만 정점을 변환하고 수백만 픽셀을 셰이딩하는 일이다 — 각자 같은 수학, 픽셀 (100, 200)과 (100, 201) 사이에 의미 있는 의존 없음. 레인이 충분하면 모두 한 번에 돈다.

그건 3단계가 지어진 것과 다른 모양이다. CPU는 *이렇게 보이지 않는* 코드에서 숨은 병렬성을 뽑는다. 그래픽은 그 기계가 필요 없다. 병렬성이 숨지 않는다 — 처음부터 명시적이고 거대하다.

## SIMD / SIMT: 한 명령, 많은 레인

SIMD는 한 명령을 많은 데이터 요소에 한 번에 적용한다. GPU는 밀접한 관련 모델 — SIMT — 을 구현한다. 많은 병렬 스레드, 각자 자체 데이터(픽셀, 정점) 위, 하드웨어가 단순 레인에 걸쳐 그룹을 맞춰 실행.

이득은 직접이다. 그룹의 모든 레인이 *같은* 순간에 *같은* 명령을 돌리므로, CPU가 코어마다 파이프라인 기계를 복제하듯 레인마다 fetch·decode·제어를 복제하지 않는다. 공유 제어 유닛 하나가 많은 레인을 구동한다 — 대량 병렬·같은 연산·많은 데이터 작업에 대한 면적·전력 승리이며, 예측 불가 순차 코드에는 나쁜 맞춤. CPU와 GPU가 교환 가능하지 않고, 실제 시스템이 보통 둘을 갖는 이유다.

## 그래픽에서 일반 계산으로

업계를 다시 빚은 깨달음: 같은 SIMT 모양이 삼각형보다 훨씬 넓은 부류에 맞는다. 수학이 대규모 병렬이고 규칙적일 때마다. 신경망 학습·추론은 거의 전적으로 그 종류의 행렬·벡터 작업으로 지어진다 — 렌더링용으로 태어난 하드웨어가 지배적 AI 계산 기판이 된 이유이고, 이 단계의 나머지가 그래픽 자체가 아니라 그 병렬 아키텍처를 프로그래밍하고 먹이는 일인 이유다.
