const router = require('express').Router();
const { getPost, signupController, loginController, checkLoginController, logout, addPost } = require('../controllers');

const {bcrypting, compare} = require("../util/hashing");

router.get('/post', getPost);
router.post('/signup', bcrypting ,signupController)
router.post('/loginup',compare,loginController)
router.get('/checkLogin', checkLoginController)
router.get('/logout', logout)
router.post('/addPost',addPost)
module.exports = router ;