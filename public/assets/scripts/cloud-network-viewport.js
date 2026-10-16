(function () {
  if (!window.frameElement) return;
  function size() {
    document.documentElement.style.setProperty('--page-vh', parent.innerHeight / 100 + 'px');
  }
  size();
  const typewriters = [];
  document.querySelectorAll('.lh-type[data-words]').forEach(el => {
    let words;
    try { words = JSON.parse(el.dataset.words); } catch { return; }
    const output = el.querySelector('.tw');
    if (!output || !words.length) return;
    output.textContent = words[0];
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let word = 0, count = words[0].length, deleting = true, visible = true, timer;
    function type() {
      if (!visible) { timer = setTimeout(type, 400); return; }
      count += deleting ? -1 : 1;
      output.textContent = words[word].slice(0, count);
      let delay = deleting ? 28 : 55;
      if (!deleting && count === words[word].length) { deleting = true; delay = 1700; }
      else if (deleting && count === 0) { deleting = false; word = (word + 1) % words.length; delay = 350; }
      timer = setTimeout(type, delay);
    }
    const visibility = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; });
    visibility.observe(el);
    timer = setTimeout(type, 1700);
    typewriters.push(() => { clearTimeout(timer); visibility.disconnect(); });
  });
  window.scrollOuter = function (options) {
    parent.scrollTo(Object.assign({}, options, { top: options.top + frameElement.getBoundingClientRect().top + parent.scrollY }));
  };
  const pins = Array.from(document.querySelectorAll('.jr-stage,.vf-jr .jv,.vl-jv,.gc-pin,.gc-ptabs,.gc-isow,.gc-pin-f'));
  const navs = new Set(document.querySelectorAll('.vn-sub,.vf-sub,.vl-snav,.gc-snav,.sg-sub,.sx-sub'));
  const header = parent.document.querySelector('.xh-header');
  const offsets = new Map();
  pins.forEach(el => el.classList.add('outer-pin'));
  navs.forEach(el => el.classList.add('outer-section-nav'));
  let tick = 0;
  function update() {
    tick = 0;
    const headerHeight = header?.getBoundingClientRect().height || 80;
    const contentTop = headerHeight + 16;
    document.documentElement.style.setProperty('--xh-anchor-offset', contentTop + 'px');
    document.documentElement.style.setProperty('--gc-top', contentTop + 'px');
    pins.forEach(el => {
      const previous = innerWidth > 900 ? offsets.get(el) || 0 : 0;
      const rect = el.getBoundingClientRect();
      const naturalTop = rect.top - previous;
      const top = naturalTop + frameElement.getBoundingClientRect().top;
      const limit = Math.max(0, el.parentElement.getBoundingClientRect().bottom - naturalTop - rect.height);
      const next = innerWidth > 900 ? Math.min(limit, Math.max(0, contentTop - top)) : 0;
      offsets.set(el, next);
      el.style.setProperty('--outer-pin-offset', next + 'px');
    });
    window.dispatchEvent(new Event('scroll'));
  }
  function schedule() { if (!tick) tick = requestAnimationFrame(update); }
  function resize() { size(); schedule(); }
  parent.addEventListener('scroll', schedule, { passive: true });
  parent.addEventListener('resize', resize);
  window.addEventListener('resize', resize);
  const observer = new ResizeObserver(schedule);
  pins.forEach(el => observer.observe(el.parentElement));
  navs.forEach(el => observer.observe(el));
  if (header) observer.observe(header);
  window.addEventListener('pagehide', function () {
    parent.removeEventListener('scroll', schedule);
    parent.removeEventListener('resize', resize);
    observer.disconnect();
    typewriters.forEach(stop => stop());
    cancelAnimationFrame(tick);
  }, { once: true });
  schedule();
})();
