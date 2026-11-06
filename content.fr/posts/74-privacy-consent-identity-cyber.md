---
title: "Confidentialité, consentement, identité, cyber"
weight: 74
date: 2026-09-06
draft: false
phase: "Privacy / Identity / Consent"
series_index: 73
aliases:
  - /posts/67-privacy-consent-identity-cyber/
  - /posts/73-privacy-consent-identity-cyber/
tags: []
summary: "Confidentialité, consentement, identité et cybersécurité comme évolution d'ingénierie sur un réseau ouvert — pas un pamphlet de politique"
image_prompt: "Clean layered diagram: isolation boundaries, cryptographic keys, identity credentials, and adversarial threat arrows on one stack, modern security-engineering infographic style"
video_prompt: "20-second animation: a shared wire gaining encryption, then authentication, then scoped consent tokens, while an attacker path is blocked at each layer, clean technical motion graphics"
schematics: "Diagram: isolation (OS) → crypto on the wire → identity/auth → consent scopes → adversarial ops as one engineering arc"
---

La crypto de guerre était le secret contre un adversaire d'État avec une salle de machines dédiée. L'Internet ouvert pose un autre problème d'ingénierie : *beaucoup* de parties partagent le fil, les hôtes et les plateformes — et certaines sont hostiles, curieuses, ou simplement plus grandes que l'utilisateur. Confidentialité, consentement, identité et cybersécurité nomment ce problème tel qu'il a évolué dans le code et les protocoles. Ce n'est pas un pamphlet de politique.

## L'isolation est venue d'abord

Avant le « produit privacy », il y avait la **protection**. Jerome Saltzer et Michael Schroeder, dans leur enquête de 1975 *The Protection of Information in Computer Systems*, formulent des principes de conception qui se lisent encore comme loi d'ingénierie : least privilege, complete mediation, fail-safe defaults, economy of mechanism. ([Saltzer & Schroeder, 1975 — MIT](https://web.mit.edu/Saltzer/www/publications/protection/)) Mémoire virtuelle et containers sont des instances plus tardives du même pari — tracer une frontière que le matériel et le noyau appliquent, pour qu'un programme ne puisse pas lire un autre à la légère.

## La crypto sur un réseau public

Les réseaux partagés font s'écrouler l'ancien modèle de clé-courrier. Whitfield Diffie et Martin Hellman, dans *New Directions in Cryptography* (1976), font de l'accord à clé publique un objet de recherche : deux parties peuvent établir un secret partagé pendant que des écouteurs entendent l'échange. ([Diffie & Hellman, 1976](https://ee.stanford.edu/~hellman/publications/24.pdf)) Ronald Rivest, Adi Shamir et Leonard Adleman suivent avec RSA (1977/78). TLS sur le Web d'aujourd'hui est le descendant déployé de cette lignée (avec une longue traînée de révisions de protocole) — [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3) comme porte moderne.

## L'identité est un problème de protocole

« Qui es-tu ? » sur un réseau n'est pas une vibe — c'est de la machinerie d'authentification et d'autorisation. Les mots de passe furent l'authentifiant bon marché précoce et restent une surface de breach. Needham et Schroeder proposent des protocoles d'authentification ; Kerberos (MIT Project Athena ; Steve Miller, Clifford Neuman et collègues) est bâti sur le protocole à clé symétrique Needham–Schroeder. ([Wikipedia — Kerberos (protocol)](https://en.wikipedia.org/wiki/Kerberos_(protocol)) ; [Wikipedia — Needham–Schroeder protocol](https://en.wikipedia.org/wiki/Needham%E2%80%93Schroeder_protocol)) Les certificats à clé publique transforment l'identité en *claims vérifiables* que les machines peuvent contrôler. OAuth 2.0 « enables a third-party application to obtain limited access to an HTTP service » via une interaction d'approbation — consentement comme jeton à portée limitée, pas promesse vague. ([RFC 6749](https://www.rfc-editor.org/rfc/rfc6749))

Contrainte nommée : les systèmes d'identité échouent comme ingénierie quand le vérificateur, le credential ou le chemin de recovery est plus faible que l'actif qu'ils gardent.

## Le consentement comme interface au pouvoir

Le consentement apparaît dans la pile partout où un système a besoin de permission pour agir à travers une frontière : jars de cookies et same-origin policy dans les navigateurs, invites de permission sur les appareils, jetons d'API à portée sur les plateformes. La question d'ingénierie est toujours la même — *quelle capacité a été accordée, à qui, pour combien de temps, et peut-elle être révoquée ?* — que le copy UI dise « Accept » ou que l'en-tête dise `Authorization`. La gouvernance (chapitre Minitel / registres) décide noms et numéros ; cette couche décide *qui peut les utiliser en votre nom*.

## Cybersécurité : ingénierie de systèmes adversariaux

La cybersécurité, c'est ce qui arrive quand on suppose le réseau, la supply chain, et parfois l'opérateur hostiles. Elle réutilise tout ce qui précède — isolation, crypto, identité — sous un modèle d'attaquant : malware, phishing, canaux auxiliaires, dépendances vulnérables, mauvaise configuration à l'échelle. Le tissu conjonctif de la discipline n'est pas la peur ; c'est le feedback. Les vulnérabilités sont nommées (CVE), patchées, testées en régression ; l'abus rencontre rate limits, sandboxing et monitoring.

**Porte de sortie :** documentation du programme CVE ; textes classiques d'ingénierie de sécurité qui citent Saltzer/Schroeder comme fondation.

## Pourquoi cela appartient tard dans le parcours

On ne peut pas parler honnêtement de confidentialité sur une plateforme avant que le livre ait bâti isolation OS, réseaux, systèmes distribués et infra IA. Ces chapitres sont le substrat. Celui-ci nomme les contraintes adversariales et façonnées par le consentement qui chevauchent dessus — pour que la synthèse plateforme puisse traiter l'ingénierie privacy comme une couche de premier rang, pas une annexe.

Ensuite : [Visions qui ont shippé]({{< relref "75-visions-that-shipped" >}}).

## Sources

- Saltzer & Schroeder, *The Protection of Information in Computer Systems* (1975, MIT)
- Diffie & Hellman, *New Directions in Cryptography* (1976)
- RFC 8446 (TLS 1.3) ; RFC 6749 (OAuth 2.0)
- Wikipedia — Kerberos (protocol) ; Needham–Schroeder protocol
