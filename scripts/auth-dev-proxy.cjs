const { randomBytes, scrypt, timingSafeEqual } = require('node:crypto');
const { readFile, writeFile } = require('node:fs/promises');
const { join } = require('node:path');
const { tmpdir } = require('node:os');
const { promisify } = require('node:util');

const deriveKey = promisify(scrypt);
const storePath = join(tmpdir(), 'xcellhost-auth-dev-users.json');

async function readUsers() {
  try { return JSON.parse(await readFile(storePath, 'utf8')); }
  catch { return {}; }
}

async function readBody(req) {
  const chunks = [];
  let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > 16384) throw Object.assign(new Error('The account request is too large.'), { status: 413 });
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('Invalid account request.'), { status: 400 }); }
}

async function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = await deriveKey(password, salt, 64);
  return `${salt.toString('hex')}:${hash.toString('hex')}`;
}

async function verifyPassword(password, stored) {
  const [saltHex, hashHex] = String(stored).split(':');
  if (!saltHex || !hashHex) return false;
  const expected = Buffer.from(hashHex, 'hex');
  const actual = await deriveKey(password, Buffer.from(saltHex, 'hex'), expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

module.exports = async function authDevProxy(req, res) {
  try {
    if (req.method !== 'POST') return send(res, 405, { message: 'Please submit the account form.' });
    const body = await readBody(req);
    const action = new URL(req.url, 'http://localhost').searchParams.get('action');
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { message: 'Enter a valid email address.' });
    const users = await readUsers();

    if (action === 'signup') {
      if (password.length < 8 || password.length > 128 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        return send(res, 400, { message: 'Use 8–128 characters with an uppercase letter and number.' });
      }
      if (users[email]) return send(res, 409, { message: 'An account already exists for this email. Please sign in.' });
      const customer = {
        email,
        firstName: String(body.firstName || '').trim(),
        lastName: String(body.lastName || '').trim(),
        company: String(body.company || '').trim(),
        mobile: String(body.mobile || '').trim(),
        city: String(body.city || '').trim(),
      };
      if (!customer.firstName || !customer.lastName || !customer.company || !customer.mobile) {
        return send(res, 400, { message: 'Complete all required account fields.' });
      }
      users[email] = { ...customer, passwordHash: await hashPassword(password), createdAt: new Date().toISOString() };
      await writeFile(storePath, JSON.stringify(users), { encoding: 'utf8', mode: 0o600 });
      return send(res, 201, { message: 'Account created.' });
    }

    if (action === 'signin') {
      const loginType = String(body.loginType || 'customer').trim().toLowerCase();
      if (loginType && loginType !== 'customer') {
        return send(res, 403, { message: 'Use your organisation’s assigned portal credentials for this login.' });
      }
      const user = users[email];
      if (!user || !(await verifyPassword(password, user.passwordHash))) {
        return send(res, 401, { message: 'Invalid email or password.' });
      }
      const { passwordHash: _passwordHash, ...customer } = user;
      return send(res, 200, { message: 'Signed in.', redirectUrl: '/', customer });
    }
    return send(res, 404, { message: 'Unknown authentication action.' });
  } catch (error) {
    send(res, error.status || 503, { message: error.message || 'Account service is temporarily unavailable.' });
  }
};
