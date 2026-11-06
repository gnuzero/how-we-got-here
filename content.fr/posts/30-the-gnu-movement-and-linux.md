---
title: "Le mouvement GNU et Linux"
weight: 30
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 29
aliases:
  - /posts/23-the-gnu-movement-and-linux/
  - /posts/28-the-gnu-movement-and-linux/
  - /posts/29-the-gnu-movement-and-linux/
tags: []
summary: "Unix se ferme ; Stallman construit un userland libre ; Torvalds comble le trou du noyau — la GPL garde la combinaison ouverte"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

Au début des années 1980, Unix est techniquement excellent et de plus en plus propriétaire. La réponse de Richard Stallman, à partir de 1983, n'est pas d'abord un correctif technique. Elle est idéologique et juridique : construire de zéro un remplacement Unix entièrement libre (comme en liberté, pas seulement en prix), et l'adosser à une licence conçue pour le garder ainsi.

## GNU : userland sans noyau

Le *GNU Manifesto* : « GNU, which stands for Gnu's Not Unix, is the name for the complete Unix-compatible software system which I am writing so that I can give it away free to everyone who can use it ». Stallman liste déjà Emacs, un débogueur, yacc, un linker, ~35 utilitaires ; « An initial kernel exists but many more features are needed to emulate Unix. When the kernel and compiler are finished, it will be possible to distribute a GNU system suitable for program development. » ([Stallman, *The GNU Manifesto*, 1985 — archive FSF](https://web.archive.org/web/20240101000000/https://www.gnu.org/gnu/manifesto.html))

Ce que GNU n'a pas eu pendant des années, c'est un noyau pratique sur du vrai matériel. Le noyau prévu, GNU Hurd, rencontre de sérieuses difficultés. Userland mature ; pas de noyau dessous pour le grand public.

## La GPL : le copyright retourné vers l'extérieur

La *GNU General Public License* (GPL) est une licence « copyleft ». Dans les notes de Linux 0.12, Torvalds lui-même parle de « the GNU copyleft ». ([Linux v0.12 RELEASE NOTES — COPYRIGHT](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12)) La GPL v2 exige, pour une œuvre distribuée qui « in whole or in part contains or is derived from the Program », de faire porter aux fichiers modifiés des notices et de rendre le code source disponible sous les mêmes termes. ([GNU GPL v2 — archive FSF](https://web.archive.org/web/20240101000000/https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)) **Notre interprétation** : le copyright, d'habitude outil pour *restreindre* la redistribution, sert ici à garantir que la liberté se propage dans chaque dérivé.

## Linux comble le trou

En 1991, l'étudiant finlandais Linus Torvalds annonce : « I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones. » ([Torvalds, annonce Usenet — reprise dans *LINUX's History*](https://www.cs.cmu.edu/~awb/linux.history.html)) Dans les notes 0.12, il propose d'aligner le copyright sur « the GNU copyleft », « removing the "you may not distribute it for money" condition », effectif « as of the first of February ». ([RELNOTES-0.12](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12))

La combinaison : GNU avait un userland mature sans noyau pratique ; Linux était un noyau fonctionnel sans userland. Ensemble, utilitaires GNU sur noyau Linux = système Unix-compatible librement licencié — souvent dit « Linux », plus précisément « GNU/Linux » pour la combinaison.

**Essaie maintenant.** Démarrez la VM ci-dessous, puis `uname`, `whoami`, `ls` — vous êtes du côté GNU/Linux de cette combinaison, dans le navigateur.

{{< lab type="vm-terminal" height="600" >}}

Le noyau Linux actuel se déclare encore sous GPL-2.0 (avec note syscall). ([linux/COPYING](https://raw.githubusercontent.com/torvalds/linux/master/COPYING))

Ensuite : [Mémoire virtuelle et multitâche]({{< relref "31-virtual-memory-and-multitasking" >}}).

## Sources

- Stallman, *GNU Manifesto* (archive) : <https://web.archive.org/web/20240101000000/https://www.gnu.org/gnu/manifesto.html>
- GNU GPL v2 (archive) : <https://web.archive.org/web/20240101000000/https://www.gnu.org/licenses/old-licenses/gpl-2.0.html>
- Torvalds — annonce / historique : <https://www.cs.cmu.edu/~awb/linux.history.html>
- Linux v0.12 RELNOTES : <https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12>
- linux/COPYING : <https://raw.githubusercontent.com/torvalds/linux/master/COPYING>
