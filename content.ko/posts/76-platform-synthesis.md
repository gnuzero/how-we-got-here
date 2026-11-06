---
title: "플랫폼 합성"
weight: 76
date: 2026-09-06
draft: false
phase: "한 기계에서 플랫폼으로"
series_index: 75
aliases:
  - /posts/69-platform-synthesis/
  - /posts/75-platform-synthesis/
tags: []
summary: "한 고수준 정거장 — 대형 플랫폼은 분산 시스템·네트워킹·AI 인프라·프라이버시 공학·소프트웨어 공학의 합성이다"
image_prompt: "Single clean stack diagram composing distributed systems, networking, AI accelerators, privacy/identity controls, and software delivery into one platform silhouette, modern systems-architecture style"
video_prompt: "20-second animation: five layer blocks (distribute, network, accelerate, protect, ship) snapping into one platform, clean technical motion graphics"
schematics: "Diagram: one platform = distributed systems + networking + AI infra + privacy engineering + software engineering"
---

현대 대형 플랫폼은 단일 발명이 아니다. 각 제약을 볼 수 있게 이 책이 이미 갈라 둔 장들의 **합성**이다. 한 고수준 정거장 — 합성만, 교과서 덤프 없음.

## 분산 시스템

7단계(와 이웃)의 포스트가 신뢰성·규모 척추다. 데이터를 분할하고, 복제하고, 실패 도메인에 걸쳐 작업을 오케스트레이션하고, 함대에 걸쳐 컨테이너를 스케줄한다. 플랫폼의 「항상 켜짐」 느낌은 제품 얼굴을 한 분산 시스템 공학이다.

## 네트워킹

Posts [45]({{< relref "45-serial-links-and-the-first-machine-to-machine-connections" >}})–[49]({{< relref "49-datacenter-networking-and-rdma" >}})와 [69]({{< relref "69-interconnect-at-datacenter-scale" >}})가 바이트의 이동이다. 직렬 링크 → 패킷 → TCP/IP → 데이터센터 패브릭. 플랫폼은 주소 지정·혼잡 제어·부하 분산·저장·계산·클라이언트를 한 논리 기계실에 두는 인터커넥트 없이는 닿을 수 없다 — 그 방이 대륙일 때도.

## AI 인프라

9–10단계가 「모델」이 마법이 아닌 이유다. GPU, 메모리 계층, 인터커넥트, 양자화, 알고리즘 목적지로서의 어텐션. 제품 규모의 학습·추론은 그 인프라 위에 앉은 하드웨어 인식 소프트웨어 문제다 — 같은 행렬 곱 물리, 이제 API 뒤.

## 프라이버시 공학

[Post 74]({{< relref "74-privacy-consent-identity-cyber" >}})가 적대·동의 형태 층이다. 격리, 공용 네트워크 위의 암호, 신원 프로토콜, 범위 있는 인가, 오용을 가정하는 운영. 이 층을 건너뛴 플랫폼은 「일찍 끝낸」 것이 아니다 — 미완성 시스템 작업이다.

## 소프트웨어 공학

언어, 컴파일러, OS 격리, 버스, GNU/Linux 공유지(Posts [28]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}})–[35]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}}), [75]({{< relref "75-visions-that-shipped" >}}))가 인간이 플랫폼을 안전하게 바꾸는 방법이다. 버전된 API, 자동 테스트, 단계적 롤아웃, 관측 가능 서비스. 제품이 움직이는 것은 소프트웨어 공학 루프가 움직이기 때문이다.

## 한 문장 압축

**대형 플랫폼은 분산 시스템 + 네트워킹 + AI 인프라 + 프라이버시 공학 + 소프트웨어 공학**이며, 프로토콜·거버넌스 공유지(Posts [48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}), [72]({{< relref "72-who-decides-the-wire" >}}))로 붙이고 인간 어텐션([Post 71]({{< relref "71-attention-is-all-you-need" >}}))을 가리킨다. [Post 75]({{< relref "75-visions-that-shipped" >}})의 비전은 누군가가 그 합성의 조각을 사업이나 공유지로 출하할 때 일어나는 일이다. 이제 지도가 있다. 랩과 참고가 깊이를 원할 때 각 층으로 돌아가는 문이다.
