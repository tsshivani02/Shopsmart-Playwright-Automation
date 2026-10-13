import {test, expect} from '../../fixtures/baseFixture';
import {CartPage} from '../../pages/CartPage';
import {CheckoutPage} from '../../pages/CheckoutPage';
import {CheckoutOverviewPage} from '../../pages/CheckoutOverviewPage';

test('Verify selected products appears in Overview page', async({ inventoryPage, page }) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const products = await checkoutOverviewPage.getProductNames();
    expect(products).toContain('Sauce Labs Backpack');
    expect(products).toContain('Sauce Labs Bike Light');
})

test('Verify payment information is displayed correctly', async({ inventoryPage, page }) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const paymentInfo = await checkoutOverviewPage.getPaymentInformation();
    expect(paymentInfo).not.toBeNull();
    expect(paymentInfo?.trim()).not.toBe('');
})

test('Verify shipping information is displayed correctly', async({ inventoryPage, page }) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const shippingInfo = await checkoutOverviewPage.getShippingInformation();
    expect(shippingInfo).not.toBeNull();
    expect(shippingInfo?.trim()).not.toBe('');
})

test('Verify item total, tax, final total is displayed correctly', async({ inventoryPage, page }) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const itemtotal = await checkoutOverviewPage.getItemTotal();
    const tax = await checkoutOverviewPage.getTax();
    const total = await checkoutOverviewPage.getTotal();
    expect(itemtotal).not.toBeNull();
    expect(tax).not.toBeNull();
    expect(total).not.toBeNull();
})

test('Verify cancel button goes back to cart page', async({ inventoryPage, page }) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const cancel = await checkoutOverviewPage.clickCancel();
    expect(page).toHaveURL(/inventory.html/)
   
})