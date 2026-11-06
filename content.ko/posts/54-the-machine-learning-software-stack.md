---
title: "머신러닝 소프트웨어 스택"
weight: 54
date: 2026-01-01
draft: false
phase: "7 — 분산 시스템, 빅데이터, 오케스트레이션"
series_index: 53
aliases:
  - /posts/46-the-machine-learning-software-stack/
  - /posts/52-the-machine-learning-software-stack/
  - /posts/53-the-machine-learning-software-stack/
tags: []
summary: "모델과 실리콘 사이에, 텐서를 분산 학습으로 바꾸는 스택이 있고 — 인터커넥트 벽에 부딪힌다"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

9·10단계는 현대 AI 계산의 하드웨어 — GPU, 텐서 코어, 인터커넥트 — 를 다룬다. 대부분의 ML 엔지니어는 그 실리콘을 직접 프로그래밍하지 않는다. 「여기 네트워크 아키텍처」와 「여기 실제 장치의 행렬 곱」 사이에 소프트웨어 스택이 있고, 그 스택이 이 시리즈의 분산 시스템 실이 실제로 *쓰이는* 방식이다.

## 먼저 배열

실용 바닥은 다차원 배열(텐서)과 벡터화 연산 — Python 세계의 NumPy급 수치 계산. 무거운 일은 Python에서 *호출되는* 컴파일된 루틴에서 돈다. 인터프리터 루프가 수학의 병목이 아니다.

## 프레임워크: 그래디언트와 하드웨어를 하나의 계약으로

딥러닝 프레임워크(지배적 예로 PyTorch와 TensorFlow)는 배열 위에 학습이 필요로 하는 것을 더한다. **자동 미분**은 계산 그래프를 짓고, 인간이 아키텍처마다 미적분을 다시 유도하지 않고 그래디언트를 낸다 — 연구 속도로 경사 하강을 실용 가능하게 하는 제약. **하드웨어 추상**은 같은 모델 코드가 CPU, CUDA를 통한 NVIDIA GPU(9단계), 또는 다른 가속기를, 텐서 연산을 최적화 커널로 낮춰 겨냥하게 한다 — [Post 18]({{< relref "18-instruction-sets" >}})의 ISA/마이크로아키텍처 분리와 *같은 종류의* 계약, 소프트웨어 한 층 위.

## 그래프를 낮추기

프레임워크 연산과 장치 커널 사이에 컴파일러 층이 점점 앉는다. 연산자를 융합하고, 메모리 트래픽을 줄이고, 중간 표현을 대상으로 낮춘다. [Post 35]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}})의 컴파일러 생각을 일반 명령형 코드가 아니라 텐서 그래프에 적용한 것 — 최적화하고 낮추며, 매번 다시 렉스하지 않는다.

## 분산이 전선에 부딪힌다

한 GPU의 메모리(9단계 HBM)는 종종 현대 대형 모델을 담지 못하고, 혼자 학습시키기는 더하다. **데이터 병렬**은 모델을 복제하고, 배치를 나누고, 그래디언트를 동기화한다(all-reduce — 10단계 / Posts [44]({{< relref "44-interconnects-at-scale" >}})와 [49]({{< relref "49-datacenter-networking-and-rdma" >}})). **모델 병렬**은 어디에도 한 번에 들어가지 않을 때 모델 자체를 장치에 걸쳐 나눈다. 실제 학습은 둘을 섞는다. 처리량은 그다음 종종 GPU가 그래디언트와 활성화를 교환하는 속도에 묶인다 — 단일 GPU가 고립해서 곱하는 속도가 아니다. 앞 쪽의 인터커넥트 벽이 학습 벽으로 돌아온다.

## 이 단계의 고리를 닫다

현대 ML 학습은 신경망 옷을 입은 분산 시스템 문제다. 많은 계산 유닛을 조율하고, 부분 실패를 흡수하고(GFS, Kubernetes), 거대한 중간 데이터를 효율적으로 옮긴다. 그 소프트웨어 반쪽 없는 하드웨어 — 또는 실리콘과 패브릭 없는 소프트웨어 — 는 9·10단계가 끝내는 이야기의 반쪽뿐이다.
