const {
  chromium,
} = require('C:/Users/HannahEun/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert = require('node:assert/strict');
(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  await p.goto('http://localhost:3000/verify');
  await p.locator('#org-code').fill('ERR500');
  await p.waitForFunction(() => document.querySelector('#org-code-message').textContent.length > 0);
  await p.locator('#org-code').focus();
  assert.notEqual(
    await p.locator('#org-code').evaluate((e) => getComputedStyle(e).outlineStyle),
    'none',
  );
  await p.locator('#org-code').fill('GGCF26');
  await p.waitForURL('**/welcome');
  await p.evaluate(() => document.fonts.ready);
  const d = p.waitForEvent('download');
  await p.getByRole('button', { name: '계정 발급받기', exact: true }).click();
  await d;
  const save = p.getByRole('button', { name: '이미지로 저장', exact: true });
  await save.focus();
  assert.equal(await save.locator('..').evaluate((e) => getComputedStyle(e).opacity), '1');
  await p
    .locator('[data-credential-qr]')
    .first()
    .evaluate((e) => (e.src = '/qr/missing-test.png'));
  await save.click();
  await p.waitForFunction(() => document.querySelector('#account .text-danger'));
  assert.equal(await p.locator('[data-credential-qr-grid]').count(), 1);
  assert.equal(await p.locator('body > div[aria-hidden="true"]').count(), 0);
  await p
    .locator('[data-credential-qr]')
    .first()
    .evaluate((e) => (e.src = '/qr/qr-ios.png'));
  const retry = p.waitForEvent('download');
  await save.click();
  await retry;
  assert.equal(await p.locator('#account .text-danger').count(), 0);
  await p.setViewportSize({ width: 320, height: 900 });
  await p
    .locator('#account dd')
    .first()
    .evaluate((e) => (e.textContent = 'LONGACCOUNT'.repeat(12)));
  assert(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await b.close();
  console.log(
    'PASS: network error, keyboard focus, PNG failure cleanup/retry, long value wrapping',
  );
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
