(function () {
  var CSS = ":root {\n  --ck-bg: #FFFFFF;\n  --ck-surface: #F7F7F7;\n  --ck-text: #111111;\n  --ck-muted: #667085;\n  --ck-border: #E5E7EB;\n  --ck-brand: #734DFF;\n  --ck-brand-deep: #3613B6;\n  --ck-success: #7CD548;\n  --ck-shell: 1240px;\n  --ck-col-left: 220px;\n  --ck-col-right: 240px;\n  --ck-gap: 36px;\n  --ck-center: 700px;\n  --ck-home-shell: 1258px;\n  --ck-sticky-top: 90px;\n}\n\nhtml.dark {\n  --ck-bg: #0D0B12;\n  --ck-surface: #17151F;\n  --ck-text: #F4F3F7;\n  --ck-muted: #9AA1AE;\n  --ck-border: #262234;\n}\n\n#content-area,\n#content,\n#body-content,\nmdx-content {\n  max-width: none;\n  width: 100%;\n  overflow: visible;\n}\n\n.ck-shell {\n  box-sizing: border-box;\n  overflow: visible;\n  width: 100%;\n  max-width: var(--ck-shell);\n  margin: 0 auto;\n  padding: 0 24px 96px;\n  background: var(--ck-bg);\n  color: var(--ck-text);\n}\n\n.ck-shell *,\n.ck-shell *::before,\n.ck-shell *::after { box-sizing: border-box; }\n\n.ck-eyebrow,\n.ck-navlabel,\n.ck-toc-label,\n.ck-section-label,\n.ck-readtime {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.ck-eyebrow { color: var(--ck-brand); }\n.ck-navlabel,\n.ck-toc-label,\n.ck-section-label,\n.ck-readtime { color: var(--ck-muted); }\n\n.ck-masthead { padding: 40px 0 0; max-width: 720px; }\n.ck-masthead-title {\n  margin: 0;\n  font-size: 34px;\n  line-height: 1.1;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  color: var(--ck-text);\n}\n.ck-masthead-sub {\n  margin: 12px 0 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--ck-muted);\n}\n\n.ck-featured {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 470px;\n  padding: 48px;\n  margin-top: 32px;\n  border: 1px solid var(--ck-border);\n  border-radius: 8px;\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n}\n.ck-featured:hover .ck-featured-title { color: var(--ck-brand); }\n.ck-featured-copy { position: relative; z-index: 2; }\n.ck-featured-meta { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ck-brand); }\n.ck-featured-title {\n  margin: 16px 0 0;\n  max-width: 640px;\n  font-size: 44px;\n  line-height: 1.12;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  color: var(--ck-text);\n}\n.ck-featured-desc { margin: 18px 0 0; max-width: 620px; font-size: 16px; line-height: 1.6; color: var(--ck-muted); }\n.ck-featured-author { display: flex; align-items: center; gap: 12px; margin-top: 28px; font-size: 13px; color: var(--ck-muted); }\n.ck-featured-media { position: relative; background: var(--ck-surface); overflow: hidden; }\n.ck-featured-media img { display: block; width: 100%; height: 100%; object-fit: cover; }\n\n.ck-tabs {\n  display: flex;\n  align-items: flex-end;\n  gap: 28px;\n  margin-top: 48px;\n  border-bottom: 1px solid var(--ck-border);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.ck-tabs::-webkit-scrollbar { display: none; }\n.ck-tab {\n  display: block;\n  padding: 0 0 12px;\n  margin-bottom: -1px;\n  border-bottom: 2px solid transparent;\n  white-space: nowrap;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ck-muted);\n  text-decoration: none;\n}\n.ck-tab:hover { color: var(--ck-text); }\n.ck-tab.is-active { color: var(--ck-text); font-weight: 600; border-bottom-color: var(--ck-brand); }\n.ck-tab.is-empty { color: var(--ck-border); cursor: default; }\n\n.ck-section-label { margin: 44px 0 0; }\n.ck-section-label:first-of-type { margin-top: 36px; }\n\n.ck-home { max-width: var(--ck-home-shell); }\n\n.ck-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  column-gap: 20px;\n  row-gap: 40px;\n  margin-top: 20px;\n}\n\n.ck-card { display: block; min-width: 0; text-decoration: none; color: inherit; }\n.ck-card-media {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border-radius: 6px;\n  overflow: hidden;\n  background: var(--ck-surface);\n}\n.ck-card-media img { display: block; width: 100%; height: 100%; object-fit: cover; }\n.ck-card-meta { display: flex; align-items: center; gap: 8px; margin-top: 12px; font-size: 11px; line-height: 1.3; }\n.ck-card-cat {\n  padding: 3px 8px;\n  border-radius: 4px;\n  background: var(--ck-surface);\n  border: 1px solid var(--ck-border);\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--ck-brand);\n}\n.ck-card-date { color: var(--ck-muted); }\n.ck-card-title {\n  margin: 8px 0 0;\n  font-size: 17px;\n  line-height: 1.32;\n  font-weight: 600;\n  letter-spacing: -0.012em;\n  color: var(--ck-text);\n}\n.ck-card:hover .ck-card-title { color: var(--ck-brand); }\n.ck-card-desc {\n  margin: 6px 0 0;\n  font-size: 14px;\n  line-height: 1.55;\n  color: var(--ck-muted);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.ck-back {\n  display: inline-block;\n  margin-top: 40px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ck-text);\n  text-decoration: none;\n}\n.ck-head { margin-top: 32px; max-width: 820px; }\n.ck-title {\n  margin: 18px 0 0;\n  font-size: 42px;\n  line-height: 1.1;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  color: var(--ck-text);\n}\n.ck-readtime { margin-top: 20px; }\n\n.ck-layout {\n  display: grid;\n  grid-template-columns: var(--ck-col-left) minmax(0, var(--ck-center)) var(--ck-col-right);\n  gap: var(--ck-gap);\n  align-items: stretch;\n  margin-top: 40px;\n  padding-top: 40px;\n  border-top: 1px solid var(--ck-border);\n}\n.ck-col-left, .ck-col-right, .ck-col-main { min-width: 0; }\n.ck-col-left, .ck-col-right { align-self: stretch; }\n.ck-sticky { position: static; }\n\n@media (min-width: 1024px) {\n  .ck-col-left .ck-sticky,\n  .ck-col-right .ck-sticky {\n    position: sticky;\n    top: var(--ck-sticky-top);\n  }\n}\n\n.ck-nav { display: flex; flex-direction: column; gap: 2px; margin-top: 16px; }\n.ck-nav a {\n  display: block;\n  padding: 8px 12px;\n  border-left: 2px solid transparent;\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ck-muted);\n  text-decoration: none;\n}\n.ck-nav a:hover { color: var(--ck-text); }\n.ck-nav a.is-current {\n  color: var(--ck-brand);\n  font-weight: 600;\n  border-left-color: var(--ck-brand);\n  background: var(--ck-surface);\n}\n\n.ck-author-mount { display: block; min-height: 122px; }\n\n.ck-author { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--ck-border); }\n.ck-author-row { display: flex; align-items: center; gap: 12px; }\n.ck-avatar {\n  flex: 0 0 auto;\n  width: 40px; height: 40px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 999px;\n  background: var(--ck-brand);\n  color: #FFFFFF;\n  font-size: 12px; font-weight: 700;\n}\n.ck-author-name { font-size: 14px; font-weight: 600; color: var(--ck-text); }\n.ck-author-role { font-size: 12px; color: var(--ck-muted); }\n.ck-share { display: flex; gap: 8px; margin-top: 12px; }\n.ck-share a {\n  width: 32px; height: 32px;\n  display: flex; align-items: center; justify-content: center;\n  border-radius: 999px;\n  background: var(--ck-surface);\n  color: var(--ck-text);\n  font-size: 12px; font-weight: 500;\n  text-decoration: none;\n}\n.ck-share a:hover { background: var(--ck-brand); color: #FFFFFF; }\n\n.ck-cover {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--ck-surface);\n}\n.ck-cover img { display: block; width: 100%; height: 100%; object-fit: cover; }\n\n.ck-body { color: var(--ck-text); }\n.ck-body .ck-lede { margin: 36px 0 0; font-size: 18px; line-height: 1.75; }\n.ck-body h2 {\n  margin: 44px 0 0;\n  font-size: 26px;\n  line-height: 1.25;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--ck-text);\n  scroll-margin-top: 110px;\n}\n.ck-body p { margin: 16px 0 0; font-size: 16px; line-height: 1.75; }\n.ck-body ul { margin: 16px 0 0; padding-left: 20px; list-style: disc; }\n.ck-body li { margin-top: 8px; font-size: 16px; line-height: 1.75; }\n\n.ck-toc { display: flex; flex-direction: column; gap: 12px; margin-top: 18px; padding-left: 14px; border-left: 1px solid var(--ck-border); }\n.ck-toc a { font-size: 13px; line-height: 1.4; color: var(--ck-muted); text-decoration: none; }\n.ck-toc a:hover { color: var(--ck-text); }\n.ck-toc a[data-active] { color: var(--ck-text); font-weight: 600; box-shadow: -15px 0 0 -14px var(--ck-brand); }\n\n.ck-cta { display: flex; flex-direction: column; gap: 8px; margin-top: 32px; width: 100%; }\n.ck-cta input,\n.ck-cta a {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.ck-cta input {\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid var(--ck-border);\n  background: var(--ck-bg);\n  color: var(--ck-text);\n}\n.ck-cta a {\n  height: 44px;\n  display: flex; align-items: center; justify-content: center;\n  font-weight: 500;\n  text-decoration: none;\n}\n.ck-btn-primary { background: var(--ck-text); color: var(--ck-bg); }\n.ck-btn-secondary { background: var(--ck-bg); color: var(--ck-text); border: 1px solid var(--ck-border); }\n\n.ck-more { margin-top: 72px; padding-top: 36px; border-top: 1px solid var(--ck-border); }\n.ck-more-title { margin: 0 0 20px; font-size: 20px; font-weight: 700; letter-spacing: -0.015em; color: var(--ck-text); }\n.ck-more .ck-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 0; }\n\n@media (max-width: 1023px) {\n  .ck-layout { display: flex; flex-direction: column; gap: 40px; }\n  .ck-col-main { order: 1; width: 100%; max-width: 700px; margin: 0 auto; }\n  .ck-col-left { order: 2; width: 100%; max-width: 700px; margin: 0 auto; }\n  .ck-col-right { order: 3; width: 100%; max-width: 700px; margin: 0 auto; }\n  .ck-cta { max-width: 320px; }\n  .ck-title { font-size: 34px; }\n  .ck-featured { grid-template-columns: 1fr; }\n  .ck-featured-copy { min-height: 0; padding: 28px; }\n  .ck-featured-media { aspect-ratio: 16 / 9; }\n  .ck-featured-title { font-size: 28px; }\n  .ck-grid, .ck-more .ck-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 767px) {\n  .ck-shell { padding-left: 18px; padding-right: 18px; }\n  .ck-title { font-size: 28px; }\n  .ck-masthead-title { font-size: 26px; }\n  .ck-grid, .ck-more .ck-grid { grid-template-columns: minmax(0, 1fr); row-gap: 32px; }\n  .ck-tabs { gap: 20px; }\n}\n\n.ck-summary {\n  margin-top: 28px;\n  padding: 22px 24px;\n  border-radius: 8px;\n  background: var(--ck-surface);\n  border: 1px solid var(--ck-border);\n}\n.ck-summary-label {\n  font-size: 11px; font-weight: 600; letter-spacing: 0.12em;\n  text-transform: uppercase; color: var(--ck-brand);\n}\n.ck-summary p { margin: 12px 0 0; font-size: 15px; line-height: 1.7; color: var(--ck-text); }\n\n.ck-more .ck-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 660px; }\n\n@media (max-width: 1023px) {\n  .ck-more .ck-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 100%; }\n}\n@media (max-width: 767px) {\n  .ck-more .ck-grid { grid-template-columns: minmax(0, 1fr); }\n}\n\n.ck-share-label { margin-top: 24px; }\n\n.ck-cover-art {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 100%;\n  padding: 28px 32px;\n}\n.ck-cover-rule {\n  width: 44px;\n  height: 3px;\n  border-radius: 999px;\n  background: var(--ck-cover-accent, var(--ck-brand));\n}\n.ck-cover-kicker {\n  margin-top: 16px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--ck-cover-accent, var(--ck-brand));\n}\n.ck-cover-line {\n  margin-top: 10px;\n  font-size: 30px;\n  line-height: 1.14;\n  font-weight: 700;\n  letter-spacing: -0.025em;\n  color: var(--ck-cover-fg, var(--ck-text));\n}\n\n.ck-cover--verification { background: #17151F; --ck-cover-accent: #7CD548; --ck-cover-fg: #FFFFFF; }\n.ck-cover--rto         { background: #1A1430; --ck-cover-accent: #9B7BFF; --ck-cover-fg: #FFFFFF; }\n.ck-cover--checkout    { background: #12111A; --ck-cover-accent: #734DFF; --ck-cover-fg: #FFFFFF; }\n.ck-cover--payments    { background: #1B1526; --ck-cover-accent: #C0A9FF; --ck-cover-fg: #FFFFFF; }\n.ck-cover--template    { background: var(--ck-surface); --ck-cover-accent: var(--ck-brand); }\n\n.ck-featured .ck-cover-art {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding: 40px;\n}\n.ck-featured .ck-cover-line { font-size: 40px; opacity: 0.18; text-align: right; }\n.ck-featured .ck-cover-kicker,\n.ck-featured .ck-cover-rule { display: none; }\n\n.ck-card-media .ck-cover-art { padding: 18px 20px; }\n.ck-card-media .ck-cover-rule { width: 30px; height: 2px; }\n.ck-card-media .ck-cover-kicker { margin-top: 10px; font-size: 9px; }\n.ck-card-media .ck-cover-line { margin-top: 6px; font-size: 17px; }\n\n@media (max-width: 1023px) {\n  .ck-featured { min-height: 360px; padding: 32px; }\n  .ck-featured-title { font-size: 30px; }\n  .ck-cover-line { font-size: 24px; }\n}\n@media (max-width: 767px) {\n  .ck-featured { min-height: 300px; padding: 24px; }\n  .ck-featured-title { font-size: 25px; }\n}\n\n#search-bar-entry,\n#search-bar-entry-mobile { display: none !important; }\n\n#navbar { border-bottom: 1px solid var(--ck-border); }\n\n.ck-featured {\n  border-color: transparent;\n  color: #FFFFFF;\n}\n.ck-featured .ck-featured-meta { color: var(--ck-cover-accent, #FFFFFF); }\n.ck-featured .ck-featured-title { color: #FFFFFF; }\n.ck-featured:hover .ck-featured-title { color: var(--ck-cover-accent, #FFFFFF); }\n.ck-featured .ck-featured-desc { color: rgba(255, 255, 255, 0.72); }\n.ck-featured .ck-author-name { color: #FFFFFF; }\n.ck-featured .ck-author-role { color: rgba(255, 255, 255, 0.6); }\n.ck-featured .ck-avatar { background: rgba(255, 255, 255, 0.14); color: #FFFFFF; }\n\n.ck-footer {\n  margin-top: 88px;\n  padding-top: 40px;\n  border-top: 1px solid var(--ck-border);\n}\n.ck-footer-inner {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 48px;\n}\n.ck-footer-brand { max-width: 300px; }\n.ck-footer-logo {\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  color: var(--ck-text);\n}\n.ck-footer-tagline {\n  margin: 10px 0 0;\n  font-size: 13px;\n  line-height: 1.6;\n  color: var(--ck-muted);\n}\n.ck-footer-cols { display: flex; flex-wrap: wrap; gap: 56px; }\n.ck-footer-col { display: flex; flex-direction: column; gap: 10px; min-width: 160px; }\n.ck-footer-head {\n  margin-bottom: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--ck-muted);\n}\n.ck-footer-col a {\n  font-size: 13px;\n  line-height: 1.4;\n  color: var(--ck-text);\n  text-decoration: none;\n}\n.ck-footer-col a:hover { color: var(--ck-brand); }\n.ck-footer-bottom {\n  margin-top: 40px;\n  padding-top: 20px;\n  border-top: 1px solid var(--ck-border);\n  font-size: 12px;\n  color: var(--ck-muted);\n}\n\n@media (max-width: 767px) {\n  .ck-footer-inner { flex-direction: column; gap: 32px; }\n  .ck-footer-cols { gap: 32px; }\n  .ck-footer { margin-top: 64px; }\n}\n";
  var STYLE_ID = 'ck-injected-styles';
  var BASE = 'https://codking.in/blog/';
  var hydrated = new WeakSet();

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.appendChild(document.createTextNode(CSS));
    (document.head || document.documentElement).appendChild(s);
  }

  function setStickyOffset() {
    var nav = document.getElementById('navbar') ||
              document.querySelector('header[class*="nav"]') ||
              document.querySelector('header');
    if (!nav) return;
    var h = Math.round(nav.getBoundingClientRect().height);
    if (h > 0 && h < 240) {
      document.documentElement.style.setProperty('--ck-sticky-top', (h + 16) + 'px');
    }
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function shareLink(href, label) {
    var a = el('a', null, label);
    a.href = href; a.target = '_blank'; a.rel = 'noreferrer';
    return a;
  }

  function build(mount) {
    var category = mount.getAttribute('data-category') || '';
    var slug = (mount.getAttribute('data-slug') || '').replace(/^\/+|\/+$/g, '');
    var url = BASE + slug;
    var enc = encodeURIComponent(url);

    var wrap = el('div', 'ck-author');
    wrap.style.marginTop = '0';
    wrap.style.paddingTop = '0';
    wrap.style.borderTop = 'none';

    var row = el('div', 'ck-author-row');
    row.appendChild(el('div', 'ck-avatar', 'CK'));
    var meta = el('div');
    meta.appendChild(el('div', 'ck-author-name', 'COD King Team'));
    meta.appendChild(el('div', 'ck-author-role', category));
    row.appendChild(meta);
    wrap.appendChild(row);

    wrap.appendChild(el('div', 'ck-navlabel ck-share-label', 'Share this article'));

    var share = el('div', 'ck-share');
    share.appendChild(shareLink('https://www.linkedin.com/sharing/share-offsite/?url=' + enc, 'in'));
    share.appendChild(shareLink('https://twitter.com/intent/tweet?url=' + enc, 'X'));

    var copy = el('a', null, '\u2197');
    copy.href = url;
    copy.setAttribute('aria-label', 'Copy link to this article');
    copy.addEventListener('click', function (e) {
      if (!navigator.clipboard) return;
      e.preventDefault();
      navigator.clipboard.writeText(url).then(function () {
        copy.textContent = '\u2713';
        setTimeout(function () { copy.textContent = '\u2197'; }, 1400);
      });
    });
    share.appendChild(copy);
    wrap.appendChild(share);
    return wrap;
  }

  function hydrateMounts() {
    var mounts = document.querySelectorAll('.ck-author-mount');
    for (var i = 0; i < mounts.length; i++) {
      var m = mounts[i];
      if (hydrated.has(m) && m.firstChild) continue;
      while (m.firstChild) m.removeChild(m.firstChild);
      m.appendChild(build(m));
      hydrated.add(m);
    }
  }

  var current = null;
  function updateToc() {
    var links = document.querySelectorAll('.ck-toc a[href^="#"]');
    if (!links.length) return;
    var line = window.scrollY + 140, found = null;
    for (var i = 0; i < links.length; i++) {
      var t = document.getElementById(decodeURIComponent(links[i].hash.slice(1)));
      if (!t) continue;
      if (found === null) found = links[i];
      if (t.getBoundingClientRect().top + window.scrollY <= line) found = links[i];
    }
    if (found === current) return;
    current = found;
    for (var j = 0; j < links.length; j++) {
      if (links[j] === found) links[j].setAttribute('data-active', '');
      else links[j].removeAttribute('data-active');
    }
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { updateToc(); ticking = false; });
  }

  function run() { injectStyles(); setStickyOffset(); hydrateMounts(); updateToc(); }

  run();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { setStickyOffset(); onScroll(); }, { passive: true });

  var queued = false;
  var mo = new MutationObserver(function () {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(function () { queued = false; run(); });
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
