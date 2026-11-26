import { test, expect } from '@playwright/test';
test('Home Page', async ({page})=>
{
     await page.goto ('https://rpm-uat.empwr.life/login',{
        waitUntil: 'domcontentloaded',
        timeout: 60000

    })

    // expect(page).toHaveURL()   Page has URL
   await expect(page).toHaveURL('https://rpm-uat.empwr.life/login')
   
   //expect(page).toHaveTitle()   Page has title
  await expect(page).toHaveTitle('Wellness Connection');

  await page.waitForTimeout(9000);

   //expect(locator).toBeVisible()  Element is visible
  const logo = page.locator('img[src="/logos/wellness.png"]');
  await expect (logo).toBeVisible();

  //expect(locator).toBeEnabled()  Control is enabled
  const button = page.locator('button.btn.btn-primary');
  await expect(button).toBeDisabled();
  await page.locator('input[placeholder="Enter your username or email"]').fill('nilomoni.bhattacherjee@empwr.life');
  await page.locator('input[placeholder="Enter your password"]').fill('Test@1234');

  //5) expect(locator).toBeChecked()  Radio/Checkbox is checked
  const org = page.locator('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(185) > label:nth-child(1) > input:nth-child(2)');

  
  // Initial validation
await expect(org).not.toBeChecked();
await expect(button).toBeDisabled();

console.log("Continue button is disabled");

// Wait before selecting Org
await page.waitForTimeout(5000);

// Select Org
await org.click();
await expect(org).toBeChecked();

// Continue button validation
await expect(button).toBeEnabled();

console.log("Continue button is enabled");

// Click Continue
await button.click();

})
  
  

// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length
