import {test,expect,Page} from '@playwright/test';

// Here we create the shared pageContext
// Here i need to run in the series execution
// now test is not runing in parallel mode 
test.describe.serial('Here I write test cases', () => {
    // Here I make the single pagecontext that is in the serial wise
    let page:Page;
    test.beforeAll(async ({browser}) => {
        page=await browser.newPage();
        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('[value="Log in"]').click();
        // await expect(page.locator('a:has-text("Logout")')).toBeVisible();
    })
    

    test('first test case', async () => {
        // await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/)

    });

    test('second test case', async () => {
        // await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);
    })
    
    
})
