const stylesheet = '/assets/styles/faq-layout.css';
type FaqRoot = Document | ShadowRoot;
const installations = new WeakMap<FaqRoot, () => void>();

function ensureStylesheet(root: FaqRoot): void {
  const document = root.nodeType === 9 ? root as Document : root.ownerDocument;
  if (!document) return;
  const target = root.nodeType === 9 ? document.head : root;
  if (!target || root.querySelector(`link[href="${stylesheet}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = stylesheet;
  target.appendChild(link);
}

/** Apply the shared FAQ layout to routed content, local frames and shadow roots. */
export function installFaqLayout(document: FaqRoot): () => void {
  ensureStylesheet(document);
  const existing = installations.get(document);
  if (existing) return existing;
  const owner = document.nodeType === 9 ? document as Document : document.ownerDocument;
  const win = owner?.defaultView;
  if (!win) return () => {};

  const frames = new Map<HTMLIFrameElement, () => void>();
  const shadows = new Map<ShadowRoot, () => void>();
  let pending = 0;
  const scan = (): void => {
    pending = 0;
    shadows.forEach((cleanup, root) => {
      if (!root.host.isConnected) { cleanup(); shadows.delete(root); }
    });
    document.querySelectorAll('*').forEach(element => {
      const root = element.shadowRoot;
      if (root && !shadows.has(root)) shadows.set(root, installFaqLayout(root));
    });
    frames.forEach((cleanup, frame) => {
      if (!frame.isConnected) { cleanup(); frames.delete(frame); }
    });
    document.querySelectorAll<HTMLIFrameElement>('iframe').forEach(frame => {
      if (frames.has(frame)) return;
      let current: Document | null = null;
      let dispose: (() => void) | undefined;
      let probe = 0;
      let attempts = 0;
      const load = (): void => {
        const next = frame.contentDocument;
        if (next === current) {
          if (next) ensureStylesheet(next);
          return;
        }
        dispose?.();
        current = next;
        dispose = next ? installFaqLayout(next) : undefined;
      };
      // The frame's load event can wait for remote images or videos. Apply the
      // FAQ stylesheet as soon as its local document becomes available instead.
      const checkDocument = (): void => {
        load();
        const next = frame.contentDocument;
        if (++attempts < 100 && frame.isConnected &&
            (!next || next.URL === 'about:blank' || next.readyState === 'loading')) {
          probe = win.setTimeout(checkDocument, 100);
        }
      };
      const start = (): void => {
        win.clearTimeout(probe);
        attempts = 0;
        checkDocument();
      };
      const ready = (event: MessageEvent): void => {
        if (event.source === frame.contentWindow && event.origin === win.location.origin) load();
      };
      const sourceObserver = new MutationObserver(start);
      sourceObserver.observe(frame, { attributes: true, attributeFilter: ['src', 'srcdoc'] });
      frame.addEventListener('load', load);
      win.addEventListener('message', ready);
      frames.set(frame, () => {
        win.clearTimeout(probe);
        sourceObserver.disconnect();
        frame.removeEventListener('load', load);
        win.removeEventListener('message', ready);
        dispose?.();
      });
      start();
    });
  };
  const observer = new MutationObserver(records => {
    const rootsChanged = records.some(record =>
      [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some(node =>
        node.nodeType === 1 && ((node as Element).matches('iframe') ||
          (node as Element).tagName.includes('-') ||
          Array.from((node as Element).querySelectorAll('*')).some(element =>
            element.tagName === 'IFRAME' || element.tagName.includes('-'))),
      ),
    );
    if (rootsChanged && !pending) pending = win.requestAnimationFrame(scan);
  });
  observer.observe(document, { childList: true, subtree: true });
  const cleanup = (): void => {
    observer.disconnect();
    win.cancelAnimationFrame(pending);
    frames.forEach(dispose => dispose());
    frames.clear();
    shadows.forEach(dispose => dispose());
    shadows.clear();
    win.removeEventListener('pagehide', cleanup);
    installations.delete(document);
  };
  installations.set(document, cleanup);
  win.addEventListener('pagehide', cleanup, { once: true });
  scan();
  return cleanup;
}
