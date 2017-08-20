var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();

describe('Verify links redirect correctly in ', () => {

    var currentUrl;

	// Open browser on landing page 
    LandingPage.open();
    //console.log(LandingPage.businessPlansLink);

    it('Should check that Business Plans redirects to correct page', function () {
        LandingPage.clickBusinessPlansLink();
        currentUrl = browser.getUrl();
  
        expect(currentUrl).toMatch(LandingPage.urlBusinessPlansPageUrl);
    });

 
   

});