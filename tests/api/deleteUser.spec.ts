import {test, expect} from '@playwright/test';

test('Verify create user using API', async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/2');
    //console.log(response);
    expect(response.status()).toBe(204);

})