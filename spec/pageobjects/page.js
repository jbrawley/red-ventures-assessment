/*
 * Main Page object class that all other page objects will inherit from ES6 class
 */

"use strict";
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
		//browser.url('/' + path);
		browser.url(path);
	}
}
module.exports = Page;