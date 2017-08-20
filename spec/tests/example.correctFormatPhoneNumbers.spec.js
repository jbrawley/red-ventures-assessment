var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();


describe('Verify phone numbers are correctly formatted in ', () => {

	var phoneNumberRegex = new RegExp("1-\\d{3}-\\d{3}-\\d{4}");

	// Open browser on landing page 
    LandingPage.open();

    it('Should check if masthead phone number is correctly formatted', function () {
    	expect(LandingPage.mastheadPhoneNumber.getText()).toMatch(phoneNumberRegex.source);
    });

    it('Should check if masthead phone number is 1-877-340-9546(THIS SHOULD FAIL, wrong number flashes briefly)', function () {
    	expect(LandingPage.mastheadPhoneNumber.getText()).toContain('1-877-340-9546');
    });

    it('Should check if region banner phone number is correctly formatted', function () {
    	expect(LandingPage.regionBannerPhoneNumber.getText()).toMatch(phoneNumberRegex.source);
    });

    it('Should check if region banner phone number is 1-877-340-9546(THIS SHOULD FAIL, wrong number flashes briefly)', function () {
    	expect(LandingPage.regionBannerPhoneNumber.getText()).toContain('1-877-340-9546');
    });

    it('Should check if mastfoot phone number is correctly formatted', function () {
    	expect(LandingPage.mastfootPhoneNumber.getText()).toMatch(phoneNumberRegex.source);
    });

    it('Should check if mastfoot phone number is 1-877-340-9546(THIS SHOULD FAIL, wrong number flashes briefly)', function () {
    	expect(LandingPage.mastfootPhoneNumber.getText()).toContain('1-877-340-9546');
    });

    it('Should check if left column button phone number is correctly formatted', function () {
    	expect(LandingPage.leftColumnButtonPhoneNumber.getText()).toMatch(phoneNumberRegex.source);
    });

    it('Should check if left column button phone number is 1-877-340-9546(THIS SHOULD FAIL, wrong number flashes briefly)', function () {
    	expect(LandingPage.leftColumnButtonPhoneNumber.getText()).toContain('1-877-340-9546');
    });

    it('Should check if right column button phone number is correctly formatted', function () {
    	expect(LandingPage.rightColumnButtonPhoneNumber.getText()).toMatch(phoneNumberRegex.source);
    });

    it('Should check if right column button phone number is 1-877-340-9546(THIS SHOULD FAIL, wrong number flashes briefly)', function () {
    	expect(LandingPage.rightColumnButtonPhoneNumber.getText()).toContain('1-877-340-9546');
    }); 
});