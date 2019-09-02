module.exports = {
    tags: ['testcase2'],
    before : function (browser) {
        browser.resizeWindow(1680,1200);
      },
    'Go to the Search box and search for specific term' : function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .waitForElementVisible("form.search>input[name='q']", 60)
          .setValue("form.search>input[name='q']", ['watches', browser.Keys.ENTER])
          .pause(5000)
        browser.assert.title('watches – Artsyjewels')
        browser.assert.urlContains('https://www.artsyjewels.com/search?q=watches&type=product');
        browser.saveScreenshot('./screenshots/testcase2.jpg');
      },
      'Browser quit': function (browser) {
          browser
            .end();
        }
}