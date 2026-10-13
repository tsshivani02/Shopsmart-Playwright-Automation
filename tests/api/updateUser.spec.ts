import {test, expect} from '@playwright/test';

test('Verify create user using API', async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2', { data: {name: "Ajith", job: "Senior Automation Engineer"}} );
    //console.log(response);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    //console.log(responseBody);
    expect(responseBody.name).toBe('Ajith');
    expect(responseBody.job).toBe('Senior Automation Engineer');
    console.log("ID of User: ", responseBody.id);
})