const { test, expect } = require('@playwright/test')
const validdata = require('../testdata/logindata.json')
const loginpage = require('../page/loginpage')
const placeorderpage = require('../page/placeorderpage')


//testcase7
test('Login->Select product->Addto cart->Ok', async ({ page }) => {
    const loginobj7 = new loginpage(page)
    await loginobj7.accessurl()
    await loginobj7.clickLogin()
    await loginobj7.enterLoginUsername(validdata.username)
    await loginobj7.enterLoginPassword(validdata.password)
    const placeorder7 = await loginobj7.clickLoginButton()//navigation
    //assertion
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')

    await placeorder7.selectProduct('Samsung galaxy s6')

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.waitForTimeout(3000)

    await placeorder7.addTocart()

})


//testcase 8
test('Login-> Select a product under Phones-> Add to Cart -> ok-> Add details -> Purchase', async ({ page }) => {
    const loginobj8 = new loginpage(page)
    await loginobj8.accessurl()
    await loginobj8.clickLogin()
    await loginobj8.enterLoginUsername(validdata.username)
    await loginobj8.enterLoginPassword(validdata.password)
    const placeorder8 = await loginobj8.clickLoginButton()//navigation

    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')

    //await page.locator('#itemc').nth(0).click()
    //await page.locator('//a[text()="Nokia lumia 1520"]').click()
    await placeorder8.selectphoneCategory()
    await placeorder8.selectProduct('Nexus 6')

    //await expect(page.locator('h2.name')).toHaveText('Nokia lumia 1520')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })

    await placeorder8.addTocart()
    await placeorder8.clickCart()
    await placeorder8.clickplaceOrder()
    await placeorder8.enterDetails()
    await placeorder8.clickPurchase()

})





//testcase 9
test('Login -> Select pdt under Monitors-> Add to Cart-> ok-> Add details -> Purchase', async ({ page }) => {
    const loginobj9 = new loginpage(page)
    await loginobj9.accessurl()
    await loginobj9.clickLogin()
    await loginobj9.enterLoginUsername(validdata.username)
    await loginobj9.enterLoginPassword(validdata.password)
    const placeorder9 = await loginobj9.clickLoginButton()//navigation

    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    await placeorder9.selectMonitorCategory()
    //await page.locator('#itemc').nth(1).click()
    //await page.locator('//a[text()="Sony vaio i5"]').click()
    //await expect(page.locator('h2.name')).toHaveText('Sony vaio i5')
    await placeorder9.selectProduct('Sony vaio i5')

    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })

    await placeorder9.addTocart()
    await placeorder9.clickCart()
    await placeorder9.clickplaceOrder()
    await placeorder9.enterDetails()
    await placeorder9.clickPurchase()

    await expect(page.locator('//h2[text()="Thank you for your purchase!"]')).toHaveText('Thank you for your purchase!')
})

