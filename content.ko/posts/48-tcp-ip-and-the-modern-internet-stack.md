---
title: "TCP/IP와 현대 인터넷 스택"
weight: 48
date: 2026-01-01
draft: false
phase: "6 — 네트워킹의 진화"
series_index: 47
aliases:
  - /posts/41-tcp-ip-and-the-modern-internet-stack/
  - /posts/46-tcp-ip-and-the-modern-internet-stack/
  - /posts/47-tcp-ip-and-the-modern-internet-stack/
tags: []
summary: "인터넷 프로토콜이 어떻게 쌓였고 왜인지 — 층, 플래그 데이, 신뢰할 수 없는 기판 위의 앱 — 목록이 아니다"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET([Post 46]({{< relref "46-arpanet-and-packet-switching" >}}))이 패킷 교환을 증명했다. Ethernet([Post 47]({{< relref "47-ethernet-and-the-local-area-network" >}}))이 로컬 전선을 표준화했다. 어느 쪽도 혼자서는 *다른* 네트워크 — 다른 매체, 다른 주소 — 를 어느 두 기계든 쓸 수 있는 하나의 인터넷워크로 꿰매는 방법을 말하지 않는다. Vint Cerf와 Bob Kahn의 TCP/IP 스위트가 그걸 풀었고, 여전히 현대 인터넷이 도는 기초다.

## 계층 모델

TCP/IP는 PCIe 스택([Post 40]({{< relref "40-pcie-deep-dive" >}}))이 나누는 방식으로 관심을 나눈다. 인터넷워킹 규모에서. **Link**는 로컬 홉을 다룬다 — Ethernet, Wi-Fi, 광섬유. **Internet (IP)**는 그 링크들을 *가로질러* 보편 주소와 라우팅을 준다. IP 패킷은 어떤 매체가 나를지 신경 쓰지 않는다. **Transport (TCP 또는 UDP)**는 IP 위에 신뢰·순서 전달(TCP) 또는 최소 오버헤드 최선 노력(UDP)을 준다. **Application**은 HTTP, DNS, SMTP와 친척이 앉는 곳이며, 맞는 트랜스포트를 고른다.

## 캡슐화

아래로 가는 데이터는 층마다 헤더를 얻는다 — 애플리케이션 바이트 아래 TCP/UDP, 그 세그먼트 아래 IP, 그 패킷 아래 링크 헤더(그리고 종종 트레일러). 먼 끝에서 과정이 뒤집힌다. 각 층이 헤더를 벗기고 방금 읽은 것(포트, 주소)으로 나머지를 위로 넘긴다.

## 신뢰할 수 없는 기판 위의 TCP

IP는 명시적으로 최선 노력이다 — 전달 약속 없음, 순서 약속 없음, 드롭 허용. TCP는 시퀀스 번호와 확인응답(ACK가 오지 않으면 재전송)으로 그 위에 신뢰·순서 바이트 스트림을 짓는다 — PCIe 데이터 링크 층([Post 40]({{< relref "40-pcie-deep-dive" >}}))과 *같은 종류의* 신뢰성, 전용 링크 하나가 아니라 전체 신뢰할 수 없는 인터넷워크에 걸쳐.

연결은 3방향 핸드셰이크로 시작한다. SYN(클라이언트가 시퀀스 번호를 제안), SYN-ACK(서버가 확인하고 자신의 번호를 제안), 최종 ACK. 그제야 애플리케이션 데이터가 흐른다 — 양쪽이 먼저 동기화된 상태를 공유하려는 작은 의도적 비용.

## 한 네트워크의 프로토콜에서 스택으로

ARPANET은 원래 자체 호스트 대 호스트 프로토콜(NCP)을 말했지, TCP/IP가 아니었다. Cerf와 Kahn의 베팅은 더 컸다. *많은* 패킷 네트워크를 인터넷할 수 있는 *프로토콜 스택* — 그래서 트랜스포트와 로컬 전선이 따로 진화할 수 있게. ARPANET 자체의 실질 전환은 1983년 1월 1일 「플래그 데이」([Wikipedia, Flag day](https://en.wikipedia.org/wiki/Flag_day_(computing)))였다. NCP가 꺼지고 TCP/IP가 필수가 된 — 계층 이야기를 아키텍처만이 아니라 운용으로 만든 드문 하드 컷.

애플리케이션 프로토콜은 그 기판이 *있어서* 쌓였다. DNS([Post 72]({{< relref "72-who-decides-the-wire" >}})의 출구: [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034) / [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035))가 이름을 규모에서 쓸 수 있게 했고, 메일과 웹(SMTP, HTTP와 친척)은 주소·재전송을 다시 발명하지 않고 신뢰 스트림의 클라이언트로 TCP를 탔다. 패턴이 요점이다. 각 층이 하나의 제약을 사서 위 층이 그것을 가정할 수 있게. 쌓음의 이야기이지, 모든 RFC의 목록이 아니다.

## SDN: 1982, 한국에서도 TCP/IP

같은 스택이 한국에서도 일찍 실험되었다. ETRI 웹진은 1982년 5월 15일 전길남 주도 아래 서울대학교의 PDP-11과 한국전자기술연구소(현 ETRI)의 VAX 11/780이 1200bps 전용선으로 연결되어 SDN(System Development Network)이 개통했다고 적는다. 통신 프로토콜은 TCP/IP였고, 1983년 1월 KAIST VAX 11/780이 합류했다고 한다. ([ETRI WEBZINE — 대한민국 인터넷 40주년](https://www.etri.re.kr/webzine/20220617/sub01.html)) 고등과학원 HORIZON 「1982년 전길남, 네트워크 세계에 한국을 연결하다」는 같은 1982년 5월 개통을 말하되, 기계 기종을 달리 적는다. 구미 한국전자기술연구소 컴퓨터연구실의 DEC PDP11/70 화면에 「SNU」가 나타났고, 그 메시지는 서울대 전자계산기공학과의 DEC PDP11/44에서 보냈다고 한다. ([KIAS HORIZON](https://horizon.kias.re.kr/24063/)) 기계 이름만 나란히 두면, ETRI는 SNU PDP-11 / KIET(현 ETRI) VAX 11/780이라 하고, KIAS HORIZON은 SNU PDP11/44 / KIET PDP11/70이라 한다. 국사편찬위원회 우리역사넷도 1982년 서울대–구미 한국전자기술연구소 전용선 SDN을 국내 컴퓨터 통신의 처음이라 두고, TCP/IP 채용 때문에 국내 인터넷의 시초로 평가한다. ([우리역사넷 — 컴퓨터의 보급과 인터넷 시대의 도래](https://contents.history.go.kr/front/km/view.do?levelId=km_004_0060_0020_0030)) 전길남 본인이 쓴 「초기 한국 인터넷 약사」도 같은 날짜·1200bps·TCP/IP 골격을 적는다(기계 기종은 ETRI와 같이 SNU PDP-11 / KIET VAX로). ([한국 인터넷 역사 프로젝트 — e-Bridge 약사](https://sites.google.com/site/koreainternethistory/publication/e-bridge)) 「세계에서 두 번째」라는 순위 표현은 ETRI 서술에 나오지만, 이 쪽은 채택하지 않는다 — 국내 TCP/IP SDN의 사실만 남긴다.

## 이 설계가 이긴 이유

하중을 견디는 가정은 아래 네트워크가 이종이고 신뢰할 수 없다는 것, 그래서 보장은 모든 물리 링크가 아니라 더 높은 층에 둔다는 것이었다. 그건 수십 년에 걸쳐 다른 기술로 꿰매진, 하나의 물리 표준에 합의하지 않은 조직들의 전 지구 인터넷워크와 맞았다 — TCP/IP가 여전히 현대 인터넷 사실상 전부, 다음의 데이터센터 네트워크까지 아래에 앉는 이유다.

**출구:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) and [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — 이 스택의 주소/라우팅과 신뢰 트랜스포트 반쪽의 원규격 (Cerf/Kahn 계보; 이 1981년 9월 텍스트의 RFC 편집자는 Postel).

{{< lab type="vm-terminal" >}}
