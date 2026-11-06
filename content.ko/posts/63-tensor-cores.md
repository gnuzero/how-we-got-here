---
title: "텐서 코어"
weight: 63
date: 2026-01-01
draft: false
phase: "9 — GPU와 병렬 계산"
series_index: 62
aliases:
  - /posts/55-tensor-cores/
  - /posts/61-tensor-cores/
  - /posts/62-tensor-cores/
tags: []
summary: "행렬 곱-누적이 지배적 AI 연산이 되었다 — 그래서 하드웨어가 이를 일급 프리미티브로 만들었다"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

[Post 61]({{< relref "61-cuda-cores-warps-and-occupancy" >}})가 CUDA 코어를 다루었다 — 넓은 범위의 병렬 작업을 위한 범용 SIMT 레인. 텐서 코어는 더 좁다. 한 연산 — 행렬 곱-누적 — 을 위한 전용 하드웨어로, 현대 신경망 계산을 지배한다. 그 연산에 특화하면, 일반 CUDA 코어만으로 같은 일을 하는 것보다 이긴다.

## 왜 행렬 곱인가

완전 연결 층, 합성곱(행렬 곱으로 재형식화), 트랜스포머의 어텐션은 모두 핵심에서 행렬의 곱-누적으로 환원된다 — 그 효율이 시스템 성능을 지배하는 규모에서. 그 집중이 목적 지어진 실리콘을 값어치 있게 만든다.

## 텐서 코어가 하는 일

텐서 코어는 작은 고정 크기 행렬 곱-누적을 하나의 하드웨어 연산으로 융합한다(각 Volta 텐서 코어는 클럭당 4×4×4 행렬 곱, [A100 whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf) 기준). 일반 CUDA 코어를 통한 긴 별도 곱·덧 명령 시퀀스가 아니다. 융합은 유용한 산술에 비해 per-op 오버헤드(fetch, decode, 피연산자 라우팅)를 줄인다. 더 큰 곱은 타일로 나눈다. 서브블록을 순차로 넣고 부분합을 누적 — 효율적 딥러닝 커널을 자체 공예로 만드는 조율 작업.

## 정밀도는 실리콘에 묶인다

텐서 코어는 종종 더 낮은 정밀도에서 가장 효율적으로 돈다(A100의 FP16, BF16, INT8, [whitepaper](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf); 더 새 부품은 FP8을 더한다). 더 좁은 산술은 연산당 면적·전력이 덜 필요해, 주어진 예산에 더 많은 MAC 처리량을 담는다. [Post 67]({{< relref "67-quantization-mixed-precision" >}})가 이를 완전히 되돌린다. 정밀도 축소는 순수 소프트웨어 선택이 아니다 — 기저 MAC 하드웨어가 각 형식에서 얼마나 효율적으로 도는지에 묶인다.

## 유일한 답은 아니다

텐서 코어는 그 외에는 일반 GPU 안의 NVIDIA 답이다. 10단계는 시스톨릭 어레이 — Google의 TPU가 가장 두드러지게 — 를 다룬다. 같은 행렬 곱 목표를 위해 지어졌지만, 하드웨어 수준에서 다르게 조직된다. 같은 제약, 다른 아키텍처.
