validatePriceCMD = {
    validatePrice : function(productdetailspgobj, browser){
        var pricesection = productdetailspgobj.section.pricesection;
        pricesection.waitForElementVisible('@price', 1000)
        pricesection.assert.containsText('@price', '$311.00–$2,935.00')
    }
};

addToCartCMD = {
    addToCart : function (productdetailspgobj, browser){
        var detailssection = productdetailspgobj.section.detailssection;
        detailssection.pause(2000)
        var cttwsdropdownselectortext = productdetailspgobj.section.detailssection.elements.cttwdropdown;
        detailssection.waitForElementVisible(cttwsdropdownselectortext, 1000)
        detailssection.click(cttwsdropdownselectortext)
        var cttws7selectortext = productdetailspgobj.section.detailssection.elements.cttw7;
        detailssection.click(cttws7selectortext);
        detailssection.pause(2000)

        var addtocartsection = productdetailspgobj.section.addtocartsection;
        addtocartsection.waitForElementVisible('@amtup', 1000)
        addtocartsection.click('@amtup')
        addtocartsection.pause(2000)
        addtocartsection.waitForElementVisible('@addtocart', 1000)
        addtocartsection.click('@addtocart')
        addtocartsection.pause(5000)
    }
}


module.exports = {
    url: function() {
        return this.api.launchUrl + '/collections/earrings/products/copy-of-beautiful-emerald-cut-solitaire-earrings-in-14kt-white-gold-0-33-cttw-to-1-50-cttw?variant=29175018913826';
    },
    commands: [validatePriceCMD, addToCartCMD],
    sections: {
        pricesection: {
            selector: 'div.price-stock.flex.between-xs.middle-xs.mt__15.pb__15.mb__20',
            elements: {
                price: {
                    selector: 'p.price'
                }
            }
        },
        detailssection: {
            selector: 'div.variations.variant_simple',
            elements: {
                cttwdropdown: {
                    selector: 'div.input-dropdown-inner.dib.input-dropdown-inner_pr>a[data-val="0-34"]'
                },
                cttw7: {
                    selector: 'ul[data-attribute="pa_cttw"]>li:nth-of-type(7)'
                }
            }
        },
        addtocartsection: {
            selector: 'div.shopify-variation-add-to-cart.variations_button.shopify-variation-add-to-cart-enabled',
            elements: {
                amtup: {
                    selector: 'div#shopify_quantity>div.tc.pa>a.plus.db.cb>i.fa.fa-angle-up'
                },
                amtdown: {
                    selector: 'div#shopify_quantity>div.tc.pa>a.plus.db.cb>i.fa.fa-angle-down'
                },
                addtocart: {
                    selector: 'shopify_add_to_cart',
                    locateStrategy: 'id'
                }
            }
        }
    }
}