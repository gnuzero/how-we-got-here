---
title: "ARPANET과 패킷 교환"
weight: 46
date: 2026-01-01
draft: false
phase: "6 — 네트워킹의 진화"
series_index: 45
aliases:
  - /posts/39-arpanet-and-packet-switching/
  - /posts/44-arpanet-and-packet-switching/
  - /posts/45-arpanet-and-packet-switching/
tags: []
summary: "돌발적인 컴퓨터 트래픽이 회선 교환을 깨뜨렸다 — ARPANET이 패킷과 공유 링크가 돌아감을 증명했다"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

[Post 45]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}})의 직렬 링크는 끝 둘만 잇는다. ARPANET은 1969년에 살아([Wikipedia, ARPANET](https://en.wikipedia.org/wiki/ARPANET)), ARPA(나중 DARPA) 아래에서 다른 것을 증명하려 나섰다. 모든 쌍 사이에 전용 회선 없이 많은 기계가 서로에게 닿게 — 데이터를 패킷으로 쪼개 홉마다 독립 라우팅해.

## 회선 교환 대 패킷 교환

[Post 45]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}})가 탄 전화망은 회선 교환을 썼다. 통화 *전체* 동안 끝에서 끝 경로를 예약한다. 누가 말하고 있지 않아도. 연속 음성에는 괜찮고, 돌발적인 컴퓨터 트래픽에는 맞지 않는다 — 활성 전송, 그다음 예약 회선이 놀아 있는 유휴 구간.

패킷 교환은 반대 베팅이다. 데이터를 패킷으로 쪼개고, 각자가 목적지 주소를 나르며, 독립 라우팅하고, 물리 링크를 많은 대화가 공유한다. 세션 전체에 경로를 예약하지 않는다 — 다른 전송의 패킷이 끼어들고, 다른 경로를 탈 수 있고, 목적지에서 재조립된다. Paul Baran의 RAND 분산·생존 통신 작업과 Leonard Kleinrock의 패킷 네트워크 대기열 분석이 지적 바탕을 주었고, ARPA의 Lawrence Roberts가 그 베팅을 자금 지원 연구망으로 바꿨다.

## IMP: 원래의 라우터

ARPANET의 홉은 Interface Message Processor(IMP)였다 — 각 사이트의 전용 미니컴퓨터(3단계 미니컴퓨터 시대, 전선에 적용)가 로컬 호스트에서 패킷을 받아 다음 홉을 고르고 전달했다. 개념적으로 현대 라우터가 여전히 하는 일이다. 첫 네 노드 — UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah — 는 나중 기준으로 작았다. 패킷 교환이 종이만이 아니라 실무에서 돌아감을 보여 주기에 충분했다.

## 이것이 진짜 베팅이었던 이유

회선 교환에 젖은 통신 엔지니어들은 예약 경로 없는 네트워크가 데이터를 신뢰성 있게 전달할 수 있을지조차 자주 의심했다. ARPANET의 성공은 그에 대한 실질 회의가 있던 아키텍처의 제도적 검증이었다 — 모두가 이미 합의한 「다음 단계」가 아니었다.

## 이것이 깔아 둔 것

ARPANET 자체의 호스트 대 호스트 프로토콜은 아직 TCP/IP가 아니었다([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}})). 아키텍처 승리 — 전용 회선 위의 패킷 — 이 이 단계의 이후 모든 네트워크, 현대 인터넷, [Post 49]({{< relref "49-datacenter-networking-and-rdma" >}})의 데이터센터 패브릭, 10단계의 학습 클러스터 인터커넥트가 짓는 기초다. 다음, 로컬: TCP/IP가 이종 망을 하나의 인터넷워크로 묶기 전에, 건물이 Ethernet([Post 47]({{< relref "47-ethernet-and-the-local-area-network" >}}))으로 어떻게 표준화했는지.

**출구:** Paul Baran, *On Distributed Communications* (RAND Corporation, 1964) — Kleinrock의 대기열 작업과 Roberts의 ARPA 프로그램과 함께, ARPANET이 회선 교환에 맞서 베팅할 수 있었던 이유를 뒷받침하는 고전적 분산/패킷 주장.

{{< lab type="vm-terminal" >}}
