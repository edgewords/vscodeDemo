const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver'); 

async function syncExample () {
    
    let driver = await new Builder().forBrowser('chrome').build();

    //await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT } );      

    await driver.get('https://www.edgewordstraining.co.uk/demo-site/');

    await driver.findElement(By.id('woocommerce-product-search-field-0')).click();
    await driver.findElement(By.id('woocommerce-product-search-field-0')).clear();
    await driver.findElement(By.id('woocommerce-product-search-field-0')).sendKeys('cap', Key.RETURN);
    await driver.findElement(By.name('add-to-cart')).click();
    await driver.findElement(By.linkText('Cart')).click();
    await driver.findElement(By.linkText('×')).click();

    // synchronisation
    const element = await driver.wait(until.elementLocated(By.xpath('//*[@id="post-5"]/div/div[2]/p[2]/a')), 15000, 'Element did not appear after waiting for 15s');
    await driver.findElement(By.linkText('Return to shop')).click();
    await driver.findElement(By.linkText('Home')).click();
    await driver.quit();
}
syncExample();