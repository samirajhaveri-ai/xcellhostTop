(function () {
  const product = document.querySelector('[data-product]').dataset.product;
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: options && options.topic || product,
      }));
      return;
    }
    originalOpen(id, options);
  };

  // Submit the original form through the application's lead service, with an email fallback.
  // Capture first so the supplied demo runtime cannot report a local-only submission as sent.
  document.addEventListener('submit', function (event) {
    const form = event.target.closest('form[data-xhform]');
    if (!form) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!form.reportValidity() || form.dataset.submitting) return;
    const payload = Object.fromEntries(new FormData(form));
    payload.summary = [payload.need, payload.message].filter(Boolean).join('\n');
    const button = form.querySelector('button[type="submit"]');
    let status = form.querySelector('.marketplace-form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'marketplace-form-status full';
      status.setAttribute('role', 'status');
      form.appendChild(status);
    }
    form.dataset.submitting = 'true';
    if (button) button.disabled = true;
    status.textContent = 'Sending your request…';
    document.dispatchEvent(new CustomEvent('import-marketplace-enquiry', {
      detail: {
        payload,
        complete: function (result) {
          delete form.dataset.submitting;
          if (button) button.disabled = false;
          if (result.ok && !result.skipped) {
            status.textContent = 'Request received. Reference: ' + result.ref;
            form.reset();
          } else {
            status.textContent = 'Please email your request to our team: ';
            const link = document.createElement('a');
            link.href = result.fallbackUrl;
            link.textContent = 'Send enquiry by email';
            status.appendChild(link);
          }
        },
      },
    }));
  }, true);
})();
