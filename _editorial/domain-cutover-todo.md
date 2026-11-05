# TODO — domain cutover to howwegothere.org

Status: **not started.** The book title is now "How We Got There" (approved 2026-11-05), but the
site still serves from `https://how-we-got-here.org/`. Do NOT change any of the items below until
DNS for `howwegothere.org` points at GitHub Pages and Nayana says go.

Change at cutover, in one PR:

1. `hugo.toml` line 1 — `baseURL = "https://how-we-got-here.org/"` → `https://howwegothere.org/`.
   (og:url, canonical links, sitemap.xml, RSS and the 416 alias redirect stubs all derive from baseURL.)
2. `CNAME` (repo root) — `how-we-got-here.org` → `howwegothere.org`.
3. GitHub **Settings → Pages → Custom domain** — set `howwegothere.org` (Actions deploys ignore the
   CNAME file; this setting is what counts). Re-enable "Enforce HTTPS" after the cert issues.
4. `.github/workflows/deploy.yml` — check any `--baseURL` / base-url input and update it.
5. `README.md` lines 7 and 59 — live-site URL.
6. `DEPLOY.md` lines 3, 5, 14, 15, 43 — production URL, custom-domain notes, build command.
7. `static/robots.txt` — if a `Sitemap:` line is added at launch, use the new domain.
8. Decide what `how-we-got-here.org` does afterwards (keep as a redirect domain; GitHub Pages
   serves only one custom domain, so a redirect needs a separate host or registrar forwarding).
9. Rebuild and grep `public/` for `how-we-got-here.org` — expect 0 hits.

Not changing: repo name `gnuzero/how-we-got-here` and `BookRepo` in `hugo.toml` (separate decision).
