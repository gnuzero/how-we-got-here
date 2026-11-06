---
title: "배치 처리와 운영체제의 탄생"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 27
aliases:
  - /posts/21-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/26-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/27-batch-processing-and-the-birth-of-the-operating-system/
tags: []
summary: "펀치카드 잡 사이 비싼 CPU가 놀면 — 첫 상주 모니터, 사용자 프로그램이 아닌 시스템 소프트웨어가 강제된다"
image_prompt: "Historical illustration of an operator loading punch cards into a batch-processing mainframe, clean vintage computing illustration style"
video_prompt: "20-second animation: punch cards feeding sequentially into a card reader, clean vintage-style motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: batch job queue flow + early OS resident monitor block diagram"
---

[Post 25]({{< relref "25-mainframes-to-minicomputers-to-microprocessors" >}})의 메인프레임은 우리가 알아볼 의미의 운영체제를 돌리지 않았다. 누군가 프로그램을 올리고, 돌리고, 기다리고, 다음을 올렸다. 전용 접근을 가진 한 사용자에게는 된다. 여러 잡이 비싼 기계를 나눠야 하는 순간 — 메인프레임 비용이면 거의 즉시 — 무너진다.

## 유휴 시간이 제약이었다

초기 운영은 사람이 펀치카드 덱을 올리고, 돌리고, 출력을 거두고, 다음을 올리는 일이었다 — CPU는 준비·정리마다 놀았다. 배치 처리는 *순서 잡기*를 자동화했다. 잡 더미를 제출하면 상주 프로그램(초기 「모니터」)이 사람 없이 하나씩 올리고 돌렸다.

그 상주 모니터가 운영체제의 직계 조상이다. 좁은 일 — 로드, 시작, 종료 감지, 다음 로드 — 이지만, 어떤 사용자 프로그램과도 구별되는 *시스템* 소프트웨어의 첫 조각이며, 실행 중인 잡 대신 기계를 관리하려고 계속 돈다.

## 스케줄링이 정책이 된다

배치 시스템이 성숙하면서 잡 제어 언어가 제출된 잡이 자원·실패 처리·출력 경로를 이름 붙이게 했고, 큐가 엄격한 제출 순서 대신 우선순위를 매기게 했다. 우선순위, 자원 할당, 스케줄링 정책이 여기서 진짜 OS 관심사로 나타난다 — 비공식 오퍼레이터 판단이 아니다.

## 배치가 줄 수 없었던 것

상호작용 없음. 잡은 처음부터 끝까지 돌고, 중간에 끼어들거나 중간 상태를 보거나 방향을 바꿀 기회가 없다. 버그는 종종 전체 실행이 끝난 뒤에야 — 때로 몇 시간 뒤, 비싼 할당을 태운 뒤에야 — 드러난다. 탐색적 작업에는 그 왕복이 단단한 생산성 천장이다.

**지금 해 보기.** 아래 VM을 부팅하고 화면을 클릭한 뒤 `whoami`, `uname`, `ls`를 실행해 보라. 그 프롬프트는 배치 덱의 반대다 — *지금* 끼어들고, 상태를 보고, 방향을 바꾼다. 타임셰어링(다음 쪽)이 이 환상을 나눌 수 있게 만든 것이다.

{{< lab type="vm-terminal" height="600" >}}

풀려면 배치 아키텍처가 줄 수 없는 것이 필요했다. 여러 사용자가 *동시에* 활성이고, 각자 전용 세션의 환상을 갖는 것. 그게 타임셰어링이다 — 잡 순서만 자동화하는 것이 아니라, 동시에 활성인 프로그램을 전환이 보이지 않을 때까지 끼워 넣는 것. 다음 쪽이 거기서 이어진다.
