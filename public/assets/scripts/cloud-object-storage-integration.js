(function () {
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id !== 'xhCallback') return originalOpen(id, options);
    let topic = options?.topic || 'Cloud Object Storage consultation';
    if (/trial/i.test(topic)) {
      document.dispatchEvent(new CustomEvent('import-trial'));
    } else {
      if (/quot/i.test(topic)) {
        topic += '\n' + document.getElementById('cfName').textContent + '\n' + document.getElementById('cfRows').innerText + '\nMonthly total including GST: ' + document.getElementById('cfTot').textContent;
      }
      document.dispatchEvent(new CustomEvent('import-callback', { detail: 'Cloud Object Storage: ' + topic }));
    }
  };
  XH.cart = { add: item => document.dispatchEvent(new CustomEvent('import-cart', { detail: item })) };
  const providers = { chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=', perplexity: 'https://www.perplexity.ai/search/new?q=', google: 'https://www.google.com/search?udm=50&q=', copilot: 'https://copilot.microsoft.com/?q=' };
  document.querySelectorAll('.lh-ask').forEach(box => box.querySelectorAll('[data-ai]').forEach(a => {
    a.href = providers[a.dataset.ai] + encodeURIComponent(box.dataset.q);
    a.target = '_blank'; a.rel = 'noopener noreferrer';
  }));
  document.addEventListener('click', e => {
    if (e.target.closest('a[href="#contact"]')) { e.preventDefault(); XH.open('xhCallback'); }
  });
})();
