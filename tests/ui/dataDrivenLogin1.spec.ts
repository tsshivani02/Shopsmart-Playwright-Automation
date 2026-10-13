//Data Driven test using JSON concept
import {test, expect} from '../../fixtures/baseFixture';
import {LoginPage} from '../../pages/LoginPage';

import loginData from '../../test-data/loginData.json';

for(const data of loginData){
    test(`Verify ${data.testCase}`, async({loginPage, page})=>{
        await loginPage.open();
        await loginPage.login(data.username, data.password);

        if(data.expectedResult === 'success'){
            await expect(page).toHaveURL(/inventory.html/);
        }
        else{
            await expect(loginPage.errorMessage).toHaveText(data.expectedMessage);
        }
    })
}