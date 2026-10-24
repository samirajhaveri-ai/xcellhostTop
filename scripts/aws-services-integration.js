(function () {
  const outer = parent;
  XH.toast = function(message) {
    const status = document.getElementById('import-status');
    status.textContent = message;
    status.style.top = Math.max(16, -(frameElement.getBoundingClientRect().top) + outer.innerHeight - 100) + 'px';
    clearTimeout(status._timer);
    status._timer = setTimeout(() => { status.textContent = ''; }, 3000);
  };
  const main = document.querySelector('main');
  const bar = document.getElementById('awBar');
  const rail = document.getElementById('awRail');
  const catalog = document.getElementById('catalog');
  const shifts = new Map();
  let frame = 0;
  function inset() { return (outer.document.querySelector('.xh-header')?.getBoundingClientRect().height || 80) + 16; }
  function update() {
    frame = 0;
    const top = frameElement.getBoundingClientRect().top;
    const offset = inset();
    const pins = [[bar, offset, catalog]];
    if (rail) pins.push([rail, offset + bar.clientHeight + 16, rail.parentElement]);
    pins.forEach(([element, target, container]) => {
      if (!element || !element.getClientRects().length) return;
      const natural = element.getBoundingClientRect().top - (shifts.get(element) || 0);
      const limit = Math.max(0, container.getBoundingClientRect().bottom - natural - element.clientHeight);
      const shift = Math.min(limit, Math.max(0, target - top - natural));
      shifts.set(element, shift);
      element.style.transform = `translateY(${shift}px)`;
    });
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  bar.style.position = 'relative';
  bar.style.top = '0';
  if (rail) {
    rail.style.position = 'relative';
    rail.style.top = '0';
  }
  const resize = new ResizeObserver(schedule);
  resize.observe(main);
  outer.addEventListener('scroll', schedule, { passive: true });
  outer.addEventListener('resize', schedule);
  function linkTargets(root) {
    if (root.matches?.('a[href^="/"]')) root.target = '_top';
    root.querySelectorAll('a[href^="/"]').forEach(a => { a.target = '_top'; });
  }
  const links = new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) linkTargets(node);
    }));
  });
  links.observe(main, { childList: true, subtree: true });
  linkTargets(main);
  function loadService(hash) {
    if (!hash.startsWith('#svc-') && !hash.startsWith('#cat-')) return;
    history.replaceState(null, '', hash);
    window.XH.awDeep?.();
  }
  document.addEventListener('click', function (event) {
    const category = event.target.closest('#awRail a[href^="#cat-"], #awJump a[href^="#cat-"]');
    if (category) {
      const section = document.getElementById(category.hash.slice(1));
      if (!section || section.hidden) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      outer.history.replaceState(null, '', outer.location.pathname + outer.location.search + category.hash);
      history.replaceState(null, '', category.hash);
      outer.scrollTo({
        top: outer.scrollY + frameElement.getBoundingClientRect().top + section.getBoundingClientRect().top - inset() - bar.clientHeight - 8,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
      return;
    }
    const anchor = event.target.closest('a[href^="#svc-"]');
    if (!anchor) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    outer.history.replaceState(null, '', outer.location.pathname + outer.location.search + anchor.hash);
    loadService(anchor.hash);
  }, true);
  function hashChange() { loadService(outer.location.hash); }
  outer.addEventListener('hashchange', hashChange);
  hashChange();
  schedule();
  addEventListener('pagehide', function () {
    outer.removeEventListener('scroll', schedule);
    outer.removeEventListener('resize', schedule);
    outer.removeEventListener('hashchange', hashChange);
    resize.disconnect();
    links.disconnect();
    cancelAnimationFrame(frame);
  }, { once: true });
})();
