const{test, expect}= require('@playwright/test')
test('handle radio buttons', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

      //select radio button
     // await page.locator("//input[@id='male']").check();

      //or
      await page.check("//input[@id='male']");

      //verify whether it is checked or not or assertions
      await expect (await page.locator("//input[@id='male']")).toBeChecked();

      //or
      //if it is return true then need to compare with tobeTruthy assertions
      await expect (await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

      //with female checkbox
      //if it is return false or not selected then need to compare with tobeFalsy assertions
      await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

     
     //pausing code
     await page.waitForTimeout(6000);
  

})