
const User = require('../models/user')

//User login controller
async function userLogin(req,res) {
    res.send({message: 'user login'})
}

//User signup controller
async function userSignup(req,res) {
    const {email, password } = req.body
    try {
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {userLogin, userSignup}