export type BannerAction = 'tour' | 'trial' | 'callback';
type Root = Document | ShadowRoot;
type Handler = (action: BannerAction, product: string, hero: HTMLElement, trigger: HTMLElement) => void;
const stylesheet = '/assets/styles/banner-actions.css';
const installations = new WeakMap<Root, () => void>();
const heroSelector = '.home-hero-slide,section[class*="hero"],section[id$="Hero"],header[class*="hero"],section.xh[aria-labelledby],section.xts,.hero,.pp-hero,#hero,.people-banner,.testimonials-intro';
const aiSelector = '.lh-ask,.xt-ai,.ask-ai,.ai-ask,[class*="ask-ai"],[class*="askai"],[class*="-ask"],[class*="-ai"],[data-banner-ai]';
const clean = (text: string | null | undefined) => (text || '').replace(/\s+/g, ' ').trim();
const providers = [
  ['ChatGPT', 'chatgpt.com', 'https://chatgpt.com/?q='],
  ['Perplexity', 'perplexity.ai', 'https://www.perplexity.ai/search/new?q='],
  ['Claude', 'claude.ai', 'https://claude.ai/new?q='],
  ['Google AI', 'gemini.google.com', 'https://www.google.com/search?udm=50&q='],
  ['Grok', 'grok.com', 'https://grok.com/?q='],
];

/** Add only missing hero actions; keep each page's existing handlers and content. */
export function installBannerActions(root: Root, handle: Handler): () => void {
  const existing = installations.get(root);
  if (existing) return existing;
  const doc = root.nodeType === 9 ? root as Document : (root as ShadowRoot).ownerDocument;
  const win = doc.defaultView;
  if (!win) return () => {};
  const container = root.nodeType === 9 ? doc.head : root;
  if (!root.querySelector(`link[href="${stylesheet}"]`)) {
    const link = doc.createElement('link'); link.rel = 'stylesheet'; link.href = stylesheet; container.appendChild(link);
  }
  const nested = new Map<Element, { root: Root | null; dispose?: () => void; load?: () => void }>();
  const callbacks = new Map<HTMLElement, EventListener>();
  let timer = 0, disposed = false;

  function enhance(hero: HTMLElement, heading: HTMLElement): void {
    if (hero.closest('[data-banner-actions="off"],dialog,[role="dialog"],nav,footer')) return;
    let copy = heading.parentElement!;
    // An hgroup/title wrapper is not the content column.
    if (copy.matches('hgroup,.hero-title,.title-wrap,.hero-heading') && copy.parentElement) copy = copy.parentElement;
    const product = clean(hero.dataset['product'] || heading.querySelector('.nm')?.textContent || heading.textContent)
      .replace(/^Xcell\w*\s*\|\s*/i, '') || 'XcellHost Cloud Services';
    if (hero.dataset['bannerProduct'] && hero.dataset['bannerProduct'] !== product) {
      hero.querySelector('[data-banner-added-actions]')?.remove();
      hero.querySelector('[data-banner-ai]')?.remove();
      delete hero.dataset['bannerOriginalActions'];
    }
    hero.dataset['bannerProduct'] = product;
    const controls = Array.from(hero.querySelectorAll<HTMLElement>('a,button'));
    const labels = controls.map(c => clean(c.textContent).replace(/[’']/g, '').toLowerCase());
    const present = {
      tour: labels.some(t => /screenshot\s*tour/.test(t)),
      trial: labels.some(t => /free\s*trial/.test(t)),
      callback: labels.some(t => /let.?s talk|talk to (?:sales|us|an expert)/.test(t)),
    };
    if (!hero.dataset['bannerOriginalActions']) hero.dataset['bannerOriginalActions'] = JSON.stringify(present);
    const ai = Array.from(hero.querySelectorAll<HTMLElement>(aiSelector))
      .filter(row => /ask\s+ai/i.test(row.textContent || '') && row.querySelector('a') && !row.querySelector('h1'))
      .sort((a, b) => (a.textContent?.length || 0) - (b.textContent?.length || 0))[0];
    let row = hero.querySelector<HTMLElement>('[data-banner-added-actions]');
    if (Object.values(present).some(value => !value)) {
      if (!row) {
        row = doc.createElement('div'); row.className = 'xh-banner-actions'; row.dataset['bannerAddedActions'] = '';
        const anchor = ai && copy.contains(ai) ? ai : null;
        const dots = copy.querySelector('.home-hero-dots');
        if (anchor) anchor.before(row); else if (dots) dots.before(row); else copy.appendChild(row);
      }
      for (const [action, label, icon] of [
        ['tour', 'Screenshot Tour', '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'],
        ['trial', '7 Days Free Trial', '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>'],
        ['callback', "Let's Talk →", ''],
      ] as const) {
        if (present[action]) continue;
        const button = doc.createElement('button'); button.type = 'button';
        button.className = 'xh-banner-button' + (action === 'callback' ? ' xh-banner-primary' : '');
        button.dataset['bannerAction'] = action;
        if (icon) button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' + icon + '</svg>';
        button.appendChild(doc.createTextNode(label));
        button.setAttribute('aria-label', label.replace(' →', '') + ' — ' + product);
        const click: EventListener = event => { event.preventDefault(); event.stopPropagation(); handle(action, product, hero, button); };
        button.addEventListener('click', click); callbacks.set(button, click); row.appendChild(button);
      }
    }
    // Share the existing CTA row instead of stacking another row beneath it.
    // Keep the original elements in place so their Angular/iframe handlers survive.
    if (row) {
      const primaryRow = Array.from(copy.querySelectorAll<HTMLElement>(
        '[class*="cta"],[class*="actions"],[class*="btns"],[class*="buttons"]',
      )).find(candidate => candidate !== row && !row!.contains(candidate) &&
        !candidate.hasAttribute('data-banner-added-actions') &&
        !/ask\s+ai/i.test(candidate.textContent || '') &&
        candidate.querySelectorAll(':scope > a, :scope > button').length >= 2);
      if (primaryRow) {
        primaryRow.classList.add('xh-banner-actions-line');
        if (row.parentElement !== primaryRow) primaryRow.appendChild(row);
      }
    }
    if (ai) {
      ai.classList.add('xh-banner-ai-nowrap');
    } else {
      const bar = doc.createElement('div'); bar.className = 'xh-banner-ai xh-banner-ai-nowrap'; bar.dataset['bannerAi'] = '';
      bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Ask AI about ' + product);
      const label = doc.createElement('span'); label.className = 'xh-banner-ai-label'; label.textContent = '✦ Ask AI About ' + product + ' from XcellHost';
      const links = doc.createElement('div'); links.className = 'xh-banner-ai-links';
      const intro = clean(hero.querySelector('p')?.textContent).slice(0, 600);
      const prompt = 'Explain ' + product + ' from XcellHost. ' + intro + ' What are its features, use cases, pricing options and questions to ask before choosing it?';
      for (const [name, domain, url] of providers) {
        const link = doc.createElement('a'); link.href = url + encodeURIComponent(prompt); link.target = '_blank'; link.rel = 'noopener noreferrer';
        link.title = 'Ask ' + name; link.setAttribute('aria-label', 'Ask ' + name + ' about ' + product);
        const image = doc.createElement('img'); image.src = 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=64'; image.alt = name; image.width = 19; image.height = 19;
        link.appendChild(image); links.appendChild(link);
      }
      bar.append(label, links); (row?.closest('.xh-banner-actions-line') || row || copy.lastElementChild)?.after(bar);
      if (!bar.isConnected) copy.appendChild(bar);
    }
    hero.dataset['bannerReady'] = 'true';
  }

  function scan(): void {
    timer = 0;
    if (disposed) return;
    for (const [element, entry] of nested) if (!element.isConnected) { entry.dispose?.(); if (entry.load) element.removeEventListener('load', entry.load); nested.delete(element); }
    for (const [button, click] of callbacks) if (!button.isConnected) { button.removeEventListener('click', click); callbacks.delete(button); }
    root.querySelectorAll<HTMLElement>('h1').forEach((heading, index) => {
      // Only the opening banner, plus the homepage's individual carousel slides.
      if (index > 0 && !heading.closest('.home-hero-slide')) return;
      const hero = heading.closest<HTMLElement>(heroSelector);
      if (hero) enhance(hero, heading);
    });
    root.querySelectorAll<HTMLElement>('*').forEach(element => {
      if (element.shadowRoot && !nested.has(element)) nested.set(element, {root: element.shadowRoot, dispose: installBannerActions(element.shadowRoot, handle)});
      if (element.tagName !== 'IFRAME' || nested.has(element)) return;
      const frame = element as HTMLIFrameElement;
      const entry: {root: Root | null; dispose?: () => void; load?: () => void} = {root:null};
      const load = () => {
        let next: Document | null = null;
        try { next = frame.contentDocument; } catch { return; }
        if (!next || next.URL === 'about:blank' || next.readyState === 'loading') return;
        if (next === entry.root && next.querySelector(`link[href="${stylesheet}"]`)) return;
        // External widgets and authentication/payment frames own their UI.
        // Accessible srcdoc frames inherit our origin although their URL is about:srcdoc.
        if (/checkout|login|signup/.test(new URL(next.URL).pathname)) return;
        entry.dispose?.(); entry.root = next; entry.dispose = installBannerActions(next, handle);
      };
      entry.load = load; nested.set(frame, entry); frame.addEventListener('load', load); load();
    });
    // ReadyState can precede load when an external image takes a long time.
    nested.forEach(entry => entry.load?.());
  }
  function schedule(): void { if (!timer && !disposed) timer = win!.setTimeout(scan, 120); }
  const observer = new MutationObserver(records => {
    if (records.some(record => (record.type === 'characterData' && record.target.parentElement?.closest('h1')) ||
      [...Array.from(record.addedNodes), ...Array.from(record.removedNodes)].some(node => {
      if (node.nodeType !== 1) return false;
      const element = node as Element;
      return element.matches('h1,iframe') || element.tagName.includes('-') ||
        !!element.querySelector('h1,iframe') ||
        Array.from(element.querySelectorAll('*')).some(child => child.tagName.includes('-'));
    }))) schedule();
  });
  observer.observe(root, {childList:true,subtree:true,characterData:true});
  const poll = win.setInterval(() => {
    // Probe pending frame documents without walking an animated page again.
    nested.forEach(entry => { if (!entry.root) entry.load?.(); });
  }, 750);
  const cleanup = () => {
    disposed = true; observer.disconnect(); win.clearTimeout(timer); win.clearInterval(poll);
    nested.forEach((entry, element) => {entry.dispose?.(); if (entry.load) element.removeEventListener('load',entry.load);}); nested.clear();
    callbacks.forEach((click,button)=>button.removeEventListener('click',click)); callbacks.clear(); installations.delete(root);
  };
  installations.set(root, cleanup); scan(); return cleanup;
}
