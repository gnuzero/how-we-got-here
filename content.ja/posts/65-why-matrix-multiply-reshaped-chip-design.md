---
title: "なぜ行列積がチップ設計を曲げたか"
weight: 65
date: 2026-01-01
draft: false
phase: "10 — AI アクセラレータと専用シリコン"
series_index: 64
aliases:
  - /posts/57-why-matrix-multiply-reshaped-chip-design/
  - /posts/63-why-matrix-multiply-reshaped-chip-design/
  - /posts/64-why-matrix-multiply-reshaped-chip-design/
tags: []
summary: "AI 仕事の大半は行列の積和に還元される——だからシリコンがその形に特化した"
image_prompt: "Diagram showing neural-network layers collapsing into matrix multiply-accumulate operations feeding specialized silicon, clean AI-hardware explainer style"
video_prompt: "20-second animation: layer ops morphing into a matmul grid that lights up specialized MAC units, clean technical animation"
schematics: "Diagram: FC/conv/attention → matmul reduction + specialized vs general silicon budget"
---

この最終フェーズは、近代 AI ワークロード向けに建てられたハードだ。チップ設計がなぜこれほど強く曲がったかは、「AI ワークロード」が算術水準で実際に何へ還元されるかを言えば、はっきりする——句が示唆するより狭く、機械的だ。

## 層が計算するもの

全結合層の前向きパスは行列積だ：活性化かける重み、それから安い要素ごと非線形。畳み込みは matmul（im2col）へ再定式化される。注意——大半の大規模言語モデルの後ろのトランスフォーマの核——も、計算の心臓では同じく行列積だ：クエリ–キーのスコア、ついで重み付き値。これは教材の単純化ではない。近代深層学習の学習と推論における生サイクルの圧倒的多数は、行列の積和——巨大な尺度で、終わりなく繰り返される——である。Wikipedia は、深層学習の計算が大規模な線形代数（とりわけ行列乗算）に支配されることが多い、と関連項目で説明する。([Wikipedia — Deep learning](https://en.wikipedia.org/wiki/Deep_learning); [Wikipedia — Multiply–accumulate operation](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation))

## なぜハードが従ったか

フェーズ 3 の CPU コアは、任意の逐次コード——分岐、多様なメモリアクセス、予測不能な制御流——向けに建てられる。その汎用性は、一つの規則的演算に支配される仕事が要らない機械（予測、アウト・オブ・オーダ、洗練キャッシュ）に面積と電力を使う。

matmul が AI 計算の支配的な取り分だと認識されると、それへの特化が割に合う：汎用機械を飛ばし、予算を MAC スループットに使うシリコン。テンソル・コア（第63章）はその考えを、なお汎用の GPU の中に埋め込む。次章はさらに進む——シストリック・アレイ——同じ気づきのまわりにアーキテクチャ全体を特化する。

## 繰り返す型

これは第24章のスーパースカラからマルチコアへの転回や、第57章のプレーナ→FinFET→GAA 進化と同じ*種*の物語が、いまチップ全体のアーキテクチャにある：ワークロードの形が十分理解され支配的なら、その形向けの専用ハードが、多くのケースの一つとして扱う汎用ハードに勝つ。matmul の支配が、本フェーズの多くが汎用 CPU——あるいは汎用 GPU——の漸進的改善だけではなく、目的特化シリコンである理由だ。

### 日本：目的特化の別の顔

英語版の弧は、matmul 支配が専用シリコンを正当化する、と置く。日本語版は、同じ制約への日本の答えの一例を添える。Preferred Networks は、深層学習向けアクセラレータ MN-Core 系列を神戸大学と共同開発した、と公式頁に書く。第2世代 MN-Core 2 の白書は、製造プロセス TSMC N7、ダイ面積 550 mm²、トランジスタ数 220 億、4096 PE、ピーク FP64 12 TFLOPS／TF16 393 TFLOPS、設計電力 330 W、と表にする。([PFN — MN-Core Series](https://projects.preferred.jp/mn-core/en/); [MN-Core 2 White Paper](https://projects.preferred.jp/mn-core/assets/MN-Core_2_whitepaper_en.pdf)) GPU 内のテンソル・コアや次章の TPU と同じく、matmul 支配の仕事向けにシリコン予算を振り直した例だ、と読むのは筆者の解釈である。
