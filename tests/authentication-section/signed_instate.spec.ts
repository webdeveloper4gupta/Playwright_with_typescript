import {test,expect,Page} from '@playwright/test';

// Here i need to run in the series execution
test.describe.serial('Here I write test cases', () => {
    // Here I make the single pagecontext that is in the serial wise

    test('first test case', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/my-account/');

        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);

    });

    test('second test case', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
    
    
})
// test.use({storageState:'notLoggedInState.json})