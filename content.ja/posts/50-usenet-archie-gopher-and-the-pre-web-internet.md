---
title: "Usenet・Archie・Gopher——ウェブ前のインターネット"
weight: 50
date: 2026-01-01
draft: false
phase: "7 — 分散システム・ビッグデータ・オーケストレーション"
series_index: 49
aliases:
  - /posts/43-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/48-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/49-usenet-archie-gopher-and-the-pre-web-internet/
tags: []
summary: "見つけて、話す——Usenet、Archie、Gopher、IRC、そして両方を束ねた消費者ポータル"
image_prompt: "Historical illustration of a Usenet hierarchy, Archie prompt, Gopher menu, IRC channel list, and a Yahoo-style portal homepage as one arc, clean vintage internet-history infographic style"
video_prompt: "25-second animation: a Usenet post propagating, an Archie query, a Gopher drill-down, IRC messages in a channel, then a portal homepage bundling directory + chat + mail, clean historical technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: find (Archie/Gopher) + talk (Usenet/IRC) converging into consumer portals, then into the open web"
---

TCP/IP（第48章）は、インターネットに普遍的なアドレスとトランスポートの基盤を与えた。その*上*で、World Wide Web が支配的インターフェースになるまでのおよそ二十年、走っていたのは二つの顔を持つ一つの弧だった：**何かを見つける**、それから**誰かと話す**。分散議論、初期検索、メニュー駆動の閲覧、リアルタイム・チャット、そして最後に消費者ポータルが、当時使える技術でその弧の一片を解いた。

## Usenet：中央サーバなしの分散議論

Usenet（Duke の Tom Truscott と Jim Ellis、構想 1979、公開 1980）は近代ウェブより十年以上前だ。Wikipedia は、Usenet を分散議論システムとし、参加サーバが store-and-forward でメッセージを交換する——最初は UUCP ダイヤルアップ、のち NNTP（1986）経由の TCP/IP——と書く。([Wikipedia — Usenet](https://en.wikipedia.org/wiki/Usenet)) 投稿は単一の制御点なしに伝播する。階層ニュースグループ（`comp.lang.c`、`rec.arts.movies`、…）が、中央モデレーターが木を押し付けなくても話題ごとに自己組織化する。

### 日本：fj と JUNET

英語版の Usenet 節に、日本語版は日本の階層を添える。日本語版 Wikipedia は、`fj.*` を主に日本の参加者が日本語で投稿する広域配布ニュースグループのトップカテゴリとし、名前は From Japan を意味する（for Japanese や From JUNET の略ではない）、と書く。日本で最初の広域配布ニュースグループ・カテゴリであり、当初 `fj.*` の購読は JUNET への参加とほぼ同義で、JUNET および初期インターネット・コミュニティの主要な知識交換手段だった、ともある。([Wikipedia — fj (ニュースグループ)](https://ja.wikipedia.org/wiki/Fj_(%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97))) WIDE プロジェクト 1991年度報告書は、JUNET が UNIX の通信技術の上に電子メールと USENET 形式の電子ニュースを提供した、とし、fj ニュースグループの記事を東工大と NTT の保存分から集め CD-ROM 化した——「fj ニュースグループは、初期の JUNET の発展に大きな役割を果たした。特に日本で IP network が発達するまでは、ネットワークの運営、アナウンス、ソフトウエアの配布等が全てニュースを中心にして行われた」と記す。([WIDE 1991 report PDF](https://www.wide.ad.jp/About/report/pdf1991/part3.pdf)) Usenet の分散伝播が、日本では JUNET 上の fj として運営と知識交換の背骨になった、と読むのは筆者の解釈である。

## Archie：最初の検索ツール

近代検索エンジンに似た何かの前、特定ファイルを見つけることは、どのホストが持つかを知ることだった。Archie（1990、McGill；Alan Emtage、Bill Heelan、Peter Deutsch）は狭い切り口を取った：既知の FTP サーバを定期的にポーリングし、公開ファイル名を索引し、利用者が索引を検索する。Wikipedia は、Archie を最初のインターネット検索エンジンの一つとし、FTP アーカイブ上のファイル名を索引した、と書く。([Wikipedia — Archie (search engine)](https://en.wikipedia.org/wiki/Archie_(search_engine))) 中身は対象外——名前だけ——だが、サーバを当てるより大きな一歩だった。

## Gopher：ウェブ前のメニュー駆動閲覧

Gopher（1991、University of Minnesota；Mark McCahill ら）は階層的・メニュー駆動のナビを提供した：文書、サブメニュー、他 Gopher サーバへのリンクを、自由形式ハイパーリンクではなく番号で選ぶ。Wikipedia は、Gopher を分散文書検索・取得プロトコルとし、1990年代前半にウェブの競合だった、と書く。([Wikipedia — Gopher (protocol)](https://en.wikipedia.org/wiki/Gopher_(protocol))) ウェブより制約が強く——そして短いあいだ、インターネットの情報空間がどう組織されるかの本気の候補だった。

## IRC：いま起きるピアの話

Usenet は*伝播する*話だった。IRC は*いま起きる*話だった。1988年8月、Oulu 大学の Jarkko Oikarinen が Internet Relay Chat を建て、サーバがフィンランドから北米へリンクしていった。プロトコルはのち RFC 1459（Oikarinen and Darren Reed、1993）に落ちた。([RFC 1459](https://www.rfc-editor.org/rfc/rfc1459); [Wikipedia — IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat))

**出口：** [RFC 1459](https://www.rfc-editor.org/rfc/rfc1459)——IRC プロトコルの一次仕様。

## 消費者ポータル：見つけと話を束ねる

1990年代半ばまでに、上の開いた道具はなお、クライアントをどこへ向けるかを知っていることを仮定した。消費者ポータルは別の賭けを売った：新参者が弧を自分で組み立てなくてもよいよう、ディレクトリ検索・ニュース・メール・チャットを*束ねた*一つのホームページ。

Yahoo はその*種*の種だ。1994年、Stanford の Jerry Yang と David Filo が "Jerry and David's Guide to the World Wide Web"——人手キュレーションの階層ディレクトリ——を始め、Yahoo! と改名し、ディレクトリの上に検索やメールなど粘着サービスを重ねるポータルへ育てた。([Wikipedia — Yahoo!](https://en.wikipedia.org/wiki/Yahoo!)) 同類を導いて止める：AOL の壁庭、Excite、Lycos など同じ*カテゴリ*——大衆向けに見つけ→話をパッケージした注意のハブ——であり、二社目の百科ではない。ポータル時代は、上のプロトコルの上に座る製品史として扱い、置き換えとしては扱わない。

## なぜ開いたウェブがメニューとハブを追い抜いたか

ウェブの中核の一手——固定メニュー階層や一つのポータル分類に縛られず、*どの*他文書へも、どこへでも指せるハイパーリンク付き HTML——は、Gopher メニューやキュレーション・ディレクトリより柔軟な見つけ模型だった。Netscape Navigator（1994）が、その模型を研究道具から主流利用へ押した。ポータルは弧をパッケージし続け；開いたハイパーリンク・グラフ（と、次章のクローラ規模検索）が*見つけ*の半分を勝ち続けた。

Gopher は主流利用から薄れた。Usenet と IRC は完全には消えなかった——たいていの人の最初の扉であるのを止めただけだ。Archie のファイル名索引は、次章が分散ウェブ全体の索引へスケールさせる*種*の種だった。

## なぜ本シリーズに属するか

見つけと話は脇のトリビアではない。Usenet の分散伝播（と日本の fj／JUNET）、Archie の分散ホスト上の索引問題、IRC の連合ライブ部屋、それを製品化するポータルの賭けは、次章がより大きな尺度で問う同じ*カテゴリ*の問いとして再浮上する：中央カタログのない空間をどう検索し、線が共有されたあと人はどう会話に留まるか？

{{< lab type="vm-terminal" >}}
