const{test, expect}= require('@playwright/test')
test('handle inputbox', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

     await expect (await page.locator("//input[@id='name']")).toBeVisible();
     await expect (await page.locator("//input[@id='name']")).toBeEmpty();

     //input box is editable or not
     await expect (await page.locator("//input[@id='name']")).toBeEditable();

     //input box is enable or not
     await expect (await page.locator("//input[@id='name']")).toBeEnabled();

     await page.locator("//input[@id='name']").fill("Test");
     
     //pausing code
     await page.waitForTimeout(6000);

     
    

})