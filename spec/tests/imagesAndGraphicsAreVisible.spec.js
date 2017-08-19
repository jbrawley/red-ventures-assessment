var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();
describe('Verify logos and graphics are visible for 1366 in ', () => {
		
	// Open browser on landing pagecd  
    LandingPage.open();
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
    	expect(LandingPage.mastheadLogo.isVisible()).toBe(true);
    });

    it('Should check if phone icon is visible in masthead banner for 1366', async function () { 
    	expect(LandingPage.phoneIconInMastheadBanner.isVisible()).toBe(true);
    });
    
    it('Should check if phone icon is visible in region banner for 1366', async function () { 
    	expect(LandingPage.phoneIconInRegionBanner.isVisible()).toBe(true);
    });
    
	it('Should check if phone icon is visible in masfoot banner for 1366', async function () {
        expect(LandingPage.phoneIconInMasfootBanner.isVisible()).toBe(true);
    });
     
    //Skip this test.  I do not think the ::before pseudo element is supported currently
    xit('Should check if price tag icon is visible in Check for deals banner for 1366', async function () {
        expect(LandingPage.priceTagIcon.isVisible()).toBe(true);
    }); 
	
    it('Should check if hero image is showing for 1366', async function () {
        expect(LandingPage.heroImage.isVisible()).toBe(true);
    });
    
    it('Should check if first image, right column, showing for 1366, 1024', async function () {
        expect(LandingPage.firstImageRightColumn.isVisible()).toBe(true);
    });

    it('Should check if second image, on left side of page is showing for 1366, 1024', async function () {
        expect(LandingPage.secondImageLeftColumn.isVisible()).toBe(true);
    });

    it('Should check if third image, on right side of page is showing for 1366, 1024', async function () {
        expect(LandingPage.thirdImageRightColumn.isVisible()).toBe(true);
    });
 
 	it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        expect(LandingPage.footerLogo.isVisible()).toBe(true);
    });
});


describe('Verify logos and graphics are visible for 1024', () => {
		
	// Open browser on landing pagecd
	browser.url('/');   
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
    	expect(LandingPage.mastheadLogo.isVisible()).toBe(true);
    });

    it('Should check if first image, right column, showing for 1366, 1024', async function () {
        expect(LandingPage.firstImageRightColumn.isVisible()).toBe(true);
    });

    it('Should check if second image, on left side of page is showing for 1366, 1024', async function () {
        expect(LandingPage.secondImageLeftColumn.isVisible()).toBe(true);
    });

    it('Should check if third image, on right side of page is showing for 1366, 1024', async function () {
        expect(LandingPage.thirdImageRightColumn.isVisible()).toBe(true);
    });
    
    it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        expect(LandingPage.footerLogo.isVisible()).toBe(true);
    });
	
	it('Should check if small yellow phone icon in sticky banner is visible for 1024, 640', async function () {
        expect(LandingPage.smallYellowPhoneIconInStickyBanner.isVisible()).toBe(true);
    });
    
    it('Should check if top yellow phone icon is visible for 1024, 640', async function () {
        expect(LandingPage.topYellowPhoneIcon.isVisible()).toBe(true);
    });

    it('Should check if bottom yellow phone icon is visible for 1024, 640', async function () {
        expect(LandingPage.bottomYellowPhoneIcon.isVisible()).toBe(true);
    });
    
});    

describe('Verify logos and graphics are visible for 640', () => {
		
	// Open browser on landing pagecd
	browser.url('/');   
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', async function () {
    	expect(LandingPage.mastheadLogo.isVisible()).toBe(true);
    });
    
    it('Should check if footer logo is showing for 1366, 1024, 640', async function () {
        expect(LandingPage.footerLogo.isVisible()).toBe(true);
    });
	    
    it('Should check if small yellow phone icon in sticky banner is visible for 1024, 640', async function () {
        expect(LandingPage.smallYellowPhoneIconInStickyBanner.isVisible()).toBe(true);
    });
    
    it('Should check if top yellow phone icon is visible for 1024, 640', async function () {
        expect(LandingPage.topYellowPhoneIcon.isVisible()).toBe(true);
    });

    it('Should check if bottom yellow phone icon is visible for 1024, 640', async function () {
        expect(LandingPage.bottomYellowPhoneIcon.isVisible()).toBe(true);
    });

});