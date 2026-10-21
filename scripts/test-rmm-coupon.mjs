import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../src/assets/xcellhost-rmm-checkout.html', import.meta.url), 'utf8');
const script = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(source => source.includes('const RMM_PLANS ='));

function checkout(saved = new Map()) {
  const elements = new Map();
  const element = selector => {
    if (!elements.has(selector)) elements.set(selector, {
      value: '', innerHTML: '', textContent: '', style: {}, className: '',
      classList: { add() {} }, querySelector: () => null,
    });
    return elements.get(selector);
  };
  const location = { assign(url) { this.assigned = url; } };
  const context = vm.createContext({
    document: { querySelector: element, addEventListener() {} },
    window: { top: { location } }, URL, URLSearchParams,
    localStorage: {
      getItem: key => saved.get(key) ?? null,
      setItem: (key, value) => saved.set(key, value),
    },
  });
  vm.runInContext(script, context);
  const run = code => vm.runInContext(code, context);
  const apply = code => { element('#couponInput').value = code; run('applyCoupon()'); };
  return { run, apply, element, saved, location };
}

test('RMM coupon applies exactly 10% before GST in the sidebar and payment recap', () => {
  const { run, apply, element } = checkout();
  run('state.step="payment";');
  apply(' xcellesr10 ');
  assert.equal(run('state.coupon'), 'XCELLESR10');
  assert.equal(run('discountAmt()'), 119.9);
  assert.equal(run('subtotal()'), 1079.1);
  assert.equal(run('gstAmt()'), 194.24);
  assert.equal(run('grandTotal()'), 1273.34);
  assert.equal(element('#discountAmt').textContent, '−₹119.9');
  assert.equal(element('#total').innerHTML, '₹1,273.34');
  assert.match(element('#payRecap').innerHTML, /₹1,273\.34/);
  apply('');
  assert.doesNotMatch(element('#payRecap').innerHTML, /<span>Discount<\/span>/);
  assert.match(element('#payRecap').innerHTML, /₹1,414\.82/);
});

test('all RMM terms and quantity changes retain the discount and correct hosted URL', () => {
  const { run, apply, location } = checkout();
  apply('XCELLESR10');
  for (const [term, plan] of [['1y', 'XLCS-SMB-RMM-YEA'], ['2y', 'XLCS-SMB-RMM-2YEA'], ['3y', 'XLCS-SMB-RMM-3YEA']]) {
    run(`selectTerm('${term}'); setQty(3);`);
    assert.equal(run('discountAmt()'), run('money(basePrice()*0.1)'));
    run('proceedToPayment()');
    const url = new URL(location.assigned);
    assert.equal(url.origin, 'https://billing.zohosecure.in');
    assert.ok(url.pathname.endsWith('/' + plan));
    assert.equal(url.searchParams.get('coupon_code'), 'XCELLESR10');
    assert.equal(url.searchParams.get('quantity'), '3');
  }
});

test('hosted payment preserves customer prefill and excludes passwords and computed prices', () => {
  const { run, apply, location } = checkout();
  run('state.account={firstName:"A & B",email:"customer+test@example.com",password:"private"}; state.profile={street:"12 Main Road",state:"Maharashtra",country:"India"};');
  apply('XCELLESR10');
  run('proceedToPayment()');
  const params = new URL(location.assigned).searchParams;
  assert.equal(params.get('first_name'), 'A & B');
  assert.equal(params.get('email'), 'customer+test@example.com');
  assert.equal(params.get('billing_state_code'), 'MH');
  assert.equal(params.get('billing_country_code'), 'IN');
  assert.equal(params.get('coupon_code'), 'XCELLESR10');
  for (const name of ['password', 'price', 'total', 'discount']) assert.equal(params.has(name), false);
});

test('coupon survives reload; invalid and cleared codes remove it from storage and payment URL', () => {
  const first = checkout();
  first.apply('XCELLESR10');
  const second = checkout(first.saved);
  second.run('loadCart()');
  assert.equal(second.run('state.coupon'), 'XCELLESR10');
  for (const code of ['', 'INVALID', 'XCELLEDR10', 'constructor', '__proto__']) {
    second.apply('XCELLESR10');
    second.apply(code);
    assert.equal(second.run('discountAmt()'), 0);
    assert.equal(JSON.parse(second.saved.get('xcellhost_rmm_cart')).coupon, null);
    second.run('proceedToPayment()');
    assert.equal(new URL(second.location.assigned).searchParams.has('coupon_code'), false);
  }
});
