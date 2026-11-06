---
title: "TCP/IP と近代インターネット・スタック"
weight: 48
date: 2026-01-01
draft: false
phase: "6 — ネットワーキングの進化"
series_index: 47
aliases:
  - /posts/41-tcp-ip-and-the-modern-internet-stack/
  - /posts/46-tcp-ip-and-the-modern-internet-stack/
  - /posts/47-tcp-ip-and-the-modern-internet-stack/
tags: []
summary: "異種の網を一つのインターネットワークへ——層、カプセル化、信頼は上位に置く"
image_prompt: "Layered TCP/IP stack diagram with encapsulation headers shown packing downward, clean protocol textbook style"
video_prompt: "25-second animation: application data gaining TCP, IP, and link headers as it descends the stack, clean layered animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model + encapsulation + three-way handshake"
---

ARPANET（第46章）はパケット交換を証明した。Ethernet（第47章）はローカルの線を標準化した。どちら単独でも、*違う*網——違う媒体、違うアドレス——を、どの二機械も使える一つのインターネットワークへ縫う方法は言わない。Vint Cerf と Bob Kahn の TCP/IP スイートがそれを解いた。いまも近代インターネットが乗る基盤だ。Wikipedia は、Internet protocol suite を Cerf と Kahn の設計に遡る通信プロトコルの組とし、IP と TCP を中核とする、と書く。([Wikipedia — Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite))

## 層モデル

TCP/IP は、PCIe のスタック（第40章）がやったように関心を分ける——インターネットワーキングの尺度で。**リンク**はローカル・ホップ——Ethernet、Wi-Fi、ファイバ——を扱う。**インターネット（IP）**は、それらのリンクを*またぐ*普遍的なアドレスとルーティングを与える；IP パケットはどの媒体が運ぶかを気にしない。**トランスポート（TCP または UDP）**は、IP の上に信頼できる順序付き配送（TCP）か、最小オーバーヘッドのベストエフォート（UDP）かを提供する。**アプリケーション**は HTTP、DNS、SMTP などが座り、合うトランスポートを選ぶ。

## カプセル化

下へ動くデータは各層でヘッダを得る——アプリケーション・バイトの下に TCP/UDP、そのセグメントの下に IP、そのパケットの下にリンク・ヘッダ（しばしばトレイラも）。向こう端で過程は逆：各層が自分のヘッダを剥ぎ、いま読んだもの（ポート、アドレス）で残りを上へ渡す。

## 信頼できない下地の上の TCP

IP は明示的にベストエフォート——配送の約束なし、順序の約束なし、破棄は許される。TCP は、シーケンス番号と確認応答（ACK が来なければ再送）で、その上に信頼できる順序付きバイト列を建てる——PCIe のデータリンク層（第40章）と同じ信頼性の*種*を、一本の専用リンクではなく、信頼できないインターネットワーク全体へ伸ばしたものだ。RFC 791 と RFC 793 が、それぞれ IP と TCP の一次仕様である（1981年9月）。([RFC 791](https://www.rfc-editor.org/rfc/rfc791); [RFC 793](https://www.rfc-editor.org/rfc/rfc793))

接続は三方ハンドシェイクで始まる：SYN（クライアントがシーケンス番号を提案）、SYN-ACK（サーバが確認し自分の番号を提案）、最後の ACK。それからアプリケーション・データが流れる——両側が先に同期した状態を共有するための、小さな意図的コストだ。

## 一つの網のプロトコルからスタックへ

ARPANET はもともと自前のホスト間プロトコル（NCP）を話し、TCP/IP ではなかった。Cerf と Kahn の賭けはより大きかった：*多くの*パケット網をインターネットできる*プロトコル・スタック*なので、トランスポートとローカルの線は別々に進化できる。ARPANET 自体での実務的切り替えは、1983年1月1日の「フラッグ・デー」——NCP が切れ、TCP/IP が必須になった——だった。Wikipedia が記す、稀な硬い切り替えだ。([Wikipedia — Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite))

アプリケーション・プロトコルはその下地があったから積めた。DNS（[RFC 1034](https://www.rfc-editor.org/rfc/rfc1034) / [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)）が名前を規模で使え、メールとウェブ（SMTP、HTTP など）は、アドレスと再送を再発明せずに信頼ストリームのクライアントとして TCP に乗った。パターンが要点だ：各層が一つの制約を買い、上の層がそれを仮定できるようにする。RFC のカタログではなく、積み重ねの物語だ。

## なぜこの設計が勝ったか

荷重を支える仮定は、下位の網が異種で信頼できないので、保証はどの物理リンクにもではなく上位層に置く、というものだった。それは、一つの物理標準に合意したことのない組織が、何十年も違う技術から縫い合わせたグローバル・インターネットワークに合った——だから TCP/IP はいまも近代インターネットのほぼ全体の下に座り、次のデータセンタ網も含む。

**出口：** [RFC 791](https://www.rfc-editor.org/rfc/rfc791)（Internet Protocol）と [RFC 793](https://www.rfc-editor.org/rfc/rfc793)（Transmission Control Protocol）——このスタックのアドレス／ルーティングと信頼トランスポートの半分の一次仕様。

{{< lab type="vm-terminal" >}}
