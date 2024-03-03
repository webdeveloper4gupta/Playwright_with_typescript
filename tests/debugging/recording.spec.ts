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

//command to generate codegen

// you can also do the code gen by the inspector

// npx playwright codegen filename.extension