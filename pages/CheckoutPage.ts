import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage{
    readonly firstNameInput: Locator;
    readonly secondNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly cancelButton: Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        super(page);
        this.firstNameInput = page.locator('#first-name');
        this.secondNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.cancelButton = page.locator('#cancel');
        this.continueButton = page.locator('#continue');
        this.errorMessage = page.locator('.error-message-container');
    }

    async enterCheckoutInformation(firstname: string, lastname: string, postalcode: string){
        await this.firstNameInput.fill(firstname);
        await this.secondNameInput.fill(lastname);
        await this.postalCodeInput.fill(postalcode);
    }

    async clickContinue(){
        await this.continueButton.click();
    }

    async clickCancel(){
        await this.cancelButton.click();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
}