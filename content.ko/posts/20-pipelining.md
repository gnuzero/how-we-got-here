---
title: "파이프라이닝"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 19
aliases:
  - /posts/13-pipelining/
  - /posts/18-pipelining/
  - /posts/19-pipelining/
tags: []
summary: "처리량을 위해 명령을 겹친다 — 그다음 해저드가 포워딩, 스톨, 이어지는 모든 것을 강제한다"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

단일 사이클 데이터패스([Post 19]({{< relref "19-datapath-design" >}}))는 처리량을 테이블 위에 남겨 둔다. 모든 명령이 가능한 가장 느린 경로를 기다린다. 파이프라이닝은 실행을 스테이지로 나누고, 여러 명령이 *동시에* 다른 스테이지를 차지하게 한다.

## 다섯 스테이지, 겹쳐진

고전 RISC 파이프라인: **IF**(페치), **ID**(디코드 / 레지스터 읽기), **EX**(ALU), **MEM**(로드/스토어), **WB**(라이트백). 파이프라인 레지스터([Post 16]({{< relref "16-sequential-logic" >}}) 다시)가 클록마다 스테이지 사이 결과를 래치한다.

명령 N이 EX에 있는 동안 N+1은 ID에, N+2는 IF에 있을 수 있다. 정상 상태에서는 매 사이클 새 명령이 *완료*된다 — 각각이 시작부터 끝까지 여전히 다섯 사이클이 걸려도. 지연은 남고, 처리량이 오른다. 그 구분이 이 뒤 어디에나 나타난다.

**지금 해 보세요.** 아래 미니 CPU를 명령당 한 번 Step 하세요 — 그것이 [Post 19]({{< relref "19-datapath-design" >}})가 보이게 한 단일 사이클 습관이다. 파이프라이닝의 주장은 처리량이다. 같은 페치 / 디코드 / 실행 조각이 명령들에 걸쳐 겹치는 것, 틱당 명령 하나가 아니다. 순차 Step을 느낀 뒤, 실제 파이프라인이 왜 그처럼 단순하게 남을 수 없는지 알고 해저드 절을 읽으세요.

{{< lab type="mini-cpu" >}}

## 해저드: 독립이 깨지는 곳

명령은 드물게 독립이다.

**데이터 해저드** — 명령이, 아직 비행 중인 이전 명령이 쓰기를 끝내지 않은 값을 필요로 한다. **포워딩**(바이패스)은 ALU 결과를 레지스터 파일을 건너뛰고 나중 파이프라인 레지스터에서 EX로 바로 돌려, 의존 명령이 종종 스톨 없이 가게 한다. 포워딩이 모든 간격을 닫지는 못한다. 로드 직후 사용은 MEM 스테이지가 끝날 때까지 **스톨**(버블)이 필요하다.

**제어 해저드** — 분기. 파이프라인은 취해짐/비취해짐, 또는 타깃을 늦게야 알지만 — 뒤따르는 명령은 이미 페치되었다. 취해진 분기에서 그것들은 플러시되어야 한다. 잘못된 경로에 쓴 사이클은 낭비다.

## 그 비용이 다음에 강제하는 것

오예측 플러시는 비싸다 — 그래서 분기 예측([Post 21]({{< relref "21-branch-prediction" >}})이 존재한다. 일찍, 충분히 정확히 짐작해 플러시를 드물게 만든다. 로드-사용 스톨이 비순차 실행([Post 23]({{< relref "23-out-of-order-execution" >}})이 존재하는 이유다. 기다리는 명령만 스톨하고 파이프라인 전체가 아니라, 뒤의 독립 일을 돌리게 한다.
