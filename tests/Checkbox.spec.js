const{test, expect}= require('@playwright/test')
test('handle checkboxes', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

     //handle single/specific checkbox
     await page.locator("//input[@id='sunday']").check();

     //assertion whether it is checked or not

     await expect(await page.locator("//input[@id='sunday']")).toBeChecked();

     //or
     await expect (await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();

     //assertions to check whther a checkbox is not selected and return false
    await expect (await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

    //when we need to select multiple check boxes with array
    const checkboxes=[
        "//input[@id='monday']",
        "//input[@id='sunday']",
        "//input[@id='saturday']"

    ]
    //enhanced for loop
    for(const locators of checkboxes)
    {
        await page.locator(locators).check();
    }

    //pausing code
     await page.waitForTimeout(6000);


//now check if the multiple checkboxes are selected or not. if it's selected uncheck/unselect those

for(const locators of checkboxes)
    {
        //if block, to check whether text boxes are already selected or not then only it'll uncheck those
        if(await page.locator(locators).isChecked()) 
         {
           await page.locator(locators).uncheck();
          }
        
    }

      
     
     //pausing code
     await page.waitForTimeout(6000);
  

})