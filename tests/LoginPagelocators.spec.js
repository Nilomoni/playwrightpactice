const{test, expect}= require('@playwright/test');

test('Home Page', async ({page})=>
{
     await page.goto ('https://rpm-uat.empwr.life/login',{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    })
     const pagetitle = await page.title();
    console.log ('pagetitle is:',pagetitle);
    await page.locator('input[placeholder="Enter your username or email"]').fill('nilomoni.bhattacherjee@empwr.life');
    await page.locator('input[placeholder="Enter your password"]').fill('Test@1234');

    //click login button
    await page.locator('button.btn.btn-primary').click();

    await page.waitForTimeout(9000);

    //after login select the organization from the dropdown

    
    //store the locators value in a variable for it's length

   const orgname = page.locator ('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(185) > label:nth-child(1) > input:nth-child(2)');
   await orgname.check();

   //verify whether it's checked or not
   await expect (orgname).toBeChecked();

   //print the org name to confirm

   const selectedvalue = await orgname.inputValue();
   console.log("The selected org is:" , selectedvalue);

   await page.locator('.btn.btn-secondary.normal-case.px-5').click();

   //after login verify the empwr logo is visible
   // Verify Logo Visibility
const logo = page.locator('img[src="/logos/wellness.png"]');
await expect(logo).toBeVisible();
console.log('Logo is visible');
 await page.waitForTimeout(9000);








}
)