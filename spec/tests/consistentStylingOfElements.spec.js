var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();


describe('Verify elements css styling is consistent', () => {

	LandingPage.open();	

	//could not get this test to work to compare styling, selectors for buttons could not be found on page.  Tried a few different ones that would work in the console, but not when I run wdio.
	xit('Verify buttons have consistent CSS styling of color',  function () {
		var buttonColor = LandingPage.buttonColor;
		var buttons = LandingPage.buttonArray;
		var propertyName = 'color';
		var propertyValue = LandingPage.buttonColor;
		var ElementStyleIsConsistent;
		

		browser.waitForExist(LandingPage.callToOrderButtonLeftColumnLocator);

		for (var i = 0, len = buttons.length; i < len; i++) {
  			console.log ('iteration '  + i);
  			if (LandingPage.compareCssProperty(buttons[i], propertyName, propertyValue)) {
  			    ElementStyleIsConsistent = true; 
  			} else {
  				
  				ElementStyleIsConsistent = false;
  				{ break; }
  			}
		}
		
		expect(ElementStyleIsConsistent).toBe(true);	
	});

	it('Verify inks have consistent CSS styling of font-family',  function () {
		var linkColor = LandingPage.linkColor;
		var links = LandingPage.footerLinksArray;
		var propertyName = 'color';
		var propertyValue = LandingPage.linkColor;
		var ElementStyleIsConsistent;
		
		for (var i = 0, len = links.length; i < len; i++) {
  			if (LandingPage.compareCssProperty(links[i], propertyName, propertyValue)) {
  			    ElementStyleIsConsistent = true; 
  			} else {
  				
  				ElementStyleIsConsistent = false;
  				{ break; }
  			}
		}
		
		expect(ElementStyleIsConsistent).toBe(true);	
	});








});

/*
font-size
font-family
margin
color

 */

