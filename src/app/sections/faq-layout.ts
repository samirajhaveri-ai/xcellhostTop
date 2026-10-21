const stylesheet = '/assets/styles/faq-layout.css';
const installations = new WeakMap<Document, () => void>();

/** Apply the shared FAQ layout to routed content and nested local page frames. */
export function installFaqLayout(document: Document): () => void {
  const existing = installations.get(document);
  if (existing) return existing;
  const win = document.defaultView;
  if (!win) return () => {};

  if (!document.querySelector(`link[href="${stylesheet}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheet;
    document.head.appendChild(link);
  }

  const frames = new Map<HTMLIFrameElement, () => void>();
  let pending = 0;
  const scan = (): void => {
    pending = 0;
    frames.forEach((cleanup, frame) => {
      if (!frame.isConnected) { cleanup(); frames.delete(frame); }
    });
    document.querySelectorAll<HTMLIFrameElement>('iframe').forEach(frame => {
      if (frames.has(frame)) return;
      let current: Document | null = null;
      let dispose: (() => void) | undefined;
      const load = (): void => {
        const next = frame.contentDocument;
        if (next === current) return;
        dispose?.();
        current = next;
        dispose = next ? installFaqLayout(next) : undefined;
      };
      frame.addEventListener('load', load);
      frames.set(frame, () => { frame.removeEventListener('load', load); dispose?.(); });
      load();
    });
  };
  const observer = new MutationObserver(records => {
    const framesChanged = records.some(record =>
      [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some(node =>
        node.nodeType === 1 && ((node as Element).matches('iframe') || (node as Element).querySelector('iframe')),
      ),
    );
    if (framesChanged && !pending) pending = win.requestAnimationFrame(scan);
  });
  observer.observe(document, { childList: true, subtree: true });
  const cleanup = (): void => {
    observer.disconnect();
    win.cancelAnimationFrame(pending);
    frames.forEach(dispose => dispose());
    frames.clear();
    win.removeEventListener('pagehide', cleanup);
    installations.delete(document);
  };
  installations.set(document, cleanup);
  win.addEventListener('pagehide', cleanup, { once: true });
  scan();
  return cleanup;
}
