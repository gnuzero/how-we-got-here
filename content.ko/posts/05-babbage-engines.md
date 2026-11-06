---
title: "배비지의 기관"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "차분기관과 해석기관 — 스토어, 밀, 카드 위의 프로그램"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

계산은 전기에서 시작되지 않았다. 톱니에서 시작되었다.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="런던 과학박물관의 찰스 배비지 차분기관 2호기" loading="lazy" width="1280">
<figcaption>차분기관 2호기 (Science Museum, London). 사진: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Charles Babbage는 [Computer History Museum](https://www.computerhistory.org/babbage/engines/)의 서술로는 1821년에 차분기관을 시작했고, [Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)에 따르면 1822년 6월 14일 Royal Astronomical Society에서 낭독된 논문으로 발표했다. 유한차분법으로 다항함수를 계산하는 기계식 계산기이며, 맞물린 톱니와 열 바퀴만으로 돌아간다. 전기 없음. 각 열은 한 자리. 「1」을 올리는 일은 물리적 사건이다. 이빨이 이웃을 잡아 돌리는 일.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="차분기관 2호기 자릿수 열 사이 자리올림 팔 클로즈업" loading="lazy" width="1280">
<figcaption>차분기관 2호기 Serial #2의 자릿수 열 사이 자리올림 팔 (Computer History Museum). 사진: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**지금 해 보세요.** 랩을 Y=9, Δ₁=7에서 한 단계 밟아 보세요. 일의 바퀴가 9를 넘고, 이빨이 십을 잡습니다. 9+7이 16이 됩니다. 그것이 유한차분으로 x²를 하는 일 — 이 기관이 위해 만들어진 방법입니다.

{{< lab type="difference-engine" height="720" >}}

이 책의 원작, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). 교육용 열 모델이며, 2호기의 완전한 복원이 아니다.

그는 실물 규모의 차분기관을 끝내 완성하지 못했다. 자금이 그와 싸웠다. **이 책의 주장**에서는, 당시의 가공 공차도 그와 싸웠다. 정밀도의 자릿수를 하나 늘릴 때마다, 마찰·백래시·누적 공차가 결과를 망칠 여지가 늘어난다.

후속작 해석기관이 현대 컴퓨터의 진짜 조상이다. 「스토어」(기억)와 「밀」(연산부)이 있었고, 프로그램할 수 있었다. 명령은 천공 카드에서 왔다 — 이미 공장 바닥에 있던 산업 기계에서 빌린 생각.

아래 호스팅 에뮬레이터는 John Walker의 Fourmilab Analytical Engine이다. 카드를 한 단계씩 밟으며 밀과 스토어 열이 바뀌는 것을 보세요. 퍼블릭 도메인. 우리는 사본을 호스팅하고 출처 링크를 남긴다.

{{< lab type="analytical-engine" height="780" >}}

출처: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip) (퍼블릭 도메인). 지도: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

그 빌림이 다음 정류장이다. 자카드 직기, 그리고 프로그램과 기계의 분리.

