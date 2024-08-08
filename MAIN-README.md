# Login/signup MERN Stack Application (Authentication with jwt token)


## Backend

## Path: /signup
- Method : POST
- Body : {name: "abc" , email: "abc@gmail.com" , password: "1234:}
- #### Response : 
- Server Error : 500
- User Already exists : 409
- Success : 201


## Path: /login
- Method: POST
- Body : { email: "abc@gmail.com" , password: "12345"}
- #### Response : 
- Server Error : 500
- User does not exits: 401
- Success : 201


### server side  validation using JOI library


## Middleware to intercept JWT token

- check whether it is valid jwt or not
- header : {
    authorization : jwtToken,
    /product GET,
    [
        {name: "mobile", price: 10000},
        {
            name: "watch" , price: 5000
        }
    ]
}



# frontend

#### Routing 
- private Routing 

#### Login Page
- client side validation
- login a intergration than store JWT token
 
#### Signup page
- client side validation
- signup api integration

#### Home page
- show logged  in username
- show logout button
- call authenticated / product api to demonstrate how you can use jwt token for subsequent api calls. 






# next task
- implement otp based othentication with mobile & email 
- implement email clicked authentication 

