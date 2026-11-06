---
title: "クロック速度の壁"
weight: 43
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 42
aliases:
  - /posts/36-the-clock-speed-wall/
  - /posts/41-the-clock-speed-wall/
  - /posts/42-the-clock-speed-wall/
tags: []
summary: "周波数は熱に当たった——産業はより速いクロックではなく、幅（コア、ついでファブリック）へ向かった"
image_prompt: "Graph infographic: CPU clock frequency climbing then flattening around 2005, power density curve rising toward a thermal ceiling, clean data-visualization diagram style"
video_prompt: "20-second animation: a CPU die heating up as frequency is pushed higher, hitting a thermal ceiling, then splitting into multicore, clean technical animation"
schematics: "Diagram: clock frequency vs year graph + power density (P=CV²f) scaling curve + single-core-vs-multicore comparison"
---

前章はメモリ側の壁だった：DRAM レイテンシが CPU に追いつけない。本章は、ほぼ同じ瞬間に着地した計算側の壁だ。二つ合わせて——片方だけでは足りない——産業がマルチコア（第24章）へ、のちにファブリック（第44章）へ舵を切った理由である。

## 曲がった曲線

クロック周波数は 1980年代から 2000年代前半まで上がり、2004–2005年あたりで平坦化した。デスクトップ部品は 4 GHz 近くにあり、狭い例外を除き、トランジスタ数（ムーアの法則）がなお上がっても、主流クロックは上がらなくなった。何十年も二つは一緒に動いていた。それからそうではなくなった。Wikipedia は、Dennard scaling の破綻と、2000年代半ば以降のクロック周波数の停滞を、電力密度と漏れの制約と結びつけて説明する。([Wikipedia — Dennard scaling](https://en.wikipedia.org/wiki/Dennard_scaling); [Wikipedia — Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law))

## P ≈ CV²f と電圧項

CMOS の動的電力は、おおむね容量 × 電圧の二乗 × 周波数だ。周波数だけでは電力に線形——不快だが致命ではない。固定プロセスで、より速いクロックはしばしば信頼性のためにより高い電源を要し、電圧は*二乗*される。周波数と電圧が一緒に上がると複合する。2000年代半ばの壁は、Dennard scaling の破綻と、それ以上の電圧下げを制限する漏れでもあった。熱であり、取りこぼした回路技巧ではない。

## スキューと同種の熱天井

熱になった電力はダイから出さねばならず、さもなければチップは（設計どおり）スロットルし、悪ければ壊れる。2000年代半ばまでに、主流の空冷はすでに有用限界の近くにあった。クロック——とそれに伴う電圧——をさらに押すことは、経済的な冷却が取り除けない電力密度を意味した。パラレル・バスのスキュー（第39章）と同カテゴリ：物理の天井であり、迂回できる設計の非効率ではない。

## 速い代わりに広い

細る ILP（第24章）*と*一コア上の硬い電力天井：一コアをより速くするのを止め、ダイ上にいくつか置き、それぞれをより控えめな効率的クロックで動かす。総スループットはなお上がり得る。どの単一コアも、周波数を止めた熱線を越えなくてよい。

## 二つの壁、一つの転回

メモリ・ウォールは、DRAM レイテンシが計算に負けることだ。クロック速度の壁は、計算そのものが熱に当たることだ。違う物理、同じ十年。合わせて「一コアをより速く」という成長物語を終わらせ、「より多くのコア——そしてますます、専用の並列ハードへ仕事を移し、汎用 CPU を通さずにそれらの単位をつなぐ」を強いた。その最後の節が第44章であり、のちの GPU とアクセラレータである。
