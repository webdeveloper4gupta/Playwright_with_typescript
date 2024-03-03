import {test,expect}from '@playwright/test';

test.describe('test cases', () => {
    test('first test case', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        // here i tell it starts with menu by using star asterisk
        // const navLinks=page.locator('#zak-primary-menu li[id*=menu]');
        //    nth-element locator concept
        // .first();
        // .last();



        // Here I explain you the concept of finding the particular element from the multiple matching element
        const navLinks=page.locator('#zak-primary-menu li[id*=menu]').nth(3);// here *= means it should start with menu
        const expectedLinks=[
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]
// way of traversing the  list 
    //    expect(  await navLinks.allTextContents()).toEqual(expectedLinks);

expect(  await navLinks.textContent()).toEqual(expectedLinks[3]);
    

    })

    test.only("second test case",async({page})=>{
        await page.goto('https://practice.automationbro.com/');
        const navLinks=page.locator('#zak-primary-menu li[id*=menu]');
//  loop through each element , when multiple element found 
        for(const el of await navLinks.elementHandles()){// elementHandles it resove with the dom element 
                console.log( await el.textContent());
        }
    })
    
    
})
