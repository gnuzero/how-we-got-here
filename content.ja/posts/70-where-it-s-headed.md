---
title: "どこへ向かうか"
weight: 70
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 69
aliases:
  - /posts/62-where-it-s-headed/
  - /posts/68-where-it-s-headed/
  - /posts/69-where-it-s-headed/
tags: []
summary: "チップレット AI、パッケージに近い光学、メモリ内計算——制約を名指し、構造を変える"
image_prompt: "Triptych of chiplet AI package, co-packaged optics, and processing-in-memory array, clean forward-looking technical infographic"
video_prompt: "20-second animation: three panels showing packaging, optics nearer silicon, and compute inside memory arrays, clean motion graphics"
schematics: "Diagram: chiplet+HBM package + CPO sketch + PIM concept block"
---

本シリーズは歯車とリレー——近代の尺度では原始的だが、のちのどの停留も洗練した同じ論理の形（命令、実行、状態）——で開いた。閉じは後ろではなく前を見る：AI ハードが実際に動いている三つの方向で、各々がすでに本シリーズにある考えの延長だ。発明したロードマップではない——背骨がすでに教えた応答の*種*だけだ。

## チップレット AI アクセラレータ

第59章はチップレットを歩留まりの答えとして扱い；第62章は計算の横の帯域のための HBM パッケージングを扱った。自然な組み合わせは両方だ：分解した計算チップレット——ときに違う特化——に積んだ HBM を足し、一つのパッケージ内の高密度インターポーザまたは先端基板リンクで結ぶ。歩留まりと特化のために分解し；分割が新しいインターコネクトの壁にならないようパッケージに使う。同じ型を、AI シリコンへ適用する。([Wikipedia — Chiplet](https://en.wikipedia.org/wiki/Chiplet); [Wikipedia — High Bandwidth Memory](https://en.wikipedia.org/wiki/High_Bandwidth_Memory))

## パッケージに近い光学

ラック内の短いリンクはなおしばしば銅だ。ラック間と多くの葉–スパイン AI ファブリックは、すでに着脱トランシーバ付き光ファイバを使う。電気 SerDes はなお到達、電力、密度の限界に直面する。シリコン・フォトニクスと co-packaged optics は、E/O 変換をスイッチまたは GPU パッケージへ押し——長い電気トレースと離散プラガブルに対し、SerDes／DSP 電力と到達コストを切る。Wikipedia は、シリコン・フォトニクスをシリコン上に光子回路を統合する技術とし、データセンタ光通信への応用を挙げる。([Wikipedia — Silicon photonics](https://en.wikipedia.org/wiki/Silicon_photonics)) 「光を初めて導入する」のではなく、第64章と第69章が GPU とラックのあいだの帯域がますます縛ると言った場所へ、変換を移すことだ。

## メモリ内処理

第42章のメモリ・ウォールは、HBM（第62章）と重み固定シストリック・データフロー（第66章）を通じて響いた——移動を最小化するか、より広くする。Processing-in-memory はさらに進む：メモリ・アレイの*中*でいくらかの計算をし、移動の一部をそもそも起きなくする。広く配備された技術としてはまだ早い；なお、階層をまわりに精巧にするだけでなく、壁を根で攻撃する本物の試みだ。([Wikipedia — In-memory processing](https://en.wikipedia.org/wiki/In-memory_processing))

## 連続する糸

各方向はまたシリーズの型だ：縛る制約を正確に名指し、同じ壁をより強く押すだけでなく構造を変える。機械スイッチが縛ったときリレーは管へ；電力と信頼が縛ったとき管はトランジスタへ；クロックの壁が縛ったとき単コア・スケーリングはマルチコアへ；歩留まりが縛ったときモノリシック・ダイはチップレットへ。メモリ移動——計算スループットだけではない——が最大の AI ワークロードを縛っており、だからパッケージング、パッケージ近くの光学、メモリにより近い計算が生きた答えだ。

リレーから注意へ：技術は各段でほとんど認識できないほど変わった。工学の論理——本物の制約を特定し、それからアーキテクチャを変える——は変わっておらず、変わる強い理由もない。
