import {test,expect} from '@playwright/test';
test.describe('css selector test case', () => {
    test('first test case', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");
        // click the button ,where id i have given
        await page.locator('#get-started').click();

        // now verify the url weather have get-started or not
        await expect(page).toHaveURL(/.*#get-started/);// here I add the regex expression
    })
    
})
