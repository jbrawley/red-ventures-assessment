

console.log('test.spec.js begin');

describe('test suite', function() {
	describe('test', function() {
		it('should detect if an element is visible', function () {
    		browser.url('/');
    		var isVisible = browser.isVisible('#notDisplayed');
    		console.log(isVisible); // outputs: false
    		isVisible = browser.isVisible('#notVisible');
    		console.log(isVisible); // outputs: false
    		isVisible = browser.isVisible('#notExisting');
    		console.log(isVisible); // outputs: false
    		isVisible = browser.isVisible('#notInViewport');
    		console.log(isVisible); // outputs: true
    		isVisible = browser.isVisible('#zeroOpacity');
    		console.log(isVisible); // outputs: true
    		isVisible = browser.isVisible('.masthead__logo');
    		console.log(isVisible); // outputs: true
    		isVisible = browser.isVisible('#menu-item-4313:after');
    		console.log(isVisible); // outputs: true
    		isVisible = browser.isVisible('#menu-item-6313:after');
    		console.log(isVisible); // outputs: true

		});
	});
});


describe('webdriver.io page', function() {
console.log('jasmine spec running');
    it('should have the right title - the fancy generator way', function() {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).toBe('Frontier® Internet Service & TV | 877-870-4601 | FTR Communications');
    });

});

