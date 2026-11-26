const{test, expect}= require('@playwright/test')

//1
test.skip('Alert with Ok', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

     //dialog window handler

     //1st enable alert handling
     //enabling alert handling--this will automatically trigeer when a alert window is open
        page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
     })
        await page.click("//button[@id='alertBtn']");
  
    //pausing code
    await page.waitForTimeout(6000);
    

})

//2
test.skip('Confirmation Dialog with Ok and Cancel', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

     //dialog window handler

     //1st enable alert handling
     //enabling alert handling--this will automatically trigeer when a alert window is open
        page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm') //as it is a confirmation dialog
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //this will close by using ok button
        //await dialog.dismiss();//close by clicking Cancel button


     })
        await page.click("//button[@id='confirmBtn']");

        //some validation
        await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
  
    //pausing code
    await page.waitForTimeout(6000);
    

})

//3
test('Prompt Dialog', async ({page})=>
{
     await page.goto ('https://testautomationpractice.blogspot.com/');

     //dialog window handler

     //1st enable alert handling
     //enabling alert handling--this will automatically trigeer when a alert window is open
        page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt') //as it is a confirmation dialog
        expect(dialog.message()).toContain('Please enter your name:')

        //capture default value
        expect(dialog.defaultValue()).toContain('Harry Potter')

        //passing some custom value before close
         await dialog.accept('Nilomoni'); //this will put some custom value and close the popup
         
        //await dialog.dismiss();//close by clicking Cancel button


     })
        await page.click("//button[@id='promptBtn']");

        //some validation
        await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Nilomoni! How are you today?');
  
    //pausing code
    await page.waitForTimeout(6000);
    

})