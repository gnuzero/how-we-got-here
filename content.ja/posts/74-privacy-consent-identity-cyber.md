---
title: "プライバシー・同意・アイデンティティ・サイバー"
weight: 74
date: 2026-01-01
draft: false
phase: "11 — プラットフォーム・ガバナンス・閉じ"
series_index: 73
aliases:
  - /posts/67-privacy-consent-identity-cyber/
  - /posts/73-privacy-consent-identity-cyber/
tags: []
summary: "開いた線上の敵対——隔離、公開鍵、プロトコルとしてのアイデンティティ、同意のスコープ"
image_prompt: "Layered diagram of isolation, public-key crypto, identity protocols, and consent tokens on a shared network, clean security-engineering style"
video_prompt: "20-second animation: a capability token scoped and revoked while traffic stays encrypted, clean technical animation"
schematics: "Diagram: protection principles + TLS/OAuth consent path"
---

戦時暗号（第73章）は、専用機械室を持つ国家敵対者に対する秘密だった。開いたインターネットは別の工学問題を出す：*多くの*当事者が線・ホスト・プラットフォームを共有し——その一部は敵対的で、好奇で、あるいは単に利用者より大きい。プライバシー、同意、アイデンティティ、サイバーセキュリティは、それがコードとプロトコルで進化したときのその問題の名だ。政策パンフレットではない。

## 隔離が先に来た

「プライバシー製品」の前に、**保護**があった。Jerome Saltzer と Michael Schroeder の 1975年サーベイ [*The Protection of Information in Computer Systems*](https://web.mit.edu/Saltzer/www/publications/protection/) は、いまも工学の法として読める設計原則を枠づけた：最小特権、完全な仲介、フェイルセーフ既定、機構の経済。仮想メモリ（第31章）とコンテナ（第32章）は、のちの同じ賭けの実例だ——ハードとカーネルが強制する境界を引き、一つのプログラムが他を気軽に読めないようにする。

出口：Saltzer & Schroeder（1975）。

## 公共網上の暗号

共有網は古い配達人鍵模型を崩した。Whitfield Diffie と Martin Hellman の 1976年論文 [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf) は、公開鍵合意を研究対象にした：盗聴者が交換を聞いても、二者が共有秘密を立てられる。Ronald Rivest、Adi Shamir、Leonard Adleman が RSA（1977/78）で続いた——消息と一緒に旅できる公開暗号と署名。いまのウェブの TLS は、その線の配備された子孫だ（長いプロトコル改訂の跡つき）であり、別の道徳カテゴリではない。([Wikipedia — Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange); [Wikipedia — RSA (cryptosystem)](https://en.wikipedia.org/wiki/RSA_(cryptosystem)); [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446))

出口：Diffie–Hellman（1976）；RSA 論文；近代の扉としての [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446)（TLS 1.3）。

## アイデンティティはプロトコル問題だ

網上の「あなたは誰か？」は雰囲気ではない——認証と認可の機械だ。パスワードは初期の安い認証子であり、なお侵害面だ。Needham と Schroeder の認証仕事、Kerberos（MIT Project Athena；Steve Miller、Clifford Neuman ら）、のちの公開鍵証明書が、アイデンティティを機械が検査できる*検証可能な主張*へ変えた。OAuth と OpenID Connect（IETF／OpenID Foundation 仕様）はそれから「誰かを証明する」と「このアプリに狭い能力を与える」を分けた——曖昧な約束ではなく、スコープ付きトークンとしての同意。([Wikipedia — Kerberos (protocol)](https://en.wikipedia.org/wiki/Kerberos_(protocol)); [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749))

名指しの制約：検証者、資格情報、または回復経路が、守る資産より弱いとき、アイデンティティ系は工学として失敗する。出口：MIT の Kerberos 史；[RFC 6749](https://www.rfc-editor.org/rfc/rfc6749)（OAuth 2.0）。

## 権力へのインタフェースとしての同意

同意は、系が境界を越えて行動する許可を要するところならスタックのどこにでも現れる：ブラウザの Cookie ジャーと same-origin policy（ウェブ・プラットフォームの隔離物語）、装置の許可プロンプト、プラットフォーム上のスコープ付き API トークン。工学の問いは常に同じだ——*どの能力が、誰に、どれだけ長く与えられ、取り消せるか？*——UI が「Accept」と言ってもヘッダが `Authorization` と言っても。第72章のガバナンス層が名前と番号を決め；この層が*あなたの代わりに誰が使ってよいか*を決める。

## サイバーセキュリティ：敵対的システム工学

サイバーセキュリティは、網、サプライチェーン、ときに運用者が敵対的だと仮定したときに起きることだ。上のすべて——隔離、暗号、アイデンティティ——を攻撃者模型の下で再利用する：マルウェア、フィッシング、サイドチャネル、脆弱な依存、規模の誤設定。学問のつなぎ組織は恐怖ではない；フィードバックだ。脆弱性は名指され（CVE）、パッチされ、回帰テストされ；悪用はレート制限、サンドボックス、監視で迎えられる。Dorothy Denning の初期侵入検知と、のちの CERT 協調模型は一種の種だ：攻撃を、系を形作る信号として扱う。([Wikipedia — Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures))

出口：CVE プログラム文書；Saltzer/Schroeder を基礎として引用する古典的セキュリティ工学テキスト。

## なぜ旅の遅くに属するか

OS 隔離、網、分散系、AI 基盤を本が建てるまで、プラットフォーム上のプライバシーを正直に語れない。それらの章が下地だ。本章は、その上に乗る敵対的・同意形の制約に名を付ける——第76章のプラットフォーム合成が、プライバシー工学を付録ではなく一級の層として扱えるように。
