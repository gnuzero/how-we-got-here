---
title: "기계·전기기계 계산"
weight: 4
date: 2026-01-01
draft: true
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 3
aliases:
  - /posts/01-mechanical-electromechanical-computing/
  - /posts/02-mechanical-electromechanical-computing/
tags: []
summary: "톱니가 프로그램의 생각을 강제했고, 마찰이 전기를 강제했다"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

계산은 전기에서 시작되지 않았다. 톱니에서 시작되었다.

## 배비지의 기관

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="런던 과학박물관의 찰스 배비지 차분기관 2호" loading="lazy" width="1280">
<figcaption>차분기관 2호(런던 과학박물관). 사진: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

1822년 Charles Babbage가 차분기관(Difference Engine)을 발표했다([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) — 유한차분법으로 다항함수를 계산하는 기계식 계산기, 맞물린 톱니와 원주 바퀴만으로. 전기 없음. 각 기둥은 한 자리였고, 「1」을 받아올리는 일은 물리 사건이었다. 톱니 이가 이웃을 잡아 돌리는 것.

그는 전 규모 차분기관을 완성하지 못했다 — 자금과 제조 공차가 둘 다 그를 막았다 — 그러나 후속인 해석기관(Analytical Engine)이 진짜 조상이다. 「store」(기억)와 「mill」(연산부)이 있었고, 프로그램 가능했다. 명령은 이미 공장 바닥에 있던 산업 기계에서 빌린 천공 카드에서 왔다.

## 자카드 직기

그 기계가 자카드 직기였다. Joseph-Marie Jacquard의 1800년대 초 드로우룸은 천공 카드 사슬로 북이 지날 때마다 어떤 실이 들릴지를 정했다. 구멍 → 들림, 구멍 없음 → 막힘. 카드를 바꾸면 무늬가 바뀐다. 직기는 「비단 브로케이드」를 알지 않는다. 고정되고 물리적으로 부호화된 들림/안 들림 결정 시퀀스를 실행할 뿐이다.

배비지가 채택한 추상이 그것이다. 프로그램은 명령의 시퀀스이며, 그것을 돌리는 기계와 분리된다. Ada Lovelace는 그 분리가 함의하는 것을 보았다 — 올바른 카드를 설계하면 기계는 숫자만이 아니라 *어떤* 기호도 다룰 수 있다. Menabrea의 해석기관 논문에 대한 그녀의 노트에는 종종 처음으로 출판된 컴퓨터 프로그램이라 불리는 것(베르누이 수)이 들어 있다.

**출구:** Ada Lovelace의 해석기관 *Notes*(Menabrea 번역에 대한) — 베르누이 수 스케치와 「어떤 기호」 논증의 1차 문헌.

## 이후의 모든 것에 왜 중요한가

명령 집합, 저장 프로그램, 제어와 데이터패스의 분리 — 모두 여기에 뿌리가 있다. 매체는 완전히 바뀐다(릴레이, 튜브, 트랜지스터). 논리 모양은 바뀌지 않는다. 명령의 시퀀스, 실행 유닛, 단계 사이 상태를 담는 저장소.

기계 계산이 *할 수 없었던* 것은 스케일이다. 톱니열에는 마찰·백래시·공차 누적이 있다. 정밀도 자리를 하나 더할 때마다 기계를 신뢰성 있게 짓기가 더 어려워진다. 그 천장 — 생각의 부족이 아니라 — 이 계산을 전기 스위칭으로 밀어냈다. 다음: 릴레이, 그리고 아키텍처를 2차 대전으로 나른 전기기계 논리.
