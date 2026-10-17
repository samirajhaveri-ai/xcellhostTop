(function () {
  if (!window.frameElement) return;
  const pins = Array.from(document.querySelectorAll('.jr-v,.vt-in .in-d'));
  const offsets = new Map();
  const header = parent.document.querySelector('.xh-header');
  let tick = 0;
  function size() {
    document.documentElement.style.setProperty('--page-vh', parent.innerHeight / 100 + 'px');
  }
  window.scrollOuter = function (options) {
    parent.scrollTo(Object.assign({}, options, { top: options.top + frameElement.getBoundingClientRect().top + parent.scrollY }));
  };
  function update() {
    tick = 0;
    const topInset = (header?.getBoundingClientRect().height || 80) + 16;
    pins.forEach(el => {
      const rect = el.getBoundingClientRect();
      const naturalTop = rect.top - (offsets.get(el) || 0);
      const limit = Math.max(0, el.parentElement.getBoundingClientRect().bottom - naturalTop - rect.height);
      const next = innerWidth > 960 ? Math.min(limit, Math.max(0, topInset - naturalTop - frameElement.getBoundingClientRect().top)) : 0;
      offsets.set(el, next);
      el.style.setProperty('--sentinel-pin-offset', next + 'px');
    });
    window.dispatchEvent(new Event('scroll'));
  }
  function schedule() { if (!tick) tick = requestAnimationFrame(update); }
  function resize() { size(); schedule(); }
  size();
  parent.addEventListener('scroll', schedule, { passive: true });
  parent.addEventListener('resize', resize);
  window.addEventListener('resize', resize);
  const observer = new ResizeObserver(schedule);
  pins.forEach(el => observer.observe(el.parentElement));
  window.addEventListener('pagehide', function () {
    parent.removeEventListener('scroll', schedule);
    parent.removeEventListener('resize', resize);
    window.removeEventListener('resize', resize);
    observer.disconnect();
    cancelAnimationFrame(tick);
  }, { once: true });
  schedule();
})();
