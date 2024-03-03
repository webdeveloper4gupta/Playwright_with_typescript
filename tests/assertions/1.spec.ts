import {test,expect }from '@playwright/test';

test.describe('here i write the test case', () => {
    test('first test case', async ({ page }) => {
        await page.goto('https://practice.automationbro.com');
        // positive assertion
        // toHaveTilte,to HaveUrl
        // negative assertion
        await expect(page).not.toHaveURL(/.*#get-started/);

        await page.locator('#get-started').click();


    })
    
    
})
