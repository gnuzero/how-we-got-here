---
title: "Usenet, Archie, Gopher, 그리고 웹 이전 인터넷"
weight: 50
date: 2026-01-01
draft: false
phase: "7 — 분산 시스템, 빅데이터, 오케스트레이션"
series_index: 49
aliases:
  - /posts/43-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/48-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/49-usenet-archie-gopher-and-the-pre-web-internet/
tags: []
summary: "찾고, 그다음 말한다 — Usenet, Archie, Gopher, IRC, 그리고 둘을 포장한 소비자 포털"
image_prompt: "Historical illustration of a Usenet hierarchy, Archie prompt, Gopher menu, IRC channel list, and a Yahoo-style portal homepage as one arc, clean vintage internet-history infographic style"
video_prompt: "25-second animation: a Usenet post propagating, an Archie query, a Gopher drill-down, IRC messages in a channel, then a portal homepage bundling directory + chat + mail, clean historical technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: find (Archie/Gopher) + talk (Usenet/IRC) converging into consumer portals, then into the open web"
---

TCP/IP([Post 48]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}))는 인터넷에 보편 주소·트랜스포트 기초를 주었다. 그 *위*에서, World Wide Web이 지배적 인터페이스가 되기 전 대략 이십 년 동안 돈 것은 두 얼굴을 가진 하나의 호였다. 무언가를 **찾고**, 그다음 누군가와 **말한다**. 분산 토론, 초기 검색, 메뉴 브라우징, 실시간 채팅, 그리고 마침내 소비자 포털이 각자 당시 기술로 그 호의 조각을 풀었다.

## Usenet: 중앙 서버 없는 분산 토론

Usenet(Duke의 Tom Truscott과 Jim Ellis, 1979년 구상, 1980년 공개([Wikipedia, Usenet](https://en.wikipedia.org/wiki/Usenet)))은 현대 웹보다 십 년 이상 앞선다. 중앙 서버가 모든 토론을 호스팅하지 않는다. 참여 서버가 메시지를 store-and-forward로 교환한다 — 처음에는 UUCP 다이얼업, 나중에는 NNTP(1986([Wikipedia, NNTP](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol)))를 통한 TCP/IP — 서버가 피어에서 글을 받아 저장하고 다시 전달한다. 단일 중앙 통제점 없이 글이 전파된다.

계층 뉴스그룹(`comp.lang.c`, `rec.arts.movies`, …)은 중앙 중재자가 나무를 강요하지 않고도 주제별로 토론이 스스로 조직되게 한다. 그 설계는 그것을 대체한 대부분의 것과 다른 철학이다 — [Post 52]({{< relref "52-google-s-big-data-infrastructure-why-they-won" >}})가 다루는 분산 시스템 아이디어에 정신적으로 더 가깝되, 데이터 처리가 아니라 사람 말에 적용.

## Archie: 첫 검색 도구

현대 검색 엔진을 닮은 것이 있기 전, 특정 파일을 찾는 일은 어느 호스트가 들고 있는지 아는 일이었다. Archie(1990, McGill; Alan Emtage with Bill Heelan and Peter Deutsch([Wikipedia, Archie](https://en.wikipedia.org/wiki/Archie_(search_engine))))는 더 좁은 컷을 택했다. 알려진 FTP 서버를 주기적으로 폴링하고, 공개 파일 이름을 색인하고, 사용자가 색인을 검색하게. 내용은 범위 밖 — 이름만 — 이었지만, 서버를 짐작하는 것보다 큰 한 걸음이었다.

## Gopher: 웹 이전의 메뉴 브라우징

Gopher(1991, University of Minnesota; Mark McCahill and colleagues([Wikipedia, Gopher](https://en.wikipedia.org/wiki/Gopher_(protocol))))는 계층·메뉴 탐색을 제공했다. 문서, 하위 메뉴, 다른 Gopher 서버로의 링크, 자유 형식 하이퍼링크가 아니라 번호로 고름. 웹보다 더 제약되었고 — 1990년대 초 짧은 동안, 인터넷 정보 공간이 어떻게 조직될지 진지한 경쟁자였다.

## IRC: 실시간 피어 대화

Usenet은 *전파되는* 말이었다. IRC는 *지금 일어나는* 말이었다. 1988년 8월, University of Oulu의 Jarkko Oikarinen이 OuluBox BBS의 다중 사용자 대화를 개선하려고 Internet Relay Chat을 지었다 — 부분적으로 Bitnet Relay에 영감을 받아 — 그다음 친구들이 다른 곳에서 `ircd`를 돌리며 서버가 핀란드를 북미에 잇는 것을 보았다. 채널, 닉네임, 연합 서버 메시가 단일 기업 호스트 없이 인터넷에 살아있는 방을 주었다. 프로토콜은 나중에 RFC 1459(1993)에 실렸다([Wikipedia, IRC](https://en.wikipedia.org/wiki/IRC)).

**출구:** [RFC 1459](https://www.rfc-editor.org/rfc/rfc1459) — IRC 프로토콜의 원규격.

## 소비자 포털: 찾기와 말하기를 포장하다

1990년대 중반까지, 위의 열린 도구는 여전히 클라이언트를 어디로 향할지 안다고 가정했다. 소비자 포털은 다른 베팅을 팔았다. 신참이 호를 스스로 조립하지 않도록 디렉터리 찾기·뉴스·메일·채팅을 *묶은* 홈페이지 하나.

Yahoo가 그 *종류*의 씨앗이다. 1994년 Stanford 대학원생 Jerry Yang과 David Filo가 「Jerry and David's Guide to the World Wide Web」 — 사람이 큐레이트한 계층 디렉터리 — 을 시작해 Yahoo!로 이름을 바꾸고([Wikipedia, Yahoo](https://en.wikipedia.org/wiki/Yahoo)), 디렉터리 위에 검색·메일·다른 sticky 서비스를 깐 포털로 키웠다. 친척을 끌어내고 멈춘다. AOL의 담장 정원, Excite, Lycos, 비슷한 현관은 같은 *범주*다 — 대중을 위해 find-then-talk를 포장한 주의 허브 — 두 번째 회사 백과가 아니다. 출구: 포털 시대를 위 프로토콜 위의 제품 역사로 다루고, 그것의 대체로 다루지 않는다.

## 열린 웹이 메뉴와 허브를 앞지른 이유

웹의 핵심 수 — *어느* 다른 문서든, 어디든, 고정 메뉴 계층이나 한 포털의 분류에 잠기지 않고 가리킬 수 있는 HTML 하이퍼링크 — 는 Gopher 메뉴나 큐레이트 디렉터리보다 더 유연한 찾기 모델이었다. Netscape Navigator(1994([Wikipedia, Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator)))는 옛 NCSA Mosaic 개발자들이 상업 후원과 빠른 반복으로 세운 회사에서 나와, 그 모델을 연구 도구에서 주류 사용으로 밀었다. 포털은 호를 계속 포장했다. 열린 하이퍼링크 그래프(그리고 나중, 다음 쪽의 크롤러 규모 검색)가 *찾기* 반쪽을 계속 이겼다.

Gopher는 주류에서 사라졌다. Usenet과 IRC는 완전히 사라지지 않았다 — 대부분의 첫 문이기를 멈췄을 뿐이다. Archie의 파일명 색인은 [Post 52]({{< relref "52-google-s-big-data-infrastructure-why-they-won" >}})가 탈중앙 웹 전체를 색인하는 규모로 키우는 *종류*의 씨앗이었다.

## 이것이 이 시리즈에 속하는 이유

찾기와 말하기는 곁가지 잡학이 아니다. Usenet의 분산 전파, Archie의 분산 호스트 위 색인 문제, IRC의 연합 실시간 방, 그 전부를 제품화하려는 포털 베팅이 다음 쪽이 더 큰 규모에서 묻는 같은 *범주*의 질문으로 다시 떠오른다. 중앙 목록이 없는 공간을 어떻게 검색하고, 전선이 공유된 뒤 사람들이 어떻게 대화에 머무는가?

{{< lab type="vm-terminal" >}}
