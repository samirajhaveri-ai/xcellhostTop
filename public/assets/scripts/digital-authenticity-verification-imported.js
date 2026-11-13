(function () {
  'use strict';
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  window.digitalAuthenticityJumpTo = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    const header = outer.document.querySelector('.xh-header');
    outer.scrollTo({
      top: outer.scrollY + (embedded ? frameElement.getBoundingClientRect().top : 0) + target.getBoundingClientRect().top - ((header?.getBoundingClientRect().height || 80) + 16),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: 'Digital Authenticity Verification: ' + (options?.topic || 'Discuss a verification pilot'),
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
