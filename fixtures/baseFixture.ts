//baseFixture.ts is a central file that prepares reusable objects and application states for your Playwright tests, so you don't have to repeat setup code in every test.
import {test as base} from '@playwright/test'; //renaming test as base to extend with our custom fixtures

import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';

import users from '../test-data/users.json';

type MyFixtures = { //custom fixtures
    inventoryPage: InventoryPage; //inventory page is a fixture of type InventoryPage
    cartPage: CartPage;
    loginPage: LoginPage;
}

export const test = base.extend<MyFixtures> ({ //extending base test with our custom fixtures
    loginPage: async ({page}, use) =>{ //creating objects for each fixture and using them in the tests
        const loginPage = new LoginPage(page);
        await use(loginPage); //use will give the object to your test
    },
    
    inventoryPage: async ({page}, use) =>{
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        
        await loginPage.open();
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await use(inventoryPage);
    },

    cartPage: async({page}, use) =>{
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);

        await loginPage.open();
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await page.locator('.shopping_cart_link').click();
        await use(cartPage);
    }
})

export {expect} from '@playwright/test';