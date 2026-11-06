---
title: "트랜지스터: BJT에서 MOSFET으로"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — 물리와 소자"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "전류 제어 BJT는 대기 전력을 태웠다. 전압 제어 MOSFET이 밀도를 가능하게 했다"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

둘 다 「트랜지스터」라 불리는 소자 족이 있다. 전환의 물리가 다르고 — 현대 다이 위의 수십억 소자로 스케일하는 것은 그중 하나뿐이다.

## BJT: 전류가 전류를 제어한다

바이폴라 접합 트랜지스터(NPN: N 이미터, P 베이스, N 컬렉터)는 작은 베이스 *전류*로 더 큰 컬렉터–이미터 전류를 제어한다. 켠 상태를 유지하려면 베이스 전류를 계속 공급해야 한다. 칩 규모에서 그 대기 비용이 쌓인다. 바이폴라 게이트를 더 빽빽이 넣을수록, 상태를 유지하는 것만으로도 더 많은 전력을 태운다.

## MOSFET: 전압이 채널을 제어한다

MOSFET은 실리콘 위에 금속(또는 폴리실리콘) 게이트를 두고, 얇은 산화물로 분리한다 — Post 5의 그 안정한 SiO₂. 게이트 전압은 게이트 *통해* 전류를 밀어 넣지 않는다. 산화물이 DC를 막는다. 소스와 드레인 사이에 전도 채널을 만들거나 없애는 전계를 만든다. NMOS에서는 양의 게이트 전압이 P형 바디에 전자를 끌어 반전층을 만들고, 전류가 흐른다. 게이트 전압을 내리면 채널이 사라지고 전류가 멈춘다.

**게이트는 정상 상태 전류를 거의 쓰지 않는다.** 게이트 커패시턴스가 충전되면, 켠 상태를 유지하는 비용은 거의 없다. BJT의 연속 베이스 전류와 정반대다.

## 왜 MOSFET이 디지털 논리에서 이겼는가

거의 0인 정적 게이트 전류가 전부다. CMOS(Post 7)는 그 위에 세워, 의미 있는 전류가 주로 *전환하는 동안* 흐르게 하고 상태를 유지하는 동안에는 흐르지 않게 한다. 그것이 트랜지스터 수를 수천에서 수십억으로 올리면서도 다이가 녹지 않게 한 이유다 — Phase 8이 공정 노드 해상도로 돌아오는 스케일 호.

역사는 시간이 걸렸다. Bell Labs의 M. M. (John) Atalla와 Dawon Kahng이 1959년 첫 성공적인 MOS 트랜지스터를 만들었고, Bell은 추구하지 않았지만 Fairchild와 RCA가 했고, MOS 소자는 1964년 시장에 나왔다(General Microelectronics와 Fairchild의 p-채널 부품, RCA의 n-채널 트랜지스터). 바이폴라보다 작고 전력이 낮기 때문에, CHM은 오늘날 만들어지는 마이크로칩의 99퍼센트 이상이 MOS 트랜지스터를 쓴다고 적는다. ([CHM, "1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated"](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

BJT가 사라진 것은 아니다. 전류 구동이나 아날로그 선형성이 밀도보다 앞설 때 여전히 중요하다. 본격적 규모의 디지털 논리에서는 MOSFET의 대기 전력 물리가 유일한 실행 가능한 길이었고 — 다음 쪽의 모든 게이트가 그것으로 지어진다.

**출구:** Dawon Kahng, "Electric Field Controlled Semiconductor Device," U.S. Patent 3,102,230 (출원 1960-05-31, 등록 1963-08-27), 위 CHM MOS 이정표 쪽에 목록됨 — 후손이 디지털 표준이 된 전계 효과 소자.
