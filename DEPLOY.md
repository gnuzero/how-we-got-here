# Deploy — From Relays to Attention

Target site: https://devzer01.github.io/how-computers-work/  
Repo (expected): https://github.com/devzer01/how-computers-work

## What this repo already has

- `hugo.toml` with the correct `baseURL` and `theme = "hugo-book"`
- `.github/workflows/deploy.yml` — Hugo Extended build + GitHub Pages deploy on push to `main`
- Local git repo on branch `main`
- **hugo-book theme submodule** at `themes/hugo-book` (`.gitmodules` → https://github.com/alex-shpak/hugo-book.git)

## Still missing before the first green deploy

1. **Remote + push** — this tree is local only (no `origin` yet). Create `devzer01/how-computers-work` if needed, add remote, push `main` (includes submodule commit pointer + `.gitmodules`).
2. **GitHub Pages source** — Settings → Pages → Source: **GitHub Actions** (not "Deploy from a branch").
3. **Clone elsewhere with submodules** — after push, others need:
   ```bash
   git clone --recurse-submodules https://github.com/devzer01/how-computers-work.git
   # or: git submodule update --init --recursive
   ```
4. **Drafts** — chapter posts still have `draft: true`. Hugo omits drafts unless you pass `-D`. Flip `draft: false` only after editorial/fact-check sign-off.

## One-time smoke test locally

```bash
git submodule update --init --recursive
hugo server -D   # include drafts while editing
hugo --minify    # production build (drafts excluded)
```

## After first push

Actions tab → "Deploy Hugo site to Pages" should go green. Site URL matches `baseURL` in `hugo.toml`.

Last updated: 2026-08-23

## Custom domain

Deferred until DNS is ready: `read.relays-to-attention.org`.
Until then production is `https://gnuzero.github.io/how-we-got-here/`.
Pages source: **GitHub Actions**.
