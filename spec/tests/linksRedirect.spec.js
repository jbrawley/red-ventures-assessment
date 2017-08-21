var LandingPage = require('../../spec/pageobjects/landing.page');
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
 
    xit('Should check that My Account link redirects to correct page', function () {
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

    xit('Should check that Espanol link redirects to correct page', function () {
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

    xit('Should check that All Plans menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickAllPlansLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.allPlansPageUrl);
    });

    xit('Should check that Bundles menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickBundlesLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.bundlesPageUrl);
    });

    xit('Should check that Frontier Fios Bundles menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFrontierFiosBundlesLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.frontierFiosBundlesPageUrl);
    });

    xit('Should check that Frontier Secure menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFrontierSecureLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.frontierSecurePageUrl);
    });

    xit('Should check that High Speed Internet menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHighSpeedInternetLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.highSpeedInternetPageUrl);
    });

    xit('Should check that Fios Internet menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosInternetLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosInternetPageUrl);
    });

    xit('Should check that Fios TV menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosTvLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosTvPageUrl);
    });

    xit('Should check that Vantage TV menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickVantageTvLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.vantageTvPageUrl);
    });

    xit('Should check that Phone menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickPhoneLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.phonePageUrl);
    });

    xit('Should check that Availability menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickAvailabilityLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.availabilityPageUrl);
    });

    //This test randomly fails.  Instead of showing the Order Now link, a Shopping Cart is in it's place.
    xit('Should check that Order Now menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickOrderNowLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.orderNowPageUrl);
    });

    xit('Should check that High Speed Internet footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHighSpeedInternetFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.highSpeedInternetPageUrl);
    });

    xit('Should check that Home Phone footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHomePhoneFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.phonePageUrl);
    });

    xit('Should check that Fios Services footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosServicesFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosInternetPageUrl);
    });

    xit('Should check that Existing Customers footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickExistingCustomersFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.existingCustomersPageUrl);
    });

    xit('Should check that My Account link in footer redirects to correct page', function () {
        LandingPage.open();
        
        //clicking this link will open new tab
        LandingPage.clickMyAccountFooterLink();
        
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

    xit('Should check that Plans and Pricing footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickPlansAndPricingFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.allPlansPageUrl);
    });

    xit('Should check that View All Bundles footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickViewAllBundlesFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.bundlesPageUrl);
    });

    it('Should check that Resources footer link redirects to correct page', function () {
        LandingPage.open();

        //clicking this link will open new tab
        LandingPage.clickResourcesFooterLink();

        //switch to the new tab that was opened      
        browser.switchToNewTab();
        
        //get url of the new tab that was switched to
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.resourcesPageUrl);

        //return to the original tab
        browser.returnToOriginalTab();
        
        //close the new tab that was created
        browser.closeNewTab(); 
    });

});


/*
 * Create functions for navigating and closings tabs opened, that can be used in tests where clicking links opens new tabs.  
 * TODO: create a module for this helper method and import it
 */

//function to switch browser tabs
browser.addCommand("switchToNewTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    //switch to the new tab
    browser.switchTab(openTabs[1]);
});

//function to close a tab that was just opened.
browser.addCommand("closeNewTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();
    
    //switch to the new tab
    browser.close(openTabs[1]);
});

//function to return to the originating tab
browser.addCommand("returnToOriginalTab", function () {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    //switch to the new tab
    browser.switchTab(openTabs[0]);
});