const express=require('express');
const { signup, login, givetoken, getUserByDays } = require('../controllers/auth.controller');
const router=express.Router();
const passport=require('../utils/passport')



// router.route('/login').post(login);
router.post('/login',passport.authenticate('local',{ session: false, failureMessage: true}), givetoken );
router.route('/signup').post(signup);
router.route('/').get(getUserByDays)

module.exports=router