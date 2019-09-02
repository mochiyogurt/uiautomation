module.exports = {
    '@tags': ['gsearch'],
    before : function (browser) {
      browser.resizeWindow(1680,1200);
    },
'Search Google': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .pause(1000)
      .waitForElementVisible('input.gLFyf.gsfi', 30)
      .click('input.gLFyf.gsfi')
      .pause(40)
      .setValue('input.gLFyf.gsfi', ['nightwatchjs', browser.Keys.ENTER])
      .pause(1000)
      .waitForElementVisible("input.gLFyf.gsfi", 40)
      .assert.title("nightwatchjs - Google Search")
  },
  'Browser quit': function (browser) {
    browser
      .pause(1000)
      .end();
  }
};