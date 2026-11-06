---
title: "Kubernetes と規模のコンテナ・オーケストレーション"
weight: 53
date: 2026-01-01
draft: false
phase: "7 — 分散システム・ビッグデータ・オーケストレーション"
series_index: 52
aliases:
  - /posts/45-kubernetes-and-container-orchestration-at-scale/
  - /posts/51-kubernetes-and-container-orchestration-at-scale/
  - /posts/52-kubernetes-and-container-orchestration-at-scale/
tags: []
summary: "望ましい状態を宣言し、制御プレーンが漂移を直す——Borg から開いた API へ"
image_prompt: "Diagram of Kubernetes control plane with API server, etcd, scheduler, and controllers reconciling desired vs actual state, clean distributed-systems diagram style"
video_prompt: "20-second animation: a pod crashing and the control plane scheduling a replacement to restore desired replica count, clean technical animation"
schematics: "Diagram: Kubernetes control-plane components + reconciliation loop"
---

第32章はコンテナ——ホスト・カーネルを共有する軽い隔離——を扱った。一台の上の一つのコンテナは手で扱える。何百台にわたる何千で、箱とプロセスが日常的に失敗する（GFS と同じ「失敗は常態」の賭け、第52章）のは、別の運用問題だ。Kubernetes は、すでにそれを生きた内部クラスタ管理から蒸留した、Google の開いた答えだ。

## 手置きはスケールしない

どの機械がどのプロセスを走らせるか選び、クラッシュを再起動し、健全なインスタンスへ交通を回し、停止なしにローリング更新する——一握りのコンテナには扱いやすい；本番フリートには無理だ。強制される一手は、配置と回復を継続的に管理するソフトで、人がどの失敗にも気づかなくてよいようにすることだ。

## 手順コマンドではなく、望ましい状態

荷重を支える考えは、命令的ではなく宣言的だ。運用者が終状態——「このサービスのレプリカ五、制限はこれ」——を宣言し、制御プレーンは、その望みが残る限り実際のクラスタ状態をそれに合わせようと働く。漂移（クラッシュ、死んだノード、要求より少ない健全レプリカ）は、まず人への警報ではない；ループが置換をスケジュールして直す不一致だ。Wikipedia は、Kubernetes をコンテナ化されたアプリケーションの配備・スケーリング・管理を自動化するオープンソース系とし、望ましい状態を宣言する、と書く。([Wikipedia — Kubernetes](https://en.wikipedia.org/wiki/Kubernetes))

その調停ループが自己修復の仕組みだ。制御プレーンの名指し部品——すべての状態変更の門としての API サーバ、望みと実際の一貫ストアとしての etcd、新しい仕事を置くスケジューラ、特定種の漂移を所有するコントローラ——はそのループに仕えるために存在する。機能カタログではない；継続的な訂正がどう実装されるかだ。

## 系譜：Borg → Omega → オープンソース

Google は、Kubernetes を開いた API 中心版として出す前に、内部でこのクラスの問題を十年以上走らせていた（Borg；ついで Omega の共有状態スケジューリング実験）。Wikipedia は、Kubernetes が Google の Borg に着想を得た、と記す。([Wikipedia — Kubernetes](https://en.wikipedia.org/wiki/Kubernetes); [Burns et al., ACM Queue 2016](https://queue.acm.org/detail.cfm?id=2898444)) 開いた系が重要だったのは、制約が産業全体だったからだ：コンテナが配備の単位になったら、誰かがフリート横断の望ましい状態を所有せねばならない。

## なぜ ML クラスタが気にするか

同じループが、いまやウェブ・サービスだけでなく分散学習と推論——多くの GPU 機械にまたがり、日常のハード失敗で再起動し、利用可能な容量でスケールしなければならないジョブ——も走らせる。それが第54章のソフト・スタックと、フェーズ 9–10 のハードへ渡す：シリコンだけでは学習フリートを置かず、癒さない。

**出口：** Abhishek Verma et al., "Large-scale cluster management at Google with Borg"（EuroSys 2015）——Kubernetes が降りる内部系の一次；Brendan Burns et al., "Borg, Omega, and Kubernetes"（*ACM Queue*, 2016）——Borg・Omega・開いた制御プレーンをつなぐ短い系譜論文。
