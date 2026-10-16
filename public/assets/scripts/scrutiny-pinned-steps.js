(function () {
  const section = document.querySelector('#how');
  const pin = section?.querySelector('.sd-pin, .se-pin');
  const visual = pin?.querySelector('.pn-v');
  if (!pin || !visual || !window.frameElement) return;
  let tick = 0;
  function update() {
    tick = 0;
    let offset = 0;
    if (window.innerWidth > 900) {
      const top = frameElement.getBoundingClientRect().top + pin.getBoundingClientRect().top;
      const limit = Math.max(0, pin.offsetHeight - visual.offsetHeight);
      offset = Math.min(limit, Math.max(0, 148 - top));
    }
    visual.style.setProperty('--scrutiny-pin-offset', offset + 'px');
  }
  function schedule() {
    if (!tick) tick = requestAnimationFrame(update);
  }
  const observer = new ResizeObserver(schedule);
  observer.observe(pin);
  observer.observe(visual);
  parent.addEventListener('scroll', schedule, { passive: true });
  parent.addEventListener('resize', schedule);
  window.addEventListener('resize', schedule);
  window.addEventListener('pagehide', function () {
    parent.removeEventListener('scroll', schedule);
    parent.removeEventListener('resize', schedule);
    observer.disconnect();
    cancelAnimationFrame(tick);
  }, { once: true });
  update();
})();
