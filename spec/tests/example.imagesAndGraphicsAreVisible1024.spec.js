var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify logos and graphics are visible for 1024', () => {
		
	// Open browser on landing pagecd
	LandingPage.open();  
    
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