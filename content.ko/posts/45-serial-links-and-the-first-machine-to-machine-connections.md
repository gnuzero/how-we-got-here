---
title: "직렬 링크와 첫 기계 대 기계 연결"
weight: 45
date: 2026-01-01
draft: false
phase: "6 — 네트워킹의 진화"
series_index: 44
aliases:
  - /posts/38-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/43-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/44-serial-links-and-the-first-machine-to-machine-connections/
tags: []
summary: "점대점 직렬 링크는 끝 둘만 잇는다 — 패킷 교환을 강제하는 천장"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

5단계의 모든 버스는 *한* 기계 *안*에 머문다. 네트워킹은 별도 기계가 말해야 할 때 시작된다 — 그리고 패킷 교환 네트워크가 있기 전에는, 그게 직렬 링크였다. 비트 스트림 하나, 점대점, 라우팅 없음, 「이 전선 저쪽 끝」을 넘는 주소 없음.

## RS-232: 기준선 직렬 링크

RS-232(EIA, 1960([Wikipedia, RS-232](https://en.wikipedia.org/wiki/RS-232)))는 두 장치 사이의 전압 수준과 비동기 직렬 관례를 고정했다 — 데이터와 함께 클럭이 타지 않으므로 양쪽이 미리 보드에 합의한다. 주소 지정 없음, 라우팅 없음, 끝이 고른 단순 패리티 너머의 오류 정정 없음. 장치 둘, 한 번에 비트 하나.

그것으로 충분했다. 터미널이 메인프레임과 미니컴퓨터(3단계 계보)에 닿는 데 썼다. 더 높은 네트워킹 스택에 의존하지 않는 채널이 필요할 때, 라우터와 임베디드 장비로 들어가는 여전히 단순한 콘솔 경로다.

## 모뎀: 아날로그 전선 위의 디지털

장거리 말은 전화망을 타야 했다 — 아날로그, 협대역, 음성용. 모뎀은 디지털 비트 스트림을 전화선이 나를 수 있는 아날로그 반송파에 변조하고, 먼 끝에서 다시 비트로 복조한다. 초기 속도는 초당 수백 비트, 나중에는 수십 킬로비트 — 현대 척도로는 느리지만, 같은 방에 없는 기계에 이미 거의 어디에나 가는 인프라로 닿는 유일한 실용 길이었다.

## 이것이 다음 아키텍처를 강제하는 이유

점대점 직렬 링크 — 직접 RS-232든 모뎀-오버-폰이든 — 는 정확히 *두* 엔드포인트만 잇는다. 다노드 네트워크도 없고, 전선 위에 없는 목적지를 위한 라우팅 결정도 없다. 모든 쌍 사이에 전용 쌍 없이 서로 닿는 많은 기계로 스케일하려면 다른 베팅이 필요하다. 데이터를 패킷으로 쪼개고, 홉마다 라우팅하고, 링크를 공유한다. ARPANET이 증명하려 나선 것 — 다음 쪽.

{{< lab type="vm-terminal" >}}
