
module.exports = {
    '@tags': ['login'],
    'Test Login' : function(browser){
     var loginpgobj = browser.page.loginpgobj();

     loginpgobj.navigate()
        browser.resizeWindow(1600,1200)
        .waitForElementVisible('body', 1000)
        .pause(5000)
    
    
    loginpgobj.clickLoginPageLink();
    loginpgobj.loginuser(loginpgobj, browser, 'xyz@gmail.com', 'abc123')

    var acctpgobj = browser.page.accountpgobj();
    acctpgobj.verifyLoggedIn(acctpgobj, browser);

    browser.end();

    }
};