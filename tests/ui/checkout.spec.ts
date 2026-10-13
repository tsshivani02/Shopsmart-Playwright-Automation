import {test, expect} from '../../fixtures/baseFixture';
import {CartPage} from '../../pages/CartPage';
import {CheckoutPage} from '../../pages/CheckoutPage';

import checkoutData from '../../test-data/checkoutData.json';

/*test('Verify user can checkout sccessfully using JSON', async({ inventoryPage, page}) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();
    
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation(checkoutData.validUser.firstName, checkoutData.validUser.lastName, checkoutData.validUser.postalCode);
    await checkoutPage.clickContinue();
    
    expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
})
*/
for(const data of checkoutData.checkoutScenarios){
    test(`Verify ${data.testName}`, async({ inventoryPage, page}) =>{
        await inventoryPage.addProductToCart('Sauce Labs Backpack');
        await inventoryPage.openCart();

        const cartPage = new CartPage(page);
        await cartPage.clickCheckout();
    
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.enterCheckoutInformation(data.firstName, data.lastName, data.postalCode);
        await checkoutPage.clickContinue();

        await expect(checkoutPage.errorMessage).toHaveText(data.expectedError);
    })
}

test('Verify cancel button is navigated to cart page', async({ inventoryPage, page}) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();
    
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickCancel();

    await expect(page).toHaveURL(/cart.html/);
})