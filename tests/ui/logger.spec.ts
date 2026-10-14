import { test, expect } from '@playwright/test';
import { logger } from '../../logs/logger';

test('Login test', async ({ page }) => {

    logger.info('Test started');
    await page.goto('https://www.saucedemo.com/');
    logger.info('Application opened');

    await page.locator('#user-name').fill('standard_user');
    logger.info('Username entered');

    await page.locator('#password').fill('secret_sauce');
    logger.info('Password entered');

    await page.locator('#login-button').click();
    logger.info('Login button clicked');

    await expect(page).toHaveURL(/inventory.html/);
    logger.info('Login successful');
});

//Logging tells us what happened.
//Error handling determines how our code responds when something goes wrong.
/* test('Login button click with error handling', async ({ page }) => {
    try {
        await page.locator('#login-button').click();
    }
    catch (error) {
        logger.error(`Login button click failed: ${error}`);
        throw error;
    }
}); */