---
title: "활자에서 픽셀로"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — 분산 시스템, 빅데이터, 오케스트레이션"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "페이지와 활자가 소프트웨어가 될 때 — 왕쉬안의 레이저 조판이 앞서고, 서양 PostScript와 CSS가 아래에"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[목판에서 활자로]({{< relref "02-woodblock-to-movable-type" >}})는 페이지를 물리적인 것 — 잉크, 활자, 종이 — 으로 남겼다. 이 쪽은 페이지가 파일이 되는 곳이며, 중국 레이저 조판이 문제를 드러나게 강제했다.

## 중국어가 문제를 강제된 이유

라틴 글꼴은 수십 개의 소트가 필요하다. 중국어 신문은 수만 자의 문자가 필요하고, 각자가 여러 크기·스타일로 그려진다. 1970년대 말 컴퓨터에 모두를 촘촘한 점 격자로 저장하면 들어가지 않는다. 왕쉬안은 나중에, 문자 수 자체가 팀을 윤곽으로 글리프를 기술해 데이터량을 줄이게 밀었다고 썼다. ([Wang Xuan, 1999, on Sina](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## 왕쉬안: 레이저 조판

중국컴퓨터학회 역사 항목이 공학 숫자를 준다. 5호(五号) 문자에서 정보는 약 10,000비트에서 평균 약 800비트로 — 대략 12배 작아졌다. 같은 방법으로 글리프가 품질을 잃지 않고 스케일(더 크게, 작게, 높게, 납작하게)할 수 있어, 전체 절약은 약 500배에 이른다. 약 4MB가 약 60만 자두(字头)를 담았다. 출처의 별개 수치다 — 800비트는 압축된 5호 형태이지, 4MB를 60만으로 나눈 값이 아니므로 곱하면 안 된다. 첫 신문 견본 페이지는 1979년 7월 27일, 시스템으로 조판된 첫 책 《伍豪之剑》은 1980년 9월 15일로 적힌다. ([CCF Computing History, Huaguang / Founder system](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

같은 1999년 글에서 왕은 팀이 1986년에 자체 페이지 기술 형식을 고정했고, 그 형식이 1990–1994년 원격 인쇄소로 보낸 페이지를 날랐다고 한다. 1990년에는 PostScript가 표준이 될 것으로 보았고, 1993년 가을 그가 중국 첫 PostScript Level 2 인터프리터라 부르는 것을 냈다. 왕의 본인 진술이다. ([Wang Xuan, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## 대만: 평행한 처음

타이베이 연합보는 1982년 9월 16일 컴퓨터 조판 시스템을 켰다. 신문은 그것을 컴퓨터 조판을 채택한 첫 중국어 일간으로 적으며, 대륙 레이저 조판 계열과 따로 자랐다. ([United Daily News anniversary book](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## 페이지가 된 것

활자와 레이아웃이 소프트웨어에 살면, 「인쇄기」는 렌더러다. Adobe는 1984년에 PostScript를 냈다. 페이지를 프린터에 기술하는 언어. ([CHM, PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) 웹에서는 CSS가 화면용으로 같은 일을 한다. 선택자, 박스 모델, 캐스케이드가 문서가 레이아웃이 되는 방식을 정하고, 말은 보이는 방식과 떨어져 남는다. ([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

중국 압축과 서양 페이지 기술, 두 선이 같은 곳에 끝난다. 손으로 활자를 잡지 않고도 기계가 다시 그릴 수 있는 페이지.

> **곁가지: 아무것도 뜻하지 않는 자리 표시**
>
> 디자이너가 *lorem ipsum*이라 부르는 채움 글은 Cicero의 *De finibus bonorum et malorum*에서 뒤섞인 라틴어다. 구절은 *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…*로 시작한다. 원문은 1권 32절([Perseus, Cicero, *De finibus* 1.32](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A2007.01.0036%3Abook%3D1%3Asection%3D32)). Hampden-Sydney College 출판실을 이끈 고전학자 Richard McClintock이 채움을 Loeb판 *De finibus*로 추적했다([UVA Classics](https://classics.as.virginia.edu/richard-mcclintock)).
>
> 여기에 두는 이유: 활자가 소프트웨어가 되면, 말이 생기기 전에 페이지를 짤 수 있음을 보여 주기 때문이다.

## 평행 궤도: 움직이는 서열

인쇄는 페이지를 얼린다. 필름은 서열을 얼리고 재생한다.

중국 수권은 안내된 단계별 보기의 더 이른 사례다. 영화관은 아니다. 고궁박물원은 수권을 오른쪽에서 왼쪽으로 천천히 펼친다고 적는다. 《청명상하도》는 24.8 × 528cm이며 500명 이상을 보여 준다. ([Palace Museum](https://www.dpm.org.cn/collection/paint/228226.html)) 대영박물관은 《여사잠도》 수권을 5–7세기로, 「고개지 이후」로 잡는다. ([British Museum](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1)) 수권을 「프로토 시네마」라 부르는 것은 우리 읽기지, 박물관의 것이 아니다.

중국 첫 영화는 보통 《정군산》이라 하며, 1905년경 풍태사진관에서 경극 배우 탄신페이와 함께 촬영했다고 하나, 동시대 1905년 기록은 알려진 바 없다. Cheng Jihua는 1956년에 1908, 1963년 《중국영화발전사》에서는 1905로 잡았고, 필름은 소실되었으며 널리 공유된 포스터는 현대 위조다. Li Zhen(2025, 중국영화자료원 경유)은 존재·상영 가능성이 매우 높다고 보지만 제목·제작자·연도는 열려 있다고 결론한다. ([Li Zhen, via China Film Archive](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03))

아래쪽 서양 날짜: Eadweard Muybridge가 1878년 6월 19일 Palo Alto에서 말 Sallie Gardner의 운동을 촬영했다. ([Library of Congress](https://www.loc.gov/item/97502309/)) Louis Le Prince가 1888년 10월 Leeds에서 *Roundhay Garden Scene*을 찍고, 1890년에 사라졌다. ([Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene); [National Science and Media Museum](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/)) Lumière 형제가 1895년 12월 28일 파리 Grand Café의 Salon indien에서 첫 유료 공개 상영을 열었다(그해 더 이른 비공개 시연 이후). ([Institut Lumière](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

## 메시지가 예전에 여행하던 방식

해저 케이블이 바다를 전선으로 바꿨다. 영국 해협을 가로지른 케이블은 1850년에 몇 시간 만에 실패했고, 이듬해 깐 장갑 케이블이 돌아갔다. 1865년 대서양 시도는 끊겼고, 1866년 *Great Eastern*이 지속 링크를 깔고 끊긴 1865년 케이블을 회수했다. ([Science History Institute](https://www.sciencehistory.org/stories/magazine/communicating-underwater/)) 첫 대서양 케이블은 1858년 8월에 메시지를 나른 뒤 실패했고, 진짜 신뢰할 수 있는 링크는 1866년 *Great Eastern*과 함께 왔다. ([Library of Congress](https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable))

아시아는 일찍 지도에 올랐다. Great Northern Telegraph Company가 1870–71년에 홍콩·상하이·나가사키·블라디보스토크를 잇는 케이블을 깔고, 1872년 1월 1일 개통했다. ([atlantic-cable.com, Great Northern](https://atlantic-cable.com/CableCos/GreatNorthern/))

그다음 중계가 해저를 떠났다. Bell Labs가 짓고 AT&T가 산 Telstar가 1962년 7월 10일 Cape Canaveral에서 발사되었다. 몇 시간 안에 프랑스로 첫 생방송 텔레비전 화상을 중계했고, 나중에 미국에서 본 첫 대서양 생방송 텔레비전과 전화·데이터·팩스를 날랐다. ([NASA](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/)) SpaceX는 FCC에 2019년 5월 24일 첫 Starlink 위성 60기를 발사했다고 알렸다. 성좌 크기는 한 숫자로 잡기엔 너무 자주 바뀐다. ([SpaceX filing, FCC](https://apps.fcc.gov/els/GetAtt.html?id=233157&x=))
