---
title: "GNU運動とLinux"
weight: 30
date: 2026-01-01
draft: false
phase: "4 — ソフトの基礎：OS・言語・リアルタイム"
series_index: 29
aliases:
  - /posts/23-the-gnu-movement-and-linux/
  - /posts/28-the-gnu-movement-and-linux/
  - /posts/29-the-gnu-movement-and-linux/
tags: []
summary: "Unixは閉じ、Stallmanは自由なユーザーランドを組み、Torvaldsがカーネルの隙間を埋めた——GPLがその組み合わせを開いたままにした"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

1980年代初めまでに、Unix（前章）は技術的に優れ、ますます専有になっていた——AT&T が商業支配を主張し、学術・趣味のアクセスが締まる。Richard Stallman の応答は、1983年から、主に技術の直しではなかった。思想と法だった。完全に自由な（自由としての自由であり、値段だけではない）Unix 置き換えをゼロから組み、それをそう保つよう設計したライセンスで支える。

## GNU：カーネルなしのユーザーランド

GNU Project の公式史は、*The GNU Manifesto*（1985、Stallman）を、GNU オペレーティングシステム開発への支援を求める文として掲載する。テキストの一部は 1983年の当初発表から取られた、ともある。([GNU Manifesto — Wayback](https://web.archive.org/web/20240101000000/https://www.gnu.org/gnu/manifesto.html)) GNU——「GNU's Not Unix」——は、すべての部品が自由ソフトである、Unix 互換の完全な OS を目指した。

続く十年で、プロジェクトは必須の基盤を出した。GCC、Bash、GNU coreutils、Emacs などだ。何年も欠けていたのは、動くカーネルだった。計画された GNU Hurd は深刻な技術的困難にぶつかり、広い実用には届かなかった——英語版の要約どおり、完全なユーザーランドの下に、実ハードウェア向けの実用カーネルがなかった。

## GPL：著作権を外向きに

Stallman のもう一つの大きな寄与が GNU General Public License（GPL）——「コピーレフト」ライセンスで、意図的な性質を持つ。GPL 下のコードを取り込んだソフトを配布するなら、自分の改変ソースも同じ条件で公開せねばならない。著作権を、自由がすべての派生物を伝播するよう保証するために使う——下流の商業フォークが静かに閉じないように。

## Linux が隙間を埋める

1991年、フィンランドの学生 Linus Torvalds が自分の PC 向けにカーネルを個人プロジェクトとして始めた。彼は 1991年8月25日、Usenet の `comp.os.minix` に「What would you like to see most in minix?」と題し、386／486 AT クローン向けの（無料の）趣味の OS を作っている、と投稿した。([Google Groups / Wayback — Torvalds, 25 Aug 1991](https://web.archive.org/web/20060704183406/http://groups.google.de/group/comp.os.minix/msg/b813d52cbc5a044b)) kernel.org が保存する **RELNOTES-0.01** は、カーネルを (C) 1991 Linus Torvalds とし、再配布条件に「You may not distibute this for a fee, not even "handling" costs」（料金——手数料さえ——での配布禁止）を掲げる。([kernel.org — RELNOTES-0.01](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.01)) **RELNOTES-0.12** は、その「料金で配布してはならない」条件を外して GNU コピーレフトと両立させ、「The GNU copyleft takes effect as of the first of February」と書く（寄稿者の承認を前提）。([kernel.org — RELNOTES-0.12](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12))

GNU 公式の「Linux and the GNU System」は、広く使われる GNU の版がしばしば「Linux」と呼ばれ、利用者がそれが基本的に GNU Project が開発した GNU システムだと気づかない、と書く。Linux はカーネル——機械の資源を他のプログラムへ割り当てるプログラム——であり、それ自体では役に立たず、完全なシステムには他の部品が要る、ともある。([GNU — Linux and the GNU System, Wayback](https://web.archive.org/web/20240101000000/https://www.gnu.org/gnu/linux-and-gnu.html))

## 日本の並行：TRON の開かれたアーキテクチャ

同じ 1980年代、日本では別の開かれたシステム・ソフトの線が走っていた。情報処理学会コンピュータ博物館は、**TRON**（The Realtime Operating system Nucleus）プロジェクトが 1984年6月に東京大学との産学連携として始まった、と書く。サブプロジェクトに組み込み向けリアルタイム OS の **ITRON**、パーソナル／ワークステーション向けの **BTRON**、相互接続の MTRON などがあった、と続く。([IPSJ — Start of the TRON Project](https://museum.ipsj.or.jp/en/computer/os/ntt/0057.html)) TRON Forum は、プロジェクトが 1984年から産学連携のコンピュータ・アーキテクチャ開発であり、リーダーは坂村健（東京大学名誉教授）、組み込み向け RTOS などを広く産業に使ってきた、と書く。T-Kernel や μT-Kernel を含む TRON RTOS のソース全体を公開し、複製・改変できる、ともある。([TRON Forum — TRON Project](https://www.tron.org/tron-project/)) Unix／GNU の線とは別だが、「仕様とソースを開く」という圧力は、自由ソフト運動と時代を共有する、と読むのは筆者の解釈である。

**いま試す。** 下の VM を起動し、画面をクリックしてから `uname`、`whoami`、`ls` を試す——その組み合わせの GNU/Linux 側に、ブラウザの中で立っている。

{{< lab type="vm-terminal" height="600" >}}

## なぜこの組み合わせが勝ったか

GPL の構造は、企業が Linux のまわりに商業製品を組んでも、下のプラットフォームを静かに閉じられないことを意味した——カーネル改変は同じ条件でソースとして残りうる。それが持続した信頼と、やがて持続した*企業*寄与を生んだ。自由で、商業利用に開き、法的にそう保たれるよう構造化されている——Linux がサーバ、クラウド、Android、現代インターネットの背骨の多くで支配的カーネルになった理由の大きな部分だ、と読むのも筆者の解釈である。

**出口：** The GNU General Public License（Free Software Foundation）——コピーレフトを強制可能にした一次の法文。目標の表明には Stallman の GNU Manifesto（1985）を併読。
