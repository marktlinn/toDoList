const express = require('express');
const router = express.Router();

//controller functions
const {userLogin, userSignup, followUser, unfollowUser} = require('../controllers/userControllers');

//logins
router.post('/login', userLogin);

//signup
router.post('/signup', userSignup);

//follow another user
router.put('/:id/follow', followUser)

//unfollow another user
router.put('/:id/unfollow', unfollowUser)
module.exports = router