import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 5 : 1,
  reporter: [
    ['html'],
    ['junit', { outputFile: '../playwright-report/xunit.xml' }],
    ['json', { outputFile: '../playwright-report/report.json' }],
  ],
  use: {
    viewport: { width: 1366, height: 1500 },
    ignoreHTTPSErrors: true,
    headless: true,
    locale: 'ru-RU',
    trace: 'retain-on-failure',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'e2e-desktop',
      testDir: '../tests/functional',
      timeout: 120 * 1000,
      expect: {
        timeout: 7 * 1000,
      },
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};
export default config;
