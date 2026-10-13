import {test, expect} from '../../fixtures/baseFixture';
import {LoginPage} from '../../pages/LoginPage';
import users from '../../test-data/users.json';

test('Verify login page is displayed', async ({ loginPage }) => {
    await loginPage.open();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

});

test("Valid user", async ({loginPage, page}) => {
    await loginPage.open();
    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
})

test("Locked user should not login", async ({loginPage, page}) => {
    await loginPage.open();
    await loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
    );

    await expect(page).not.toHaveURL(/inventory/);

    expect(await loginPage.getErrorMessage()).toContain('Sorry, this user has been locked out.');
})
