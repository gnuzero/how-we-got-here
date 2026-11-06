---
title: "메인프레임에서 미니컴퓨터, 마이크로프로세서로"
weight: 25
date: 2026-01-01
draft: false
phase: "3 — CPU와 그 아키텍처 짓기"
series_index: 24
aliases:
  - /posts/18-mainframes-to-minicomputers-to-microprocessors/
  - /posts/23-mainframes-to-minicomputers-to-microprocessors/
  - /posts/24-mainframes-to-minicomputers-to-microprocessors/
tags: []
summary: "컴퓨터를 누가 갖는가의 세 시대 — 기관, 부서, 그다음 모두를 위한 한 칩"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC(1단계)은 육군 병기단 자료표([App. I](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html))로 1,800제곱피트, [CHM 타임라인](https://www.computerhistory.org/timeline/computers/)에서는 「1,000제곱피트 이상」, 무게는 대략 30톤이었다. 휴대전화 CPU는 손끝에서 그것을 몇 자릿수 넘어선다. 그 붕괴는 한 번의 도약이 아니었다 — 세 시대가 각각 다르게 답했다. *컴퓨터를 누가 갖고, 몇 대가 존재하는가?*

## 메인프레임: 한 기계, 공유

1950·60년대: 대학·기업·정부용으로 방을 채우는 기계 — 배치 처리([Post 28]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}}))로 공유. IBM System/360(1964([Wikipedia, IBM System/360](https://en.wikipedia.org/wiki/IBM_System/360)))은 규모 이상으로 중요했다. 성능 범위에 걸친 *호환* 기계 가족, 같은 소프트웨어. ISA([Post 18]({{< relref "18-instruction-sets" >}}))를 아래 상자에서 의도적으로 분리해, 고객 코드가 하드웨어 업그레이드에서도 살아남게 했다. Gene Amdahl, Gerrit Blaauw, Fred Brooks가 그 아키텍처를 이끌었다.

## 미니컴퓨터: 부서가 살 수 있다

1970년대: DEC의 PDP-11(1970)과 친척들이 기계를 기관 전체가 아니라 부서가 사서, 중앙 사무소 없이 돌릴 수 있는 크기로 줄였다. 1990년 5월까지 DEC는 [PDP-11 설치 60만 대 이상](http://archive.computerhistory.org/resources/text/DEC/dec.digital_%28DEC%29_timeline_1957-1997.102630354/timelinetext.htm)을 집계했다. ISA의 직교 주소 지정과 깔끔한 부호화는 이후 설계 습관 — C([Post 34]({{< relref "34-high-level-languages-fortran-cobol-lisp-c" >}})) 포함 — 을 빚었고, C는 Unix([Post 29]({{< relref "29-time-sharing-and-the-unix-lineage" >}}))와 함께 대체로 PDP-11 하드웨어 위에서 자랐다.

## 마이크로프로세서: 한 다이 위의 CPU

단절: 이산 부품을 랙으로 배선하는 대신 CPU 전체를 한 집적회로에 만든다. Intel 4004(1971)는 계산기용으로 만들어졌고, 보통 첫 상용 단일 칩 CPU로 꼽힌다 — 4비트, 트랜지스터 약 2,300개. 클럭은 세 가지로 인용된다. Intel Museum 아카이브 108kHz([Calisphere](https://calisphere.org/item/ark:/13030/kt729020f8/)); 공동 설계자 시마 마사토시(Masatoshi Shima) 프로필의 IPSJ Computer Museum 750kHz([IPSJ](https://museum.ipsj.or.jp/en/pioneer/shima.html)); Intel 4004 데이터시트의 최소 클럭 주기 1.36µs(최대 2.0µs)에서 약 735kHz([datasheet, Internet Archive](https://archive.org/details/intel-4004)). 어떤 현대 척도로도 약하다. 다음 쪽의 8080·Z80·x86 계열의 직계 조상이다.

## 붕괴가 겹친 이유

각 단계는 8단계의 제조 밀도에 맞물린다. 트랜지스터는 늘고, 면적은 줄고, 비용은 낮아진다. 메인프레임은 백플레인 위의 수천 부품이었고, 마이크로프로세서는 그 구조를 실리콘으로 압축했다. 컴퓨팅은 기관 자원에서 부서 도구로, 개인(그다음 임베디드) 장치로 옮겼다 — 8단계가 현대 공정 노드의 의미로 이어지는 같은 스케일링 곡선이다.

{{< lab type="mini-cpu" >}}

**출구:** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — 호환 기계 가족과 ISA/구현 분리의 원진술.
