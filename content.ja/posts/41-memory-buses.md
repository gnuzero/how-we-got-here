---
title: "メモリ・バス"
weight: 41
date: 2026-01-01
draft: false
phase: "5 — バスとシステム・アーキテクチャ"
series_index: 40
aliases:
  - /posts/34-memory-buses/
  - /posts/39-memory-buses/
  - /posts/40-memory-buses/
tags: []
summary: "DDR は帯域を買ったが、レイテンシはほとんど動かなかった——バンクとチャネルが待ちを隠す"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe（前二章）は拡張装置への経路だ。メモリ・バスは、CPU を実際に養う経路——DRAM——であり、その進化は帯域・レイテンシ・電力の交渉の連続だ。世代名が物語ではない。その三つの分かれ目が物語だ。

## 両エッジ、より速いクロックではない

DDR——Double Data Rate——は立ち上がり*と*立ち下がりの両エッジで転送する。同じクロックのシングル・データ・レート設計のおよそ二倍のスループットを、周波数を倍にしなくても（それにつきものの信号保全の問題も倍にせずに）得る。Wikipedia は、DDR SDRAM を「クロック信号の立ち上がりと立ち下がりの両方でデータを転送する」ものとし、SDR SDRAM のほぼ二倍の帯域を同じクロックで与える、と書く。([Wikipedia — DDR SDRAM](https://en.wikipedia.org/wiki/DDR_SDRAM)) 帯域を、まずクロックの壁を払わずに買う。

## 帯域は上がった；最初のビットのレイテンシはそうでもない

各 DDR 世代は、主に I/O を速くしてピーク帯域を上げた。プリフェッチや、DDR5 ではモジュール上の二つの独立 32 ビット・サブチャネルへの分割が、並列を増やす。Wikipedia は、DDR5 がチャネルを二つの独立した 32 ビット・サブチャネルに分割する、と記す。([Wikipedia — DDR5 SDRAM](https://en.wikipedia.org/wiki/DDR5_SDRAM)) 見出しの数字が隠すもの：生のアクセス*レイテンシ*——要求から最初のビットまで——は、帯域よりはるかにゆっくりしか動かなかった。DRAM は、ストリームが始まってからの流れはずっと上手くなり、始まる前の待ちは少ししか良くならなかった。それが次章の設定だ。別の指標、別の物理（電荷センシング、キャパシタ・セル）。

## 遅いアクセスを隠す並列

*チャネル*は独立したコントローラ経路——並行要求が互いの後ろに並ばなくてよい。チャネル内の*ランク*と*バンク*は、あるバンクが終わる（またはリフレッシュする）あいだに別のバンクが新しい要求を受けられるようにする。独立アクセスを十分重ねれば、単一アクセスが速くならなくても*総*スループットは高く保てる。組織がある理由は、DIMM 機能のカタログではなく、次章が壁と名指すレイテンシを隠すためだ。

DIMM は物理パッケージ——標準エッジ・コネクタ付きの板上のチップ——なので、容量は「スロット数と大きさ」であり、バスの再設計ではない。

次の二章は、この交渉が足りなくなったときに起きること：メモリ・ウォールと、計算側のいとこであるクロック速度の壁。
