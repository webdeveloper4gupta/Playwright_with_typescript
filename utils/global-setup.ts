import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config:FullConfig){
    // to give chromium access to browser
    const browser=await chromium.launch();
   const page=await browser.newPage();
    await page.goto('https://practice.sdetunicorns.com/my-account/');
    await page.context().storageState({path:'notloggedInState.json'});// to implement the not logged in space
    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('[value="Log in"]').click();

    // save signed-in state to loggedInState.json
// here I store the current state 
    await page.context().storageState({path:'loggedInState.json'});
    await browser.close();
}

export default globalSetup;