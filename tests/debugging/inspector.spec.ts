import {test,expect} from '@playwright/test';
test.describe('css selector test case', () => {
    test('first test case', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        await expect(page).not.toHaveURL(/.*#get-started/);

        // click the button ,where id i have given
        await page.locator('#get-started').click();
          
// method 2 for opening the test case 
        // await page.pause();

        // now verify the url weather have get-started or not
        await expect(page).toHaveURL(/.*#get-started/);
    })
    
});

// method 1 of opening the inspector:
// command to use insepctor 
// PWDEBUG=1 npx playwright test filename
//npx playwright test filename --debug       (command to  use inspector)