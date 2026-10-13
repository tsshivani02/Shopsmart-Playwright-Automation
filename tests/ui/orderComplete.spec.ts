import {test, expect} from '../../fixtures/baseFixture';
import {CartPage} from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../../pages/CheckoutCompletePage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Verify if user is able to complete the order', async({inventoryPage, page})=>{
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    const cartPage = new CartPage(page);
    await cartPage.clickCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInformation('Shalini', 'Ajith', '60001');
    await checkoutPage.clickContinue();

    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await checkoutOverviewPage.clickFinish();

    const checkoutCompletePage = new CheckoutCompletePage(page);
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
    await expect(checkoutCompletePage.completeText).toBeVisible();

    const confirmation = await checkoutCompletePage.getCompleteText();
    await checkoutCompletePage.clickBackHome();
    expect(page).toHaveURL(/inventory.html/);

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveCount(0);
})