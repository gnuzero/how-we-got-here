---
title: "프라이버시, 동의, 신원, 사이버"
weight: 74
date: 2026-09-06
draft: false
phase: "프라이버시 / 신원 / 동의"
series_index: 73
aliases:
  - /posts/67-privacy-consent-identity-cyber/
  - /posts/73-privacy-consent-identity-cyber/
tags: []
summary: "열린 네트워크 위의 공학 진화로서의 프라이버시·동의·신원·사이버보안 — 정책 팸플릿이 아니다"
image_prompt: "Clean layered diagram: isolation boundaries, cryptographic keys, identity credentials, and adversarial threat arrows on one stack, modern security-engineering infographic style"
video_prompt: "20-second animation: a shared wire gaining encryption, then authentication, then scoped consent tokens, while an attacker path is blocked at each layer, clean technical motion graphics"
schematics: "Diagram: isolation (OS) → crypto on the wire → identity/auth → consent scopes → adversarial ops as one engineering arc"
---

전시 암호([Post 73]({{< relref "73-wartime-crypto" >}}))는 전용 기계실을 가진 국가 적대자에 맞선 비밀이었다. 열린 인터넷은 다른 공학 문제를 제기한다. *많은* 당사자가 전선·호스트·플랫폼을 공유하고 — 그중 일부는 적대적이거나, 호기심이 많거나, 단순히 사용자보다 크다. 프라이버시, 동의, 신원, 사이버보안은 코드와 프로토콜에서 진화한 그 문제의 이름이다. 이건 정책 팸플릿이 아니다.

## 격리가 먼저 왔다

「프라이버시 제품」 전에 **보호**가 있었다. Jerome Saltzer와 Michael Schroeder의 1975년 개관, [*The Protection of Information in Computer Systems*](https://web.mit.edu/Saltzer/www/publications/protection/)는 여전히 공학 법칙처럼 읽히는 설계 원칙을 틀 지었다. 최소 권한, 완전 중재, 실패 안전 기본값, 메커니즘의 경제. 가상 메모리([Post 31]({{< relref "31-virtual-memory-and-multitasking" >}}))와 컨테이너([Post 32]({{< relref "32-containers-and-modern-os-isolation" >}}))는 같은 베팅의 나중 사례다 — 하드웨어와 커널이 강제하는 경계를 그어, 한 프로그램이 다른 것을 함부로 읽지 못하게.

출구: Saltzer & Schroeder (1975) ([Wikipedia, The Protection of Information in Computer Systems](https://en.wikipedia.org/wiki/The_Protection_of_Information_in_Computer_Systems)).

## 공용 네트워크 위의 암호

공유 네트워크는 옛 배달원-키 모델을 무너뜨렸다. Whitfield Diffie와 Martin Hellman의 1976년 논문 [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf)가 공개키 합의를 연구 대상으로 만들었다. 두 당사자가 도청자가 교환을 듣는 동안에도 공유 비밀을 세울 수 있다. Ronald Rivest, Adi Shamir, Leonard Adleman이 RSA(1977/78)로 이었다 — 메시지와 함께 다닐 수 있는 공개 암호화와 서명. 오늘날 웹의 TLS는 그 계보의 배치된 후손이다(긴 프로토콜 개정 자취와 함께), 별도 도덕 범주가 아니다.

출구: Diffie–Hellman (1976); RSA 논문; 현대 출구로서 [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446)(TLS 1.3).

## 신원은 프로토콜 문제다

네트워크에서 「당신은 누구인가?」는 분위기가 아니다 — 인증과 인가 기계다. 비밀번호는 초기 값싼 인증자였고 여전히 침해 표면이다. Needham과 Schroeder의 인증 작업, Kerberos(MIT Project Athena; Steve Miller, Clifford Neuman과 동료들), 이후 공개키 인증서가 신원을 기계가 검사할 수 있는 *검증 가능 주장*으로 바꿨다. OAuth와 OpenID Connect(IETF / OpenID Foundation 스펙)가 그다음 「당신이 누구인지 증명」과 「이 앱에 좁은 능력을 부여」를 분리했다 — 모호한 약속이 아니라 범위 있는 토큰으로서의 동의.

이름 붙인 제약: 신원 시스템은 검증자·자격 증명·복구 경로가 지키는 자산보다 약할 때 공학으로서 실패한다. 출구: MIT의 Kerberos 역사; [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749)(OAuth 2.0).

## 권력에 대한 인터페이스로서의 동의

동의는 시스템이 경계를 넘어 행동할 허가가 필요한 스택 어디에나 나타난다. 브라우저의 쿠키 항아리와 same-origin policy(웹 플랫폼의 격리 이야기), 장치의 권한 프롬프트, 플랫폼의 범위 있는 API 토큰. 공학 질문은 항상 같다 — *어떤 능력이, 누구에게, 얼마나 오래 부여되었고, 철회할 수 있는가?* — UI 문구가 「Accept」이든 헤더가 `Authorization`이든. [Post 72]({{< relref "72-who-decides-the-wire" >}})의 거버넌스 층이 이름과 숫자를 정한다. 이 층은 *누가 당신 대신 그것을 쓸 수 있는가*를 정한다.

## 사이버보안: 적대적 시스템 공학

사이버보안은 네트워크·공급망·때로 운영자가 적대적이라고 가정할 때 일어나는 일이다. 위의 모든 것 — 격리, 암호, 신원 — 을 공격자 모델 아래 재사용한다. 멀웨어, 피싱, 사이드 채널, 취약 의존성, 규모에서의 설정 오류. 그 학문의 연결 조직은 공포가 아니라 피드백이다. 취약점이 이름 붙여지고(CVE)·패치되고·회귀 테스트되며, 남용은 속도 제한·샌드박싱·모니터링으로 맞선다. Dorothy Denning의 초기 침입 탐지 작업과 이후 CERT 조율 모델은 *종류*의 씨앗이다. 공격을 시스템을 다시 빚는 신호로 취급한다.

출구: CVE 프로그램 문서; Saltzer/Schroeder를 기초로 인용하는 고전 보안 공학 문헌.

## 왜 여정 후반에 속하는가

OS 격리·네트워크·분산 시스템·AI 인프라를 책이 지은 뒤에야 플랫폼 위 프라이버시를 정직히 말할 수 있다. 그 장들이 기판이다. 이 쪽은 그 위에 타는 적대·동의 형태 제약을 이름 붙여, [Post 76]({{< relref "76-platform-synthesis" >}})의 플랫폼 합성이 프라이버시 공학을 부록이 아니라 일급 층으로 다룰 수 있게 한다.
