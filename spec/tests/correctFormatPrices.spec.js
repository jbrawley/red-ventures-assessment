var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

var currencyRegex = new RegExp("((\\d{1,2}(,\\d{3})+)|(\\d+)(\\.\\d{2})?)");

describe('Verify phone numbers are correctly formatted in ', () => {

	// Open browser on landing page 
    LandingPage.open();

    it('Should check if hero terms price is correctly formatted', function () {
    	expect(LandingPage.heroTermsPrice.getText()).toMatch(currencyRegex.source);
    });

    it('Should check if hero monthly dollar price is correctly formatted', function () {
    	expect(LandingPage.heroMonthlyDollarsPrice.getText()).toMatch(currencyRegex.source);
    });

    it('Should check if hero monthly dollar price is correctly formatted', function () {
    	expect(LandingPage.heroMonthlyCentsPrice.getText()).toMatch(currencyRegex.source);
    });

    //not sure how to do this if text is in an image
    xit('Should check if footnote prices are correctly formatted', function () {
    	expect(LandingPage.footNotePrices.getText()).toMatch(currencyRegex.source);
    });

});