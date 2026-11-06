#!/usr/bin/env python3
"""Apply _editorial/chapter-map.json: rename posts, accumulate aliases, sync
weight/series_index, rewrite relrefs and editorial path mentions.

Numbering is provisional. Edit the map, then re-run. Aliases accumulate so
every earlier URL stem under posts/ keeps resolving. Does not rewrite git
history. Chinese NN-zh-* parallel spine is out of scope (see map policy).

Usage:
  python3 scripts/renumber.py
  python3 scripts/renumber.py --check
  python3 scripts/renumber.py --dry-run
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAP_JSON = ROOT / "_editorial" / "chapter-map.json"
MAP_MD = ROOT / "_editorial" / "chapter-map.md"

LOCALE_DIRS = {
    "en": ROOT / "content" / "posts",
    "th": ROOT / "content.th" / "posts",
    "si": ROOT / "content.si" / "posts",
    "ta": ROOT / "content.ta" / "posts",
    "ro": ROOT / "content.ro" / "posts",
    "zh-hans": ROOT / "content.zh-hans" / "posts",
    "zh-hant": ROOT / "content.zh-hant" / "posts",
    "ar": ROOT / "content.ar" / "posts",
    "de": ROOT / "content.de" / "posts",
    "he": ROOT / "content.he" / "posts",
    "hi": ROOT / "content.hi" / "posts",
    "sa": ROOT / "content.sa" / "posts",
    "sw": ROOT / "content.sw" / "posts",
    "es": ROOT / "content.es" / "posts",
    "pt": ROOT / "content.pt" / "posts",
    "nl": ROOT / "content.nl" / "posts",
    "fr": ROOT / "content.fr" / "posts",
    "ja": ROOT / "content.ja" / "posts",
    "ko": ROOT / "content.ko" / "posts",
}
NOTE_GLOBS = ["TRANSLATIONS.md", "README.md", "_editorial/*.md"]
FM_SPLIT = re.compile(r"\A---\r?\n(.*?)\r?\n---\r?\n", re.S)


def load_map() -> dict:
    return json.loads(MAP_JSON.read_text(encoding="utf-8"))


def save_map(doc: dict) -> None:
    MAP_JSON.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def target_name(entry: dict) -> str:
    return entry["file"]


def stem(name: str) -> str:
    return name[:-3] if name.endswith(".md") else name


def find_existing(dirpath: Path, entry: dict) -> Path | None:
    candidates = [target_name(entry)]
    if entry.get("former_file"):
        candidates.append(entry["former_file"])
    for s in entry.get("alias_history") or []:
        candidates.append(s if s.endswith(".md") else f"{s}.md")
    seen = set()
    for c in candidates:
        if c in seen:
            continue
        seen.add(c)
        p = dirpath / c
        if p.exists():
            return p
    return None


def split_fm(text: str) -> tuple[list[str], str] | None:
    m = FM_SPLIT.match(text)
    if not m:
        return None
    fm_lines = m.group(1).splitlines()
    body = text[m.end():]
    return fm_lines, body


def join_fm(fm_lines: list[str], body: str) -> str:
    fm = "\n".join(fm_lines).rstrip() + "\n"
    return f"---\n{fm}---\n{body}"


def fm_get_scalar(fm_lines: list[str], key: str) -> str | None:
    prefix = key + ":"
    for line in fm_lines:
        if line.startswith(prefix):
            return line[len(prefix):].strip()
    return None


def fm_set_scalar(fm_lines: list[str], key: str, value: str) -> list[str]:
    prefix = key + ":"
    out = []
    found = False
    for line in fm_lines:
        if line.startswith(prefix) and not found:
            out.append(f"{key}: {value}")
            found = True
        else:
            out.append(line)
    if not found:
        # insert after title if present else at top
        inserted = False
        new = []
        for line in out:
            new.append(line)
            if not inserted and line.startswith("title:"):
                new.append(f"{key}: {value}")
                inserted = True
        if not inserted:
            new.insert(0, f"{key}: {value}")
        return new
    return out


def fm_get_aliases(fm_lines: list[str]) -> list[str]:
    aliases = []
    i = 0
    while i < len(fm_lines):
        if fm_lines[i].startswith("aliases:"):
            rest = fm_lines[i][len("aliases:"):].strip()
            if rest in ("[]", ""):
                i += 1
                while i < len(fm_lines) and re.match(r"^[ \t]*-", fm_lines[i]):
                    item = re.sub(r"^[ \t]*-[ \t]*", "", fm_lines[i]).strip().strip("'\"")
                    aliases.append(item)
                    i += 1
                return aliases
            # inline list not used
            return aliases
        i += 1
    return aliases


def fm_set_aliases(fm_lines: list[str], aliases: list[str]) -> list[str]:
    # drop existing aliases block
    out: list[str] = []
    i = 0
    while i < len(fm_lines):
        if fm_lines[i].startswith("aliases:"):
            i += 1
            while i < len(fm_lines) and re.match(r"^[ \t]*-", fm_lines[i]):
                i += 1
            continue
        out.append(fm_lines[i])
        i += 1
    block = ["aliases:"] + [f"  - {a}" for a in aliases] if aliases else ["aliases: []"]
    # insert after series_index, else weight, else title
    for anchor in ("series_index:", "weight:", "title:"):
        new = []
        inserted = False
        for line in out:
            new.append(line)
            if not inserted and line.startswith(anchor):
                new.extend(block)
                inserted = True
        if inserted:
            return new
    return block + out


def alias_path(s: str) -> str:
    return f"/posts/{stem(s)}/"


def update_front_matter(text: str, entry: dict, alias_stems: list[str], current_stem: str) -> str:
    split = split_fm(text)
    if not split:
        raise ValueError("missing front matter")
    fm_lines, body = split
    fm_lines = fm_set_scalar(fm_lines, "weight", str(entry["weight"]))
    if entry.get("series_index") is not None:
        fm_lines = fm_set_scalar(fm_lines, "series_index", str(entry["series_index"]))
    existing = fm_get_aliases(fm_lines)
    current = alias_path(current_stem)
    wanted: list[str] = []
    seen = set()
    for a in existing + [alias_path(s) for s in alias_stems]:
        if not a.endswith("/"):
            a = a + "/"
        if a == current:
            continue
        if a not in seen:
            seen.add(a)
            wanted.append(a)
    fm_lines = fm_set_aliases(fm_lines, wanted)
    return join_fm(fm_lines, body)


def two_phase_renames(renames: list[tuple[Path, Path]], dry: bool) -> None:
    renames = [(s, d) for s, d in renames if s.resolve() != d.resolve()]
    if not renames:
        return
    temps = []
    for i, (src, dst) in enumerate(renames):
        if not src.exists():
            raise FileNotFoundError(src)
        tmp = src.with_name(f".__renumber_tmp_{i}__{src.name}")
        if dry:
            temps.append((tmp, dst))
            continue
        if tmp.exists():
            raise FileExistsError(tmp)
        src.rename(tmp)
        temps.append((tmp, dst))
    if dry:
        return
    for tmp, dst in temps:
        if dst.exists():
            raise FileExistsError(dst)
        tmp.rename(dst)


def build_replace_pairs(doc: dict) -> list[tuple[str, str]]:
    pairs = []
    for e in doc["entries"]:
        new = target_name(e)
        new_stem = stem(new)
        olds = []
        if e.get("former_file"):
            olds.append(e["former_file"])
        for s in e.get("alias_history") or []:
            olds.append(s if s.endswith(".md") else f"{s}.md")
        for old in olds:
            if old == new:
                continue
            pairs.append((old, new))
            pairs.append((stem(old), new_stem))
    seen = set()
    out = []
    for a, b in sorted(pairs, key=lambda x: len(x[0]), reverse=True):
        if (a, b) in seen or a == b:
            continue
        seen.add((a, b))
        out.append((a, b))
    return out


def rewrite_text(text: str, pairs: list[tuple[str, str]]) -> str:
    for old, new in pairs:
        text = text.replace(old, new)
    return text


def rewrite_notes(doc: dict, dry: bool) -> list[str]:
    pairs = build_replace_pairs(doc)
    tag_map = []
    for e in doc["entries"]:
        new_stem = stem(target_name(e))
        for t in e.get("former_tags") or []:
            if re.search(r"[a-z]", t):
                tag_map.append((t, f"ch {e['public']} ({new_stem})"))
    tag_map.sort(key=lambda x: len(x[0]), reverse=True)
    changed = []
    files = sorted({p for g in NOTE_GLOBS for p in ROOT.glob(g) if p.is_file()})
    for path in files:
        if path.name in {"chapter-map.md", "chapter-map.json"}:
            continue
        original = path.read_text(encoding="utf-8")
        text = rewrite_text(original, pairs)
        for tag, repl in tag_map:
            text = re.sub(rf"(?<![A-Za-z0-9_]){re.escape(tag)}(?![A-Za-z0-9_-])", repl, text)
        if text != original:
            changed.append(str(path.relative_to(ROOT)))
            if not dry:
                path.write_text(text, encoding="utf-8")
    return changed


def rewrite_content_relrefs(doc: dict, dry: bool) -> list[str]:
    """Rewrite path mentions in bodies; never touch the aliases: FM block."""
    pairs = build_replace_pairs(doc)
    changed = []

    def rewrite_file(path: Path) -> None:
        nonlocal changed
        original = path.read_text(encoding="utf-8")
        split = split_fm(original)
        if split:
            fm_lines, body = split
            # strip aliases for rewrite of other fm fields, then restore
            aliases = fm_get_aliases(fm_lines)
            fm_wo = []
            i = 0
            while i < len(fm_lines):
                if fm_lines[i].startswith("aliases:"):
                    i += 1
                    while i < len(fm_lines) and re.match(r"^[ \t]*-", fm_lines[i]):
                        i += 1
                    continue
                fm_wo.append(fm_lines[i])
                i += 1
            fm_text = rewrite_text("\n".join(fm_wo), pairs)
            new_fm_lines = fm_text.splitlines()
            new_fm_lines = fm_set_aliases(new_fm_lines, aliases)
            new_body = rewrite_text(body, pairs)
            text = join_fm(new_fm_lines, new_body)
        else:
            text = rewrite_text(original, pairs)
        if text != original:
            changed.append(str(path.relative_to(ROOT)))
            if not dry:
                path.write_text(text, encoding="utf-8")

    for d in LOCALE_DIRS.values():
        if not d.exists():
            continue
        for path in sorted(d.glob("*.md")):
            rewrite_file(path)
    for base_name in ["content", "content.th", "content.si", "content.ta", "content.ro", "content.zh-hans", "content.zh-hant"]:
        base = ROOT / base_name
        if not base.exists():
            continue
        for path in base.rglob("*.md"):
            if path.parent.name == "posts":
                continue
            rewrite_file(path)
    for folder in [ROOT / "static", ROOT / "layouts", ROOT / "scripts"]:
        if not folder.exists():
            continue
        for path in folder.rglob("*"):
            if not path.is_file() or path.name == "renumber.py":
                continue
            if path.suffix.lower() not in {".md", ".js", ".json", ".html", ".txt", ".py", ".toml"}:
                continue
            try:
                original = path.read_text(encoding="utf-8")
            except Exception:
                continue
            text = rewrite_text(original, pairs)
            if text != original:
                changed.append(str(path.relative_to(ROOT)))
                if not dry:
                    path.write_text(text, encoding="utf-8")
    return sorted(set(changed))


def regenerate_md(doc: dict) -> None:
    lines = [
        "# Chapter map (provisional)",
        "",
        "> **Provisional.** Numbering may change again within ~48h. This file and",
        "> `_editorial/chapter-map.json` are the single source of truth. Apply with",
        "> `python3 scripts/renumber.py`. Aliases accumulate — old URLs keep resolving.",
        ">",
        "> Filenames align to the **public chapter number** (`weight`).",
        "> Chinese `NN-zh-*` pages are a parallel spine and are not in this table.",
        "",
    ]
    if doc.get("provisional_note"):
        lines += [doc["provisional_note"], ""]
    lines += [
        "| Public | New file | Alias history (former URL stems) | Former tags | series_index | Locales |",
        "|---:|---|---|---|---:|---|",
    ]
    for e in doc["entries"]:
        hist = ", ".join(f"`{s}`" for s in (e.get("alias_history") or [])) or "—"
        tags = ", ".join(f"`{t}`" for t in (e.get("former_tags") or [])) or "—"
        locs = ",".join(e.get("locales") or [])
        lines.append(
            f"| {e['public']} | `{target_name(e)}` | {hist} | {tags} | {e.get('series_index')} | {locs} |"
        )
    lines += ["", "## Alpha anchors", "", "| Public | Slug | Former tag |", "|---:|---|---|"]
    for e in doc["entries"]:
        for t in e.get("former_tags") or []:
            if re.search(r"[a-z]", t):
                lines.append(f"| {e['public']} | `{e['slug']}` | `{t}` |")
    lines += [
        "",
        "## Re-run",
        "",
        "1. Edit `_editorial/chapter-map.json` (`weight` / `series_index` / `public` / `file` / `slug`).",
        "2. Previous stems stay in `alias_history` (the script appends on rename).",
        "3. `python3 scripts/renumber.py`",
        "4. Full 7-locale Hugo build; crawl until 0 broken.",
        "",
        "```bash",
        "python3 scripts/renumber.py",
        "python3 scripts/renumber.py --check",
        "```",
        "",
    ]
    MAP_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def apply(doc: dict, dry: bool) -> dict:
    summary = {"renamed": [], "fm_updated": [], "content_rewrites": [], "note_rewrites": [], "missing": []}
    per_locale_ops: dict[str, list] = {loc: [] for loc in LOCALE_DIRS}

    for entry in doc["entries"]:
        tgt = target_name(entry)
        for loc in entry.get("locales") or []:
            d = LOCALE_DIRS.get(loc)
            if not d or not d.exists():
                continue
            src = find_existing(d, entry)
            if src is None:
                summary["missing"].append(f"{loc}:{tgt}")
                continue
            per_locale_ops[loc].append((src, d / tgt, entry, src.stem))

    for loc, ops in per_locale_ops.items():
        two_phase_renames([(s, d) for s, d, e, o in ops], dry=dry)
        for src, dst, entry, old_stem in ops:
            tgt = target_name(entry)
            if src.name != dst.name:
                summary["renamed"].append(f"{loc}:{src.name}->{dst.name}")
            hist = list(entry.get("alias_history") or [])
            if old_stem != stem(tgt) and old_stem not in hist:
                hist.append(old_stem)
            entry["alias_history"] = hist
            if dry:
                summary["fm_updated"].append(f"{loc}:{dst.name} (dry)")
                continue
            path = dst
            text = path.read_text(encoding="utf-8")
            text2 = update_front_matter(text, entry, hist, stem(tgt))
            if text2 != text:
                summary["fm_updated"].append(f"{loc}:{path.name}")
                path.write_text(text2, encoding="utf-8")

    if not dry:
        for entry in doc["entries"]:
            tgt = target_name(entry)
            entry["locales"] = [loc for loc, d in LOCALE_DIRS.items() if (d / tgt).exists()]
            entry["former_file"] = None
            entry["file"] = tgt

    summary["content_rewrites"] = rewrite_content_relrefs(doc, dry=dry)
    summary["note_rewrites"] = rewrite_notes(doc, dry=dry)
    if not dry:
        save_map(doc)
        regenerate_md(doc)
    return summary


def check(doc: dict) -> int:
    problems = []
    for entry in doc["entries"]:
        tgt = target_name(entry)
        for loc in entry.get("locales") or []:
            d = LOCALE_DIRS.get(loc)
            if not d:
                continue
            p = find_existing(d, entry)
            if p is None:
                problems.append(f"missing {loc}:{tgt}")
                continue
            if p.name != tgt:
                problems.append(f"name mismatch {loc}: have {p.name} want {tgt}")
            split = split_fm(p.read_text(encoding="utf-8"))
            if not split:
                problems.append(f"no fm {loc}:{p.name}")
                continue
            fm_lines, _ = split
            w = fm_get_scalar(fm_lines, "weight")
            if not w or int(w) != int(entry["weight"]):
                problems.append(f"weight mismatch {loc}:{p.name}")
            aliases = fm_get_aliases(fm_lines)
            for s in entry.get("alias_history") or []:
                want = alias_path(s)
                if want not in aliases:
                    problems.append(f"missing alias {loc}:{p.name} -> {want}")
            if alias_path(p.stem) in aliases:
                problems.append(f"self-alias {loc}:{p.name}")
    print(f"check: {len(problems)} problem(s)")
    for p in problems[:40]:
        print(" ", p)
    if len(problems) > 40:
        print(f"  ... +{len(problems)-40} more")
    return len(problems)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    doc = load_map()
    if args.check and not args.dry_run:
        return 1 if check(doc) else 0
    summary = apply(doc, dry=args.dry_run)
    print(json.dumps({k: (len(v) if isinstance(v, list) else v) for k, v in summary.items()}, indent=2))
    print("renamed sample:", summary["renamed"][:8])
    print("notes:", summary["note_rewrites"])
    if args.dry_run:
        return 0
    return 1 if check(load_map()) else 0


if __name__ == "__main__":
    sys.exit(main())
