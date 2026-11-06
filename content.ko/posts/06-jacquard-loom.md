---
title: "자카드 직기"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — 기초: 기계 계산에서 진공관으로"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "천공 카드가 프로그램을, 그것을 실행하는 기계에서 떼어 냈다"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

배비지는 천공 카드 제어를 발명하지 않았다. 빌렸다.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="생테티엔 미술산업박물관의 좁은 자카드 직기" loading="lazy" width="1280">
<figcaption>자카드 직기, Musée d'art et d'industrie, Saint-Étienne. 사진: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

Musée des Arts et Métiers에 따르면, Joseph-Marie Jacquard의 직기 장치는 1801년 12월 23일 특허를 받았다. ([Musée des Arts et Métiers](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard)) Science Museum Group은 1804년까지 상업적 성공이었다고 적고, Fondation Napoléon은 1804년 2월 2일 Société d'encouragement의 금메달을 적는다. ([Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components); [Fondation Napoléon](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/)) 장치는 드로우룸의 드로우 보이를 대신했다. 천공 카드 사슬이 북이 지날 때마다 어느 실을 들어 올릴지 정한다. 구멍 → 올림, 구멍 없음 → 막음. 카드를 바꾸면 무늬가 바뀐다. 직기는 「비단 브로케이드」를 알지 않는다. 물리적으로 부호화된 올림/비올림의 고정 수열을 실행할 뿐이다.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="맨체스터 과학산업박물관 자카드 직기 천공 카드 클로즈업" loading="lazy" width="249">
<figcaption>자카드 직기의 천공 카드 (Museum of Science and Industry, Manchester). 사진: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, 퍼블릭 도메인.</figcaption>
</figure>

배비지가 해석기관에 채택한 추상은 이것이다. 프로그램은 명령의 수열이며, 그것을 실행하는 기계와 분리된다.

Ada Lovelace는 그 분리가 함의하는 바를 보았다. 맞는 카드를 설계하면 기계는 숫자만이 아니라 *어떤* 기호도 다룰 수 있다. Menabrea의 해석기관 논문에 붙인 그녀의 주석에는, 흔히 최초로 출판된 컴퓨터 프로그램이라 불리는 것(베르누이 수)이 들어 있다.

**출구:** Ada Lovelace의 해석기관 *Notes*(Menabrea 번역에 붙인 것) — 베르누이 수 스케치와 「어떤 기호든」 논증의 1차 텍스트. 지도: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine).

다음: 이 기계 장이 그 뒤의 모든 것을 여전히 빚는 이유 — 그리고 톱니만으로는 스케일하지 못한 이유.
