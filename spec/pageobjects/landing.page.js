/*
 * Page object for landing page using ES6 class
 */
"use strict";

//inherit from Page class
var Page = require('./page')


class LandingPage extends Page {
    get username()  { return browser.element('#username'); }
    get password()  { return browser.element('#password'); }
    get form()      { return browser.element('#login'); }
    get flash()     { return browser.element('#flash'); }
    
    open() {
        super.open('/');
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = LandingPage;