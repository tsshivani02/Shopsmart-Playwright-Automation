import {Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';
import {logger} from '../logs/logger';

export class LoginPage extends BasePage {
    
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        super(page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }
    
    async open() {
        logger.info('Navigating to login page');
        await this.navigate('/');
    }

    async login(user: string, pass: string) {
        logger.info('Filling username');
        await this.username.fill(user);
        logger.info('Filling password');
        await this.password.fill(pass);
        logger.info('Clicking login button');
        await this.loginButton.click();
    }

    async getErrorMessage(){
        logger.info('Retrieving error message');
        return await this.errorMessage.textContent();
    }
}
