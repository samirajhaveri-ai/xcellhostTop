const test = require('node:test');
const assert = require('node:assert/strict');
const { Readable } = require('node:stream');
const authProxy = require('./auth-dev-proxy.cjs');

async function request(action, body) {
  const req = Readable.from([Buffer.from(JSON.stringify(body))]);
  req.method = 'POST';
  req.url = `/api/auth.php?action=${action}`;
  const headers = {};
  let output = '';
  const res = {
    statusCode: 200,
    setHeader(name, value) { headers[name.toLowerCase()] = value; },
    end(value) { output += value || ''; },
  };
  await authProxy(req, res);
  return { status: res.statusCode, headers, body: JSON.parse(output) };
}

test('website signup credentials authenticate as a customer without returning a password hash', async () => {
  const email = `checkout-${Date.now()}-${Math.random().toString(16).slice(2)}@example.com`;
  const account = {
    email,
    password: 'SecurePass9',
    firstName: 'Tally',
    lastName: 'Customer',
    company: 'Example Pvt Ltd',
    mobile: '+919876543210',
    city: 'Mumbai',
  };
  const signup = await request('signup', account);
  assert.equal(signup.status, 201);

  const signin = await request('signin', { email, password: account.password, loginType: 'customer' });
  assert.equal(signin.status, 200);
  assert.equal(signin.body.customer.email, email);
  assert.equal(signin.body.customer.company, account.company);
  assert.equal('password' in signin.body.customer, false);
  assert.equal('passwordHash' in signin.body.customer, false);
});

test('rejects an incorrect password and blocks customer credentials from employee portals', async () => {
  const email = `roles-${Date.now()}-${Math.random().toString(16).slice(2)}@example.com`;
  const account = { email, password: 'SecurePass9', firstName: 'A', lastName: 'B', company: 'C', mobile: '+919876543210' };
  assert.equal((await request('signup', account)).status, 201);
  assert.equal((await request('signin', { email, password: 'WrongPass9', loginType: 'customer' })).status, 401);
  assert.equal((await request('signin', { email, password: account.password, loginType: 'employee' })).status, 403);
});
