(function () {
  const providers = [
    ['ChatGPT', 'chatgpt.com', 'https://chatgpt.com/?q='],
    ['Perplexity', 'perplexity.ai', 'https://www.perplexity.ai/search/new?q='],
    ['Claude', 'claude.ai', 'https://claude.ai/new?q='],
    ['Google AI', 'gemini.google.com', 'https://gemini.google.com/app'],
    ['Grok', 'grok.com', 'https://grok.com/?q='],
  ];
  document.querySelectorAll('.hero .lh-ask').forEach(function (bar) {
    if (bar.dataset.iconAskReady) return;
    const chips = bar.querySelector('.chips');
    if (!chips || !chips.querySelector('[data-ai]')) return;
    bar.dataset.iconAskReady = 'true';
    bar.classList.add('xh-icon-ask');
    const hero = bar.closest('.hero');
    const product = bar.dataset.aiProduct || hero.dataset.product || hero.querySelector('h1 .nm')?.textContent.trim() || 'this service';
    const prompt = bar.dataset.q || 'Explain ' + product + ' from XcellHost, its features, use cases and available plans.';
    const label = bar.querySelector('.k');
    if (label) label.textContent = '\u2726 Ask AI About ' + product + ' from XcellHost';
    chips.replaceChildren();
    providers.forEach(function ([name, domain, url]) {
      const link = document.createElement('a');
      link.href = name === 'Google AI' ? url : url + encodeURIComponent(prompt);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Ask ' + name + ' about ' + product);
      link.title = name === 'Google AI' ? 'Google AI — copy prompt and open' : 'Ask ' + name;
      const icon = document.createElement('img');
      icon.src = 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=64';
      icon.alt = '';
      icon.width = 19;
      icon.height = 19;
      link.append(icon);
      if (name === 'Google AI') {
        link.addEventListener('click', function () {
          if (navigator.clipboard) navigator.clipboard.writeText(prompt).catch(function () {});
        });
      }
      chips.append(link);
    });
  });
})();
