const {signup,login} = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// const express = require('express')

// const router = express.Router();

// router.post('/login',(req,res)=>{
//     res.send('login sucess')
    
// })



//mean that-- if , req valid hogi, tabhi signup controller par jaega   
router.post('/signup', signupValidation , signup)
router.post('/login', loginValidation , login)

module.exports = router; 