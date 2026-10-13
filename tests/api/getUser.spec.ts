import {test, expect} from '@playwright/test';

test('Verify GET user API', async({request})=>{  //request is a built-in fixture like page provided by playwright
    const response = await request.get('https://reqres.in/api/users/2');

    console.log('Status code: ', response.status());
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');
})