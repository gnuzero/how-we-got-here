---
title: "メインフレームからミニコン、そしてマイクロプロセッサへ"
weight: 25
date: 2026-01-01
draft: false
phase: "3 — CPUとそのアーキテクチャを組む"
series_index: 24
aliases:
  - /posts/18-mainframes-to-minicomputers-to-microprocessors/
  - /posts/23-mainframes-to-minicomputers-to-microprocessors/
  - /posts/24-mainframes-to-minicomputers-to-microprocessors/
tags: []
summary: "誰がコンピュータを手にするか——機関、部門、そして一チップ。ビジコンと嶋正利が4004を開いた"
image_prompt: "Timeline: mainframe, minicomputer, and Intel 4004 die with Busicom calculator silhouette, clean historical infographic"
video_prompt: "20-second animation: room-sized mainframe shrinking to a single chip, with a brief Busicom calculator overlay"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe / mini / microprocessor eras + Busicom–Intel 4004 (CPU/ROM/RAM/IO) family"
---

ENIAC（Phase 1）はおよそ 1,800 平方フィートを占め、重量はおよそ 30 トンだった。いまの電話の CPU は、指先でそれを桁違いに上回る。その縮小は一回の跳躍ではない。三つの時代があり、それぞれが違う答えを出した。*誰がコンピュータを手にし、何台あるのか？*

日本語版では、第三の時代——一枚のダイに CPU を載せる——を、日本の電卓メーカーから先に書く。

## ビジコンと嶋正利：4004は電卓の現場から生まれた

情報処理学会コンピュータ博物館のパイオニア頁は、**嶋正利**（1943–）が 1967年に東北大学理学部化学第二学科を卒業してビジコン社に入り、ハードワイアード論理の電卓試作を経て、1968年11月に 10進コンピュータ・アーキテクチャと ROM によるストアード・プログラム方式のプリンタ付き電卓を開発した、と書く。1969年6月に渡米し、インテルと協同で世界初のマイクロプロセッサ **4004** の開発を **1971年3月に成功**させた、と続く。16ピン制限のため 4ビット時分割システムバスを導入し、システムを CPU（4004）、ROM（4001）、RAM（4002）、出力拡張ポート（4003）の四種の LSI だけで構成した。CPU はトランジスタ 2,300 個、約 0.065 MIPS、チップ面積 12 mm 角（動作周波数は下の並記を見よ）。嶋は 1971年に 4004 を使ったプリンタ付き電卓も開発し、「世界初のマイクロプロセッサ使用者」となった、と同頁は記す。命令用メモリは 1K バイトだった。([情報処理学会・嶋正利](https://museum.ipsj.or.jp/pioneer/shima.html))

同博物館の英語遺産頁 **Busicom 141-PF** は、ビジコンの電子式卓上計算機 141-PF が、最初の商用マイクロプロセッサ Intel 4004 を初めて載せた計算機だとし、ビジコンが開発に大きな役割を果たした、と書く。日本計算機株式会社がのちにビジコンへ改称し、国内外へ OEM で電卓を供給していた。顧客仕様ごとにハードを設計し直すコストを下げるため、ソフトで仕様を変える電卓を企画し、pMOS 技術を持つインテルに LSI 開発を依頼した。議論ののち M. E. (Ted) Hoff が汎用論理デバイスの概念を提案し、インテルの技術者とビジコンの嶋が 4004 開発を主導、1971年3月に完成。1971年10月にビジコンは 141-PF の販売を始め OEM 供給し、インテルはマイクロプロセッサの可能性から販売権を買い戻し、1971年11月に 4004 の一般販売を始めた、とある。([IPSJ EN heritage・Busicom 141-PF](https://museum.ipsj.or.jp/en/heritage/Busicom_141-PF.html))

Computer History Museum の Silicon Engine は、Ted Hoff と Stanley Mazor が MCS-4 の一員として 4004 を構想し、1971年に Federico Faggin が Masatoshi Shima の助力のもと、シリコンゲート MOS の経験を活かして 4004 の 2,300 トランジスタを低コスト 16ピン・パッケージへ収めた、と書く。([Computer History Museum, 1971 Microprocessor](https://www.computerhistory.org/siliconengine/microprocessor-integrates-cpu-function-onto-a-single-chip/))

英語版が「Intel's 4004 (1971), built for a calculator」と一行で済ませるところを、日本語版はここに厚く置く。チップの物語は、カリフォルニアだけでは閉じない、と読むのは筆者の解釈である。

## メインフレーム：一台を分かち合う

1950–60年代。大学・企業・政府のための部屋規模の機械——バッチ処理で共有する（後続の OS 章）。IBM の公式史は、System/360（1964）が互換性の新時代を開き、コンピュータを個別部品の寄せ集めではなくプラットフォームとして捉え、家族を単一アーキテクチャの下に統一した最初の例だ、と書く。主任アーキテクトは Gene Amdahl、プロジェクト・リーダーは Fred Brooks だった、ともある。([IBM History, System/360](https://www.ibm.com/history/system-360)) Amdahl、Gerrit Blaauw、Brooks の 1964年論文が、互換機家族と ISA／実装分離の一次の声明になる（出口）。

日本では、情報処理学会コンピュータ博物館が **FACOM 230**（のち 230-30）を、富士通信機製造（現富士通）の中型汎用機として 1964年5月発表と記す。FACOM 231 を完全に包含する互換を実現し、演算速度は FACOM 231 の 10倍、記憶は最大 64K 桁、磁心のサイクル 2.2 μs。FACOM 230-50 発表を機に 230-30 と改名し、230-10・230-50 とともにシリーズを構成して IBM 360 シリーズに対抗した、と続く。([IPSJ・FACOM 230](https://museum.ipsj.or.jp/computer/main/0001.html); [EN](https://museum.ipsj.or.jp/en/computer/main/0001.html)) 同館は **HITAC 5020** を、日立が独自技術で開発した大型汎用機とし、1960年に村田健郎・中澤喜三郎（東大 TAC の中心設計者）が入社して開発が始まり、1965年に第1号機が京都大学へ納入された、と書く。([IPSJ・HITAC 5020](https://museum.ipsj.or.jp/computer/main/0003.html); [EN](https://museum.ipsj.or.jp/en/computer/main/0003.html))

## ミニコンピュータ：部門が買える一台

1970年代。DEC の PDP-11（1970）とその一族は、機関全体ではなく部門が買え、中央の計算局なしで回せる大きさまで機械を縮めた。Computer History Museum が保存する DEC 公式タイムラインは、1990年5月——PDP-11 導入 20周年——に、系列は 20機種超、設置は **60万台超** と記す。([CHM archive — DIGITAL timeline 1957–1997](http://archive.computerhistory.org/resources/text/DEC/dec.digital_%28DEC%29_timeline_1957-1997.102630354/timelinetext.htm)) 直交的なアドレッシングときれいな符号化は、のちの設計——C の習慣を含む——を形作り、Unix の多くは PDP-11 上で育った、と読むのは本書の流れに沿った筆者の解釈である。

## マイクロプロセッサ：CPUを一枚のダイへ

不連続点はここだ。離散部品のラックを配線する代わりに、CPU 全体を一つの集積回路として作る。Intel 4004（1971）は電卓向けに作られ、通常、最初の商用シングルチップ CPU とされる——4ビット、トランジスタ約 2,300 個。現代の尺度では弱い。だが次の記事で扱う 8080、Z80、x86 系統の直接の祖先だ。

クロックの数字は機関・文書ごとに並ぶ。Intel Museum が Calisphere に載せた 4004 パッケージ解説は、「Clock speed: 108 kilohertz」と書く。([Calisphere / Intel Museum — 4004 package, 1971](https://calisphere.org/item/ark:/13030/kt729020f8/)) Intel 公式のチップ年表ポスターも、4004 の「Initial clock speed: 108KHz」と記す。([Intel Chips timeline poster — Wayback](https://web.archive.org/web/20240101000000/https://www.intel.com/content/dam/www/public/us/en/documents/corporate-information/history-intel-chips-timeline-poster.pdf)) 一方、公開されている 4004 データシートの AC 特性は、\(t_{cy}\)（Clock Period）の最小を 1.36 µs、最大を 2.0 µs と置く。最小周期の逆数はおよそ 735 kHz（約 740 kHz と丸められることが多い）になる——データシート自体は kHz を書かず、\(t_{cy}\) から導く。([Intel 4004 datasheet via Internet Archive](https://archive.org/details/intel-4004)) 情報処理学会・嶋正利頁は、動作周波数 **750 kHz**、約 0.065 MIPS と書く。([情報処理学会・嶋正利](https://museum.ipsj.or.jp/pioneer/shima.html)) ここでは一つに決めない。

## なぜ縮小が複利になったか

各段階は、加工密度の曲線に沿う。トランジスタが増え、面積が減り、コストが下がる。メインフレームはバックプレーン上の何千もの部品だった。マイクロプロセッサはその構造をシリコンへ圧縮した。計算は、機関の資源から部門の道具へ、そして個人（さらに組み込み）の装置へ移った——同じスケール曲線が、現代のプロセスノードの意味へ続く、と読むのも筆者の解釈である。

{{< lab type="mini-cpu" >}}

**出口：** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — 互換機家族と ISA／実装分離の一次の声明。日本語側の出口は、上の IPSJ・嶋正利および Busicom 141-PF 遺産頁。
