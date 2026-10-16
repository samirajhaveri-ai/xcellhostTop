const bookmarkSelector = '.cybird-section-nav,.media-jump,.m365-section-nav,.gp-subnav,.consulting-nav,.cpanel-bookmarks,.dx-sub,.oc-sub,.tf-sub,.gc-snav,.product-section-nav,.smb-section-nav,.openclaw-bookmarks,.ps-toc,.sg-sub,.sx-sub,.sa-sub,.sz-sub,.sd-sub,.se-sub,.vf-sub,.vl-snav,.vn-sub,.wsn,.tally-section-nav';
const installations = new WeakMap<Document, () => void>();

/** Give overflowing bookmark rows visible controls and ordinary mouse-wheel support. */
export function installBookmarkScrolling(document: Document): () => void {
  const existing = installations.get(document);
  if (existing) return existing;
  const win = document.defaultView;
  if (!win) return () => {};
  const rows = new Map<HTMLElement, () => void>();
  let pending = 0;

  const scan = (): void => {
    pending = 0;
    rows.forEach((dispose, nav) => {
      if (!nav.isConnected) { dispose(); rows.delete(nav); }
    });
    document.querySelectorAll<HTMLElement>(bookmarkSelector).forEach(nav => {
      if (rows.has(nav)) return;
      const links = nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
      if (links.length < 2) return;
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
    const changed = records.some(record => [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)]
      .some(node => node.nodeType === 1 && ((node as Element).matches(bookmarkSelector) || (node as Element).querySelector(bookmarkSelector))));
    if (changed && !pending) pending = win.requestAnimationFrame(scan);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  const dispose = (): void => {
    observer.disconnect();
    win.cancelAnimationFrame(pending);
    rows.forEach(cleanup => cleanup());
    rows.clear();
    installations.delete(document);
  };
  installations.set(document, dispose);
  win.addEventListener('pagehide', dispose, { once: true });
  scan();
  return dispose;
}
