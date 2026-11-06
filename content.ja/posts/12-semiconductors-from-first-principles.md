---
title: "第一原理からの半導体"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — 物理とデバイス"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "どちらにも押せるギャップ——ドーピングがシリコンを制御可能なスイッチにする"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

シリコンが特別なのは魔法だからではない。伝導を「いつもオン」や「いつもオフ」で生きるのではなく、*制御*できるところにバンド構造が座っているからだ。

## 渡れるギャップがなぜ重要か

金属では価電子帯と伝導帯が重なり、電子は自由に動き、妥当な電圧ではそれをオフにできない。絶縁体では禁制ギャップが巨大で、オンにできない。半導体はそのあいだに座る。Nobel 財団の 1973年物理学賞プレスリリースは、半導体を「電気の導体と絶縁体のあいだの材料」と位置づけ、Esaki のトンネル実験がその材料で行われた、と書く。([NobelPrize.org, 1973 Physics press release](https://www.nobelprize.org/prizes/physics/1973/press-release/))

Georgia State University の HyperPhysics（Kittel, *Introduction to Solid State Physics*, 6th ed., p. 185 の表）は、300 K におけるエネルギー・ギャップをシリコン 1.11 eV、ゲルマニウム 0.66 eV と並べる（0 K ではそれぞれ 1.17 eV / 0.74 eV）。([HyperPhysics, Semiconductor Band Gaps — Wayback](https://web.archive.org/web/20210509224217/http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html)) 筆者の解釈では、シリコン約 1.1 eV は、適度な電場（あるいは少しの熱や光）でキャリアを伝導できる場所へ送りつつ、室温ではすでにキャリアで溢れない、という「どちらにも押せる」性質をトランジスタに与える。管の天井（大きさ・電力・信頼性）の直しは、ここ——ドーピングと電界で制御できる固体——から始まる。

## なぜゲルマニウムよりシリコンが勝ったか

Computer History Museum は、トランジスタの最初の六年はすべてゲルマニウム製だった、と記す。ゲルマニウムはシリコンより扱いやすく高周波動作もよいが、「オフ」時の漏れ電流がはるかに悪く——計算機論理にとって忌み嫌われる——また動作温度がおおむね 0〜70°C に制限され、過酷な用途を限る、という。Dupont が高純度の半導体級材料を供給し始めてのち、−55〜125°C で動くシリコン・デバイスが可能になった、ともある。1954年1月、Bell Labs の Morris Tanenbaum が最初のシリコン・トランジスタを作り、Texas Instruments が最初の商用デバイスを市場に出した、と続く。([Computer History Museum, 1954 Silicon Transistors](https://www.computerhistory.org/siliconengine/silicon-transistors-offer-superior-operating-characteristics/))

同館の MOSFET 頁は、熱酸化シリコン上の Si/SiO₂ 界面で表面状態を大幅に減らせることを Atalla と Kahng が見出し、金属–酸化物–シリコンのサンドイッチが MOSFET の名になった、と書く。([Computer History Museum, 1960 MOS Transistor](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) 筆者の解釈では、温度余裕・酸化物の質・供給——この三つの制約が、産業が Ge ではなく Si に標準化した理由だ。

## ドーピング：結晶からスイッチへ

PVEducation は、ドーピングを半導体中の電子と正孔の数を変える手法とし、IV 族を V 族原子でドーピングすると N 型、III 族原子でドーピングすると P 型ができる、と書く。N 型は使える電子を増やし、P 型は正孔を増やして伝導を上げる、ともある。([PVEducation, Doping](https://www.pveducation.org/pvcdrom/pn-junction/doping)) シリコン格子に価電子5の原子（例としてリン）を入れると余分な電子が伝導に寄与し——N型。価電子3の原子（例としてホウ素）を入れると結合に足りない電子＝正孔が残る——P型。

どちら単独でもスイッチではない。それらを合わせる——P–N接合——が、このあとのすべてのダイオードとトランジスタの積み木だ。次の章はそこから拾う。接合（あるいはゲート制御のチャネル）が、ドーピングしたシリコンを、外部信号でオン／オフできるものにする方法である。
