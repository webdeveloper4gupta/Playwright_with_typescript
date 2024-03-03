import {test,expect} from '@playwright/test';

test.describe('test cases', () => {
    test('first test-case', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');

        const searchIcon=await page.locator('//*[@id="zak-primary-menu"]//*[@class="tg-icon tg-icon-search"]')
        // const searchIcon=await page.locator('//div[@class="zak-header-actions zak-header-actions--desktop"]')
        ////div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']
        await expect(searchIcon).toBeVisible();
    })
    
})
