var express = require('express');
var router = express.Router();

const {getUserLogin,getUserSignup, createNewUser, doUserLogin, getHomePage} = require("../controllers/user-controller")

/* GET home page. */
router.get('/',getHomePage);

router.route('/login').get(getUserLogin).post(doUserLogin)
router.route('/signup').get(getUserSignup).post(createNewUser)

module.exports = router;
