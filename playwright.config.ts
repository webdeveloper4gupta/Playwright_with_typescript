import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // directory where the test cases stored
  testDir: './tests',

  // max time one test can run for
  timeout:30*1000,  //30sec

// it means that expect asseration wait for the this much ms
// before the timeout , if assertion fail then it run again again, after timeout it throw error
  expect:{
          timeout:5000
  },




// run test case in parallel manner
// workers are provided randomly by the playwright , we can control the workers 
  fullyParallel: true,



  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,


  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,


  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,


  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',


  // for signal
  // here I regisster the global file 
  globalSetup: require.resolve('./utils/global-setup'),

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */

    // max time each action such as click can take
    actionTimeout:0,// here 0 means each action have no time limit for the test execution

    // baseUrl ---> means making the url globally 
    // baseURL: 'http://127.0.0.1:3000',



// Here i explain you the  concept of the trace debugging in the playwright


    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // by default ---> on-first-retry
    trace: 'on', //here i on trace for all the test case

// Here I store the sign state 
  storageState:'loggedInState.json'




  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],headless:false },
      
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
