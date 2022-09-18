const User = require('../models/userModels')
const jwt = require('jsonwebtoken')

function createWebToken(_id){
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}
//User login controller
async function userLogin(req,res) {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)

        const token = createWebToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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

//Follow another user
async function followUser(req,res) {
    if(req.body.userId !== req.params.id){
        console.log('user followed')
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({ $push: { followers: req.body.userId}})
                await currentUser.updateOne({ $push: { following: req.params.id}})
                res.status(200).json('User now followed')
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
    else {
        console.log('User ID: ', req.body.userId)
        res.status(403).json('You can only follow other users')
    }
}
module.exports = {userLogin, userSignup, followUser}