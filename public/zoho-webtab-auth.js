(() => {
  'use strict';

  if (window.parent === window) return;
  const allowedParents = new Set(['https://billing.zoho.in', 'https://billing.zohosecure.in']);
  const customerId = new URLSearchParams(window.location.search).get('customer_id') || '';
  let currentCustomer = null;
  let refreshRequested = false;

  const fields = {
    firstName: ['#firstName', '#fn', '[name="First Name"]', '[autocomplete="given-name"]'],
    lastName: ['#lastName', '#ln', '[name="Last Name"]', '[autocomplete="family-name"]'],
    email: ['#email', '#em', '#exEmail', '[name="Email"]', '[autocomplete="email"]'],
    mobile: ['#mobile', '#mb', '[name="Mobile"]', '[autocomplete="tel"]'],
    company: ['#company', '#co', '#legalName', '#pf_company', '[name="Company"]', '[autocomplete="organization"]'],
    street: ['#street', '#pf_street', '[autocomplete="address-line1"]'],
    address2: ['#address2', '#pf_address1', '[autocomplete="address-line2"]'],
    city: ['#city', '#pf_city', '[autocomplete="address-level2"]'],
    state: ['#state', '#billingState', '#pf_state', '[autocomplete="address-level1"]'],
    postalCode: ['#pin', '#pf_zip', '[name="Zip Code"]', '[autocomplete="postal-code"]'],
    country: ['#country', '#pf_country', '[autocomplete="country-name"]'],
    gstin: ['#gstin', '#pf_gstin'],
  };

  function setControlValue(control, value) {
    if (!control || value == null || String(value).trim() === '' || control.type === 'password') return;
    const next = String(value).trim();
    if (control.value === next) return;
    control.value = next;
    control.dispatchEvent(new Event('input', { bubbles: true }));
    control.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function showVerifiedStatus(doc, customer) {
    if (doc.getElementById('xhZohoVerified')) return;
    const target = doc.querySelector('#customerPanel .card-sub, #cardAccount .card-sub, .acct-opts, .account-options');
    if (!target) return;
    const status = doc.createElement('div');
    status.id = 'xhZohoVerified';
    status.setAttribute('role', 'status');
    status.style.cssText = 'margin:12px 0;padding:10px 12px;border:1px solid #9be2b0;border-radius:10px;background:#ecfdf3;color:#146c36;font:600 14px/1.4 system-ui,sans-serif';
    status.textContent = `Verified Zoho Billing customer${customer.email ? ` · ${customer.email}` : ''}. Saved details have been filled in.`;
    target.insertAdjacentElement('afterend', status);
  }

  function fillDocument(doc, customer) {
    for (const [key, selectors] of Object.entries(fields)) {
      for (const selector of selectors) {
        doc.querySelectorAll(selector).forEach((control) => setControlValue(control, customer[key]));
      }
    }
    if (customer.gstin) {
      doc.querySelectorAll('#gstRegistered, #gstReg').forEach((control) => {
        const yes = Array.from(control.options || []).find((option) => /^(yes|YES)$/.test(option.value));
        if (yes) setControlValue(control, yes.value);
      });
    }
    showVerifiedStatus(doc, customer);
    doc.defaultView?.dispatchEvent(new CustomEvent('xcellhost:zoho-customer', { detail: customer }));
  }

  function fillAll(customer) {
    fillDocument(document, customer);
    document.querySelectorAll('iframe').forEach((frame) => {
      try {
        if (frame.contentDocument) fillDocument(frame.contentDocument, customer);
      } catch (_) { /* Cross-origin frames are intentionally ignored. */ }
    });
  }

  async function verify(jwtToken, parentOrigin) {
    const response = await fetch('/api/zoho-webtab-session.php', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jwt_token: jwtToken, customer_id: customerId }),
    });
    if (response.status === 401 && !refreshRequested) {
      refreshRequested = true;
      window.parent.postMessage({ type: 'ZOHO_WEBTAB_REQUEST_TOKEN_REFRESH' }, parentOrigin);
      return;
    }
    if (!response.ok) throw new Error('Zoho customer verification failed.');
    const result = await response.json();
    if (!result?.authenticated || !result.customer) throw new Error('Zoho customer verification failed.');
    refreshRequested = false;
    currentCustomer = result.customer;
    fillAll(currentCustomer);
  }

  window.addEventListener('message', (event) => {
    if (event.source !== window.parent || !allowedParents.has(event.origin)) return;
    const message = event.data;
    if (!message || message.type !== 'ZOHO_WEBTAB_AUTH_TOKENS') return;
    if (!message.jwt_token) {
      currentCustomer = null;
      return;
    }
    void verify(String(message.jwt_token), event.origin).catch(() => {
      window.dispatchEvent(new CustomEvent('xcellhost:zoho-auth-error'));
    });
  });

  new MutationObserver(() => {
    if (currentCustomer) fillAll(currentCustomer);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
