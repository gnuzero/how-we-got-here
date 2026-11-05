/* Shared lab i18n — original for this book, CC BY 4.0. No dependencies.
 * Usage in a lab's index.html <head>:  <script src="../_shared/i18n.js"></script>
 * Reads ?lang=<code>, loads strings.en.json and strings.<code>.json from the lab's
 * own folder, fills [data-i18n], [data-i18n-html], [data-i18n-attr], exposes
 * window.t(key, vars) and window.LabI18n.ready (a Promise). See _shared/README.md.
 */
(function () {
  'use strict';
  var root = document.documentElement;
  var raw = '';
  try { raw = (new URLSearchParams(location.search).get('lang') || '').trim().toLowerCase(); } catch (e) {}
  var lang = /^[a-z]{2,3}(-[a-z0-9]{2,8})*$/.test(raw) ? raw : 'en';
  var en = {}, loc = {}, active = 'en';

  // Hide the body (no reflow; just paint) until strings are applied, max 1.5 s.
  var style = document.createElement('style');
  style.textContent = 'html.i18n-pending body{visibility:hidden}';
  (document.head || root).appendChild(style);
  root.classList.add('i18n-pending');
  var reveal = function () { root.classList.remove('i18n-pending'); };
  setTimeout(reveal, 1500);

  function load(code) {
    var url = new URL('strings.' + code + '.json', location.href).href;
    var viaXhr = function () {
      return new Promise(function (res) {
        try {
          var x = new XMLHttpRequest();
          x.open('GET', url);
          x.onload = function () { try { res(x.status === 0 || x.status === 200 ? JSON.parse(x.responseText) : null); } catch (e) { res(null); } };
          x.onerror = function () { res(null); };
          x.send();
        } catch (e) { res(null); }
      });
    };
    if (!window.fetch) return viaXhr();
    return fetch(url, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return location.protocol === 'file:' ? viaXhr() : null; })
      .then(function (j) { return j && typeof j === 'object' ? j : null; }, function () { return null; });
  }

  var dom = {}; // English text already in the HTML, last-resort fallback (e.g. file:// in Chrome)
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function lookup(key) {
    if (has(loc, key)) return loc[key];
    if (has(en, key)) return en[key];
    if (has(dom, key)) return dom[key];
    return null;
  }
  function harvest() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var k = el.getAttribute('data-i18n'); if (!has(dom, k)) dom[k] = el.textContent;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-html]'), function (el) {
      var k = el.getAttribute('data-i18n-html'); if (!has(dom, k)) dom[k] = el.innerHTML;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-attr]'), function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':'); if (i < 1) return;
        var k = pair.slice(i + 1).trim(), a = pair.slice(0, i).trim();
        if (!has(dom, k) && el.hasAttribute(a)) dom[k] = el.getAttribute(a);
      });
    });
  }
  function fill(s, vars) {
    return String(s).replace(/\{([A-Za-z0-9_]+)\}/g, function (m, k) {
      return vars && Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m;
    });
  }
  function t(key, vars) {
    var s = lookup(key);
    return s == null ? key : fill(s, vars);
  }

  function apply(scope) {
    scope = scope || document;
    var q = function (sel) { return scope.querySelectorAll ? scope.querySelectorAll(sel) : []; };
    Array.prototype.forEach.call(q('[data-i18n]'), function (el) {
      var s = lookup(el.getAttribute('data-i18n')); if (s != null) el.textContent = s;
    });
    Array.prototype.forEach.call(q('[data-i18n-html]'), function (el) {
      var s = lookup(el.getAttribute('data-i18n-html')); if (s != null) el.innerHTML = s;
    });
    Array.prototype.forEach.call(q('[data-i18n-attr]'), function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':'); if (i < 1) return;
        var s = lookup(pair.slice(i + 1).trim()); if (s != null) el.setAttribute(pair.slice(0, i).trim(), s);
      });
    });
  }

  var domReady = new Promise(function (res) {
    if (document.readyState !== 'loading') res(); else document.addEventListener('DOMContentLoaded', res);
  });
  var ready = Promise.all([load('en'), lang === 'en' ? Promise.resolve(null) : load(lang), domReady])
    .then(function (r) {
      harvest();
      en = r[0] || {};
      if (!r[0]) console.info('[lab-i18n] strings.en.json not loaded; using built-in page text.');
      if (r[1]) { loc = r[1]; active = lang; }
      else if (lang !== 'en') console.info('[lab-i18n] no strings.' + lang + '.json; falling back to English.');
      root.lang = active;
      apply(document);
    })
    .catch(function (e) { console.info('[lab-i18n] ' + e); })
    .then(function () { reveal(); return active; });

  window.t = t;
  window.LabI18n = { t: t, apply: apply, ready: ready, requested: lang, get lang() { return active; } };
})();
