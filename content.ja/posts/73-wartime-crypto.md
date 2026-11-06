---
title: "戦時の暗号"
weight: 73
date: 2026-01-01
draft: false
phase: "11 — プラットフォーム・ガバナンス・閉じ"
series_index: 72
aliases:
  - /posts/66-wartime-crypto/
  - /posts/72-wartime-crypto/
tags: []
summary: "秘密が仕事になった——Enigma、Bombe、Colossus が電気機械から電子へ跳ばせた"
image_prompt: "Historical technical illustration of Enigma, Bombe, and Colossus as a progression from electromechanical to electronic cryptanalysis, clean museum-diagram style"
video_prompt: "20-second animation: rotors stepping, then relay search, then vacuum-tube counters on paper tape, clean historical technical animation"
schematics: "Diagram: Enigma rotor principle + Bombe search + Colossus tube racks timeline"
---

歯車とリレーの章は、自動計算が可能だと示した。戦争はその可能性を*緊急*にした：暗号交通は、どの人間の部屋も読めない速さで着き、追いつける機械が計算を電気機械から電子へ引きずり出した。

これは **秘密をワークロードとして** と、真空管機械（第10章）のあいだのつなぎ組織だ——戦争の第二の歴史ではない。

## Enigma は動く標的だった

ドイツの Enigma 族は、打鍵のたびにロータが歩進し置換が変わる運用交通を暗号化した。一つの消息を破っても、翌日は無料では手に入らない。戦前、ポーランド暗号局の数学者——Marian Rejewski、Jerzy Różycki、Henryk Zygalski——が限られた傍受と文書から Enigma の内部配線を再構成し、その基盤を英仏と共有した。Wikipedia は、ポーランドの暗号学者が Enigma の配線を再構築し、1939年に英仏へ知見を渡した、と書く。([Wikipedia — Cryptanalysis of the Enigma](https://en.wikipedia.org/wiki/Cryptanalysis_of_the_Enigma))

Bletchley Park では、Alan Turing（Hut 8）らがその数学的突破を工業的探索へ変えた：英国 Bombe（Gordon Welchman の対角ボードなど主要な設計改善を含む）が Enigma 設定を電気機械の可能性空間探索として走らせた。リレーとドラムは*狩れた*。のちのテレプリンタ暗号が求める速さで暗号文を数えることはできなかった。([Wikipedia — Bombe](https://en.wikipedia.org/wiki/Bombe))

## Colossus：仕事が金属を追い越したとき

Lorenz テレプリンタ暗号（「Tunny」）は別の問題を生んだ：電子速度での統計攻撃を要する長いストリーム。Max Newman がその攻撃のまわりに Newmanry を組織した。すでに電話交換で真空管を信頼していた郵便局技術者 Tommy Flowers が **Colossus** を建てた。Wikipedia は、最初の Colossus が 1943年12月／1944年1月に Bletchley へ届き、1944年2月に稼働し始め、Mark II が 1944年6月から続いた、と記す（博物館・研究文献の日付帯と一致）。([Wikipedia — Colossus computer](https://en.wikipedia.org/wiki/Colossus_computer); [The National Museum of Computing](https://www.tnmoc.org/))

制約を名指せ、神話ではない：Colossus は専用の暗号解析エレクトロニクスであり、汎用格納プログラム計算機ではない。それが*強いた*のは、大量の管を、その仕事でどのリレー農場にも勝つ十分信頼できる機械へ配線できるという証明だ。それは第10章が unpack するのと同じ物理の賭け——スイッチに動く接点なし——が、平時の研究の余裕ではなく戦時圧力の下にある形だ。

出口：[The National Museum of Computing](https://www.tnmoc.org/)（Colossus 再建と一次資料）；Copeland 編の Colossus 史；Bletchley Park の Enigma／Bombe 案内。

## なぜトランジスタ論の前に属するか

背骨を前へ読め：

- **リレーの章** — 二進論理を証明し、動く金属が遅すぎることも証明する。
- **本章** — 本物のワークロード（暗号探索とストリーム計数）が「遅すぎる」を運用上受け入れられなくする。
- **真空管の章（第10章）** — 管が機械運動を除き；ENIAC 級が電子スイッチを別プログラムの下で継ぐ。
- **トランジスタが要った理由（第11章）** — 管が熱・電力・故障の天井に当たり、トランジスタが起きねばならなかった。

戦時暗号は計算を発明しなかった。世紀でいちばん硬い情報問題の一つについて、電気機械から電子への跳躍を*非任意*にし——仕事をした名指しの人々の跡を残した。任意の脇道；主旅は第10章で続く。
