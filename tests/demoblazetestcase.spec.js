const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoblaze.com/')
}
)
//testcase 1
test('Sign up', async ({ page }) => {
    await page.locator('#signin2').click()
    await page.pause()
    await page.locator('#sign-username').fill('aneeshastalin')
    await page.locator('#sign-password').fill('Kukku@3233')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[text()="Sign up"]').click()


})

//await page.waitForTimeout(3000) --for giving time

//testcase 2
test('Sign up & close', async ({ page }) => {
    await page.locator('#signin2').click()
    await page.pause()
    await page.locator('#sign-username').fill('aneeshastalin')
    await page.locator('#sign-password').fill('Kukku@3233')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.getByLabel('Sign up').getByText('Close').click();
    //await page.locator('//button[text()=')
    await expect(page).toHaveURL('https://demoblaze.com/')

})


//testcase 3
test('Login', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3233')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
})



//testcase4
test('Login with invalid username and valid password', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin3')
    await page.locator('#loginpassword').fill('Kukku@3233')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
    //await expect(page).toHaveURL('https://demoblaze.com/')
})


//testcase5
test('Login with valid username and invalid password', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3234')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        expect(dialog.message()).toBe('Wrong password.')

        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
    //await expect(page).toHaveURL('https://demoblaze.com/')
})


//testcase6
test('Login with invalid username and invalid password', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin45')
    await page.locator('#loginpassword').fill('Kukku@32345')
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        expect(dialog.message()).toBe('User does not exist.')

        await dialog.accept()
    })
    await page.locator('//button[text()="Log in"]').click()
    // await expect(page).toHaveURL('https://demoblaze.com/')
})


//testcase7
test('Login->Select product->Addto cart->Ok', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3233')
    await page.locator('//button[text()="Log in"]').click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    await page.locator('//a[text()="Samsung galaxy s6"]').click()
    await expect(page.locator('h2.name')).toHaveText('Samsung galaxy s6')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('.btn.btn-success.btn-lg').click()
})


//testcase 8
test('Login-> Select a product under Phones-> Add to Cart -> ok-> Add details -> Purchase', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3233')
    await page.locator('//button[text()="Log in"]').click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    await page.locator('#itemc').nth(0).click()
    await page.locator('//a[text()="Nokia lumia 1520"]').click()
    await expect(page.locator('h2.name')).toHaveText('Nokia lumia 1520')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('.btn.btn-success.btn-lg').click()
    await page.locator('//a[text()="Cart"]').click()
    await page.locator('.btn.btn-success').click()
    await page.locator('#name').fill('Aneesha')
    await page.locator('#country').fill('Canada')
    await page.locator('#city').fill('Kamloops')
    await page.locator('#card').fill('1234 5678 5673 4555')
    await page.locator('#month').fill('May')
    await page.locator('#year').fill('2030')
    await page.locator('//button[@onclick="purchaseOrder()"]').click()
})





//testcase 9
test('Login -> Select pdt under Monitors-> Add to Cart-> ok-> Add details -> Purchase', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3233')
    await page.locator('//button[text()="Log in"]').click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    await page.locator('#itemc').nth(1).click()
    await page.locator('//a[text()="Sony vaio i5"]').click()
    await expect(page.locator('h2.name')).toHaveText('Sony vaio i5')
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Product added.')
        console.log(dialog.message())
        await dialog.accept()
    })
    await page.locator('.btn.btn-success.btn-lg').click()
    await page.locator('//a[text()="Cart"]').click()
    await page.locator('.btn.btn-success').click()
    await page.locator('#name').fill('Aneesha')
    await page.locator('#country').fill('Canada')
    await page.locator('#city').fill('Kamloops')
    await page.locator('#card').fill('1234 5678 5673 4555')
    await page.locator('#month').fill('May')
    await page.locator('#year').fill('2030')
    await page.locator('//button[@onclick="purchaseOrder()"]').click()
    await expect(page.locator('//h2[text()="Thank you for your purchase!"]')).toHaveText('Thank you for your purchase!')
})



//testcase 10
test('Login & Logout', async ({ page }) => {
    await page.locator('#login2').click()
    await page.pause()
    await page.locator('#loginusername').fill('aneeshastalin')
    await page.locator('#loginpassword').fill('Kukku@3233')
    await page.locator('//button[text()="Log in"]').click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    await page.locator('#logout2').click()
    //await expect(page.locator('#nameofuser')).not.toBeVisible()
    await expect(page.locator('#signin2')).toBeVisible()
})
