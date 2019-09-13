verifyEarringsPageCMD = {
    verifyEarrings : function(fashionearringspgobj, browser){
        var headersection = fashionearringspgobj.section.header;
        fashionearringspgobj.waitForElementVisible('body', 1000)
        headersection.waitForElementVisible('@earringsheader', 1000)
        headersection.assert.containsText('@earringsheader', 'EARRINGS')

    }
};

selectSecondProductCMD = {
    selectSecondProduct : function(fashionearringspgobj, browser){
        //browser.execute('window.scrollTo(0,document.body.scrollHeight);'); //Scroll to bottom of page
        //browser.execute('window.scrollTo(0,Math.round(document.body.scrollHeight/7))'); //Scroll halfway
        //browser.pause(1000)
        var productssection = fashionearringspgobj.section.products;
        productssection.pause(5000)
        //if use xpath
        productssection.waitForElementVisible({selector: '@fashionearringsIMG2', index: 1}, 1000)
        var x;
        var y;
        var fashionearringsIMG2selectortext = fashionearringspgobj.section.products.elements.fashionearringsIMG2.selector;
        browser.useXpath().getLocation({selector: fashionearringsIMG2selectortext, index: 1}, function(result){
            x = Math.round(result.value.x);
            y = Math.round(result.value.y);
        });
        browser.useXpath().moveToElement({selector: fashionearringsIMG2selectortext, index: 1},x,y).mouseButtonClick(0)      
        browser.pause(5000);



         /*** //if use css
        var fashionearringsIMG2selectortext = fashionearringspgobj.section.products.elements.fashionearringsIMG2.selector;
        productssection.waitForElementVisible(fashionearringsIMG2selectortext, 1000)
        var x;
        var y;
        browser.getLocation(fashionearringsIMG2selectortext, function(result){
            x = Math.round(result.value.x);
            y = Math.round(result.value.y);
        });
        browser.moveToElement(fashionearringsIMG2selectortext,x,y).mouseButtonClick(0)      
        browser.pause(5000);
        ***/

    }
};

module.exports = {
    url: function() {
        return this.api.launchUrl + '/collections/earrings';
    },
    commands: [verifyEarringsPageCMD, selectSecondProductCMD],
    sections: {
        header: {
            selector: 'div.jas-container.pr',
            elements: {
                earringsheader: {
                    selector: 'h1.tu.mb__10.cw'
                }
            }
        },
        products: {
            //selector: 'div.jas-row',
            selector: './/div[@class="products jas-products-holder jas-row jas_pr_tc masonry jas_cover jas-masonry ratio1_1 position_8 equal-nt"]',
            locateStrategy: 'xpath',
            elements: {
                fashionearringsIMG2: {
                    //selector: 'div.jas-grid-item.jas-col-md-3.jas-col-sm-4.jas-col-xs-6.mt__30.product.has-post-thumbnail.user_custom:nth-of-type(2)>div>div.jas-product-image.pr.oh.jas-product-image-equal>a'
                      selector: './/div[@class="jas-grid-item jas-col-md-3 jas-col-sm-4 jas-col-xs-6 mt__30 product has-post-thumbnail user_custom"]/div/div[@class="jas-product-image pr oh jas-product-image-equal"]/a',
                      index: 1,
                      locateStrategy: 'xpath'
                }
            }
        }
    }
}