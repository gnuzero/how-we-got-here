---
title: "ISA 버스에서 PCI, PCIe로"
weight: 39
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 38
aliases:
  - /posts/32-from-isa-bus-to-pci-to-pcie/
  - /posts/37-from-isa-bus-to-pci-to-pcie/
  - /posts/38-from-isa-bus-to-pci-to-pcie/
tags: []
summary: "스큐가 넓은 병렬 버스를 죽였고, 점대점 직렬이 탈출 경로였다"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

[Post 38]({{< relref "38-buses-101" >}})의 천장: 모든 장치가 같은 전선을 두고 겨룬다. ISA, 그다음 PCI, 그다음 PCIe는 그 천장 주위의 공학이다 — 버스 목록이 아니라 제약의 서열. 끝의 반전: *직렬*(전선이 더 적음)이 병렬(전선이 더 많음)에 남는 것보다 이겼다.

## 병렬 직관, 그리고 깨지는 곳

ISA(Industry Standard Architecture)는 넓은 병렬 버스였다. 데이터 선이 많고, 각 1비트, 함께 클럭된다. 전선이 많을수록 대역폭이 커야 한다. 겸손한 클럭에서는 그렇다.

모든 전선은 길이와 용량이 조금 달라서 비트가 같은 순간에 도착하지 않는다 — **스큐(skew)**. 느린 클럭에서는 분산이 주기의 작은 부분이라 문제되지 않는다. 클럭을 올리고 주기를 줄이면, 같은 고정 스큐가 타이밍 마진을 먹어 수신기가 한 엣지에서 모든 비트를 샘플할 수 없게 된다. 놓친 트릭이 아니라 물리 천장이다. 넓은 병렬 버스를 무한히 올릴 수 없다.

## PCI는 여유를 샀지, 탈출을 사지 않았다

PCI(Peripheral Component Interconnect, 1992, [PCI-SIG](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)에 따름)는 ISA보다 빨랐다 — 더 나은 중재, 플러그 앤 플레이 구성, 더 실용적 대역폭. 여전히 공유 병렬 버스였고, 클럭이 오르면 여전히 스큐에 묶였다. 여유이지 새 아키텍처가 아니다.

## PCIe는 공유 전선을 떠났다

PCI Express(규격 2003, 레인당 2.5 GT/s, [PCI-SIG](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)에 따름)는 토폴로지를 바꿨다. 하나의 공유 병렬 버스 대신, 각 장치가 스위치로 가는 전용 점대점 직렬 링크(레인, 또는 레인 묶음)를 갖는다. 방향당·레인당 차동 쌍 하나: 십수 전선을 맞춰 잠글 일이 없어, 레인당 클럭이 어떤 병렬 버스보다 훨씬 올라갈 수 있다. 레인이 결합한다(x1, x4, x8, x16) — 더 필요한 장치용. GPU는 NIC의 x1보다 훨씬 많이 옮기므로 x16을 쓴다. 무관한 장치는 더 이상 전선을 공유하지 않으므로, 서로의 중재를 기다리지 않는다.

물리 전선은 더 적다. 달성 가능한 대역폭은 더 높다. 공유 버스 천장이 사라졌다. [Post 40]({{< relref "40-pcie-deep-dive" >}})는 그 직렬 링크가 전송을 어떻게 구조화해 기계의 나머지가 여전히 읽기나 쓰기를 *뜻하게* 하는가다.
