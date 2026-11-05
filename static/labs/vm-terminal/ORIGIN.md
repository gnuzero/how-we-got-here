# VM Terminal Lab — third-party runtime

This directory’s wrapper page (`index.html`) is part of *How We Got There*
(CC BY 4.0). The binaries under `assets/` are **not** CC BY; they keep their
upstream licenses.

## v86 (emulator)

- Project: https://github.com/copy/v86 by Fabian (@copy) and contributors
- License: BSD-2-Clause — https://github.com/copy/v86/blob/master/LICENSE
  (verified 2026-11-05: GitHub API `BSD-2-Clause`; raw LICENSE is the two-clause
  BSD text, copyright “The v86 contributors”)
- Homepage: https://copy.sh/v86/
- Build we ship (fingerprints checked 2026-11-05 against live copy.sh and npm):
  - `libv86.js` SHA-256 `b80fba71dacb7977e5b46800b3ba194bba7fe13e52fa3d22f80cc060ff015a4e`
    matches https://copy.sh/v86/build/libv86.js (Last-Modified 2026-07-05) and
    npm package version string `v86@0.5.424+g2f1346b` (`package.json` version
    field; tarball `v86-0.5.424.tgz`)
  - Same JS generation corresponds to git commit
    `2f1346b0e7d88d4cbbbcc05fe15b4e369c3de23f` (“ps2: don't send wheel packets if
    disabled”, verified on github.com/copy/v86)
  - `v86.wasm` SHA-256 `abd512988f39f5c81d4930f564bafa1a6e1e0d5210de9b20e2bdec13fbc318d9`
    matches https://copy.sh/v86/build/v86.wasm (Last-Modified 2026-07-05);
    **not** identical to the wasm inside the npm `0.5.424` tarball (that wasm is
    ~2.0 MB, SHA-256 `aec2c16bb0a1618aa641bb44d9c0fe14681f8c1459fa08c32e3e0562020884e8`)

Prefer describing the source as **copy.sh `/v86/build/` + commit `2f1346b`**,
not “npm 0.5.424” alone, because the wasm we ship is the copy.sh artifact.

## SeaBIOS firmware (`seabios.bin`, `vgabios.bin`)

- Built from SeaBIOS `rel-1.16.2` via copy/v86 `bios/fetch-and-build-seabios.sh`
  (script checks out that tag and copies both `out/bios.bin` → `seabios.bin` and
  `out/vgabios.bin` → `vgabios.bin`). Tag `rel-1.16.2` verified on
  https://github.com/coreboot/seabios.
- License: **LGPLv3** — copy/v86 ships `bios/COPYING.LESSER` (GNU Lesser GPL
  version 3 text, verified); coreboot/seabios tag `rel-1.16.2` also has
  `COPYING.LESSER` + `COPYING` (GPLv3). Project docs: https://www.seabios.org/
- Source: https://git.seabios.org/seabios.git or
  https://github.com/coreboot/seabios/tree/rel-1.16.2
- Our binaries match the filenames shipped under copy/v86 `bios/`.

## Linux disk image (`linux4.iso`)

- Source URL matched: https://copy.sh/v86/images/linux4.iso
  (Content-Length 7712768; Last-Modified 2018-06-04; SHA-256
  `cb403835be0d857191cdeb86efc8d559b94a787d6fcb57e0a04667296405c223`)
- **Differs from** current https://i.copy.sh/linux4.iso (Content-Length 7731200;
  Last-Modified 2024-06-25) — do not treat that CDN path as this file.
- Image identity string (from the ISO): Linux 4.16.13 (fabian@nyu) #12 SMP Sun
  Jun 3 17:13:36 EST 2018, Buildroot 2018.08-git-00153-g8ac477681f, gcc 7.3.0
- Kernel: GPL-2.0. Buildroot userland: mixed free licenses (including GPL).
- Corresponding source / written offer: rebuild a similar image with Buildroot
  (https://buildroot.org/; v86 README Buildroot notes at
  https://github.com/copy/v86#compatibility). While this ISO is distributed from
  this site, contact the book maintainers for the preferred source-offer channel.

**Unconfirmed:** The exact 2018 Buildroot defconfig / package set for Fabian’s
NYU `linux4.iso` was not located in https://github.com/copy/images (that repo
currently lists `linux.iso`, not `linux4.iso`). A bit-for-bit source tree for
this image may need reconstruction from the ISO or asking upstream (@copy).
BusyBox and other userland package versions inside the ISO were not fully
inventoried in the provenance pass.

## Aggregation

Shipping these binaries beside CC BY 4.0 book text is mere aggregation: each
component keeps its own license. CC BY 4.0 does not relicense the BSD/LGPL/GPL
binaries.
