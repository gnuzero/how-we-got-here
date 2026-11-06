---
title: "Qui décide du fil"
weight: 72
date: 2026-09-06
draft: false
phase: "Governance / Internet Civics"
series_index: 71
aliases:
  - /posts/64-who-decides-the-wire/
  - /posts/70-who-decides-the-wire/
  - /posts/71-who-decides-the-wire/
tags: []
summary: "Qui nomme les numéros, les noms et les encodages pour que des réseaux hétérogènes interopèrent — et ce que le Minitel a déjà tranché à la française"
image_prompt: "Clean diagram of shared registries — protocol numbers, IP addresses, domain names, Unicode code points — flowing into one interoperable packet path, internet-governance infographic style"
video_prompt: "20-second animation: a packet gaining meaning only after number, name, and encoding registries agree, clean technical motion graphics"
schematics: "Diagram: numbers (IANA) / addresses (RIRs) / names (DNS+ICANN) / encodings (Unicode) as four shared coordination layers above TCP/IP"
---

ARPANET et TCP/IP ont réglé comment les paquets se déplacent. Ils n'ont pas, à eux seuls, tranché une question plus tranquille : *qui a le droit de dire ce que les bits veulent dire ?* Le port 80, un préfixe IPv4, `.com`, le point de code pour ก — rien de tout cela ne marche si des opérateurs distants ne traitent pas les mêmes identifiants de la même façon. **Notre interprétation** : la gouvernance d'Internet est l'histoire de cet accord — pas un parlement sur le réseau, mais des registres partagés pour les **numéros**, les **noms** et les **encodages**.

La France a tranché autrement, une génération plus tôt, avec un fil unique et un opérateur unique. C'est par là que ce chapitre commence.

## Le Minitel : un fil décidé d'en haut

Télétel — le vidéotex interactif français — naît sous la Direction générale des télécommunications (DGT), au sein des PTT. La notice BnF de Valérie Schafer et Benjamin G. Thierry, *Le Minitel : l'enfance numérique de la France* (Nuvis / Cigref, 2012), place l'objet dans cette télématique d'État des années 1970–1980. ([BnF Catalogue — Schafer & Thierry](https://catalogue.bnf.fr/ark:/12148/cb426947027.public)) Julien Mailland et Kevin Driscoll, dans *Minitel: Welcome to the Internet* (MIT Press, 2017), résument la même architecture : un réseau national sous contrôle de l'opérateur public, déployé massivement avant que le Web grand public n'existe aux États-Unis. ([MIT Press — *Minitel*](https://mitpress.mit.edu/9780262537759/minitel/))

Deux expérimentations sont décidées le **30 novembre 1978** : Télétel 3V à Vélizy, et l'annuaire électronique en Ille-et-Vilaine. ([HistelFrance — Minitel / Télétel / Vidéotex](https://www.histelfrance.fr/minitelteletelvideotex/); archive Orange / télécommunications, [page Télétel](https://web.archive.org/web/20200202233923/https://telecommunications.monsite-orange.fr/page-5a854449a7560.html)) Les dates de démarrage ne sont pas les mêmes. L'annuaire électronique commence en **juillet 1980** à Saint-Malo (55 volontaires : 20 entreprises, 35 particuliers). ([HistelFrance, art. cit.](https://www.histelfrance.fr/minitelteletelvideotex/); [plaquette Annuaire électronique Ille-et-Vilaine, 1983](https://www.histelfrance.fr/storage/2025/07/1983.04PlaquettePresentationAnnuaireElectronique.pdf)) L'expérience Télétel 3V (Vélizy, Versailles, Val-de-Bièvre) s'ouvre pleinement au public le **15 juin 1981** (inauguration officielle le **9 juillet 1981**) auprès de 2 500 ménages volontaires, et se termine le **31 décembre 1982**. ([HistelFrance](https://www.histelfrance.fr/minitelteletelvideotex/); [supplément RFT « Télétel un peu d'histoire », 1985](https://www.histelfrance.fr/storage/2025/07/1985.09TeletelUnPeudHistoireSupplementRFT.pdf)) Quand on dit « essai de Vélizy en 1980 », on confond souvent la décision et la préparation avec l'ouverture publique de 1981 ; les sources ouvertes ici placent l'ouverture en 1981.

L'annuaire électronique est généralisé en Ille-et-Vilaine (et en Bretagne) en **1983** ; le ministre des PTT Louis Mexandeau l'inaugure le **4 février 1983**. ([HistelFrance](https://www.histelfrance.fr/minitelteletelvideotex/)) La DGT misait sur un terminal bon marché, distribué massivement. Mailland et Driscoll écrivent que France Télécom (héritière de la DGT) a contourné le problème d'adoption en donnant des terminaux Minitel à quiconque avait une ligne téléphonique — gratuits au bureau de poste local. ([MIT Press — entretien Mailland & Driscoll](https://mitpress.mit.edu/julien-mailland-and-kevin-driscoll-talk-minitel/)) Une réponse du gouvernement au Sénat (1997) confirme la même cause de croissance : « distribution massive de terminaux gratuits » dans les années 1980, achevée au début des années 1990. ([Sénat — question QSEQ971003668](https://www.senat.fr/questions/base/1997/qSEQ971003668.html))

Le modèle économique du *kiosque* facture l'usage sur la facture téléphonique : l'opérateur encaisse, puis reverse une part aux éditeurs de services. Les numéros courts **3613**, **3614** et **3615** sont créés le **8 juillet 1986**. ([archive Orange — chronologie Télétel](https://web.archive.org/web/20200202233923/https://telecommunications.monsite-orange.fr/page-5a854449a7560.html)) Le **3615** devient le code le plus célèbre des services payants.

Les chiffres de parc divergent selon la date et la définition (terminaux physiques vs accès émulés). L'archive Orange / HistelFrance donne, entre autres : **3,4 millions** de Minitel en service (fin des années 1980), **4 millions** au **31 mars 1988**, **5,6 millions** au **31 décembre 1990**, **6,2 millions** ensuite. ([archive Orange](https://web.archive.org/web/20200202233923/https://telecommunications.monsite-orange.fr/page-5a854449a7560.html)) Le Sénat, citant France Télécom, place à **7,6 millions** le parc total de terminaux permettant de consulter les services télématiques au **31 décembre 1996** (Minitel + micros émulés). ([Sénat, art. cit.](https://www.senat.fr/questions/base/1997/qSEQ971003668.html)) MIT Press parle de « tens of millions of users » avant le Web grand public américain. ([MIT Press — *Minitel*](https://mitpress.mit.edu/9780262537759/minitel/)) Nous ne fusionnons pas ces chiffres.

Le service s'arrête le **30 juin 2012**. La réponse ministérielle à une question à l'Assemblée nationale retrace : annonce dès **janvier 2010** de la fermeture technique de l'offre X25 (support du Minitel) prévue d'abord au 30 septembre 2011, puis report de la fermeture technique définitive au **30 juin 2012**. ([Assemblée nationale — QE 119752](https://www.assemblee-nationale.fr/dyn/13/questions/QANR5L13QE119752)) MIT Press confirme la fermeture en 2012 après trois décennies. ([MIT Press — *Minitel*](https://mitpress.mit.edu/9780262537759/minitel/))

**Notre interprétation** : le Minitel a montré qu'un réseau grand public peut réussir *sans* registres mondiaux ouverts — à condition qu'un seul opérateur décide du terminal, du réseau, de la facturation et des codes d'accès. Le débat Minitel / Internet ouvert porte exactement sur ce point : réussite nationale centralisée contre interopérabilité sans centre unique. Mailland et Driscoll insistent sur l'équilibre public/privé, ouvert/fermé, centralisé/décentralisé du système, et sur ce que cette histoire devrait encore dire à la politique d'Internet. ([MIT Press — *Minitel*](https://mitpress.mit.edu/9780262537759/minitel/); [entretien](https://mitpress.mit.edu/julien-mailland-and-kevin-driscoll-talk-minitel/)) Le reste de ce chapitre suit l'autre voie : comment l'Internet mondial a construit des registres partagés pour que des réseaux hétérogènes parlent la même langue.

## Des documents avant les institutions

Le premier outil de coordination a été une série de documents. En **avril 1969**, Steve Crocker publie le [RFC 1](https://www.rfc-editor.org/rfc/rfc1) — *Host Software* — comme notes de travail pour la communauté de recherche ARPANET. Le ton compte : « Request for Comments », pas « édit ». Jon Postel édite la série près de trois décennies. Porte de sortie : [l'histoire du RFC Editor](https://www.rfc-editor.org/history/).

Quand la communauté dépasse les réunions de couloir, elle fait croître l'Internet Engineering Task Force (IETF). La formule porteuse est celle de Dave Clark : *rough consensus and running code* — les standards gagnent leur place en étant déployés, pas en étant votés. L'IETF ne possède pas Internet ; elle possède un processus pour argumenter des protocoles jusqu'à ce que les opérateurs les déploient. Porte de sortie : [ietf.org](https://www.ietf.org/).

## Numéros : quelqu'un doit distribuer les identifiants

Les paquets portent des numéros de protocole, de ports, des blocs d'adresses, des ASN, des types de média — identifiants sans valeur si deux groupes inventent le même pour des sens différents. Pendant des années, ce registre a vécu en un seul lieu : l'Internet Assigned Numbers Authority (IANA), tenue comme service pratique par Jon Postel (avec Joyce Reynolds comme contact de longue date) sous contrats de recherche à UCLA puis USC/ISI. L'IANA est la graine d'un *genre* : un registre neutre de paramètres de protocole pour que les mises en œuvre interopèrent sans négociation bilatérale. ([iana.org](https://www.iana.org/))

À mesure que le réseau dépasse le carnet d'une seule personne, les ressources numériques se séparent par *genre*. Les paramètres de protocole restent à l'IANA. L'espace d'adresses IP bascule vers des registres régionaux — ARIN (**1997**) pour une grande partie de l'Amérique du Nord ; RIPE NCC, APNIC, LACNIC et AFRINIC sont le même *genre* pour d'autres régions. Le motif est le point : des identifiants rares et uniques ont besoin d'un dépositaire que tout le monde peut désigner. Portes de sortie : [iana.org](https://www.iana.org/), [arin.net](https://www.arin.net/).

## Noms : les humains veulent des mots ; les machines, de l'unicité

Les spécifications DNS de Paul Mockapetris ([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034), [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) transforment des noms hiérarchiques en système de résolution distribué au-dessus du tissu d'adresses. Les noms sont politiques d'une façon que les numéros bruts ne sont pas. Le [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591) de Jon Postel a cadré tôt la politique de domaines comme une stewardship.

À la fin des années 1990, le gouvernement américain veut sortir ces fonctions de coordination d'un seul contrat de recherche. L'ICANN (Internet Corporation for Assigned Names and Numbers) se forme en **1998** — présidente intérimaire Esther Dyson — pour tenir le siège institutionnel de la politique des noms et des numéros, tandis que l'IANA reste le registre opérationnel sous ce parapluie. ([icann.org](https://www.icann.org/)) Lire l'ICANN comme une autre graine du même *genre* : un corps multi-parties prenantes dont le métier est la stabilité et l'unicité de l'espace de noms partagé, pas de choisir les gagnants parmi les applications.

## Encodages : la charge utile doit signifier le même glyphe

L'interopération échoue en silence quand deux extrémités ne sont pas d'accord sur ce qu'est une séquence d'octets. Le Unicode Consortium (fondé en **1991**) maintient le mapping partagé des caractères abstraits vers des points de code — la raison pour laquelle le thaï, le latin et les emoji peuvent partager un même fil. UTF-8 est devenu l'encodage dominant *sur le fil* pour ce répertoire. Portes de sortie : [unicode.org](https://www.unicode.org/), [Unicode Standard](https://www.unicode.org/standard/standard.html).

## Parents du même genre

Quelques pairs méritent une phrase — même *genre* de sens partagé, pas une visite guidée des organismes de normalisation :

- **W3C et WHATWG** — Tim Berners-Lee fonde le World Wide Web Consortium (**1994**) pour la stewardship des standards de plateforme Web ; le WHATWG porte ensuite les spécifications vivantes HTML/DOM quand les éditeurs de navigateurs ont besoin d'un rythme plus rapide. Même *genre* : qui peut définir ce qu'un document et une API veulent dire dans le navigateur.
- **IEEE** — IEEE 802 est pourquoi Ethernet et le Wi-Fi ne sont pas des dialectes d'îlots propriétaires à la couche liaison.
- **ISO et pairs** — les normes internationales formelles siègent à côté du monde des RFC là où les achats publics, la sécurité ou les organismes nationaux l'exigent ; Internet a surtout expédié d'abord sur les RFC, puis harmonisé.

## Pourquoi cela appartient au parcours

**Notre interprétation** : le sens partagé est une infrastructure. Sans quelqu'un (et un processus) pour décider numéros, noms et encodages, chaque nouveau réseau est une langue privée. Le Minitel a tranché en centralisant le fil ; l'Internet mondial a tranché en multipliant les registres. Les portes ci-dessus — RFC, registres, pages de consortiums, archives Minitel — sont les sources primaires.

## Sources

- BnF Catalogue — Schafer & Thierry, *Le Minitel* : <https://catalogue.bnf.fr/ark:/12148/cb426947027.public>
- MIT Press — Mailland & Driscoll, *Minitel* / entretien : <https://mitpress.mit.edu/9780262537759/minitel/> · <https://mitpress.mit.edu/julien-mailland-and-kevin-driscoll-talk-minitel/>
- HistelFrance — Minitel / Télétel ; plaquette Ille-et-Vilaine ; RFT 1985 : <https://www.histelfrance.fr/minitelteletelvideotex/> · <https://www.histelfrance.fr/storage/2025/07/1983.04PlaquettePresentationAnnuaireElectronique.pdf> · <https://www.histelfrance.fr/storage/2025/07/1985.09TeletelUnPeudHistoireSupplementRFT.pdf>
- Archive Orange — chronologie Télétel : <https://web.archive.org/web/20200202233923/https://telecommunications.monsite-orange.fr/page-5a854449a7560.html>
- Sénat — QSEQ971003668 : <https://www.senat.fr/questions/base/1997/qSEQ971003668.html>
- Assemblée nationale — QE 119752 (fermeture 30 juin 2012) : <https://www.assemblee-nationale.fr/dyn/13/questions/QANR5L13QE119752>
- RFC 1, 1034, 1035, 1591 ; RFC Editor history ; IETF ; IANA ; ARIN ; ICANN ; Unicode : <https://www.rfc-editor.org/rfc/rfc1> · <https://www.rfc-editor.org/history/> · <https://www.ietf.org/> · <https://www.iana.org/> · <https://www.arin.net/> · <https://www.icann.org/> · <https://www.unicode.org/>
