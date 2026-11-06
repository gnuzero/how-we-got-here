---
title: "타임쉐어링과 Unix 계보"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 28
aliases:
  - /posts/22-time-sharing-and-the-unix-lineage/
  - /posts/27-time-sharing-and-the-unix-lineage/
  - /posts/28-time-sharing-and-the-unix-lineage/
tags: []
summary: "배치는 CPU를 바쁘게 했고, 타임쉐어링은 많은 사용자에게 소유한 듯한 환상을 주었다 — Multics의 야심, 그다음 Unix의 단순함"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

배치 처리([Post 28]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}}))는 처리량을 풀었다 — 비싼 CPU를 잡 사이에 바쁘게. 상호작용에는 아무것도 하지 않았다. 1960년대 초·중반에 떠오른 타임쉐어링은 다른 제약을 풀었다. 여러 사용자가 *동시에* 상호작용하고, 각자 기계를 혼자 쓰는 환상을 갖게 한다.

## 핵심 트릭: 빠른 전환

CPU는 사람 반응 시간에 비해 빠르다. 많은 사용자 프로세스 사이를 초당 여러 번 바꾸면 — 각자 작은 조각 — 누구도 틈을 느끼지 않는다. [Post 16]({{< relref "16-sequential-logic" >}})의 클럭드 로직의 소프트웨어 스케줄링 비유: 이산·빠른 전환이 *연속처럼* 보이고, 단일 코어에서는 어느 순간에도 프로세스 하나만 돈다.

Multics(MULTiplexed Information and Computing Service)는 MIT / Bell Labs / GE 공동 프로젝트로 1964년부터 계획되고 1965년에 공개 기술되었다([Wikipedia, Multics](https://en.wikipedia.org/wiki/Multics)). 야심이 컸다 — 계층 파일 시스템, 동적 링크, 수십 년 뒤에야 다른 곳에서 표준이 된 세밀 접근 제어. 당시 하드웨어에는, 대체로 말해, 과설계였고 상업적으로도 고생했다.

## Multics에서 Unix로

Bell Labs는 1969년에 Multics에서 손을 뗐다([Wikipedia, Unix](https://en.wikipedia.org/wiki/Unix)). 거기에 일했던 Ken Thompson과 Dennis Ritchie는 훨씬 작은 규모로 — 의도적으로 더 단순하게, 훨씬 약한 하드웨어(처음에는 여분의 PDP-7)에서 — 계속 반복했다. 결과가 Unix다. 「모든 것은 파일」, 파이프로 이어지는 작은 단일 목적 프로그램, C로 다시 쓰인 뒤의 이식 가능한 설계([Post 34]({{< relref "34-high-level-languages-fortran-cobol-lisp-c" >}})가 그 언어를, 대체로 같은 사람들이, 다룬다)를 중심으로 한 타임쉐어링 OS.

이식성이 중요했다. Unix는 동시대의 많은 시스템처럼 한 제조사 상자에 묶이지 않아서, 적당한 이식 노력으로 벤더를 넘나들 수 있었다 — 단일 제품 라인에 묶인 시스템에 대한 구조적 우위.

**지금 해 보기.** 아래 VM을 부팅하고 검은 화면을 클릭해 키보드 포커스를 잡은 뒤 `uname`, `whoami`, `ls`를 실행해 보라 — 도식이 아니라 살아있는 Unix 계보 셸이다.

{{< lab type="vm-terminal" height="600" >}}

## 갈림: BSD와 System V

Unix 라이선스 역사는 얽혀 있다(AT&T의 반독점 관련 제약이 한동안 자유로운 상업화를 막았고, 역설적으로 넓은 학술 배포를 부추겼다). 결국 두 큰 계보로 갈렸다. BSD(Berkeley Software Distribution) — 6단계의 TCP/IP 스택 상당을 포함한 큰 새 작업 — 와 AT&T의 상업 System V 계열. 둘은 수년간 서로 수분했다. 현대 시스템은 여전히 한쪽 또는 다른 쪽의 설계 결정을 추적한다 — macOS 커널은 깊은 BSD 계보; 많은 엔터프라이즈 Unix는 System V에서 더 직접 내려온다.

## 이것이 이어지는 곳

Unix의 아이디어 — 그리고 결국 Unix에서 파생되거나 영감을 받은 코드 — 는 Linux와 macOS의 직계 조상이며, 둘이 합쳐 오늘날 서버·워크스테이션의 압도적 다수와, 점점 모바일·임베디드까지 돌린다. 「AT&T의 독점 Unix」에서 「인터넷 대부분을 도는 자유·공개 개발 Linux」로 가려면 별개의 이념·법적 운동 — GNU 프로젝트 — 이 필요했고, 다음 쪽이 다룬다. Unix의 기술 계보와는 다른 이야기이지만, 둘이 결국 하나의 지배적 스택으로 합쳐진다.

**출구:** Dennis M. Ritchie and Ken Thompson, "The UNIX Time-Sharing System" (*Communications of the ACM*, 1974) — Unix 설계의 고전적 원진술.
