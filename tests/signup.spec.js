const { test, expect } = require('@playwright/test')
const signuppage = require('../page/signuppage')
//const validdata = require('../testdata/logindata.json')
const { faker } = require('@faker-js/faker')

test.beforeEach(async ({ page }) => {
    await page.goto('https://demoblaze.com/')
}
)
//testcase 1
test('Sign up', async ({ page }) => {
    const signupobj = new signuppage(page)
    await signupobj.accessurl()
    await signupobj.clickSignup()
    const username = 'user' + Date.now()
    const password = 'pass' + Date.now()
    console.log(username, password)
    await signupobj.enterUsername(username)
    await signupobj.enterPassword(password)
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })

    await signupobj.clickSignupButton()
    //assertion
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoblaze.com/')


})

//await page.waitForTimeout(3000) --for giving time

//testcase 2
test.only('Sign up & close', async ({ page }) => {
    const signupobj1 = new signuppage(page)
    await signupobj1.accessurl()
    await signupobj1.clickSignup()
    //generate random data by faker class
    const username = faker.internet.username()
    const password = faker.internet.password({
        length: 10
    })

    console.log(username, password)

    await signupobj1.enterUsername(username)
    await signupobj1.enterPassword(password)
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
    await signupobj1.clickCloseButton()
    await page.waitForTimeout(3000)
    //assertion
    await expect(page).toHaveURL('https://demoblaze.com/')

})