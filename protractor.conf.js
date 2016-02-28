'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

// An example configuration file.
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey:  process.env.SAUCE_ACCESS_KEY,   
    
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.

 //Chrome or FF
 
 capabilities: {
  'browserName':  'chrome'//or 'firefox'
 },
 

 /*
 //IE
 capabilities: {
	'browserName': 'internet explorer',
	'platform': 'ANY',
	'version': '11'
 },
  //for ie
  //you must download latest IE driver from:
  //http://selenium-release.storage.googleapis.com/index.html
  //and place it in here: node_modules/protractor/selenium/
  seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer.exe'], 
*/

 /*
 //multi
 multiCapabilities: [ {
	'browserName': 'internet explorer',
	'platform': 'ANY',
	'version': '11'
 },{
    browserName: 'firefox'
 },{
    browserName: 'chrome'
 }],
*/

/* 
 //phantomjs
 capabilities: {
    'browserName': 'phantomjs',

     
    // Can be used to specify the phantomjs binary path.
    // This can generally be ommitted if you installed phantomjs globally.
    
    'phantomjs.binary.path': require('phantomjs').path,

    
    // Command line args to pass to ghostdriver, phantomjs's browser driver.
    // See https://github.com/detro/ghostdriver#faq
    
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  
  */
  baseUrl: 'http://localhost:3000',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [paths.e2e + '/**/*.js'],
  

  // Options to be passed to Jasmine-node.
  
  suites: {
    homepage: 'e2e/main.spec.js',
    aboutpage: ['e2e/about.spec.js']
  },
  
  //for protractor reporter
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'protractortestresults',
        filePrefix: 'xmloutput'
    }));

    var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

    var reporter = new HtmlScreenshotReporter({
    dest: 'screenshots',
    filename: 'my-report.html'
    });
    jasmine.getEnv().addReporter(reporter);
  },
  
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
