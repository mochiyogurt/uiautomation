module.exports = {
    '@tags': ['resetpwd'],
    'Test Reset Password' : function(browser){
        var loginpgobj = browser.page.loginpgobj();

        loginpgobj.navigate()
           browser.resizeWindow(1680,1200)
           .waitForElementVisible('body', 1000)
           .pause(5000)
       
       loginpgobj.clickLoginPageLink();

       loginpgobj = browser.page.loginpgobj();
       loginpgobj.enterusername(loginpgobj, browser,'antgg01@gmail.com')
       loginpgobj.forgotpwd(loginpgobj, browser)

        var resetpwdpgobj = browser.page.resetpwdpgobj();
        resetpwdpgobj.resetpwd(resetpwdpgobj, browser, 'antgg01@gmail.com')

        var accountloginpgobj = browser.page.accountloginpgobj();
        accountloginpgobj.verifyresetpasswordsentemailtext(accountloginpgobj, browser)

        browser.end();
    }
}