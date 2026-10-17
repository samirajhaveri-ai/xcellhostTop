(function () {
  const title = document.querySelector('.hero h1');
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  const header = embedded ? parent.document.querySelector('.xh-header') : null;
  const pins = Array.from(document.querySelectorAll('.cp-ipv,.ps-rackw,.cx-mic'));
  const offsets = new Map();
  const stopTypewriters = [];
  let tick = 0;
  function frameTop() { return embedded ? frameElement.getBoundingClientRect().top : 0; }
  function inset() { return (header?.getBoundingClientRect().height || 80) + 16; }
  window.hostingViewportFocus = function () { return outer.innerHeight * .32 - frameTop(); };
  window.scrollOuter = function (options) {
    outer.scrollTo(Object.assign({}, options, { top: options.top + (embedded ? frameTop() + parent.scrollY : 0) }));
  };
  window.hostingJumpTo = function (id) {
    const target = document.getElementById(id);
    if (target) outer.scrollTo({ top: outer.scrollY + frameTop() + target.getBoundingClientRect().top - inset(), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  function fitTitle() {
    if (!title?.clientWidth) return;
    const size = Math.min(44, Math.max(30, innerWidth * .034));
    title.style.setProperty('--hosting-title-size', size + 'px');
    const range = document.createRange();
    range.selectNodeContents(title);
    const width = range.getBoundingClientRect().width;
    if (width > title.clientWidth) title.style.setProperty('--hosting-title-size', (size * (title.clientWidth - 2) / width) + 'px');
  }
  function update() {
    tick = 0;
    document.documentElement.style.setProperty('--xh-anchor-offset', inset() + 'px');
    pins.forEach(el => {
      const rect = el.getBoundingClientRect();
      const naturalTop = rect.top - (offsets.get(el) || 0);
      const limit = Math.max(0, el.parentElement.getBoundingClientRect().bottom - naturalTop - rect.height);
      const next = embedded && innerWidth > 980 ? Math.min(limit, Math.max(0, inset() - naturalTop - frameTop())) : 0;
      offsets.set(el, next);
      el.style.setProperty('--hosting-pin-offset', next + 'px');
    });
    if (embedded) window.dispatchEvent(new Event('scroll'));
  }
  function schedule() { if (!tick) tick = requestAnimationFrame(update); }
  function resize() {
    document.documentElement.style.setProperty('--page-vh', outer.innerHeight / 100 + 'px');
    fitTitle();
    schedule();
  }
  pins.forEach(el => el.classList.add('hosting-outer-pin'));
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
    stopTypewriters.push(() => { clearTimeout(timer); visibility.disconnect(); });
  });
  const observer = new ResizeObserver(resize);
  if (title) observer.observe(title.parentElement);
  pins.forEach(el => observer.observe(el.parentElement));
  outer.addEventListener('scroll', schedule, { passive: true });
  outer.addEventListener('resize', resize);
  if (embedded) window.addEventListener('resize', resize);
  document.fonts.ready.then(resize);
  window.addEventListener('pagehide', function () {
    outer.removeEventListener('scroll', schedule);
    outer.removeEventListener('resize', resize);
    window.removeEventListener('resize', resize);
    observer.disconnect();
    stopTypewriters.forEach(stop => stop());
    cancelAnimationFrame(tick);
  }, { once: true });
  resize();
})();
