---
title: "하드웨어의 희소성"
weight: 68
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 67
aliases:
  - /posts/60-sparsity-in-hardware/
  - /posts/66-sparsity-in-hardware/
  - /posts/67-sparsity-in-hardware/
tags: []
summary: "알려진 0 MAC을 건너뛴다 — 그러나 구조화된 패턴만이 밀집 MAC 하드웨어가 싸게 활용한다"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

[Post 67]({{< relref "67-quantization-mixed-precision" >}})가 정밀도 축소로 각 연산을 싸게 만들었다. 희소성은 보완 레버다. 아무것도 기여하지 않는 연산 — 피연산자가 이미 0인 곱 — 을 건너뛴다.

## 네트워크가 종종 희소한 이유

학습된 네트워크는 종종 많은 가중치가 0 근처에 있다 — 학습 역학에서, 또는 작은 정확도 비용으로 더 작고 싼 모델을 위해 더 많은 가중치를 정확한 0으로 미는 의도적 프루닝에서. 0 곱하기 무엇은 no-op이다. 그 MAC을 건너뛰면 현대 모델이 도는 규모에서 실제 시간과 에너지를 아낀다.

## 비구조 대 구조

**비구조** 희소성은 0을 임의로 흩뿌린다. 밀집 행렬 곱 하드웨어(텐서 코어, 시스톨릭 어레이)는 규칙적 작업을 위해 지어졌다. 임의 0을 건너뛰려면 절약을 지울 수 있는 제어 복잡도가 필요하다.

**구조** 희소성은 하드웨어 친화 패턴을 강제한다 — 흔히 2:4. 가중치 네 개 그룹마다 정확히 둘이 0(위치는 변할 수 있고, *개수*는 고정). 예측 가능 구조가 특화 하드웨어가 겸손·규칙적 제어 논리로 건너뛸 수 있는 것이다.

## 이득 — 그리고 틈

2:4 가중치 행렬에서 NVIDIA는 A100 희소성 기능이 「수학 연산을 최대 2배까지 더 가속한다」고 말한다([A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)). 전체 네트워크는 그 피크보다 덜 얻고, 커널·메모리·정확도 보존 프루닝/재학습에 묶인다. 여전히 [Post 65]({{< relref "65-why-matrix-multiply-reshaped-chip-design" >}}) 주제다. 어떤 계산이 구조적으로 불필요한지를 알면, 실리콘이 그것을 건너뛰도록 지어질 수 있다 — 이론과 생산이 떨어져 있어도.

## 정밀도와 합성

희소성과 정밀도 축소는 대안이 아니다. 현대 가속기는 종종 둘을 활용한다. 더 낮은 정밀도·구조적 희소 MAC — 더 싼 연산 *그리고* 더 적은 수 — 같은 고정 면적·전력 예산 안에서.
