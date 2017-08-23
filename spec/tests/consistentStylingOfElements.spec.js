var LandingPage = require('../../spec/pageobjects/landing.page');
var LandingPage = new LandingPage();


describe('Verify elements css styling is consistent', () => {

	LandingPage.open();	

	it('Verify buttons have consistent CSS styling of Property',  function () {
		var buttonFontSize = LandingPage.buttonFontSize;
		var buttons = LandingPage.buttonArray();
		var propertyName = 'buttonFontSize';
		var propertyValue;
		
	 	

		for (var i = 0, len = buttons.length; i < len; i++) {
  			if (this.compareCssProperty(buttons[i], propertyName, propertyValue)) {
  				ElementStyleIsConsistent = true; 
  			} else {
  				ElementStyleIsConsistent = false;
  				{ break; }
  			}
		}
		
		expect(ElementStyleIsConsistent).toBe(true);	
	});

	compareCssProperty(selector, propertyName, propertyValue) {
		var attr = browser.getCssProperty(selector, propertyName); 
		if(attr = propertyValue) {
			return true;
		} else {	
			return false;
		}
	}

});

/*
font-size
font-family
margin
color

 */

