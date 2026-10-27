const bookmarkSelector = '.cybird-section-nav,.media-jump,.m365-section-nav,.gp-subnav,.consulting-nav,.cpanel-bookmarks,.dx-sub,.oc-sub,.tf-sub,.gc-snav,.product-section-nav,.smb-section-nav,.openclaw-bookmarks,.ps-toc,.sg-sub,.sx-sub,.sa-sub,.sz-sub,.sd-sub,.se-sub,.vf-sub,.vl-snav,.vn-sub,.wsn,.tally-section-nav,.df-sub,.ma-sub,.az-sub,.gc-sub,.e7-sub';
const installations = new WeakMap<Document, () => void>();

/** Keep bookmark bars in page flow, including bars inside same-origin page frames. */
export function installBookmarkScrolling(document: Document): () => void {
  const existing = installations.get(document);
  if (existing) return existing;
  const win = document.defaultView;
  if (!win) return () => {};
  const rows = new Map<HTMLElement, () => void>();
  const frames = new Map<HTMLIFrameElement, () => void>();
  let pending = 0;

  const scan = (): void => {
    pending = 0;
    rows.forEach((dispose, nav) => {
      if (!nav.isConnected) { dispose(); rows.delete(nav); }
    });
    frames.forEach((dispose, frame) => {
      if (!frame.isConnected) { dispose(); frames.delete(frame); }
    });
    document.querySelectorAll<HTMLIFrameElement>('iframe').forEach(frame => {
      if (frames.has(frame)) return;
      let childDocument: Document | null = null;
      let cleanup: (() => void) | undefined;
      const load = (): void => {
        // External video, payment and map frames do not expose a contentDocument.
        const next = frame.contentDocument;
        if (next === childDocument && cleanup) return;
        cleanup?.();
        childDocument = next;
        cleanup = next ? installBookmarkScrolling(next) : undefined;
      };
      // Some supplied pages announce readiness before remote assets finish loading.
      const ready = (event: MessageEvent): void => {
        if (event.source === frame.contentWindow && event.origin === win.location.origin) load();
      };
      frame.addEventListener('load', load);
      win.addEventListener('message', ready);
      frames.set(frame, () => {
        frame.removeEventListener('load', load);
        win.removeEventListener('message', ready);
        cleanup?.();
      });
      load();
    });
    document.querySelectorAll<HTMLElement>(bookmarkSelector).forEach(nav => {
      if (rows.has(nav)) return;
      const links = nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
      if (links.length < 2) return;
      // Imported pages have their own stylesheets; the outer Angular CSS cannot reach them.
      if (win.parent !== win && !document.querySelector('link[href="/assets/styles/section-navigation-flow.css"]')) {
        const sheet = document.createElement('link');
        sheet.rel = 'stylesheet';
        sheet.href = '/assets/styles/section-navigation-flow.css';
        document.head.appendChild(sheet);
      }
      for (const [property, value] of Object.entries({ position: 'relative', top: 'auto', bottom: 'auto', translate: 'none', transform: 'none' })) {
        nav.style.setProperty(property, value, 'important');
      }
      let track = links[0].parentElement!;
      if (track === nav) {
        track = document.createElement('div');
        track.className = 'xh-bookmark-track';
        while (nav.firstChild) track.appendChild(nav.firstChild);
        nav.appendChild(track);
      }
      const shell = document.createElement('div');
      shell.className = 'xh-bookmark-scroll';
      track.before(shell);
      shell.appendChild(track);
      track.classList.add('xh-bookmark-track');
      track.tabIndex = 0;
      track.setAttribute('aria-label', 'Scrollable bookmark tabs');

      const makeButton = (direction: number): HTMLButtonElement => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'xh-bookmark-arrow';
        button.textContent = direction < 0 ? '‹' : '›';
        button.setAttribute('aria-label', `Scroll bookmarks ${direction < 0 ? 'left' : 'right'}`);
        button.hidden = true;
        button.addEventListener('click', () => track.scrollBy({
          left: direction * Math.max(160, track.clientWidth * .7),
          behavior: win.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        }));
        return button;
      };
      const previous = makeButton(-1);
      const next = makeButton(1);
      shell.prepend(previous);
      shell.append(next);
      const update = (): void => {
        const overflowing = track.scrollWidth > shell.clientWidth + 2;
        previous.hidden = next.hidden = !overflowing;
        previous.disabled = track.scrollLeft <= 1;
        next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
      };
      const wheel = (event: WheelEvent): void => {
        if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? track.clientWidth : 1);
        const maximum = track.scrollWidth - track.clientWidth;
        if ((delta > 0 && track.scrollLeft < maximum - 1) || (delta < 0 && track.scrollLeft > 1)) {
          event.preventDefault();
          track.scrollBy({ left: delta, behavior: 'instant' });
        }
      };
      track.addEventListener('wheel', wheel, { passive: false });
      track.addEventListener('scroll', update, { passive: true });
      const resize = new ResizeObserver(update);
      resize.observe(shell);
      resize.observe(track);
      document.fonts?.ready.then(() => { if (nav.isConnected) update(); });
      update();
      rows.set(nav, () => {
        resize.disconnect();
        track.removeEventListener('wheel', wheel);
        track.removeEventListener('scroll', update);
      });
    });
  };
  const observer = new MutationObserver(records => {
    const changed = records.some(record => (record.target as Element).closest?.(bookmarkSelector) ||
      [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)]
        .some(node => node.nodeType === 1 && ((node as Element).matches(`${bookmarkSelector},iframe`) || (node as Element).querySelector(`${bookmarkSelector},iframe`))));
    if (changed && !pending) pending = win.requestAnimationFrame(scan);
  });
  observer.observe(document, { childList: true, subtree: true });
  const dispose = (): void => {
    observer.disconnect();
    win.cancelAnimationFrame(pending);
    rows.forEach(cleanup => cleanup());
    rows.clear();
    frames.forEach(cleanup => cleanup());
    frames.clear();
    installations.delete(document);
  };
  installations.set(document, dispose);
  win.addEventListener('pagehide', dispose, { once: true });
  scan();
  return dispose;
}
