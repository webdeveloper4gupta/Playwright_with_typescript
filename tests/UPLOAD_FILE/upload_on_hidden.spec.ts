import {test,expect} from '@playwright/test';
const path=require('path');

test.describe('here i write test cases', () => {
    test('first test case ', async ({ page }) => {
        await page.goto("https://practice.sdetunicorns.com/cart/");

        const filepath=path.join(__dirname,'../../data/Zafin Recruitment Drive - Online Test for 2024 Graduating Batch.pdf');
        //  here i do dom manipulation

        await page.evaluate(()=>{
            const selector=document.querySelector('input#upfile_1');
            if(selector){
                selector.className='';
            }
        });


        await page.setInputFiles('input#upfile_1',filepath);
        await page.locator('#upload_1').click();

       await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully')
    })
    
    
})
