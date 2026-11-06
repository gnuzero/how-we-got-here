---
title: "GNU 운동과 Linux"
weight: 30
date: 2026-01-01
draft: false
phase: "4 — 소프트웨어 기초: OS, 언어, 실시간 시스템"
series_index: 29
aliases:
  - /posts/23-the-gnu-movement-and-linux/
  - /posts/28-the-gnu-movement-and-linux/
  - /posts/29-the-gnu-movement-and-linux/
tags: []
summary: "Unix는 닫혔고, Stallman은 자유 유저랜드를 지었으며, Torvalds가 커널 빈자리를 메웠다 — GPL이 그 결합을 열어 두었다"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

1980년대 초, Unix([Post 29]({{< relref "29-time-sharing-and-the-unix-lineage" >}}))는 기술적으로 뛰어나고 점점 독점적이었다 — AT&T가 상업적 통제를 주장하고, 학술·취미 접근이 조여졌다. Richard Stallman의 응답은 1983년에 시작되었고([Wikipedia, GNU Project](https://en.wikipedia.org/wiki/GNU_Project)), 일차적으로 기술 수정이 아니었다. 이념과 법이었다. 처음부터 완전히 자유로운(자유로서의 free, 가격만이 아닌) Unix 대체물을 짓고, 그렇게 남게 설계된 라이선스로 받친다.

## GNU: 커널 없는 유저랜드

GNU — "GNU's Not Unix" — 는 모든 구성 요소가 자유 소프트웨어인, Unix 호환 완전체 OS를 짓겠다고 나섰다. 사용·수정·재배포 가능하고, 자신의 수정을 재배포하는 것까지. 이어진 십 년 동안 프로젝트는 필수 인프라를 냈다. GCC(여전히 가장 널리 쓰이는 컴파일러 중 하나 — [Post 35]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}})), Bash, GNU coreutils, Emacs, 그리고 더.

GNU가 수년간 갖지 못한 것은 돌아가는 커널이었다. 계획된 커널 GNU Hurd는 심각한 기술 난관에 부딪혀 넓은 실용 사용성에 이르지 못했다. 완전한 유저랜드; 실제 하드웨어 아래의 커널은 없음.

## GPL: 저작권을 바깥으로 돌리다

Stallman의 다른 큰 기여는 GNU General Public License(GPL)다 — 의도된 성질을 가진 「카피레프트」 라이선스. GPL 라이선스 코드를 담은 소프트웨어를 배포하면, 수정한 소스를 같은 조건으로 쓸 수 있게 해야 한다. 보통 재배포를 *제한*하는 도구인 저작권을, 자유가 모든 파생을 통해 전파되도록 — 아래쪽 상업 포크가 조용히 닫지 못하도록 — 보장하는 데 쓴다.

## Linux가 빈자리를 메우다

1991년, 핀란드 학생 Linus Torvalds가 자기 PC용 개인 프로젝트로 커널을 시작했다. 그해 자체 비영리 제한 라이선스로 냈다가 — 결정적으로 — 1992년 초에 GPL로 다시 라이선스했다([Wikipedia, History of Linux](https://en.wikipedia.org/wiki/History_of_Linux)). 그 결합이 빠진 조각이었다. GNU는 성숙한 유저랜드에 실용 커널이 없었고, Linux는 돌아가는 커널에 사실상 유저랜드가 없었다. 함께, Linux 커널 위의 GNU 유틸리티는 완전하고 자유롭게 라이선스된 Unix 호환 시스템이 되었다 — 흔히 「Linux」라 부르지만, 결합에 대해 역사적으로 더 정확한 이름은 「GNU/Linux」다(Stallman이 가끔 공개적으로 답답해하는 지점).

**지금 해 보기.** 아래 VM을 부팅하고 화면을 클릭한 뒤 `uname`, `whoami`, `ls`를 시도해 보라 — 브라우저 안에서 그 결합의 GNU/Linux 쪽에 있다.

{{< lab type="vm-terminal" height="600" >}}

## 이 결합이 이긴 이유

GPL의 구조는 회사가 Linux 주변에 상업 제품을 지으면서도 아래 플랫폼을 조용히 닫지 못하게 했다 — 커널 수정은 같은 조건의 소스로 남아야 했다. 그게 지속적 신뢰를 쌓았고, 결국 지속적 *기업* 기여를 쌓았다. 단일 경쟁자가 플랫폼을 가로채지 않고 열린 채로 남을 것을 믿을 수 있었다. 자유롭고, 상업 사용에 열려 있으며, 법적으로 그렇게 남도록 짜여 있다 — Linux가 서버·클라우드·Android·현대 인터넷 백본의 상당 부분 아래 지배적 커널이 된 이유의 큰 부분이며, 한 학생의 개인 프로젝트를 훨씬 넘는다.

**출구:** The GNU General Public License (Free Software Foundation) — 카피레프트를 강제 가능하게 만든 원법적 텍스트. 프로젝트의 표명된 목표는 Stallman의 GNU Manifesto(1985)와 함께 읽는다.
