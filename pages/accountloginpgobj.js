verifyresetpasswordsentemailtextCMD = {
    verifyresetpasswordsentemailtext : function(accountloginpgobj, browser) {
        browser.assert.urlContains('https://www.artsyjewels.com/account/login')
        browser.assert.title('Account – Artsyjewels')
        browser.saveScreenshot('./screenshots/successfulResetPwdEmailSentText.jpg')

        var acctloginpagesection = accountloginpgobj.section.acctloginpage;
        acctloginpagesection.waitForElementVisible('@myaccountheader', 1000)
        acctloginpagesection.assert.containsText('@myaccountheader', 'MY ACCOUNT')
        acctloginpagesection.waitForElementVisible('@emailsenttext', 1000)
        acctloginpagesection.assert.containsText('@emailsenttext', "We've sent you an email with a link to update your password.")

    }
}

module.exports = {
    url: function () {
        return this.api.launchUrl + '/account/login';
    },
    commands: [verifyresetpasswordsentemailtextCMD],
    sections: {
        acctloginpage: {
            selector: 'div#jas-content',
            elements: {
                myaccountheader:{
                    selector: 'h1.tu.mb__10.cw[itemprop="headline"]'
                },
                emailsenttext:{
                    selector: 'div.shopify-message.resetSuccess'
                }
              }
            }
        }
    };