var LandingPage = require('../../spec/pageobjects/landing.page');
var instanceLandingPage = new LandingPage();
describe('Verify logos and graphics are visible for 1366', () => {
		
	// Open browser on landing pagecd
	//browser.url('/');   
    LandingPage.open();
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('.small-12.columns>.masthead__logo'); 
    });
    	
    it('Should check if phone icon is visible in masthead banner for 1366', async function () { 
        isVisible = browser.isVisible('body > header > div.show-for-large-up > section > div > div.small-4.columns.is-align-right > a'); 
    	expect(isVisible).toBe(true);
    });
 
    it('Should check if phone icon is visible in region banner for 1366', async function () { 
        isVisible = browser.isVisible('body > main > section.banner.banner--countdown.has-bg-primary > div > div.large-4.columns > div > div'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if phone icon is visible in masfoot banner for 1366', async function () {
        isVisible = browser.isVisible('body > section > div > div.small-12.medium-6.columns.medium-text-left > div > div'); 
    });
     
    //Skip this test.  I do not think the ::before pseudo element is supported currently
    xit('Should check if price tag icon is visible in Check for deals banner for 1366', async function () {
        isVisible = browser.isVisible('body > main > section.banner.banner--address > div:nth-child(1) > div > h3 ::before'); 
    	expect(isVisible).toBe(true);
    });
	
    it('Should check if hero image is showing for 1366', async function () {
        isVisible = browser.isVisible('body > main > section.hero-wordpress > div > div.small-5.columns.show-for-large-up > div'); 
    	expect(isVisible).toBe(true);
    });

    it('Should check if first image, on right side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-1.png'); 
    	expect(isVisible).toBe(true);
    });

    it('Should check if second image, on left side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-2.png'); 
    	expect(isVisible).toBe(true);
    });
 
    it('Should check if third image, on right side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-3.png'); 
    	expect(isVisible).toBe(true);
    });
 
    it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/logos/logo-ftr-black.png'); 
    	expect(isVisible).toBe(true);
    });
});

describe('Verify logos and graphics are visible for 1024', () => {
		
	// Open browser on landing pagecd
	browser.url('/');   
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('.small-12.columns>.masthead__logo'); 
    });

    it('Should check if first image, on right side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-1.png'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if second image, on left side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-2.png'); 
    	expect(isVisible).toBe(true);
    });
     
    it('Should check if third image, on right side of page is showing for 1366, 1024', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/sections/bg-section-home-two-col-3.png'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/logos/logo-ftr-black.png'); 
    	expect(isVisible).toBe(true);
    });
	    
    it('Should check if small yellow phone icon in sticky banner is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > header > div.hide-for-large-up > nav > div.row.small-collapse > div > div > a > span.masthead__phone-icon.icon-phone'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if top yellow phone icon is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(2) > div > div > div > svg'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if bottom yellow phone icon is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(13) > div > div > div > svg'); 
    	expect(isVisible).toBe(true);
    });
});    

describe('Verify logos and graphics are visible for 640', () => {
		
	// Open browser on landing pagecd
	browser.url('/');   
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('.small-12.columns>.masthead__logo'); 
    });
    
    it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        isVisible = browser.isVisible('img[src*="/assets/seo-b/images/logos/logo-ftr-black.png'); 
    	expect(isVisible).toBe(true);
    });
	    
    it('Should check if small yellow phone icon in sticky banner is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > header > div.hide-for-large-up > nav > div.row.small-collapse > div > div > a > span.masthead__phone-icon.icon-phone'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if top yellow phone icon is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(2) > div > div > div > svg'); 
    	expect(isVisible).toBe(true);
    });
    
    it('Should check if bottom yellow phone icon is visible for 1024, 640', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(13) > div > div > div > svg'); 
    	expect(isVisible).toBe(true);
    });

	//fail test example for debugging, delete later
    xit('Should fail', async function () {
        isVisibleWithinViewport = browser.isVisibleWithinViewport('div.row.banner--mastfoot-bottom__row banner__phone-iconz icon-medium icon-yellow no-margin'); 
    	expect(isVisibleWithinViewport).toBe(true);
    });
});