import {test,expect} from '@playwright/test';
// Here I explain you the concept of using text with css slector 
//  it is used to solve te problem , when with same text more than one element present 
test.describe('test case', () => {
    test('Using the both css and text', async ({ page }) => {
        await page.goto("https://practice.automationbro.com");
        // const homeText=await page.locator('#zak-primary-menu  >> text=Home');// css seelctor
        const homeText=await page.locator('#zak-primary-menu:has-text("Home")');
        await expect(homeText).toBeEnabled();
    })
    
    
})
