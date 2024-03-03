// first I will submit the form
// second I will assert the recent post is 5 or not 
// and then I assert weather title length is greater ten 5 or not 

import {test,expect} from '@playwright/test';

test.describe('test case', () => {
    test('first test case', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        await page.locator('#menu-item-493').click();
        await page.locator('#evf-277-field_ys0GeZISRs-1').fill("sukritan gupta");
        await page.locator('#evf-277-field_LbH5NxasXM-2').fill("20051871@kiit.ac.in");
        await page.locator('#evf-277-field_66FR384cge-3').fill('9682669370');
        await page.locator('#evf-277-field_yhGx3FOwr2-4').fill("welcome to code world");
        await page.locator('#evf-submit-277').click()

        // here i verify succes message
        const successAlert=page.locator('div[role="alert"]');
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
    
    test('second test case',async({page})=>{
        await page.goto('https://practice.automationbro.com/blog');
        // get the recent post list element
        const recentPostList=page.locator('#recent-posts-3 ul li');
        
        for(const el of await recentPostList.elementHandles()){
            expect( ((await el.textContent())?.trim())?.length).toBeGreaterThan(10);
            // console.log((await el.textContent())?.length);
        }

        expect(await recentPostList.count()).toEqual(5);
    })
})
