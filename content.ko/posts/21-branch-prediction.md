---
title: "분기 예측"
weight: 21
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 20
aliases:
  - /posts/14-branch-prediction/
  - /posts/19-branch-prediction/
  - /posts/20-branch-prediction/
tags: []
summary: "파이프라인 플러시는 비싸다 — 예측은 그것을 드물게 만들기 위해 존재한다"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

오예측된 분기는 잘못된 경로로 페치된 모든 것을 플러시한다. 깊은 파이프라인에서는 십수 사이클을 훌쩍 넘을 수 있다. [Post 20]({{< relref "20-pipelining" >}})이 그 비용을 테이블에 남겨 두었다. 이 쪽이 답이다. 방향을(그리고 타깃을) 충분히 일찍 짐작해 플러시를 드물게 만든다.

## 정적 짐작은 충분하지 않다

정적 규칙 — 항상 비취해짐, 또는 「뒤로 가는 분기(루프)는 취해짐」 — 은 하드웨어 비용이 없고, 실제 코드의 많은 부분을 놓친다. 분기 행동은 고정 규칙이 볼 수 없는 이력에 의존한다.

동적 예측기는 런타임에 결과를 추적한다. 100번 도는 루프는 뒤로 가는 분기를 99번 취한다. 「지난번에 취해짐」을 기억하는 예측기는 거의 모든 반복을 맞힌다.

## 2비트 포화 카운터

고전적 벽돌: 네 상태 — 강하게/약하게 비취해짐, 약하게/강하게 취해짐. 확정된 결과마다 카운터가 실제로 일어난 쪽으로 한 칸 움직인다(끝에서 포화). 예측은 상위 비트다.

왜 1비트가 아닌가? 1비트 「마지막 결과」는 한 번의 이상 뒤에 뒤집히고 — 그다음 *정상* 반복도 오예측한다. 2비트는 뒤집히기 전에 연속 이상 둘이 필요하므로, 루프의 마지막 비취해짐 종료가 다음 루프 실행을 독 들이지 않는다.

## 다음에 어디로 페치할 것인가

방향은 절반뿐이다. 취해진 분기에서는 분기가 완전히 디코드되기 전에 페치가 *타깃*도 필요하다. Branch Target Buffer(BTB)는 명령 주소로 색인하는 작은 캐시로, 마지막으로 확정된 타깃을 기억한다. 히트면 페치가 다음 사이클에 투기적으로 점프할 수 있다.

실제 예측기는 카운터 표(종종 전역 이력과 함께)와 BTB를 합친다. 하이엔드 칩은 더 간다. 2비트 카운터는 여전히 개념의 핵이고 — 손으로 추적할 만큼 작다. 아래 미니 CPU 랩에는 예측기·파이프라인·캐시가 없지만, 루프의 `JZ`를 밟으며 종이 위에서 그 분기용 2비트 카운터를 반복마다 옮길 수 있다.

{{< lab type="mini-cpu" >}}

**출구:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — 동적 분기 예측의 초기 체계적 다루기. 교과서가 된 포화 카운터 아이디어를 포함.
