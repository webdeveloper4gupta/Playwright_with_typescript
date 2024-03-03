// failed soft assertions donot terminate test execution, but marked the test as failed
import {test ,expect} from '@playwright/test';

test.describe('here i write test cases', () => {
    test('first test case', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        await page.locator('#menu-item-493').click();
        await page.locator('#evf-277-field_ys0GeZISRs-1').fill("sukritan gupta");
        await page.locator('#evf-277-field_LbH5NxasXM-2').fill("20051871@kiit.ac.in");
        await page.locator('#evf-277-field_66FR384cge-3').fill('9682669370');
        await page.locator('#evf-277-field_yhGx3FOwr2-4').fill("welcome to code world");
// here i write the soft assertions
await expect.soft(page.locator('#evf-277-field_yhGx3FOwr2-4')).toHaveText("Hello ")


        await page.locator('#evf-submit-277').click()

// here i check the error count too
// if error count greater than 0 , then it stop executing the next code 
   expect(test.info().errors.length).toBeLessThan(1);

        // here i verify succes message
        const successAlert=page.locator('div[role="alert"]');
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
    
    
})
