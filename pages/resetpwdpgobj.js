var resetpwdCMD = {
    resetpwd : function(resetpwdpgobj, browser, email){
        var resetpwdsection = resetpwdpgobj.section.resetpwd;
        resetpwdsection.waitForElementVisible('@email', 1000)
        resetpwdsection.sendKeys('@email', email)
        resetpwdsection.waitForElementVisible('@resetpassword', 1000)
        resetpwdsection.click('@resetpassword')
        resetpwdsection.pause(5000); 
    }
};

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [resetpwdCMD],
    sections: {
        resetpwd: {
            selector: 'div#recover_password_side',
            elements: {
                email:{
                    selector: 'RecoverEmailside',
                    locateStrategy: 'id'
                },
                resetpassword:{
                    selector: 'input.shopify-Button.button[value="Reset Password"]'
                },
                cancel:{
                    selector: 'button.shopfiy-Button.button.fr.w__100.mt__20.mb__10'
                }
              }
            }
        }
    };


