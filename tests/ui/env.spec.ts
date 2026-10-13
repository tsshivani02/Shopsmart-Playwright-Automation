import { test, expect } from '../../fixtures/baseFixture';
import { LoginPage } from '../../pages/LoginPage';

test('Verify SauceDemo login page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
});

/* test('Verify user can login', async ({ loginPage, page }) => {
    const username = process.env.TEST_USERNAME;
    const password = process.env.TEST_PASSWORD;

    if (username === undefined || password === undefined) {
        throw new Error('TEST_USERNAME and TEST_PASSWORD must be configured');
    }

    await loginPage.open();
    await loginPage.login(username, password);

    await expect(page).toHaveURL(/inventory.html/);
}); */