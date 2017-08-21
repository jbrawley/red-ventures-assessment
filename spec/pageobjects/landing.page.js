/*
 * Page object for landing page using ES6 class
 */
"use strict";

//inherit from Page class
var Page = require('./page');


class LandingPage extends Page {
    
    //1366 images and graphics
    get mastheadLogo()                          { return browser.element('.small-12.columns>.masthead__logo'); }
    get phoneIconInMastheadBanner()             { return browser.element('body > header > div.show-for-large-up > section > div > div.small-4.columns.is-align-right > div'); }
    get phoneIconInRegionBanner()               { return browser.element('body > main > section.banner.banner--countdown.has-bg-primary > div > div.large-4.columns > div > div'); }
    get phoneIconInMasfootBanner()              { return browser.element('body > section > div > div.small-12.medium-6.columns.medium-text-left > div > div'); }
    get priceTagIcon()                          { return browser.element('body > main > section.banner.banner--address > div:nth-child(1) > div > h3 ::before'); }
    get heroImage()                             { return browser.element('body > main > section.hero-wordpress > div > div.small-5.columns.show-for-large-up > div'); }
    get firstImageRightColumn()                 { return browser.element('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-1.png'); }
    get secondImageLeftColumn()                 { return browser.element('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-2.png'); }
    get thirdImageRightColumn()                 { return browser.element('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-3.png'); }
    get footerLogo()                            { return browser.element('img[src*="/assets/seo-b/images/logos/logo-ftr-black.png'); }

   //1024 images and graphics
    get smallYellowPhoneIconInStickyBanner()     { return browser.element('body > header > div.hide-for-large-up > nav > div.row.small-collapse > div > div > a > span.masthead__phone-icon.icon-phone'); }
    get topYellowPhoneIcon()                     { return browser.element('body > main > section:nth-child(2) > div > div > div > svg'); }
    get bottomYellowPhoneIcon()                  { return browser.element('body > main > section:nth-child(13) > div > div > div > svg'); }
    
    //640 images and graphics
    get mobileMenu()                             { return browser.element('body > header > div.hide-for-large-up > nav > div.row.has-bg-white > div > ul > li.toggle-topbar.top-bar--custom__toggle-topbar'); }
    
    //phone numbers
    get mastheadPhoneNumber()                    { return browser.element('body > header > div.show-for-large-up > section > div > div.small-4.columns.is-align-right > a'); }
    get regionBannerPhoneNumber()                { return browser.element('body > main > section.banner.banner--countdown.has-bg-primary > div > div.large-4.columns > div > a'); }
    get mastfootPhoneNumber()                    { return browser.element('body > section > div > div.small-12.medium-6.columns.medium-text-left > div > a'); }
    get leftColumnButtonPhoneNumber()            { return browser.element('body > main > section:nth-child(6) > div > div:nth-child(1) > a'); }
    get rightColumnButtonPhoneNumber()           { return browser.element('body > main > section:nth-child(9) > div > div:nth-child(4) > a > span.h-phone'); }

    //prices
    get heroTermsPrice()                         { return browser.element('body > main > section.hero-wordpress > div > div.small-12.large-7.columns > div.price-hero-wordpress > span > p'); }
    get heroMonthlyDollarsPrice()                { return browser.element('body > main > section.hero-wordpress > div > div.small-12.large-7.columns > div.price-hero-wordpress > span > div > p.price-hero-wordpress__amount'); }
    get heroMonthlyCentsPrice()                  { return browser.element('body > main > section.hero-wordpress > div > div.small-12.large-7.columns > div.price-hero-wordpress > span > div > div > p.price-hero-wordpress__cents > span'); }

    //Urls of pages masthead links navigate to      
    get businessPlansPageUrl()                   { return 'https://internet.frontier.com/business/'}                      
    get existingCustomersPageUrl()               { return 'https://internet.frontier.com/existing-customers.html'} 
    get espanolPageUrl()                         { return 'https://internet.frontier.com/espanol/'}                
    
    //Urls of pages mega menu links navigate to
    get allPlansPageUrl()                         { return 'https://internet.frontier.com/plans-pricing.html'}
    get bundlesPageUrl()                          { return 'https://internet.frontier.com/bundles/'}
    get frontierFiosBundlesPageUrl()              { return 'https://internet.frontier.com/bundles/fios/'}
    get frontierSecurePageUrl()                   { return 'https://internet.frontier.com/security.html'}
    get highSpeedInternetPageUrl()                { return 'https://internet.frontier.com/services/'}
    get fiosInternetPageUrl()                     { return 'https://internet.frontier.com/fios.html'}
    get fiosTvPageUrl()                           { return 'https://internet.frontier.com/fios-tv/'}
    get vantageTvPageUrl()                        { return 'https://internet.frontier.com/vantage-tv/'}
    get phonePageUrl()                            { return 'https://internet.frontier.com/phone.html'}
    get availabilityPageUrl()                     { return 'https://internet.frontier.com/local/'}
    get orderNowPageUrl()                         { return 'https://internet.frontier.com/order.html'}
    get resourcesPageUrl()                        { return 'http://internet.frontier.com/resources/'}
    get espanolPageUrl()                          { return 'https://internet.frontier.com/espanol/'}

    //top level menu items
    get plansAndPricingMenu()                     { return '#menu-primary-1>#menu-item-4313 > a'}
    get internetMenu()                            { return '#menu-primary-1>#menu-item-4314 > a'}
    get tvMenu()                                  { return '#menu-primary-1>#menu-item-4440 > a'}
    get phoneLink()                               { return 'ul#menu-primary-1.menu>#menu-item-4371 > a'}
    get availabilityLink()                        { return 'ul#menu-primary-1.menu>#menu-item-4372 > a'}
    get orderNowLink()                            { return 'ul#menu-primary-1.menu>#menu-item-4373 > a'}
    
    //submenu links
    get businessPlansLink()                       { return 'body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(1) > a'} 
    get existingCustomersLink()                   { return 'body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(2) > a'} 
    get myAccountLink()                           { return 'body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(3) > a'} 
    get espanolLink()                             { return 'body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(4) > a'} 
    get allPlansLink()                            { return '#menu-primary-1>#menu-item-4313>ul.sub-menu>#menu-item-5108 > a'} 
    get bundlesLink()                             { return '#menu-primary-1>#menu-item-4313>ul.sub-menu>#menu-item-4321 > a'}
    get frontierSecureLink()                      { return '#menu-primary-1>#menu-item-4313>ul.sub-menu>#menu-item-4367 > a'} 
    get highSpeedInternetLink()                   { return '#menu-primary-1>#menu-item-4314>ul.sub-menu>#menu-item-4323 > a'} 
    get fiosInternetLink()                        { return '#menu-primary-1>#menu-item-4314>ul.sub-menu>#menu-item-4324 > a'} 
    get frontierFiosBundlesLink()                 { return '#menu-primary-1>#menu-item-4313>ul.sub-menu>#menu-item-5159 > a'}  
    get fiosTvLink()                              { return '#menu-primary-1>#menu-item-4440>ul.sub-menu>#menu-item-4370 > a'} 
    get vantageTvLink()                           { return '#menu-primary-1>#menu-item-4440>ul.sub-menu>#menu-item-4369 > a'}  
    get highSpeedInternetFooterLink()             { return 'body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(1) > a'}  
    get homePhoneFooterLink()                     { return 'body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(2) > a'}  
    get fiosServicesFooterLink()                  { return 'body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a'}  
    get existingCustomersFooterLink()             { return 'body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(4) > a'}  
    get myAccountFooterLink()                     { return 'body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(5) > a'}  
    get plansAndPricingFooterLink()               { return 'body > footer > div:nth-child(1) > div.medium-4.columns.margin-fix--right > ul > li:nth-child(1) > a'}  
    get addFrontierSecureFooterLink()             { return 'body > footer > div:nth-child(1) > div.medium-4.columns.margin-fix--right > ul > li:nth-child(2) > a'}  
    get viewAllBundlesFooterLink()                { return 'body > footer > div:nth-child(1) > div.medium-4.columns.margin-fix--right > ul > li:nth-child(3) > a'}  
    get resourcesFooterLink()                     { return 'body > footer > div:nth-child(1) > div.medium-4.columns.margin-fix--left > ul > li:nth-child(1) > a'}  
    get espanolFooterLink()                       { return 'body > footer > div:nth-child(1) > div.medium-4.columns.margin-fix--left > ul > li:nth-child(2) > a'}  





    //footer links
    

    clickBusinessPlansLink() {
        browser.click(this.businessPlansLink);
    }

    clickExistingCustomersLink() {
        browser.click(this.existingCustomersLink);
    }

    clickMyAccountLinkAndSwitchTab() {
        browser.click(this.myAccountLink);
        this.switchToNewTab();
    }

    clickEspanolLinkAndSwitchTab() {
        browser.click(this.espanolLink);
        this.switchToNewTab();
    }

    get myAccountPageUrlRegex() {
        var regex = new RegExp("https?:\\/\\/(www\.)?frontier\\.com\\/login\\?target=[a-zA-Z0-9]{16}");
        
        return regex;
    }

    clickAllPlansLink() {
        //move mouse over Plans and Pricing to open menu and make All Plans link visible
        browser.waitForVisible(this.plansAndPricingMenu);
        browser.moveToObject(this.plansAndPricingMenu);
        
        //wait for menu to open and All Plans link to be visible
        browser.waitForVisible(this.allPlansLink);
        browser.click(this.allPlansLink);
    }

    clickBundlesLink() {
        //move mouse over Plans and Pricing to open menu and make All Plans link visible
        browser.waitForVisible(this.plansAndPricingMenu);
        browser.moveToObject(this.plansAndPricingMenu);
        
        //wait for menu to open and Bundles link to be visible
        browser.waitForVisible(this.bundlesLink);
        browser.click(this.bundlesLink);
    }

    clickFrontierFiosBundlesLink() {
        //move mouse over Plans and Pricing link to open menu and make All Plans link visible
        browser.waitForVisible(this.plansAndPricingMenu);
        browser.moveToObject(this.plansAndPricingMenu);
        
        //wait for menu to open and Frontier Fios Bundles link to be visible
        browser.waitForVisible(this.frontierFiosBundlesLink);
        browser.click(this.frontierFiosBundlesLink);
    }

    clickFrontierSecureLink() {
        //move mouse over Plans and Pricing to open menu and make All Plans link visible
        browser.moveToObject(this.plansAndPricingMenu);
        
        //wait for menu to open and Frontier Secure link to be visible
        browser.waitForVisible(this.frontierSecureLink);
        browser.click(this.frontierSecureLink);
    }

    clickHighSpeedInternetLink() {
        //move mouse over Intenet menu item to open menu and make All Plans link visible
        browser.moveToObject(this.internetMenu);
        
        //wait for menu to open and High Speed Internet link to be visible
        browser.waitForVisible(this.highSpeedInternetLink);
        browser.click(this.highSpeedInternetLink);
    }

    clickFiosInternetLink() {
        //move mouse over Intenet menu item to open menu and make All Plans link visible
        browser.moveToObject(this.internetMenu);
        
        //wait for menu to open and Fios Internet link to be visible
        browser.waitForVisible(this.fiosInternetLink);
        browser.click(this.fiosInternetLink);
    }

    clickFiosTvLink() {
        //move mouse over TV menu item to open menu and make All Plans link visible
        browser.moveToObject(this.tvMenu);
        
        //wait for menu to open and Fios TV link to be visible
        browser.waitForVisible(this.fiosTvLink);
        browser.click(this.fiosTvLink);
    }

    clickVantageTvLink() {
        //move mouse over Vantage TV menu item to open menu and make All Plans link visible
        browser.moveToObject(this.tvMenu);
        
        //wait for menu to open and Vantage TV link to be visible
        browser.waitForVisible(this.vantageTvLink);
        browser.click(this.vantageTvLink);
    }

    clickPhoneLink() {
        browser.click(this.phoneLink);
    }

    clickAvailabilityLink() {
        browser.click(this.availabilityLink);
    }

    clickOrderNowLink() {
        browser.click(this.orderNowLink);
    }
    clickHighSpeedInternetFooterLink() {
        browser.click(this.highSpeedInternetFooterLink);
    }

    clickHomePhoneFooterLink() {
        browser.click(this.homePhoneFooterLink);
    }

    clickFiosServicesFooterLink() {
        browser.click(this.fiosServicesFooterLink);
    }

    clickExistingCustomersFooterLink() {
        browser.click(this.existingCustomersFooterLink);
    }

    clickMyAccountFooterLinkAndSwitchTab() {
        browser.click(this.myAccountFooterLink);
        this.switchToNewTab();
    }

    clickPlansAndPricingFooterLink() {
        browser.click(this.plansAndPricingFooterLink);
    }

    clickAddFrontierSecureFooterLink() {
        browser.click(this.addFrontierSecureFooterLink);
    }

    clickViewAllBundlesFooterLink() {
        browser.click(this.viewAllBundlesFooterLink);
    }

    clickResourcesFooterLinkAndSwitchTab() {
        browser.click(this.resourcesFooterLink);
        this.switchToNewTab();
    }

    clickEspanolFooterLink() {
        browser.click(this.espanolFooterLink);
    }

    open() {
        super.open('/');
    }
    
    submit() {
        this.form.submitForm();
    }
    
    closeTheNewTab() {
        //return to the original tab
        this.returnToOriginalTab();
        
        //close the new tab that was created
        this.closeNewTab(); 
    }
    /*
 * Create functions for navigating and closings tabs opened, that can be used in tests where clicking links opens new tabs.  
 * TODO: create a module for this helper method and import it so it can be used across pages being tested.
 */


//function to switch browser tabs
    switchToNewTab() {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    //switch to the new tab
    browser.switchTab(openTabs[1]);
    }

//function to close a tab that was just opened.
    closeNewTab() {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();
    
    //switch to the new tab
    browser.close(openTabs[1]);
    }

//function to return to the originating tab
    returnToOriginalTab() {
    // get all open tab ids in an array
    const openTabs = browser.getTabIds();

    //switch to the new tab
    browser.switchTab(openTabs[0]);
    }

}
module.exports = LandingPage;