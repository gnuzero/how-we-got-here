---
title: "Attention Is All You Need"
weight: 71
date: 2026-01-01
draft: false
phase: "10 — 현대 AI 하드웨어"
series_index: 70
aliases:
  - /posts/63-attention-is-all-you-need/
  - /posts/69-attention-is-all-you-need/
  - /posts/70-attention-is-all-you-need/
tags: ["attention", "transformers", "neural networks"]
summary: "셀프 어텐션이 척추가 닫힌다 — 여정이 지은 행렬 곱 하드웨어에 사상되는 병렬 시퀀스 모델링"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

이 시리즈의 제목은 *From Relays to Attention*이다. 여기까지의 모든 것이 대규모 행렬 곱을 실용 가능하게 만든 긴 물리·아키텍처 경로였다. 이 장은 그 경로가 가능하게 한 알고리즘 목적지다.

2017년 **Vaswani et al.**이 "Attention Is All You Need"를 발표했다([Wikipedia, Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need)). 논문은 Transformer를 소개하고 *셀프 어텐션*을 시퀀스 모델링의 주요 메커니즘으로 만들었다 — RNN과 LSTM의 순차 재귀를, 모든 위치를 한꺼번에 볼 수 있는 완전 병렬화 가능 연산으로 대체.

## 셀프 어텐션이 하는 일

토큰 임베딩이 주어지면, 셀프 어텐션은 모든 위치에 대해 모든 위치의 값의 가중 조합을 계산한다. 가중치는 *쿼리*(현재 위치)와 *키*(모든 위치) 사이 유사성에서 온다. 행렬 형태로:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\), \(V\)는 입력의 선형 투영이다.
- \(\sqrt{d_k}\)로 스케일하면 차원이 클 때 softmax가 포화되지 않게 유지한다.
- 결과는 각 위치가 데이터 의존 방식으로 다른 모든 위치에서 모은, 같은 길이의 시퀀스다.

연산이 행렬 곱 더하기 softmax이므로, 앞 장의 하드웨어에 사상된다. 고처리량 MAC 유닛, 큰 온칩 메모리, 활성화와 가중치를 옮기는 인터커넥트.

## Multi-Head Attention

한 헤드는 한 종류의 관계를 배우는 경향이 있다. Multi-head attention은 여러 개를 병렬로(다른 학습된 투영) 돌리고 이어 붙인다 — 같은 층에서 통사·의미·위치·장거리·단거리.

원래 Transformer의 base 모델은 8 헤드를 썼다(큰 모델은 16). 현대 LLM은 보통 층당 수십에서 낮은 수백 쿼리 헤드를 쓴다(예: GPT-3: 96; Llama 3 405B: 128), 수십에서 ~100+ 층에 걸쳐(Llama 3 405B: 126) — 어느 쪽도 일상적으로 「수백」은 아니다.

## 왜 지배적이 되었는가

1. **병렬성** — RNN과 달리, 모든 위치가 한꺼번에 돌 수 있다. 학습 처리량은 시퀀스 길이와 하드웨어 행렬 곱 용량에 스케일하고, 순차 스텝에는 아니다.
2. **장거리 의존** — 원리상 어떤 토큰이든 다른 어떤 토큰에 직접 어텐드한다. 이차 어텐션 행렬과 실용 컨텍스트 창에 제한된다.
3. **하드웨어 친화성** — 지배적 작업은 밀집 행렬 곱 — 텐서 코어, 시스톨릭 어레이, 현대 GPU 메모리 계층이 최적화된 바로 그것(Posts [63]({{< relref "63-tensor-cores" >}})–[66]({{< relref "66-systolic-arrays" >}})).

전체 어텐션의 이차 비용은 여전히 진짜다 — 그래서 희소·선형·슬라이딩 윈도 및 다른 근사. 핵심 통찰은 여전히 선다. 단순·병렬화 가능 어텐션 메커니즘이 재귀를 대체할 수 있었다.

## 호를 닫다

불리언 논리를 구현한 전자기 릴레이에서, 튜브·트랜지스터·파이프라인·캐시·GPU·텐서 코어를 거쳐, 하드웨어 궤적은 스위칭·저장·산술을 더 빠르고 조밀하고 효율적으로 만들었다. 어텐션은 현재 그 하드웨어에서 시퀀스 모델링을 위해 가장 많은 값을 뽑아내는 알고리즘 구조다.

물리 제약은 계속 바뀐다(메모리 대역폭, 연산당 에너지, 인터커넥트 지연). 공학 응답은 이 시리즈 처음부터의 같은 패턴이다. 묶는 제약을 정확히 이름 붙이고, 같은 벽에 더 세게만 밀지 말고 아키텍처를 바꾼다.

그게 릴레이에서 어텐션까지의 이어지는 실이다.

**출구:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — Transformer를 소개하고 셀프 어텐션을 지배적 시퀀스 모델링 메커니즘으로 만든 원논문.
