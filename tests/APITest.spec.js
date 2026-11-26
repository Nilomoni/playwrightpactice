const{test, expect}= require('@playwright/test')

var userid;

//for API testing we need ({request}) fixture in place of ({page}) fixture

test('Get users', async ({request})=>
{
    const response = await request.get("https://reqres.in/api/users?page=2") //send the requst
    console.log(await response.json());//will print the response in json fromat
    expect(response.status()).toBe(200); 
});

test ('Create users', async ({request})=>
{ 
    //Post -- Create a user along with Body also

    //2 parameters - url and data
    //send the requst
    const response = await request.post("https://reqres.in/api/users", 
        {data:{"name" :"Nilomoni",
                "job" : "QA Engineer"
            },
            headers:{
                "Accept":"application/json"
            }

        }); 
        console.log(await response.json());
        expect(response.status()).toBe(201);//for post the code is 201

       //capture the newly created user id from the response
        const res= await response.json();
        const userid= res.id

});


test('Update users', async ({request})=>
{
    //Put
  const response = await request.put("https://reqres.in/api/users/"+userid, 
        {data:{"name" :"Nilomoni",
                "job" : "Lead QA"
            },
            headers:{
                "Accept":"application/json"
            }

        }); 
        console.log(await response.json());
        expect(response.status()).toBe(200);//for put the code is 200

});

test('Delete users', async ({request})=>
{
    const response = await request.delete("https://reqres.in/api/users/"+userid)
      expect(response.status()).toBe(204); //for delete it's 204
});