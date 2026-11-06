---
title: "なぜトランジスタでなければならなかったか"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — 基礎：機械計算から真空管へ"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "大きさ・電力・信頼性——管の三つの天井。固体スイッチングが避けられなかった理由"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

1950年代初頭までに、真空管は概念を証明していた。電子スイッチ、動く部品なし、マイクロ秒の速度。解けていなかったのは**規模**だ。管を一本足すたびに熱が増え、電力が増え、故障の目が増える。トランジスタが管を置き換えたのは、きれいなガジェットだったからではない。管の物理に硬い天井があり、計算がその先へ出なければならなかったからだ。

日本語版では、その天井を消費の側からも見る。研究室の論文だけでなく、ポケットに入るラジオから。

## TR-55 と TR-63：固体素子をポケットへ

ソニーグループの「商品のあゆみ−ラジオ」は、1955年の **TR-55** を「日本初のトランジスタラジオ。自社開発したトランジスタ5石を使用。ラジオのポータブル化の原点となった」と書く。当時のラジオは真空管の大型機で、家族が同じ部屋に集まって聴くものだった、と続く。1952年、創業者の井深はウェスタン・エレクトリックがトランジスタ特許を有料公開するという情報を知り、「自社製のトランジスタでラジオを作る」目標に挑んだ。1954年に日本初のPNPアロイ型トランジスタの試作に成功し、1955年にTR-55の本格的製造販売が始まった、と同社は記す。「自社製のトランジスタでラジオを作ったのは東通工が世界最初だった」とも明記する。([ソニー・商品のあゆみ−ラジオ](https://www.sony.com/ja/SonyInfo/CorporateInfo/History/sonyhistory-b.html))

同社のタイムカプセル記事は、1957年の **TR-63** を当時世界最小のトランジスタラジオとし、「ポケッタブル」という造語を初めて使い、本格的輸出の一号機となった、と書く。TR-55はポケットに入らなかったが、わずか二年でTR-63は入る大きさになり、価格は当時のサラリーマン平均月収に相当する13,800円だったにもかかわらず人気を呼び、輸出価格39.95ドル、年末には日航機をチャーターして米国へ空輸するほどだった、と続く。([ソニー・タイムカプセル TR-63](https://www.sony.com/ja/SonyInfo/CorporateInfo/History/capsule/07/))

筆者の解釈では、管の天井は計算機室だけの話ではなかった。ヒーターの熱とガラスの封筒は、家庭の娯楽機器でも同じ物理を課していた。固体素子は、その封筒を外した。

## 三つの制約、一つのボトルネック

**大きさ。** 真空管には、陰極・格子・陽極を分け、真空を保つガラスの封筒が要る。そこには大きさの床がある。トランジスタは固体——真空もガラスの封筒もない——で、大きさは加工の精度で決まる。スケールの曲線が違う。その曲線が、やがて一つのダイに数十億個を載せる（Phase 8）、と読むのは筆者の解釈だ。

**電力。** 管の陰極は熱電子放出のために熱されなければならない。スイッチしていなくてもヒーターは電流を食う。何千本も掛ければ、ENIAC の約150 kWになる。([Penn Engineering, ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) トランジスタにヒーター・フィラメントはない。空乏層やチャネルを変調してスイッチし、待機電力は無視できるほど小さい。トランジスタ化マシンが溶けずに稠密になれた、最大の理由の一つだ、という読みも解釈である。

**信頼性。** 管はフィラメント切れとシール劣化で壊れる——通常の熱サイクルに焼き付いた摩耗だ。固体のトランジスタにはフィラメントも、維持すべき真空シールもない。初期トランジスタにも実装や汚染の問題はあったが、**故障の仕組み**が、管のフィラメント切れのように日常運転に最初から焼き付いてはいない、と読むのも筆者の解釈だ。

## 数字を並べる

管の陰極ヒーターは、スイッチしていなくても電力を食う。何千本も掛ければ、ENIAC の約 150 kW になる。([Penn Engineering, ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) トランジスタにヒーター・フィラメントはない。筆者の解釈では、加工が良くなるほど大きさと電力が**下がる**曲線を管は持たない。その非対称が積み上がる。十本の管は扱える。一万八千本は ENIAC の保守の悪夢だ。([Computerworld / Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html)) 一万八千個のトランジスタは、数十億を載せる現代のダイでは誤差だ、という対比も解釈である。

## 次に来るもの

Computer History Museum の Silicon Engine は、1947年12月に John Bardeen と Walter Brattain がゲルマニウムの点接触デバイスでトランジスタ動作を達成した、と記す。([Computer History Museum, 1947 Point-Contact Transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)) デバイスが完成品で届いたわけではない。どうスイッチするか——半導体、ドーピング、バンドギャップ——を理解し、設計する必要が残っていた。それは「なぜ起きなければならなかったか」とは別の主題だ。Phase 2はそこから始まる。

**出口：** Bardeen、Brattain、Shockley の Bell Labs トランジスタ論文（1940年代末〜50年代初頭）——管の天井を破った固体スイッチの一次物理。
