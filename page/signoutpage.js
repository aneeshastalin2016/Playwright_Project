class signout {
    constructor(page) {
        this.page = page
        this.logoutButtonfield = page.locator('#logout2')
    }
    async clickLogout() {
        await this.logoutButtonfield.click()
        return this
    }
}

module.exports = signout