import {test,expect} from '@playwright/test';
const path=require('path');
test.describe('here i write test cases', () => {
    const fileName=['my-img.jpeg','Zafin Recruitment Drive - Online Test for 2024 Graduating Batch.pdf']
    for(const name of fileName){
        
        test(`upload the file ${name}`, async ({ page }) => {
            await page.goto("https://practice.sdetunicorns.com/cart/");
    
            const filepath=path.join(__dirname,`../../data/${name}`);//_dirname -> is current file Name 
    // here I upload the file 
            await page.setInputFiles('input#upfile_1',filepath);
            await page.locator('#upload_1').click();
    
           await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully')
    
        })
    }
    
    
    
})
