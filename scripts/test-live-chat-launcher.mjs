import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/live-chat-launcher.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8');
const widgetUrl = html.match(/data-salesiq-src="([^"]+)"/)[1];

function setup() {
  const attributes = new Map();
  const listeners = {};
  const scripts = [];
  const timers = new Map();
  const calls = [];
  let nextTimer = 0;
  let onOpen, onClose;
  let opened = false;
  let previousReadyCalls = 0;
  const launcher = {
    hidden: true, disabled: false,
    setAttribute: (name, value) => attributes.set(name, value),
    removeAttribute: name => attributes.delete(name),
    addEventListener: (name, handler) => { listeners[name] = handler; },
  };
  const salesiq = {
    ready() { previousReadyCalls++; },
    floatbutton: { visible(value) { calls.push(['button', value]); } },
    floatwindow: {
      open(handler) { onOpen = handler; },
      close(handler) { onClose = handler; },
      visible(value) {
        calls.push(['window', value]);
        const wasOpen = opened;
        opened = value === 'show';
        if (opened) onOpen?.();
        else if (wasOpen) onClose?.();
      },
    },
  };
  const context = vm.createContext({
    window: { $zoho: { salesiq } },
    document: {
      currentScript: { getAttribute: () => widgetUrl },
      getElementById: id => id === 'liveChatLauncher' ? launcher : scripts.find(script => script.id === id),
      createElement: () => ({ remove() { scripts.splice(scripts.indexOf(this), 1); } }),
      body: { appendChild: script => scripts.push(script) },
    },
    setTimeout: callback => { timers.set(++nextTimer, callback); return nextTimer; },
    clearTimeout: id => timers.delete(id),
  });
  vm.runInContext(source, context);
  return {
    launcher, attributes, scripts, timers, calls, salesiq,
    click: () => listeners.click(),
    autoOpen() { opened = true; onOpen(); },
    close: () => salesiq.floatwindow.visible('hide'),
    isOpen: () => opened,
    previousReadyCalls: () => previousReadyCalls,
  };
}

test('page visits and refreshes expose only the button and never load or open SalesIQ', () => {
  assert.doesNotMatch(html, /\ssrc="https:\/\/salesiq\./);
  for (let visit = 0; visit < 2; visit++) {
    const chat = setup();
    assert.equal(chat.launcher.hidden, false);
    assert.equal(chat.attributes.get('aria-expanded'), 'false');
    assert.equal(chat.scripts.length, 0);
    assert.equal(chat.timers.size, 0);
    assert.deepEqual(chat.calls, []);
  }
});

test('first click loads the configured widget once and opens it when ready', () => {
  const chat = setup();
  chat.click();
  chat.click();
  assert.equal(chat.scripts.length, 1);
  assert.equal(chat.scripts[0].src, widgetUrl);
  assert.equal(chat.launcher.disabled, true);
  assert.equal(chat.attributes.get('aria-busy'), 'true');
  chat.salesiq.ready();
  assert.equal(chat.previousReadyCalls(), 1);
  assert.equal(chat.launcher.disabled, false);
  assert.equal(chat.timers.size, 0);
  assert.equal(chat.isOpen(), true);
  assert.equal(chat.attributes.get('aria-expanded'), 'true');
  assert.deepEqual(chat.calls, [['button', 'hide'], ['window', 'show']]);
});

test('closing chat prevents proactive reopening until another click', () => {
  const chat = setup();
  chat.click();
  chat.salesiq.ready();
  chat.close();
  chat.autoOpen();
  assert.equal(chat.isOpen(), false);
  assert.equal(chat.attributes.get('aria-expanded'), 'false');
  chat.click();
  assert.equal(chat.isOpen(), true);
  assert.equal(chat.scripts.length, 1);
  chat.click();
  assert.equal(chat.isOpen(), false);
});

test('a blocked or failed SDK download leaves the launcher retryable', () => {
  const chat = setup();
  chat.click();
  chat.scripts[0].onerror();
  assert.equal(chat.launcher.disabled, false);
  assert.equal(chat.scripts.length, 0);
  assert.equal(chat.timers.size, 0);
  assert.match(chat.launcher.title, /try again/);
  chat.click();
  assert.equal(chat.scripts.length, 1);
  chat.salesiq.ready();
  assert.equal(chat.isOpen(), true);
});

test('timed-out requests do not open chat if the SDK becomes ready later', () => {
  const chat = setup();
  chat.click();
  [...chat.timers.values()][0]();
  chat.salesiq.ready();
  assert.equal(chat.isOpen(), false);
  assert.equal(chat.attributes.get('aria-expanded'), 'false');
  chat.autoOpen();
  assert.equal(chat.isOpen(), false);
  chat.click();
  assert.equal(chat.isOpen(), true);
});
