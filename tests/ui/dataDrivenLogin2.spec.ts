//Data driven test using EXCEL
import {test, expect} from '../../fixtures/baseFixture';
import {BasePage} from '../../pages/BasePage';
import {LoginPage} from '../../pages/LoginPage';
import { readExcelData } from '../../utils/excelUtils';

const loginData = readExcelData('./test-data/loginData.xlsx','LoginData');

for(const data of loginData as any[]){
    test(`Verify ${data.testcase}`, async({loginPage, page})=>{
        await loginPage.open();
        await loginPage.login(data.username, data.password);

        if(data.expectedResult === 'success'){
            await expect(page).toHaveURL(/inventory.html/);
        }
        else{
            await expect(loginPage.errorMessage).toBeVisible();
        }
    })
}