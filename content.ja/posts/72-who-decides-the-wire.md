---
title: "誰が線を決めるか"
weight: 72
date: 2026-01-01
draft: false
phase: "11 — プラットフォーム・ガバナンス・閉じ"
series_index: 71
aliases:
  - /posts/64-who-decides-the-wire/
  - /posts/70-who-decides-the-wire/
  - /posts/71-who-decides-the-wire/
tags: []
summary: "パケットの動きの下——番号、名前、符号化の共有台帳"
image_prompt: "Infographic of RFC, IANA, ICANN, Unicode as shared ledgers for numbers, names, encodings, clean governance diagram style"
video_prompt: "20-second animation: identifiers flowing from registries into packets and documents, clean technical motion graphics"
schematics: "Diagram: numbers / names / encodings governance map"
---

ARPANET（第46章）と TCP/IP（第48章）は、パケットがどう動くかを解いた。それだけでは、より静かな問いに答えない：*ビットが何を意味するかを誰が言ってよいか？* ポート 80、IPv4 接頭辞、`.com`、ก の符号位置——遠い運用者が同じ識別子を同じように扱わなければ、どれも動かない。インターネットのガバナンス物語は、その合意の物語だ：網の上の議会ではなく、**番号**、**名前**、**符号化**のための共有台帳の組だ。

## 制度の前の文書

最初の協調道具は文書系列だった。1969年4月、Steve Crocker は [RFC 1](https://www.rfc-editor.org/rfc/rfc1)——*Host Software*——を、ARPANET 研究コミュニティ向けの作業ノートとして出した。「Request for Comments」であり、「勅令」ではない。Jon Postel がほぼ三十年編集し、非公式メモを、インターネットが実際にどう動くかの耐久する公開記録へ変えた。出口：[RFC Editor history](https://www.rfc-editor.org/history/)。

研究コミュニティが廊下の会議を超えると、Internet Engineering Task Force（IETF）を育てた。荷重を支える句は Dave Clark のものだ：*rough consensus and running code*——標準は投票ではなく出荷で身を立てる。IETF はインターネットを所有しない；運用者が配備する何かへプロトコルを論じ込む過程を所有する。出口：[ietf.org](https://www.ietf.org/)。

## 番号：誰かが識別子を渡さねばならない

パケットはプロトコル番号、ポート番号、アドレス・ブロック、ASN、メディア型を運ぶ——二つの集団が違う意味に同じものを鋳造すれば無価値な識別子だ。何年もその台帳は一か所に住んだ：Internet Assigned Numbers Authority（IANA）。Jon Postel（Joyce Reynolds が長年の連絡点）が UCLA、のち USC/ISI の研究契約の下で実務サービスとして回した。IANA は一種の種だ：実装が二国間交渉なしに相互運用できるよう、プロトコル・パラメータの中立レジストリ。([IANA](https://www.iana.org/))

網が一冊のノートを超えてスケールすると、番号資源は*種*ごとに分かれた。プロトコル・パラメータは IANA に残った。IP アドレス空間は地域インターネット・レジストリへ——北米の多く向け ARIN（1997）；RIPE NCC、APNIC、LACNIC、AFRINIC は他地域向けの同じ*種*で、地域が選んだところではその下に国・地域レジストリ（NIR）が座る。型が要点だ：希少で一意の識別子には、誰もが指差せる管理者が要る。出口：[iana.org](https://www.iana.org/)、[arin.net](https://www.arin.net/)。

## 名前：人には言葉が要り；機械には一意性が要る

Paul Mockapetris の DNS 仕様（[RFC 1034](https://www.rfc-editor.org/rfc/rfc1034)、[RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)）は、階層名をアドレス・ファブリック上の分散ルックアップ系へ変えた。名前は生の番号がそうでない仕方で政治的だ：人は言葉で論じる。Jon Postel の [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591) は、初期ドメイン政策をスチュワードシップとして枠づけた。

1990年代末までに、米国政府はそれらの協調機能を単一の研究契約から出したがった。ICANN（Internet Corporation for Assigned Names and Numbers）は 1998年に発足し——暫定議長 Esther Dyson——名前と番号の政策の制度的席を持ち、IANA はその傘下で運用レジストリとして続いた。ICANN をまた一種の種として読め：共有名前空間の安定と一意性が仕事であり、アプリケーションの勝者を選ぶことではない。([ICANN](https://www.icann.org/); [Wikipedia — ICANN](https://en.wikipedia.org/wiki/ICANN))

## 符号化：ペイロードは同じ字形を意味せねばならない

両端がバイト列が*何か*で合意しないと、相互運用は静かに失敗する。Unicode Consortium（1991年設立；単一文字集合を要した企業横断の Joe Becker、Mark Davis らの初期仕事）は、抽象文字から符号位置への共有写像を維持する——タイ語、ラテン、絵文字が、各アプリが自前の字母表を発明せずに一つの線を共有できる理由だ。UTF-8 がそのレパートリの支配的な*線上*符号化になった。([Unicode Consortium](https://www.unicode.org/); [The Unicode Standard](https://www.unicode.org/standard/standard.html))

## 同じ種の親族

一文を稼ぐ同輩がいくつか——同じ*種*の共有意味であり、標準団体ツアーではない：

- **W3C と WHATWG** — Tim Berners-Lee が 1994年に World Wide Web Consortium を設立しウェブ・プラットフォーム標準をスチュワード；WHATWG がのち、ブラウザ・ベンダーがより速い反復を要したとき生きた HTML／DOM 仕様を運んだ。同じ*種*：ブラウザで文書と API が何を意味するかを誰が定義してよいか。
- **IEEE** — IEEE 802 が、Ethernet（第47章）と Wi-Fi がリンク層で専有の島方言でない理由だ。
- **ISO と同輩** — 調達・安全・国家機関が求めるところで、正式な国際標準が RFC 世界の横に座る；インターネットは多くを RFC で先に出荷し、のちに調和させた。

## なぜ旅に属するか

第46–48章は工学の賭けだ：パケット、層、信頼できない下地。本章はそれらの下の市民の賭けだ：**共有意味はインフラだ**。誰か（とある過程）が番号・名前・符号化を決めなければ、新しい網はどれも私的言語だ。上の扉が一次——RFC、レジストリ、コンソーシアム頁——だ。

任意の脇道：その共有線の上で人がどう*見つけ*、*話した*か（第50章）、あるいは戦時暗号が秘密を保てる機械をどう強いたか（第73章）。主背骨はパケット → 系 → シリコン → 注意のまま；これはレンズを広げる拍で、取っても飛ばしてもよい。
