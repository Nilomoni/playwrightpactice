import { test, expect } from '@playwright/test';
test('multiselectdropdown', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');


     //select multiple option from multi select dropdown

     //use select option and add all the value that need to be selected in aan array
     //await page.selectOption('#colors',['Red','Blue']);

     //some assertions on it

     //check total no of option in multiselect dropdown
     //const options = await page.locator('#colors option');
     //await expect.soft(options).toHaveCount(7);

     //check total no of option in multiselect dropdown using js array
     //const options = await page.$$('#colors option');
     //console.log("Total no of options: ",options.length);
     //await expect(options.length).toBe(7);

     //check presence of the value in the dropdown using js array
     const contents = await page.locator('#colors').textContent();
     await expect (contents.includes('Black')).toBeTruthy();




   await page.waitForTimeout(5000);

})