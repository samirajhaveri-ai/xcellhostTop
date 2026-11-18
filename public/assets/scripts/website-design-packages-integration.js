(function () {
  'use strict';
  XH.open = function (id, options) {
    if (id === 'xhCallback') document.dispatchEvent(new CustomEvent('import-callback', {
      detail: 'Website Design Packages: ' + (options?.topic || 'Website consultation'),
    }));
  };
  XH.cart = { add: function (item) { document.dispatchEvent(new CustomEvent('import-cart', { detail: item })); } };
  const providers = {
    chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=',
    perplexity: 'https://www.perplexity.ai/search/new?q=',
    google: 'https://www.google.com/search?udm=50&q=', copilot: 'https://copilot.microsoft.com/?q=',
  };
  document.querySelectorAll('.lh-ask').forEach(function (box) {
    box.querySelector('.k').innerHTML = '<b>✦</b> Ask AI About Website Design';
    const domains = {chatgpt: 'chatgpt.com', claude: 'claude.ai', perplexity: 'perplexity.ai', google: 'gemini.google.com', copilot: 'copilot.microsoft.com'};
    box.querySelectorAll('[data-ai]').forEach(function (a) {
      const name = a.textContent.trim();
      a.setAttribute('aria-label', 'Ask ' + name); a.title = 'Ask ' + name;
      const img = document.createElement('img');
      img.src = 'https://www.google.com/s2/favicons?domain=' + domains[a.dataset.ai] + '&sz=64';
      img.alt = name; img.width = 18; img.height = 18; a.replaceChildren(img);
      a.href = providers[a.dataset.ai] + encodeURIComponent(box.dataset.q);
      a.target = '_blank'; a.rel = 'noopener noreferrer';
    });
  });
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href]'); if (!a) return;
    if (a.getAttribute('href').startsWith('#')) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin && !/^(?:www\.)?xcellhost\.(?:cloud|top)$/.test(u.hostname)) return;
    let p = u.pathname.replace(/\.html$/, '');
    const aliases = { '/xcellhost-vps-hosting': '/vps-hosting', '/xcellhost-rapidssl': '/rapidssl-ssl-certificates', '/xcellhost-ssl-installation-service': '/ssl-installation-service', '/xcellhost-sarv-workspace': '/xcellworkspace' };
    a.href = (aliases[p] || p) + u.search + u.hash; a.target = '_top';
  }, true);
})();
