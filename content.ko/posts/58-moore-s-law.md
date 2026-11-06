---
title: "무어의 법칙"
weight: 58
date: 2026-01-01
draft: false
phase: "8 — 공정 노드와 제조"
series_index: 57
aliases:
  - /posts/50-moore-s-law/
  - /posts/56-moore-s-law/
  - /posts/57-moore-s-law/
tags: []
summary: "무어의 관찰은 경제적 부품 수였다 — 트랜지스터 수는 여전히 오르고, 클럭과 트랜지스터당 비용은 다른 이야기를 한다"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

「무어의 법칙」은 끊임없이 죽었다 선언되고, 되살아나고, 화자가 필요로 하는 무엇이든으로 늘어난다. 앞 쪽들이 제조가 더 어려워진 것을 본 뒤, Gordon Moore가 정확히 무엇을 관찰했는지 — 그리고 묶인 어떤 추세가 실제로 다른 제약인지 — 를 말할 가치가 있다.

## Moore가 실제로 쓴 것

Gordon Moore의 1965년 *Electronics* 기사는 부품 *수*를 관찰했다. 한 집적회로에 경제적으로 둘 수 있는 부품 수가 대략 해마다(1975년경 대략 2년마다로 개정) 두 배가 된다는 것([Wikipedia, Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law)). 그 주장이 *아닌* 것에 주목하라. 클럭 속도의 법칙이 아니고, 단일 스레드 성능의 약속이 아니며, 「경제적으로」라는 말 너머 트랜지스터당 비용의 별도 정리도 아니다. 대중 용법은 종종 그 척도를 한 슬로건 아래 묶는다. 아래 동인은 구별된다.

## 트랜지스터 수: 여전히 오름

Moore가 틀 지은 대로 — 칩당 부품(오늘: 트랜지스터) — 추세는 수십 년 유지되었고 여전히 오른다. Posts [56]({{< relref "56-photolithography" >}})와 [57]({{< relref "57-finfet-to-gaa" >}})의 리소그래피·트랜지스터 구조 진보가 이끈다. 현대 하이엔드 칩은 Intel 4004([Post 25]({{< relref "25-mainframes-to-minicomputers-to-microprocessors" >}}))의 대략 2,300개에 맞서 수십억 트랜지스터를 든다.

## 클럭 속도: 다른 벽

클럭 주파수는 수십 년 트랜지스터 수와 함께 올랐다가, 2000년대 초에 빠른 스케일링을 멈췄다([Horowitz, ISSCC 2014](https://osmarks.net/assets/misc/2014-horowitz.pdf)) — 트랜지스터 스케일링이 멈춰서가 아니라 [Post 43]({{< relref "43-the-clock-speed-wall" >}})의 전력/열 벽 때문에. 그걸 「무어의 법칙 죽음」이라 부르면 척도 둘을 섞는다. 수는 클럭 평원 동안에도 계속 올랐고, 업계는 새 트랜지스터를 더 많은 코어와 칩 위 전문화 기능([Post 24]({{< relref "24-superscalar-multicore" >}}))에 썼지, 한 코어의 주파수를 더 미는 데 쓰지 않았다.

## 트랜지스터당 비용: 마찰이 보이는 곳

Moore 틀의 경제 반쪽 — 밀도가 오르며 더 싼 부품 — 이 최근 선단 마찰이 가장 분명한 곳이다. EUV 도구([Post 56]({{< relref "56-photolithography" >}}))는 매우 비싸고, 각 노드 세대는 더 정교한 공정 단계를 필요로 한다. 수십 년 웨이퍼당 더 많은 트랜지스터가, 절대 칩 비용이 유지되거나 조금 올라도 트랜지스터당 비용을 내렸다. 최신 노드에서는 그 관계가 약해졌다. 밀도는 여전히 오르고, 트랜지스터당 비용 개선은 역사적 속도로 자동이 아니다.

## 척도 셋, 슬로건 하나

트랜지스터 수: 여전히 스케일. 클럭 속도: 알려진 열 이유로 2000년대 중반 이래 평평. 트랜지스터당 비용: 많은 노드에서 절대적으로는 여전히 나아지되, 선단에서 문서화된 마찰. 그것들을 하나의 「법칙」으로 다루면 어떤 제약이 여전히 양보하고 어떤 것이 이 단계가 이름 붙인 아키텍처 선회를 강제했는지가 가려진다.

**출구:** Gordon E. Moore, "Cramming more components onto integrated circuits" (*Electronics*, April 19, 1965) — 나중에 무어의 법칙이라 별명 붙은 경제적 부품 수 관찰의 원진술.
