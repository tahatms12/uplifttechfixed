
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import 'chromedriver'; // This line is important for chromedriver to be found

describe('Site E2E Tests', () => {
  let driver: WebDriver;
  const appUrl = 'http://localhost:4173';

  beforeAll(async () => {
    // Start the preview server (assuming it's run in a separate process or handled by CI)
    // For local testing, you might need to run 'npm run preview' manually before running tests.
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().addArguments('--headless', '--disable-gpu', '--no-sandbox'))
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should have a registered service worker', async () => {
    await driver.get(appUrl);
    
    // Wait for the service worker to be active
    await driver.wait(async () => {
      const controller = await driver.executeScript('return navigator.serviceWorker.controller;');
      return controller !== null;
    }, 10000, 'Service Worker did not become active within 10 seconds');

    const serviceWorkerController = await driver.executeScript('return navigator.serviceWorker.controller;');
    expect(serviceWorkerController).not.toBeNull();
  });

  it('should serve sw.js with correct content type and status', async () => {
    await driver.get(appUrl);
    
    // Get the URL of the service worker script
    const swUrl = await driver.executeScript('return navigator.serviceWorker.controller.scriptURL;');
    expect(swUrl).toContain('/sw.js');

    // Fetch the service worker script directly to check its status and content type
    const response = await driver.executeScript(`
      return fetch('${swUrl}').then(res => ({
        status: res.status,
        contentType: res.headers.get('content-type')
      }));
    `);

    expect(response.status).toBe(200);
    expect(response.contentType).toContain('application/javascript');
  });

  // Placeholder for console error and CSP violation checks
  // These typically require more advanced browser logging or proxying.
  it('should not have console errors or CSP violations (placeholder)', async () => {
    // Implement logic to capture console logs and CSP violations here.
    // This might involve using browser-specific logging APIs or a proxy.
    // For example, in Chrome DevTools Protocol, you can listen to 'Log.entryAdded' and 'Security.securityStateChanged' events.
    console.warn('Console error and CSP violation checks are placeholders and need further implementation.');
  });
});
