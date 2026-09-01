/**
 * The pages, in a browser, doing the thing they exist to do.
 *
 * Two failures this year were invisible to every other check: the case browser's stylesheet was
 * never linked, so it served unstyled markup, and a renderer was handed its data under the wrong
 * prop name, so a row silently disappeared. Both parse, validate and deploy without complaint.
 * These load each page against a local server and assert what a reader would notice — the record
 * renders its rows and policies, a source disclosure opens, the explorer filters and its case
 * chips navigate, the composition page draws its figures from the generated file.
 *
 *   node --test tests/site.smoke.mjs
 *
 * Needs Chromium via Playwright. Where there is none it skips rather than fails, so the checks a
 * contributor can run offline are not blocked by a browser download.
 */
import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const PORT = Number(process.env.SMOKE_PORT || 4321);
const BASE = `http://127.0.0.1:${PORT}`;
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };

let server = null;
let browser = null;
let unavailable = null;

/* A static server over the repository, which is what GitHub Pages serves. */
function serve() {
  return new Promise((resolve) => {
    server = createServer(async (req, res) => {
      try {
        let file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
        if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
        res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
        res.end(await readFile(file));
      } catch {
        res.writeHead(404).end('not found');
      }
    }).listen(PORT, '127.0.0.1', resolve);
  });
}

/* Fonts are the only third-party request these pages make; blocking it keeps the run offline. */
async function open(page, url) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.route('https://fonts.googleapis.com/**', (r) => r.abort());
  await page.goto(`${BASE}${url}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);
  return errors;
}

before(async () => {
  try {
    // PLAYWRIGHT_MODULE lets a checkout without its own install borrow one; CI installs it here.
    const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
    browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  } catch (error) {
    unavailable = error.message;
    console.log(`skipping site smoke tests: ${unavailable}`);
    return;
  }
  await serve();
});

after(async () => {
  if (browser) await browser.close();
  if (server) server.close();
});

const page = async () => browser.newPage({ viewport: { width: 1280, height: 1000 } });

describe('the case browser', () => {
  test('draws a case as a record, with its policies', async (t) => {
    if (unavailable) return t.skip('no browser');
    const p = await page();
    const errors = await open(p, '/cases/#M004');
    assert.deepEqual(errors, []);
    assert.equal(await p.locator('.record-row').count(), 4, 'the record lost a row');
    assert.ok(await p.locator('.rec-policy').count() >= 3, 'the policies did not render');
    await p.close();
  });

  test('is styled, not raw markup', async (t) => {
    if (unavailable) return t.skip('no browser');
    // cases.css went unlinked for months; every rule in it silently did nothing.
    const p = await page();
    await open(p, '/cases/#M004');
    const sheets = await p.evaluate(() => [...document.styleSheets].map((s) => s.href || '').join(' '));
    assert.match(sheets, /cases\.css/, 'the case browser stylesheet is not linked');
    const padded = await p.locator('.rec-policy').first().evaluate((el) => getComputedStyle(el).paddingLeft);
    assert.notEqual(padded, '0px', 'the record is rendering unstyled');
    await p.close();
  });

  test('opens the sources behind a policy', async (t) => {
    if (unavailable) return t.skip('no browser');
    const p = await page();
    await open(p, '/cases/#M004');
    const disclosure = p.locator('.rec-policy details.prov-srcs').first();
    await disclosure.locator('summary').click();
    await p.waitForTimeout(200);
    assert.match(await disclosure.innerText(), /source|Bench/i);
    await p.close();
  });

  test('pops the record out and back', async (t) => {
    if (unavailable) return t.skip('no browser');
    const p = await page();
    await open(p, '/cases/#M004');
    await p.locator('#pop-out').click();
    await p.waitForTimeout(200);
    assert.equal(await p.locator('.case-index').isVisible(), false);
    await p.locator('#pop-out').click();
    await p.waitForTimeout(200);
    assert.equal(await p.locator('.case-index').isVisible(), true);
    await p.close();
  });
});

describe('the source explorer', () => {
  test('lists the bibliography and filters it', async (t) => {
    if (unavailable) return t.skip('no browser');
    const p = await page();
    const errors = await open(p, '/cases/sources/explorer/');
    assert.deepEqual(errors, []);
    assert.ok(await p.locator('.src-row').count() > 0, 'no sources listed');
    const all = await p.locator('#count').innerText();
    await p.locator('label[for="f-shared"]').click();
    await p.waitForTimeout(200);
    assert.notEqual(await p.locator('#count').innerText(), all, 'the filter changed nothing');
    await p.close();
  });

  test('its case chips reach the case', async (t) => {
    if (unavailable) return t.skip('no browser');
    const p = await page();
    await open(p, '/cases/sources/explorer/');
    await p.locator('.case-chip').first().click();
    await p.waitForTimeout(1200);
    assert.match(p.url(), /\/cases\/#M\d{3}$/);
    assert.ok(await p.locator('.record-row').count() > 0, 'the case did not open');
    await p.close();
  });
});

describe('the composition page', () => {
  test('draws its figures from the generated file', async (t) => {
    if (unavailable) return t.skip('no browser');
    const composition = JSON.parse(await readFile(path.join(ROOT, 'resources/cases/composition.v1.json'), 'utf8'));
    const p = await page();
    const errors = await open(p, '/cases/sources/');
    assert.deepEqual(errors, []);
    assert.ok(await p.locator('.panel').count() >= 5, 'panels missing');
    assert.match(await p.locator('body').innerText(), new RegExp(composition.policies.toLocaleString('en-US')));
    await p.close();
  });
});
