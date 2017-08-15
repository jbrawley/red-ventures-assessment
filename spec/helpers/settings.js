/*
1. Set up WebdriverIO for all tests,opens browser (configured by the browserName option) window and navigates to the page, defined in the baseUrl option
2. Extends wait time for assertions in the tests, before marking it as failed on timeout 
3. Makes webdriverio client instance available in any test through the this.client member (where this means the test instance)
*/


var webdriverio = require('webdriverio');

var timeout = 10 * 1000;
var config = {
  "desiredCapabilities": {
    "browserName": "chrome",
    "host": "localhost",
    "port": 9876
  },
  "baseUrl": "http://www.directspecials.com"
};

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2 * timeout;

beforeAll(function (done) {
    this.client = webdriverio
        .remote(config)
        .init()
        .url('/')
        .call(done);
});

afterAll(function (done) {
    this.client.end(done);
});

exports.webdriverio = webdriverio;
exports.config = config;
exports.timeout = timeout;
exports.baseUrl = config.baseUrl;
