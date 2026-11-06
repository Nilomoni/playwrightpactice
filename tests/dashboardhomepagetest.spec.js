// Playwright test runner and assertion library.
const{test, expect}= require('@playwright/test');
//importing module @playwright/test
//test, expect are 2 packages required to write playwright test

//need to create a block to execute functionality
//()=> anonymus function
//It is a function block
//need to pass page fixture with {}
//need to write async everytime when we mention page
//await will be written when we don any operation in the page
//page is locator here
test('Home Page', async ({page})=>
{
    await page.goto ('https://rpm-uat.empwr.life/login');
    const pagetitle = await page.title();
    console.log ('pagetitle is:',pagetitle);


    //apply validation or assertions
   await expect(page).toHaveTitle('Wellness Connection');

    //close page
   await page.close();

})
