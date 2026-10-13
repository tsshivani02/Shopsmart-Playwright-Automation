import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CartPage extends BasePage{
    readonly cartItems: Locator;
    readonly cartItemNames: Locator;
    readonly cartItemPrices: Locator;
    readonly removeButtons: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page){
        super(page);
        this.cartItems = page.locator('.cart_item');
        this.cartItemNames = page.locator('.inventory_item_name');
        this.cartItemPrices = page.locator('.inventory_item_price');
        this.removeButtons = page.getByRole('button', {name: /Remove/i});
        this.checkoutButton = page.getByRole('button', {name: /Checkout/i});
        this.continueShoppingButton = page.getByRole('button', {name: /Continue Shopping/i});
    }

    async getCartItemCount(){
        return await this.cartItems.count();
    }

    async getCartItemNames(){
        return await this.cartItemNames.allTextContents();
    }

    async getCartItemPrices(){
        return await this.cartItemPrices.allTextContents();
    }

    async removeProduct(productName: string){
        const product = this.cartItems.filter({hasText: productName});
        await product.getByRole('button', {name: /Remove/i}).click();
    }

    async clickCheckout(){
        await this.checkoutButton.click();
    }

    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }
    
}