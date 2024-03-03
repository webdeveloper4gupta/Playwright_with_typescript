import {test,expect} from '@playwright/test';
import HomePage from './pageObjects/home.page';
import { beforeEach } from 'node:test';

// beforreEach hook run for all the test cases
// test.beforeEach(async ({ page }) => {
    
// });

// before hook 
// test.beforeAll(async ({ browser }) => {
// });

test('first test case', async ({ page }) => {
    let homePage:HomePage=new HomePage(page);
    // await page.goto("https://practice.automationbro.com/");
    await homePage.navigate();
    await homePage.getStartedBtn.click();
    
});

