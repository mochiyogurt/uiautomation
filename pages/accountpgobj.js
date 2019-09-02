var verifyLoggedInPageCMD = {
    verifyLoggedIn : function (acctpgobj, browser){
        browser.assert.urlContains('https://www.artsyjewels.com/account')
        browser.assert.title('Account – Artsyjewels')
        browser.saveScreenshot('./screenshots/successfulLogin.jpg')
        var acctpgleftmenusection = acctpgobj.section.acctpageleftmenu;
        acctpgleftmenusection.pause(7000)
        acctpgleftmenusection.waitForElementVisible('@dashboard', 1000)
        acctpgleftmenusection.expect.element('@dashboard').to.be.visible
        acctpgleftmenusection.waitForElementVisible('@logoutBtn', 1000)
        acctpgleftmenusection.expect.element('@logoutBtn').to.be.visible
        var acctpagenamesection = acctpgobj.section.acctpagename;
        acctpagenamesection.waitForElementVisible('@usernameLoggedIn', 1000)
        acctpagenamesection.expect.element('@usernameLoggedIn').to.be.visible
        browser.saveScreenshot('./screenshots/successfulLogin.jpg')
    }
};
module.exports = {
    url: function () {
        return this.api.launchUrl + '/account';
    },
    commands: [verifyLoggedInPageCMD],
    sections: {
        acctpageleftmenu: {
            selector: 'div.shopify>nav.shopify-MyAccount-navigation>ul',
            elements: {
                dashboard:{
                    selector: 'li.shopify-MyAccount-navigation-link.shopify-MyAccount-navigation-link--dashboard.is-active'
                },
                logoutBtn:{
                    selector: 'li.shopify-MyAccount-navigation-link.shopify-MyAccount-navigation-link--customer-logout'
                },
              }
            },
        acctpagename: {
            selector: './/div[@class="shopify"]',
            locateStrategy: 'xpath',
            elements: {
                usernameLoggedIn:{
                    selector: './/div[@class="shopify-MyAccount-content"]//following-sibling::strong[contains(text(),"Gigi Ant")][2]',
                    locateStrategy: 'xpath'
                }
            }
        }
    }
};
