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

    //links
    get businessPlansLink()                      { return browser.getAttribute('body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(1) > a', 'outerHTML'); }                    
    get urlBusinessPlansPageUrl()                { return 'https://internet.frontier.com/business/'}   

    clickBusinessPlansLink() {
        browser.click('body > header > div.show-for-large-up > nav > div > div > ul > li:nth-child(1) > a');
    }
    

    open() {
        super.open('/');
    }
    
    submit() {
        this.form.submitForm();
    }
    

}
module.exports = LandingPage;