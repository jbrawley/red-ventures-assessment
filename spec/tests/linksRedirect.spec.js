var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify links redirect correctly in ', () => {

    var currentUrl;

    //console.log(LandingPage.businessPlansLink);

    it('Should check that Business Plans link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickBusinessPlansLink();
        currentUrl = browser.getUrl();
  
        expect(currentUrl).toMatch(LandingPage.businessPlansPageUrl);
    });

    it('Should check that Existing Customers link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickExistingCustomersLink();
        currentUrl = browser.getUrl();
  
        expect(currentUrl).toMatch(LandingPage.existingCustomersPageUrl);
    });
 
    it('Should check that My Account link redirects to correct page', function () {
        LandingPage.open();
        
        //clicking this link will open new tab
        LandingPage.clickMyAccountLink();
        
        //switch to the new tab that was opened      
        browser.switchToNewTab();
        
        //get url of the new tab that was switched to       
        currentUrl = browser.getUrl();
     
        expect(currentUrl).toMatch(LandingPage.myAccountPageUrlRegex.source);
        
        //return to the original tab
        browser.returnToOriginalTab();
        
        //close the new tab that was created
        browser.closeNewTab();
       
       
    });

    it('Should check that Espanol link redirects to correct page', function () {
        LandingPage.open();
        
        //clicking this link will open new tab
        LandingPage.clickEspanolLink();
        
        //switch to the new tab that was opened
        browser.switchToNewTab();
        
        //get url of the new tab that was switched to 
        currentUrl = browser.getUrl();
       
  
        expect(currentUrl).toMatch(LandingPage.espanolPageUrl);
        
        //return to the original tab
        browser.returnToOriginalTab()
        
        //close the new tab that was created
        browser.closeNewTab();
        
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

browser.addCommand("closeNewTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    // get the tab id of the currently focused window
    const currentTab = browser.getCurrentTabId();
    
    //switch to the new tab
    browser.close(openTabs[1]);
});

browser.addCommand("returnToOriginalTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    // get the tab id of the currently focused window
    const currentTab = browser.getCurrentTabId();

    //switch to the new tab
    browser.switchTab(openTabs[0]);
});