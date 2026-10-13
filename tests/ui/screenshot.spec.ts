import {test, expect} from '../../fixtures/baseFixture';

test('take screenshot', async({loginPage, page})=>{
    /* await page.goto('https://www.saucedemo.com/');
    //fullPage: true - This tells Playwright to capture the complete scrollable page.
    await page.screenshot({path: 'screenshots/login-page.png', fullPage: true}); 

    //This captures the visible viewport
    await page.screenshot({path: 'screenshots/login-page.png'});  */

    /* //To capture a specific element
    const product = page.locator('.inventory_item').first();
    await product.screenshot({path: 'screenshots/product.png'}); */

    //To capture a particular action
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce')
    await page.screenshot({path: 'screenshots/after-login.jpg', fullPage: true});

/*Screenshot - "What did it look like?"
Video - "What happened?"
Trace - "Why did it happen?" */
})