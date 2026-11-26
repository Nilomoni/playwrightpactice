import {test, expect} from '@playwright/test'

let page; //declare page as a global variable

//apply hooks here
    test.beforeAll(async ({ browser })=>{
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');

//login
     await page.locator('#login2').click();
     await page.locator('#loginusername').fill('pavanol');
     await page.locator('#loginpassword').fill('test@123');
     await page.locator("//button[normalize-space()='Log in']").click();
})

test.afterAll(async ()=>
{
    //Logout
     await page.locator('#logout2').click();

     // Close page and its context
    await page.close();

})

test ('Home Page Test', async ()=>
{

      //home page
     //Find total no of product
     const products = await page.$$('.hrefch');
     expect(products).toHaveLength(9);

});


test ('Add to Cart', async ()=>
{
    // First register the alert handler
     page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added.');
    await dialog.accept();

    //Then Add product to Cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator ("//a[normalize-space()='Add to cart']").click();

    })

})