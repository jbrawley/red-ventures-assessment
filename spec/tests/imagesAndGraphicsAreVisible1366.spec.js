var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify logos and graphics are visible for 1366 in ', () => {
		
	// Open browser on landing pagecd  
    LandingPage.open();
    
    it('Should check if masthead logo is visible for 1366, 1024, 640', function () {
    	expect(LandingPage.mastheadLogo.isVisible()).toBe(true);
    });

    it('Should check if phone icon is visible in masthead banner for 1366', function () { 
    	expect(LandingPage.phoneIconInMastheadBanner.isVisible()).toBe(true);
    });
    
    it('Should check if phone icon is visible in region banner for 1366', function () { 
    	expect(LandingPage.phoneIconInRegionBanner.isVisible()).toBe(true);
    });
    
	it('Should check if phone icon is visible in masfoot banner for 1366', function () {
        expect(LandingPage.phoneIconInMasfootBanner.isVisible()).toBe(true);
    });
     
    //Skip this test.  I do not think the ::before pseudo element is supported currently
    xit('Should check if price tag icon is visible in Check for deals banner for 1366', function () {
        expect(LandingPage.priceTagIcon.isVisible()).toBe(true);
    }); 
	
    it('Should check if hero image is showing for 1366', function () {
        expect(LandingPage.heroImage.isVisible()).toBe(true);
    });
});