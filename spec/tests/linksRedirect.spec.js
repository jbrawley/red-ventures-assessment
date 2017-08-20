var LandingPage = require('../../spec/pageobjects/landing.page');
var SwitchTabHelper = require('../../spec/helpers/switchTabHelper');
var LandingPage = new LandingPage();

describe('Verify links redirect correctly in ', () => {

    var currentUrl;

    //console.log(LandingPage.businessPlansLink);

    xit('Should check that Business Plans link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickBusinessPlansLink();
        currentUrl = browser.getUrl();
  
        expect(currentUrl).toMatch(LandingPage.businessPlansPageUrl);
    });

    xit('Should check that Existing Customers link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickExistingCustomersLink();
        currentUrl = browser.getUrl();
  
        expect(currentUrl).toMatch(LandingPage.existingCustomersPageUrl);
    });
 
    it('Should check that My Account link redirects to correct page', function () {

        LandingPage.open();
        LandingPage.clickMyAccountLink();
        browser.switchToNewTab();
        currentUrl = browser.getUrl();
        console.log(currentUrl);
  
        expect(currentUrl).toMatch(LandingPage.myAccountPageUrlRegex.source);
    });
   

});

/*
 * Create a function for switching tabs that can be used in tests where clicking links opens new tabs.  
 * TODO: create a module for this helper method and import it
 */
browser.addCommand("switchToNewTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    // get the tab id of the currently focused window
    const currentTab = browser.getCurrentTabId();
    
    //switch to the new tab
    browser.switchTab(openTabs[1]);
});