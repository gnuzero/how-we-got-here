---
title: "연표"
weight: 101
date: 2026-01-01
draft: false
phase: "참고"
series_index: 100
aliases:
  - /posts/98-timeline/
tags: ["timeline", "reference", "history"]
summary: "기계 계산에서 현대 어텐션 메커니즘까지의 압축 연대기"
---

# 연표

이 시리즈가 다루는 주요 이정표의 압축 연대기. 날짜는 각 장이 1차·기관 소스로 세운 것에 맞추고, 개관은 계산사 표준 연표와 대조할 수 있다. ([Wikipedia — Timeline of computing](https://en.wikipedia.org/wiki/Timeline_of_computing))

## 인쇄·문자 (한국어판 추가)

- **1377** — 『직지』 하권: 청주 흥덕사 금속활자 인쇄; 현존 가장 오래된 금속활자 인쇄 증거 ([한국민족문화대백과 — 불조직지심체요절](https://encykorea.aks.ac.kr/Article/E0025035); [UNESCO Memory of the World](https://www.unesco.org/en/memory-world/baegun-hwasang-chorok-buljo-jikji-simche-yojeol-volii-second-volume-anthology-great-buddhist-priests); [Post 2]({{< relref "02-woodblock-to-movable-type" >}}))
- **1443 / 1446** — 훈민정음: 세종 1443년(세종 25) 창제, 1446년(세종 28) 반포·해례본 ([UNESCO Memory of the World — Hunminjeongum Manuscript](https://www.unesco.org/en/memory-world/hunminjeongum-manuscript); [한국민족문화대백과 — 훈민정음](https://encykorea.aks.ac.kr/Article/E0065805); [Post 2]({{< relref "02-woodblock-to-movable-type" >}}))

## 기계·전기기계 기초

- **1801–1805** — 자카드 직기: 직조 무늬의 천공 카드 제어
- **1822** — 배비지가 차분기관을 제안
- **1830년대** — 배비지가 해석기관을 설계(프로그램 가능, store + mill)
- **1843** — Ada Lovelace의 해석기관 노트(베르누이 수 프로그램 포함)
- **1930s–1940s** — 릴레이 컴퓨터(Zuse Z1–Z3, Bell Labs 기계, Harvard Mark I)

## 진공관

- **1906** — Lee de Forest의 Audion(삼극관)
- **1943–1945** — Colossus(영국), ENIAC(미국) — 첫 대규모 전자 디지털 컴퓨터
- **1945** — 폰 노이만 아키텍처 보고

## 트랜지스터와 집적회로

- **1947** — 점접촉 트랜지스터(Bell Labs)
- **1948–1950s** — 접합 트랜지스터, 상업 채택
- **1958–1959** — 집적회로(Kilby / Noyce)
- **1960s** — 평면 공정, 바이폴라 그다음 MOS 논리 계열

## 프로세서와 아키텍처

- **1971** — Intel 4004(첫 상업 마이크로프로세서)
- **1970s–1980s** — 마이크로프로세서의 부상, RISC 대 CISC 논쟁
- **1980s–1990s** — 파이프라인, 캐시, 슈퍼스칼라, 비순차 실행이 주류가 됨
- **2000s** — 주파수 벽 이후 멀티코어가 주 스케일링 경로가 됨

## 소프트웨어 층

- **1950s–1960s** — 배치 시스템 → 시분할 → 초기 운영체제
- **1969–1970s** — Unix 계보가 시작됨
- **1983–1991** — GNU 프로젝트와 Linux 커널
- **1990s–2000s** — 가상 메모리, 컨테이너, 현대 격리 기법이 성숙

## 네트워킹

- **1969** — ARPANET 첫 노드
- **1970s–1980s** — 패킷 교환, TCP/IP 표준화
- **1982-05-15** — SDN(System Development Network): 서울대–구미 한국전자기술연구소(현 ETRI) 전용선, TCP/IP; 전길남 ([ETRI WEBZINE](https://www.etri.re.kr/webzine/20220617/sub01.html); [우리역사넷](https://contents.history.go.kr/front/km/view.do?levelId=km_004_0060_0020_0030); [Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}))
- **1980s–1990s** — Ethernet이 지배적 LAN 기술이 됨
- **2000s–** — 데이터센터 네트워킹, RDMA, 고대역폭 패브릭

## AI 하드웨어와 알고리즘

- **~2001** — 프로그래머블 셰이더와 부동소수점이 범용 GPU 계산을 실용 가능하게 ([Wikipedia, GPGPU](https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units))
- **2004 / 2007** — CUDA 창안(2004)과 공식 출시(2007) ([Wikipedia, CUDA](https://en.wikipedia.org/wiki/CUDA))
- **2017** — NVIDIA Volta가 Tensor Cores를 도입
- **2017** — “Attention Is All You Need”(Vaswani et al.) — Transformer 아키텍처
- **2018–** — 특화 행렬 곱 하드웨어 위 대형 언어 모델의 급속 스케일링
- **2020s** — 칩렛, 고급 패키징, 희소성, 양자화, 멀티 GPU·멀티 노드 스케일링이 중심이 됨

## 이어지는 실

이 연표의 모든 주요 전환은 묶는 물리 또는 경제 제약(속도, 전력, 신뢰성, 수율, 메모리 대역폭, 연산당 에너지)에 의해 구동되었다. 응답은 거의 「기존 접근을 더 세게 민다」가 아니었다. 구조나 추상 수준의 변화였다. 그 패턴이 이 시리즈의 진짜 주제다.
