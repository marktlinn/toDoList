const express = require('express');
const router = express.Router();

//controller functions

const {userLogin, userSignup} = require('../controllers/userControllers')

//logins
router.post('/login', userLogin)

//signup
router.post('/login', userSignup)

module.exports(router)