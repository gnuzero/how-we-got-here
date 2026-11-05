# Noindex pre-launch — flip plan

Goal: when the site goes from private to public, it is live and reachable (no 404s) but not indexed by search engines or AI crawlers until the official announcement. Trusted readers already know the URL; nothing is being pasted on social media. The public URL will also change, so anything indexed under the old address dies once DNS points elsewhere — **do not** add a redirect from the old URL.

## What shipped (this PR)

1. `static/robots.txt` — `User-agent: *` / `Disallow: /`, plus the same Disallow for named AI/search bots (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, Googlebot, Bingbot, PerplexityBot, CCBot, Bytespider, Applebot-Extended, Amazonbot, Meta-ExternalAgent, cohere-ai).
2. `layouts/_partials/docs/inject/head.html` — emits `<meta name="robots" content="noindex, nofollow">` when `[params] noindex = true`.
3. `layouts/alias.html` — same gate on Hugo alias/redirect stubs (they do not run the theme head inject).
4. `hugo.toml` — `[params] noindex = true`.
5. Six static lab shells under `static/labs/*/index.html` — hand-edited meta + HTML comment marker `<!-- NOINDEX-PRELAUNCH: remove at announcement -->` (these bypass Hugo templates).

## Honest limits

- `Disallow: /` stops well-behaved crawlers from fetching pages. It does **not** reliably keep a URL out of a search index if that URL is linked from elsewhere — engines may list the bare URL without reading a noindex signal.
- The meta tag is what asks engines not to index a page they **do** fetch. Compliant crawlers must be **allowed** to fetch the HTML to see the tag. A blanket Disallow therefore prevents them from ever reading noindex.
- **GitHub Pages cannot send an `X-Robots-Tag` HTTP header**, so the meta tag is the only per-page noindex signal on this host.
- Both mechanisms are voluntary. Scrapers and some AI crawlers may ignore them.
- While the site is still login-gated, the login wall is the real access control. robots.txt + meta are defense-in-depth for the moment the gate comes off.

## Launch steps (order matters)

### Step 1 — at flip to public (while `noindex` is still true)

Replace `static/robots.txt` with allow-all so compliant crawlers can fetch pages and read the noindex meta tag. Leave `params.noindex = true`.

```
User-agent: *
Disallow:
```

(Empty `Disallow:` means “allow everything.” Keeping an explicit allow-all file is clearer than deleting `robots.txt`.)

Do **not** flip `params.noindex` in this step.

### Step 2 — at the announcement

1. In `hugo.toml`, set:

```
noindex = false
```

2. Remove the lab-shell markers and meta tags (exact command from repo root):

```bash
sed -i '/NOINDEX-PRELAUNCH: remove at announcement/{N;d;}' static/labs/*/index.html
```

That deletes the HTML comment line and the following `<meta name="robots" content="noindex,nofollow">` line in each of the six lab shells. Verify with:

```bash
grep -R 'NOINDEX-PRELAUNCH\|name="robots"' static/labs/*/index.html || echo 'lab shells clean'
```

After rebuild/deploy, no robots meta is emitted from Hugo templates (param false) and none remains in the lab shells.

## Why two steps

Removing Disallow first lets crawlers see the still-true noindex tag during the announcement gap. Flipping the param (and clearing lab markers) at announcement is the single toggle that opens indexing. Do not reverse the order.
