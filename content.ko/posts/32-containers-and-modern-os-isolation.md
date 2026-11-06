---
title: "컨테이너와 현대 OS 격리"
weight: 32
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 31
aliases:
  - /posts/25-containers-and-modern-os-isolation/
  - /posts/30-containers-and-modern-os-isolation/
  - /posts/31-containers-and-modern-os-isolation/
tags: []
summary: "전체 VM은 강한 격리를 비싼 값에 산다 — 네임스페이스와 cgroup은 커널 하나를 공유하고 거의 나머지를 격리한다"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

가상 메모리([Post 31]({{< relref "31-virtual-memory-and-multitasking" >}}))는 프로세스를 서로의 메모리에서 격리한다. 같은 파일시스템·프로세스 ID 공간·네트워크 설정을 공유하는 것까지는 격리하지 않는다 — 전통적 Unix 프로세스는 날 RAM 너머로도 서로를 보고 때로 간섭할 수 있다. 컨테이너는 그 표면의 더 많은 부분으로 격리를 넓히되, 완전한 하드웨어 가상화까지 가지 않는다.

## 완전 가상화: 강하고, 무겁다

전통적 VM은 하이퍼바이저 위에서 완전한 게스트 OS — 자체 커널, 자체 드라이버 — 를 돌린다. 하이퍼바이저는 가상화(또는 하드웨어 지원으로 거의 네이티브)된 CPU·메모리·저장·네트워크를 보여 준다. 격리가 매우 강하다. 심각한 하이퍼바이저 버그가 아니면 게스트는 호스트의 프로세스나 다른 게스트를 볼 수 없다. 비용은 실제다 — VM마다 자체 커널을 부팅하고, 그 커널의 메모리 발자국을 짊어지며, 대체로 호스트에서 도는 것보다 일부 하드웨어 접근이 느리다.

## 커널은 공유하고, 시야는 격리한다

컨테이너는 다른 교환을 택한다. 호스트의 모든 컨테이너가 *같은* 커널을 공유한다 — 인스턴스마다 게스트 OS 부팅 없음 — 그러면서 커널이 격리를 제공해 각 컨테이너의 시야가 따로 보이게 한다. Linux 기능 둘이 일을 대부분 한다. **네임스페이스**는 특정 자원에 대한 프로세스의 시야를 격리한다 — PID 네임스페이스는 컨테이너가 자체 프로세스 트리만 보게 하고(안쪽 프로세스 1은 호스트의 PID 1이 아님); 네트워크 네임스페이스는 사설 인터페이스와 라우팅을; 마운트 네임스페이스는 사설 파일시스템 시야를 준다. **Cgroup**(control groups)은 CPU·메모리·I/O를 제한하고 집계해, 한 컨테이너가 같은 호스트의 다른 것을 굶기지 못하게 한다.

계보는 유행어보다 오래다. chroot(프로세스의 겉보기 파일시스템 루트를 바꾸는 것, 1980년대 초)는 수십 년 전의 제한된 파일시스템 격리였고; cgroup과 현대 네임스페이스는 그 생각을 프로세스 세계의 더 많은 부분으로 일반화한다.

## 규모에서 교환이 이긴 이유

컨테이너가 호스트 커널을 공유하므로, 보통 1초의 일부에 시작하고(커널 부팅 없음) 인스턴스당 발자국이 훨씬 작다 — 중복 커널 이미지나 커널 수준 캐시 없음. 그 효율이 현대 클라우드 인프라의 기본 패키징·배포 단위가 된 이유다. 같은 하드웨어에 VM보다 컨테이너가 훨씬 많고, 그건 분산 시스템(7단계)이 실제로 도는 규모에서 중요하다.

교환: 공유 커널은 충분히 심각한 커널 취약점이, 원칙적으로, 별도 커널 가상화에서보다 구조적으로 더 쉽게 컨테이너 격리를 깨뜨릴 수 있음을 뜻한다. 대부분의 생산 시스템은 그걸 의도적으로 받아들이고, 때로 위에 샌드박스를 더 깐다. [Post 53]({{< relref "53-kubernetes-and-container-orchestration-at-scale" >}})의 Kubernetes 논의가 여기서 이어진다. 가볍고 빨리 시작하는 격리 단위가 있으면, 다음 문제는 함대에 걸쳐 수천 개를 오케스트레이션하는 것이다.

{{< lab type="vm-terminal" >}}
