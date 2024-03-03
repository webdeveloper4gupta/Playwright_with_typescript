import {test,expect} from '@playwright/test'

test.describe('text selector concept', () => {
    test('first test case', async ({ page }) => {
        // case insensitive test
        await page.goto('https://practice.automationbro.com');

        // Here I explain you how you can search by using text   
        // It will check the caseinsesitive and substring.  
      const headingText=   page.locator('text=Think different. Make different.'); // text should be unique , else it cause ambigity 


    //   to make case sensitive  --> 
    // const headingText=   page.locator('text="Think different. Make different."');

      await expect(headingText).toBeVisible();// check the test is present in the screen or not 
    })
    
})
