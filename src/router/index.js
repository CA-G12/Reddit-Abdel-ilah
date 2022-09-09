const router = require('express').Router();
const { getPost, signupController, loginController } = require('../controllers');

const {bcrypting, compare} = require("../util/hashing");

router.get('/post', getPost);
router.post('/signup', bcrypting ,signupController)
router.post('/loginup',compare,loginController)

module.exports = router ;