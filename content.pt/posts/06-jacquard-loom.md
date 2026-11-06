---
title: "O tear Jacquard"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Cartões perfurados separaram o programa da máquina que o executa"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage não inventou o controlo por cartões perfurados. Pediu-o emprestado.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Tear Jacquard estreito no Musée d'art et d'industrie, Saint-Étienne" loading="lazy" width="1280">
<figcaption>Tear Jacquard, Musée d'art et d'industrie, Saint-Étienne. Foto: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

## Datas da casa: 1801, 1804, medalha

O Musée des Arts et Métiers (CNAM) regista que, a **23 de dezembro de 1801**, Joseph Marie Jacquard «prend un brevet» para «une machine destinée à suppléer le tireur de lacs (c’est-à-dire de cordes) dans la fabrication des étoffes brochées et façonnées» (Musée des Arts et Métiers, «Modèle : Métier original de Jacquard», inv. 07641-0001-, texto de Lionel Dufaux in *Guide des collections*, 2013, [arts-et-metiers.net](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard), acessado 2026-11-06).

A ficha da Science Museum Group Collection sobre um modelo de tear Jacquard afirma: «Jacquard made a commercial success of this loom accessory in **1804**», baseado em invenções de Falcon, Vaucanson e do próprio Jacquard; a contribuição atribuída a Jacquard é a apresentação automática do cartão ao «card reader» (Science Museum Group Collection, «Model of a Jacquard loom, with shuttle and components», object 1867-47, [collection.sciencemuseumgroup.org.uk](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components), acessado 2026-11-06).

A **2 de fevereiro de 1804**, a Société d’encouragement pour l’industrie nationale «lui décerne une médaille d’or» (Fondation Napoléon / *napoleon.org*, biografia «JACQUARD, Joseph Marie…», Marc Allégret, *Revue du Souvenir Napoléonien* n.º 433, [napoleon.org](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/), acessado 2026-11-06). A mesma biografia não especifica, nessa frase, por qual invenção a medalha foi dada — mantemos a formulação neutra.

## O que o mecanismo faz

O acessório de Jacquard, na formulação da Science Museum Group Collection, baseia-se em Falcon, Vaucanson e no próprio Jacquard; a contribuição atribuída a Jacquard é a apresentação automática do cartão ao «card reader», sendo o princípio dos buracos no cartão a controlar quais urdiduras sobem já estabelecido anos antes (Science Museum Group Collection, loc. cit.). **Interpretação nossa:** buraco → sobe; sem buraco → bloqueia; troque os cartões, muda o padrão — o tear não «conhece» brocado de seda; executa uma sequência fixa, codificada fisicamente.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Cartões perfurados num tear Jacquard no Museum of Science and Industry, Manchester" loading="lazy" width="249">
<figcaption>Cartões perfurados num tear Jacquard (Museum of Science and Industry, Manchester). Foto: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, domínio público.</figcaption>
</figure>

É essa a abstração que Babbage adotou para o Motor Analítico: um programa é uma sequência de instruções, separada da máquina que as corre (**interpretação nossa** do fio deste livro).

## Ligações lusófonas

O acervo digital Brusque Memória / Acervo Museu Casa de Brusque (AMCB) cataloga um «Tear manual jacquard que pertenceu à Indústria Schlösser», relacionando a máquina à economia e tradição têxtil iniciadas na cidade em 1890 (Brusque Memória, «Tear manual jacquard da Indústria Schlösser», [brusquememoria.com.br](https://brusquememoria.com.br/acervo-imagem/1994), acessado 2026-11-06). **Não extrapolamos daí datas de introdução do Jacquard no Brasil** — a ficha só sustenta a existência desse exemplar e o vínculo com a Schlösser / Brusque.

O Museu de Lanifícios da Universidade da Beira Interior anuncia a exposição «Debuxos tipo Jacquard: arte e técnica», de desenhos têxteis concebidos por Jorge Trindade (n. 1945) (Museu de Lanifícios / UBI, [museu.ubi.pt](https://museu.ubi.pt/?cix=cartaz184), acessado 2026-11-06). O jornal universitário URBI (UBI) descreve a mesma mostra na Galeria de Exposições do Museu de Lanifícios / Real Fábrica Veiga, inaugurada a 22 de setembro de 2018 e patente até 4 de novembro, dedicada ao desenho têxtil também chamado Debuxo na indústria de lanifícios, com base na experiência de Trindade como debuxador (1960–2005), nomeadamente no Grupo Paulo de Oliveira, S.A. (Covilhã) (URBI, «Exposição de desenhos têxteis no Museu de Lanifícios», 12 set. 2018, [urbi.ubi.pt](https://www.urbi.ubi.pt/pag/17629), acessado 2026-11-06). **Não afirmamos nada além do que essas páginas enunciam.**

**Próximo:** [Por que a computação mecânica importa]({{< relref "/posts/07-why-mechanical-matters.md" >}}).

## Fontes

- Musée des Arts et Métiers (CNAM), «Modèle : Métier original de Jacquard»: <https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard>
- Science Museum Group Collection, «Model of a Jacquard loom…» (1867-47): <https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components>
- Fondation Napoléon / napoleon.org, biografia Jacquard (Allégret): <https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/>
- Brusque Memória / AMCB, «Tear manual jacquard da Indústria Schlösser»: <https://brusquememoria.com.br/acervo-imagem/1994>
- Museu de Lanifícios / UBI, anúncio «Debuxos tipo Jacquard»: <https://museu.ubi.pt/?cix=cartaz184>
- URBI (UBI), «Exposição de desenhos têxteis no Museu de Lanifícios» (12 set. 2018): <https://www.urbi.ubi.pt/pag/17629>
