
const User = require('../models/user')
const jwt = require('jsonwebtoken')

function createWebToken(_id){
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
//User login controller
async function userLogin(req,res) {
    res.send({message: 'user login'})
}

//User signup controller
async function userSignup(req,res) {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)

        const token = createWebToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {userLogin, userSignup}