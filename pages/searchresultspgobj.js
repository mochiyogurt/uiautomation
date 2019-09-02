var verifySearchResultsCMD = {
    verifySearchResults : function(searchresultspgobj, browser){
        browser.assert.urlContains('https://www.artsyjewels.com/search?q=watches&type=product')
        browser.assert.title('watches – Artsyjewels')
        browser.saveScreenshot('./screenshots/successfulSearch4Watches.jpg')
        
        var searchresultssection = searchresultspgobj.section.searchresults;
        searchresultssection.waitForElementVisible('@searchresultsheader', 1000)
        searchresultssection.assert.containsText('@searchresultsheader', 'WATCHES')
    }
}

module.exports = {
    url: function() {
        return this.api.launchUrl + '/search';
    },
    commands: [verifySearchResultsCMD],
    sections: {
        searchresults: {
            selector: 'div#jas-content',
            elements: {
                searchresultsheader: {
                    selector: 'h1.tu.mb__10.cw'
                }
            }
        }
    }
}