const User = require('../models/user')

//User login controller
async function userLogin(req,res) {
    res.send({message: 'user login'})
}

//User signup controller
async function userSignup(req,res) {
    res.send({message: 'user sign-up'})
}

module.exports = {userLogin, userSignup}