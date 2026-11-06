---
title: "プレスからピクセルへ"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — 分散システム・ビッグデータ・オーケストレーション"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "ページと活字がソフトウェアになるとき——王選のレーザー写植が先；西の PostScript と CSS は下に"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[木版から活字へ]({{< relref "02-woodblock-to-movable-type" >}})は、ページを物理的なもの——インク、活字、紙——として残した。このページは、ページがファイルになるところだ。中国のレーザー写植が、問題を表へ出した事例である。

## なぜ中国が問題を強いたか

ラテン字体には数十種の活字で足りる。中国語の新聞には数万の字が要り、各々が複数の大きさとスタイルで描かれる。すべてを密な点の格子として蓄えると、1970年代末の計算機には収まらない。王選はのちに、字数の多さがチームを輪郭で字形を記述する方向へ押し、データ量を切らせた、と書いた。([王選, 1999, 新浪](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## 王選：レーザー写植

中国計算機学会の歴史項目が工学の数字を与える。五号字では、情報が約 10,000 ビットから平均約 800 ビットへ——およそ 12 分の 1。同じ方法で字形を拡大縮小でき、全体の節約は約 500 倍に達し、約 4 MB で約 60 万の字頭を持てた、とある。これらは資料中の別々の数字であり、800 ビットは圧縮した五号形であって、4 MB を 60 万で割ったものではない——掛け合わせてはいけない。最初の新聞見本は 1979年7月27日、システムで組んだ最初の本『伍豪之剑』は 1980年9月15日付。([CCF Computing History, Huaguang / Founder](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

同じ 1999年の文章で、王はチームが 1986年に自前のページ記述形式を定め、1990年から 1994年まで遠隔印刷工場へ送るページをそれが運んだ、と言う。1990年までに PostScript が標準になると見越し、1993年秋に中国初の PostScript Level 2 インタプリタと呼ぶものを出した、とも。王自身の叙述である。([王選, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## 台湾：並行する最初

台北の聯合報は 1982年9月16日に電脳組版システムを起動した。紙面は、中国語日刊としてコンピュータ組版を採用した最初、と書く。大陸のレーザー写植線とは別に育った。([聯合報紀念冊](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## 日本：写真製版と写真植字

英語版の弧は、ページがソフトウェアになるところへ漢字の写植を置く。日本語版は、同じ弧の日本側——活字の物理的制約から写真へ——を印刷博物館の企画展で添える。印刷博物館は、小川一眞（1860–1929）を中心に、明治の写真製版（ネガとポジの原理で印刷の版をつくる方法）が視覚メディアをどう変えたかを展覧した、と書く。コロタイプと網目版で製作した印刷物を紹介する、ともある。([印刷博物館 — 明治のメディア王　小川一眞と写真製版](https://www.printing-museum.org/collection/exhibition/t20230801.php)) 同館の「写真植字の百年」展は、日本語では膨大な金属活字の活版に代わり、写真工学的原理で印字する写真植字が登場したことが画期的だった、とし、1924年7月24日に日本で最初の特許が出願された、と印刷博物館ニュースが記す。石井茂吉と森澤信夫が機械とレンズ・文字を分担して実用化した、ともある。([印刷博物館 — 写真植字の百年](https://www.printing-museum.org/collection/exhibition/t20240921.php); [印刷博物館ニュース vol.94](https://www.printing-museum.org/etc/pnews/09401.php)) 漢字の密度問題が中国で輪郭圧縮を強いたように、日本語の字種の多さが写真植字を「最適」にした、と館の文は読む——大陸のレーザー線と並行する、別の橋渡しだ、と置くのは筆者の解釈である。

## ページが何になったか

活字とレイアウトがソフトウェアに住むと、「プレス」はレンダラだ。Adobe は 1984年に PostScript を出した：ページをプリンタへ記述する言語。([CHM, PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) ウェブでは、CSS が画面に同じ仕事をする。セレクタ、ボックスモデル、カスケードが文書をレイアウトにし、言葉は見た目から分かれたまま。([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

中国の圧縮と西のページ記述の両線は、同じ場所で終わる：人が手で活字を組まなくても、機械が描き直せるページ。

> **余談：何も意味しないプレースホルダ**
>
> デザイナーが *lorem ipsum* と呼ぶ埋め草は、キケロ『善と悪の究極について』のラテンを掻き混ぜたもの；一節は *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…* で始まる。Hampden-Sydney College のラテン教授でち出版部長だった Richard McClintock が出典を見つけた。埋め草を辿れたのは Letraset の転写シートまで。Aldus PageMaker がソフトに同梱した。1500年代に印刷屋が掻き混ぜた、とよく繰り返される話は McClintock の推測であり、記録ではない。([The Straight Dope](https://www.straightdope.com/21343427/what-does-the-filler-text-lorem-ipsum-mean))
>
> ここに置くのは、活字がソフトウェアになったら、言葉が存在する前にページを組める、と示すからである。

## 並行する軌道：動く列

印刷はページを凍らせる。映画は列を凍らせて再生する。

中国の手巻は、段階的に導く眺めの早い例だが、映画ではない。故宮博物院は手巻を右から左へゆっくり解くものとし、『清明上河図』は 24.8 × 528 cm で 500 人以上を描く、と書く。([故宮博物院](https://www.dpm.org.cn/collection/paint/228226.html)) 大英博物館は『女史箴図』巻を 5–7 世紀、「顧愷之に倣う」と年代づける。([British Museum](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1)) 手巻を「プロト映画」と呼ぶのは博物館ではなく、本書の読みである。

中国初の映画は、通常、1905年ごろ豊泰照相館で譚鑫培を撮った『定軍山』とされるが、同時代の 1905年記録は知られていない。程季華は 1956年に 1908年、1963年『中国電影発展史』で 1905年とし；フィルムは失われ、広く共有される番付は現代の偽作だ。李鎮（2025、中国電影資料館経由）は、存在し上映された可能性は高いが、題・作者・年はなお開いている、と結論する。([李鎮, 中国電影資料館](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03))

### 日本：シネマトグラフの上陸

英語版の映画節に、日本語版は日本側を添える。京都市の案内は、明治三十年（1897）、稲畑勝太郎が京都電燈株式会社の中庭（現・立誠小学校跡）で日本初のシネマトグラフ試写実験に成功した場所だ、と書く。1896年にパリでリュミエール兄弟の装置と興行権・フィルムを買い、技師コンスタン・ジレルを伴って帰国した、とも。([京都市観光Navi — 日本映画発祥の地](https://ja.kyoto.travel/tourism/single02.php?category_id=9&tourism_id=2122)) 日本語版 Wikipedia の活動写真項目は、1897年2月15日に稲畑が大阪・南地演舞場でシネマトグラフを上映したのを日本初の「映画興行」とし、同年の神戸のキネトスコープ興行など先行する見せ物も記す。([Wikipedia — 活動写真](https://ja.wikipedia.org/wiki/%E6%B4%BB%E5%8B%95%E5%86%99%E7%9C%9F))

西の日付を下に置く：Eadweard Muybridge は 1878年6月19日、パロアルトで馬 Sallie Gardner の動きを撮った。([Library of Congress](https://www.loc.gov/item/97502309/)) Louis Le Prince は 1888年10月、リーズで *Roundhay Garden Scene* を撮り、1890年に姿を消した。([Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene); [National Science and Media Museum](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/)) リュミエール兄弟は 1895年12月28日、パリ・グラン・カフェの Salon indien で有料の公開上映を行った（同年の私的上映のあと）。([Institut Lumière](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

## メッセージがかつてどう旅したか

海底ケーブルは海を線にした。英仏海峡のケーブルは 1850年に数時間で失敗し；翌年の装甲線が動いた。1865年の大西洋試みは切れ；1866年に *Great Eastern* が持続するリンクを敷き、切れた 1865年ケーブルも回収した。([Science History Institute](https://www.sciencehistory.org/stories/magazine/communicating-underwater/)) 最初の大西洋ケーブルは 1858年8月に消息を運び、そのあと失敗した；本当に信頼できるリンクは 1866年、*Great Eastern* がケーブルを運んだときだ。([Library of Congress](https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable))

アジアは早く地図に載った。Great Northern Telegraph Company は 1870–71年に香港・上海・長崎・ウラジオストクを結ぶケーブルを敷き、1872年1月1日に交通を開いた。([atlantic-cable.com, Great Northern](https://atlantic-cable.com/CableCos/GreatNorthern/))

それから中継が海底を離れた。Bell Labs が造り AT&T が払った Telstar は 1962年7月10日、ケープカナベラルから打ち上げられた。数時間以内にフランスへ最初の生テレビ映像を中継し、のちアメリカで見られた最初の大西洋横断生テレビ、電話、データ、ファクスも運んだ。([NASA](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/)) Starlink の最初の 60 機は 2019年5月23日（米東部；UTC では 24日）に打ち上げられた；星座の大きさは一数字に固定できないほど変わる。([Space.com](https://www.space.com/spacex-launches-60-starlink-internet-satellites.html))
