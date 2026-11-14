(function () {
  'use strict';
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  const names = { devsecops: 'DevSecOps', cloudops: 'CloudOps', dataops: 'DataOps' };
  const name = names[document.querySelector('main').dataset.opsPage];
  const aliases = { aiops: 'aiops-as-a-service', 'cloud-disaster-recovery-smb': 'cloud-disaster-recovery-for-smb' };
  // Cloud tabs and the coverage tool also create internal links at runtime.
  function connectLinks() {
    document.querySelectorAll('main a[href]').forEach(function (link) {
      const href = link.getAttribute('href');
      const match = href.match(/^([a-z0-9-]+)\.html(#[^\s]*)?$/);
      if (match) link.setAttribute('href', '/' + (aliases[match[1]] || match[1]) + (match[2] || ''));
      if (link.getAttribute('href').startsWith('/') && link.getAttribute('target') !== '_top') link.setAttribute('target', '_top');
    });
  }
  connectLinks();
  const links = new MutationObserver(connectLinks);
  links.observe(document.querySelector('main'), { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
  addEventListener('pagehide', function () { links.disconnect(); }, { once: true });
  window.opsScrollPosition = function () {
    return embedded ? -frameElement.getBoundingClientRect().top : scrollY;
  };
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: options?.topic || name + ': Talk to an expert',
      }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) { document.dispatchEvent(new CustomEvent('import-cart', { detail: item })); };
  XH.cart.open = function () { document.dispatchEvent(new CustomEvent('import-cart-open')); };
  if (embedded) {
    const syncTheme = function () {
      document.documentElement.setAttribute('data-theme', outer.document.documentElement.getAttribute('data-theme') || 'light');
      document.dispatchEvent(new Event('xh:theme'));
    };
    const observer = new MutationObserver(syncTheme);
    observer.observe(outer.document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    addEventListener('pagehide', function () { observer.disconnect(); }, { once: true });
    syncTheme();
  }
})();
