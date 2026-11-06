---
title: "컴파일러, JIT, 현대 언어 런타임"
weight: 35
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 34
aliases:
  - /posts/28-compilers-jit-and-modern-language-runtimes/
  - /posts/33-compilers-jit-and-modern-language-runtimes/
  - /posts/34-compilers-jit-and-modern-language-runtimes/
tags: []
summary: "AOT는 런타임 사실 없이 한 번 컴파일하고, JIT는 뜨거운 경로를 기다린다 — 가비지 컬렉션은 비용을 런타임으로 옮긴다"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

[Post 34]({{< relref "34-high-level-languages-fortran-cobol-lisp-c" >}})는 고급 언어가 *왜* 존재하는지를 다루었다. 이 쪽은 그것들을 쓸 수 있게 만드는 기계다. 소스를 진짜 CPU(3단계)가 실행할 수 있는 것으로 옮기는 컴파일러.

## 고전 파이프라인(짧게)

렉서 → 토큰. 파서 → 추상 구문 트리. 의미 분석이 문법만으로는 잡을 수 없는 것(타입, 선언되지 않은 이름)을 잡는다. 대부분의 실제 컴파일러는 그다음 중간 표현(IR)으로 낮춘다 — 소스 문법보다 균일하고, 어떤 대상 ISA에도 아직 독립 — 거기서 **최적화기**가 일한다. 죽은 코드 제거, 루프 불변 끌어올리기, 인라인, 그리고 행동을 지키면서 낭비 작업을 줄이는 수십 가지 변환. **코드 생성**이 대상 명령을 내고 레지스터 할당을 한다(어떤 값이 부족한 물리 레지스터에 살고, 어떤 값이 메모리로 spill되는지).

그게 척추다. 모든 패스의 백과사전은 요점이 아니다 — 제약은: 소스 추상은 돌지 않는다. 무언가가 낮춰야 하고, 그 무언가는 실행 *전*에 또는 실행 *중*에 돌 수 있다.

## Ahead-of-Time 대 Just-in-Time

프로그램이 한 번도 실행되기 전에 파이프라인 전체를 한 번 돌린다: Ahead-of-Time(AOT) — C와 전통적 FORTRAN. Just-in-Time(JIT) — Java, JavaScript와 친척 — 은 인터프리터나 빠른 기준선 컴파일러로 시작한 뒤, *런타임에* 뜨거운 경로를 찾아 더 무거운 최적화로 다시 컴파일한다.

JIT의 이점은 AOT 컴파일러가 갖지 못한 정보다. 관측된 분기, 인자 타입, 실제 뜨거운 루프 — 그 데이터 없이는 가정하기 위험한 최적화. 비용은 실제다. 컴파일이 실행 중 사이클을 태우고, 처음 몇 초는 정상 상태보다 느린 경우가 많다 — 고전적 워밍업.

## 런타임: 컴파일보다 더

관리 언어(Java, C#, 그리고 정도를 달리하는 JavaScript와 Python)는 컴파일러를 더 넓은 런타임과 짝짓는다 — 가장 결정적으로 가비지 컬렉션을 통한 자동 메모리 관리로, 프로그래머가 모든 할당의 수명을 추적하지 않게 한다(C에서 주요 버그 원천). 복잡성은 런타임으로 옮긴다. 수동 노력을 오버헤드와, 역사적으로, 덜 예측 가능한 일시 정지와 바꾼다. 그 긴장이 정확히 Posts [36]({{< relref "36-real-time-systems-and-deterministic-scheduling" >}})–[37]({{< relref "37-real-time-systems-in-practice" >}})이 「실시간」과 「가비지 컬렉션 관리 런타임」을 자주 대립으로 다루는 이유다.

## 살아 있는 모습

아래 VM 터미널은 진짜 Linux 시스템이지만 최소 BusyBox다. C 컴파일러가 없다(`gcc`는 `gcc: not found`). 그래도 이 쪽의 양면을 보여 줄 수 있다. `hexdump -C /bin/busybox | head -2`를 실행하라. 파일이 `7f 45 4c 46`으로 시작한다 — `0x7f` 다음에 「ELF」, 컴파일러와 링커가 내는 실행 형식이며, VM을 부팅하기 훨씬 전에 다른 기계에서 미리 지어졌다. 그다음 인터프리터에 같은 일을 준다. `echo 'BEGIN{s=0; for(i=1;i<=1000000;i++) s+=i; print s}' > /tmp/sum.awk`, 이어서 `time awk -f /tmp/sum.awk`. 몇 초 뒤(우리 실행에서는 약 6초; 브라우저는 다를 수 있다) `500000500000`을 인쇄한다. awk가 모든 반복을 런타임에 실행하기 때문이다 — 최적화 컴파일러라면 프로그램이 돌기 전에 상수로 줄일 수 있는 루프.

{{< lab type="vm-terminal" >}}
