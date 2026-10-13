import {test, expect} from '@playwright/test';

test('Verify create user using API', async({request})=>{
    const response = await request.post('https://reqres.in/api/users', { data: {name: "Ajith", job: "Automation Engineer"}} );
    //console.log(response);
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    //console.log(responseBody);
    expect(responseBody.name).toBe('Ajith');
    expect(responseBody.job).toBe('Automation Engineer');
    console.log("ID of User: ", responseBody.id);
})