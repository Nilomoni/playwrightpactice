import {test, expect} from '@playwright/test'

//without hooks

test ('Home Page Test', async ({page})=>
{
    await page.goto('https://demoblaze.com/');

     //login

     await page.locator('#login2').click();
     await page.locator('#loginusername').fill('pavanol');
     await page.locator('#loginpassword').fill('test@123');
     await page.locator("//button[normalize-space()='Log in']").click();

     //home page

     //Find total no of product
     const products = await page.$$('.hrefch');
     expect(products).toHaveLength(9);

     //Logout
     await page.locator('#logout2').click();
    

})


test ('Add to Cart', async ({page})=>
{

    await page.goto('https://demoblaze.com/');

     //login
     await page.locator('#login2').click();
     await page.locator('#loginusername').fill('pavanol');
     await page.locator('#loginpassword').fill('test@123');
     await page.locator("//button[normalize-space()='Log in']").click();

    //Add product to Cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator ("//a[normalize-space()='Add to cart']").click();

    //validate the successfull alert window
    page.on('dialog', async dialog =>{

        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();

    })

    //Logout
     await page.locator('#logout2').click();

})