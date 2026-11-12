(function () {
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  window.dpdpJumpTo = function (id) {
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
      document.dispatchEvent(new CustomEvent('import-callback', { detail: options?.topic || 'DPDPA for Enterprise enquiry' }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
})();
