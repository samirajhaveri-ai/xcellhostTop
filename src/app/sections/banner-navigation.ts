/** Resolve a hero bookmark across the site's same-origin content frames. */
export function findBannerTarget(document: Document, id: string): HTMLElement | null {
  const own = document.getElementById(id);
  if (own) return own;
  let outer: Window | null = document.defaultView;
  try { while (outer?.parent && outer.parent !== outer && outer.parent.document) outer = outer.parent; } catch { /* Cross-origin boundary. */ }
  const visit = (root: Document | ShadowRoot): HTMLElement | null => {
    const target = root.getElementById(id);
    if (target) return target;
    for (const element of Array.from(root.querySelectorAll('*'))) {
      if (element.shadowRoot) { const found = visit(element.shadowRoot); if (found) return found; }
      if (element.tagName === 'IFRAME') {
        try { const child = (element as HTMLIFrameElement).contentDocument; if (child) { const found = visit(child); if (found) return found; } } catch { /* External embed. */ }
      }
    }
    return null;
  };
  return visit(outer?.document || document);
}

export function scrollToBannerTarget(target: HTMLElement): void {
  const initialView = target.ownerDocument.defaultView;
  if (!initialView) return;
  let view: Window = initialView;
  let top = target.getBoundingClientRect().top;
  try {
    while (view.frameElement && view.parent !== view) {
      top += view.frameElement.getBoundingClientRect().top;
      view = view.parent;
    }
  } catch { /* Stop at the last same-origin window. */ }
  const offset = (view.document.querySelector('.xh-header')?.getBoundingClientRect().height || 80) + 16;
  view.scrollTo({top: view.scrollY + top - offset, behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
}
