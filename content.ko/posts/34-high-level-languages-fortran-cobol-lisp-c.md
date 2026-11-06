---
title: "고급 언어: FORTRAN, COBOL, Lisp, C"
weight: 34
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 33
aliases:
  - /posts/27-high-level-languages-fortran-cobol-lisp-c/
  - /posts/32-high-level-languages-fortran-cobol-lisp-c/
  - /posts/33-high-level-languages-fortran-cobol-lisp-c/
tags: []
summary: "네 영역이 네 추상을 강제했다 — 수식, 업무 산문, 기호 리스트, 금속에 가까운 시스템"
image_prompt: "Timeline infographic of FORTRAN, COBOL, Lisp, C with characteristic code snippets, clean historical technical infographic"
video_prompt: "20-second animation: a short algorithm expressed in FORTRAN, COBOL, Lisp, and C syntax successively, clean motion graphics"
schematics: "Diagram: language paradigm comparison + language family tree"
---

어셈블리([Post 33]({{< relref "33-from-machine-code-to-assembly" >}}))는 기계어 위의 일대일 층이다 — 날 바이너리보다 낫지만, 여전히 프로그래머가 명령·레지스터·수동 배치로 생각하게 한다. 고급 언어는 다른 것을 들였다. 하드웨어에 일대일로 사상되지 않는 추상. *무엇을* 계산할지 쓰고; 컴파일러([Post 35]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}}))가 *어떻게*를 알아낸다.

## FORTRAN: 수식 번역

FORTRAN(1957, IBM([Wikipedia, Fortran](https://en.wikipedia.org/wiki/Fortran)))은 과학·공학 계산용으로 지어졌다. 이름은 「Formula Translation」. 명시적 레지스터 할당을 가진 산술 명령 열 대신 `X = A * B + C`를 쓴다. 진짜 컴파일러 재치가 필요했다. 초기 회의는 컴파일된 코드가 손 쓴 어셈블리와 겨룰 수 없다는 것이었다. FORTRAN 컴파일러는 공격적 최적화로 그게 틀렸음을 증명해야 했고, 대체로 했다.

## COBOL: 과학이 아닌 업무

COBOL(CODASYL이 1959년에 설계 시작)은 다른 영역을 겨냥했다. 급여·회계·재고 — 과학이 아닌 업무 데이터 처리. Grace Hopper가 COBOL 자체를 쓴 것은 아니다. 그녀의 이전 FLOW-MATIC에 부분적으로 바탕을 두었다([Wikipedia, COBOL](https://en.wikipedia.org/wiki/COBOL)). 설계 선택: 장황하고 영어 같은 문법(`ADD SALARY TO TOTAL-PAY`), 비프로그래머 분석가와 감사자가 읽게. 유산이 크다. 핵심 은행·보험·정부 시스템이 수십 년 전 쓴 COBOL을 여전히 돌린다 — 임무 핵심 금융 시스템을 다시 쓰는 일은 비싸고 위험해서, 많은 조직이 원본을 유지한다.

## Lisp: 다른 패러다임

Lisp(John McCarthy가 1958년 MIT에서 시작, [Wikipedia, Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))과 McCarthy의 [History of Lisp](http://jmc.stanford.edu/articles/lisp/lisp.pdf)에 따름)는 FORTRAN·COBOL의 명령형 스타일을 완전히 떠났다 — 일급 값으로서의 함수, 코드와 데이터가 같은 리스트 구조를 공유하는 최소·균일 문법. 스타일만이 아니다. 런타임에 다른 프로그램을 구성하고 실행하는 프로그램이 수십 년의 AI·기호 계산의 기초가 되었고, 오늘날 주류 언어의 함수형 기능에도 여전히 영향을 준다.

## C: 기계에 가까운 시스템 프로그래밍

C(1972, Dennis Ritchie([Wikipedia, C](https://en.wikipedia.org/wiki/C_(programming_language))), Unix와 함께 개발 — [Post 29]({{< relref "29-time-sharing-and-the-unix-lineage" >}}))는 또 다른 교환을 택했다. 어셈블리 위에 진짜 생산성을 줄 만큼 높고, OS 커널 전체를 그것으로 쓸 수 있을 만큼 하드웨어에 가깝다 — 당시에는 드문 일. 포인터 산술, 최소 런타임, 기계 연산으로의 예측 가능한 사상이 Unix를 이식 가능하게 했다. 새 기계에 C 컴파일러를 이식하면 되고, 대상마다 어셈블리로 OS를 다시 쓰지 않아도 된다.

## 공통 실

각 언어는 다른 우선순위에 맞춰졌다 — FORTRAN은 수치 표현, COBOL은 업무 가독성, Lisp는 기호 추상, C는 시스템 수준 제어 — 그리고 각자가 오늘날 설계를 여전히 빚는다. 공유하는 것, 그리고 어느 것이든 쓸 수 있게 만드는 것은, 프로그래머가 손으로 그 번역을 하지 않고도 추상을 효율적 기계어로 바꾸는 컴파일러다. 그 과정 — 그리고 「최적화」가 구체적으로 뜻하는 것 — 이 다음 쪽이다.

**출구:** Dennis M. Ritchie, "The Development of the C Language" (HOPL-II / ACM) — Unix 옆 C 설계의 원진술. Lisp의 창립 진술은 John McCarthy의 초기 CACM 기호 표현 재귀 함수 논문을 본다.
