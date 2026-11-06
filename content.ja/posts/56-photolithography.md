---
title: "フォトリソグラフィ"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — プロセス・ノードと製造"
series_index: 55
aliases:
  - /posts/48-photolithography/
  - /posts/54-photolithography/
  - /posts/55-photolithography/
tags: []
summary: "回折がより短い波長を強いる——EUV の鏡と錫プラズマが、フィーチャ寸法を動かし続けた"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

近代チップ上のどのトランジスタも——何十億個、第55章のノード・ラベルが正直に名指せるより密に——シリコン上に*パターニング*されねばならない。フォトリソグラフィがそのパターニングであり、EUV（極端紫外線）への押しは、半導体産業の下でいちばん硬い工学の鎖の一つだ。

## 光で刷り、それから建てる

ウェハをフォトレジストで塗り、パターン付きマスク越しに光を当て、光が当たったところでレジストを化学的に変え、選択的に除去または残す。エッチ、堆積、ドーピングがそのパターンを使い、トランジスタ構造を置く。根は精密な写真印刷だ——回折が気軽には許さない解像度で。Wikipedia は、フォトリソグラフィを、光を使って薄膜（典型的にはフォトレジスト）に幾何パターンを転写するプロセスとし、マイクロファブリケーションの中核だ、と書く。([Wikipedia — Photolithography](https://en.wikipedia.org/wiki/Photolithography))

## 回折がより短い波長を強いる

解像できるフィーチャの小ささは波長に結びつく：より短い光、より細いパターン。その物理の天井が、産業が何十年もスペクトルを下へ歩いた理由だ——紫外、ついで深紫外（DUV、およそ 193 nm）、ついで極端紫外（EUV、およそ 13.5 nm）——各段が第55章の縮むラベルが指すより細いフィーチャを買う。Wikipedia は、EUV リソグラフィをおよそ 13.5 nm の波長を使うものとし、先端ノードのパターニングに使われる、と書く。([Wikipedia — Extreme ultraviolet lithography](https://en.wikipedia.org/wiki/Extreme_ultraviolet_lithography))

## なぜ EUV が格別に難しかったか

EUV 波長では、普通の技巧が失敗する。**光の生成**は、溶けた錫の液滴を高出力レーザで毎秒何万回も叩き、できたプラズマが使える EUV を出すことを意味する。**集光**にガラスレンズは使えない——EUV はほぼすべての従来光学と空気に吸収される——だから経路は近真空中の多層鏡だ。量産 EUV スキャナは、これまでに建てられた製造ツールの最複雑級であり；商業的に、ASML がそれらの量産ツールの唯一の供給者だった。([Wikipedia — Extreme ultraviolet lithography](https://en.wikipedia.org/wiki/Extreme_ultraviolet_lithography))

その波長の段がなければ、次章のより細い FinFET と Gate-All-Around 構造は、許容できる歩留まりとコストでは作れなかっただろう。回折が制約を据え；錫プラズマと鏡が強制されたアーキテクチャだった。

## 日本：ステッパとレジスト

英語版の弧は、パターニングの物理と EUV／ASML に留まる。日本語版は、同じ「光で刷る」鎖の、日本が長く担った装置と材料を添える。Nikon の半導体リソグラフィ史は、1980年に NSR-1010G（解像度 1.0 µm）を発表・出荷し、「日本で最初に生産されたステッパ」と記す。1984年の NSR-1010i2 を世界初の i-line ステッパ、1988年の NSR-1505EX を世界初のエキシマ・ステッパ、1995年の NSR-S201A を世界初のスキャナ、とも列挙する。([Nikon — Semiconductor Lithography Systems History](https://www.nikon.com/business/semi/history/)) Canon の産業知財史は、1970年に日本初の半導体リソグラフィ装置 PPC-1 を日米同時発表し、1983年に初のステッパ FPA-1500FA を発表した、と書く。([Canon — History of IP in the industrial field](https://global.canon/en/intellectual-property/history/industrial.html)) ウェハを塗るレジスト側では、東京応化工業（TOK）の沿革が、1968年に半導体用ネガ型フォトレジスト OMR-81 の製造を開始し、1972年に「国産初の半導体用ポジ型フォトレジスト」OFPR-2 を開発した、と記す。([東京応化工業 — 沿革](https://www.tok.co.jp/company/history)) JSR の英文沿革は、1979年にフォトレジストの販売を始めた、と書く。([JSR — History](https://jsr.co.jp/jsr_e/company/history.html)) EUV 量産ツールの独占供給は ASML だが、DUV 世代のステッパと、レジストそのものは、日本の光学・化学が長く担った層だ、と読むのは筆者の解釈である。
