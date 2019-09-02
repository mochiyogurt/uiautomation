validateProductCMD = {
    validateProduct: function(yourorderpgobj, browser){
        var yourordersection = yourorderpgobj.section.yourordersection;
        yourordersection.waitForElementVisible('@productname', 1000)
        yourordersection.assert.containsText('@productname', 'Beautiful Emerald Cut Solitaire Earrings in14kt White Gold')
    }
};

validatePriceCMD = {
    validatePrice: function(yourorderpgobj, browser){
        var yourordersection = yourorderpgobj.section.yourordersection;
        yourordersection.waitForElementVisible('@price', 1000)
        yourordersection.assert.containsText('@price', '$1,323.00')
    }
}

validateSubtotalCMD = {
    validateSubtotal: function(yourorderpgobj, browser){
        var yourordersection = yourorderpgobj.section.yourordersection;
        yourordersection.waitForElementVisible('@subtotal', 1000)
        yourordersection.assert.containsText('@subtotal', '$2,646.00')
    }
}

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    commands: [validateProductCMD, validatePriceCMD, validateSubtotalCMD],
    sections: {
        yourordersection: {
            selector: 'div#push_cart_items',
            elements: {
                productname: {
                    selector: 'div.cart__popup-title.grow>a'
                },
                price: {
                    selector: 'div.cart__popup-price>span.shopify-Price-amount.amount'
                },
                subtotal: {
                    selector: 'span#cart__popup_total'
                }
            }
        }
    }
}