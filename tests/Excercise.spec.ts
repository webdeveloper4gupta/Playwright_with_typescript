import {test,expect} from "@playwright/test";

test.describe("Exercise one",()=>{
      test("first test case ",async({page})=>{
                    await page.goto("https://practice.sdetunicorns.com/contact/");
                    await page.locator('//div[@id="evf-277"]//div[@id="evf-277-field_ys0GeZISRs-1-container"]//input').fill("Sukritan");
                    await page.locator(" input#evf-277-field_LbH5NxasXM-2").fill("20051@gmail.com");
                    await page.locator(" input#evf-277-field_66FR384cge-3").fill("9xxxxxxxxxx");
                    await page.locator("textarea#evf-277-field_yhGx3FOwr2-4").fill("welcome to code world");
                    await page.locator("button#evf-submit-277").click();
                    const successAlert=page.locator('div[role="alert"]');
                    await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
      })
    })