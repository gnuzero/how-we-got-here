---
title: "Crypto de guerre"
weight: 73
date: 2026-09-06
draft: false
phase: "Crypto & Wartime Computing"
series_index: 72
aliases:
  - /posts/66-wartime-crypto/
  - /posts/72-wartime-crypto/
tags: []
summary: "Enigma, Bletchley et Colossus — pourquoi casser des chiffres a forcé le calcul électronique"
image_prompt: "Clean historical-technical diagram: Enigma rotors beside a Colossus rack of vacuum tubes at Bletchley, connective arrows from cipher traffic to electronic counting, muted wartime-engineering style"
video_prompt: "20-second animation: Enigma rotors stepping, intercept traffic flooding in, electromechanical Bombe searching, then Colossus tubes counting at electronic speed, clean technical motion graphics"
schematics: "Diagram: Enigma rotor stepping → Bombe search → Colossus electronic counting, bridging Posts 02–03"
---

Les chapitres sur engrenages et relais montrent que le calcul automatique était possible. La guerre a rendu cette possibilité *urgente* : le trafic chiffré arrivait plus vite qu'aucune salle humaine ne pouvait lire, et les machines capables de suivre ont tiré le calcul hors de l'électromécanique vers l'électronique.

C'est du tissu conjonctif entre **le secret comme charge de travail** et les machines à tubes — pas une seconde histoire de la guerre.

## Enigma était une cible mouvante

La famille Enigma allemande chiffrait le trafic opérationnel avec des rotors qui avançaient à chaque frappe, de sorte que la substitution changeait à chaque lettre. ([Wikipedia — Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine)) Casser un message n'achetait pas le lendemain gratuitement. Avant la guerre, les mathématiciens du Bureau du chiffre polonais — Marian Rejewski, avec Jerzy Różycki et Henryk Zygalski — reconstruisent le câblage interne d'Enigma ; la Bombe britannique est développée à partir de la *bomba* polonaise de Rejewski. ([Wikipedia — Bombe](https://en.wikipedia.org/wiki/Bombe))

À Bletchley Park, Alan Turing (Hut 8) et collègues transforment cette rupture mathématique en recherche industrielle : la Bombe britannique (avec le *diagonal board* de Gordon Welchman parmi les raffinements clés) explore l'espace des réglages Enigma comme recherche électromécanique de possibilités. ([Wikipedia — Bombe](https://en.wikipedia.org/wiki/Bombe) ; [Wikipedia — Bletchley Park](https://en.wikipedia.org/wiki/Bletchley_Park)) Relais et tambours pouvaient *chasser*. Ils ne pouvaient pas compter le ciphertext à la vitesse qu'exigeaient les chiffres téléimprimeurs plus tardifs.

## Colossus : quand la charge dépasse le métal

Les chiffres téléimprimeurs Lorenz (« Tunny ») posent un autre problème : de longs flux à attaquer statistiquement à vitesse électronique. Max Newman organise la Newmanry autour de cette attaque. Tommy Flowers, ingénieur des Postes qui faisait déjà confiance aux tubes dans la commutation téléphonique, construit **Colossus**. Wikipedia : le prototype Mark 1 « was working by December 1943 and was in use at Bletchley Park by early 1944 » ; un mémo de Newman du 18 janvier 1944 note « Colossus arrives today » ; le Mark 2 tourne avec succès le 1er juin 1944. ([Wikipedia — Colossus computer](https://en.wikipedia.org/wiki/Colossus_computer)) Des racks de tubes lisent du papier perforé et comptent vers des réglages cassables.

Nommer la contrainte, pas la mythologie : Colossus est de l'électronique cryptanalytique à usage spécial — « special-purpose » — pas un ordinateur à programme enregistré généraliste. Ce qu'il *force*, c'est la preuve que de grands nombres de tubes peuvent être câblés en machine assez fiable pour battre toute ferme de relais sur cette charge. Même pari physique que le chapitre tubes — plus de contacts mobiles dans le commutateur — sous pression de guerre plutôt que loisir de recherche en paix.

**Porte de sortie :** [The National Museum of Computing](https://www.tnmoc.org/) (reconstruction Colossus) ; littérature savante Colossus (p. ex. histoires éditées par Copeland, citées via Wikipedia) ; guides d'archives de Bletchley Park pour Enigma/Bombe.

## Pourquoi cela appartient avant l'argument transistor

Lire la colonne en avant :

- **Relais** — prouvent la logique binaire et prouvent aussi que le métal mobile est trop lent.
- **Ce chapitre** — une vraie charge (recherche de chiffre et comptage de flux) rend « trop lent » opérationnellement inacceptable.
- **Tubes** — enlèvent le mouvement mécanique ; les machines à l'échelle ENIAC héritent du commutateur électronique sous d'autres programmes.
- **Pourquoi le transistor** — les tubes heurtent *leur* plafond (chaleur, puissance, panne).

La crypto de guerre n'a pas inventé le calcul. Elle a rendu le saut électromécanique → électronique *non optionnel* pour l'un des plus durs problèmes d'information du siècle — et laissé une traînée de personnes nommées qui ont fait le travail. Chemin latéral optionnel ; le parcours principal continue aux tubes.

Ensuite : [Confidentialité, consentement, identité, cyber]({{< relref "74-privacy-consent-identity-cyber" >}}).

## Sources

- Wikipedia — Enigma machine ; Bombe ; Colossus computer ; Bletchley Park
- The National Museum of Computing (via citations Wikipedia / site)
