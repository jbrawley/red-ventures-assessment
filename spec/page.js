/*
 * Main Page object class that all other page objects will inherit from
 */

"use strict";
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {
		browser.url('/' + path);
	}
}
module.exports = new Page();