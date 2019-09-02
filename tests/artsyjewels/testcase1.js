module.exports = {
    'tags': ['testcase1'],
    before : function (browser) {
        browser.resizeWindow(1680,1200);
      },
    'Open Homepage and click on headers': function(browser){
        browser
            .url('https://www.artsyjewels.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
    },
    'Browser quit': function (browser) {
        browser
          .end();
      }
}