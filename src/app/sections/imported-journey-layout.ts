/** Keep scroll narratives aligned with the outer page of an auto-height iframe. */
export function installImportedJourneyLayout(frame: HTMLIFrameElement): () => void {
  const doc = frame.contentDocument;
  const view = doc?.defaultView;
  if (!doc || !view) return () => {};

  const journeys = Array.from(doc.querySelectorAll<HTMLElement>('.jr-v')).flatMap(panel => {
    const track = panel.parentElement;
    const steps = track?.querySelector<HTMLElement>('.jr-st');
    return track && steps && panel.querySelector('.jr-in canvas') ? [{ track, steps, panel }] : [];
  });
  if (!journeys.length) return () => {};

  const style = doc.createElement('style');
  style.dataset['importedJourneyLayout'] = '';
  style.textContent = `
    [data-xh-journey] > .jr-st { margin:0; padding:0; }
    @media (min-width:901px) {
      [data-xh-journey] > .jr-st { gap:0; }
      [data-xh-journey] > .jr-st > li { min-height:var(--xh-journey-height); box-sizing:border-box; }
      [data-xh-journey] > .jr-v {
        position:relative!important; top:auto!important; align-self:start;
        translate:none!important;
        transform:translateY(var(--xh-journey-shift, 0px))!important;
      }
      [data-xh-journey] .jr-rail, [data-xh-journey] .jr-in { height:var(--xh-journey-height)!important; }
    }
    @media (max-width:900px) {
      [data-xh-journey] > .jr-st { gap:16px; }
      [data-xh-journey] > .jr-st > li { min-height:0; opacity:1; }
      [data-xh-journey] > .jr-v { display:none!important; transform:none!important; translate:none!important; }
    }
  `;
  doc.head.appendChild(style);
  journeys.forEach(({ track }) => track.setAttribute('data-xh-journey', ''));

  let pending = 0;
  let disposed = false;
  const setProperty = (el: HTMLElement, name: string, value: string) => {
    if (el.style.getPropertyValue(name) !== value) el.style.setProperty(name, value);
  };
  const update = () => {
    pending = 0;
    if (disposed) return;
    const desktop = view.matchMedia('(min-width:901px)').matches;
    const height = Math.max(340, Math.min(460, window.innerHeight - 170));
    const frameTop = frame.getBoundingClientRect().top;
    // Original animations select the step at the outer viewport's midpoint.
    const pinTop = Math.max(96, (window.innerHeight - height) / 2);
    journeys.forEach(({ track, steps, panel }) => {
      setProperty(track, '--xh-journey-height', `${height}px`);
      const top = frameTop + track.getBoundingClientRect().top;
      const travel = Math.max(0, steps.offsetHeight - panel.offsetHeight);
      const shift = desktop ? Math.max(0, Math.min(pinTop - top, travel)) : 0;
      setProperty(track, '--xh-journey-shift', `${shift}px`);
    });
  };
  // Existing canvas animations listen inside the frame, while the user scrolls outside it.
  const notifyScroll = () => {
    const event = doc.createEvent('Event');
    event.initEvent('scroll', false, false);
    view.dispatchEvent(event);
  };
  const refresh = () => { update(); notifyScroll(); };
  const schedule = () => {
    if (!disposed && !pending) pending = window.requestAnimationFrame(refresh);
  };
  const resize = () => {
    refresh();
    const event = doc.createEvent('Event');
    event.initEvent('resize', false, false);
    view.dispatchEvent(event);
  };
  const observer = new ResizeObserver(schedule);
  journeys.forEach(({ track }) => observer.observe(track));
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  doc.fonts.ready.then(() => { if (!disposed) resize(); });
  resize();

  return () => {
    disposed = true;
    window.cancelAnimationFrame(pending);
    observer.disconnect();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', resize);
    style.remove();
    journeys.forEach(({ track }) => {
      track.removeAttribute('data-xh-journey');
      track.style.removeProperty('--xh-journey-height');
      track.style.removeProperty('--xh-journey-shift');
    });
  };
}
