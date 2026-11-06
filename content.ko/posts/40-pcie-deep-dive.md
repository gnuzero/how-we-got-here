---
title: "PCIe 깊게"
weight: 40
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 39
aliases:
  - /posts/33-pcie-deep-dive/
  - /posts/38-pcie-deep-dive/
  - /posts/39-pcie-deep-dive/
tags: []
summary: "의도는 TLP를 타고, 신뢰성과 신호는 아래에 있다 — 공유 버스를 대체한 스택"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

[Post 39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})는 PCIe가 *왜* 직렬·점대점으로 갔는지를 다루었다. 이 쪽은 그 링크 위에서 전송이 *어떻게* 구조화되는가다 — 패브릭을 말해야 하는 하드웨어를 짓는다면 중요한 층이며, 이 시리즈가 다시 돌아오는 Nitefury 기반 GPU 메모리 작업도 포함한다.

## 의도, 신뢰성, 전자

층 셋, 일 셋. **Transaction Layer**에서 읽기·쓰기·완료가 태어나고 죽는다 — 소프트웨어가 생각하는 층. **Data Link Layer**는 전달을 신뢰 가능하게 한다. 시퀀스 번호, CRC, 패킷이 손상되면 재전송. **Physical Layer**는 전선이다. 차동 쌍, 스트림이 복구 가능하게 남는 부호화, 구리 위의 직렬화. 그렇게 나눠 맞춤 설계가 전자를 다시 발명하지 않고 *의도*를 표현할 수 있게 한다.

## 패킷이 계약이다

단위는 Transaction Layer Packet이다. TLP는 유형(메모리 읽기/쓰기, I/O, 구성), 주소, 길이, 그리고 — 쓰기에서는 — 페이로드를 이름 붙인다. 링크 층이 시퀀스와 CRC로 감싸고, 먼 쪽이 검사하고 필요하면 재시도한다. 위에서는 신뢰할 수 있는 읽기나 쓰기처럼 보인다. 신뢰성은 마술이 아니다. 그 감쌈이다.

## 레인은 폭을, 세대는 속도를

레인은 방향마다 차동 쌍 하나 — 가장 작은 링크. 레인을 결합(x1…x16)해 대역폭을 곱한다. 각 세대는 대략 레인당 속도를 두 배로 올린다(더 높은 신호, 더 조인 부호화). 같은 x16 슬롯, Gen 5 대 Gen 3: 방향당 약 4× 대역폭(~63 GB/s vs ~15.8 GB/s, [Wikipedia, PCI Express](https://en.wikipedia.org/wiki/PCI_Express#Comparison_table)), 전선은 더하지 않는다. [Post 39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})의 직렬 베팅이 그 오름을 가능하게 했다.

## 맞춤 패브릭이 신경 쓰는 이유

FPGA 메모리 패브릭 카드는 이 스택 안에 살아야 한다. 루트 컴플렉스와 다른 엔드포인트가 받아들일 TLP를 만들고, 확립된 IP에 링크 신뢰성과 물리 층을 맡긴다. GPUDirect형 피어투피어([Post 44]({{< relref "44-interconnects-at-scale" >}}))는 같은 생각을 더 밀어 간 것이다 — 두 엔드포인트 사이로 주소된 TLP, 데이터 경로에서 CPU 제외.

**출구:** The PCI Express Base Specification (PCI-SIG) — 레인·TLP·이 쪽이 이름 붙인 계층 스택의 살아있는 원규격. 버전된다(Base Spec이며, 얼어 있는 논문이 아니다).
