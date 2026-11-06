---
title: "Semicondutores a partir dos primeiros princípios"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Física e dispositivos"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "Um gap de banda que se pode empurrar para um lado ou para o outro — a dopagem transforma o silício num interruptor controlável"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

O Museu Faraday (IST) classifica materiais em condutores, semicondutores e isoladores pela resistividade; diz que o silício puro é um semicondutor cuja resistividade à temperatura ambiente o torna «simultaneamente um mau condutor e um mau isolador», que o dióxido de silício (SiO₂) tem resistividade extremamente elevada e é o isolador usado na microeletrónica do silício, e que o silício dopado com boro ou fósforo baixa consideravelmente a resistividade (Museu Faraday / IST, «Condução elétrica e tunelamento», Moisés Piedade, [museufaraday.tecnico.ulisboa.pt](https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Condu%C3%A7%C3%A3o%20el%C3%A9trica%20e%20tunelamento.pdf), acessado 2026-11-06).

O silício não é especial por magia — é especial porque a sua estrutura de bandas fica onde se pode *controlar* a condução, em vez de a aceitar sempre ligada ou sempre desligada (**interpretação nossa** do fio deste capítulo).

## Por que um gap que se pode atravessar importa

A Britannica define semicondutor como sólido cristalino de condutividade elétrica intermédia entre condutor e isolador; as condutividades dos semicondutores são tipicamente sensíveis a temperatura, iluminação, campos magnéticos e quantidades mínimas de impurezas (Encyclopaedia Britannica, «semiconductor», [britannica.com](https://www.britannica.com/science/semiconductor), acessado 2026-11-06). Num cristal, a banda de valência (a mais alta preenchida) e a banda de condução (a seguinte) estão separadas por um *bandgap* — energias que os eletrões do cristal não podem possuir; a maioria dos semicondutores importantes tem bandgaps entre **0,25** e **2,5 eV**; o do arsenieto de gálio é 1,42 eV; o do diamante, bom isolador cristalino, é 5,5 eV (mesma fonte). Para os gaps de silício e germânio à temperatura ambiente usamos a mesma tabela «Semiconductor Band Gaps» do HyperPhysics (Georgia State University), que cita Kittel, *Introduction to Solid State Physics*, 6.ª ed., p. 185: a **300 K**, o silício tem **1,11 eV** e o germânio **0,66 eV** (a 0 K: Si 1,17 eV, Ge 0,74 eV) (HyperPhysics, [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html), acessado 2026-11-06).

**Interpretação nossa:** num metal as bandas sobrepõem-se e não se «desliga» a condução com tensões razoáveis; num isolador o gap é enorme e não se «liga» facilmente; o silício, com 1,11 eV, fica no intervalo em que se pode empurrar portadores para conduzir sem já os ter em excesso à temperatura ambiente — a propriedade de que um transístor precisa.

## Por que o silício ganhou ao germânio

Antes da invenção do transístor bipolar em **1947**, os semicondutores eram usados sobretudo como dispositivos de dois terminais; no início dos anos **1950** o germânio era o material semicondutor principal, mas revelou-se inadequado para muitas aplicações porque os dispositivos exibiam correntes de fuga elevadas a temperaturas só moderadamente altas; desde o início dos anos **1960** o silício tornou-se de longe o mais usado, praticamente substituindo o germânio no fabrico de dispositivos — razões principais: (1) dispositivos de silício com correntes de fuga muito menores; (2) o dióxido de silício (SiO₂), isolador de alta qualidade, é fácil de incorporar num dispositivo à base de silício (Britannica, loc. cit.). O Museu Faraday assinala o mesmo papel do SiO₂ como dielétrico da microeletrónica do silício (Faraday, loc. cit.). O ponto de contacto de **1947** em germânio está no [capítulo 11]({{< relref "11-why-the-transistor-had-to-happen" >}}) (CHM).

## Dopagem: do cristal ao interruptor

A condução elétrica em semicondutores intrínsecos é bastante fraca à temperatura ambiente; introduzir impurezas (tipicamente da ordem de uma parte por milhão) produz um semicondutor extrínseco — *doping* / dopagem (Britannica, loc. cit.). Se um átomo de silício é substituído por um átomo pentavalente com cinco eletrões exteriores, **como o arsénio**, quatro formam ligações covalentes com vizinhos e o quinto torna-se eletrão de condução — semicondutor **tipo n**, o arsénio como dador; se um átomo trivalente com três eletrões exteriores, **como o boro**, é substituído, cria-se um buraco positivo na banda de valência — semicondutor **tipo p**, o boro como aceitador (mesma fonte). O Museu Faraday nomeia boro ou fósforo como dopantes que baixam a resistividade do silício (Faraday, loc. cit.).

Nem um nem outro, sozinhos, é um interruptor. Juntá-los — uma junção P-N — é o bloco de construção dos díodos e transístores que se seguem (**interpretação nossa** do fio do livro). O próximo capítulo retoma aí: como uma junção (ou um canal controlado por porta) transforma silício dopado em algo que um sinal externo liga e desliga.

**Próximo:** [O transístor: do BJT ao MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}}).

## Fontes

- Museu Faraday / IST, «Condução elétrica e tunelamento» (Moisés Piedade): <https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Condu%C3%A7%C3%A3o%20el%C3%A9trica%20e%20tunelamento.pdf>
- Encyclopaedia Britannica, «semiconductor»: <https://www.britannica.com/science/semiconductor>
- HyperPhysics (Georgia State University), «Semiconductor Band Gaps»: <http://hyperphysics.phy-astr.gsu.edu/hbase/Tables/Semgap.html>
- Capítulo 11 deste livro (CHM point-contact / junction) e as suas fontes.
