var clickLoginPageLinkCMD = {
    clickLoginPageLink: function(){
        this.api.pause(3000);
        return this.waitForElementVisible('@loginPageLink', 1000)
        .click('@loginPageLink')
        .pause(5000)
    }
};
var loginuserCMD = {
    loginuser : function (loginpgobj, browser, username, password){
        var loginpagesection = loginpgobj.section.loginpage;
        loginpagesection.waitForElementVisible('@userlogin', 1000)
        loginpagesection.setValue('@userlogin', username, browser.Keys.Enter)
        loginpagesection.waitForElementVisible('@userpassword', 1000)
        loginpagesection.setValue('@userpassword', password, browser.Keys.Enter)
        loginpagesection.waitForElementVisible('@loginBtn', 1000)
        loginpagesection.click('@loginBtn')
        loginpagesection.pause(5000)
    }
};

var enterusernameCMD = {
    enterusername : function (loginpgobj, browser, username){
        var loginpagesection = loginpgobj.section.loginpage;
        loginpagesection.waitForElementVisible('@userlogin', 1000)
        loginpagesection.setValue('@userlogin', username, browser.Keys.Enter)
    }
};

var enterpasswordCMD = {
    enterpassword : function (loginpgobj, browser, password){
        var loginpagesection = loginpgobj.section.loginpage;
        loginpagesection.waitForElementVisible('@userpassword', 1000)
        loginpagesection.setValue('@userpassword', password, browser.Keys.Enter)
    }
};

var clickloginbtnCMD = {
    clickloginbtn : function (loginpgobj, browser){
        var loginpagesection = loginpgobj.section.loginpage;
        loginpagesection.waitForElementVisible('@loginBtn', 1000)
        loginpagesection.click('@loginBtn')
        loginpagesection.pause(5000)
    }
};

var forgotpwdCMD = {
    forgotpwd : function (loginpgobj, browser){
        var loginpagesection = loginpgobj.section.loginpage;
        loginpagesection.waitForElementVisible('@forgotpwd', 1000)
        loginpagesection.click('@forgotpwd')
        loginpagesection.pause(5000);
    }
}

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [clickLoginPageLinkCMD, loginuserCMD, enterusernameCMD , enterpasswordCMD, forgotpwdCMD],
    elements: {
        loginPageLink: {
            selector: 'div.jas-my-account.hidden-xs.ts__05.pr>a.cb.chp.db.jas-sp-login.login_side_open_none'
        }
    },
    sections: {
        loginpage: {
            selector: '#ntCustomerLoginFormSide',
            elements: {
                userlogin:{
                    selector: '#usernamelogin'
                },
                userpassword:{
                    selector: '#passwordlogin'
                },
                loginBtn:{
                    selector: '.shopify-Button.button'
                },
                forgotpwd:{
                    selector: 'p.shopify-LostPassword.lost_password>a'
                }
              }
            }
        }
    };


