---
title: "시스톨릭 어레이"
weight: 66
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 65
aliases:
  - /posts/58-systolic-arrays/
  - /posts/64-systolic-arrays/
  - /posts/65-systolic-arrays/
tags: []
summary: "데이터가 MAC 격자를 통해 맥동한다 — 칩 전체를 행렬 곱에 특화한다(TPU)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

[Post 63]({{< relref "63-tensor-cores" >}})가 텐서 코어를 다루었다 — 그 외에는 일반 GPU 안의 특화 행렬 곱 하드웨어. 시스톨릭 어레이는 특화를 더 민다. 행렬 곱을 위해 단순 처리 요소 격자를 통해 데이터를 스트리밍하도록 조직된 아키텍처. Google의 TPU(Tensor Processing Unit)가 가장 두드러진 출하 예다. 생각 자체는 더 오래다. **H. T. Kung**과 **Charles E. Leiserson**이 1970년대 말에 VLSI용 시스톨릭 어레이를 이름 붙이고 형식화했다.

## 데이터가 흐르고, 계산은 도중에 일어난다

시스톨릭 어레이는 단순 처리 요소의 2D 격자다. 각자 곱-누적, 데이터가 맞춰진 리듬으로 움직이게 배열된다. 각 PE는 데이터가 도착하면 MAC을 한다. weight-stationary 설계(Google TPU MXU처럼)에서는 가중치를 미리 넣고 고정한 채 활성화가 가로질러 흐르고 부분합이 이웃으로 전파된다 — 시스톨릭 「심박」, 두 피연산자가 자유롭게 떠도는 것이 아니다. 이름은 의도적으로 심장의 맥동을 메아리친다. 데이터가 중앙 공유 제어 경로를 통해 페치되기보다 파도로 움직인다.

## Weight-Stationary 데이터플로

가중치를 *고정*한다 — 각 PE에 한 번 로드 — 활성화가 지나가며 고정 가중치에 곱해지고, 부분합이 격자를 통해 누적된다. 한 번 로드되면 가중치는 매 MAC마다 다시 페치될 필요가 없다. Posts [42]({{< relref "42-the-memory-wall" >}})와 [62]({{< relref "62-gpu-memory-hierarchy" >}})의 메모리 대역폭 압력을 감안하면, 그게 중요하다. 재사용 값을 계산 자리에 두고 데이터 이동을 줄인다 — 시스톨릭 설계가 답하려고 지어진 같은 제약.

## GPU 텐서 코어 대 시스톨릭 칩

텐서 코어는 여전히 일반 SIMT 아키텍처(Posts [60]({{< relref "60-why-gpus-exist" >}})–[61]({{< relref "61-cuda-cores-warps-and-occupancy" >}})) 안에 앉아, 행렬 곱 너머 많은 병렬 작업부하를 돌릴 수 있다. TPU 같은 시스톨릭 어레이 칩은 더 좁은 베팅을 한다. *전체* 칩을 효율적 행렬 곱 주위에 조직하고, 그 모양에 맞지 않는 작업에는 유연성이 덜하다. 어느 쪽이 절대적으로 나은 것은 아니다 — 행렬 곱 지배 부하에서의 효율 대 더 넓은 병렬 혼합에서의 유연성.

## 특화 심장으로서의 MXU

Google TPU에서 Matrix Multiply Unit(MXU)은 행렬 곱 처리량의 대부분을 나르는 시스톨릭 어레이로, 제어·메모리 인터페이스·비행렬 곱 나머지를 위한 벡터 유닛 옆에 있다. 특화 코어 더하기 지원 로직이 이 단계의 가속기들에 걸친 되풀이 패턴이다.

**출구:** H. T. Kung and Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — 행렬 계산을 위한 리듬 MAC 어레이의 고전 진술; 밀접한 관련 형태가 Mead and Conway의 *Introduction to VLSI Systems*(1980)에도 나타난다.
