---
title: "양자화와 혼합 정밀도"
weight: 67
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 66
aliases:
  - /posts/59-quantization-mixed-precision/
  - /posts/65-quantization-mixed-precision/
  - /posts/66-quantization-mixed-precision/
tags: []
summary: "MAC당 비트가 줄면 같은 전력 예산에 MAC이 더 들어간다 — 정확도가 여전히 필요로 하는 곳에 정밀도를 섞는다"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

[Post 63]({{< relref "63-tensor-cores" >}})가 결합을 표시했다. 텐서 코어와 시스톨릭 어레이의 효율은 그들이 도는 수치 정밀도에 달렸다. 이 쪽은 왜 더 낮은 정밀도가 중심 레버가 되었는지 — 그리고 그것을 얻기 위해 무엇을 거래하는지 — 다.

## 여기서 정밀도가 뜻하는 것

형식은 고정 비트 예산으로 범위와 정밀도를 교환한다. FP32(부호, 지수 8비트, 가수 23비트)가 전통적 과학 기본값이다. FP16과 BF16은 비트의 절반을 쓴다 — BF16은 FP32의 지수 범위를 유지하고 가수에 덜 써서, 고운 입자보다 동적 범위를 선호한다. FP8은 더 가고, INT8은 부동소수점을 버리고 고정 정수에 필요한 범위로 되돌리는 스케일 인자를 더한다.

## 비트가 줄면, 처리량이 는다

Posts [13]({{< relref "13-the-transistor-bjt-to-mosfet" >}})–[14]({{< relref "14-logic-gates-from-transistors" >}})가 회로 면적이 계산하는 것에 비례한다고 세웠다. FP32 MAC은 FP16이나 INT8보다 더 많은 트랜지스터와 전력을 필요로 한다. 고정 면적·전력 예산([Post 43]({{< relref "43-the-clock-speed-wall" >}})의 벽이 여전히 가속기를 묶는다) 아래, 더 낮은 정밀도는 같은 봉투에 더 많은 병렬 MAC 처리량을 담는다. 그게 물리 이유다 — 알고리즘 선택만이 아니라 — 텐서 코어와 시스톨릭 어레이가 종종 특정 더 낮은 정밀도 형식 주위에 설계되는.

## 거래되는 것

정밀도 축소는 값이 더 거칠어지고 긴 사슬에 걸쳐 반올림 오차가 더 커진다는 뜻이다. 경험적으로 많은 신경망은 이를 잘 견딘다 — 특히 추론에서, 그리고 학습의 많은 부분에 주의를 기울이면 — 이는 미리 자명하지 않았고, 보여져야 했다.

## 일률 저정이 아니라 혼합

혼합 정밀도 학습·추론은 하드웨어 처리량 이득이 있는 무거운 행렬 곱에 더 낮은 정밀도(종종 FP16 또는 BF16)를 쓰고, 수치적으로 민감한 작업 — 반올림이 누적될 누적 같은 — 에는 더 높은 정밀도(종종 FP32)를 유지한다. 값을 버는 곳에만 전정밀도. 그래서 용어가 단순 *저*가 아니라 *혼합*이다.

## 다음 레버

정밀도는 각 연산을 싸게 만든다. 다음 쪽의 희소성은 이미 0인 피연산자가 아무것도 기여하지 않을 때 일부 연산을 통째로 건너뛰려 한다.
