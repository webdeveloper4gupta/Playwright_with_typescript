import {test,expect} from '@playwright/test';
// Here I explain you the basic concept of writin playwright concept 

// test.describe is basically used as a group of the test cases
test.describe("first test case",()=>{
    test("home page title assert",async({page})=>{// page is just like a web drver 
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // verify the title
        // await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.')
    });

    test("about page title assert ",async({page})=>{
        await page.goto("https://practice.sdetunicorns.com/about/");
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })
})
