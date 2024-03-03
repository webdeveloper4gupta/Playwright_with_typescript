import {test,expect} from '@playwright/test';
const path=require('path');

test.describe('here i write test cases', () => {
    test('first test case', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/cart/");

        const filepath=path.join(__dirname,'../../data/20051871_sukritangupta_q1_hrm_answer.pdf');

        await page.setInputFiles('input#upfile_1',filepath);
        await page.locator('#upload_1').click();
        // with using hardcoded sleep , we increased the amount of test execution
        //  hardcoded sleep
        await page.waitForTimeout(5000);

        
       await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully')

    })
    
    
})