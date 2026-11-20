(function () {
  'use strict';
  const main = document.querySelector('main[data-network-service]');
  const title = main.dataset.serviceTitle;
  XH.open = function (id, options) {
    if (id === 'xhCallback') document.dispatchEvent(new CustomEvent('import-callback', { detail: title + ': ' + (options?.topic || 'Service enquiry') }));
  };
  XH.cart = { add: function (item) { document.dispatchEvent(new CustomEvent('import-cart', { detail: item })); } };
  // Source forms simulate success. Continue into the website's enquiry review instead.
  XH.onForm = function () {};
  document.querySelectorAll('[data-import-enquiry]').forEach(function (form) {
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Review Enquiry \u2192';
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      document.dispatchEvent(new CustomEvent('import-training-enquiry', { detail: Object.fromEntries(new FormData(form).entries()) }));
    });
  });
  const hero = main.querySelector('.hero');
  const copy = hero?.querySelector('[class$="-copy"]');
  if (copy) copy.classList.add('network-hero-copy');
  const providers = {
    chatgpt: ['ChatGPT', 'chatgpt.com', 'https://chatgpt.com/?q='],
    claude: ['Claude', 'claude.ai', 'https://claude.ai/new?q='],
    perplexity: ['Perplexity', 'perplexity.ai', 'https://www.perplexity.ai/search/new?q='],
    google: ['Google AI', 'gemini.google.com', 'https://www.google.com/search?udm=50&q='],
    copilot: ['Copilot', 'copilot.microsoft.com', 'https://copilot.microsoft.com/?q='],
  };
  if (copy && !copy.querySelector('.lh-ask')) {
    const ask = document.createElement('div'); ask.className = 'lh-ask';
    ask.dataset.q = 'Explain XcellHost ' + title + ', its use cases, available options and questions to ask before choosing a service.';
    ask.innerHTML = '<span class="k"></span><span class="chips">' + Object.keys(providers).map(p => '<a data-ai="' + p + '"></a>').join('') + '</span>';
    const actions = copy.querySelector('.lh-ctas');
    if (actions) actions.after(ask); else copy.append(ask);
  }
  const powered = hero?.querySelector('.lh-powered');
  const ask = copy?.querySelector('.lh-ask');
  if (powered && ask) ask.after(powered);
  hero?.querySelectorAll('.lh-ask').forEach(function (box) {
    box.querySelector('.k').textContent = '\u2726 Ask AI About ' + (main.dataset.networkService === 'web-application-firewall' ? 'WAF' : title);
    box.querySelectorAll('[data-ai]').forEach(function (a) {
      const [name, domain, url] = providers[a.dataset.ai];
      a.setAttribute('aria-label', 'Ask ' + name); a.title = 'Ask ' + name;
      const img = document.createElement('img');
      img.src = 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=64';
      img.alt = name; img.width = 18; img.height = 18; a.replaceChildren(img);
      a.href = url + encodeURIComponent(box.dataset.q); a.target = '_blank'; a.rel = 'noopener noreferrer';
    });
  });
  const aliases = { '/waf': '/web-application-firewall', '/ssl': '/ssl-tools', '/acronis': '/vendor-partners/acronis', '/xcellhost-digicert-certificates': '/digicert-ssl-certificates', '/xcellhost-ssl-installation-service': '/ssl-installation-service', '/xcellhost-rapidssl': '/rapidssl-ssl-certificates', '/xcellhost-acme-certificate': '/acme-certificate' };
  document.addEventListener('click', function (event) {
    const a = event.target.closest('a[href]'); if (!a) return;
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id.startsWith('svc-')) {
        event.preventDefault(); event.stopImmediatePropagation();
        history.replaceState(null, '', href); XH.vcDeep(); return;
      }
      if (id && document.getElementById(id)) { event.preventDefault(); event.stopImmediatePropagation(); window.hostingJumpTo(id); }
      return;
    }
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin && !/^(?:www\.)?xcellhost\.(?:cloud|top)$/.test(u.hostname)) return;
    const p = u.pathname.replace(/\.html$/, '');
    a.href = (aliases[p] || p) + u.search + u.hash; a.target = '_top';
  }, true);
})();
