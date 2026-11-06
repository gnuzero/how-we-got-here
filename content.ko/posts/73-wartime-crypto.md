---
title: "전시 암호"
weight: 73
date: 2026-09-06
draft: false
phase: "암호와 전시 계산"
series_index: 72
aliases:
  - /posts/66-wartime-crypto/
  - /posts/72-wartime-crypto/
tags: []
summary: "Enigma, Bletchley, Colossus — 암호 해독이 왜 전자 계산을 강제했는가"
image_prompt: "Clean historical-technical diagram: Enigma rotors beside a Colossus rack of vacuum tubes at Bletchley, connective arrows from cipher traffic to electronic counting, muted wartime-engineering style"
video_prompt: "20-second animation: Enigma rotors stepping, intercept traffic flooding in, electromechanical Bombe searching, then Colossus tubes counting at electronic speed, clean technical motion graphics"
schematics: "Diagram: Enigma rotor stepping → Bombe search → Colossus electronic counting, bridging Posts 09–10"
---

Posts [5]({{< relref "05-babbage-engines" >}})–[9]({{< relref "09-relays-and-electromechanical-logic" >}})가 기어와 릴레이가 자동 계산이 가능함을 증명한 것을 보여 준다. 전쟁은 그 가능성을 *긴급*하게 만들었다. 암호 트래픽이 어떤 인간 방도 읽을 수 있는 것보다 빨리 도착했고, 따라잡을 수 있는 기계가 계산을 전기기계에서 전자로 끌어냈다.

이건 **작업부하로서의 비밀**과 [Post 10]({{< relref "10-the-vacuum-tube-era" >}})의 진공관 기계 사이의 연결 조직이다 — 전쟁의 두 번째 역사가 아니다.

## Enigma는 움직이는 표적이었다

독일 Enigma 가족은 타이핑하며 스텝하는 로터로 작전 트래픽을 암호화해, 치환이 글자마다 바뀌었다. 한 메시지를 깨도 다음 날을 공짜로 사지 못했다. 전쟁 전, 폴란드 Cipher Bureau 수학자들 — Marian Rejewski, Jerzy Różycki와 Henryk Zygalski와 함께 — 이 제한된 감청과 문서에서 1932년 말 Enigma의 내부 배선을 재구성했고, 그다음 전쟁이 시작되기 다섯 주 전 그 기초를 영국·프랑스와 공유했다([Wikipedia, Marian Rejewski](https://en.wikipedia.org/wiki/Marian_Rejewski)). 출구: Rejewski 자신의 기록과 박물관·아카이브가 보유한 폴란드–연합국 이전 역사, Wikipedia 패러프레이즈가 아니다.

Bletchley Park에서 Alan Turing(Hut 8)과 동료들이 그 수학적 돌파를 산업 탐색으로 바꿨다. British Bombe(Gordon Welchman의 diagonal board가 핵심 설계 개선 중)가 Enigma 설정을 전기기계 가능 공간 탐색으로 돌렸다. 릴레이와 드럼이 *사냥*할 수 있었다. 이후 텔레프린터 암호가 요구한 속도로 암호문을 셀 수는 없었다.

## Colossus: 작업부하가 금속을 넘어설 때

Lorenz 텔레프린터 암호(「Tunny」)는 다른 문제를 냈다. 전자 속도의 통계 공격이 필요한 긴 스트림. Max Newman이 그 공격 주위에 Newmanry를 조직했다. 전화 교환에서 이미 진공관을 믿었던 Post Office 엔지니어 Tommy Flowers가 **Colossus**를 지었다(첫 기계가 1944년 1월 Bletchley Park에 인도되어 1944년 2월 5일 첫 메시지를 공격, Flowers의 일기 — Copeland 인용 — 및 Crypto Museum 기준; TNMOC는 인도에 1943년 12월 말 / 1944년 1월, 작동에 1944년 2월 초를 준다; Mark II는 1944년 6월부터; 또한 ([Wikipedia, Colossus computer](https://en.wikipedia.org/wiki/Colossus_computer))) — 종이 테이프를 읽고 깨뜨릴 수 있는 설정을 향해 세는 튜브 랙.

신화가 아니라 제약을 이름 붙여라. Colossus는 특수 목적 암호분석 전자장치였지, 일반 저장 프로그램 컴퓨터가 아니었다. 그것이 *강제*한 것은, 많은 수의 튜브를 그 작업부하에서 어떤 릴레이 농장도 이기는 충분히 신뢰할 수 있는 기계로 배선할 수 있다는 증명이었다. 그게 [Post 10]({{< relref "10-the-vacuum-tube-era" >}})가 풀어내는 같은 물리 베팅이다 — 스위치에 움직이는 접점 없음 — 평시 연구 여유 대신 전시 압력 아래.

출구: [The National Museum of Computing](https://www.tnmoc.org/)(Colossus 재건과 1차 자료); 학술 Colossus 문헌의 Tommy Flowers와 Max Newman(예: Copeland 편집 역사); Enigma/Bombe를 위한 Bletchley Park 자체 아카이브 가이드.

## 왜 트랜지스터 논증 전에 속하는가

척추를 앞으로 읽어라.

- **[Post 9]({{< relref "09-relays-and-electromechanical-logic" >}})** — 릴레이가 이진 논리를 증명하고, 움직이는 금속이 너무 느리다는 것도 증명한다.
- **이 쪽** — 진짜 작업부하(암호 탐색과 스트림 계수)가 「너무 느림」을 운영상 용납할 수 없게 만든다.
- **[Post 10]({{< relref "10-the-vacuum-tube-era" >}})** — 튜브가 기계 운동을 제거하고, ENIAC 규모 기계가 다른 프로그램 아래 전자 스위치를 상속한다.
- **[Post 11]({{< relref "11-why-the-transistor-had-to-happen" >}})** — 튜브가 그다음 *자신의* 천장(열, 전력, 고장)에 부딪히고, 그래서 트랜지스터가 일어나야 했다.

전시 암호가 계산을 발명하지 않았다. 세기의 가장 어려운 정보 문제 중 하나에 대해 전기기계에서 전자로의 점프를 *선택 사항이 아니게* 만들었고 — 일을 한 이름 있는 사람들의 흔적을 남겼다. 선택 곁길. 주 여정은 [Post 10]({{< relref "10-the-vacuum-tube-era" >}})에서 계속된다.
