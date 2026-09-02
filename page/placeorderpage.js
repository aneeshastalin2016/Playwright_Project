const signoutpage = require('./signoutpage')
class placeorderpage {
    constructor(page) {
        this.page = page
        this.selectProductfield = page.locator('//a[text()="Samsung galaxy s6"]')
        this.selectphoneCategoryfield = page.locator('#itemc')
        this.addTocartbuttonfield = page.locator('.btn.btn-success.btn-lg')
        this.cartbuttonfield = page.locator('//a[text()="Cart"]')
        this.placeorderbuttonfield = page.locator('.btn.btn-success')
        this.enternamefield = page.locator('#name')
        this.entercountryfield = page.locator('#country')
        this.entercityfield = page.locator('#city')
        this.entercardfield = page.locator('#card')
        this.entermonthfield = page.locator('#month')
        this.enteryearfield = page.locator('#year')
        this.purchaseorderbuttonfield = page.locator('//button[@onclick="purchaseOrder()"]')
    }
    async selectProduct(product) {
        await this.page.locator('//a[text()="${product}"]').click()
        return this
    }

    async selectphoneCategory() {
        await this.selectphoneCategoryfield().click()
    }
    async addTocart() {
        await this.addTocartbuttonfield.click()
        return this
    }
    async clickCart() {
        await this.cartbuttonfield.click()
        return this
    }
    async clickplaceOrder() {
        await this.placeorderbuttonfield.click()
        return this

    }
    async enterDetails() {
        await this.enternamefield.fill('Aneesha')
        await this.entercountryfield.fill('Canada')
        await this.entercityfield.fill('Kamloops')
        await this.entercardfield.fill('1234 5678 5673 4555')
        await this.entermonthfield.fill('May')
        await this.enteryearfield.fill('2030')
        return this
    }
    async clickPurchase() {
        await this.purchaseorderbuttonfield.click()
        return new signoutpage(this.page)
    }

}
module.exports = placeorderpage