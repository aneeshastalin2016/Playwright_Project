const placeorderpage = require('./placeorderpage')

class loginpage {
    constructor(page) {
        this.page = page
        this.loginfield = page.locator('#login2')
        this.loginusernamefield = page.locator('#loginusername')
        this.loginpasswordfield = page.locator('#loginpassword')
        this.loginbuttonfield = page.locator('//button[text()="Log in"]')
    }
    async accessurl() {
        await this.page.goto('https://demoblaze.com/')

    }
    async clickLogin() {
        await this.loginfield.click()
        return this
    }
    async enterLoginUsername(username) {
        await this.loginusernamefield.fill(username)
        return this

    }
    async enterLoginPassword(password) {
        await this.loginpasswordfield.fill(password)
        return this
    }
    async clickLoginButton() {
        await this.loginbuttonfield.click()
        return new placeorderpage(this.page)
    }
}
module.exports = loginpage