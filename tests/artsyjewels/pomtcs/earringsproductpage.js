module.exports = {
    '@tags': ['earringsproductpg'],
    'Test Earrings Product Page': function(browser){
        var homepagepgobj = browser.page.homepagepgobj();

        homepagepgobj.navigate()
            browser.resizeWindow(1680, 1200)
            .waitForElementVisible('body', 1000)
            .pause(5000)

        homepagepgobj.selectearringsmenu(homepagepgobj, browser)
        homepagepgobj.selectfashionearrings(homepagepgobj, browser)

        var fashionearringspgobj = browser.page.fashionearringspgobj();

        fashionearringspgobj.verifyEarrings(fashionearringspgobj, browser)
        fashionearringspgobj.selectSecondProduct(fashionearringspgobj, browser)

        var productdetailspgobj = browser.page.productdetailspgobj();

        productdetailspgobj.validatePrice(productdetailspgobj, browser)
        productdetailspgobj.addToCart(productdetailspgobj, browser)


        browser.end();
    }
}