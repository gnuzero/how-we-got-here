---
title: "메모리 버스"
weight: 41
date: 2026-01-01
draft: false
phase: "5 — 버스와 시스템 아키텍처"
series_index: 40
aliases:
  - /posts/34-memory-buses/
  - /posts/39-memory-buses/
  - /posts/40-memory-buses/
tags: []
summary: "DDR는 대역폭을 샀고, 지연은 거의 움직이지 않았다 — 뱅크와 채널이 대기를 가린다"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe(Posts [39]({{< relref "39-from-isa-bus-to-pci-to-pcie" >}})–[40]({{< relref "40-pcie-deep-dive" >}}))는 확장 장치로 가는 경로다. 메모리 버스는 CPU를 실제로 먹이는 경로다 — [Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})의 DRAM — 그리고 그 진화는 대역폭·지연·전력 사이의 계속되는 협상이다. 세대 이름이 이야기가 아니다. 그 셋의 갈림이 이야기다.

## 양쪽 엣지, 더 빠른 클럭이 아니다

DDR — Double Data Rate — 는 상승 *과* 하강 엣지에서 전송한다. 같은 클럭의 단일 데이터 레이트 설계보다 대략 두 배 처리량, 주파수를 두 배로(그리고 그에 따르는 신호 무결성 문제) 올리지 않고. 클럭 벽을 먼저 사지 않고 대역폭.

## 대역폭은 올랐고, 첫 비트 지연은 그렇지 않았다

각 DDR 세대는 피크 대역폭을 올렸다. 대체로 더 빠른 I/O로. Prefetch와, DDR5에서는 두 개의 독립 32비트 서브채널로 나누기가 모듈 위 병렬성을 더 산다. 헤드라인 숫자가 가리는 것: 날 접근 *지연* — 요청에서 첫 비트까지 — 은 대역폭보다 훨씬 느리게 움직였다. DRAM은 스트림이 시작되면 훨씬 나아졌고, 시작 전 대기에서는 조금밖에 나아지지 않았다. 그게 [Post 42]({{< relref "42-the-memory-wall" >}})의 준비다. 다른 척도, 다른 물리(전하 감지, 커패시터 셀).

## 느린 접근을 가리는 병렬성

*채널*은 독립 컨트롤러 경로다 — 동시 요청이 서로 뒤에 줄 서지 않아도 된다. 채널 안에서 *랭크*와 *뱅크*는 한 뱅크가 끝나는(또는 리프레시하는 — [Post 17]({{< relref "17-the-memory-hierarchy-begins" >}})) 동안 다른 뱅크가 새 요청을 받게 한다. 독립 접근을 충분히 겹치면, 단일 접근이 빨라지지 않아도 *집계* 처리량은 높게 유지된다. 조직이 존재하는 이유다. DIMM 기능 목록이 아니라, 다음 쪽이 벽으로 이름 붙이는 지연을 가리는 방법.

DIMM은 물리 패키지다 — 표준 엣지 커넥터를 가진 보드 위의 칩 — 그래서 용량은 「슬롯 몇 개, 크기 얼마」이지 버스의 재설계가 아니다.

다음 두 쪽은 이 협상이 모자랄 때 일어나는 일이다. 메모리 벽, 그리고 계산 쪽의 사촌, 클럭 속도 벽.
