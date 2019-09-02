module.exports = {
    tags: ['testcase3'],
    before : function (browser) {
        browser.resizeWindow(1680,1200);
    },
    'Login as existing user' : function (browser) {
        browser
            .url('http://www.artsyjewels.com')
            .waitForElementVisible('body', 5000)
            .waitForElementVisible('div.jas-my-account.hidden-xs.ts__05.pr>a.cb.chp.db.jas-sp-login.login_side_open_none[href="#login_side"]', 1000)
            .execute(selector => {
                document.querySelector(selector).click();
            }, ['div.jas-my-account.hidden-xs.ts__05.pr>a.cb.chp.db.jas-sp-login.login_side_open_none[href="#login_side"]'])
            .moveToElement('div.jas-my-account.hidden-xs.ts__05.pr>a.cb.chp.db.jas-sp-login.login_side_open_none[href="#login_side"]', 0, 0)
            .mouseButtonClick(0)
            .pause(1000)
            .setValue('#usernamelogin', ['xyz@gmail.com', browser.Keys.Enter])
            .setValue('#passwordlogin', ['abc123', browser.Keys.Enter])
            .click('.shopify-Button.button')
            .pause(5000)
            browser.useXpath().assert.elementPresent('.//a[@href="/account/logout"]//preceding-sibling::strong[contains(text(),"Gigi Ant")][1]')

    },
    'Browser quit': function(browser) {
        browser
            .end();
    }
}