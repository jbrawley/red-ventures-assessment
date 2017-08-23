var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();


describe('Form Validation', () => {

	LandingPage.open();	

	it('submit empty form',  function () {
		//wait for address form to be visible and fill form
		LandingPage.waitForAddressFormToBeVisible();
		
		//click button to submit form, this triggers JS that I cannot get to run when using submitForm();
		LandingPage.clickCheckAvailabilityButton();

		//was going to check for the validation box to show, but I couldn't find the "invalid" property on any of the elements in the DOM
		formSubmittedAndPassedValidation = LandingPage.pollForLoaderToDisplay();

		expect(formSubmittedAndPassedValidation).not.toBe(true);
	});


	it('submit form with valid data',  function () {
		
		var formSubmittedAndPassedValidation;
		//set variable to true to get valid data
		var validData = true;
		//wait for address form to be visible and fill formorm	
		LandingPage.fillAddressFormWithData(validData);
		
		//click button to submit form, this triggers JS that I cannot get to run when using submitForm();
		LandingPage.clickCheckAvailabilityButton();

		//poll for Loader to display after submitting form, if it is true, that means it passed the HTML5 validation and loader displayed on page before redirecting
		formSubmittedAndPassedValidation = LandingPage.pollForLoaderToDisplay();
		
		expect(formSubmittedAndPassedValidation).toBe(true);
	});	

	//Same steps as submitting form with valid data, except added a method to change the Zip code to invalid, since it is the only one with anything other than "required validation"
	it('submit form with invalid data',  function () {
		var formSubmittedAndPassedValidation;
		//set variable to false to get invalid data
		var validData = false;
		//wait for address form to be visible and fill form
		LandingPage.fillAddressFormWithData(validData);

		//click button to submit form, this triggers JS that I cannot get to run when using submitForm();
		LandingPage.clickCheckAvailabilityButton();

		//poll for Loader to display after submitting form, if it is true, that means it passed the HTML5 validation and loader displayed on page before redirecting
		formSubmittedAndPassedValidation = LandingPage.pollForLoaderToDisplay();
		
		expect(formSubmittedAndPassedValidation).toBe(true);
	});
});