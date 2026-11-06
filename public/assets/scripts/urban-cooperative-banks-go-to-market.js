(function () {
  const embedded = !!window.frameElement;
  const outer = embedded ? parent : window;
  const frameTop = () => embedded ? frameElement.getBoundingClientRect().top : 0;
  window.ucbScrollY = () => Math.max(0, -frameTop());
  window.ucbJumpTo = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    const header = outer.document.querySelector('.xh-header');
    outer.scrollTo({
      top: outer.scrollY + frameTop() + target.getBoundingClientRect().top - ((header?.getBoundingClientRect().height || 80) + 16),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', { detail: options?.topic || 'Urban Co-operative Banks Go-to-Market Strategy' }));
      return;
    }
    originalOpen(id, options);
  };
  const aliases = {
    'xcellhost-dmarc': 'enterprise-dmarc', 'xcellhost-vciso': 'vciso-as-a-service',
    'cloud-hsm': 'cloud-hardware-security-module', 'xcellhost-pci-dss': 'pci-consulting',
    'dpdp-compliance-platform': 'dpdpa-platform-and-consulting', 'xcellhost-vdpo': 'vdpo-as-a-service',
    'xcellhost-managed-grc': 'managed-grc', 'xcellhost-47-day-ssl': '47-days-ssl',
    'xcellhost-managed-pki': 'managed-pki', 'xcellhost-vcaio': 'vcaio-as-a-service',
    'private-cloud': 'hybrid-cloud',
  };
  function localLinks(root) {
    root.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) return;
      const url = new URL(href, location.href);
      if (url.origin !== location.origin && !/^(www\.)?xcellhost\.(cloud|top)$/.test(url.hostname)) return;
      const slug = url.pathname.replace(/^\//, '').replace(/\.html$/, '');
      link.href = '/' + (aliases[slug] || slug) + url.search + url.hash;
      link.target = '_top';
    });
  }
  localLinks(document);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (link) localLinks(link.parentElement);
  }, true);
  const scroll = () => window.dispatchEvent(new Event('scroll'));
  if (embedded) outer.addEventListener('scroll', scroll, { passive: true });
  window.addEventListener('pagehide', () => outer.removeEventListener('scroll', scroll), { once: true });
})();
