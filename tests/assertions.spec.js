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

})