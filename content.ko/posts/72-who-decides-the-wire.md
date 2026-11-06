---
title: "누가 전선을 정하는가"
weight: 72
date: 2026-09-06
draft: false
phase: "거버넌스 / 인터넷 시민성"
series_index: 71
aliases:
  - /posts/64-who-decides-the-wire/
  - /posts/70-who-decides-the-wire/
  - /posts/71-who-decides-the-wire/
tags: []
summary: "이종 네트워크가 상호운용하도록 숫자·이름·부호화를 누가 이름 붙이는가"
image_prompt: "Clean diagram of shared registries — protocol numbers, IP addresses, domain names, Unicode code points — flowing into one interoperable packet path, internet-governance infographic style"
video_prompt: "20-second animation: a packet gaining meaning only after number, name, and encoding registries agree, clean technical motion graphics"
schematics: "Diagram: numbers (IANA) / addresses (RIRs) / names (DNS+ICANN) / encodings (Unicode) as four shared coordination layers above TCP/IP"
---

ARPANET([Post 46]({{< relref "46-arpanet-and-packet-switching" >}}))과 TCP/IP([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}))는 패킷이 어떻게 움직이는지를 풀었다. 그들만으로는 더 조용한 질문에 답하지 않았다. *비트가 무엇을 뜻하는지를 누가 말할 자격이 있는가?* 포트 80, IPv4 접두사, `.com`, ก의 코드 포인트 — 멀리 떨어진 운영자들이 같은 식별자를 같은 방식으로 취급하지 않으면 어느 것도 작동하지 않는다. 인터넷의 거버넌스 이야기는 그 합의의 이야기다. 네트워크 위의 의회가 아니라, **숫자**, **이름**, **부호화**를 위한 공유 원장 집합.

## 제도 이전의 문서

첫 조율 도구는 문서 시리즈였다. 1969년 4월 Steve Crocker가 [RFC 1](https://www.rfc-editor.org/rfc/rfc1) — *Host Software* — 을 ARPANET 연구 커뮤니티를 위한 작업 노트로 발표했다. 톤이 중요했다. 「Request for Comments」, 「칙령」이 아니다. Jon Postel이 거의 30년 시리즈를 편집하며, 비공식 메모를 인터넷이 실제로 어떻게 작동하는지의 내구성 있는 공개 기록으로 바꿨다. 출구: [RFC Editor history](https://www.rfc-editor.org/history/).

연구 커뮤니티가 복도 회의를 넘어가자 Internet Engineering Task Force(IETF)가 자랐다. 하중을 견디는 문구는 Dave Clark의 것이다. *rough consensus and running code* — 표준은 투표가 아니라 출하로 값어치를 입증한다. IETF는 인터넷을 소유하지 않는다. 운영자가 배포할 무언가로 프로토콜을 논쟁하는 과정을 소유한다. 출구: [ietf.org](https://www.ietf.org/).

## 숫자: 누군가가 식별자를 나눠 줘야 한다

패킷은 프로토콜 번호, 포트 번호, 주소 블록, ASN 값, 미디어 타입을 나른다 — 두 그룹이 다른 의미로 같은 것을 발행하면 무가치한 식별자. 수년 그 원장은 한곳에 살았다. Internet Assigned Numbers Authority(IANA), Jon Postel이(오랜 연락 창구 Joyce Reynolds와 함께) UCLA와 이후 USC/ISI의 연구 계약 아래 실용 서비스로 운영. IANA는 *종류*의 씨앗이다. 구현이 양자 협상 없이 상호운용하도록 프로토콜 파라미터의 중립 레지스트리.

네트워크가 한 사람의 노트를 넘어 스케일하자, 숫자 자원은 *종류*별로 갈라졌다. 프로토콜 파라미터는 IANA에 남았다. IP 주소 공간은 Regional Internet Registry 쪽으로 움직였다 — 북미 상당 부분의 ARIN(1997); RIPE NCC, APNIC, LACNIC, AFRINIC이 다른 지역의 같은 *종류*이고, 지역이 그 모델을 택한 곳에는 국가·로컬 Internet Registry(NIR)가 그 아래 앉는다. 패턴이 요점이다. 희소·고유 식별자는 모두가 가리킬 수 있는 관리인이 필요하다. 출구: [iana.org](https://www.iana.org/), [arin.net](https://www.arin.net/).

## 이름: 인간은 말이 필요하고, 기계는 고유성이 필요하다

Paul Mockapetris의 DNS 명세([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034), [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035))가 계층 이름을 주소 패브릭 위의 분산 조회 시스템으로 바꿨다. 이름은 원시 숫자가 아닌 방식으로 정치적이다. 사람들이 말을 두고 논쟁한다. Jon Postel의 [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591)이 초기 도메인 정책을 관리로 틀 지었다.

1990년대 말 미국 정부는 그 조율 기능을 단일 연구 계약 밖으로 원했다. ICANN(Internet Corporation for Assigned Names and Numbers)이 1998년에 형성되었다 — 임시 의장 Esther Dyson — 이름·숫자 정책의 제도 자리를 잡고, IANA는 그 우산 아래 운영 레지스트리로 계속. ICANN을 또 다른 *종류*의 씨앗으로 읽어라. 애플리케이션 사이 승자를 고르는 것이 아니라, 공유 네임스페이스의 안정과 고유성이 일인 다중 이해관계자 기구. 출구: [icann.org](https://www.icann.org/).

## 부호화: 페이로드가 같은 글리프를 뜻해야 한다

양 끝이 바이트 시퀀스가 *무엇인지*에 동의하지 않으면 상호운용은 조용히 실패한다. Unicode Consortium(1991년 설립; Joe Becker, Mark Davis 등의 초기 작업, 단일 문자 집합이 필요했던 회사들에 걸쳐)이 추상 문자에서 코드 포인트로의 공유 매핑을 유지한다 — 태국 문자, 라틴, 이모지가 각 애플리케이션이 자체 알파벳 표를 발명하지 않고 한 전선을 공유할 수 있는 이유. UTF-8이 그다음 그 레퍼토리의 지배적 *전선 위* 부호화가 되었다. 출구: [unicode.org](https://www.unicode.org/), [Unicode Standard](https://www.unicode.org/standard/standard.html).

한글은 같은 이야기의 구체 사례다. 한국의 정보 교환용 문자 집합 표준 **KS X 1001**(옛 이름 KS C 5601)이 한글·한자를 컴퓨터에 담기 위한 국가 부호화였고, EUC-KR 등 레거시 한국어 인코딩의 바탕이 되었다([Wikipedia, KS X 1001](https://en.wikipedia.org/wiki/KS_X_1001)). Unicode **Hangul Syllables** 블록(U+AC00–U+D7A3)은 현대 한글 음절 11,172개를 미리 조합된 코드 포인트로 담는다([Unicode Hangul Syllables chart](https://www.unicode.org/charts/PDF/UAC00.pdf); [Unicode FAQ — Korean](https://www.unicode.org/faq/korean.html)). [Post 2]({{< relref "02-woodblock-to-movable-type" >}})의 훈민정음이 글자 자체를 만들었고, 여기 부호화가 그 글자를 공유 전선에 올리는 쪽이다 — 같은 「누가 비트가 무엇을 뜻하는지 말하는가」 문제의 한국 사례.

## 같은 종류의 친척

몇 피어가 한 문장을 번다 — 같은 *종류*의 공유 의미, 표준 기구 투어가 아니다.

- **W3C와 WHATWG** — Tim Berners-Lee가 World Wide Web Consortium(1994([Wikipedia, W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)))을 세워 웹 플랫폼 표준을 관리했고, WHATWG가 이후 브라우저 벤더가 더 빠른 반복 경로를 필요로 할 때 living HTML/DOM 스펙을 날랐다. 같은 *종류*: 브라우저에서 문서와 API가 무엇을 뜻하는지를 누가 정의할 수 있는가.
- **IEEE** — IEEE 802가 Ethernet([Post 47]({{< relref "47-ethernet-and-the-local-area-network" >}}))과 Wi-Fi가 링크 층에서 사유 섬 방언이 아닌 이유다.
- **ISO와 피어** — 조달·안전·국가 기구가 요구하는 곳에서 형식적 국제 표준이 RFC 세계 옆에 앉는다. 인터넷은 대체로 RFC로 먼저 출하하고 나중에 조화했다.

## 왜 이 여정에 속하는가

Posts [46]({{< relref "46-arpanet-and-packet-switching" >}})–[48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}})는 공학 베팅이다. 패킷, 층, 신뢰할 수 없는 기판. 이 쪽은 그 아래의 시민성 베팅이다. **공유 의미는 인프라다**. 누군가(와 어떤 과정)가 숫자·이름·부호화를 정하지 않으면, 새 네트워크마다 사적 언어다. 위의 출구가 1차 자료다 — RFC, 레지스트리, 컨소시엄 페이지.

여기서의 선택 곁길: 사람들이 그 공유 전선에서 어떻게 *찾고* *이야기했는지*([Post 50]({{< relref "50-usenet-archie-gopher-and-the-pre-web-internet" >}})), 또는 전시 암호가 비밀을 지킬 수 있는 기계를 어떻게 강제했는지([Post 73]({{< relref "73-wartime-crypto" >}})). 주 척추는 패킷 → 시스템 → 실리콘 → 어텐션에 남는다. 이건 취하거나 건너뛸 수 있는 렌즈 넓히기 박자이다.
