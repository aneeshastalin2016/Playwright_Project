const { test, expect } = require('@playwright/test')
const validdata = require('../testdata/logindata.json')
const dataset = require('../testdata/invalidlogindata.json')
const loginpage = require('../page/loginpage')

//testcase 3
test('Login', async ({ page }) => {

    const loginobj = new loginpage(page)
    await loginobj.accessurl()
    await loginobj.clickLogin()
    await loginobj.enterLoginUsername(validdata.username)
    await loginobj.enterLoginPassword(validdata.password)
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        await page.pause()
        console.log(dialog.message())
        await dialog.accept()
    })
    const placeorder = await loginobj.clickLoginButton()//navigation
    await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
})



//testcase4

//test(`Login with invalid username and valid password ${data.username},${data.password}`, async ({ page }) => {
test(`Verify Login with Invalid Username and Valid Password ${dataset[0].username}, ${dataset[0].password}`, async ({ page }) => {
    const loginobj1 = new loginpage(page)
    await loginobj1.accessurl()
    await loginobj1.clickLogin()
    await loginobj1.enterLoginUsername(dataset[0].username)
    await loginobj1.enterLoginPassword(dataset[0].password)


    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        console.log(dialog.message())
        expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
    })

    await loginobj1.clickLoginButton()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoblaze.com/')
})



//testcase5
//test(`Login with valid username and invalid password ${data.username},${data.password}`, async ({ page }) => {
test(`Verify Login with valid Username and invalid Password ${dataset[1].username}, ${dataset[1].password}`, async ({ page }) => {
    const loginobj2 = new loginpage(page)
    await loginobj2.accessurl()
    await loginobj2.clickLogin()
    await loginobj2.enterLoginUsername(dataset[1].username)
    await loginobj2.enterLoginPassword(dataset[1].password)
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        console.log(dialog.message())
        expect(dialog.message()).toBe('Wrong password.')

        await dialog.accept()
    })
    await loginobj2.clickLoginButton()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoblaze.com/')
})


//testcase6
//test(`Login with invalid username and invalid password ${data.username},${data.password}`, async ({ page }) => {
test(`Verify Login with Invalid Username and inValid Password ${dataset[2].username}, ${dataset[2].password}`, async ({ page }) => {
    const loginobj3 = new loginpage(page)
    await loginobj3.accessurl()
    await loginobj3.clickLogin()
    await loginobj3.enterLoginUsername(dataset[2].username)
    await loginobj3.enterLoginPassword(dataset[2].password)
    page.on('dialog', async dialog => { //should be done before click option ,this is the pop up bo code ,to avoid synchronise issue.
        console.log(dialog.message())
        expect(dialog.message()).toBe('User does not exist.')

        await dialog.accept()
    })

    await loginobj3.clickLoginButton()
    await page.waitForTimeout(3000)

    await expect(page).toHaveURL('https://demoblaze.com/')
})
