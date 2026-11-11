(function () {
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  window.nicdpJumpTo = function (id) {
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
        detail: options?.topic || 'National Industrial Corridor Development Programme enquiry',
      }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
  const aliases = {
    'xcellhost-iot-pki': 'iot-pki',
    'industry-5-smart-manufacturing': 'smart-manufacturing',
    'ai-training-integrated-program': 'synapsem-ai-training-integrated-program',
  };
  // The corridor explorer creates its service links when a node is selected.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || link.getAttribute('href').startsWith('#')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !url.pathname.endsWith('.html')) return;
    const slug = url.pathname.replace(/^\//, '').replace(/\.html$/, '');
    link.href = '/' + (aliases[slug] || slug) + url.search + url.hash;
    link.target = '_top';
  }, true);
})();
