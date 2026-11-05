#!/usr/bin/env python3
"""Check lab string files: every static/labs/<lab>/strings.<lang>.json must be valid
JSON (object of string values), have exactly the keys of strings.en.json, use the same
{placeholders}, and (for *_html keys) the same set of HTML tags. Also checks that every
data-i18n / data-i18n-html / data-i18n-attr key and every t('key') call in the lab's
index.html exists in strings.en.json.
Usage: scripts/check-lab-strings.py [lab ...]     exit 1 on any error."""
import json, re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent / 'static' / 'labs'
PH = re.compile(r'\{([A-Za-z0-9_]+)\}')
TAG = re.compile(r'</?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>')

def load(p, errs):
    try:
        d = json.loads(p.read_text(encoding='utf-8'))
    except Exception as e:
        errs.append(f'{p}: invalid JSON: {e}'); return None
    if not isinstance(d, dict):
        errs.append(f'{p}: top level must be an object'); return None
    for k, v in d.items():
        if not isinstance(v, str): errs.append(f'{p}: key {k!r} value is not a string')
    return d

def tags(s): return sorted(m.group(0).split()[0].rstrip('>').lower() for m in TAG.finditer(s))

def check(lab, errs, warns):
    en_p = lab / 'strings.en.json'
    if not en_p.exists(): return False
    en = load(en_p, errs)
    if en is None: return True
    html = (lab / 'index.html').read_text(encoding='utf-8') if (lab / 'index.html').exists() else ''
    used = set(re.findall(r'data-i18n(?:-html)?="([^"]+)"', html))
    for spec in re.findall(r'data-i18n-attr="([^"]+)"', html):
        used |= {p.split(':', 1)[1].strip() for p in spec.split(';') if ':' in p}
    used |= set(re.findall(r"\bt\(\s*'([^']+)'", html)) | set(re.findall(r'\bt\(\s*"([^"]+)"', html))
    for js in lab.glob('*.js'):
        src = js.read_text(encoding='utf-8', errors='replace')
        used |= set(re.findall(r"\bt\(\s*'([^']+)'", src))
    for k in sorted(used - set(en)): errs.append(f'{lab.name}: key {k!r} used in code but missing from strings.en.json')
    for k in sorted(set(en) - used): warns.append(f'{lab.name}: key {k!r} in strings.en.json is not referenced in code')
    for p in sorted(lab.glob('strings.*.json')):
        if p.name == 'strings.en.json': continue
        if not re.fullmatch(r'strings\.[a-z]{2,3}(-[a-z0-9]{2,8})*\.json', p.name):
            errs.append(f'{p}: file name must be strings.<lowercase site language code>.json'); continue
        d = load(p, errs)
        if d is None: continue
        for k in sorted(set(en) - set(d)): errs.append(f'{lab.name}/{p.name}: missing key {k!r} (English will show)')
        for k in sorted(set(d) - set(en)): errs.append(f'{lab.name}/{p.name}: extra key {k!r} (not in English)')
        for k in sorted(set(en) & set(d)):
            if not isinstance(d[k], str): continue
            a, b = sorted(set(PH.findall(en[k]))), sorted(set(PH.findall(d[k])))
            if a != b: errs.append(f'{lab.name}/{p.name}: {k!r} placeholders {b} != English {a}')
            if k.endswith('_html') and tags(en[k]) != tags(d[k]):
                errs.append(f'{lab.name}/{p.name}: {k!r} HTML tags differ from English')
            if not d[k].strip() and en[k].strip(): errs.append(f'{lab.name}/{p.name}: {k!r} is empty')
    return True

def main():
    names = sys.argv[1:]
    labs = [ROOT / n for n in names] if names else sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith('_'))
    errs, warns, n = [], [], 0
    for lab in labs:
        if check(lab, errs, warns): n += 1
    for w in warns: print('WARN ', w)
    for e in errs: print('ERROR', e)
    print(f'checked {n} lab(s) with strings.en.json: {len(errs)} error(s), {len(warns)} warning(s)')
    sys.exit(1 if errs else 0)

main()
