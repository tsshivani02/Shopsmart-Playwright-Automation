import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CheckoutOverviewPage extends BasePage{
    readonly productNames: Locator;
    readonly productPrices: Locator;
    readonly paymentInformation: Locator;
    readonly shippingInformation: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page){
        super(page);
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.paymentInformation = page.locator('[data-test="payment-info-label"]');
        this.shippingInformation = page.locator('[data-test="shipping-info-label"]');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('#finish'); //or this.finishButton=page.getByRole('button',{name: 'Finish'});
        this.cancelButton = page.locator('#cancel');
    }

    async getProductNames(){
        return await this.productNames.allTextContents();
    }

    async getProductPrice(){
        return await this.productPrices.allTextContents();
    }

    async getPaymentInformation(){
        return await this.paymentInformation.textContent();
    }

    async getShippingInformation(){
        return await this.shippingInformation.textContent();
    }

    async getItemTotal(){
        return await this.itemTotal.textContent();
    }

    async getTax(){
        return await this.tax.textContent();
    }

    async getTotal(){
        return await this.total.textContent();
    }

    async clickFinish(){
        await this.finishButton.click();
    }

    async clickCancel(){
        await this.cancelButton.click();
    }
}

