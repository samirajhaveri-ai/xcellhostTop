import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const html = readFileSync(new URL('../src/assets/xcellhost-checkout.html', import.meta.url), 'utf8');
const script = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(source => source.includes('const PRODUCTS ='));

// Run the real checkout code with DOM stand-ins, without making payment requests.
function checkout() {
  const elements = new Map();
  function element(id) {
    if (!elements.has(id)) {
      const classes = new Set();
      elements.set(id, {
        value: '', textContent: '', innerHTML: '', style: {}, dataset: {}, listeners: {},
        classList: { add: value => classes.add(value), remove: value => classes.delete(value), contains: value => classes.has(value) },
        addEventListener(name, callback) { this.listeners[name] = callback; },
        querySelectorAll: () => [], querySelector: () => null,
      });
    }
    return elements.get(id);
  }
  const location = { search: '?product=acronis-edr', assign(url) { this.assigned = url; } };
  const context = vm.createContext({
    document: { getElementById: element, querySelectorAll: () => [], querySelector: () => null, addEventListener() {} },
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    window: { location, top: { location }, parent: { postMessage() {} } },
    URLSearchParams, setTimeout() {}, console,
  });
  vm.runInContext(script.slice(0, script.lastIndexOf('(function init(){')), context);
  const run = source => vm.runInContext(source, context);
  run('state.productId="acronis-edr"; state.product=PRODUCTS[state.productId]; state.billing="1-year"; cart.items=[normalizeCartItem(PRODUCT_CATALOG[state.productId], getPlan(state.productId,state.billing),1)];');
  const apply = code => { element('couponInput').value = code; element('couponBtn').listeners.click(); };
  return { element, run, apply, location };
}

test('XCELLEDR10 reduces EDR totals by 10%, updates GST, summary and open drawer', () => {
  const { element, run, apply } = checkout();
  element('cartDrawer').classList.add('open');
  apply(' xcelleDR10 ');
  assert.equal(run('state.coupon'), 'XCELLEDR10');
  assert.equal(element('discountLine').style.display, 'flex');
  assert.equal(element('discountAmt').textContent, '−₹100');
  assert.equal(element('subtotal').textContent, '₹899');
  assert.equal(element('gst').textContent, '₹162');
  assert.equal(element('total').textContent, '₹1,061');
  assert.ok(Math.abs(run('calculateCartTotal()') - 1060.938) < 0.00001);
  assert.ok(Math.abs(run('calculateCartGST()') - 161.838) < 0.00001);
  assert.match(element('drawerFoot').innerHTML, /₹1,061/);
});

test('discount stays correct for each EDR term and quantity changes without stacking', () => {
  const { run, apply } = checkout();
  for (const [cycle, price] of [['1-year', 999], ['2-year', 1998], ['3-year', 2997]]) {
    run(`state.billing=${JSON.stringify(cycle)}; cart.items=[normalizeCartItem(PRODUCT_CATALOG['acronis-edr'],getPlan('acronis-edr',state.billing),3)];`);
    apply('XCELLEDR10');
    apply('XCELLEDR10');
    assert.ok(Math.abs(run('calculateCartTotal()') - price * 3 * 0.9 * 1.18) < 0.00001);
    assert.ok(Math.abs(run('calculatePrice(PRODUCTS["acronis-edr"],state.billing,3,state.coupon).total') - run('calculateCartTotal()')) < 0.00001);
  }
});

test('invalid or blank codes clear an earlier discount in both summary and drawer', () => {
  const { element, run, apply } = checkout();
  element('cartDrawer').classList.add('open');
  for (const code of ['BADCODE', '', 'constructor', '__proto__']) {
    apply('XCELLEDR10');
    apply(code);
    assert.equal(run('state.coupon'), null);
    assert.equal(element('discountLine').style.display, 'none');
    assert.equal(element('total').textContent, '₹1,179');
    assert.doesNotMatch(element('drawerFoot').innerHTML, /class="d-tline discount"/);
  }
});

test('the EDR coupon does not discount Tally items, including in a mixed cart', () => {
  const { element, run, apply } = checkout();
  run('cart.items=[normalizeCartItem(PRODUCT_CATALOG["tally-private-cloud-lite"], getPlan("tally-private-cloud-lite","monthly"),1)];');
  apply('XCELLEDR10');
  assert.equal(run('state.coupon'), null);
  assert.match(element('couponMsg').textContent, /EDR plans only/);
  run('cart.items.push(normalizeCartItem(PRODUCT_CATALOG["acronis-edr"], getPlan("acronis-edr","1-year"),1));');
  apply('XCELLEDR10');
  assert.equal(run('calculateCouponDiscount(cart.items,state.coupon)'), 99.9);
});

test('the payment handoff includes the coupon for a configured EDR hosted plan', () => {
  const { element, run, apply, location } = checkout();
  run('PRODUCT_CATALOG["acronis-edr"].plans["1-year"].zohoPlanUrl="https://billing.example.test/edr";');
  apply('XCELLEDR10');
  element('payBtn').listeners.click();
  assert.equal(new URL(location.href).searchParams.get('coupon_code'), 'XCELLEDR10');
});
