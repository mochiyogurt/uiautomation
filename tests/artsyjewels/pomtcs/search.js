module.exports = {
    '@tags': ['homepagesearch'],
    'Test Homepage Search' : function (browser){
        var homepagepgobj = browser.page.homepagepgobj();

        homepagepgobj.navigate()
            browser.resizeWindow(1680,1200)
            .waitForElementVisible('body', 1000)
            .pause(5000)

        homepagepgobj.homepageSearch(homepagepgobj, browser);

        var searchresultspgobj = browser.page.searchresultspgobj();

        searchresultspgobj.verifySearchResults(searchresultspgobj, browser);

        browser.end();
    }
}