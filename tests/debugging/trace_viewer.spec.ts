import {test,expect} from '@playwright/test';
test.describe('css selector test case', () => {
    test('first test case', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        await expect(page).not.toHaveURL(/.*#get-started/);

        // click the button ,where id i have given
        await page.locator('#get-started').click();

        // now verify the url weather have get-started or not
        await expect(page).toHaveURL(/.*#get-started/);
    })
    
});
// command for trace viewer 
// to see what happenend step by step

// in the playwright config 
// change trace:'on' // to see the traces for all the test cases