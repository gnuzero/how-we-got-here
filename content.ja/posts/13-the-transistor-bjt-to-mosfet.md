---
title: "トランジスタ：BJTからMOSFETへ"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "電流制御のBJTは待機電力を焼き、電圧制御のMOSFETが密度を可能にした"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

「トランジスタ」と呼ばれるデバイス族は二つある。スイッチする物理が違い——現代のダイに載る数十億個へスケールするのは、そのうち一つだけだ。

## BJT：電流が電流を制御する

バイポーラ接合トランジスタ（NPN：Nエミッタ、Pベース、Nコレクタ）は、小さなベース*電流*で、より大きなコレクタ–エミッタ電流を制御する。オンを保つには、ベース電流を供給し続ける。チップ規模ではその待機コストが積み上がる。1970年代のバイポーラ論理族は、ゲートが切り替わっていなくても静的散逸だけで現実の熱の壁に当たった、と読むのは筆者の解釈だ。

## MOSFET：電圧がチャネルを制御する

Computer History Museum によれば、1959年に Bell Labs の M. M. (John) Atalla と Dawon Kahng が、最初の実用的な絶縁ゲート電界効果トランジスタ（FET）を達成した。熱酸化シリコン層を調べ、シリコンとその酸化物の界面で表面状態を大幅に減らせることを見出し、金属（M–ゲート）、酸化物（O–絶縁）、シリコン（S–半導体）のサンドイッチ——ゆえに MOSFET、通称 MOS——となった、という。([Computer History Museum, 1960 MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

同館によれば、熱酸化シリコン上の界面で表面状態を減らし、金属（ゲート）・酸化物（絶縁）・シリコンのサンドイッチが MOSFET となった。ゲートは酸化物で半導体から絶縁される。([Computer History Museum, 1960 MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) ゲート電圧はゲート*を通して*直流を押し込むのではなく、ソースとドレインのあいだに導電チャネルを作る／消す場を生む。NMOS では、正のゲート電圧が P 型ボディに電子を集め反転層を作り、電流が流れる。ゲート電圧を下げればチャネルが消え、電流が止まる。

**ゲートは、実質的に定常電流を引かない。** 同館の CMOS 頁は、相補 MOS 構成が待機でほぼ零電力を引くことを示す。([Computer History Museum, 1963 CMOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) ゲート容量が充電されたあと、デバイスをオンに保つコストはほとんどない。それは BJT の連続ベース電流の反対だ、と対比するのは筆者の解釈である。

## なぜデジタル論理で MOSFET が勝ったか

同館の CMOS 頁は、1963年に Fairchild の C. T. Sah と Frank Wanlass が、pチャネルと nチャネルの MOS を相補対称に組んだ論理回路が待機でほぼ零電力を引くことを示し、Wanlass がその着想を特許化した——今日の CMOS——と記す。([Computer History Museum, 1963 CMOS](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) 筆者の解釈では、ほぼ零の静的ゲート電流が本編だ。CMOS（次章）は、意味のある電流が主に*切り替え中*に流れ、状態を保持しているあいだには流れないようにする。それが、トランジスタ数を何千から数十億へ、ダイを溶かすことなく上げさせた——Phase 8 がプロセス・ノード解像度で戻るスケールの弧だ。

BJT は消えなかった。電流駆動やアナログの線形性が密度に勝るところでは、いまも重要だ。本格規模のデジタル論理では、MOSFET の待機電力の物理が唯一の現実的な道だった——そして次の章のすべてのゲートは、それから組まれる。

## 江崎玲於奈のトンネルダイオード

Nobel 財団の 1973年物理学賞プレスリリースは、当時ソニー株式会社の研究所にいた Leo Esaki（江崎玲於奈）が、1958年に発表した論文で半導体における新しい種類のトンネル現象の存在を示し、その効果がトンネルダイオードとして技術的に使えることも示した、と書く。([NobelPrize.org, 1973 Physics press release](https://www.nobelprize.org/prizes/physics/1973/press-release/)) Nobel の事実頁は、1958年の一見単純な実験で、導体と絶縁体のあいだの材料である半導体における、それまで知られていなかったタイプのトンネルを示した、と要約する。([NobelPrize.org, Leo Esaki – Facts](https://www.nobelprize.org/prizes/physics/1973/esaki/facts/))

**出口：** D. Kahng と M. M. Atalla の 1960年シリコン MOSFET の仕事（Bell Labs / IRE–AIEE Solid-State Device Research Conference）——酸化物ゲートの電圧制御をデジタルの標準にした実用的電界効果デバイス。
