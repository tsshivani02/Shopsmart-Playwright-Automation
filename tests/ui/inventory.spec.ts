import {test, expect} from '../../fixtures/baseFixture';
import users from '../../test-data/users.json';
import {LoginPage} from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';

test("Verify product page after login", async({inventoryPage}) =>{
    expect(await inventoryPage.getPageTitle()).toBe("Products");
})

test("verify number of products", async({inventoryPage}) =>{
    expect(await inventoryPage.getProductCount()).toBeGreaterThan(3);
})

test("Print product names", async({inventoryPage}) =>{
    const products = await inventoryPage.getAllProductNames();
    console.log(products);
})

test("print product prices", async({inventoryPage}) =>{
    const productprices = await inventoryPage.getAllProductPrices();
    console.log(productprices);
})
