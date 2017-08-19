var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify logos and graphics are visible for 640', () => {
		
	// Open browser on landing page
	LandingPage.open();  
    
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

    it('Should check for menu for mobile screens, 640', async function () {
        expect(LandingPage.mobileMenu.isVisible()).toBe(true);
    });
});