const express = require('express');
const router = express.Router();

//controller functions
const {userLogin, userSignup} = require('../controllers/userControllers');

//logins
router.post('/login', userLogin);

//signup
router.post('/signup', userSignup);

module.exports = router