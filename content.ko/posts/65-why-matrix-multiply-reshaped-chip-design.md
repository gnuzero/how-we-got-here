---
title: "행렬 곱이 칩 설계를 다시 빚은 이유"
weight: 65
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 64
aliases:
  - /posts/57-why-matrix-multiply-reshaped-chip-design/
  - /posts/63-why-matrix-multiply-reshaped-chip-design/
  - /posts/64-why-matrix-multiply-reshaped-chip-design/
tags: []
summary: "AI 계산은 규모에서 행렬 곱으로 환원된다 — 그 모양에 실리콘을 특화한다"
image_prompt: "Infographic showing a neural network layer's forward pass as a matrix multiply mapped onto specialized hardware, clean AI hardware explainer style"
video_prompt: "20-second animation: a neural network layer computation as a matrix multiply through specialized MAC units, clean technical animation"
schematics: "Diagram: neural network layer as matrix multiply + general ALU vs specialized MAC array comparison"
---

이 마지막 단계는 현대 AI 작업부하를 위해 지어진 하드웨어다. 칩 설계가 왜 이렇게 세게 구부러졌는지는, 「AI 작업부하」가 산술 수준에서 실제로 무엇으로 환원되는지를 말한 뒤에야 더 분명해진다 — 그 문구가 시사하는 것보다 더 좁고 더 기계적이다.

## 층이 계산하는 것

완전 연결 층의 순전파는 행렬 곱이다. 활성화 곱하기 가중치, 그다음 값싼 원소별 비선형성. 합성곱은 행렬 곱으로 낮출 수 있다(im2col 접근; cuDNN 저자들이 [Chetlur et al. 2014](https://arxiv.org/abs/1410.0759)에서 기술). 어텐션 — 대부분의 대형 언어 모델 뒤 트랜스포머의 핵심 — 역시 계산 심장에서 행렬 곱이다. 쿼리–키 점수, 그다음 가중 값. 가르치는 단순화가 아니다. 현대 딥러닝의 학습과 추론에서 압도적 다수의 원시 사이클이 행렬 곱-누적이다 — 거대한 규모, 끝없이 반복.

## 하드웨어가 따른 이유

3단계 CPU 코어는 임의의 순차 코드를 위해 지어진다 — 분기, 다양한 메모리 접근, 예측 불가 제어 흐름. 그 일반성은 한 규칙적 연산이 지배하는 작업부하가 필요로 하지 않는 기계(예측, 비순차, 정교한 캐시)에 면적과 전력을 쓴다.

행렬 곱이 AI 계산의 지배적 몫으로 인식된 뒤, 그에 특화하는 일이 값어치 있게 되었다. 범용 기계를 건너뛰고 예산을 MAC 처리량에 쓰는 실리콘. 텐서 코어([Post 63]({{< relref "63-tensor-cores" >}}))는 그 생각을 여전히 일반 GPU 안에 심는다. 다음 쪽은 더 나아간다 — 시스톨릭 어레이 — 같은 깨달음 주위에 아키텍처 전체를 특화한다.

## 되풀이되는 패턴

이건 [Post 24]({{< relref "24-superscalar-multicore" >}})의 슈퍼스칼라→멀티코어 선회와 [Post 57]({{< relref "57-finfet-to-gaa" >}})의 평면→FinFET→GAA 진화와 *같은 종류의* 이야기, 이제 칩 전체 아키텍처에서다. 작업부하의 모양이 잘 이해되고 충분히 지배적이면, 그 모양을 위한 특화 하드웨어가 그것을 많은 경우 중 하나로 취급하는 범용 하드웨어를 이긴다. 행렬 곱의 지배가 이 단계의 많은 부분이 점진적 CPU — 심지어 일반 GPU — 개선만이 아니라 목적 지어진 실리콘인 이유다.
