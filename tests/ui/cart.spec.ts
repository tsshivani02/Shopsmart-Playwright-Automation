import {test, expect} from '../../fixtures/baseFixture';
import {CartPage} from '../../pages/CartPage';

test('Add product to cart and verify cart', async({inventoryPage, page}) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('2');

    //await page.locator('.shopping_cart_link').click();
    await inventoryPage.openCart();

    await expect(page).toHaveURL(/cart/);
})

test("Verify products in cart", async({inventoryPage, page}) =>{
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addProductToCart(productName);

    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    const products = await cartPage.getCartItemNames();
    expect(products).toContain('Sauce Labs Backpack');
})

test("Verify cart price", async({inventoryPage, page}) =>{
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addProductToCart(productName);

    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    const products = await cartPage.getCartItemPrices();
    expect(products).toContain('$29.99');
})

test("Verify product removed from cart", async({inventoryPage, page}) =>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.addProductToCart('Sauce Labs Bike Light');

    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.removeProduct('Sauce Labs Backpack');
    expect(await cartPage.getCartItemCount()).toBe(1);
    expect(await cartPage.getCartItemNames()).toContain('Sauce Labs Bike Light');
})
