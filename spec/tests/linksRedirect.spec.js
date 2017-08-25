var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify links redirect correctly in ', () => {

    var currentUrl;

    //timeout used for test cases affected by elements loading incorrectly at first.
    var timeout = 1000 *10;

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
        LandingPage.clickMyAccountLinkAndSwitchTab();
        
        //get url of the new tab that was switched to       
        currentUrl = browser.getUrl();
     
        expect(currentUrl).toMatch(LandingPage.myAccountPageUrlRegex.source);
      
        //close the new tab that was created
        LandingPage.closeTheNewTab(); 
    });

    it('Should check that Espanol link redirects to correct page', function () {
        LandingPage.open();
        
        //clicking this link will open new tab
        LandingPage.clickEspanolLinkAndSwitchTab();
        
        //get url of the new tab that was switched to 
        currentUrl = browser.getUrl();
       
        expect(currentUrl).toMatch(LandingPage.espanolPageUrl);

        LandingPage.closeTheNewTab();   
    });

    it('Should check that All Plans menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickAllPlansLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.allPlansPageUrl);
    });

    it('Should check that Bundles menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickBundlesLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.bundlesPageUrl);
    });

    it('Should check that Frontier Fios Bundles menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFrontierFiosBundlesLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.frontierFiosBundlesPageUrl);
    });

    it('Should check that Frontier Secure menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFrontierSecureLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.frontierSecurePageUrl);
    });

    it('Should check that High Speed Internet menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHighSpeedInternetLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.highSpeedInternetPageUrl);
    });

    it('Should check that Fios Internet menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosInternetLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosInternetPageUrl);
    });

    it('Should check that Fios TV menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosTvLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosTvPageUrl);
    });

    it('Should check that Vantage TV menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickVantageTvLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.vantageTvPageUrl);
    });

    it('Should check that Phone menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickPhoneLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.phonePageUrl);
    });

    it('Should check that Availability menu link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickAvailabilityLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.availabilityPageUrl);
    });

    //This test randomly fails or passes.  Maybe an A/B test?  Instead of showing the Order Now link, a Shopping Cart is in it's place.
    //Test also fails sometimes when a shopping cart appears instead
   xit('Should check that Order Now menu link redirects to correct page', function () {
        LandingPage.open();
        //added, this element doesn't render correctly when page first loads
        browser.waitForVisible(LandingPage.orderNowLink);
        LandingPage.clickOrderNowLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.orderNowPageUrl);
    });

    it('Should check that High Speed Internet footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHighSpeedInternetFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.highSpeedInternetPageUrl);
    });

    it('Should check that Home Phone footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickHomePhoneFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.phonePageUrl);
    });

    it('Should check that Fios Services footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickFiosServicesFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.fiosInternetPageUrl);
    });

    it('Should check that Existing Customers footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickExistingCustomersFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.existingCustomersPageUrl);
    });

    it('Should check that My Account link in footer redirects to correct page', function () {
        LandingPage.open();
        
        //clicking this link will open new tab
        LandingPage.clickMyAccountFooterLinkAndSwitchTab();
        
        //get url of the new tab that was switched to       
        currentUrl = browser.getUrl();
     
        expect(currentUrl).toMatch(LandingPage.myAccountPageUrlRegex.source);
      
        //close the new tab that was created
        LandingPage.closeTheNewTab(); 
    });

    it('Should check that Plans and Pricing footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickPlansAndPricingFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.allPlansPageUrl);
    });

    it('Should check that View All Bundles footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickViewAllBundlesFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.bundlesPageUrl);
    });

    it('Should check that Resources footer link redirects to correct page', function () {
        LandingPage.open();

        //clicking this link will open new tab and switch focus
        LandingPage.clickResourcesFooterLinkAndSwitchTab();

        //get url of the new tab that was switched to
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.resourcesPageUrl);

        LandingPage.closeTheNewTab();
    });

    it('Should check that Espanol footer link redirects to correct page', function () {
        LandingPage.open();
        LandingPage.clickEspanolFooterLink();
        currentUrl = browser.getUrl();
        
        expect(currentUrl).toMatch(LandingPage.espanolPageUrl);
    });



});


