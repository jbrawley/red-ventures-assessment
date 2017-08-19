var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();
describe('Verify components are correctly formatted 1366 in ', () => {
	var phoneNumber = LandingPage.mastheadPhoneNumber;
	console.log(phoneNumber);
	// Open browser on landing page 
    LandingPage.open();

    it('Should check if masthead phone number is visible', function () {
    	console.log(phoneNumber);
    	//expect(LandingPage.mastheadPhoneNumber.isVisible()).toBe(true);
    });
    
    it('Should check if masthead phone number is correctly formatted', function () {
    	expect(LandingPage.mastheadPhoneNumber.getText()).toMatch(/^1-\d{3}-\d{3}-\d{4}$/);
    });

    it('Should check if masthead phone number is 1-877-340-9546', function () {
    	expect(LandingPage.mastheadPhoneNumber.getText()).toContain('1-877-340-9546');
    });
 
});