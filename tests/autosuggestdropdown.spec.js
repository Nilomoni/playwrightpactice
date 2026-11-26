import { test, expect } from '@playwright/test';
test('autosuggestdropdown', async ({page})=>
{
  await page.goto('https://rpm-uat.empwr.life/login');
  await page.waitForTimeout(5000);  
  await page.getByRole('textbox', { name: 'Enter your username or email' }).click();
  await page.getByRole('textbox', { name: 'Enter your username or email' }).fill('nilomoni.bhattacherjee@empwr.life');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('radio', { name: 'wellnessconnection uat(TDEM)' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Manage Patients' }).click();
  await page.getByRole('button', { name: 'Add Patient add' }).click();

  //Type the name in the provider field
  await page.locator('#providerName').fill('Aditya');

//wait until the provoder value is displayed
await page.waitForSelector("//li[normalize-space()='Aditya Agarwal']",{state: 'visible'});

//click the provider name once it is displayed
await page.locator("//li[normalize-space()='Aditya Agarwal']").first().click();

//select vital from dropdown

// Dropdown panel locator
const vitalDropdown = page.locator('ul[tabindex="0"].dropdown-content:not(.z-50)');

//Select the vital
const vitalsToSelect = [
    'Weight',
    'Blood Pressure',
    'Carbs',
    'Sodium'
];

// Wait for dropdown panel
await vitalDropdown.waitFor({ state: 'visible' });

// Select multiple vitals
for (const vital of vitalsToSelect)
  {
    await vitalDropdown.getByText(vital, { exact: true }).click();
}


   await page.waitForTimeout(5000);

})