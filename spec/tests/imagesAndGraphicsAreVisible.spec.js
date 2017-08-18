describe('Verify logos and graphics are visible', () => {
		
	// Open browser on landing page
	browser.url('/');   
    
    //test only passes at 1366 breakpoint
    it('Should check if masthead logo is visible for 1366', async function () {
        isVisible = browser.isVisible('.small-12.columns>.masthead__logo'); //selector  browser.windowHandleSize({width: 1366, height: 768})
        expect(isVisible).toBe(true);
    });
    	

    //test only passes at 1366 breakpoint
    it('Should check if phone icon is visible in masthead banner for 1366', async function () { 
        isVisible = browser.isVisible('body > header > div.show-for-large-up > section > div > div.small-4.columns.text-right > div'); //selector  browser.windowHandleSize({width: 1366, height: 768})
    	expect(isVisible).toBe(true);
    });
    
    //test only passes at 1366 breakpoint
    it('Should check if phone icon is visible in masfoot banner for 1366', async function () {
        isVisible = browser.isVisible('body > section > div > div.small-12.medium-6.columns.medium-text-left > div > div'); //selector  browser.windowHandleSize({width: 1366, height: 768})
    	expect(isVisible).toBe(true);
    });
	
    //test only passes at 1024 breakpoint
    it('Should check if small yellow phone icon in sticky banner is visible for 1024x768', async function () {
        isVisible = browser.isVisible('body > header > div.hide-for-large-up > nav > div.row.small-collapse > div > div > a > span.masthead__phone-icon.icon-phone'); //selector  browser.windowHandleSize({width: 1024, height: 768})
    	expect(isVisible).toBe(true);
    });


    //test only passes at 1024 breakpoint
    it('Should check if top yellow phone icon is visible for 1024x768', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(2) > div > div > div > svg'); //selector  browser.windowHandleSize({width: 1024, height: 768})
    	expect(isVisible).toBe(true);
    });

    //test only passes at 1024 breakpoint
    it('Should check if bottom yellow phone icon is visible for 1024x768', async function () {
        isVisible = browser.isVisible('body > main > section:nth-child(11) > div > div > div > svg'); //selector  browser.windowHandleSize({width: 1024, height: 768})
    	expect(isVisible).toBe(true);
    });

	/*
    it('Should fail', async function () {
        isVisibleWithinViewport = browser.isVisibleWithinViewport('div.row.banner--mastfoot-bottom__row banner__phone-iconz icon-medium icon-yellow no-margin'); //selector  browser.windowHandleSize({width: 1024, height: 768})
    	expect(isVisibleWithinViewport).toBe(true);
    });
    
	*/
    /**
     *Skip this test.  I do not think the ::after pseudo element is supported currently
     * 
     *it('Should check if mega menu arrows are visible', async function () {
     *    browser.url('/');
	 *	isVisibleWithinViewport = browser.isVisibleWithinViewport('#menu-item-4313 a::after');
     *   //isVisibleWithinViewport = browser.isVisibleWithinViewport('div.small-12.columns>.masthead__logo' //selector for full screen
	 *	expect(isVisibleWithinViewport).toBe(true); 
	 *})  
	 */ 
/*
    it('should check multiple elements are visible', async function () {
        const isVisibleWithinViewport = await browser.isVisibleWithinViewport('.visibletest')
        isVisibleWithinViewport.should.be.an.instanceOf(Array)
        isVisibleWithinViewport.should.have.length(2)
        isVisibleWithinViewport.should.contain(false)
    })

*/
	
});