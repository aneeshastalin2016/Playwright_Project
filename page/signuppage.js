class signuppage {
    constructor(page) {
        this.page = page
        this.signupfield = page.locator('#signin2')
        this.usernamefield = page.locator('#sign-username')
        this.passwordfield = page.locator('#sign-password')
        this.signupbuttonfield = page.locator('//button[text()="Sign up"]')
        this.closeButtonField = page.getByLabel('Sign up').getByText('Close')
    }
    async accessurl() {
        await this.page.goto('https://demoblaze.com/')

    }
    async clickSignup() {
        await this.signupfield.click()
        return this
    }

    async enterUsername(username) {
        await this.usernamefield.fill(username)
        return this
    }
    async enterPassword(password) {
        await this.passwordfield.fill(password)
        return this
    }
    async clickSignupButton() {
        await this.signupbuttonfield.click()
        return this
    }

    async clickCloseButton() {
        await this.closeButtonField.click();
        return this
    }
}
module.exports = signuppage