const{test, expect}= require('@playwright/test')

//by default timeout is 30 sec

test('check API health', async ({request})=>
{

    test.setTimeout(0)

    while(true)
    {
      const response = await request.get("https://reqres.in/api/users?page=2")
      console.log(await response.json());//will print the response in json fromat
      expect(response.status()).toBe(200);

    }



});