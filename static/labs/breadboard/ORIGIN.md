# Virtual Breadboard Lab

**Wrapper (`index.html`, `and.txt`):** part of *How We Got There* (CC BY 4.0).
Circuit data for the default AND gate is embedded in the iframe URL and copied
locally as `and.txt`.

**Simulator (when embedded from falstad.com):**
- CircuitJS1 — originally by Paul Falstad; JavaScript/GWT port by Iain Sharp
- Upstream: https://github.com/sharpie7/circuitjs1 (also https://www.falstad.com/circuit/)
- License: GNU GPL v2 or later — GitHub repo metadata SPDX `GPL-2.0` with
  `COPYING.txt` = stock GPLv2; README and source headers (e.g. `CirSim.java`)
  say “either version 2 of the License, or (at your option) any later version”
  (verified 2026-11-05). Treat as **GPL-2.0-or-later**.
- Copyright: Paul Falstad and Iain Sharp

Today this lab only iframes the hosted Falstad UI. That embed alone does not
put our wrapper under GPL.

**If this lab is later self-hosted from a gnuzero fork of circuitjs1:** that is
allowed. The hosted simulator build must carry GPL notices and corresponding
source; the book chapters remain CC BY 4.0 under mere aggregation of separate
works (FSF GPL FAQ — aggregation). Self-hosting is a license tradeoff for the
lab binary/UI, not a blocker on forking into gnuzero.
