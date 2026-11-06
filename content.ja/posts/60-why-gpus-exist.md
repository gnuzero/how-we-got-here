---
title: "なぜ GPU があるか"
weight: 60
date: 2026-01-01
draft: false
phase: "9 — GPU と並列計算"
series_index: 59
aliases:
  - /posts/52-why-gpus-exist/
  - /posts/58-why-gpus-exist/
  - /posts/59-why-gpus-exist/
tags: []
summary: "グラフィックスが恥ずかしいほど並列な仕事を与えた——SIMT ハードが続き、一般計算が同じ形を見つけた"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

フェーズ 3 のどの CPU も、命令が十分独立で予測不能なので、機械は汎用でなければならない——分岐予測、アウト・オブ・オーダ、深いキャッシュ、すべて*任意の*逐次コードを速く走らせるため——と仮定する。GPU は、元の仕事に根ざした別の仮定から始める：*同じ*演算を、膨大な数のデータ点に独立に一度に適用すること。

## グラフィックスが並列を明示した

3D シーンの描画は、何百万の頂点を変換し、何百万の画素をシェードすることだ——各々に同じ数学で、画素 (100, 200) と (100, 201) のあいだに意味のある依存はない。レーンが十分あれば、すべて同時に走る。

それはフェーズ 3 が建てられた形とは違う。CPU は、こう*見えない*コードから隠れた並列を抽出する。グラフィックスはその機械を要らない：並列は隠れていない——最初から明示的で巨大だ。Wikipedia は、GPU をもともと画像操作の加速向けに設計された電子回路とし、のちに汎用並列計算へ広がった、と書く。([Wikipedia — Graphics processing unit](https://en.wikipedia.org/wiki/Graphics_processing_unit))

## SIMD / SIMT：一つの命令、多くのレーン

SIMD は一つの命令を多くのデータ要素に一度に適用する。GPU は密接に関連する模型——SIMT——を実装する：多くの並列スレッド、各々が自分のデータ（画素、頂点）上で、ハードが単純なレーン横断でグループをロックステップ実行する。Wikipedia は、SIMT を、一つの命令が複数スレッドに適用される実行模型とし、GPU で使われる、と書く。([Wikipedia — Single instruction, multiple threads](https://en.wikipedia.org/wiki/Single_instruction,_multiple_threads))

見返りは直接だ：グループ内のどのレーンも同じ瞬間に*同じ*命令を走るので、CPU がコアごとにパイプライン機械を複製するようには、レーンごとにフェッチ・デコード・制御を複製しない。一つの共有制御が多くのレーンを駆動する——恥ずかしいほど並列で同じ演算・多くのデータの仕事向けの面積と電力の勝ちであり、予測不能な逐次コードには貧しい適合だ。だから CPU と GPU は互換ではなく、実系は典型的に両方を持つ。

## グラフィックスから一般計算へ

産業を形作った気づき：同じ SIMT の形は、三角形よりはるかに広いクラス——数学が巨大並列で規則的ならいつでも——に合う。ニューラルネットの学習と推論は、ほぼその種の行列・ベクトル仕事から成る——だから描画向けに生まれたハードが支配的な AI 計算の下地になり、本フェーズの残りがグラフィックスそのものではなく、その並列アーキテクチャのプログラミングと給餌についてである理由だ。
