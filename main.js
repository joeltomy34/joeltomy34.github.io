// Small enhancements: header border on scroll, mobile menu, active nav link, copy email, hero chart.
(function () {
  const head = document.querySelector('.site-head');
  const onScroll = () => head && head.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', () => { const open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? 'Close' : 'Menu'; });
    nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; } });
  }

  // highlight the nav link for the section in view
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && secs.length) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(s => io.observe(s));
  }

  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; }
    catch (e) { b.textContent = 'Select it'; }
    setTimeout(() => { b.textContent = 'Copy'; }, 1800);
  }));
  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

  // hero chart: noisy weekly volumes, then a smoothed trend drawn through them
  const svg = document.getElementById('signal'); if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg', W = 520, H = 300, L = 8, R = 470, T = 18, B = 262;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const n = 52, base = i => 95 + i * 3.1 + 12 * Math.sin(i / 52 * Math.PI * 4 - 0.6);
  const ys = Array.from({ length: n }, (_, i) => base(i) + (rnd() - 0.5) * 95 + (rnd() < 0.07 ? 60 : 0));
  const sm = ys.map((_, i) => { let s = 0, w = 0; for (let j = -9; j <= 9; j++) { const k = i + j; if (k < 0 || k >= n) continue; const g = Math.exp(-(j * j) / 40); s += ys[k] * g; w += g; } return s / w; });
  const lo = 30, hi = 360;
  const x = i => L + (R - L) * i / (n - 1), y = v => B - (B - T) * (v - lo) / (hi - lo);
  const el = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  const g = el('g', { class: 'grid' });
  for (let k = 0; k <= 4; k++) { const yy = T + (B - T) * k / 4; g.appendChild(el('line', { x1: L, x2: R, y1: yy, y2: yy })); }
  svg.appendChild(g);
  const pts = el('g', {});
  ys.forEach((v, i) => pts.appendChild(el('circle', { class: 'pt', cx: x(i).toFixed(1), cy: y(v).toFixed(1), r: 3.2 })));
  svg.appendChild(pts);
  // forecast band for the last stretch
  const f0 = n - 1, fx = R + 0, fyv = sm[n - 1] + 3.1 * 9;
  const band = `M${x(f0)},${y(sm[f0] + 14)} L${fx + 34},${y(fyv + 36)} L${fx + 34},${y(fyv - 36)} L${x(f0)},${y(sm[f0] - 14)} Z`;
  svg.appendChild(el('path', { class: 'band', d: band }));
  const d = sm.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ') + ` L${fx + 34},${y(fyv).toFixed(1)}`;
  const path = el('path', { class: 'trend', d });
  svg.appendChild(path);
  const end = el('circle', { class: 'end', cx: fx + 34, cy: y(fyv).toFixed(1), r: 5 });
  svg.appendChild(end);
  const t1 = el('text', { class: 'lbl strong', x: fx + 34, y: (y(fyv) - 44).toFixed(1), 'text-anchor': 'middle' }); t1.textContent = 'Forecast';
  const t2 = el('text', { class: 'lbl', x: L, y: H - 12 }); t2.textContent = '52 weeks';
  svg.appendChild(t1); svg.appendChild(t2);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && path.getTotalLength) {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len; path.style.strokeDashoffset = len;
    [end, t1].forEach(e => { e.style.opacity = 0; });
    pts.querySelectorAll('circle').forEach((c, i) => { c.style.opacity = 0; c.style.transition = `opacity .35s ${i * 14}ms`; });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pts.querySelectorAll('circle').forEach(c => { c.style.opacity = 1; });
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.4,.1,.2,1)'; path.style.strokeDashoffset = 0;
        pts.querySelectorAll('circle').forEach(c => { c.style.transition = 'opacity 1.2s'; c.style.opacity = .55; });
        setTimeout(() => [end, t1].forEach(e => { e.style.transition = 'opacity .4s'; e.style.opacity = 1; }), 1500);
      }, 900);
    }));
  } else {
    pts.querySelectorAll('circle').forEach(c => { c.style.opacity = .55; });
  }
})();
