const {Builder, By, Key, until} = require('selenium-webdriver');
require('geckodriver'); 

var driver = new Builder()
        .forBrowser('firefox')
        .build();


driver.get('https://www.edgewordstraining.co.uk/demo-site/');


