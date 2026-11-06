---
title: "Google의 빅데이터 인프라 — 왜 이겼는가"
weight: 52
date: 2026-01-01
draft: false
phase: "7 — 분산 시스템, 빅데이터, 오케스트레이션"
series_index: 51
aliases:
  - /posts/44-google-s-big-data-infrastructure-why-they-won/
  - /posts/50-google-s-big-data-infrastructure-why-they-won/
  - /posts/51-google-s-big-data-infrastructure-why-they-won/
tags: []
summary: "웹 규모 데이터가 실패를 정상으로 가정하는 저장을 강제했고, 그다음 클러스터를 가리는 프로그래밍 모델을 — GFS, MapReduce, Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined, clean technical animation"
schematics: "Diagram: GFS architecture (master/chunkserver) + MapReduce data flow (map→shuffle→reduce) + Bigtable sparse table model"
---

1990년대 말 여러 회사가 웹 검색을 짓고 있었다. Google은 랭킹 재치만으로 이기지 않았다 — PageRank는 중요했지만, 지속적 우위는 인프라였다. 한 기계로는  충분하지 않을 때, 계속 바뀌는 웹을 저장하고 처리할 수 있는 시스템.

## 제약: 웹이 상자 하나를 넘어섰다

「웹 전체」를 색인하는 일은 어떤 단일 디스크·메모리보다 큰 데이터셋을 뜻하고, 한 번 스냅샷이 아니라 계속 도착한다. 3단계는 *한* 기계를 더 빠르게 만들었다. 이 문제는 다르다. *많은* 기계를 조율해, 어느 하나도 담을 수 없는 것을 함께 들고 처리하게.

## 실패는 정상 — 그래서 저장이 그걸 가정해야 했다

Google File System(Ghemawat, Gobioff, and Leung, SOSP 2003([Wikipedia, Google File System](https://en.wikipedia.org/wiki/Google_File_System)))은 대부분의 파일시스템이 여전히 예외로 다루던 설계 가정에서 출발했다. 상용 기계 수천 대에서는 하드웨어 실패가 일상이다. 파일을 큰 청크로 나누고, 각 청크를 청크서버에 복제하고, 마스터가 청크가 어디에 사는지 추적하게 — 그래서 기계 하나를 잃는 일이 위기가 아니라 자동으로 흡수된다. [Post 49]({{< relref "49-datacenter-networking-and-rdma" >}})의 패브릭 작업이 데이터센터 안에서 하는 *같은 종류의* 베팅이다. 부분 실패의 흔한 경우에 맞춰 공학한다.

## 클러스터를 다시 발명하지 않는 처리

저장만으로는 부족했다. 그 규모의 처리는 모든 엔지니어가 분산과 복구를 다시 발명하지 않게 하는 프로그래밍 모델이 필요했다. MapReduce(Dean and Ghemawat, OSDI 2004([Wikipedia, MapReduce](https://en.wikipedia.org/wiki/MapReduce)))는 훅 둘을 주었다 — 레코드에서 키–값 쌍을 내는 **map**, 같은 키를 공유하는 값을 집계하는 **reduce** — 그리고 *시스템*이 분할, 병렬 map, 키별 shuffle/sort, 병렬 reduce, 실패한 태스크 재시도를 다뤘다. 제약은 물리만큼 인지적이었다. 클러스터를 가려 잡의 논리가 작게 남게.

## 값싼 바이트 위의 구조

Bigtable(Chang et al., OSDI 2006([Wikipedia, Bigtable](https://en.wikipedia.org/wiki/Bigtable)))은 이웃 필요에 답했다. 웹 규모의 희소 구조 저장 — 행이 URL, 열이 크롤 버전이나 메타데이터, 대부분 셀이 비어 있음 — 아래는 GFS. 설계가 업계가 나중에 NoSQL이라 부른 많은 것을 빚었고, 연결 조직은 같다. 실패에 견디는 대량 저장과 배치 프로그래밍 모델이 있으면, 구조적 접근이 다음 강제 층이 된다.

## 이것이 해자였던 이유

경쟁자는 랭킹 아이디어를 베낄 수 있었다. 상용 하드웨어에서 웹 전체를 저장·처리·계속 재색인하는 용량을 복제하는 일 — 기계의 죽음을 정상으로 다루는 일 — 은 훨씬 어려웠다. Hadoop과 나중 「빅데이터」 스택은 Google 내부 코드 없이도 *공개된* 논문을 따랐다. 논문이 그 부류의 문제를 푸는 방법을 보여 주었다.

배치 map/reduce는 강력하고 경직하다. 다음 쪽은 *처리*하는 분산 데이터에서, 성숙한 분산 시스템을 이루는 많은 서비스를 *배포하고 치유*하는 일로 돌린다.

**출구:** Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung, "The Google File System" (SOSP 2003); Jeffrey Dean and Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (OSDI 2004); Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data" (OSDI 2006) — 이 인프라 이야기 뒤의 세 원논문.
