const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function main() {
        var driver = await new Builder()
                .forBrowser('chrome')
                .build();

        await driver.manage()
                .setTimeouts({
                        implicit: 20000,
                        pageLoad: 60000,
                        script: 20000
                });

        await driver.get('https://www.edgewordstraining.co.uk/demo-site/');

        await driver.findElement(By.id('woocommerce-product-search-field-0')).click();
        await driver.findElement(By.id('woocommerce-product-search-field-0')).clear();
        await driver.findElement(By.id('woocommerce-product-search-field-0')).sendKeys('cap', Key.RETURN);

        await driver.findElement(By.name('add-to-cart')).click();
        await driver.findElement(By.linkText('Cart')).click();
        await driver.findElement(By.linkText('×')).click();

        await driver.findElement(By.linkText('Return to shop')).click();
        await driver.findElement(By.linkText('Home')).click();

        await driver.quit();
}
main();