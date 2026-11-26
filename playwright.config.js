
 // @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['junit', {
      outputFile: 'test-results/junit.xml'
    }],
    ['json', {
      outputFile: 'test-results/results.json'
    }]
  ],

  // Global settings
  use: {
    trace: 'on-first-retry',
  },

  // Browser configurations
  projects: [

    // Google Chrome - Maximized
    {
      name: 'chromium',
      use: {
        channel: 'chrome',
        launchOptions: {
          args: ['--start-maximized'],
        },
        viewport: null,
      },
    },

    // Firefox - Default settings
    {
      name: 'firefox',
      use: {
        launchOptions: {
          args: ['--width=1920', '--height=1080'],
        },
        viewport: null,
      },
    },

    // WebKit - Default settings
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],
});
