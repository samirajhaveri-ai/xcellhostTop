(function () {
  window.drSmbJumpTo = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    const embedded = !!window.frameElement;
    const outer = embedded ? parent : window;
    const frameTop = embedded ? frameElement.getBoundingClientRect().top : 0;
    const header = outer.document.querySelector('.xh-header');
    outer.scrollTo({
      top: outer.scrollY + frameTop + target.getBoundingClientRect().top - ((header && header.getBoundingClientRect().height || 80) + 16),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: 'Cloud Disaster Recovery for SMB: ' + (options && options.topic || 'DR plan enquiry'),
      }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
  // The FAQ remains at its original position below the site's follow-up sections.
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href="#picker"]');
    if (!link || document.getElementById('picker') || !window.frameElement) return;
    const content = parent.document.querySelector('iframe[src="/imported-cloud-disaster-recovery-smb.html"]');
    if (!content) return;
    event.preventDefault();
    content.contentWindow.drSmbJumpTo('picker');
  });
})();
