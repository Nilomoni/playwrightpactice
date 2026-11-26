const{test, expect}= require('@playwright/test')
test('handle checkboxes', async ({page})=>
{
 await page.goto('https://rpm-uat.empwr.life/login');
 await page.waitForTimeout(5000);  
  await page.getByRole('textbox', { name: 'Enter your username or email' }).click();
  await page.getByRole('textbox', { name: 'Enter your username or email' }).fill('nilomoni.bhattacherjee@empwr.life');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('radio', { name: 'wellnessconnection uat(TDEM)' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();


  
//store the dropdown value in a variable and then call it while every program selection
const selectprog = await page.locator(".select.select-bordered.min-w-24.select-secondary.text-secondary.rounded-tl-none.rounded-bl-none");

//add assertion
await expect(selectprog).toBeVisible();

//1. Select AT from dropdown

//select option from dropdown with selectOption() with //label/visible text
//await selectprog.selectOption({label:'AT'});

//assertion
//await expect(selectprog).toHaveValue('AT');

//2. Select RTM from Dropdown

//select option from dropdown with selectOption(visible text)
//await selectprog.selectOption("RTM");


//select option from dropdown with selectOption(Index value.. counting start from 0,1,2...)
//3. Select BHI from Dropdown

//await selectprog.selectOption({index:6});

//assertions which can apply in the dropdown

//1. no of options in dropdown
//capture all the option in the dropddwon in a variable and return all elememnt in the dropdown
const opt = selectprog.locator('option');
//Count assertion
await expect(opt).toHaveCount(8);

// Print all dropdown options
const allOptions = await opt.allTextContents();
//console.log("Dropdown Options:", allOptions); //It will print the options

//Count the options
console.log("Dropdown Options:", allOptions.length);//length is a property here, not a function
 
})