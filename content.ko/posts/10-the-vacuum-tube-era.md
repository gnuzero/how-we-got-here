---
title: "진공관 시대"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "진공관은 움직이는 부품을 없앴다 — 그 속도를 열·전력·고장과 맞바꿨다"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

진공관의 핵심 트릭은 단순하다. 작은 전류로 큰 전류를 제어하되, 움직이는 부품은 없다. 그래서 컴퓨터가 릴레이 기반의 어떤 것보다 자릿수가 다른 속도로 빨라졌고, 그 시대가 열·전력·고장률과의 끊임없는 싸움이 된 이유이기도 하다.

## 삼극관은 어떻게 전환하는가

삼극관은 진공 속에 세 요소를 밀봉한다. 전자를 방출하는 가열 음극(열전자 방출), 제어 그리드, 전자를 끌어당기는 양의 양극(플레이트). 그리드가 그 사이에 있다. 작은 음의 전압이 양극으로의 전류를 조이거나 끊는다. 작은 그리드 변화, 큰 양극 전류 변화. 그것이 증폭이고, 맞는 토폴로지에서는 스위치이기도 하다. 전류 켜짐/꺼짐이 1과 0.

움직이는 것은 전자뿐이다. 그래서 진공관은 릴레이가 밀리초를 쓰던 곳에서 마이크로초로 전환할 수 있었다 — 기계 운동을 없앤 대략 천 배의 이득.

## ENIAC: 30톤 스위치보드

ENIAC(1943–45 제작, 1946년 2월 14일 발표)이 그 시대의 이정표이며, 물리적 규모가 중요하다. Penn Engineering은 진공관 약 18,000개, 30×50피트 방, 30톤, 150킬로와트를 준다. ([Penn Engineering](https://www.seas.upenn.edu/about/history-heritage/eniac/)) Army Ordnance Corps 자체 데이터시트는 관 17,468개, 1,800제곱피트, 174 kW를 적는다. ([US Army Ordnance Corps, *Electronic Computers Within the Ordnance Corps*, App. I](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html)) 어느 쪽이든 전력은 산업용이었다.

ENIAC을 「프로그래밍」한다는 것은 물리적으로 다시 배선하는 일이었다. 패치 케이블, 기능마다 스위치를 맞추는 거대한 스위치보드. 현대적 의미의 저장 프로그램은 없었다. *연산 순서*가 케이블 라우팅에 살았다. 새 계산을 위해 재구성하는 데 며칠이 걸릴 수 있었다. 그 고통이 Phase 3 CPU 아키텍처 이야기의 직계 조상이다. *저장된* 프로그램, 데이터와 같은 메모리의 명령이 ENIAC이 원래 없던 해법이었다(1948년 기능표에 프로그램을 저장해 돌리도록 수정되었고, 1948년 4월 읽기 전용 배열이 처음 시연되었다고 Wikipedia의 [ENIAC](https://en.wikipedia.org/wiki/ENIAC)과 [Stored-program computer](https://en.wikipedia.org/wiki/Stored-program_computer) 쪽이 적는다. 후자는 일부 역사가가 그것을 저장 프로그램 컴퓨터로 세지 않는다고도 적는다). 그 해법이 이어진 범용 기계를 정의했다.

Herman H. Goldstine의 초기 전자 컴퓨터 역사는 이 시대의 고전적인, 현장 인접 서술로 남는다. 「몇 분마다 관을 갈아 끼웠다」는 식의 통속 이야기는 그에 맞서 조심히 다룬다. 공동 발명자 J. Presper Eckert는 1989년 인터뷰에서 그것을 「또 다른 신화」라 불렀다. ([Computerworld](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

**출구:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine급 ENIAC 역사, 민속담에 맞서는 데 유용하다.

## 왜 18,000개 관이 악몽이었는가

진공관은 고장 난다. 필라멘트가 타고, 밀봉이 새고, 방출이 떨어진다. ~18,000개면 무언가가 정기적으로 고장 난다. 정격보다 훨씬 아래서 돌리면 도움이 되었다(Penn: Eckert가 1/4 전력으로 돌림). ENIAC은 그래도 대략 하루나 이틀에 관 하나를 잃었고, 유지보수 팀은 고장을 약 15분에 고치는 법을 배웠다. ([CHM, *Revolution*: ENIAC](https://www.computerhistory.org/revolution/birth-of-the-computer/4/78); 비교: [Eckert의 서술](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html) — 청소 신화가 아님). 고장은 실제였고 비쌌다. 각 관도 실제 열을 낸다 — 방으로 가득하면 냉각이 필요하고 — 그래서 그 시대에는 강력했고, 돌리기는 잔인하게 비쌌다.

그것이 다음 쪽을 깐다. 트랜지스터가 이긴 것은 엔지니어가 영리함을 위해 영리해서가 아니다. 진공관 자신의 물리 — 열, 크기, 깨지기 쉬운 진공 외피 — 가 이 접근이 어디까지 스케일할 수 있는지에 단단한 천장을 걸었기 때문이다.
