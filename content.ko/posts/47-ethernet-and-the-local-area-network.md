---
title: "Ethernet과 근거리 네트워크"
weight: 47
date: 2026-01-01
draft: false
phase: "6 — 네트워킹의 진화"
series_index: 46
aliases:
  - /posts/40-ethernet-and-the-local-area-network/
  - /posts/45-ethernet-and-the-local-area-network/
  - /posts/46-ethernet-and-the-local-area-network/
tags: []
summary: "공유 케이블, 중앙 중재자 없음 — CSMA/CD가 LAN 충돌 제약을 풀었고, 스위치가 나중에 그것을 없앴다"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET([Post 46]({{< relref "46-arpanet-and-packet-switching" >}}))은 먼 사이트 사이의 광역 패킷 교환을 풀었다. 한 건물 안에서는, 수십 미터 케이블에 IMP형 라우팅은 잘못된 도구다. Ethernet은 1973년 Xerox PARC에서 Robert Metcalfe와 David Boggs가 시작해([Wikipedia, Ethernet](https://en.wikipedia.org/wiki/Ethernet)) 지배적 로컬 답이 되었다.

## 공유 매체 문제

초기 Ethernet은 많은 스테이션을 하나의 공유 케이블 — 버스 토폴로지 — 위에 두었다. [Post 38]({{< relref "38-buses-101" >}})이 기계 안에서 맞닥뜨린 것과 *같은 종류의* 경합, 이제 LAN에서. 모든 스테이션이 송신할 수 있고, 모든 스테이션이 모든 전송을 듣는다. 송신기 둘이 동시에면 둘 다 손상된다.

## CSMA/CD: 듣고, 보내고, 감지하고, 물러선다

Ethernet의 답은 CSMA/CD다. **Carrier Sense:** 먼저 듣는다. 매체가 유휴로 보일 때만 송신. **Multiple Access:** 어떤 스테이션이든 시도할 수 있다 — 시스템 버스의 요청/허가([Post 38]({{< relref "38-buses-101" >}}))와 달리 중앙 허가가 없다. **Collision Detection:** 보내면서 계속 듣는다. 충돌이 보이면 멈추고, *무작위* 백오프를 기다린 뒤 재시도.

무작위화가 하중을 견디는 트릭이다. 고정·동일 백오프면 영원히 충돌한다. 다른 무작위 대기가 한쪽이 다른 쪽이 재시도하기 전에 성공하게 한다 — 중재자 없는 분산 경합.

## 프레임

Ethernet은 프레임으로 데이터를 나른다. 소스·목적지 MAC 주소([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}})의 IP 주소 아래의 하드웨어 주소), 상위 프로토콜용 타입 필드, 페이로드, CRC — PCIe 데이터 링크 검사([Post 40]({{< relref "40-pcie-deep-dive" >}}))와 *같은 종류의* 신뢰성, 다른 매체에서.

## 공유 버스에서 스위치드 스타로

현대 유선 Ethernet은 대체로 공유 케이블을 떠나, 각 스테이션에 자체 점대점 링크를 주는 스위치로 갔다 — PCIe가 옛 병렬 버스에 대해 한 것과 같은 공유→점대점 탈출([Post 39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})). 제대로 된 스위치에서는 고전 CSMA/CD 충돌이 대체로 사라진다. 각 링크에 끝 둘. 아이디어는 역사적으로 여전히 중요하고, 초기 Wi-Fi — 여전히 공유 라디오 매체 — 는 같은 충돌 제약을 풀어야 했다.

## 이것이 이어지는 곳

로컬 Ethernet과 광역 패킷 라우팅만으로는 틈이 남는다. 다른 아래 기술을 하나의 인터넷워크로 묶는 *보편* 주소·라우팅 체계. 그게 TCP/IP — 다음.

**출구:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — 공유 매체 LAN과 CSMA/CD 설계를 진술한 원논문.

{{< lab type="vm-terminal" >}}
