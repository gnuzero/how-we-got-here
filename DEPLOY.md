# Deploy — From Relays to Attention

Production site: https://how-we-got-here.org/  
Repo: https://github.com/gnuzero/how-we-got-here  
(`https://gnuzero.github.io/how-we-got-here/` 301-redirects to the apex domain.)

## How it deploys

- **Pages source:** Settings → Pages → Source: **GitHub Actions** (not "Deploy from a branch").
- **Workflow:** `.github/workflows/deploy.yml` ("Deploy Hugo site to Pages") runs on every push to `main` and on manual `workflow_dispatch`.
  - Hugo **0.158.0 extended** (`peaceiris/actions-hugo@v3`), checkout with `submodules: recursive`.
  - Build: `hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"` — the Pages step supplies the URL, so the deployed site follows the custom domain configured in Settings → Pages.
  - Uploads `./public` and deploys with `actions/deploy-pages@v4`.
- **baseURL:** `hugo.toml` sets `baseURL = "https://how-we-got-here.org/"` so local production builds match the deployed site.
- **Custom domain:** `how-we-got-here.org`, set in Settings → Pages. The root `CNAME` file records the same name; with an Actions deploy GitHub ignores CNAME files, so the Settings value is what counts.
- **Access:** as of 2026-09-26 the site is behind GitHub Pages access control (visitors are redirected to GitHub sign-in). Change Pages visibility in Settings → Pages when it is ready to be public.

## Theme

- `themes/hugo-book` is a git submodule (`.gitmodules` → https://github.com/alex-shpak/hugo-book.git).
- Clone with submodules:
  ```bash
  git clone --recurse-submodules https://github.com/gnuzero/how-we-got-here.git
  # or, in an existing clone: git submodule update --init --recursive
  ```

## Drafts

Hugo omits pages with `draft: true` unless you pass `-D`. Almost every chapter is published; check what is still held back with:

```bash
git grep -l '^draft: true' -- 'content*'
```

Flip to `draft: false` only after editorial/fact-check sign-off.

## Local build

```bash
git submodule update --init --recursive
hugo server -D                                       # include drafts while editing
hugo --minify                                        # production build, uses baseURL from hugo.toml
hugo --minify --baseURL "https://how-we-got-here.org/"   # same flag shape as the Pages workflow
```

After a push to `main`, the Actions tab → "Deploy Hugo site to Pages" should go green.

Last updated: 2026-09-26
