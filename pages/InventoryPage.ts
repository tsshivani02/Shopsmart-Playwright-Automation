import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class InventoryPage extends BasePage{
    readonly pageTitle: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly addToCartButtons: Locator;
    readonly shoppingCart: Locator;

    constructor(page: Page){
        super(page);
        this.pageTitle = page.locator('.title');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.addToCartButtons = page.locator('.btn_inventory');
        this.shoppingCart = page.locator('.shopping_cart_link');
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async getProductCount() {
        return await this.productNames.count();
    }

    async getAllProductNames() {
        return await this.productNames.allTextContents();
    }

    async getAllProductPrices() {
        return await this.productPrices.allTextContents();
    }

    async addProductToCart(productName: string){
        const product = this.page.locator('.inventory_item').filter({hasText: productName});
        await product.locator('button').click();
    }

    async openCart(){
        await this.shoppingCart.click();
    }

}