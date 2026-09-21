const {
  chromium,
} = require('C:/Users/HannahEun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = __dirname;
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    acceptDownloads: true,
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('http://localhost:3000/verify');
  await page.locator('#org-code').waitFor();
  await page.screenshot({ path: path.join(root, 'verify-desktop.png') });
  await page.locator('#org-code').fill('ZZZZZZ');
  await page.waitForFunction(
    () => document.querySelector('#org-code-message')?.textContent.length > 0,
  );
  await page.screenshot({ path: path.join(root, 'verify-error.png') });
  await page.locator('#org-code').fill('GGCF26');
  await page.waitForURL('**/welcome');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('#faq').scrollIntoViewIfNeeded();
  await page.evaluate(async () => {
    await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
  });
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: path.join(root, 'welcome-desktop.png'), fullPage: true });
  const result = [];
  for (const width of [320, 360, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    const geometry = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      broken: [...document.images].filter((i) => i.complete && !i.naturalWidth).map((i) => i.src),
      h1: document.querySelectorAll('h1').length,
    }));
    result.push(geometry);
    assert(geometry.scroll <= width, JSON.stringify(geometry));
    assert.equal(geometry.h1, 1);
    assert.equal(geometry.broken.length, 0);
    if (width === 360)
      await page.screenshot({ path: path.join(root, 'welcome-mobile.png'), fullPage: true });
  }
  await page.setViewportSize({ width: 360, height: 900 });
  const downloadEvent = page.waitForEvent('download', { timeout: 30000 });
  await page.getByRole('button', { name: '계정 발급받기', exact: true }).click();
  const download = await downloadEvent;
  await download.saveAs(path.join(root, 'account.png'));
  const png = fs.readFileSync(path.join(root, 'account.png'));
  assert.equal(png.readUInt32BE(16), 960);
  await page.locator('#account').screenshot({ path: path.join(root, 'account-mobile.png') });
  assert.equal(await page.locator('body > div[aria-hidden="true"]').count(), 0);
  await page.locator('#faq summary').first().click();
  assert.equal(await page.locator('#faq details[open]').count(), 1);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(
    await page
      .locator('#faq summary span')
      .last()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
    '0s',
  );
  for (const width of [320, 360, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  }
  await page.setViewportSize({ width: 360, height: 900 });
  await page.evaluate(() => (document.documentElement.style.fontSize = '200%'));
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  assert.deepEqual(errors, []);
  fs.writeFileSync(
    path.join(root, 'checks.json'),
    JSON.stringify(
      { viewports: result, pngWidth: 960, errors, faq: true, reducedMotion: true, zoom200: true },
      null,
      2,
    ),
  );
  await browser.close();
  console.log('PASS: viewports, account PNG, FAQ, reduced motion, 200% text, no runtime errors');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
