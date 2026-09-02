const { test, expect } = require('@playwright/test')
const signoutpage = require('../page/signoutpage')
const validdata = require('../testdata/logindata.json')
const loginpage = require('../page/loginpage')


//testcase 10
test('Login & Logout', async ({ page }) => {

    const loginobj10 = new loginpage(page)
    await loginobj10.accessurl()
    await loginobj10.clickLogin()
    await loginobj10.enterLoginUsername(validdata.username)
    await loginobj10.enterLoginPassword(validdata.password)
    await loginobj10.clickLoginButton()

    // await expect(page.locator('#nameofuser')).toHaveText('Welcome aneeshastalin')
    const signoutobj = new signoutpage(page)
    await signoutobj.clickLogout()

    //await expect(page.locator('#nameofuser')).not.toBeVisible()
    await expect(page.locator('#signin2')).toBeVisible()
})

