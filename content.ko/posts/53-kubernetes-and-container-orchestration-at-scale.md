---
title: "Kubernetes와 규모에서의 컨테이너 오케스트레이션"
weight: 53
date: 2026-01-01
draft: false
phase: "7 — 분산 시스템, 빅데이터, 오케스트레이션"
series_index: 52
aliases:
  - /posts/45-kubernetes-and-container-orchestration-at-scale/
  - /posts/51-kubernetes-and-container-orchestration-at-scale/
  - /posts/52-kubernetes-and-container-orchestration-at-scale/
tags: []
summary: "일상적으로 실패하는 컨테이너 수천이 선언적 원하는 상태와 연속 조정 루프를 강제한다"
image_prompt: "System diagram of a Kubernetes cluster showing control plane, nodes, pods, and services, clean cloud-native architecture diagram style"
video_prompt: "25-second animation: a pod failing and Kubernetes automatically rescheduling it onto a healthy node, clean technical animation showing the reconciliation loop"
schematics: "Diagram: Kubernetes control plane architecture (API server/scheduler/controller manager/etcd) + pod scheduling and reconciliation loop"
---

[Post 32]({{< relref "32-containers-and-modern-os-isolation" >}})가 컨테이너를 다루었다 — 호스트 커널을 공유하는 가벼운 격리. 기계 하나 위 컨테이너 하나는 손으로 관리할 수 있다. 수백 기계에 걸친 수천 개, 상자와 프로세스가 일상적으로 실패하는([Post 52]({{< relref "52-google-s-big-data-infrastructure-why-they-won" >}})의 GFS와 같은 「실패는 정상」 베팅) 일은 다른 운용 문제다. Kubernetes는 Google이 이미 살아 본 내부 클러스터 관리자에서 증류한, 그 제약에 대한 열린 답이다.

## 수동 배치는 스케일하지 않는다

어느 기계가 어느 프로세스를 돌릴지 고르고, 크래시를 재시작하고, 건강한 인스턴스로 트래픽을 돌리고, 중단 없이 롤링 업데이트 — 컨테이너 몇에는 다룰 수 있고, 생산 함대에는 아니다. 강제된 이동은 사람이 모든 실패를 알아채지 않아도 배치와 복구를 계속 관리하는 소프트웨어다.

## 원하는 상태, 단계별 명령이 아니다

하중을 견디는 생각은 명령형이 아니라 선언적이다. 운영자가 끝 상태를 선언한다 — 「이 서비스 복제본 다섯, 이 제한으로」 — 그리고 컨트롤 플레인이 그 바람이 남아 있는 한 실제 클러스터 상태가 맞도록 일한다. 드리프트(크래시, 죽은 노드, 요청보다 적은 건강한 복제본)는 먼저 사람을 위한 알림이 아니다. 루프가 대체물을 스케줄해 고치는 불일치다.

그 조정(reconciliation) 루프가 자가 치유 메커니즘이다. 컨트롤 플레인의 이름 붙은 조각 — 모든 상태 변경의 문인 API 서버, 원함과 실제의 일관 저장소 etcd, 새 일을 배치하는 스케줄러, 특정 종류 드리프트를 소유하는 컨트롤러 — 는 그 루프를 섬기기 위해 존재한다. 기능 목록이 아니라, 연속 교정이 구현되는 방식이다.

## 계보: Borg → Omega → 오픈소스

Google은 Kubernetes를 열린·API 중심 버전의 교훈으로 내보내기 전에, 십 년 이상 내부에서 이 부류의 문제를 이미 돌렸다(Borg; 그다음 Omega의 공유 상태 스케줄링 실험). 열린 시스템이 중요했던 이유는 제약이 업계 전체에 있었기 때문이다. 컨테이너가 배포 단위가 되면, 함대에 걸쳐 원하는 상태를 소유하는 무언가가 있어야 한다.

## ML 클러스터가 신경 쓰는 이유

같은 루프가 이제 웹 서비스만이 아니라 분산 학습·추론 — 많은 GPU 기계에 걸치고, 일상적 하드웨어 실패에서 재시작해야 하며, 가용 용량과 함께 스케일하는 잡 — 도 돈다. 그건 [Post 54]({{< relref "54-the-machine-learning-software-stack" >}})의 소프트웨어 스택과 9–10단계의 하드웨어로 넘긴다. 실리콘만으로는 학습 함대를 배치하거나 치유하지 않는다.

**출구:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — Kubernetes가 내려오는 내부 시스템의 원진술; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — Borg·Omega·열린 컨트롤 플레인을 묶는 짧은 계보 논문.
