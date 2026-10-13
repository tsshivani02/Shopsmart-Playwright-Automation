//Data Driven test using simple array concept
import {test, expect} from '../../fixtures/baseFixture';
import {LoginPage} from '../../pages/LoginPage';

test.describe('Data Driven test using Array for Login test', ()=>{
    const loginData = [
        {
            username: 'standard_user',
            password: 'secret_sauce',
            expectedResult: 'success'
        },
        {
            username: 'locked_out_user',
            password: 'secret_sauce',
            expectedResult: 'failure'
        }
    ];

    for (const data of loginData){
        test(`Login test for ${data.username}`, async({loginPage, page})=>{
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
})
