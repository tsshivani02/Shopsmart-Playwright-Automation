import {Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class CheckoutCompletePage extends BasePage{
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page){
        super(page);
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('[data-test="complete-text"]');
        this.backHomeButton = page.locator('#back-to-products');
    }

    async getCompleteHeader(){
        return await this.completeHeader.textContent();
    }

    async getCompleteText(){
        return await this.completeText.textContent();
    }

    async clickBackHome(){
        await this.backHomeButton.click();
    }
}