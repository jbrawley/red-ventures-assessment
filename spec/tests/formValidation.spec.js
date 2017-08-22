var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();


describe('Form Validation', () => {

	LandingPage.open();

/*
	xit('should fail',  function () {
		var elem = LandingPage.loaderBanner;
		var display = browser.selectorExecute(elem, function(elem)) {
  			
    			var theCSSprop = window.getComputedStyle(elem).getPropertyValue("display"); 
    			var theCSSprop = window.getComputedStyle(document.getElementsByClassName('loader--cart')[0]).display;
 				
 				return theCSSprop;
 		});
		
		expect(LandingPage.loaderBanner.getAttribute('display')).toBe('asdf');
		expect(display).toMatch('none');
	});
*/
/*
	xit('submit empty form',  function () {
		
		LandingPage.submitAddressForm();
		var validationFailed;
		for(i = 0; i <= 4; i++) {
			browser.pause(500);
			if (LandingPage.loader.isVisible()) {
				validationFailed = true;
				console.log(validationFailed);
			}
		}

		browser.pause(500);
		expect(validationFailed).not.toBe(true);
	});
*/
	

	it('submit empty form',  function () {
		//wait for address form to be visible and fill form
		LandingPage.waitForAddressFormToBeVisible();
		
		//click button to submit form, this triggers JS that I cannot get to run when using submitForm();
		LandingPage.clickCheckAvailabilityButton();

		//was going to check for the validation box to show, but I couldn't find the "invalid" property on any of the elements in the DOM
		formSubmittedAndPassedValidation = LandingPage.pollForLoaderToDisplay();

		expect(formSubmittedAndPassedValidation).not.toBe(true);
	});


	it('submit valid form',  function () {
		var formSubmittedAndPassedValidation;
		
		//wait for address form to be visible and fill form
		LandingPage.fillAddressFormWithValidData()
		
		//click button to submit form, this triggers JS that I cannot get to run when using submitForm();
		LandingPage.clickCheckAvailabilityButton();

		//poll for Loader to display after submitting form, if it is true, that means it passed the HTML5 validation and loader displayed on page before redirecting
		formSubmittedAndPassedValidation = LandingPage.pollForLoaderToDisplay();
		
		expect(formSubmittedAndPassedValidation).toBe(true);
	});	

});