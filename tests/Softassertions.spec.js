const{test, expect}= require('@playwright/test')
test('Soft assertions', async ({page})=>
{
     await page.goto ('https://demoblaze.com/');

     //hard assertions
     //await expect(page).toHaveTitle('STORE');
     //await expect(page).toHaveURL('https://demoblaze.com/');

      //Soft assertions
     await expect.soft(page).toHaveTitle('STORE123');
     await expect.soft(page).toHaveURL('https://demoblaze.com/');

     

})