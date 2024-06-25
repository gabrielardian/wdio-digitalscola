

describe('Suacedemo Test', () => {
    it('Sucsesfully Login', async () => {
        await browser.url('https://www.saucedemo.com/')

        //ELEMENT DEFINIOTION
        const usernameTextbox =  await browser.$("#user-name")
        const passwordTextbox =  await browser.$("#password")    
        const loginBotton =  await browser.$('//input[@value="Login"]')
        const cartIcon = await browser.$("#shopping_cart_container")
        const addBackpack = await browser.$("#add-to-cart-sauce-labs-backpack")
        const coontainer= await browser.$("#shopping_cart_container")
        const removeBag = await browser.$("#remove-sauce-labs-backpack")



        //LOGIN PAGE
        await usernameTextbox.waitForDisplayed({ timeout:3000 })
        await usernameTextbox.setValue("standard_user")
        await passwordTextbox.setValue("secret_sauce")
        console.log(await loginBotton.getValue())
        await loginBotton.click()
        
        //DASHBOARD PAGE
        await expect(cartIcon).toBeDisplayed()
        await browser.pause(2000)
       
        // ADD TO CHART
        await addBackpack.click()
        await coontainer.click()
        await expect(removeBag).toBeDisplayed()
        await browser.pause(8000)
      
    });

    // it('ADD TO CART', async() => {
    //     const addBackpack = await browser.$("#add-to-cart-sauce-labs-backpack")
    //     const coontainer= await browser.$("#shopping_cart_container")
    //     const removeBag = await browser.$("#remove-sauce-labs-backpack")
        
    //     await addBackpack.click()
    //     await coontainer.click()


    //     await expect(removeBag).toBeDisplayed()
    //     await browser.pause(8000)
    // });
    
});