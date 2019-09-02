homepageSearchCMD = {
    homepageSearch: function(homepagepgobj, browser){
        var searchhomepagesection = homepagepgobj.section.searchhomepage;
        searchhomepagesection.waitForElementVisible('@homepagesearchbtn', 1000)
        searchhomepagesection.click('@homepagesearchbtn')
        searchhomepagesection.sendKeys('@homepagesearchbtn', 'watches')
        searchhomepagesection.waitForElementVisible('@homepagesearchsubmit', 1000)
        searchhomepagesection.click('@homepagesearchsubmit')
        searchhomepagesection.pause(5000)
    }
};

selectearringsmenuCMD = {
    selectearringsmenu: function(homepagepgobj, browser){
        var menusection = homepagepgobj.section.menu;
        menusection.waitForElementVisible('@gotoearringsmenu', 1000)
        var gotoearringsmenuselectortext = homepagepgobj.section.menu.elements.gotoearringsmenu.selector;
        var x;
        var y;
        browser.getLocation(gotoearringsmenuselectortext, function(result){
            var x = Math.round(result.value.x);
            var y = Math.round(result.value.y);
        });
        browser.moveToElement(gotoearringsmenuselectortext, x, y)
        browser.pause(1000)
    }
};

selectfashionearringsCMD = {
    selectfashionearrings: function(homepagepgobj, browser){
        var menusection = homepagepgobj.section.menu;
        menusection.waitForElementVisible('@fashionearrings', 1000)
        var fashionearringsselectortext = homepagepgobj.section.menu.elements.fashionearrings.selector;
        var x;
        var y;
        browser.getLocation(fashionearringsselectortext, function(result){
            x = Math.round(result.value.x);
            y = Math.round(result.value.y);
        });
        browser.moveToElement(fashionearringsselectortext,x,y).click(fashionearringsselectortext) //Works
        menusection.pause(5000)
    }
};

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    commands: [homepageSearchCMD, selectearringsmenuCMD, selectfashionearringsCMD],
    sections: {
        searchhomepage: {
            selector: 'form.search',
            elements: {
                homepagesearchbtn: {
                    selector: 'q',
                    locateStrategy: 'name'
                },
                homepagesearchsubmit: {
                    selector: 'input[value="Search"]'
                }
            }
        },
        menu: {
            selector: 'ul#jas-main-menu',
            elements: {
                gotoearringsmenu: {
                    selector: 'li.menu-item.menu-item-has-children.menu_has_offsets.menu-auto.menu-item-1553438256649>a'
                },
                diamondstudearrings: {
                    selector: 'li.menu-item.menu-item-has-children.sub-column-item>a[href="/collections/diamond-stud-earrings"]'
                },
                fashionearrings: {
                    selector: 'li.menu-item.menu-item-has-children.sub-column-item>a[href="/collections/earrings"]'
                }
            }
        }
    }
}