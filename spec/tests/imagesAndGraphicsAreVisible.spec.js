describe('Verify logos and graphics are visible', () => {
    it('Should check if masthead logo is visible', async function () {
        browser.url('/');
		isVisible = browser.isVisible('li.name>.masthead__logo');
        //isVisible = browser.isVisible('div.small-12.columns>.masthead__logo' //selector for full screen
		expect(isVisible).toBe(true);
        
/*
    it('should check multiple elements are visible', async function () {
        const isVisible = await browser.isVisible('.visibletest')
        isVisible.should.be.an.instanceOf(Array)
        isVisible.should.have.length(2)
        isVisible.should.contain(false)
    })

*/
	})
})